import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageSliderCard = ({ images = [], interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const next = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(next);
  }, [images.length, interval]);

  return (
    <div className="w-full sm:w-[95%] md:w-[90%] lg:w-[85%] mx-auto text-center">

      {/* Image Box */}
      <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden bg-night-surface shadow-md border border-night-border relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index].src}
            alt={images[index].title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-contain object-center"
          />
        </AnimatePresence>
      </div>

      {/* Title outside */}
      <div className="mt-4">
        <h3 className="text-lg sm:text-xl font-medium text-night-heading">
          {images[index].title}
        </h3>
      </div>
    </div>
  );
};

export default ImageSliderCard;
