import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation ,Autoplay} from "swiper/modules";
import { MyContext } from "../../App";

const HomeSlider = () => {
  const context = useContext(MyContext);

  const banners = [
    "/mainbanner1.webp",
    "/mainbanner2.webp",
    "/mainbanner3.webp",
    "/mainbanner4.webp",
    "/mainbanner1.webp",
  ];

    const bannerslg = [
    "	https://rukminim1.flixcart.com/fk-p-flap/480/80/image/c26c4fa884f42107.jpg?q=80",
    "	https://rukminim1.flixcart.com/fk-p-flap/480/80/image/1f9c9ad24c2bc37b.jpg?q=80",
    "	https://rukminim1.flixcart.com/fk-p-flap/480/80/image/1338bd4fc60390d8.jpg?q=80",
   
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
                  h-[180px] sm:h-[240px] md:h-[300px] lg:h-[400px]
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
