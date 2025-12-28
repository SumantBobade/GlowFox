import React, { useEffect, useState } from "react";
import api from "../api/axios";

function MentorProfile() {
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    api.get("/mentors/me").then(res => setMentor(res.data));
  }, []);

  if (!mentor) {
    return <div className="h-screen bg-black text-gray-400 flex items-center justify-center">Loading mentor profile…</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-2">{mentor.name}</h1>
        <p className="text-gray-400">{mentor.expertise.join(", ")}</p>

        <div className="mt-4 text-sm text-gray-300">
          ⭐ Rating: {mentor.rating || "New Mentor"}
        </div>

        <p className="mt-6 text-gray-300">
          {mentor.bio || "No bio provided."}
        </p>

        <button className="mt-8 px-6 py-2 bg-orange-500 text-black rounded font-semibold hover:bg-orange-400">
          Request Mentorship
        </button>

      </div>
    </div>
  );
}

export default MentorProfile;
