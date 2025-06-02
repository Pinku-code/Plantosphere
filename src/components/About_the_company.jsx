import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import TeamImg from '../assets/Farm.jpg'; // Replace with your actual image

const AboutSection = () => {
  return (
    <section
      className="bg-white text-green-900 dark:bg-gray-900 dark:text-white py-12 px-4 md:px-16"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-green-800 dark:text-green-400">
            About the Company
          </h2>
          <p className="text-md sm:text-lg text-green-700 dark:text-gray-200 leading-relaxed mb-6">
            Plantosphere Pvt. Ltd. is a registered agribusiness startup revolutionizing India’s agriculture and food processing sectors. We empower farmers and communities through sustainable practices, innovative products, and knowledge-sharing.
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 dark:bg-green-700 text-white rounded-full shadow-md hover:bg-green-700 dark:hover:bg-green-800 transition duration-300"
          >
            Learn More <FaArrowRight />
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 w-full">
          <img
            src={TeamImg}
            alt="Our Team with Farmers"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
