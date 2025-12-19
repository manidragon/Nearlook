import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

// Correct Link import
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider !py-8 !pt-4">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={false}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className="w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className="w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className="w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className="w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className="w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className="w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className="w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className="w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className="w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className="w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
