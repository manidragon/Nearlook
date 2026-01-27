import React from "react";
import "./ProductItemListView.css";
import { Link, useNavigate } from "react-router-dom";

import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import { FaRegHeart } from "react-icons/fa";
import { LuGitCompareArrows } from "react-icons/lu";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

const FALLBACK_IMAGE =
  "https://via.placeholder.com/400x400?text=No+Image";

const ProductItemListView = ({ product }) => {
  const navigate = useNavigate();
  if (!product) return null;

  const mainImage =
    product.images?.[0] || FALLBACK_IMAGE;

  const hoverImage =
    product.images?.[1] || mainImage;

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={() => navigate(`/product/${product.id}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          navigate(`/product/${product.id}`);
        }
      }}
      className="group !mb-4 productItem rounded-md overflow-hidden 
      border-2 border-gray-200 hover:shadow-lg transition-shadow 
      duration-300 hover:bg-stone-200 flex items-center 
      flex-col lg:flex-row cursor-pointer"
    >
      {/* IMAGE SECTION */}
      <div className="imgWrapper h-full w-full lg:w-[30%] overflow-hidden rounded-md relative">
        <div className="img w-full overflow-hidden">
          <img
            src={mainImage}
            alt={product.name}
            onError={(e) => (e.target.src = FALLBACK_IMAGE)}
            className="w-full h-[220px] object-cover"
          />

          <img
            src={hoverImage}
            alt={product.name}
            onError={(e) => (e.target.src = FALLBACK_IMAGE)}
            className="w-full h-[220px] absolute top-0 left-0 object-cover 
            opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>

        {/* DISCOUNT BADGE */}
        {product.pricing?.discountPercent && (
          <span className="discount absolute top-2 left-2 bg-orange-500 
          text-white text-xs font-semibold px-2 py-1 rounded-lg">
            {product.pricing.discountPercent}% OFF
          </span>
        )}

        {/* HOVER ACTIONS */}
        <div
          className="actions absolute top-[-50px] right-[5px] z-50
          flex items-center gap-2 flex-col w-[50px]
          opacity-0 transition-all duration-300
          group-hover:top-[15px] group-hover:opacity-70"
          onClick={(e) => e.stopPropagation()}
        >
          <Tooltip title="Quick View" placement="left" arrow>
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] 
            !rounded-full !bg-white hover:!bg-orange-400">
              <MdOutlineZoomOutMap className="text-[18px] text-black hover:text-white" />
            </Button>
          </Tooltip>

          <Tooltip title="Add to Wishlist" placement="left" arrow>
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] 
            !rounded-full !bg-white hover:!bg-orange-400">
              <FaRegHeart className="text-[18px] text-black hover:text-white" />
            </Button>
          </Tooltip>

          <Tooltip title="Compare" placement="left" arrow>
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] 
            !rounded-full !bg-white hover:!bg-orange-400">
              <LuGitCompareArrows className="text-[18px] text-black hover:text-white" />
            </Button>
          </Tooltip>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="info !p-3 !py-5 w-full lg:w-[70%] px-3 lg:px-8">
        <h6 className="text-[15px] !font-[400] text-gray-500">
          {product.brand}
        </h6>

        <h3 className="text-[16px] title !mb-2 !mt-2 font-[500] text-black line-clamp-2">
          {product.name}
        </h3>

        <p className="text-[14px] !mb-3 text-gray-600 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center gap-2">
          <Rating value={Number(product.rating)} size="small" readOnly />
          <span className="text-xs text-gray-400">
            ({product.reviewsCount})
          </span>
        </div>

        <div className="price !mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-orange-600">
            ₹{product.pricing?.price}
          </span>
          <span className="oldPrice text-sm text-gray-500 line-through ml-2">
            ₹{product.pricing?.oldPrice}
          </span>
        </div>

        <div className="!mt-3">
          <Button
            className="btn-org flex gap-2"
            onClick={(e) => {
              e.stopPropagation();
              navigate("/cart");
            }}
          >
            <MdOutlineShoppingCart className="text-[20px]" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItemListView;
