import React, { useContext } from "react";
import { LiaShippingFastSolid, LiaGiftSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoChatboxOutline, IoCloseSharp } from "react-icons/io5";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


import Drawer from "@mui/material/Drawer";
import CartPanel from "../CartPanel/Cart.jsx";

import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import { MyContext } from "../../App.jsx";

const Footer = () => {
  const context = useContext(MyContext);

  return (
    <div className="relative bg-[#222] font-sans text-gray-300 ">
      <footer className="bg-[#222]">
        {/* Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden bg-[#222] text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86
              82.39-16.72,168.19-17.73,250.45-.39
              C823.78,31,906.67,72,985.66,92.83
              c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35
              A600.21,600.21,0,0,0,321.39,56.44Z"
              className="block h-[120px] fill-white"
            />
          </svg>
        </div>

        <div className="container mx-auto px-3 lg:px-6 pt-24 ">
          {/* TOP ICON STRIP */}
          <div className="flex items-center justify-evenly gap-4 py-3 lg:py-10 pb-0 lg:pb-8 px-0 lg:px-5 mt-3 scrollableBox   ">

<Swiper
  watchSlidesProgress={true}
  spaceBetween={16}
  freeMode={true}
  loop={true}
  modules={[FreeMode, Autoplay]}
  autoplay={{
    delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  className="mySwiper !py-5"
  breakpoints={{
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 5 },
  }}
>
  {[
    {
      icon: <LiaShippingFastSolid />,
      title: "Free Shipping",
      desc: "For all Orders Over $100",
    },
    {
      icon: <PiKeyReturnLight />,
      title: "30 Days Returns",
      desc: "For an Exchange Product",
    },
    {
      icon: <BsWallet2 />,
      title: "Secured Payment",
      desc: "Payment Cards Accepted",
    },
    {
      icon: <LiaGiftSolid />,
      title: "Special Gifts",
      desc: "Our First Product Order",
    },
    {
      icon: <BiSupport />,
      title: "Support 24/7",
      desc: "Contact us Anytime",
    },
  ].map((item, index) => (
    <SwiperSlide
      key={`footer-slide-${item.title}-${index}`}
      className="!h-auto"
    >
      <div className="flex flex-col items-center text-center group cursor-pointer">
        <div className="text-8xl sm:text-4xl transition-all duration-300 group-hover:text-orange-500 group-hover:-translate-y-2">
          {item.icon}
        </div>
        <h3 className="text-3xl sm:text-base font-semibold mt-3 text-white">
          {item.title}
        </h3>
        <p className="text-xs sm:text-sm">{item.desc}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

          </div>
          

          <hr className="border-gray-700" />

          {/* MAIN FOOTER */}
          <div className="flex flex-col lg:flex-row py-10 gap-10">
            {/* CONTACT */}
<div className="w-full lg:w-[25%]">
  <h2 className="text-lg sm:text-xl font-semibold mb-6 text-white">
    Contact Us
  </h2>

  {/* Address */}
  <div className="flex items-center gap-4 mb-5">
    <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shrink-0">
      <FaMapMarkerAlt className="text-white text-lg" />
    </div>

    <p className="text-sm sm:text-base leading-relaxed text-gray-300">
      184/F-31/1 Solaimalai Ayyanar Kovil Street, Pugal Coffee Opp, Theni,
      Tamil Nadu - 625531
    </p>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-4 mb-5">
    <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shrink-0">
      <FaPhoneAlt className="text-white text-lg" />
    </div>

    <a
      href="tel:+919876543210"
      className="text-base sm:text-lg font-semibold text-orange-500 hover:underline"
    >
      (+91) 9876-543-210
    </a>
  </div>

  {/* Emails */}
  <div className="flex items-center gap-4">
    <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shrink-0">
      <FaEnvelope className="text-white text-lg" />
    </div>

    <div className="flex flex-col">
      <a
        href="mailto:info@nearlooks.com"
        className="text-sm sm:text-base hover:text-orange-500 transition"
      >
        info@nearlooks.com
      </a>
      <a
        href="mailto:career@nearlooks.com"
        className="text-sm sm:text-base hover:text-orange-500 transition"
      >
        career@nearlooks.com
      </a>
    </div>
  </div>
</div>


            {/* LINKS */}
            <div className="w-full lg:w-[40%] flex gap-8">
              {[
                {
                  title: "Products",
                  links: [
                    "Prices Drop",
                    "New Products",
                    "Best Sales",
                    "Contact Us",
                    "Sitemap",
                    "Stores",
                  ],
                },
                {
                  title: "Our Company",
                  links: [
                    "Delivery",
                    "Legal Notice",
                    "Terms & Conditions",
                    "About Us",
                    "Secure Payment",
                    "Login",
                  ],
                },
              ].map((section, index) => (
                <div key={index} className="w-1/2">
                  <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white">
                    {section.title}
                  </h2>
                  <ul>
                    {section.links.map((link, i) => (
                      <li key={i} className="mb-2">
                        <Link
                          to="/"
                          className="text-sm sm:text-base hover:text-orange-500 transition"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* NEWSLETTER */}
            <div className="w-full lg:w-[35%]">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 text-white">
                Subscribe to Newsletter
              </h2>

              <p className="text-sm sm:text-base mb-5">
                Subscribe to our latest newsletter to get news about special
                discounts.
              </p>
<form>
  <div className="flex w-full overflow-hidden rounded border border-gray-600 focus-within:border-orange-500">
    <input
      type="email"
      className="flex-1 bg-transparent outline-none px-4 py-3 text-sm sm:text-base text-white placeholder-gray-400"
      placeholder="Enter your email"
    />

    <button
      type="submit"
      className="bg-orange-500 hover:bg-orange-600 transition px-5 text-sm sm:text-base font-semibold text-white"
    >
      Subscribe
    </button>
  </div>

<FormControlLabel
  className="mt-3 text-xs sm:text-sm"
  control={
    <Checkbox
      defaultChecked
      sx={{
        color: "#9CA3AF", // gray when unchecked
        "&.Mui-checked": {
          color: "#F97316", // ORANGE when checked
        },
        "&:hover": {
          backgroundColor: "rgba(249, 115, 22, 0.1)", // soft orange hover
        },
      }}
    />
  }
  label="I agree to the terms and conditions and the privacy policy"
/>
</form>

            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="border-t border-gray-700 py-4">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 px-3 lg:px-6">
            <ul className="flex items-center gap-3">
              {[FaFacebookF, AiOutlineYoutube, FaPinterestP, FaInstagram].map(
                (Icon, index) => (
                  <li key={index}>
                    <a
                      href="/"
                      className="w-[35px] h-[35px] rounded-full border border-gray-600 inline-flex items-center justify-center transition hover:bg-orange-500 group"
                    >
                      <Icon className="text-sm group-hover:text-white" />
                    </a>
                  </li>
                )
              )}
            </ul>

            <p className="text-sm sm:text-base">
              © 2025 — NearLook Mart Pvt Ltd
            </p>

            <img
              src="/payment-all-6.png"
              alt="Payments"
              className="h-[25px]"
            />
          </div>
        </div>

<Drawer
  anchor="right"
  open={context.openCartPanel}
  onClose={context.toggleCartPanel(false)}
  PaperProps={{
    sx: {
      width: {
        xs: "100%",   
        sm: 320,     
        md: 360,     
        lg: 400     
      },
      maxWidth: "100vw"
    }
  }}
>
  <div className="p-4">
    <div className="flex items-center justify-between mb-3 pb-2 border-b">
      <h4 className="font-semibold">Shopping Cart (1)</h4>
      <IoCloseSharp
        size={20}
        className="cursor-pointer"
        onClick={context.toggleCartPanel(false)}
      />
    </div>

    <CartPanel />
  </div>
</Drawer>

      </footer>
    </div>
  );
};

export default Footer;
