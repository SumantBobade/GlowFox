import Game from "../models/game.model.js";

/* =========================
   CREATE GAME
========================= */
export async function gameDetailsHandler(req, res) {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required",
      });
    }

    const imageUrl = req.file
      ? `${process.env.BASE_URL}/uploads/${req.file.filename}`
      : `${process.env.BASE_URL}/images/default_game.png`;

    const game = await Game.create({
      title,
      description,
      image: imageUrl,
      createdBy: req.user._id,
    });

    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/* =========================
   GET ALL GAMES (Explore)
========================= */
export const getAllGames = async (req, res) => {
  try {
    const games = await Game.find()
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   GET MY GAMES
========================= */
export const getMyGames = async (req, res) => {
  try {
    const games = await Game.find({ createdBy: req.user._id }).sort({
      createdAt: -1,
    });

    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   UPDATE GAME (Owner Only)
========================= */
export const updateGame = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    if (game.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    game.title = req.body.title || game.title;
    game.description = req.body.description || game.description;

    if (req.file) {
      game.image = `${process.env.BASE_URL}/uploads/${req.file.filename}`;
    }

    const updatedGame = await game.save();
    res.json(updatedGame);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   DELETE GAME (Owner Only)
========================= */
export const deleteGame = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    if (game.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await game.deleteOne();
    res.json({ message: "Game deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
