import { Chat } from "../models/chat.js";
import { User } from "../models/user.js";

export const initSockets = (io) => {
  io.on("connection", (socket) => {
    console.log("User Connected", socket.id);
    const USERID = "";
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
    socket.on("sendPrivateMessage", async ({ userId1, userId2, message }) => {
      const roomId = createPrivateRoomId(userId1, userId2);

      // Save message in DB
      const chat = await Chat.findOneAndUpdate(
        { userIds: { $all: [userId1, userId2] } },
        {
          $push: {
            chatHistory: {
              senderId: userId1,
              messageContent: message,
              timestamp: new Date(),
              status: "sent",
            },
          },
        },
        { new: true, upsert: true } // Create chat if it doesn't exist
      );

      // Emit message to both users in the chat
      io.to(roomId).emit("receiveMessage", {
        senderId: userId1,
        receiverId: userId2,
        content: message,
        timestamp: new Date(),
      });
      console.log(`Message from ${userId1} to ${userId2} in room ${roomId}`);
    });
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
    socket.on("disconnection", async () => {
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
