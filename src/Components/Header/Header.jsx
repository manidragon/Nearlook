import React, { useState, Suspense, lazy, memo, useContext,useEffect } from "react";

import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoSearch } from "react-icons/io5";
import Navigation from "./Navigation/navigation.jsx";
import { MyContext } from "../../App";
import { FaArrowLeft } from "react-icons/fa6";
// icons
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";
import LocationTrigger from "../Location/LocationTrigger";
import LocationModal from "../Location/LocationModal";
import { IoIosSearch, IoIosArrowBack } from "react-icons/io";
import CategoryPage from "../MobileCatogery/CategoryPage.jsx";

// lazy search
const Search = lazy(() => import("../Search/Search.jsx"));

// badge style
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));



 

const IconWithBadge = memo(function IconWithBadge({
  title,
  ariaLabel,
  badgeContent,
  children,
  onClick,
}) {
  return (
    <li>
      <Tooltip title={title} arrow>
        <IconButton aria-label={ariaLabel} size="large" onClick={onClick}>
          <StyledBadge badgeContent={badgeContent} color="secondary">
            {children}
          </StyledBadge>
        </IconButton>
      </Tooltip>
    </li>
  );
});

const Header = () => {
  const context = useContext(MyContext);
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const hideForMobileSearch =
  context.openSearchPanel && context.windowWidth < 992;


      const [showModal, setShowModal] = useState(false);
const [address, setAddress] = useState(() => {
  const stored = localStorage.getItem("delivery_location");
  return stored ? JSON.parse(stored) : null;
});

   React.useEffect(() => {
    if (address) {
      localStorage.setItem("delivery_location", JSON.stringify(address));
    }
  }, [address]);

  // menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAccountClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccountClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
  if (context.openSearchPanel && context.windowWidth < 992) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [context.openSearchPanel, context.windowWidth]);

useEffect(() => {
  if (context.openCategory) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [context.openCategory]);


  return (<>
    <header className="bg-white w-full sticky top-0 z-[999] shadow-lg overflow-hidden ">
      {/* TOP STRIP */}
      <div className=" hidden  py-1 border-y border-gray-200">
        <div className="container ">
          <div className="flex justify-between items-center">
            <div className="col1 w-[50%] hidden lg:block">
              <p className="text-[12px] font-[500] mt-0 mb-0">Get up to 50% off new season styles, limited time only</p>
          </div>
        
          <div className="col2 flex item-center justify-between w-full lg:w-[50%] lg:justify-end">
          <ul className="flex items-center gap-3 justify-between  w-full lg:w-[200px] ">
            <li className="llist-none">
              <Link to="/help-center" className=" text-[11px] link font-[500] transition lg:text-[13px]">Help Center{" "}</Link>
            </li>
            <li>
              <Link to="/order-tracking" className=" text-[11px] link font-[500] transition lg:text-[13px]">Order Tracking</Link>
            </li>
          </ul>
          </div>
        </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="header border-b-[1px] border-gray-250 py-2 lg:py-4 ">
        <div className="container flex items-center justify-between">
{context.windowWidth < 992 && (
  hideForMobileSearch ? (
    <Button
      onClick={() => {
        context.setOpenSearchPanel(false);
        context.setSearchQuery("");
      }}
      className="!w-[35px] !min-w-[35px] !h-[35px] rounded-full !text-gray-800"
    >
      <FaArrowLeft  size={22}/>
    </Button>
  ) : (
    <Button
      onClick={() => setIsOpenCatPanel(true)}
      className="!w-[35px] !min-w-[35px] !h-[35px] rounded-full !text-gray-800"
    >
      <HiOutlineMenu size={22} />
    </Button>
  )
)}

          
          {/* LOGO */}
{!hideForMobileSearch && (
  <div className="col1 w-[40%] lg:w-[13%] flex justify-center">
    <Link to="/">
      <img src="/logo.png" alt="logo" style={{ width: 90 }} />
    </Link>
  </div>
)}

          
          
          
          
          {
            context.windowWidth >= 992 &&            <div className=" col1 w-[40%] lg:w-[20%]  flex justify-center">
            <Link to="/">
                   <LocationTrigger
        address={address}
        onClick={() => setShowModal(true)}
      />

      {showModal && (
        <LocationModal
          onClose={() => setShowModal(false)}
          setAddress={setAddress}
        />
      )}

            </Link>
          </div>
          }


          {/* SEARCH */}
<div
  className={`col2 w-full lg:flex lg:justify-center lg:w-[45%] p-2 lg:p-0
  ${context.windowWidth < 992
    ? context.openSearchPanel
      ? "block"
      : "hidden"
    : "block"
  }`}
>


            <Suspense fallback={null}>
              <Search />
            </Suspense>
          </div>

          {/* RIGHT */}

          {!hideForMobileSearch && (
          <div className="col3 w-10% lg:w-[30%] flex items-center pl-7">
            <ul className="flex items-center justify-end gap-0 lg:gap-3 ">
              {!context.isLogin ? (
                <li>
                  <Link to="/login">Login</Link> |{" "}
                  <Link to="/register">Register</Link>
                </li>
              ) : (
                <>
             
                 {context.windowWidth > 992 && 
                 <Button
                    onClick={handleAccountClick}
                    className="flex items-center gap-3"
                    style={{ textTransform: "none" }}
                  >
                    {/* avatar */}
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: "#f1f1f1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaRegUser
                        style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}
                      />
                    </div>
                    {
                      context.windowWidth > 992 &&
                                          <div style={{ display: "flex", flexDirection: "column" }}>
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 540,
                          color: "#4A4A4A",
                          textAlign: "left",
                          
                        }}
                      >
                        KISHOR
                      </span>

                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 400,
                          color: "rgba(0,0,0,0.55)",
                          textAlign: "left",
                        }}
                      >
                        kishor451817@Gmail.Com
                      </span>
                    </div>
                    }

                    {/* name + email */}

                  </Button>}
                  {/* ACCOUNT BUTTON (FIXED) */}
                 

                  {/* ACCOUNT MENU */}
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleAccountClose}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                  >
                    <Link to="/my-account" className="w-full block">
                      <MenuItem
                        onClick={handleAccountClose}
                        className="flex gap-2 !py-2"
                      >
                        <FaRegUser className="text-[18px]" />
                        <span className="text-[14px]">My Account</span>
                      </MenuItem>
                    </Link>

                    <Link to="/my-orders" className="w-full block">
                      <MenuItem
                        onClick={handleAccountClose}
                        className="flex gap-2 !py-2"
                      >
                        <IoBagCheckOutline className="text-[18px]" />
                        <span className="text-[14px]">Orders</span>
                      </MenuItem>
                    </Link>

                    <Link to="/my-list" className="w-full block">
                      <MenuItem
                        onClick={handleAccountClose}
                        className="flex gap-2 !py-2"
                      >
                        <IoMdHeartEmpty className="text-[18px]" />
                        <span className="text-[14px]">My List</span>
                      </MenuItem>
                    </Link>

                    
                      <MenuItem
                        onClick={handleAccountClose}
                        className="flex gap-2 !py-2"
                      >
                        <IoIosLogOut className="text-[18px]" />
                        <span className="text-[14px]">Logout</span>
                      </MenuItem>
                    
                  </Menu>
                
                </>
              )}
{/* {context.windowWidth >992 && 
              <IconWithBadge title="Compare" badgeContent={4}>
                <IoGitCompareOutline size={22} />
              </IconWithBadge>} */}
    <Link to="/my-list" className="w-full block">         
<IconWithBadge title="Wishlist" badgeContent={2}>
                <GrFavorite size={20} />
              </IconWithBadge>

              </Link> 
    
             

              <IconWithBadge
                title="Cart"
                badgeContent={4}
                onClick={() => context.setOpenCartPanel(true)}
              >
                <MdOutlineShoppingCart size={22} />
              </IconWithBadge>
            </ul>
          </div>)}
        </div>
      </div>

      <Navigation isOpenCatPanel ={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel}/>
    </header>
    {/* MOBILE SEARCH BACKDROP PANEL */}
{context.openSearchPanel && context.windowWidth < 992 && (
  <div
    className="fixed left-0 top-[69px] w-full h-[calc(100vh-69px)] bg-white z-[9998] animate-slideDown overflow-y-auto"
    onClick={() => context.setOpenSearchPanel(false)}
  >
    <div
      className="p-4"
      onClick={(e) => e.stopPropagation()}
    >

      {/* EMPTY INPUT → DISCOVER MORE */}
      {context.searchQuery.trim() === "" && (
        <>
          <p className="text-[14px] font-[600] text-gray-600 mb-3">
            Discover More
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Mobiles",
              "Shoes",
              "T-Shirts",
              "Laptops",
              "Watches",
              "TV",
              "Headphones",
              "Bluetooth",
              "Fridge",
              "Bedsheet",
              "Water Bottle"
            ].map((item) => (
              <button
                key={item}
                className="px-3 py-1.5 border border-gray-300 rounded-md text-[13px] text-blue-600 bg-white hover:bg-gray-100"
                onClick={() => {
                  context.setSearchQuery(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </>
      )}

      {/* TYPING → TRENDING / SUGGESTIONS */}
      {context.searchQuery.trim() !== "" && (
        <>
          <p className="text-[14px] font-[600] text-gray-600 mb-2">
            Trending Searches
          </p>

          <div className="space-y-3">
            {[
              "tresemme shampoo",
              "travel bag",
              "trolley bag",
              "trimmer men",
              "t4 5g",
              "tru hair wax"
            ]
              .filter((item) =>
                item
                  .toLowerCase()
                  .includes(context.searchQuery.toLowerCase())
              )
              .map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between px-2 py-2 hover:bg-gray-100 rounded cursor-pointer"
                  onClick={() => {
                    context.setSearchQuery(item);
                    context.setOpenSearchPanel(false);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500"><IoIosSearch size={16} /></span>
                    <span className="text-[14px]">{item}</span>
                  </div>
                  <span className="text-gray-400">↗</span>
                </div>
              ))}
          </div>
        </>
      )}

    </div>
  </div>
)}

{context.openCategory && context.windowWidth < 992 && (
  <div
    className="fixed left-0 top-0 w-full h-[calc(100vh-59px)] bg-white z-[9998] animate-slideDown overflow-y-auto"
    onClick={() => context.setOpenCategory(false)}
  >
    <div
      className=" "
      onClick={(e) => e.stopPropagation()}
    >

      {/* CATEGORY GRID */}
<CategoryPage />
    </div>
  </div>
)}



    </>
  );
};

export default memo(Header);
