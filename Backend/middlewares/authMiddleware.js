import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.SECRET, async(err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) return res.json({ status: true, user: user.name });
      else return res.json({ status: false });
    }
  })
}

export default userVerification;
