import React from "react";
import { InnerImageZoom } from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Correct Link import
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const ProductZoom = () => {
  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[30%]">
          <Swiper
          
            slidesPerView={8}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="item">
                <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/j/n/q/xl-ma-lamba-creations-original-imahfwu3yshxyqnw.jpeg?q=70&crop=false" alt="vertical img" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="zoomContainer w-[70%]">
          <InnerImageZoom
            zoomType="hover"
            zoomScale={1}
            src="https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/j/n/q/xl-ma-lamba-creations-original-imahfwu3yshxyqnw.jpeg?q=70&crop=false"
          />
        </div>
      </div>
    </>
  );
};
