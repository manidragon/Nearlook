import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import Rating from "@mui/material/Rating";
import { IoCloseSharp } from "react-icons/io5";
import Button from "@mui/material/Button";

const MyListItems = (props) => {
  

  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[30%] sm:w-[15%] h-[150px] rounded-md overflow-hidden">
        <Link to="/product/7845" className="group">
          <img
            src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg"
            className="w-full group-hover:scale-105"
            alt="product"
          />
        </Link>
      </div>

      <div className="info w-full md:w-[85%] relative">
        <IoCloseSharp
          className="cursor-pointer absolute top-[0px] right-[0px] text-
                   [22px] link transition-all"
        />
        <span className="text-[13px]">Rare Rabbit</span>

        <h3 className="text-[13px] lg:text-[15px] font-[600] text-black">
          <Link
            to="/product/7845"
            className="text-gray-800 hover:text-red-500 transition"
          >
            Men Alias-N Regular Fit Spread Collar Shirt
          </Link>
        </h3>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        

        <div className="flex items-center gap-4 mt-2 mb-2">
          <span className="price text-black text-[14px] font-[600]">
            $58.00
          </span>

          <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
            $58.00
          </span>

          <span className="price text-red-500 text-[14px] font-[600]">
            55% OFF
          </span>
        </div>
        
        <Button className="btn-org btn-sm">Add to Cart</Button>
        
      </div>
    </div>
  );
};

export default MyListItems;
