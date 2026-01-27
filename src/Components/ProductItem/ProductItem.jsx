import React from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

import { FaRegHeart } from "react-icons/fa";
import { LuGitCompareArrows } from "react-icons/lu";
import { MdOutlineZoomOutMap } from "react-icons/md";

const FALLBACK_IMAGE =
  "https://via.placeholder.com/400x400?text=No+Image";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  if (!product) return null;

  const mainImage = product.images?.[0] || FALLBACK_IMAGE;
  const hoverImage = product.images?.[1] || mainImage;

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={() => navigate(`/product/${product.id}`)}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/product/${product.id}`)}
      className="group bg-white rounded-lg shadow-sm hover:shadow-md 
      transition cursor-pointer flex flex-col h-full w-full"
    >
      {/* IMAGE SECTION — FLIPKART STYLE */}
      <div className="imgWrapper w-full overflow-hidden rounded-b-md relative">
        <div className="img h-[220px] overflow-hidden">
          <img
            src={mainImage}
            alt={product.name}
            loading="lazy"
            onError={(e) => (e.target.src = FALLBACK_IMAGE)}
            className="w-full h-full object-cover"
          />

          <img
            src={hoverImage}
            alt={product.name}
            loading="lazy"
            onError={(e) => (e.target.src = FALLBACK_IMAGE)}
            className="w-full h-full absolute top-0 left-0 object-cover 
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


        </div>
      </div>

      {/* INFO SECTION */}
      <div className="flex flex-col p-3 flex-grow">
        <div>
          <h3 className="text-sm font-medium line-clamp-2 min-h-[40px]">
            {product.name}
          </h3>

          <p className="text-xs text-gray-500">
            {product.brand}
          </p>

          <div className="flex items-center gap-1 mt-1">
            <Rating
              value={Number(product.rating)}
              precision={0.5}
              size="small"
              readOnly
            />
            <span className="text-xs text-gray-400">
              ({product.reviewsCount})
            </span>
          </div>
        </div>

        {/* PRICE — STAYS AT BOTTOM */}
        <div className="flex items-center gap-2 mt-auto pt-2">
          <span className="text-orange-600 font-semibold">
            ₹{product.pricing?.price}
          </span>
          <span className="text-xs text-gray-400 line-through">
            ₹{product.pricing?.oldPrice}
          </span>
          <span className="text-xs text-green-600">
            {product.pricing?.discountPercent}% off
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
