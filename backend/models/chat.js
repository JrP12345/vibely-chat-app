import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    userIds: {
      type: [String], // Array of user IDs
      required: true, // At least two users required for a chat
    },
    chatHistory: [
      {
        senderId: {
          type: String,
          required: true,
        },
        messageContent: {
          type: String,
          required: true,
        },
        timestamp: {
          type: Date,
          default: Date.now, // Automatically sets the current date/time
        },
        status: {
          type: String,
          enum: ["sent", "delivered", "read"], // Message status
          default: "sent",
        },
      },
    ],
    groupName: {
      type: String,
    },
    isGroupChat: {
      type: Boolean,
      default: false, // Indicates whether it's a group chat
    },
    adminId: {
      type: String, // Optional field to store the ID of the group admin
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the model
export const Chat = mongoose.model("Chat", ChatSchema);
