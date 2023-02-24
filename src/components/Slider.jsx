import React, { useState } from "react";
import noise from "../assets/noise-bg.png";
import watch1 from "../assets/watch-1.png";
import watch2 from "../assets/watch-2.png";
import watch3 from "../assets/hero-watch.png";
// import watch4 from '../assets/watch4.png'
// import watch5 from '../assets/watch5.png'
import watch1hover from "../assets/watch-1-hover.png";
import watch2hover from "../assets/watch-2-hover.png";
import watch3hover from "../assets/hero-watch-hover.png";
// import watch4hover from '../assets/watch-4-hover.png'
// import watch5hover from '../assets/watch-5-hover.png'
import "../App.css"
function Slider( { images } ) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

      const handleMouseEnter = (index) => {
        setHoveredIndex(index);
      };
    
      const handleMouseLeave = () => {
        setHoveredIndex(null);
      };
  const watches = [
    {
      id: 1,
      image: watch1,
      hoverImage: watch1hover,
      name: "Royal Oak Offshore Chronograph",
      brand: "hublot",
      price: 1000,
    },
    {
      id: 2,
      image: watch2,
      hoverImage: watch2hover,
      name: "Royal Oak Offshore Chronograph",
      brand: "hublot",
      price: 1000,
    },
    {
      id: 3,
      image: watch3,
      hoverImage: watch3hover,
      name: "Royal Oak Offshore Chronograph",
      brand: "hublot",
      price: 1000,
    },
    {
      id: 4,
      image: watch2,
      hoverImage: watch2hover,
      name: "Royal Oak Offshore Chronograph",
      brand: "hublot",
      price: 1000,
    },
  ];
  return (
    <div className="text-[#E4E4E7] flex overflow-x-auto gap-2 w-full my-8">
      {watches.map((watch, index) => (
        <div
          key={index}
          className="w-fit h-auto"
        >
          <div
            className="relative bg-[url('./assets/noise-bg.png')] bg-cover w-60 h-96 my-auto"
            onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          >
            <img
              src={watch.image}
              alt="image 1"
              className={`absolute inset-0 object-contain transition-opacity duration-500 ease-in-out my-auto ${
                hoveredIndex === index ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={watch.hoverImage}
              alt="image 2"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          <h1 className="text-lg mt-2 font-serif text-[#E4E4E7]">{watch.name}</h1>
          <span className="font-sans font-light uppercase text-[11px] text-[#E4E4E7]/80">{watch.brand}</span>
          <p className="font-serif text-[#E4E4E7] mt-2 text-lg">${watch.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Slider;

