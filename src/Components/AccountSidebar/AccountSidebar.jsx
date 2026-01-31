import React from "react";
import { FaCloudUploadAlt, FaRegUser } from "react-icons/fa";
import Button from "@mui/material/Button";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";

const AccountSidebar = () => {
  const navClass = ({ isActive }) =>
    isActive
      ? "text-orange-500 font-bold"
      : "text-gray-500";

  return (
    <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
      <div className="w-full p-5 flex items-center justify-center flex-col">
        <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
          <img
            src="https://thumbs.dreamstime.com/b/portrait-young-investor-banker-workplace-inside-bank-office-businessman-business-suit-looking-friendly-291008120.jpg"
            className="w-full h-full object-cover"
          />

          <div className="overlay w-full h-full absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
            <FaCloudUploadAlt className="text-white text-[25px]" />
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0"
            />
          </div>
        </div>

        <h3 className="text-gray-700 font-semibold">
          Kishor
        </h3>
        <p className="text-gray-500 text-sm">
          kishor451817@gmail.com
        </p>
      </div>

      <ul className="list-none pb-5 bg-[#f1f1f1] myAccountTabs">
        {/* PROFILE */}
        <li className="w-full">
          <NavLink to="/my-account" end className={navClass}>
            <Button className="w-full !text-left !px-5 !justify-start !capitalize !rounded-none flex items-center gap-2 !text-current">
              <FaRegUser className="text-[15px]" />
              My Profile
            </Button>
          </NavLink>
        </li>

        {/* WISHLIST */}
        <li className="w-full">
          <NavLink to="/my-list" end className={navClass}>
            <Button className="w-full !py-2 !text-left !px-5 !justify-start !capitalize !rounded-none flex items-center gap-2 !text-current">
              <IoMdHeartEmpty className="text-[17px]" />
              My List
            </Button>
          </NavLink>
        </li>

        {/* ORDERS */}
        <li className="w-full">
          <NavLink to="/my-orders" end className={navClass}>
            <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !rounded-none flex items-center gap-2 !text-current">
              <IoBagCheckOutline className="text-[17px]" />
              My Orders
            </Button>
          </NavLink>
        </li>

        {/* ADDRESSES */}
        <li className="w-full">
          <NavLink to="/my-Adresses" end className={navClass}>
            <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !rounded-none flex items-center gap-2 !text-current">
              <IoBagCheckOutline className="text-[17px]" />
              Manage Addresses
            </Button>
          </NavLink>
        </li>

        {/* LOGOUT */}
        <li className="w-full">
          <Button className="w-full !text-left !py-2 !px-5 !justify-start !capitalize !rounded-none flex items-center gap-2 !text-gray-500">
            <IoIosLogOut className="text-[18px]" />
            Logout
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default AccountSidebar;
