import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import BlogCard from '../card/blogCard';

const Blog = () => {
    return (
        <div className="bg-white dark:bg-[#171717] px-16 pt-8 md:px-32 pb-16">
        <p className="bg-[#0c192d] font-bold py-3 text-center rounded-3xl text-white mt-12 w-40 dark:bg-white dark:text-black">
          Blogs
        </p>
        <div className="mt-5 ">
        <div className="title flex justify-between items-center">
          <div className="start">
            <h2 className="text-xl md:text-3xl font-bold dark:text-white">
            Read our Latest {" "}
              <span className="text-xl md:text-3xl font-bold dark:text-blue-300 text-blue-900">
              Blogs & <br /> article
              </span>
            </h2>
          </div>
          <div className="end hidden md:block">
            <button className="inline-flex items-center justify-center bg-[#0c192d] rounded-3xl hover:bg-[#091423] dark:bg-[#101b2b] text-white px-5 py-3">
              View More <GoArrowUpRight className="ml-2" />
            </button>
          </div>
        </div>
            <BlogCard/>
      </div>
      <div className='flex justify-center md:hidden'>
      <button className="inline-flex items-center justify-center bg-[#0c192d] rounded-3xl hover:bg-[#091423] dark:bg-[#101b2b] text-white px-5 py-3">
              View More <GoArrowUpRight className="ml-2" />
            </button>
      </div>
        </div>
    );
}

export default Blog;
