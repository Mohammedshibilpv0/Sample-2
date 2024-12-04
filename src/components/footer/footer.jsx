import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";


const Footer = () => {
  return (
    <footer className="bg-[#0c192d] text-[#c4cdd5] py-8 px-6 md:px-12 lg:px-44 dark:bg-[#171717]">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Contact Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-[#1c2a41] dark:bg-[#2b2c2d] p-4 rounded-lg">
              <span className="text-white"><MdOutlineMail size={30} /></span>
              <p>Support@atts.in</p>
            </div>
            <div className="flex items-center gap-4 bg-[#1c2a41] dark:bg-[#2b2c2d] p-4 rounded-lg">
              <span className="text-white"><FaPhone size={30} /></span>
              <p>+91 9874563210</p>
            </div>
            <div className="flex items-center gap-4 bg-[#1c2a41] dark:bg-[#2b2c2d] p-4 rounded-lg">
              <span className="text-white"><CiLocationOn size={30}/></span>
              <p>Mullai Nagar, Coimbatore, Tamilnadu 641041</p>
            </div>
          </div>

          {/* Menu Sections */}
          <div className="flex flex-wrap gap-8 lg:gap-20 w-full lg:w-auto">
            <div>
              <h3 className="font-semibold text-white mb-4">Menu</h3>
              <ul className="space-y-2">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Blogs</li>
                <li>Review</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li>Web Design & Development</li>
                <li>Mobile App Development</li>
                <li>Digital Media</li>
                <li>Social Media Marketing</li>
                <li>Digital Marketing</li>
                <li>Digital Engineering</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li>AUPAY</li>
                <li>AUSALES</li>
                <li>AUSHOP</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#394b5e] my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center text-center">
          {/* Social Media Links */}
          <div className="flex items-center gap-6 mb-4">
            <a href="#" className="text-[#c4cdd5] hover:text-white text-xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-[#c4cdd5] hover:text-white text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-[#c4cdd5] hover:text-white text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#c4cdd5] hover:text-white text-xl">
              <FaInstagram />
            </a>
          </div>

          {/* Copyright Section */}
          <p className="text-sm">
            All Copyrights Reserved. © 2024 | Design & Developed by ATTS
            Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
