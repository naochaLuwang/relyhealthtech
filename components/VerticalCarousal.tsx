"use client";
import React, { useEffect, useState } from "react";

interface CarouselItem {
  banner: string;
}

interface VerticalCarouselProps {
  items: CarouselItem[];
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 7000); // Change the duration to adjust the slide interval

    return () => {
      clearInterval(interval);
    };
  }, [items]);

  return (
    <div className="relative flex items-center h-10 overflow-hidden">
      <div
        className="w-full h-10 transition duration-1000 "
        style={{ transform: `translateY(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-start h-10 py-[7px] lg:py-0 text-white "
          >
            <h1 className="text-xs font-bold lg:text-base text-textPrimary">
              {item.banner}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCarousel;
