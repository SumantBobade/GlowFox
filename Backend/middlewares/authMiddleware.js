import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.SECRET);

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;   // attach authenticated user
    return next();     // allow request to continue
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default userVerification;
