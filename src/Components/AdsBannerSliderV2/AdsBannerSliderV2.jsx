import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

// Correct Link import
import { Link } from "react-router-dom";
import BannerBox from "../BannerBox/BannerBox";
import BannerBoxV2 from "../bannerBoxV2/BannerBoxV2";

const AdsBannerSliderV2 = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper smlBtn"
      >
        <SwiperSlide>
          <BannerBoxV2 info="left" image={"sub-banner-1.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2 info="right" image={"sub-banner-2.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2 info="left" image={"sub-banner-1.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2 info="left" image={"sub-banner-1.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2 info="left" image={"sub-banner-1.jpg"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBoxV2 info="left" image={"sub-banner-1.jpg"} link={"/"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSliderV2;
