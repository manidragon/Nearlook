import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { ProductZoom } from "../../Components/ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { QtyBox } from "../../Components/QtyBox/QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { LuGitCompareArrows } from "react-icons/lu";

export const ProductDetails = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  return (
    <>
      <div className="!py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Fashion
            </Link>
            <Link
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Women Black Cotton Blend Top
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white !py-5">
        <div className="container flex !gap-1 ">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] pr-10">
            <h1 className="text-[24px] font-[600] mb-2 ">
              Chikankari Women Kurta
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-[13px]">
                Brand:
                <span className="font-[500] text-black opacity-75">
                  House of Chiankari
                </span>
              </span>
              <Rating name="rating" defaultValue={4} size="small" readOnly />
              <span className="text-[13px] cursor-pointer">Review(5)</span>
            </div>
            <div className="price mt-4 flex items-center gap-4">
              <span className="text-[20px] font-[600] text-orange-600">
                ₹4,999
              </span>
              <span className="oldPrice text-sm text-gray-500 line-through ">
                ₹9,999
              </span>

              <span className="text-[14px]">
                Available In Stock:
                <span className="text-green-600 text-[14px] font-bold">
                  147 Items
                </span>
              </span>
            </div>
            <p className="mt-3 pr-10 mb-5">
              For girl's seeking a ethnic set that melds classic charm with a
              contemporary twist, Trilok Fab flared ethnic gown is a perfect
              choice. It is designed with both comfort and style in mind, this
              maxi length gown is made to feel luxurious against the skin. The
              flowing flares allow for ease of movement, ensuring you feel as
              good as you look throughout the entire event. Despite the occasion
              that you want to wear it for, this dress leaves a lasting
              impression of refined elegance wherever you
            </p>
            <div className="flex gap-3">
              <span className="text-[16px]">Size:</span>
              <div className="flex items-center gap-1 actions">
                <Button
                  className={`${
                    productActionIndex === 0 ? "!bg-orange-500 !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>
                <Button
                  className={`${
                    productActionIndex === 1 ? "!bg-orange-500 !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>
                <Button
                  className={`${
                    productActionIndex === 2 ? "!bg-orange-500 !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>
                <Button
                  className={`${
                    productActionIndex === 3 ? "!bg-orange-500 !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
              </div>
            </div>

            <p className="text-[14px] mt-4 mb-2">
              Free Shipping (Est. Delivery Time 2-3 Days)
            </p>

            <div className="flex items-center gap-4">
              <div className="qtyBoxWrapper w-[70px] ">
                <QtyBox />
              </div>

              <Button className="btn-org flex gap-2">
                <MdOutlineShoppingCart className="text-[20px]" />
                Add to Cart
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
                <FaRegHeart className="text-[18px]" /> Add to Wishlist
              </span>
              <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
                <LuGitCompareArrows className="text-[18px]" /> Add to Compare
              </span>
            </div>
          </div>
        </div>

        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5">
            <span className="link text-[17px] cursor-pointer font-[500]">
              Description
            </span>
            <span className="link text-[17px] cursor-pointer font-[500]">
              Product Details
            </span>
            <span className="link text-[17px] cursor-pointer font-[500]">
              Reviews (5)
            </span>
          </div>

          <div className="shadow-md w-full p-5"> </div>
        </div>
      </section>
    </>
  );
};
