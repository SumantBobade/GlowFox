import React from "react";

function AboutPage() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            About <span className="text-orange-500">GlowFox</span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg">
            We are an independent game studio building a platform where players
            discover new games and aspiring creators turn ideas into playable
            experiences through mentorship and collaboration.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to create an open platform where game lovers can
              discover and experience new games, while aspiring creators receive
              mentorship, guidance, and tools to transform their ideas into
              playable and meaningful experiences.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              We envision a future where anyone with a game idea has the
              opportunity, support, and community to build and share their
              creations, fostering a new generation of independent game
              developers and innovative interactive worlds.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Player First",
                desc: "We prioritize players by creating meaningful and accessible game experiences.",
              },
              {
                title: "Creator Empowerment",
                desc: "We support aspiring developers with mentorship, feedback, and real-world guidance.",
              },
              {
                title: "Creative Excellence",
                desc: "We encourage originality and experimentation in design and storytelling.",
              },
              {
                title: "Learning Culture",
                desc: "We believe in sharing knowledge and growing together as a community.",
              },
              {
                title: "Integrity",
                desc: "We operate with transparency, fairness, and respect for creators and players alike.",
              },
              {
                title: "Growth Mindset",
                desc: "We continuously evolve through iteration, collaboration, and feedback.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-orange-500 transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-orange-500">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us on the Journey</h2>
          <p className="text-gray-300 mb-8">
            Whether you're a player, creator, or collaborator — there’s a place
            for you at GlowFox.
          </p>

          <button className="px-8 py-3 bg-orange-500 text-black font-semibold rounded hover:bg-orange-400 transition">
            Explore Our Games
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
