import React from "react";
import Card from "../card/card";
import { FaCode } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";
import { MdSendToMobile } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { AiFillNotification } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";

const serviceData = [
  {
    title: "Web Design & Development",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lacus,tempor nec accumsan ac, luctus ut sem. Mauris pretium lacus eget vulputate rhoncus. Vivamus egestas, orci eu lobortis pulvinar.",
    linkText: "LEARN MORE",
    linkUrl: "#",
    icon: (
      <FaCode size={36} className="text-blue-300 bg-[#1B2534] rounded-lg" />
    ),
  },
  {
    title: "Mobile App Development",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lacus,tempor nec accumsan ac, luctus ut sem. Mauris pretium lacus eget vulputate rhoncus. Vivamus egestas, orci eu lobortis pulvinar.",
    linkText: "LEARN MORE",
    linkUrl: "#",
    icon: (
      <MdSendToMobile
        size={36}
        className="text-blue-300 bg-[#1B2534] rounded-lg"
      />
    ),
  },
  {
    title: "Digital Media",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lacus,tempor nec accumsan ac, luctus ut sem. Mauris pretium lacus eget vulputate rhoncus. Vivamus egestas, orci eu lobortis pulvinar.",
    linkText: "LEARN MORE",
    linkUrl: "#",
    icon: (
      <MdOutlineVideoLibrary
        size={36}
        className="text-blue-300 bg-[#1B2534] rounded-lg"
      />
    ),
  },
  {
    title: "Social Media Marketing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lacus,tempor nec accumsan ac, luctus ut sem. Mauris pretium lacus eget vulputate rhoncus. Vivamus egestas, orci eu lobortis pulvinar.",
    linkText: "LEARN MORE",
    linkUrl: "#",
    icon: (
      <AiFillNotification
        size={36}
        className="text-blue-300 bg-[#1B2534] rounded-lg"
      />
    ),
  },
  {
    title: "Digital Engineering",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lacus,tempor nec accumsan ac, luctus ut sem. Mauris pretium lacus eget vulputate rhoncus. Vivamus egestas, orci eu lobortis pulvinar.",
    linkText: "LEARN MORE",
    linkUrl: "#",
    icon: (
      <MdLaptopChromebook
        size={36}
        className="text-blue-300 bg-[#1B2534] rounded-lg "
      />
    ),
  },
  {
    title: "Digital Marketing",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lacus,tempor nec accumsan ac, luctus ut sem. Mauris pretium lacus eget vulputate rhoncus. Vivamus egestas, orci eu lobortis pulvinar.",
    linkText: "LEARN MORE",
    linkUrl: "#",
    icon: (
      <CiGlobe size={36} className="text-blue-300 bg-[#1B2534] rounded-lg" />
    ),
  },
];

const Services = () => {
  return (
    <div className="bg-white dark:bg-[#171717] px-16 pt-9 md:px-32 pb-16">
      <p className="bg-[#0c192d] font-bold py-3 text-center rounded-3xl text-white mt-12 w-40 dark:bg-white dark:text-black">
        Services
      </p>
      <div className="mt-5 ">
        <div className="title flex justify-between items-center">
          <div className="start">
            <h2 className="text-xl md:text-3xl font-bold dark:text-white">
              What we are{" "}
              <span className="text-xl md:text-3xl font-bold dark:text-blue-300 text-blue-900">
                offering?
              </span>
            </h2>
          </div>

          <div className="end">
            <button className="inline-flex items-center justify-center bg-[#0c192d] rounded-3xl hover:bg-[#091423] dark:bg-[#101b2b] text-white px-5 py-3">
              View More <GoArrowUpRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 mt-7">
        {serviceData.map((data, index) => (
          <Card
            key={index}
            content={data.content}
            icon={data.icon}
            linkText={data.linkText}
            title={data.title}
            linkUrl={data.linkUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
