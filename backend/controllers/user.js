import bcrypt from "bcrypt";
import { User } from "../models/user.js";
import { setTokenCookie } from "../utilities/tokenUtils.js";
export const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are Compulsory" });
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
