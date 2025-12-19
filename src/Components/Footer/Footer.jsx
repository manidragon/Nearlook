import React from "react";
import { LiaShippingFastSolid, LiaGiftSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";

import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="py-6 bg-[#fafafa]">
        <div className="container mx-0 ">
          
          {/* top icons */}
          <div className="flex flex-wrap items-center justify-center gap-4 py-8 pb-8">
            
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-3" />
              <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
              <p className="text-[12px] font-[500]">For all Orders Over $100</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <PiKeyReturnLight className="text-[40px] transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-3" />
              <h3 className="text-[16px] font-[600] mt-3">30 Days Returns</h3>
              <p className="text-[12px] font-[500]">For an Exchange Product</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <BsWallet2 className="text-[40px] transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-3" />
              <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
              <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-3" />
              <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
              <p className="text-[12px] font-[500]">Our First Product Order</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-red-500 group-hover:-translate-y-3" />
              <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
              <p className="text-[12px] font-[500]">Contact us Anytime</p>
            </div>

          </div>
          <hr />

          {/* footer links */}
          <div className="footer flex py-8 flex-wrap">

            {/* contact */}
            <div className="part1 w-[25%]">
              <h2 className="text-[18px] font-[600] mb-4">Contact us</h2>
              <p className="text-[13px] font-[400] pb-4">
                Classyshop - Mega Super Store
                <br />
                507-Union Trade Centre France
              </p>

              <a className="text-[13px]" href="mailto:sales@yourcompany.com">
                sales@yourcompany.com
              </a>

              <span className="text-[22px] font-[600] block w-full mt-3 mb-5 text-red-500">
                (+91) 9876-543-210
              </span>

              <div className="flex items-center gap-2">
                <IoChatboxOutline className="text-[40px] text-red-500" />
                <span className="text-[16px] font-[600]">
                  Online Chat
                  <br />
                  Get Expert Help
                </span>
              </div>
            </div>

            {/* mid menu */}
            <div className="part2 w-[40%] flex pl-8">
              <div className="w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Products</h2>
                <ul>
                  <li><Link to="/">Prices drop</Link></li>
                  <li><Link to="/">New products</Link></li>
                  <li><Link to="/">Best Sales</Link></li>
                  <li><Link to="/">Contact Us</Link></li>
                  <li><Link to="/">Sitemap</Link></li>
                  <li><Link to="/">Stores</Link></li>
                </ul>
              </div>

              <div className="w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Our Company</h2>
                <ul>
                  <li><Link to="/">Delivery</Link></li>
                  <li><Link to="/">Legal Notice</Link></li>
                  <li><Link to="/">Terms & Conditions</Link></li>
                  <li><Link to="/">About Us</Link></li>
                  <li><Link to="/">Secure Payment</Link></li>
                  <li><Link to="/">Login</Link></li>
                </ul>
              </div>
            </div>

            {/* newsletter form */}
            <div className="part3 w-[35%] pl-8 pr-8 flex flex-col">
              <h2 className="text-[18px] font-[600] mb-4">Subscribe to newsletter</h2>
              <p className="text-[13px]">
                Subscribe to our latest newsletter to get news about special discounts.
              </p>

              <form className="mt-5">
                <input
                  type="email"
                  className="w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-4"
                  placeholder="Your Email Address"
                />

                <Button variant="contained" color="error">
                  SUBSCRIBE
                </Button>

                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="I agree to the terms and conditions and the privacy policy"
                />
              </form>
            </div>

          </div>
        </div>
      </footer>

      {/* bottom strip */}
      <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3 bg-white">
        <div className="container flex items-center justify-between">
          
          <ul className="flex items-center gap-2">

            <li>
              <a href="/" target="_blank" rel="noreferrer"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] inline-flex items-center justify-center transition-all hover:bg-red-500 group"
              >
                <FaFacebookF className="text-[15px] group-hover:text-white" />
              </a>
            </li>

            <li>
              <a href="/" target="_blank" rel="noreferrer"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] inline-flex items-center justify-center transition-all hover:bg-red-500 group"
              >
                <AiOutlineYoutube className="text-[20px] group-hover:text-white" />
              </a>
            </li>

            <li>
              <a href="/" target="_blank" rel="noreferrer"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] inline-flex items-center justify-center transition-all hover:bg-red-500 group"
              >
                <FaPinterestP className="text-[15px] group-hover:text-white" />
              </a>
            </li>

            <li>
              <a href="/" target="_blank" rel="noreferrer"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] inline-flex items-center justify-center transition-all hover:bg-red-500 group"
              >
                <FaInstagram className="text-[15px] group-hover:text-white" />
              </a>
            </li>

          </ul>

          <p className="text-[13px]">
            © 2024 - Ecommerce Template
          </p>

          <div className="flex">
            <img src="/payment-all-6.png" alt="payments" />
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
