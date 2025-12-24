import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";

export async function signUpHandler(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: "Enter all details" });

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({ status: "Success", message: "User Created" });
  } catch (err) {
    console.log("Error Occured: " + err);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function loginHandler(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ status: "Fail", message: "User Not Found" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res
        .status(401)
        .json({ status: "Fail", message: "Password Incorrect" });
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;
    await user.save();

    return res
      .cookie("refereshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict"
      })
      .status(200)
      .json({ status: "Success", message: "Login Successful", refreshToken });
  } catch (err) {
    console.log("Error Occured :" + err);
    return res.status(500).json({ message: "Server error" });
  }
}
