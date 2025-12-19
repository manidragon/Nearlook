import React from "react";
import "./ProductItem.css";
import { Link } from "react-router-dom";

import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import { FaRegHeart } from "react-icons/fa";
import { LuGitCompareArrows } from "react-icons/lu";
import { MdOutlineZoomOutMap } from "react-icons/md";

const ProductItem = () => {
  return (
    <div className="group !mb-4 productItem rounded-md overflow-hidden border-2 border-gray-200 hover:shadow-lg transition-shadow duration-300 hover:bg-stone-200">
      {/* Image Section */}
      <div className="imgWrapper w-full  overflow-hidden rounded-b-md relative">
        <Link to="/">
          <div className="img h-[220px] overflow-hidden">
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/f/x/w/s-ma-lamba-creations-original-imahfwu3ux5jf78x.jpeg?q=70"
              alt="Product"
              className="w-full h-fit object-cover"
            />
            <img
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/a/7/v/s-ma-lamba-creations-original-imahfwu3hwqhtpma.jpeg?q=70"
              alt="Product"
              className="w-full h-fit absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </Link>

        {/* Discount */}
        <span className="discount absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
          10% OFF
        </span>

        {/* Hover Actions */}
        <div
          className="actions absolute top-[-50px] right-[5px] z-50
          flex items-center gap-2 flex-col w-[50px]
          opacity-0 transition-all duration-300
          group-hover:top-[15px] group-hover:opacity-70"
        >
          {/* Zoom */}
          <Tooltip title="Quick View" placement="left" arrow>
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-orange-400">
              <MdOutlineZoomOutMap className="text-[18px] text-black hover:text-white" />
            </Button>
          </Tooltip>

          {/* Wishlist */}
          <Tooltip title="Add to Wishlist" placement="left" arrow>
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-orange-400">
              <FaRegHeart className="text-[18px] text-black hover:text-white" />
            </Button>
          </Tooltip>

          {/* Compare */}
          <Tooltip title="Compare" placement="left" arrow>
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white hover:!bg-orange-400">
              <LuGitCompareArrows className="text-[18px] text-black hover:text-white" />
            </Button>
          </Tooltip>
        </div>
      </div>

      {/* Info Section */}
      <div className="info !p-3 !py-5">
        <h6 className="text-[13px]">
          <Link to="/" className="link transition-all">
            Cartify
          </Link>
        </h6>

        <h3 className="text-[16px] title !mb-1">
          <Link to="/" className="link transition-all">
            Real Diamond Jewellery Gold Diamond Ring
          </Link>
        </h3>

        <Rating name="rating" defaultValue={4} size="small" readOnly />

        <div className="price !mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-orange-600">₹4,999</span>
          <span className="oldPrice text-sm text-gray-500 line-through ml-2">
            ₹9,999
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
