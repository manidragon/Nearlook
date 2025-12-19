import React, { Suspense, lazy, memo, useContext } from "react";

import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation/navigation.jsx";
import { MyContext } from "../../App";
// icons (still from react-icons — optional: replace with inline SVGs to shrink bundle)
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";

// Lazy-load the Search component so header doesn't wait for it on initial paint
const Search = lazy(() => import("../Search/Search.jsx"));

// styled badge — defined once, outside component
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

// small memoized component to render icon + badge + tooltip
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

  const context = useContext(MyContext)

  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-2 border-b-2 border-gray-200 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <div
              className="elementor-element elementor-element-7740ffcb elementor-column elementor-col-50 elementor-top-column"
              data-id="7740ffcb"
              data-element_type="column"
            >
              <div className="elementor-column-wrap  elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div
                    className="elementor-element elementor-element-347681e2 elementor-widget elementor-widget-text-editor"
                    data-id="347681e2"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <p>
                          Get up to 50% off new season styles, limited time only
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="help-center"
                    className="text-[13px] link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>

                <li className="list-none">
                  <Link
                    to="order-tracking"
                    className="text-[13px] link font-[500] transition" 
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-3 !mt-3 mb-3">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[20%]">
            <Link to={"/"}>
              <img src="/logo.png" style={{ width: "90px" }} alt="site logo" />
            </Link>
          </div>

          <div className="col2 w-[50%]">
            {/* Suspense fallback is lightweight (could be a skeleton) */}
            <Suspense fallback={<div aria-hidden="true" />}>
              <Search />
            </Suspense>
          </div>

          <div className="col3 w-[30%] flex items-center">
            <ul className="flex items-center justify-end w-full gap-3 pl-7 pr-2">
              <li className="list-none">
                <Link
                  to="/login"
                  className="link transition text-[15px] font-[500] !pr-2 "
                >
                  Login
                </Link>
                | &nbsp;
                <Link
                  to="/register"
                  className="link transition text-[15px] font-[500] "
                >
                  Register
                </Link>
              </li>

              <IconWithBadge
                title="Compare"
                ariaLabel="compare items"
                badgeContent={4}
              >
                <IoGitCompareOutline size={22} aria-hidden="true" />
              </IconWithBadge>

              <IconWithBadge
                title="Wishlist"
                ariaLabel="wishlist"
                badgeContent={2}
              >
                <GrFavorite size={20} aria-hidden="true" />
              </IconWithBadge>

              <IconWithBadge title="Cart" ariaLabel="cart" badgeContent={4} onClick={()=>context.setOpenCartPanel(true)}>
                <MdOutlineShoppingCart size={22} aria-hidden="true" />
              </IconWithBadge>
          
                      
            </ul>
          </div>
        </div>
      </div>

      

      <Navigation />
    </header>
  );
};

// memoize header so it doesn't re-render unless its props/state change
export default memo(Header);


