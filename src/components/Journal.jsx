import React from 'react';
import JournalCover from "../assets/DarjlingTea.jpg"; // Replace with actual image

const JournalSection = () => {
  return (
    <section
      className="bg-green-50 dark:bg-gray-900 text-green-900 dark:text-gray-200 px-4 py-12 md:py-16 transition-colors duration-500"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Visual */}
        <div className="flex-1">
          <img
            src={JournalCover}
            alt="Journal Cover"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Textual Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-500">
            Plantosphere Journal of Agri-Food Innovation
          </h2>
          <p className="text-lg mb-4 ">
            <strong className='dark:text-green-600'>Top Article:</strong> “Solar Drying Techniques for Rural Farmers”
          </p>
          <p className="italic mb-4 text-green-800 dark:text-gray-300">
            “Learn how solar drying boosts farmer incomes in rural Bengal by reducing crop spoilage and lowering post-harvest costs. This technique improves food shelf life and ensures year-round market access.”
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-100 mb-4">
            *Plantosphere retains full patent and copyright ownership for published articles.*
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="/journal"
              className="px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 dark:hover:bg-green-800 transition"
            >
              Read Article
            </a>
            <a
              href="/journal#submit"
              className="px-6 py-3 border border-green-600 text-green-700 dark:text-green-400 rounded-full hover:bg-green-100 dark:hover:bg-green-800 transition"
            >
              Submit Your Research
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
