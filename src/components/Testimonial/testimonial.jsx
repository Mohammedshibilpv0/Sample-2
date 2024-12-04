import React, { useState } from "react";
import Person1 from "../../assets/person1.jpeg";
import Person2 from "../../assets/person2.jpg";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      image: Person1,
      name: "Daniel Smith",
      role: "Software Developer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium lacus eget vulputate rhoncus.",
    },
    {
      id: 2,
      image: Person2,
      name: "Jane Doe",
      role: "Product Manager",
      text: "Vivamus egestas, orci eu lobortis pulvinar, metus magna venenatis justo, at fringilla orci neque non erat. Pellentesque habitant morbi tristique.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { image, name, role, text } = testimonials[currentIndex];

  return (
    <div className="flex items-center justify-center gap-8 p-8">
      {/* Image Section */}
      <div className="w-1/4">
        <img
          src={image}
          alt={name}
          className="rounded-tl-full rounded-br-full rounded-bl-full"
        />
      </div>

      {/* Content Section */}
      <div className="w-2/4">
        <div className="text-7xl text-gray-800 mb-4 dark:text-white">“</div>
        <p className="text-gray-600 text-lg mb-6 dark:text-white">{text}</p>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {name}
        </h3>
        <p className="text-blue-300">{role}</p>
      </div>

      {/* Controls Section */}
      <div className="flex flex-col gap-4 ">
        <button onClick={handlePrev} className="p-2">
          <BsArrowUpCircle size={40} />
        </button>
        <button onClick={handleNext} className="p-2">
          <BsArrowDownCircle size={40} />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
