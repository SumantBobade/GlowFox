import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import api from "../services/api"

function ExploreGame() {
  const [games, setGames] = useState([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await api.get("/games");
        setGames(res.data);
      } catch (err) {
        setError("Failed to load games");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-gray-400 flex items-center justify-center">
        Loading games…
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-red-500 flex items-center justify-center">
        {error}
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-12">
          Explore <span className="text-orange-500">Games</span>
        </h1>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {games.map((game) => (
            <div
              key={game._id}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-orange-500 transition"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-orange-500">
                  {game.title}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-3">
                  {game.description}
                </p>

                <button className="mt-4 text-sm text-orange-400 hover:underline">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {games.length === 0 && (
          <p className="text-gray-400 text-center mt-20">
            No games available yet.
          </p>
        )}
      </div>
      <ToastContainer/>
    </section>
  );
}

export default ExploreGame;
