import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";
import Collapse from "react-collapse"; 
import { MyContext } from "../../App";
import { useContext } from "react";

export const CategoryCollapse = () => {
  const context = useContext(MyContext);
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);


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

  return (
    <>
      <div className="scroll">
        <ul className="w-full !px-2">
          {/* ITEM 1: Fashion (outer index 0) */}
          <li className="list-none relative flex items-center   flex-col ">
            {/* row: label (left) + icon (right) */}

        
              {
                context?.windowWidth > 992 && <Link to="/" className="w-full">
                <Button className="w-full !text-left !justify-start items-center !px-0 !text-[rgba(0,0,0,0.8)]">
                  Fashion
                </Button>
              </Link>
              }

              {
                context?.windowWidth < 992 && <div to="/" className="w-full">
                <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                  Fashion
                </Button>
              </div>
              }
      <div className="absolute w-[30px] h-[30px] top-[3px] right-[15px] flex items-center justify-center">

              {/* icon */}
              {submenuIndex === 0 ? (
                <FaRegMinusSquare
                 
                  onClick={(e) => openSubmenu(0, e)}
                  aria-label="Collapse fashion submenu"
                />
              ) : (
                <FaRegPlusSquare
                  
                  onClick={(e) => openSubmenu(0, e)}
                  aria-label="Expand fashion submenu"
                />
              )}

      </div>
          

            {/* Outer submenu (full width block under the row) */}
            {submenuIndex === 0 && (
              <ul className="submenu w-full !pl-3 mt-1" style={{ zIndex: 50 }}>
                          <li className="list-none relative flex items-center   flex-col ">
                  {/* inner row */}

                    <Link to="/" className="w-full">
                      <Button className="w-full !text-left !justify-start !px-0 !text-[rgba(0,0,0,0.8)]">
                        Apparel
                      </Button>
                    </Link>
      <div className="absolute w-[30px] h-[30px] top-[3px] right-[15px] flex items-center justify-center">
                    {innerSubmenuIndex === 0 ? (
                      <FaRegMinusSquare
                        
                        onClick={(e) => openInnerSubmenu(0, e)}
                        aria-label="Collapse apparel inner submenu"
                      />
                    ) : (
                      <FaRegPlusSquare
                    
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
<li className="list-none relative flex items-center flex-col">

  {/* row: label (left) + icon (right) */}
  {context?.windowWidth > 992 && (
    <Link to="/accessories" className="w-full">
      <Button className="w-full !text-left !justify-start items-center !px-0 !text-[rgba(0,0,0,0.8)]">
        Accessories
      </Button>
    </Link>
  )}

  {context?.windowWidth < 992 && (
    <div className="w-full">
      <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
        Accessories
      </Button>
    </div>
  )}

  {/* icon */}
  <div className="absolute w-[30px] h-[30px] top-[3px] right-[15px] flex items-center justify-center">
    {submenuIndex === 1 ? (
      <FaRegMinusSquare
        onClick={(e) => openSubmenu(1, e)}
        aria-label="Collapse accessories submenu"
      />
    ) : (
      <FaRegPlusSquare
        onClick={(e) => openSubmenu(1, e)}
        aria-label="Expand accessories submenu"
      />
    )}
  </div>

  {/* Outer submenu */}
  {submenuIndex === 1 && (
    <ul className="submenu w-full !pl-3 mt-1" style={{ zIndex: 50 }}>
      <li className="list-none relative flex items-center flex-col">

        <Link to="/accessories/bags" className="w-full">
          <Button className="w-full !text-left !justify-start !px-0 !text-[rgba(0,0,0,0.8)]">
            Bags
          </Button>
        </Link>

        {/* inner icon */}
        <div className="absolute w-[30px] h-[30px] top-[3px] right-[15px] flex items-center justify-center">
          {innerSubmenuIndex === 1 ? (
            <FaRegMinusSquare
              onClick={(e) => openInnerSubmenu(1, e)}
              aria-label="Collapse bags inner submenu"
            />
          ) : (
            <FaRegPlusSquare
              onClick={(e) => openInnerSubmenu(1, e)}
              aria-label="Expand bags inner submenu"
            />
          )}
        </div>

        {/* Inner submenu */}
        {innerSubmenuIndex === 1 && (
          <ul className="inner_submenu w-full !pl-6 mt-1" style={{ zIndex: 60 }}>
            <li className="list-none relative !mb-1 px-3">
              <Link
                to="/accessories/bags/totes"
                className="link w-full !text-left !justify-start !px-0 transition text-[14px]"
              >
                Totes
              </Link>
            </li>

            <li className="list-none relative !mb-1 px-3">
              <Link
                to="/accessories/bags/backpacks"
                className="link w-full !text-left !justify-start !px-0 transition text-[14px]"
              >
                Backpacks
              </Link>
            </li>

            <li className="list-none relative !mb-1 px-3">
              <Link
                to="/accessories/bags/clutches"
                className="link w-full !text-left !justify-start !px-0 transition text-[14px]"
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
    </>
  );
};
