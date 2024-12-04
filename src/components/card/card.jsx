import React from 'react';
import { BsArrowUpRightCircle } from "react-icons/bs";

const Card = ({ title, content, linkText, linkUrl, icon }) => {
  return (
    <div className="bg-[#0c192d] rounded-2xl p-6 text-white">
          {icon && <div className="mr-3">{icon}</div>}
      <div className="flex items-center justify-between mb-2 mt-3">
        <div className="flex items-center">
          <div className="text-2xl text-blue-300 font-bold">{title}</div>
        </div>
        
      </div>
      <p>{content}</p>
      <a href={linkUrl} className="inline-flex items-center pt-5  text-white hover:text-blue-400 transition-colors">
          {linkText} <BsArrowUpRightCircle size={24} className="ml-2" />
        </a>
    </div>
  );
};

export default Card;