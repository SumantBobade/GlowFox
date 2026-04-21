import express from "express";
import multer from "multer";
import path from "path";
import Game from "../models/game.model.js";
import userVerification from "../middlewares/authMiddleware.js";
import {
  gameDetailsHandler,
  updateGame,
  deleteGame
} from "../controllers/game.controller.js";

const router = express.Router();

/* =========================
   Multer Configuration
========================= */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

/* =========================
   Routes
========================= */

// PUBLIC – Explore Games
router.get("/", async (req, res) => {
  const games = await Game.find().sort({ createdAt: -1 });
  res.json(games);
});

// PROTECTED – My Games
router.get("/my-games", userVerification, async (req, res) => {
  const games = await Game.find({ createdBy: req.user._id });
  res.json(games);
});

// CREATE GAME
router.post(
  "/",
  userVerification,
  upload.single("image"),
  gameDetailsHandler
);

// UPDATE GAME
router.put("/:id", userVerification, updateGame);

// DELETE GAME
router.delete("/:id", userVerification, deleteGame);

export default router;
