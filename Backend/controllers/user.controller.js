import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { createSecretToken } from "../utils/token.js";
import {setUser, getUser} from "../services/auth.js";

export async function signUpHandler(req, res, next) {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
    
  } catch (err) {
    console.error(error);
  }
};

export async function loginHandler(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Incorrect password or email" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res
        .status(401)
        .json({message: "Incorrect password or email" });
    }
    
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    })
    res.status(201).json({ message: "User logged in succesfully", success: true });
    next();
  } catch (err) {
    console.error(err);
  }
}

export const getMyProfile = async (req, res) => {
  res.json(req.user);
}

export const updateMyProfile = async (req, res) => {
  const { name, bio } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user._id,
    { name, bio },
    { new: true }
  ).select("-password");

  res.json(user);
};