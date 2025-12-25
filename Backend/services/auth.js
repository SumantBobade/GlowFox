import jwt from "jsonwebtoken";

export function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    process.env.SECRET,
    {
      expiresIn: "7d", // recommended
    }
  );
}

export function getUser(token) {
  try {
    if (!token) return null;
    return jwt.verify(token, process.env.SECRET);
  } catch (error) {
    return null; // invalid or expired token
  }
}
