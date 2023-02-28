import React, { useState, useEffect } from 'react';
import one from '../assets/01.png';
import two from '../assets/02.png';
import three from '../assets/03.png';

const RotatingTextWithImage = () => {
  const content = [
    {
      title: '01 - High-quality materials',
      description: 'Luxury watches are made from materials like gold, platinum, stainless steel, or high-grade leather for durability and visual appeal.',
      image: one
    },
    {
      title: '02 - Precision movement',
      description: 'Luxury watches offer precise, reliable movements with advanced features like automatic or chronograph functions for optimal performance.',
      image: two
    },
    {
      title: '03 - Attention to detail',
      description: 'Luxury watches feature intricate design elements and finishes for a unique look. Options include hand-engraved patterns and precious gemstones.',
      image: three
    }
  ];
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentContentIndex((prevIndex) =>
        prevIndex === content.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [content.length]);

  return (
    <div className="relative ">
      {content.map((item, index) => (
        <div
          key={index}
          className={`absolute w-full transition-opacity duration-1000 flex justify-between flex-col h-full ${
            index === currentContentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={item.image}
            alt={`Image for ${item.text}`}
            className="w-4/5 object-cover md:mb-16"
          />
          <h2 className="text-2xl font-bold text-[#F4F4F5] my-4">{item.title}</h2>
          <p className="w-4/5 font-sans text-[#A0A0AB]">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RotatingTextWithImage;
