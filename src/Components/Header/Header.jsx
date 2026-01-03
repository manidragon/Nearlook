import React, { useState, Suspense, lazy, memo, useContext } from "react";

import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Navigation from "./Navigation/navigation.jsx";
import { MyContext } from "../../App";

// icons
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

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

  // menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAccountClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccountClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="bg-white">
      {/* TOP STRIP */}
      <div className="py-2 border-y border-gray-200">
        <div className="container flex justify-between items-center">
          <p>Get up to 50% off new season styles, limited time only</p>

          <ul className="flex gap-3">
            <li>
              <Link to="/help-center">Help Center</Link>
            </li>
            <li>
              <Link to="/order-tracking">Order Tracking</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="py-3">
        <div className="container flex items-center justify-between">
          {/* LOGO */}
          <div className="w-[20%]">
            <Link to="/">
              <img src="/logo.png" alt="logo" style={{ width: 90 }} />
            </Link>
          </div>

          {/* SEARCH */}
          <div className="w-[40%]">
            <Suspense fallback={null}>
              <Search />
            </Suspense>
          </div>

          {/* RIGHT */}
          <div className="w-[35%]">
            <ul className="flex items-center justify-end gap-3">
              {!context.isLogin ? (
                <li>
                  <Link to="/login">Login</Link> |{" "}
                  <Link to="/register">Register</Link>
                </li>
              ) : (
                <>
                  {/* ACCOUNT BUTTON (FIXED) */}
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

                    {/* name + email */}
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
                  </Button>

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

              <IconWithBadge title="Compare" badgeContent={4}>
                <IoGitCompareOutline size={22} />
              </IconWithBadge>

              <IconWithBadge title="Wishlist" badgeContent={2}>
                <GrFavorite size={20} />
              </IconWithBadge>

              <IconWithBadge
                title="Cart"
                badgeContent={4}
                onClick={() => context.setOpenCartPanel(true)}
              >
                <MdOutlineShoppingCart size={22} />
              </IconWithBadge>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default memo(Header);
