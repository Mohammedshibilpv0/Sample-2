import React from "react";
import AboutPng from "../../assets/about.png";
import { GoArrowUpRight } from "react-icons/go";
const About = () => {
  return (
    <div className=" bg-white dark:bg-[#171717] px-16 pt-9 md:px-32">
      <p className="bg-[#0c192d] font-bold py-3 text-center rounded-3xl text-white mt-12 w-40 dark:bg-white dark:text-black">
        About us
      </p>
      <div className="mt-5">
        <h2 className="text-xl md:text-3xl font-bold mb-2 dark:text-white ">
          Most Trusted Service we Provide
        </h2>
        <h2 className="text-xl md:text-3xl  font-bold mb-4 dark:text-blue-300 text-blue-900">
          Since 2010 establishment.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className=" image flex items-center">
          <img
            src={AboutPng}
            alt="About"
            className=" h-full object-contain rounded-2xl"
          />
        </div>
        <div className="details p-4 md:p-0 text-gray-800 dark:text-gray-300 mt-14">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium
            lacus eget vulputate rhoncus. Vivamus egestas, orci eu lobortis
            pulvinar.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris
            pretium lacus eget vulputate rhoncus. Vivamus egestas, orci eu
            lobortis pulvinar.
          </p>
          <div className="mt-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              orci lacus, tempor nec accumsan ac, luctus ut sem. Mauris pretium
              lacus eget vulputate rhoncus.
            </p>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0"></hr>
          <div className="mt-6">
            <p>1. Expertise & Innovation</p>
            <p>2. Customer-Centric Approach</p>
            <p>3. Commitment to Quality & Reliability</p>
          </div>
          <div className=" flex justify-center pb-3 mt-6">
            <button className="mt-4 inline-flex items-center justify-center bg-[#0c192d] rounded-3xl hover:bg-[#091423] dark:bg-[#101b2b] text-white px-5 py-3">
              View More <GoArrowUpRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
