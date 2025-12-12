import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CategoryPanel = ({ setIsOpenCatPanel, isOpenCatPanel }) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpenCatPanel(newOpen);
  };

  // toggle outer submenu; resets inner submenu when switching
  const openSubmenu = (index, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setInnerSubmenuIndex(null);
    setSubmenuIndex((current) => (current === index ? null : index));
  };

  // toggle inner submenu
  const openInnerSubmenu = (index, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setInnerSubmenuIndex((current) => (current === index ? null : index));
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <div className="!p-3 text-[16px] font-[500]">
        <h3 className="relative flex items-center justify-between">
          Shop By Categories
          <MdClose
            className="cursor-pointer text-2xl"
            onClick={toggleDrawer(false)}
            aria-label="Close categories"
          />
        </h3>
      </div>

      <div className="scroll">
        <ul className="w-full !px-3">
          {/* ITEM 1: Fashion (outer index 0) */}
          <li className="list-none relative  ">
            {/* row: label (left) + icon (right) */}
            <div className="w-full flex items-center justify-between">
              <Link to="/" className="flex-1">
                <Button className="w-full !text-left !justify-start !px-0 !text-[rgba(0,0,0,0.8)]">
                  Fashion
                </Button>
              </Link>

              {/* icon */}
              {submenuIndex === 0 ? (
                <FaRegMinusSquare
                  className="cursor-pointer ml-2 "
                  onClick={(e) => openSubmenu(0, e)}
                  aria-label="Collapse fashion submenu"
                />
              ) : (
                <FaRegPlusSquare
                  className="cursor-pointer ml-2"
                  onClick={(e) => openSubmenu(0, e)}
                  aria-label="Expand fashion submenu"
                />
              )}
            </div>

            {/* Outer submenu (full width block under the row) */}
            {submenuIndex === 0 && (
              <ul className="submenu w-full !pl-3 mt-1" style={{ zIndex: 50 }}>
                <li className="list-none relative">
                  {/* inner row */}
                  <div className="w-full flex items-center justify-between px-3">
                    <Link to="/" className="flex-1">
                      <Button className="w-full !text-left !justify-start !px-0 !text-[rgba(0,0,0,0.8)]">
                        Apparel
                      </Button>
                    </Link>

                    {innerSubmenuIndex === 0 ? (
                      <FaRegMinusSquare
                        className="cursor-pointer ml-2"
                        onClick={(e) => openInnerSubmenu(0, e)}
                        aria-label="Collapse apparel inner submenu"
                      />
                    ) : (
                      <FaRegPlusSquare
                        className="cursor-pointer ml-2"
                        onClick={(e) => openInnerSubmenu(0, e)}
                        aria-label="Expand apparel inner submenu"
                      />
                    )}
                  </div>

                  {innerSubmenuIndex === 0 && (
                    <ul
                      className="inner_submenu w-full !pl-6 mt-1"
                      style={{ zIndex: 60 }}
                    >
                      <li className="list-none relative !mb-1 px-3">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-0 transition text-[14px]"
                        >
                          Smart Tables
                        </Link>
                      </li>
                      <li className="list-none relative !mb-1 px-3">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-0 transition text-[14px]"
                        >
                          Crepe T-Sirt
                        </Link>
                      </li>
                      <li className="list-none relative !mb-1 px-3">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-0 transition text-[14px]"
                        >
                          Leather Watch
                        </Link>
                      </li>
                      <li className="list-none relative !mb-1 px-3">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-0 transition text-[14px]"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* ITEM 2: Accessories (outer index 1) */}
          <li className="list-none relative mt-2">
            <div className="w-full flex items-center justify-between px-3">
              <Link to="/accessories" className="flex-1">
                <Button className="w-full !text-left !justify-start !px-0 !text-[rgba(0,0,0,0.8)]">
                  Accessories
                </Button>
              </Link>

              {submenuIndex === 1 ? (
                <FaRegMinusSquare
                  className="cursor-pointer ml-2"
                  onClick={(e) => openSubmenu(1, e)}
                  aria-label="Collapse accessories submenu"
                />
              ) : (
                <FaRegPlusSquare
                  className="cursor-pointer ml-2"
                  onClick={(e) => openSubmenu(1, e)}
                  aria-label="Expand accessories submenu"
                />
              )}
            </div>

            {submenuIndex === 1 && (
              <ul className="submenu w-full !pl-3 mt-1" style={{ zIndex: 50 }}>
                <li className="list-none relative">
                  <div className="w-full flex items-center justify-between px-3">
                    <Link to="/accessories/bags" className="flex-1">
                      <Button className="w-full !text-left !justify-start !px-0 !text-[rgba(0,0,0,0.8)]">
                        Bags
                      </Button>
                    </Link>

                    {innerSubmenuIndex === 1 ? (
                      <FaRegMinusSquare
                        className="cursor-pointer ml-2"
                        onClick={(e) => openInnerSubmenu(1, e)}
                        aria-label="Collapse bags inner submenu"
                      />
                    ) : (
                      <FaRegPlusSquare
                        className="cursor-pointer ml-2"
                        onClick={(e) => openInnerSubmenu(1, e)}
                        aria-label="Expand bags inner submenu"
                      />
                    )}
                  </div>

                  {innerSubmenuIndex === 1 && (
                    <ul
                      className="inner_submenu w-full !pl-6 mt-1"
                      style={{ zIndex: 60 }}
                    >
                      <li className="list-none relative !mb-1 px-3">
                        <Link
                          to="/accessories/bags/totes"
                          className="link w-full !text-left !px-0 transition text-[14px]"
                        >
                          Totes
                        </Link>
                      </li>
                      <li className="list-none relative !mb-1 px-3">
                        <Link
                          to="/accessories/bags/backpacks"
                          className="link w-full !text-left !px-0 transition text-[14px]"
                        >
                          Backpacks
                        </Link>
                      </li>
                      <li className="list-none relative !mb-1 px-3">
                        <Link
                          to="/accessories/bags/clutches"
                          className="link w-full !text-left !px-0 transition text-[14px]"
                        >
                          Clutches
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer open={isOpenCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
