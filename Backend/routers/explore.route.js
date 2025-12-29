import express from "express";
import userVerification from "../middlewares/authMiddleware.js";
import Game from "../models/game.model.js";

const router = express.Router();

router.get("/", userVerification, async (req, res) => {
  try {
    const games = await Game.find({});
    return res.status(200).json(games);
  } catch (error) {
    console.error("Failed to fetch games:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
