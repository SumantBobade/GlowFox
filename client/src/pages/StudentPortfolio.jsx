import React, { useEffect, useState } from "react";
import api from "../api/axios";

function StudentPortfolio() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get("/users/me").then(res => setProfile(res.data));
  }, []);

  if (!profile) {
    return <div className="h-screen bg-black flex items-center justify-center text-gray-400">Loading portfolio…</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
        <p className="text-gray-400 mb-10">{profile.bio || "Aspiring Game Developer"}</p>

        <h2 className="text-2xl font-semibold mb-6">Projects</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {profile.projects?.map((game) => (
            <div key={game._id} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <img src={game.image} alt={game.title} className="h-36 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-orange-500 font-semibold">{game.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{game.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default StudentPortfolio;
