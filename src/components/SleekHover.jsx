import React, { useState } from "react";
import green from "../assets/green.png";
import blue from "../assets/blue.png";
import brown from "../assets/brown.png";
import purple from "../assets/purple.png";
function SleekHover() {
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
      name: "Haute horlogerie",
      description: "The highest standard in watch making",
      image: green,
    },
    {
      id: 2,
      name: "Toubillion watches",
      description: "The highest standard in watch making",
      image: brown,
    },
    {
      id: 1,
      name: "Skeleton watches",
      description: "The highest standard in watch making",
      image: purple,
    },
    {
      id: 1,
      name: "Diamond watches",
      description: "The highest standard in watch making",
      image: blue,
    },
  ];

  return (
    <div className="p-8 h-full">
      <h1 className="text-white text-3xl md:w-1/2">
        Shop Our Selection of Luxury Watches by Category
      </h1>
      <p className="text-[#9DA4AE] md:w-2/5 my-4 md:text-justify">
        From classic and traditional designs to modern and contemporary styles,
        we have something for every taste and preference
      </p>
      <section className="grid grid-cols-2 gap-8">
        <div className="relative ">
        {watches.map((watch, index) => (
          <div key={index} className="relative">
            {/* <img className="w-4/5 mx-auto absolute inset-0" src={green} alt="" />
            <img className="w-4/5 mx-auto absolute inset-0" src={brown} alt="" />
            <img className="w-4/5 mx-auto absolute inset-0" src={purple} alt="" />
            <img className="w-4/5 mx-auto absolute inset-0" src={blue} alt="" /> */}
            <img className={`absolute inset-0 w-4/5 mx-auto`} src={watch.image} alt="" />
          </div>
        ))}
        </div>
        <div 
        onMouseOver={handleMouseEnter}
        className="border-l border-white/30">
          {watches.map((watch, index) => (
            <div key={index} className="h-24 flex flex-col justify-center border-b border-white/30 p-5">
              <h1 className="text-[#A0A0AB] text-2xl font-serif">
                {watch.name}
              </h1>
              <p className={`absolute opacity-0 ${hoveredIndex === index ? "relative opacity-100 " : ""}`}>{watch.description}</p>
            </div>
          ))}
        </div>
      </section>
  
    </div>
  );
}

export default SleekHover;
