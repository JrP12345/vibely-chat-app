import React, { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import io from "socket.io-client";
import { useAuth } from "../context/AuthContext";

const socket = io("http://localhost:4000"); // Update to your server's URL

const ChatBox = ({ currentChat }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { userId } = useAuth();

  const messagesEndRef = useRef(null); // Ref for scrolling

  useEffect(() => {
    if (currentChat && userId) {
      const otherUserId = currentChat._id !== userId ? currentChat._id : null;

      if (otherUserId) {
        setMessages([]);
        socket.emit("joinPrivateChat", {
          userId1: userId,
          userId2: otherUserId,
        });

        socket.on("receiveMessage", (data) => {
          setMessages((prevMessages) => [...prevMessages, data]);
        });

        socket.on("loadChatHistory", (chatHistory) => {
          setMessages(chatHistory);
        });

        socket.on("error", (error) => {
          console.error("Socket error:", error);
        });
      }
    }

    return () => {
      socket.off("receiveMessage");
      socket.off("loadChatHistory");
      socket.off("error");
    };
  }, [currentChat, userId]);

  // Scroll to the bottom of the messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom(); // Scroll when messages change
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (message.trim()) {
      const newMessage = {
        senderId: userId,
        receiverId: currentChat._id,
        messageContent: message,
        timestamp: new Date().toISOString(),
        status: "sent", // Initial status
      };

      socket.emit("sendPrivateMessage", newMessage, (response) => {
        if (response.status === "success") {
          setMessages((prevMessages) => {
            const updatedMessages = [...prevMessages];
            const index = updatedMessages.findIndex(
              (msg) => msg.timestamp === newMessage.timestamp
            );
            if (index !== -1) {
              updatedMessages[index].status = "delivered"; // Update status to delivered
            }
            return updatedMessages;
          });
        } else {
          console.error("Message failed to send");
          setMessages((prevMessages) =>
            prevMessages.filter((msg) => msg.timestamp !== newMessage.timestamp)
          );
        }
      });

      setMessage("");
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="flex flex-col h-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg) => (
          <div
            key={msg.timestamp}
            className={`my-2 flex ${
              msg.senderId === userId ? "justify-end" : "justify-start"
            } animate-fadeIn`} // Apply fade-in animation
          >
            <div
              className={`inline-block p-3 rounded-lg shadow-md transition duration-300 ease-in-out ${
                msg.senderId === userId
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {msg.messageContent}
              <small
                className={`text-gray-400 text-sm mt-1 ml-2 ${
                  msg.senderId === userId ? "text-right" : "text-left"
                }`}
              >
                {formatTime(msg.timestamp)}
              </small>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSendMessage}
        className="flex p-2 bg-gray-800 border-t border-gray-700"
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 bg-gray-700 text-gray-300 border-none rounded-sm focus:outline-none"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-sm ml-2 transition duration-300 hover:bg-blue-600"
        >
          <IoSend />
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
