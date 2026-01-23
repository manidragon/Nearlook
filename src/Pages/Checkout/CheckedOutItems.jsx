import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import Rating from "@mui/material/Rating";
import { IoCloseSharp } from "react-icons/io5";
import Checkbox from "@mui/material/Checkbox";
import { MyContext } from "../../App";

const CheckedOutItems = ({ item, checked, onToggle }) => {
  if (!item) return null; // Safety guard

  const [sizeanchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setSelectedSize] = useState("S");
  const openSize = Boolean(sizeanchorEl);

  const [qtyanchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState(item?.qty || 1);
  const openQty = Boolean(qtyanchorEl);

  const context = useContext(MyContext);

  const handleClickSize = event => {
    setSizeAnchorEl(event.currentTarget);
  };

  const handleCloseSize = value => {
    setSizeAnchorEl(null);
    if (value !== null) {
      setSelectedSize(value);
    }
  };

  const handleClickQty = event => {
    setQtyAnchorEl(event.currentTarget);
  };

  const handleCloseQty = value => {
    setQtyAnchorEl(null);
    if (value !== null) {
      setSelectedQty(value);
    }
  };

  return (
    <div
      className={`cartItem w-full p-3 flex items-start gap-3 pb-5 border-b border-[rgba(0,0,0,0.1)] ${
        !checked ? "opacity-60" : ""
      }`}
    >
      {/* CHECKBOX */}
      <Checkbox checked={checked} onChange={onToggle} sx={{ mt: 1 }} />

      {/* IMAGE */}
      <div className="img w-[30%] sm:w-[20%] lg:w-[15%] rounded-md overflow-hidden">
        <Link to="/product/7845" className="group">
          <img
            src={item.image}
            className="w-full group-hover:scale-105 transition"
            alt={item.name}
          />
        </Link>
      </div>

      {/* INFO */}
      <div className="info w-[70%] sm:w-[80%] lg:w-[85%] pr-5 relative pt-3">
        <IoCloseSharp
          className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] text-gray-500 hover:text-red-500 transition"
        />

        <span className="text-[13px] text-gray-500">
          NearLook Mart
        </span>

        <h3 className="text-[12px] sm:text-[15px] font-[600] text-black w-80%">
          <Link
            to="/product/7845"
            className="text-gray-800 hover:text-red-500 transition"
          >
            {item.name.substring(
              0,
              context?.windowWidth < 992 ? 50 : 25
            ) + "..."}
          </Link>
        </h3>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        {/* SIZE & QTY */}
        <div className="flex items-center gap-3 mt-2">
          <div className="relative">
            <span
              className="flex items-center gap-1 bg-[#f1f1f1] text-[11px]
              font-[600] py-1 px-2 rounded-md cursor-pointer"
              onClick={handleClickSize}
            >
              Size: {selectedSize} <GoTriangleDown />
            </span>

            <Menu
              anchorEl={sizeanchorEl}
              open={openSize}
              onClose={() => handleCloseSize(null)}
            >
              {["S", "M", "L", "XL", "XXL"].map(s => (
                <MenuItem
                  key={s}
                  onClick={() => handleCloseSize(s)}
                >
                  {s}
                </MenuItem>
              ))}
            </Menu>
          </div>

          <div className="relative">
            <span
              className="flex items-center gap-1 bg-[#f1f1f1] text-[11px]
              font-[600] py-1 px-2 rounded-md cursor-pointer"
              onClick={handleClickQty}
            >
              Qty : {selectedQty}
              <GoTriangleDown />
            </span>

            <Menu
              anchorEl={qtyanchorEl}
              open={openQty}
              onClose={() => handleCloseQty(null)}
            >
              {[...Array(10)].map((_, i) => (
                <MenuItem
                  key={i + 1}
                  onClick={() => handleCloseQty(i + 1)}
                >
                  {i + 1}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>

        {/* PRICE */}
        <div className="flex items-center gap-4 mt-2">
          <span className="price text-black text-[14px] font-[600]">
            ₹{item.price * selectedQty}
          </span>

          <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
            ₹{item.price * selectedQty + 200}
          </span>

          <span className="price text-red-500 text-[14px] font-[600]">
            55% OFF
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckedOutItems;
