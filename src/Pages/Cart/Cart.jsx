import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { BsFillBagCheckFill } from "react-icons/bs";
import Cartitems from "./Cartitems";



const CartPage = () => {

  return (
    <section className="section py-10 pb-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftPart w-[75%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[15px] font-[600] text-black">Your Cart</h2>
              <p className="mt-0">
                There are <span className="font-bold text-red-500">2</span>{" "}
                products in your cart
              </p>
            </div>

            <Cartitems size="S" qty={2} />
            <Cartitems size="S" qty={2} />
            <Cartitems size="S" qty={2} />
            <Cartitems size="S" qty={2} />
            <Cartitems size="S" qty={2} />
            <Cartitems size="S" qty={2} />
            <Cartitems size="S" qty={2} />
            <Cartitems size="S" qty={2} /> 
          </div>
        </div>

        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md bg-white p-5">
            {/* Title */}
            <h3 className="text-[16px] font-[600] mb-3">Cart Totals</h3>

            <hr className="mb-4" />

            {/* Subtotal */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[14px] text-gray-600">Subtotal</span>
              <span className="text-red-500 font-bold">₹1,300.00</span>
            </div>

            {/* Shipping */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[14px] text-gray-600">Shipping</span>
              <span className="text-[14px] font-[600] text-gray-800">Free</span>
            </div>

            {/* Estimate */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[14px] text-gray-600">Estimate for</span>
              <span className="text-[14px] font-[600] text-gray-800">
                United Kingdom
              </span>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mt-4 mb-6">
              <span className="text-[14px] font-[600] text-gray-800">
                Total
              </span>
              <span className="text-red-500 font-bold text-[15px]">
                ₹1,300.00
              </span>
            </div>

            {/* Checkout Button */}
            <Link to="/checkout">
            <Button className="btn-org btn-lg w-full flex gap-2">
              <BsFillBagCheckFill className="text-[20px]" /> Checkout
              </Button>
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
 