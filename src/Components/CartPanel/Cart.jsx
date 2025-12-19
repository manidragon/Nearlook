import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";

const CartPanel = () => {
  return (
    <>
      <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4">
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <img
              src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg"
              className="w-full h-full object-cover object-top"
              alt="product"
            />
          </div>

          <div className="info w-[60%] pr-5 relative">
            <h4 className="text-[14px] font-[500]">
              Glowworld Women Blue Printed Cotton Kurta
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                Qty : <span>2</span>
              </span>
              <span className="text-orange-400 font-bold">Price : $25</span>
            </p>

            <MdOutlineDeleteOutline className="absolute top-[10px] right-[-30px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
