import React from 'react';
import teamPhoto from '../assets/Team.webp';
import ozairPhoto from '../assets/ozair.jpg'; // Add Ozair Alam's photo to your assets folder

const TeamSection = () => {
  return (
    <section className="bg-green-50 dark:bg-gray-900 text-green-900 dark:text-green-200 px-4 py-12 md:py-16 transition-colors duration-500" data-aos="fade-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Visual */}
        <div className="flex-1 group relative overflow-hidden rounded-lg shadow-md">
          <img
            src={teamPhoto}
            alt="Our Team"
            className="rounded-lg w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-4 right-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md px-3 py-1 text-sm rounded shadow text-green-800 dark:text-green-300">
            Field Team in Action
          </div>
        </div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800 dark:text-green-500">
            Our Team
          </h2>
          <p className="text-lg mb-6 text-green-900 dark:text-gray-200">
            Meet our passionate team, led by <strong>Ozair Alam</strong>, driving innovation in agri-food systems. From ICAR experts to dedicated field coordinators, we are committed to creating real impact across communities.
          </p>

          <div className="flex items-center gap-4 mb-4">
            <img
              src={ozairPhoto}
              alt="Ozair Alam"
              className="w-16 h-16 rounded-full object-cover border-2 border-green-500 shadow-md hover:scale-110 transition-transform duration-300"
            />
            <div>
              <p className="font-semibold text-green-800 dark:text-green-400">Ozair Alam</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Founder & Lead Innovator</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="/team"
            className="inline-block mt-2 px-6 py-3 bg-green-600 dark:bg-green-700 text-white rounded-full shadow hover:scale-105 hover:bg-green-700 dark:hover:bg-green-800 transition duration-300"
          >
            Meet the Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
