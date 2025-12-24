import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

function HeroPage() {
  const navigate = useNavigate();
  return (
    <section className="bg-black text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            We Build <span className="text-orange-500">Next-Gen</span>
            <br />
            <TypeAnimation
              sequence={[
                "Game Worlds",
                2000,
                "Interactive Experiences",
                2000,
                "Next-Gen Gameplay",
                2000,
              ]}
              wrapper="span"
              speed={30}
              style={{ fontSize: "0.8em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            GlowFox is a game development studio and collaboration platform where students, indie developers, and game lovers build games together through mentorship, design patenting, and community-driven development.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-orange-500 text-black font-semibold rounded hover:bg-orange-400 transition"
            onClick={()=> navigate("/explore")}>
              Explore Games
            </button>

            <button className="px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition"
            onClick={()=>navigate("/signup")}>
              Join the Studio
            </button>
          </div>
        </div>

        {/* Right Visual / Placeholder */}
        <div className="hidden md:flex justify-center">
          <div className="w-[420px] h-[420px] bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl shadow-2xl flex items-center justify-center">
            <span className="text-3xl font-bold">GlowFox</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
