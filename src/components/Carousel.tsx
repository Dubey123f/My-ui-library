// Carousel.tsx
import React, { useState } from 'react';
import { CarouselItem } from './types';

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="overflow-hidden relative rounded-lg shadow-lg">
        <div>This is caraousel</div>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`transition-all duration-500 ease-in-out transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            } absolute w-full`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          >
            <img
              src={item.url}
              alt={item.altText}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-700 text-white rounded-r-lg"
      >
        &#8592;
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-700 text-white rounded-l-lg"
      >
        &#8594;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? 'bg-gray-900' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
