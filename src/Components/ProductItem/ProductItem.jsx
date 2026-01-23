import React from "react";
import Rating from "@mui/material/Rating";

const FALLBACK_IMAGE =
  "https://via.placeholder.com/400x400?text=No+Image";

const ProductItem = ({ product }) => {
  if (!product) return null;

  const mainImage =
    product?.images && product.images.length > 0
      ? product.images[0]
      : FALLBACK_IMAGE;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition  cursor-pointer">
      {/* IMAGE */}
      <div className="w-full h-[200px] overflow-hidden rounded-top-md bg-gray-100">
        <img
          src={mainImage}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.target.src = FALLBACK_IMAGE;
          }}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* INFO */}
      <div className="mt-3 space-y-1 p-3">
        <h3 className="text-sm font-medium line-clamp-2">
          {product.name}
        </h3>

        <p className="text-xs text-gray-500">
          {product.brand}
        </p>

        <div className="flex items-center gap-1">
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

        {/* PRICE */}
        <div className="flex items-center gap-2">
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
