import React from "react";

function CompanyPage() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Our <span className="text-orange-500">Company</span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg">
            GlowFox is building a community-driven platform where players
            explore new games and creators receive mentorship to bring
            ideas to life.
          </p>
        </div>

        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-300 leading-relaxed">
              We are a passionate team of developers, designers, and gamers
              who believe great games can come from anywhere. GlowFox exists
              to remove barriers for aspiring creators while giving players
              access to fresh and experimental experiences.
            </p>
          </div>

          <div className="bg-gray-900 p-10 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold text-orange-500 mb-3">
              What We Stand For
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Community-driven development</li>
              <li>• Learning through mentorship</li>
              <li>• Creativity over conformity</li>
              <li>• Honest and ethical platforms</li>
            </ul>
          </div>
        </div>

        {/* What We Do */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Do
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Game Discovery",
                desc: "We provide a platform where players can try new and upcoming games from independent creators."
              },
              {
                title: "Creator Mentorship",
                desc: "We guide aspiring developers with feedback, knowledge, and real-world development practices."
              },
              {
                title: "Idea to Prototype",
                desc: "We help transform raw game ideas into playable prototypes and polished experiences."
              }
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

        {/* Future Direction */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Our Future Direction
          </h2>
          <p className="text-gray-300 leading-relaxed">
            GlowFox aims to become a launchpad for the next generation of
            game creators—expanding mentorship programs, community tools,
            and publishing opportunities while continuing to serve players
            with innovative and meaningful games.
          </p>
        </div>

      </div>
    </section>
  );
}

export default CompanyPage;
