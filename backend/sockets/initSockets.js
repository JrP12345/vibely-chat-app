import { Chat } from "../models/chat.js";
import { User } from "../models/user.js";

export const initSockets = (io) => {
  io.on("connection", (socket) => {
    console.log("User Connected", socket.id);
    let USERID = "";
    socket.on("userJoin", async (userId) => {
      USERID = userId;
      await User.findByIdAndUpdate(userId, { status: "online" });
      console.log(`User ${userId} is now online`);
    });

    const createPrivateRoomId = (userId1, userId2) => {
      // Sort IDs to ensure consistency (user1-user2 or user2-user1)
      return [userId1, userId2].sort().join("-");
    };

    socket.on("joinPrivateChat", async ({ userId1, userId2 }) => {
      const roomId = createPrivateRoomId(userId1, userId2);

      // Join only if not already joined
      socket.join(roomId);
      const chat = await Chat.findOne({
        userIds: { $all: [userId1, userId2] },
      });
      if (chat) {
        socket.emit("loadChatHistory", chat.chatHistory); // Send chat history to client
      }

      console.log(`User ${socket.id} joined private room ${roomId}`);
    });

    // Private chat: Send message and save to DB
    socket.on(
      "sendPrivateMessage",
      async (
        { senderId: userId1, receiverId: userId2, messageContent: message },
        callback
      ) => {
        const roomId = createPrivateRoomId(userId1, userId2);

        // Log the incoming message data for debugging
        console.log("Incoming Message Data:", { userId1, userId2, message });

        try {
          // Check for existing chat
          const existingChat = await Chat.findOne({
            userIds: { $all: [userId1, userId2] },
          });

          const newMessage = {
            senderId: userId1,
            messageContent: message,
            timestamp: new Date(),
            status: "sent",
          };

          if (existingChat) {
            // If chat exists, push the new message into the chatHistory
            existingChat.chatHistory.push(newMessage);
            await existingChat.save();
          } else {
            // If chat does not exist, create a new chat
            const newChat = new Chat({
              userIds: [userId1, userId2],
              chatHistory: [newMessage],
            });
            await newChat.save();
          }

          // Emit message to both users in the chat
          io.to(roomId).emit("receiveMessage", {
            senderId: userId1,
            receiverId: userId2,
            messageContent: message, // Match field name
            timestamp: new Date(),
          });

          console.log(
            `Message from ${userId1} to ${userId2} in room ${roomId}`
          );

          // Acknowledge success back to the sender
          if (callback) callback({ status: "success" });
        } catch (error) {
          console.error("Error sending private message:", error);
          if (callback) callback({ status: "error" });
        }
      }
    );

    socket.on("joinGroupChat", async ({ groupId, userId }) => {
      socket.join(groupId);

      // Find or create group chat
      const groupChat = await Chat.findOne({ _id: groupId, isGroupChat: true });

      if (groupChat) {
        socket.emit("loadGroupChatHistory", groupChat.chatHistory); // Send chat history to client
      }

      console.log(`User ${userId} joined group chat ${groupId}`);
    });

    socket.on("sendGroupMessage", async ({ groupId, senderId, message }) => {
      // Save the group message in the database
      const groupChat = await Chat.findOneAndUpdate(
        { _id: groupId, isGroupChat: true },
        {
          $push: {
            chatHistory: {
              senderId: senderId,
              messageContent: message,
              timestamp: new Date(),
              status: "sent",
            },
          },
        },
        { new: true }
      );

      // Emit the message to all users in the group
      io.to(groupId).emit("receiveGroupMessage", {
        senderId,
        content: message,
        timestamp: new Date(),
      });
      console.log(`Message from ${senderId} to group ${groupId}`);
    });

    socket.on("typing", ({ userId1, userId2 }) => {
      const roomId = createPrivateRoomId(userId1, userId2);
      socket.to(roomId).emit("userTyping", { userId: userId1 });
    });
    // Typing notification for group chats
    socket.on("groupTyping", ({ groupId, userId }) => {
      socket.to(groupId).emit("userTyping", { userId }); // Notify all other users in the group
    });
    socket.on("disconnect", async () => {
      if (USERID) {
        await User.findByIdAndUpdate(USERID, {
          status: "offline",
          lastLoginTime: new Date(), // Set the last login time
        });
        console.log(`User ${userId} is now offline`);
      }
    });
  });
};
