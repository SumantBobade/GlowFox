import { generateChatResponse } from "../services/groqService.js";

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const reply = await generateChatResponse(message);

    res.json({ reply });
  } catch (error) {
    console.error("Chatbot Error:", error);

    res.status(500).json({
      error: "Something went wrong",
    });
  }
};