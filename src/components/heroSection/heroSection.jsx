import React from "react";
import HeroImage from "../../assets/heroSection.jpg";

const HeroSection = () => {
  return (
    <div className="bg-[#171717] min-h-screen flex flex-col items-center justify-center pt-20 relative">
    <div className="text-center text-white px-4 z-10">
      <h1 className="text-6xl md:text-2xl lg:text-7xl font-bold mb-4 tracking-tight">
        The Best Projects
        <span className="block text-blue-400 mt-2 text-5xl md:text-6xl lg:text-6xl">
          Code Solution Working.
        </span>
      </h1>
      <p className="text-xl md:text-1xl text-gray-300 max-w-2xl mx-auto mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci
        lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium lacus
        eget vulputate rhoncus. Vivamus egestas, orci eu lobortis pulvinar.
      </p>
    </div>
  
    <div className="image mt-4 min-w-[60%] flex justify-center px-4 relative z-10">
    <img src={HeroImage} alt="" />
    </div>
   
      </div>
  );
};

export default HeroSection;
