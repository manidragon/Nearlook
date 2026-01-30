import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Button from "@mui/material/Button";
import { MyContext } from "../../App";
import { useContext } from "react";

const CartPanel = () => {
       const context = useContext(MyContext);
  return (
    <>
      {/* CART ITEMS */}
      <div className="w-full max-h-[300px] overflow-y-auto overflow-x-hidden py-3 px-4">
        
        {/* CART ITEM */}
        {[1,2,3,4,5].map((_, index) => (
          <div
            key={index}
            className="cartItem w-full flex items-center gap-4 border-b border-black/10 pb-4 mb-4"
          >
            {/* IMAGE */}
            <div className="img w-[25%] h-[80px] overflow-hidden rounded-md flex-shrink-0">
              <Link to="/product/45875" className="block group">
                <img
                  src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg"
                  alt="product"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* INFO */}
            <div className="info w-[60%] pr-6 relative">
              <h4 className="text-[14px] font-[500] leading-snug">
                <Link
                  to="/product/5485"
                  className="link hover:text-red-500 transition"
                >
  {` Glowworld Women Blue Printed Cotton Kurta`.substring(0, context?.windowWidth < 992 ? 50 : 12)+'...'}
                </Link>
              </h4>

              <p className="flex items-center gap-4 mt-2 text-[13px]">
                <span>Qty : <b>2</b></span>
                <span className="text-orange-500 font-semibold">
                  $25
                </span>
              </p>

              {/* DELETE */}
              <MdOutlineDeleteOutline
                className="absolute top-[5px] right-[-25px] cursor-pointer text-[20px] text-gray-500 hover:text-red-500 transition"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CART SUMMARY (NOT ABSOLUTE – FIXED) */}
      <div className="w-full border-t border-black/10 bg-white">

        <div className="py-3 px-4 flex flex-col gap-2">
          <div className="flex justify-between text-[14px] font-semibold">
            <span>Items</span>
            <span>$86.00</span>
          </div>

          <div className="flex justify-between text-[14px] font-semibold">
            <span>Shipping</span>
            <span>$8.00</span>
          </div>
        </div>

        <div className="border-t border-black/10 py-3 px-4">
          <div className="flex justify-between text-[15px] font-bold mb-3">
            <span>Total</span>
            <span className="text-orange-500">$93.00</span>
          </div>

          <div className="flex gap-3">
            <Link to="/cart" className="w-1/2">
              <Button className="btn-org w-full" onClick={context.toggleCartPanel(false)}>
                <span className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] ">View Cart</span> </Button>
            </Link>

            <Link to="/checkout" className="w-1/2">
              <Button className="btn-org btn-border w-full" onClick={context.toggleCartPanel(false)}> <span className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]  ">Checkout</span></Button>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default CartPanel;
