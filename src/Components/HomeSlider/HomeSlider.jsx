import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation ,Autoplay} from "swiper/modules";
import { MyContext } from "../../App";

const HomeSlider = () => {
  const context = useContext(MyContext);

  const banners = [
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a64908ba9bf2fe36.jpg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1338bd4fc60390d8.jpg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/6827264f05a3ddf7.jpeg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/e94a135f02381d3a.jpg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/f3a92f755ffe0d43.jpeg?q=80",
  ];

  return (
    <div className="homeSlider relative py-2 lg:py-5">
      <div className="container px-0">
        <Swiper
         slidesPerView={1}
          loop
          spaceBetween={40}
          navigation={context.windowWidth >= 992}
          modules={[Navigation,Autoplay]}
          autoplay={{delay:2500, disableOnInteraction:false}}
          speed={500}
          className="sliderHome"
        >
          {banners.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  relative
                  w-full
                  h-[180px] sm:h-[240px] md:h-[300px] lg:h-[340px]
                  rounded-[10px]
                  overflow-hidden
                "
              >
                {/* Blurred background fill */}
           

                {/* Actual image (no crop) */}
                <div
                  className="absolute inset-0 bg-cover  bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
