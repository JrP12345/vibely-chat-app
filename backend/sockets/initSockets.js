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
      const groupChat = await Chat.findById(groupId);

      if (!groupChat) {
        return socket.emit("error", { message: "Group chat not found" });
      }

      if (!groupChat.userIds.includes(userId)) {
        return socket.emit("error", {
          message: "You are not a member of this group",
        });
      }

      socket.join(groupId);
      console.log(`${userId} joined the group chat: ${groupId}`);
      const chatHistoryWithUsernames = await Promise.all(
        groupChat.chatHistory.map(async (message) => {
          const sender = await User.findById(message.senderId);
          return {
            ...message._doc, // Keep the existing message fields
            username: sender ? sender.username : "Unknown", // Add the username
          };
        })
      );
      // Emit the chat history for the user when they join
      socket.emit("loadGroupChatHistory", chatHistoryWithUsernames);
    });

    socket.on("sendGroupMessage", async (message) => {
      try {
        const { groupId, senderId, messageContent, timestamp } = message;
        const groupChat = await Chat.findById(groupId);

        if (!groupChat) {
          // Emit an error event to the client
          return socket.emit("error", {
            status: "error",
            message: "Group chat not found",
          });
        }

        // Add the new message to the chat history
        groupChat.chatHistory.push({
          senderId,
          messageContent,
          timestamp,
        });

        await groupChat.save();
        const sender = await User.findById(senderId);
        if (!sender) {
          return socket.emit("error", { message: "User not found" });
        }
        // Broadcast the message to all members of the group
        socket.to(groupId).emit("receiveGroupMessage", {
          senderId,
          username: sender.username,
          messageContent,
          timestamp,
        });
      } catch (error) {
        console.error("Error sending group message:", error);
        // Emit an error event to the client
        socket.emit("error", {
          status: "error",
          message: "Failed to send message",
        });
      }
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
