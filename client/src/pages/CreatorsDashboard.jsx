import React, { useEffect, useState } from "react";
import api from "../api/axios";

function CreatorDashboard() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    api.get("/creator/status").then(res => setStatus(res.data));
  }, []);

  if (!status) {
    return <div className="h-screen bg-black text-gray-400 flex items-center justify-center">Loading dashboard…</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-6">Creator Dashboard</h1>

        <p className="text-gray-300 mb-4">
          Verification Status:
          <span className={`ml-2 font-semibold ${status.verified ? "text-green-400" : "text-yellow-400"}`}>
            {status.verified ? "Verified Creator" : "Pending Verification"}
          </span>
        </p>

        {!status.verified && (
          <button className="px-6 py-2 bg-orange-500 text-black rounded hover:bg-orange-400">
            Apply for Verification
          </button>
        )}

        {status.verified && (
          <div className="mt-8 space-y-4">
            <button className="w-full px-6 py-2 border border-white rounded hover:bg-white hover:text-black">
              Publish New Game
            </button>
            <button className="w-full px-6 py-2 border border-gray-600 rounded hover:border-orange-500">
              Manage Published Games
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default CreatorDashboard;
