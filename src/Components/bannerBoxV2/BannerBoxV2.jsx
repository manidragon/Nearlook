import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const BannerBoxV2 = ({ image, info }) => {
  return (
    <div className="bannerBoxV2 w-full overflow-hidden rounded-md group relative">
      <img
        src={image}
        alt="sub-banner-img"
        className="w-full transition-transform duration-150 group-hover:scale-105"
      />

      <div
        className={`info absolute top-0 !p-5 ${
          info === "left" ? "left-0" : "right-0"
        } w-[70%] h-[100%] z-50 flex flex-col items-start justify-center gap-2 ${
          info === "left" ? "" : "!pl-12"
        }`}
      >
        <h2 className="!text-[20px] !font-[600]">
          Samsung Gear VR Camera
        </h2>

        <span className="text-[20px] text-orange-500 font-semibold w-full">
          ₹129.00
        </span>

        <div className="w-full">
          <Link
            to="/"
            className="text-[16px] font-semibold text-black hover:text-orange-500 transition-colors underline"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBoxV2;
