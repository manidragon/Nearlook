import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { BsBagCheck } from "react-icons/bs";
import { FaThLarge } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { Link , useLocation} from 'react-router-dom';
import { NavLink } from "react-router";
import { MdOutlineFilterAlt } from "react-icons/md";
import { MyContext } from "../../../App";
import { useContext } from "react";


const MobileNav = () => {
    const context = useContext(MyContext);

    const location =useLocation();

    useEffect(() => {
      console.log(location.pathname);
      if (location.pathname === '/productListing') {
        context?.setIsFilterBtnShow(true);
      } else {
        context?.setIsFilterBtnShow(false);
      }
    }, [location]);
  const openFilters = () => {
    context?.setOpenFilter(true);
  }
    return (
        <div className='mobileNav !bg-white p-1 w-full flex items-center justify-between  fixed bottom-0 left-0 z-[9999] gap-0'>
            <NavLink to={'/'} exact ={true} activeClassName='isActive'>
            <Button className='flex-col !w-[40px] !capitalize !text-gray-700'             onClick={() => {
              context.setOpenCategory(false);
             
            }}>  
                <IoHomeOutline size={18}/> <span className='text-[12px]'>Home</span>
                 </Button>
                 </NavLink>
                 {
                context?.isFilterBtnShow === true &&                 
            <Button className='!mb-2 flex-col !w-[40px] !h-[40px] !min-w-[40px] !capitalize  !text-gray-700 !bg-[#fc4b03] !rounded-full' onClick={openFilters}>   
               <MdOutlineFilterAlt size={18} className='text-white  ' />
             </Button>
                }
               
          
                   <Button className='flex-col !w-[40px] !capitalize !text-gray-700'             onClick={() => {
              context.setOpenCategory(false);
              context.setOpenSearchPanel(true);
            }}>  
                <IoSearch size={18}/> <span className='text-[12px]'>Search </span>
                 </Button>
               
              

         
<Button
  className="flex-col !w-[40px] !capitalize !text-gray-700"
  onClick={() => context.setOpenCategory(true)}
>
  <FaThLarge size={18} />
  <span className="text-[12px]">Category</span>
</Button>



                 <NavLink to={'/my-orders'} exact ={true} activeClassName='isActive'>
                   <Button className='flex-col !w-[40px] !capitalize !text-gray-700'    onClick={() => {
              context.setOpenCategory(false);
             
            }}>  
                <BsBagCheck size={18}/> <span className='text-[12px]'>Orders</span>
                 </Button>
                 </NavLink>
                 <NavLink to={'/my-account'} exact ={true} activeClassName='isActive'>
                   <Button className='flex-col !w-[40px] !capitalize !text-gray-700'    onClick={() => {
              context.setOpenCategory(false);
             
            }}>  
                <FiUser  size={18}/> <span className='text-[12px]'>Account</span>
                 </Button>
                 </NavLink>
        </div>
    )
}

export default MobileNav