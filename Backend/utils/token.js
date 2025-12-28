import jwt from "jsonwebtoken";
import "dotenv/config";

export const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: 3 * 24 * 60 * 60, // 3 days
  });
};


