import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true, // Ensures username is unique
      trim: true, // Removes extra spaces
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true, // Ensures email is unique
      lowercase: true, // Ensures email is saved in lowercase
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"], // Regex for valid email
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    lastLoginTime: {
      type: Date, // Use Date type for login timestamps
    },
    status: {
      type: String,
      enum: ["online", "offline"],
      default: "offline", // Default status to offline
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

export const User = mongoose.model("User", UserSchema);
