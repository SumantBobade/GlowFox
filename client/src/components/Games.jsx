import React from "react";
import astraImg from "../assets/astra.png";
import shadowImg from "../assets/shadow.png";

function Games() {
  const games = [
    {
      title: "Astra: The Eternal Hunt",
      image: astraImg,
      desc: "A fast-paced action adventure set in a mythic sci-fi universe. Fight Soul suckers and find devine weapon Astra."
    },
    {
      title: "Shadows of Kali",
      image: shadowImg,
      desc: "A dark indie adventure inspired by myth and mystery, where players explore haunting worlds and uncover the power lurking in the shadows."
    },
    {
      title: "Echos of Asylam",
      image: astraImg,
      desc: "A survival horror experience where you face relentless zombie waves, scavenge scarce resources, and fight to escape a crumbling asylum."
    }
  ];

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Try <span className="text-orange-500">Games</span>
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {games.map((game) => (
            <div
              key={game.title}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-orange-500 transition group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-orange-500">
                  {game.title}
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  {game.desc}
                </p>

                <button className="px-4 py-2 text-sm border border-white rounded hover:bg-white hover:text-black transition">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Games;
