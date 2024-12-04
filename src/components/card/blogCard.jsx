import React from 'react';
import Blog1 from '../../assets/blog1.jpeg'
import Blog2 from '../../assets/blog2.jpeg'
import Blog3 from '../../assets/blog3.jpeg'

const blogData=[
    {img:Blog1},
    {img:Blog2},
    {img:Blog3}
]
const BlogCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {blogData.map((data)=>(
            <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={data.img}
              alt="Card Image"
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <div className="flex items-center text-sm text-white space-x-4 mb-2">
                <div className="flex items-center">

                <p className='bg-[rgba(0,0,0,0.5)] px-3 rounded-md border border-white'>Feb 7, 2024</p>

                </div>
                <div className="flex items-center">
                 
                  <p className='bg-[rgba(0,0,0,0.5)] px-3 rounded-md border border-white'>Blogs</p>
                </div>
              </div>
              <h3 className="text-lg text-white font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci
                lac
              </h3>
            </div>
          </div>
        ))}

      </div>
      
    );
}

export default BlogCard;
