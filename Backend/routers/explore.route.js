import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/explore", protect, (req, res) => {
  res.json({ message: "Protected game data" });
});

export default router;
