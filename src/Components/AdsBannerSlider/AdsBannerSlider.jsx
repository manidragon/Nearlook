import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Navigation , FreeMode} from "swiper/modules";
import "swiper/css/free-mode";
import { MyContext } from "../../App";
import { useContext } from "react";

// Correct Link import
import { Link } from "react-router-dom";
import BannerBox from "../BannerBox/BannerBox";

const AdsBannerSlider = (props) => {
  
    const context = useContext(MyContext);
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={context.windowWidth >= 992}
                  modules={[Navigation,FreeMode]}
                  freeMode={true}
                      breakpoints={{
                    300:{
                      slidesPerView:1,
                      spaceBetween:5,
                    },
                    500: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    750: {
                      slidesPerView: 3,
                      spaceBetween: 5,
                    },
                    1100: {
                      slidesPerView: 4,
                      spaceBetween: 5,
                    },
                    1280: {
                      slidesPerView: 5,
                      spaceBetween: 5,
                    },
                  }}
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
