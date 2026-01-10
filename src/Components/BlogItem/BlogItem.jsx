import React from 'react'
import { IoMdTime } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';



 const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full h-auto overflow-hidden rounded-md relative">
        <img
          src="blog-01.jpg"
          alt="blogImg"
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
        />

        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-orange-500 px-3 py-1 rounded-md text-sm font-medium">
          <IoMdTime /> 5 APRIL, 2024
        </span>
      </div>

      <div className=" info content !mt-4">
        <h3 className="  text-[15px] font-[600] mb-1 lg:mb-3 hover:text-orange-500 cursor-pointer">
          <Link to="/">
            10 Best Tips to Improve Your Online Shopping Experience
          </Link>
        </h3>
        <p className="text-gray-600 mb-3 text-[14px]   lg:text-[16px] font-[400]">
          Discover essential tips to enhance your online shopping experience,
          from finding the best deals to ensuring secure transactions.
        </p>
        <Link to="/">
          <button className="text-orange-500 font-[500] hover:underline text-[14px] flex items-center gap-1">
            Read More <IoIosArrowForward />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BlogItem;