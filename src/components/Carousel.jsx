import React, { useState, useEffect, useRef } from "react";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const slideRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 2500); // Change every 4s

    return () => clearInterval(interval);
  }, [length]);

  // Swipe detection
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      // swipe left
      setCurrent((prev) => (prev + 1) % length);
    } else if (distance < -50) {
      // swipe right
      setCurrent((prev) => (prev - 1 + length) % length);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative mt-25 w-full max-w-[95%] mx-auto shadow-2xl h-[380px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-2xl"
      data-aos="fade-up"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Sliding Images */}
      <div
        ref={slideRef}
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 object-cover h-[380px] sm:h-[400px] md:h-[500px]"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === index ? "bg-green-600 scale-105" : "bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
