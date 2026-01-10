import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const BannerBoxV2 = ({ image, info }) => {
  return (
    <div className="bannerBoxV2 box  w-full overflow-hidden rounded-md group relative">
      <img
        src={image}
        alt="sub-banner-img"
        className="w-full transition-transform object-contain duration-150 group-hover:scale-105"
      />

      <div
        className={`info absolute top-0 !p-5 pl-9 ${
          info === "left" ? "left-0" : "right-0"
        } w-[60%] h-[100%] z-50 flex flex-col items-start justify-center gap-2 ${
          info === "left" ? "" : "pl-20 lg:!pl-18"
        }`}
      >
<h2 className="
  text-[13px]
  leading-tight
  sm:text-[15px]
  md:text-[18px]
  lg:text-[20px]
  font-semibold
  break-words
">
  Samsung Gear VR Camera
</h2>

<span className="
  text-[16px]
  sm:text-[18px]
  md:text-[20px]
  lg:text-[22px]
  text-orange-500
  font-semibold
">
  ₹129.00
</span>


<Link
  to="/"
  className="
    text-[13px]
    sm:text-[14px]
    lg:text-[16px]
    font-semibold
    text-black
    hover:text-orange-500
    transition-colors
    underline
  "
>
  SHOP NOW
</Link>

      </div>
    </div>
  );
};

export default BannerBoxV2;
