import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

// Correct Link import
import { Link } from "react-router-dom";
import BannerBox from "../BannerBox/BannerBox";

const AdsBannerSlider = (props) => {
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
          <BannerBox
            img={
              "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6cffa3fff32ba438.jpg?q=80"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ab238cef85625011.jpg?q=80"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ae9288e493e946e7.jpg?q=80"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/49ebcb61294a66b1.jpg?q=80"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/a2a0ce812aa9df40.jpg?q=80"
            }
            link={"/"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/20b1822720e11aad.jpg?q=80"
            }
            link={"/"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
