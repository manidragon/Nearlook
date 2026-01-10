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

const HomeCatSlider = () => {

  const context=useContext(MyContext);
  return (
    <div className="homeCatSlider py-4 lg:!py-8   lg:!pt-4">
      <div className="container px-4">
        <Swiper
          slidesPerView={8}
          spaceBetween={12}
          navigation={context.windowWidth >= 992}
          modules={[Navigation,FreeMode]}
          className="mySwiper"
          freeMode={true}
          breakpoints={{
            300:{
              slidesPerView:4,
              spaceBetween:5,
            },
            550: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            900: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
            1100: {
              slidesPerView: 6,
              spaceBetween: 5,
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 5,
            },
          }}
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className=" w-[40px] lg:w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[12px] lg:text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className=" w-[40px] lg:w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[12px] lg:text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className=" w-[40px] lg:w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[12px] lg:text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className=" w-[40px] lg:w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[12px] lg:text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className=" w-[40px] lg:w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[12px] lg:text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className=" w-[40px] lg:w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[12px] lg:text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className=" w-[40px] lg:w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[12px] lg:text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className=" w-[40px] lg:w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[12px] lg:text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className=" w-[40px] lg:w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[12px] lg:text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-4 lg:py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col shadow-md">
                <img
                  src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100"
                  className=" w-[40px] lg:w-[60px] transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-[12px] lg:text-[15px] font-2xl mt-3">Mobiles</h3>
              </div>
            </Link>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
