import React from "react";

const ContactUs = () => {
  return (
    <div className="flex ps-32 flex-col lg:flex-row items-center justify-center bg-white dark:bg-[#171717]">
      {/* Left Side */}
      <div className=" mx-20 flex items-center justify-center   text-white p-8 lg:p-16 rounded-lg ">
        <h1 className="text-5xl lg:text-8xl font-bold leading-tight tracking-wider text-center text-black dark:text-white">
          Let’s
          <br />
          <span className="text-blue-900 dark:text-blue-300">Talk !</span>
        </h1>
      </div>

  
      <div className="flex-1 p-8 w-80 max-w-md  rounded-lg mx-auto">
  <form className="space-y-6">
    <div>
     
      <input
        type="text"
        id="name"
        className="mt-1 block w-full p-3  bg-gray-200  rounded-2xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Your name"
      />
    </div>

    <div>
     
      <input
        type="text"
        id="phone"
        className="mt-1 block w-full p-3 bg-gray-200   rounded-2xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Your phone number"
      />
    </div>

    <div>
     
      <input
        type="email"
        id="email"
        className="mt-1 block w-full p-3 bg-gray-200 border  rounded-2xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Your email address"
      />
    </div>

    <div>
     
      <textarea
        id="message"
        rows="4"
        className="mt-1 block w-full p-3 bg-gray-200 border  rounded-2xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Your message"
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full bg-[#0c192d] text-white py-3 rounded-2xl shadow-md hover:bg-[#0b1729] transition duration-300"
    >
      Submit
    </button>
  </form>
</div>

    </div>
  );
};

export default ContactUs;
