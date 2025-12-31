import express from "express";
import Game from "../models/game.model.js";
import { gameDetailsHandler, getMyGames } from "../controllers/game.controller.js";
import multer from "multer";
import userVerification from "../middlewares/authMiddleware.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        // Make it take username and add it to end.
        const uniqueName =file.originalname;
        cb(null, uniqueName);
    }
})

const upload = multer({ storage: storage });

router.get("/", userVerification, async (req, res) => {
    const games = await Game.find();
    res.json(games);
})

router.get("/my-games", userVerification, getMyGames)


router.post("/",upload.single("image"), userVerification ,gameDetailsHandler);

export default router;