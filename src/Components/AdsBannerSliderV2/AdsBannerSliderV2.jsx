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
import BannerBoxV2 from "../bannerBoxV2/BannerBoxV2";

const AdsBannerSliderV2 = (props) => {
  
      const context = useContext(MyContext);
  return (
    <div className="py-2 lg:py-5 w-full resBannerSlider">
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
                      slidesPerView: 5,
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
