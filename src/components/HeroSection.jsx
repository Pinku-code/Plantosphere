import { useState, useEffect } from 'react';
import { FaLeaf, FaShoppingCart, FaBook, FaHandsHelping } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import FarmImg from '../assets/Farm.jpg';
import FarmerImg from '../assets/Farmer.jpg';
import FarmingTechniqueImg from '../assets/FarmingTechnique.jpg';
import SpiceImg from '../assets/Spice.jpg';

const images = [
  FarmImg,
  FarmerImg,
  FarmingTechniqueImg,
  SpiceImg,
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white to-green-50 dark:from-green-900 dark:to-gray-900 text-green-900 dark:text-green-300 overflow-hidden transition-colors duration-500">
      {/* Decorative SVG */}
      <svg
        className="absolute top-0 left-0 w-64 opacity-10 dark:opacity-20"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="50" className="fill-green-600 dark:fill-green-400" />
      </svg>

      {/* Carousel */}
      <div
        className="relative mt-25 w-full shadow-2xl h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-4xl"
        data-aos="fade-up"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute px-8 py-4 rounded-4xl top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-green-600 dark:text-green-300 p-2 rounded-full shadow-lg hover:scale-110 transition"
          aria-label="Previous Slide"
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-green-600 dark:text-green-300 p-2 rounded-full shadow-lg hover:scale-110 transition"
          aria-label="Next Slide"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>

      {/* Headline */}
      <div className="text-center px-4 py-8 md:py-12" data-aos="fade-up">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Innovating Agriculture, Empowering Communities
        </h1>
        <p className="text-lg md:text-xl mb-8 text-green-700 dark:text-green-400">
          Plantosphere Pvt. Ltd. delivers sustainable agri-food solutions through cutting-edge products, training, and research.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { href: '/services', icon: <FaLeaf />, label: 'Explore Our Solutions' },
            { href: '/products', icon: <FaShoppingCart />, label: 'Shop Our Products' },
            { href: '/training', icon: <FaHandsHelping />, label: 'Join Our Training' },
            { href: '/journal', icon: <FaBook />, label: 'Submit to Our Journal' },
          ].map(({ href, icon, label }) => (
            <a
              key={href}
              href={href}
              className="w-48 h-14 bg-green-600 text-white flex items-center justify-center gap-2 rounded-full shadow-md hover:bg-green-700 dark:hover:bg-green-800 transition duration-300"
            >
              {icon} {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
