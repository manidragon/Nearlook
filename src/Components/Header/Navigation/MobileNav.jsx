import React, { useEffect, useContext } from "react";
import { Button } from "@mui/material";
import { IoHomeOutline, IoSearch } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { FaThLarge } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { useLocation, NavLink } from "react-router-dom";
import { MdOutlineFilterAlt } from "react-icons/md";
import { MyContext } from "../../../App";

const MobileNav = () => {
  const context = useContext(MyContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/productListing") {
      context?.setIsFilterBtnShow(true);
    } else {
      context?.setIsFilterBtnShow(false);
    }
  }, [location, context]);

  const openFilters = () => {
    context?.setOpenFilter(true);
  };

  const navClass = ({ isActive }) =>
    isActive ? "text-orange-500 font-bold" : "text-gray-500";

  return (
    <div className="mobileNav !bg-white p-1 w-full flex items-center justify-between fixed bottom-0 left-0 z-[501] gap-0">
      {/* HOME */}
      <NavLink to="/" end className={navClass}>
        <Button className="flex-col !w-[40px] !capitalize !text-current">
          <IoHomeOutline size={18} />
          <span className="text-[12px]">Home</span>
        </Button>
      </NavLink>

      {/* FILTER */}
      {context?.isFilterBtnShow && (
        <Button
          className="!mb-2 flex-col !w-[40px] !h-[40px] !min-w-[40px] !capitalize !bg-[#fc4b03] !rounded-full"
          onClick={() => {
    openFilters();
    context.setOpenCategory(false);
  }}
        >
          <MdOutlineFilterAlt size={18} className="text-white" />
        </Button>
      )}

      {/* SEARCH */}
      <Button
        className="flex-col !w-[40px] !capitalize !text-gray-700"
        onClick={() => {
          context.setOpenCategory(false);
          context?.setOpenSearchPanel(true);
         
        }}
      >
        <IoSearch size={18} />
        <span className="text-[12px]">Search</span>
      </Button>

      {/* CATEGORY */}
   <NavLink to="/category" end className={navClass}>
  <Button
    className="flex-col !w-[40px] !capitalize !text-current"
    onClick={() => context.setOpenCategory(true)}
  >
    <FaThLarge size={18} />
    <span className="text-[12px]">Category</span>
  </Button>
</NavLink>

      {/* ORDERS */}
      <NavLink to="/my-orders" end className={navClass}>
        <Button className="flex-col !w-[40px] !capitalize !text-current" onClick={() => context.setOpenCategory(false)}>
          <BsBagCheck size={18} />
          <span className="text-[12px]">Orders</span>
        </Button>
      </NavLink>

      {/* ACCOUNT */}
      <NavLink to="/my-account" end className={navClass}>
        <Button className="flex-col !w-[40px] !capitalize !text-current" onClick={() => context.setOpenCategory(false)}>
          <FiUser size={18} />
          <span className="text-[12px]">Account</span>
        </Button>
      </NavLink>
    </div>
  );
};

export default MobileNav;
