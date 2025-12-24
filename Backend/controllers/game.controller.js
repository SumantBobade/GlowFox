import Game from "../models/game.model.js";

export async function gameDetailsHandler(req, res) {
  try {
    const { title, description } = req.body;

    const imageUrl = req.file
      ? `http://localhost:5001/uploads/${req.file.filename}`
      : "http://localhost:5001/images/default_game.png";

    const game = await Game.create({
      title,
      description,
      image: imageUrl,
      createdBy: req.user?.id, // optional auth
    });

    res.status(201).json(game);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
