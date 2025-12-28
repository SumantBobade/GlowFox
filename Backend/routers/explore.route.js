import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import userVerification from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/explore", userVerification, (req, res) => {
  res.json({ message: "Protected game data" });
});

export default router;
