import React, { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function CreateGame() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    try {
      setLoading(true);

      await api.post("/games", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Game created successfully!");
      navigate("/explore");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create game");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-20">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 border border-gray-800 p-8 rounded-xl w-full max-w-lg shadow-xl"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Create <span className="text-orange-500">Game</span>
        </h1>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm mb-2 text-gray-300">
            Game Title
          </label>
          <input
            type="text"
            className="w-full p-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-orange-500"
            placeholder="Enter game title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm mb-2 text-gray-300">
            Description
          </label>
          <textarea
            rows="4"
            className="w-full p-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-orange-500"
            placeholder="Describe your game idea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Image */}
        <div className="mb-6">
          <label className="block text-sm mb-2 text-gray-300">
            Game Image
          </label>
          <input
            type="file"
            accept="image/*"
            className="text-sm text-gray-300"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-black py-2 rounded font-semibold hover:bg-orange-400 transition disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Game"}
        </button>
      </form>
    </div>
  );
}

export default CreateGame;
