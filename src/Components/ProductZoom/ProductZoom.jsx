import React, { useRef, useState } from "react";
import { InnerImageZoom } from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation ,Autoplay} from "swiper/modules";

// Correct Link import
import { Link } from "react-router-dom";

export const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto= (index) => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo (index);
    zoomSliderBig.current.swiper.slideTo (index);
  }
  return (
    <>
      <div className=" gap-3 ">
        <div className="zoomContainer w-[80%] h-[500px] overflow-hidden rounded-2xl">
          <Swiper 
          ref={zoomSliderBig}
          slidesPerView={1} spaceBetween={0} navigation={false}>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1.5}
                src="https://api.spicezgold.com/download/file_1734529918447_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1.5}
                src="https://api.spicezgold.com/download/file_1734529918450_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-1-202410111253.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1.5}
                src="https://api.spicezgold.com/download/file_1734526836569_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1.5}
                src="https://api.spicezgold.com/download/file_1734526836573_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1.5}
                src="https://api.spicezgold.com/download/file_1734526836577_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-3-202403231855.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1.5}
                src="https://api.spicezgold.com/download/file_1734526836571_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Sidebar thumbnails */}
        <div className="slider w-[80%] mx-1 ">
          <Swiper
          ref={zoomSliderSml}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView={4}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation,Autoplay]}
            className="zoomProductSliderThumbs"
          >
            <SwiperSlide>
              <div
                className="item m-2  bg-white rounded-2xl text-center flex items-center justify-center flex-col shadow-md"
                onClick={() => goto(0)}
              >
                <img
                  src="https://api.spicezgold.com/download/file_1734529918447_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp"
                  className="w-full transition-transform duration-300 hover:scale-110 rounded-2xl h-30"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="item m-2 bg-white rounded-2xl text-center flex items-center justify-center flex-col shadow-md  "
                onClick={() => goto(1)}
              >
                <img
                  src="https://api.spicezgold.com/download/file_1734529918450_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-1-202410111253.webp"
                  className="w-full transition-transform duration-300 hover:scale-110 rounded-2xl h-30"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="item m-2 bg-white rounded-2xl text-center flex items-center justify-center flex-col shadow-md  "
                onClick={() => goto(2)}
              >
                <img
                  src="https://api.spicezgold.com/download/file_1734526836569_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
                  className="w-full transition-transform duration-300 hover:scale-110 rounded-2xl h-30"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="item m-2 bg-white rounded-2xl text-center flex items-center justify-center flex-col shadow-md  "
                onClick={() => goto(3)}
              >
                <img
                  src="https://api.spicezgold.com/download/file_1734526836573_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg"
                  className="w-full transition-transform duration-300 hover:scale-110 rounded-2xl h-30"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="item m-2 bg-white rounded-2xl text-center flex items-center justify-center flex-col shadow-md  "
                onClick={() => goto(4)}
              >
                <img
                  src="https://api.spicezgold.com/download/file_1734526836577_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-3-202403231855.jpg"
                  className="w-full transition-transform duration-300 hover:scale-110 rounded-2xl h-30"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="item m-2 bg-white rounded-2xl text-center flex items-center justify-center flex-col shadow-md  "
                onClick={() => goto(5)}
              >
                <img
                  src="https://api.spicezgold.com/download/file_1734526836571_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg"
                  className="w-full transition-transform duration-300 hover:scale-110 rounded-2xl h-30"
                />
              </div>
            </SwiperSlide>

            
          </Swiper>
        </div>

        {/* Main preview */}
      </div>
    </>
  );
};