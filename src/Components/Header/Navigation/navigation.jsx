import React, { useState } from "react";
import { Button } from "@mui/material";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import CategoryPanel from "./CategoryPanel";

import "./style.css";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav>
        <div className="container flex items-center justify-end gap-5">
          <div className="col1 w-[20%] ">
            <Button
              className="!text-black gap-2 w-full "
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-2xl" />
              Shop By Categories
              <IoIosArrowDown className="text-2xl ml-auto justify-end cursor-pointer" />
            </Button>
          </div>

          <div className="col2 w-[80%]">
            <ul className="flex items-center !gap-2 nav">
              <li className="list-none mx-4">
                <Link
                  to="/"
                  className="link transition text-[14px] font-[500] "
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#fc4b03]">
                    Home
                  </Button>
                </Link>
              </li>

              <li className="list-none mx-4 relative group">
                <Link to="/" className="inline-block">
                  <Button className="transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#fc4b03]">
                    Fashion
                  </Button>
                </Link>

                {/* Top-level submenu (hidden by default, shown on hover of parent li via group-hover) */}
                <div
                  className="
      submenu absolute top-[120%] left-0 min-w-[150px] bg-white shadow-md
      opacity-0 translate-y-2 scale-95 pointer-events-none transition-all duration-150
      group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto z-50
    "
                >
                  <ul className="p-4">
                    {/* First submenu item */}
                    <li className="py-2 list-none w-full relative group">
                      <div className="w-full flex items-center">
                        <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                          Men
                        </Button>
                      </div>

                      <div
                        className="
        submenu absolute top-0 !left-[100%] min-w-[150px] bg-white shadow-md
        opacity-0 translate-x-2 scale-95 pointer-events-none transition-all duration-150
        group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 group-hover:pointer-events-auto z-50
      "
                      >
                        <ul
                          className="p-4 overflow-auto max-h-[70vh]"
                          style={{
                            overscrollBehavior: "contain",
                            WebkitOverflowScrolling: "touch",
                          }}
                        >
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Men
                              </Button>
                            </Link>
                          </li>
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Women
                              </Button>
                            </Link>
                          </li>
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Kids
                              </Button>
                            </Link>
                          </li>
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Girls
                              </Button>
                            </Link>
                          </li>
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Boys
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    {/* Second submenu item */}
                    <li className="py-2 list-none w-full relative group">
                      <div className="w-full flex items-center">
                        <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                          Men
                        </Button>
                      </div>

                      <div
                        className="
        submenu absolute top-0 !left-[100%] min-w-[150px] bg-white shadow-md
        opacity-0 translate-x-2 scale-95 pointer-events-none transition-all duration-150
        group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 group-hover:pointer-events-auto z-50
      "
                      >
                        <ul
                          className="p-4 overflow-auto max-h-[70vh]"
                          style={{
                            overscrollBehavior: "contain",
                            WebkitOverflowScrolling: "touch",
                          }}
                        >
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Men
                              </Button>
                            </Link>
                          </li>
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Women
                              </Button>
                            </Link>
                          </li>
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Kids
                              </Button>
                            </Link>
                          </li>
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Girls
                              </Button>
                            </Link>
                          </li>
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Boys
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    {/* Third submenu item */}
                    <li className="py-2 list-none w-full relative group">
                      <div className="w-full flex items-center">
                        <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                          Men
                        </Button>
                      </div>

                      <div
                        className="
        submenu absolute top-0 !left-[100%] min-w-[150px] bg-white shadow-md
        opacity-0 translate-x-2 scale-95 pointer-events-none transition-all duration-150
        group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 group-hover:pointer-events-auto z-50
      "
                      >
                        <ul
                          className="p-4 overflow-auto max-h-[70vh]"
                          style={{
                            overscrollBehavior: "contain",
                            WebkitOverflowScrolling: "touch",
                          }}
                        >
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Men
                              </Button>
                            </Link>
                          </li>
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Women
                              </Button>
                            </Link>
                          </li>
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Kids
                              </Button>
                            </Link>
                          </li>
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Girls
                              </Button>
                            </Link>
                          </li>
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Boys
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    {/* Fourth submenu item */}
                    <li className="py-2 list-none w-full relative group">
                      <div className="w-full flex items-center">
                        <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                          Men
                        </Button>
                      </div>

                      <div
                        className="
        submenu absolute top-0 !left-[100%] min-w-[150px] bg-white shadow-md
        opacity-0 translate-x-2 scale-95 pointer-events-none transition-all duration-150
        group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 group-hover:pointer-events-auto z-50
      "
                      >
                        <ul
                          className="p-4 overflow-auto max-h-[70vh]"
                          style={{
                            overscrollBehavior: "contain",
                            WebkitOverflowScrolling: "touch",
                          }}
                        >
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Men
                              </Button>
                            </Link>
                          </li>
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Women
                              </Button>
                            </Link>
                          </li>
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Kids
                              </Button>
                            </Link>
                          </li>
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Girls
                              </Button>
                            </Link>
                          </li>
                          <li className="py-2 list-none w-full">
                            <Link to="/" className="w-full block">
                              <Button className="!text-gray-600 w-full !text-left !justify-start hover:!text-[#fc4b03]">
                                Boys
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul> 
                </div>
              </li>

              <li className="list-none mx-4">
                <Link
                  to="/"
                  className="link transition text-[14px] font-[500] "
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#fc4b03]">
                    Electronics
                  </Button>
                </Link>
              </li>

              <li className="list-none mx-4">
                <Link
                  to="/"
                  className="link transition text-[14px] font-[500] "
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#fc4b03]">
                    Bags
                  </Button>
                </Link>
              </li>

              <li className="list-none mx-4">
                <Link
                  to="/"
                  className="link transition text-[14px] font-[500] "
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#fc4b03]">
                    Footware
                  </Button>
                </Link>
              </li>

              <li className="list-none mx-4">
                <Link
                  to="/"
                  className="link transition text-[14px] font-[500] "
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#fc4b03]">
                    Groceries
                  </Button>
                </Link>
              </li>

              <li className="list-none mx-4">
                <Link
                  to="/"
                  className="link transition text-[14px] font-[500] "
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#fc4b03]">
                    Beauty
                  </Button>
                </Link>
              </li>

              <li className="list-none mx-4">
                <Link
                  to="/"
                  className="link transition text-[14px] font-[500] "
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#fc4b03]">
                    Wellness
                  </Button>
                </Link>
              </li>

              <li className="list-none mx-4">
                <Link
                  to="/"
                  className="link transition text-[14px] font-[500] "
                >
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#fc4b03]">
                    Jewelley
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <CategoryPanel
        setIsOpenCatPanel={setIsOpenCatPanel}
        isOpenCatPanel={isOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
