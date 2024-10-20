import React, { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import io from "socket.io-client"; // Import should be at the top level
import { useAuth } from "../context/AuthContext";

const socket = io("https://vibely-chat-app-ytuu.onrender.com"); // Update to your server's URL

const ChatBox = ({ currentChat }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { userId } = useAuth();
  const messagesEndRef = useRef(null); // Ref for scrolling

  useEffect(() => {
    if (currentChat && userId) {
      setMessages([]); // Clear messages when switching chats

      // Check if it's a group chat or private chat
      if (currentChat.isGroupChat) {
        // Group chat logic
        socket.emit("joinGroupChat", { groupId: currentChat._id, userId });

        socket.on("receiveGroupMessage", (data) => {
          setMessages((prevMessages) => [...prevMessages, data]);
        });

        socket.on("loadGroupChatHistory", (chatHistory) => {
          setMessages(chatHistory);
        });
      } else {
        // Private chat logic
        const otherUserId = currentChat._id !== userId ? currentChat._id : null;

        if (otherUserId) {
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
        } else {
          console.error("No valid other user found in the chat");
        }
      }

      socket.on("error", (error) => {
        console.error("Socket error:", error);
      });
    } else {
      console.error("No current chat or user ID found");
    }

    return () => {
      // Clean up all listeners
      socket.off("receiveMessage");
      socket.off("loadChatHistory");
      socket.off("receiveGroupMessage");
      socket.off("loadGroupChatHistory");
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

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (message.trim()) {
      const newMessage = {
        senderId: userId,
        messageContent: message,
        timestamp: new Date().toISOString(),
        status: "sent", // Initial status
      };

      if (currentChat.isGroupChat) {
        newMessage.groupId = currentChat._id; // Include groupId for group messages
        socket.emit("sendGroupMessage", newMessage);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      } else {
        newMessage.receiverId = currentChat._id; // For private messages
        socket.emit("sendPrivateMessage", newMessage);
      }

      setMessage(""); // Clear the input field after sending
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
            }`}
          >
            <div
              className={`inline-block p-3 rounded-lg shadow-md transition duration-300 ease-in-out ${
                msg.senderId === userId
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {currentChat.isGroupChat && (
                <div className="font-bold text-sm text-gray-400 mb-1">
                  {msg.senderId === userId ? "You" : msg.username}
                </div>
              )}
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
          onChange={handleInputChange}
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
