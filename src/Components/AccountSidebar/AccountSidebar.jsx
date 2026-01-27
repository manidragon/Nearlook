import React from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import Button from "@mui/material/Button";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router";

const AccountSidebar  = () => {
  return (
    <div className="card bg-white shadow-md rounded-md sticky top-[10px] ">
                <div className="w-full p-5 flex items-center justify-center flex-col">
                  <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
                    <img
                      src="https://thumbs.dreamstime.com/b/portrait-young-investor-banker-workplace-inside-bank-office-businessman-business-suit-looking-friendly-291008120.jpg"
                      className="w-full h-full object-cover"
                    />
    
                    <div
                      className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opa
    cy-100"
                    >
                      <FaCloudUploadAlt className="text-[#fff] text-[25px]" />
                      <input
                        type="file"
                        className="absolute top-0 left-0 w-full h-full opacity-0"
                      />
                    </div>
                  </div>
    
                  <h3 style={{ color: "#4A4A4A", fontWeight: 600 }}>Kishor</h3>
    
                  <p
                    style={{ color: "#6F6F6F", fontSize: "13px", fontWeight: 400 }}
                  >
                    kishor451817@gmail.com
                  </p>
                </div>
    
                <ul className="list-none pb-5 bg-[#f1f1f1] myAccountTabs">
                  <li className="w-full">
                    <NavLink
                      to="/my-account"
                      exact={true}
                      activeClassName="isActive"
                    >
                      <Button
                        className="w-full !text-left !px-5 !justify-start !capitalize !rounded-none flex items-center gap-2"
                        style={{
                          color: "#2F2F2F", // text color
                          fontWeight: 500,
                          textTransform: "none",
                        }}
                      >
                        <FaRegUser
                          style={{
                            fontSize: "15px",
                            color: "#2F2F2F", // icon color
                            
                          }}
                        />
                        My Profile
                      </Button>
                    </NavLink>
                  </li>
    
                  <li className="w-full">
                    <NavLink to="/my-list" exact={true} activeClassName="isActive">
                      <Button className="w-full  !py-2 !text-left !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                        <IoMdHeartEmpty className="text-[17px]" /> My List
                      </Button>
                    </NavLink>
                  </li>
    
                  <li className="w-full">
                    <NavLink
                      to="/my-orders"
                      exact={true}
                      activeClassName="isActive"
                    >
                      <Button className="w-full !text-left  !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                        <IoBagCheckOutline className="text-[17px]" /> My Orders
                      </Button>
                    </NavLink>
                  </li>

                    <li className="w-full">
                    <NavLink
                      to="/my-Adresses"
                      exact={true}
                      activeClassName="isActive"
                    >
                      <Button className="w-full !text-left  !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                        <IoBagCheckOutline className="text-[17px]" /> manage adresses
                      </Button>
                    </NavLink>
                  </li>
    
                  <li className="w-full">
                    <Button className="w-full !text-left !py-2  !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                      <IoIosLogOut className="text-[18px]" /> Logout
                    </Button>
                  </li>
                </ul>
              </div>
  )
}

export default AccountSidebar;