import React from "react";
import { InfiniteMovingCards } from "../ui/imageAutoScroll";

import Client1 from "../../assets/client1.png";
import Client2 from "../../assets/client2.png";
import Client3 from "../../assets/client3.png";
import Client4 from "../../assets/client5.png";

const testimonials = [
  { imageUrl: Client1 },
  { imageUrl: Client2 },
  { imageUrl: Client3 },
  { imageUrl: Client4 },
];

const BrandCollaborations = () => {
  return (
    <div className="bg-[#0c192d] py-16 relative dark:bg-[#171717]">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="bg-white text-[#0c192d] inline-block px-4 py-2 rounded-full font-semibold text-sm mb-4">
          Brands Collaborations
        </div>
        <h2 className="text-white text-3xl md:text-5xl font-bold">
          Brands that <span className="text-blue-400">trust us</span>
        </h2>
      </div>

      {/* Auto-scrolling Images */}
      <div className="px-4 md:px-40 mb-16">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>

      {/* Animated Bubbles */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        <div className="bubble bg-[#1c2a41] dark:bg-[#2b2c2d] rounded-full w-40 h-40 md:w-48 md:h-48 text-white shadow-lg animate-bounce-slow flex flex-col items-center justify-center">
          <p className="text-4xl md:text-5xl font-bold">150+</p>
          <p className="text-lg md:text-xl">Clients</p>
        </div>
        <div className="bubble bg-[#1c2a41] dark:bg-[#2b2c2d] rounded-full w-40 h-40 md:w-48 md:h-48 text-white shadow-lg animate-bounce-medium flex flex-col items-center justify-center">
          <p className="text-4xl md:text-5xl font-bold">150+</p>
          <p className="text-lg md:text-xl">Projects</p>
        </div>
        <div className="bubble bg-[#1c2a41] dark:bg-[#2b2c2d] rounded-full w-40 h-40 md:w-48 md:h-48 text-white shadow-lg animate-bounce-slow flex flex-col items-center justify-center">
          <p className="text-4xl md:text-5xl font-bold">20+</p>
          <p className="text-lg md:text-xl">Experience</p>
        </div>
        <div className="bubble bg-[#1c2a41] dark:bg-[#2b2c2d] rounded-full w-40 h-40 md:w-48 md:h-48 text-white shadow-lg animate-bounce-medium flex flex-col items-center justify-center">
          <p className="text-4xl md:text-5xl font-bold">15+</p>
          <p className="text-lg md:text-xl">Awards</p>
        </div>
      </div>
    </div>
  );
};

export default BrandCollaborations;
