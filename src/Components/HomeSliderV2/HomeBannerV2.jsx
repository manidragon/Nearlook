import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@mui/material/Button";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const HomeBannerV2 = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      effect="fade"
      navigation
      pagination={{ clickable: true }}
      autoplay={{delay:2500, disableOnInteraction:false}}
      modules={[EffectFade, Navigation, Pagination,Autoplay]}
      className="homeSliderV2"
    >
      <SwiperSlide>
        <div className="item relative w-full rounded-md overflow-hidden">
          <img
            src="./main-banner-1.jpg"
            alt="Banner"
            className="w-full h-[500px] object-cover"
          />

          <div className="info absolute top-0 -right-[100%] opacity-0 transition-all duration-700  w-1/2 h-full z-50 p-8 flex flex-col justify-center">
            <h4 className="text-[18px] font-medium !mb-3 relative -right-[100%] opacity-0">
              Big Saving Days Sale
            </h4>

            <h2 className="text-[35px] font-[700] leading-tight relative -right-[100%] opacity-0">
              Women Solid Round Green T-Shirt
            </h2>

            <h3 className="flex items-center gap-3 text-[18px] font-[500] !mt-3 relative -right-[100%] opacity-0">
              Starting At Only
              <span className="text-orange-500 text-[30px] font-[800]">
                Rs.59.00
              </span>
            </h3>

            <div className="w-full relative -right-[100%] opacity-0 btn_">
              <Button className="  !bg-orange-600 hover:!bg-orange-700 !text-white !py-3 !rounded-md !font-semibold h-8">
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="item relative w-full rounded-md overflow-hidden">
          <img
            src="./sub-banner-2.jpg"
            alt="Banner"
            className="w-full h-[500px] object-cover"
          />

          <div className="info absolute top-0 -right-[100%] opacity-0 transition-all duration-700 w-1/2 h-full z-50 p-8 flex flex-col justify-center">
            <h4 className="text-[18px] font-medium !mb-3 relative -right-[100%] opacity-0 duration-1000">
              Big Saving Days Sale
            </h4>

            <h2 className="text-[35px] font-[700] leading-tight relative -right-[100%] opacity-0">
              Buy Modern Chair In
              <br /> Black Color
            </h2>

            <h3 className="flex items-center gap-3 text-[18px] font-[500] !mt-3 relative -right-[100%] opacity-0">
              Starting At Only
              <span className="text-orange-500 text-[30px] font-[800]">
                Rs.99.00
              </span>
            </h3>

            <div className="w-full relative -right-[100%] opacity-0 btn_">
              <Button className="  !bg-orange-600 hover:!bg-orange-700 !text-white !py-3 !rounded-md !font-semibold h-8 ">
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeBannerV2;
