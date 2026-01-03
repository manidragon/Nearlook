import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

 const HomeSlider = () => {
  return (
    <>
      <div className="homeSlider !py-4 overflow-hidden">
        <div className="container">
          <Swiper
            loop={true}
            spaceBetween={50}
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2500,

              disableOnInteraction: false,
            }}
            speed={500}
            className="sliderHome mySwiper"
          >
            <SwiperSlide>
              <div className="item rounded-3xl overflow-hidden">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a64908ba9bf2fe36.jpg?q=80"
                  alt="Slider Image 1"
                  className="w-full h-[300px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-3xl overflow-hidden">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1338bd4fc60390d8.jpg?q=80"
                  alt="Slider Image 1"
                  className="w-full h-[300px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-3xl overflow-hidden">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/6827264f05a3ddf7.jpeg?q=80"
                  alt="Slider Image 1"
                  className="w-full h-[300px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-3xl overflow-hidden">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/e94a135f02381d3a.jpg?q=80"
                  alt="Slider Image 1"
                  className="w-fu
                ll h-[300px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item rounded-3xl overflow-hidden">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/f3a92f755ffe0d43.jpeg?q=80"
                  alt="Slider Image 1"
                  className="w-full h-[300px]"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HomeSlider;