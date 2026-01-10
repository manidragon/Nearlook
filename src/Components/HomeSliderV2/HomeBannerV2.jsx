import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@mui/material/Button";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { MyContext } from "../../App";
import { useContext } from "react";

const HomeBannerV2 = () => {

  const context = useContext(MyContext);
 
   const head2="Women Solid Round Green T-Shirt";
      const head3="Buy Modern Chair In";
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      effect="fade"
      navigation={context.windowWidth >= 992}
      pagination={{ clickable: true }}
      // autoplay={{delay:2500, disableOnInteraction:false}}
      modules={[EffectFade, Navigation, Pagination,Autoplay]}
      className="homeSliderV2"
    >
      <SwiperSlide>
        <div className="item relative w-full rounded-md overflow-hidden">
          <img
            src="./main-banner-1.jpg"
            alt="Banner"
            className="w-full h-[180px] sm:h-[300px]  lg:h-[500px] object-cover"
          />

          <div className="info absolute top-0 -right-[100%] opacity-0 transition-all duration-700  w-[50%] h-[100%] z-50 p-8 flex flex-col justify-center">
            <h4 className="text-[12px] font-[500] w-full text-left !mb-3 relative -right-[100%] opacity-0 hidden lg:block">
              Big Saving Days Sale
            </h4>

           
              { context.windowWidth < 992 &&   <h2 className=" text-[15px] sm:text-[px] md:text-[25px]   lg:text-[30px]  font-[700] w-full  relative -right-[100%] opacity-0">
                 {head2.length > 30 ? head2.substring(0, 30) + "..." : head2}
                </h2>
              }
   { context.windowWidth > 992 &&   <h2 className=" text-[15px] lg:text-[30px]  font-[700] w-full  relative -right-[100%] opacity-0">
                 {head2.length > 70? head2.substring(0, 70) + "..." : head2}
                </h2>
              }
       

            <h3 className="flex items-center gap-0 lg:gap-3 text-[12px] lg:text-[18px] font-[500] w-full !mt-3 mb-0  lg:mb-3 relative -right-[100%] opacity-0 flex-col lg:flex-row">
              <span className="block lg:inline w-full lg:w-max">Starting At Only</span>
              {""}
              <span className="text-orange-500 text-[16 px] lg:text-[30px] font-[700] block lg:inline w-full lg:w-auto">
                Rs.59.00
              </span>
            </h3>

            <div className="w-full relative -right-[100%] opacity-0 btn_">
              <Button className="  btn !bg-orange-600 hover:!bg-orange-700 !text-white !py-3 !rounded-md !font-semibold h-8">
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
            className="w-full  h-[180px] sm:h-[300px] lg:h-[500px] object-cover"
          />

          <div className="info absolute top-0 -right-[100%] opacity-0 transition-all duration-700  w-[50%] h-[100%] z-50 p-8 flex flex-col justify-center">
            <h4 className="text-[12px] font-[500] w-full text-left !mb-3 relative -right-[100%] opacity-0 hidden lg:block">
              Big Saving Days Sale
            </h4>

                 { context.windowWidth < 992 &&   <h2 className=" text-[15px] sm:text-[20px] md:text-[25px]   lg:text-[30px]  font-[700] w-full  relative -right-[100%] opacity-0">
                 {head3.length > 30 ? head3.substring(0, 30) + "..." : head3}<br/>blackcolor
                </h2>
              }
   { context.windowWidth > 992 &&   <h2 className=" text-[16px] lg:text-[30px]  font-[700] w-full  relative -right-[100%] opacity-0">
                 {head3.length > 70? head2.substring(0, 70) + "..." : head3}<br/>blackcolor
                </h2>
              }
       

           <h3 className="flex items-center gap-0 lg:gap-3 text-[12px] lg:text-[18px] font-[500] w-full !mt-3 mb-0  lg:mb-3 relative -right-[100%] opacity-0 flex-col lg:flex-row">
              <span className="block lg:inline w-full lg:w-max">Starting At Only</span>
              {""}
              <span className="text-orange-500 text-[16 px] lg:text-[30px] font-[700] block lg:inline w-full lg:w-auto">
                Rs.99.00
              </span>
            </h3>

            <div className="w-full relative -right-[100%] opacity-0 btn_">
              <Button className="  btn !bg-orange-600 hover:!bg-orange-700 !text-white !py-3 !rounded-md !font-semibold h-8">
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
