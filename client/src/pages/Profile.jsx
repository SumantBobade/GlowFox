import React, { useEffect, useState } from "react";
import api from "../api/axios";

function Profile() {
  const [user, setUser] = useState(null);
  const [games, setGames] = useState([]);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: "", bio: "" });

  useEffect(() => {
    fetchProfile();
    fetchMyGames();
  }, []);

  const fetchProfile = async () => {
  try {
    const res = await api.get("/auth/me");
    setUser(res.data);
    setForm({
      name: res.data.name,
      bio: res.data.bio || "",
    });
  } catch (err) {
    console.error("Profile fetch failed", err.response?.data || err.message);
  }
};


  const fetchMyGames = async () => {
    const res = await api.get("/games/my-games");
    setGames(res.data);
  };

  const handleUpdate = async () => {
    await api.put("/user/me", form);
    setEditing(false);
    fetchProfile();
  };

  if (!user) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-gray-400">
        Loading profile…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-8">
          Settings
        </h2>
        <ul className="space-y-4 text-sm text-gray-300">
          <li className="text-orange-500">Profile</li>
          <li className="hover:text-orange-400 cursor-pointer">My Games</li>
          <li className="hover:text-orange-400 cursor-pointer">Security</li>
          <li className="hover:text-orange-400 cursor-pointer">Mentorship</li>
        </ul>
      </aside>

      {/* Main */}
      <main className="flex-1 p-10">

        {/* Header */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-28 h-28 rounded-xl bg-gray-800 flex items-center justify-center text-3xl">
            {user.name?.[0]}
          </div>

          <div>
            {editing ? (
              <>
                <input
                  className="bg-black border border-gray-700 p-2 rounded mb-2"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
                <textarea
                  className="bg-black border border-gray-700 p-2 rounded w-full"
                  value={form.bio}
                  onChange={(e) =>
                    setForm({ ...form, bio: e.target.value })
                  }
                />
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold">{user.name}</h1>
                <p className="text-gray-400">{user.email}</p>
                <p className="text-gray-500 mt-2 text-sm">
                  {user.bio || "No bio added yet"}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 mb-12">
          {editing ? (
            <button
              onClick={handleUpdate}
              className="px-6 py-2 bg-orange-500 text-black rounded"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="px-6 py-2 border border-white rounded"
            >
              Edit Profile
            </button>
          )}

          <button className="px-6 py-2 bg-orange-500 text-black rounded">
            Publish Game
          </button>
        </div>

        {/* My Games */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            My <span className="text-orange-500">Games</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <div
                key={game._id}
                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-orange-500 font-semibold">
                    {game.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">
                    {game.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

export default Profile;
