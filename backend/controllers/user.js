import bcrypt from "bcrypt";
import { User } from "../models/user.js";
import { Chat } from "../models/chat.js";
import { setTokenCookie } from "../utilities/tokenUtils.js";
import mongoose from "mongoose";
export const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are Compulsory" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    setTokenCookie(newUser, res).status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are Compulsory" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    setTokenCookie(user, res)
      .status(200)
      .json({ success: true, httpOnly: true, message: "Welcome back" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const userProfile = async (req, res) => {
  const userId = req.user;
  const user = await User.findById(userId).select("-password -__v");
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user);
};

export const checkAuth = (req, res) => {
  if (req.cookies.token) {
    // Token exists; user is authenticated
    res.status(200).json({ isAuthenticated: true });
  } else {
    // Token does not exist; user is not authenticated
    res.status(200).json({ isAuthenticated: false });
  }
};
export const userLogout = (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logout successful" });
};

export const getAllUsers = async (req, res) => {
  try {
    const userId = req.user;
    const users = await User.find({ _id: { $ne: userId } }); // Fetch all users with their usernames
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
};
export const userUpdate = async (req, res) => {
  try {
    const { username } = req.body;
    const userId = req.user;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        username,
      },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return the updated user
    return res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error while updating user:", error);
    return res.status(500).json({ error: "Error while updating user" });
  }
};

export const newGroup = async (req, res) => {
  const { groupName, members } = req.body; // Expect group name, members, and adminId in the body
  const userId = req.user;
  // Check if groupName and members are provided
  if (!groupName || members.length < 2) {
    return res.status(400).json({
      success: false,
      message: "Group name and at least 2 members are required.",
    });
  }

  try {
    const updatedMembers = [...members, userId];
    // Create the group chat
    const newGroupChat = new Chat({
      userIds: updatedMembers,
      groupName,
      isGroupChat: true,
      adminId: userId,
    });

    // Save the group chat to the database
    const savedGroupChat = await newGroupChat.save();

    res.status(201).json({
      success: true,
      groupChat: savedGroupChat,
    });
  } catch (error) {
    console.error("Error creating group:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
export const userGroups = async (req, res) => {
  try {
    const userId = req.user; // Assuming req.user contains the logged-in user's info

    // Ensure userId is casted to a MongoDB ObjectId (if not already)
    const objectIdUserId = new mongoose.Types.ObjectId(userId);

    // Fetch all chats where the logged-in user is a participant
    const chats = await Chat.find({ userIds: objectIdUserId })
      .populate("userIds", "username email") // Populate user data for group members
      .populate("adminId", "username email"); // Populate user data for group admin

    // Separate the group and private chats
    const groupChats = chats.filter((chat) => chat.isGroupChat === true);
    const privateChats = chats.filter((chat) => chat.isGroupChat === false);
    // If no group chats are found, return a 404 status for group chats
    if (!groupChats || groupChats.length === 0) {
      console.log("No group chats found for this user."); // Log when no group chats are found
      return res
        .status(404)
        .json({ message: "No group chats found for this user" });
    }

    // If no private chats are found, return a 404 status for private chats
    if (!privateChats || privateChats.length === 0) {
      console.log("No private chats found for this user."); // Log when no private chats are found
      return res
        .status(404)
        .json({ message: "No private chats found for this user" });
    }

    // Combine both the group and private chats in the response
    res.status(200).json(groupChats);
  } catch (error) {
    // Log any errors that occur
    console.error("Error fetching chats:", error);
    res.status(500).json({ message: "Server error" });
  }
};
