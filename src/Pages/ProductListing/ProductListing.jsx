import React, { useEffect, useState, useContext } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import ProductItem from "../../Components/ProductItem/ProductItem";
import ProductItemListView from "../../Components/ProductItemListView/ProductItemListView";

import Button from "@mui/material/Button";
import { IoGridSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";

import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../data/products";

const ProductListing = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="!py-5 !pb-0">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/" className="link transition">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/" className="link transition">
            Fashion
          </Link>
        </Breadcrumbs>
      </div>

      <div className="bg-white !p-2 !mt-4">
        <div className="container flex gap-3">
          {/* SIDEBAR */}
          <div
            className={`sidebarWrapper fixed -bottom-[100%] left-0 w-full 
            lg:static lg:w-[20%] max-h-[77vh] lg:h-full overflow-auto 
            bg-white p-3 z-[102] transition-all
            ${context?.openFilter ? "open" : ""}`}
          >
            <Sidebar />
          </div>

          {context.windowWidth < 992 && (
            <div
              className={`filter_overlay w-full h-full bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 z-[101]
              ${context?.openFilter ? "block" : "hidden"}`}
              onClick={() => context?.setOpenFilter(false)}
            />
          )}

          {/* RIGHT CONTENT */}
          <div className="rightContent w-full lg:w-[80%] !py-3">
            {/* TOP BAR */}
            <div className="bg-[#f1f1f1] !p-2 w-full !mb-4 rounded-md flex items-center">
              <div className="col1 flex items-center itemViewActions">
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] rounded-full text-black ${
                    itemView === "list" && "active"
                  }`}
                  onClick={() => setItemView("list")}
                >
                  <FaThList className="text-[rgba(0,0,0,0.7)]" />
                </Button>

                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] rounded-full text-black ${
                    itemView === "grid" && "active"
                  }`}
                  onClick={() => setItemView("grid")}
                >
                  <IoGridSharp className="text-[rgba(0,0,0,0.7)]" />
                </Button>

                <span className="text-[14px] hidden sm:block font-[500] !pl-3 text-[rgba(0,0,0,0.7)]">
                  There are {PRODUCTS.length} products
                </span>
              </div>

              {/* SORT MENU */}
              <div className="col2 !ml-auto flex items-center justify-end gap-3 !pr-4">
                <span className="text-[14px] font-[500] text-[rgba(0,0,0,0.7)]">
                  Sort By
                </span>

                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!bg-white !text-[12px] !text-black !capitalize !border-2 border-black"
                >
                  Relevance
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Relevance</MenuItem>
                  <MenuItem onClick={handleClose}>Price, low to high</MenuItem>
                  <MenuItem onClick={handleClose}>Price, high to low</MenuItem>
                  <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
                </Menu>
              </div>
            </div>

            {/* PRODUCTS GRID / LIST */}
            <div
              className={`grid ${
                itemView === "grid"
                  ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4"
                  : "grid-cols-1"
              } gap-4`}
            >
              {PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  role="link"
                  tabIndex={0}
                  className="cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      navigate(`/product/${product.id}`);
                    }
                  }}
                >
                  {itemView === "grid" ? (
                    <ProductItem product={product} />
                  ) : (
                    <ProductItemListView product={product} />
                  )}
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex items-center justify-center !mt-10">
              <Pagination count={5} showFirstButton showLastButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
