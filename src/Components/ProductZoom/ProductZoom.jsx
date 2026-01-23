import React, { useRef, useState, useEffect } from "react";
import { InnerImageZoom } from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Zoom } from "swiper/modules";

import "swiper/css/zoom";
import { Navigation ,Autoplay} from "swiper/modules";

import { Dialog, IconButton } from "@mui/material";
import { FiX } from "react-icons/fi";

// Correct Link import
import { Link } from "react-router-dom";

export const ProductZoom = () => {
    const [isMobile, setIsMobile] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
   const [openGallery, setOpenGallery] = useState(false);
     const galleryRef = useRef(null);
 
   const zoomSliderBig = useRef(null);
  const productImages = [
  "https://api.spicezgold.com/download/file_1734529918447_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-0-202410111253.webp",
  "https://api.spicezgold.com/download/file_1734529918450_miss-ayse-women-s-multicolor-crepe-printed-top-product-images-rvvlrud6qm-1-202410111253.webp",
  "https://api.spicezgold.com/download/file_1734526836569_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg",
  "https://api.spicezgold.com/download/file_1734526836573_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg",
  "https://api.spicezgold.com/download/file_1734526836577_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-3-202403231855.jpg",
  "https://api.spicezgold.com/download/file_1734526836571_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg"
];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderBig.current?.swiper.slideTo(index);
  };
  return (
    <>
      <div className={`flex gap-3 sticky top-55 ${
        isMobile ? "flex-col" : "flex-row"
      }`}>
 
        {/* Sidebar thumbnails */}
        <div className={`slider ${
          isMobile
            ? "order-2 w-full"
            : "order-1 w-[90px]"
        }`} >
          <Swiper
           ref={zoomSliderBig}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
             direction={isMobile ? "horizontal" : "vertical"}
             slidesPerView={isMobile ? 4 : 4}
            spaceBetween={0}
            navigation={false}
            modules={[Navigation,Autoplay]}
            className={isMobile ? "h-auto" : "h-[450px]"}
          >

             {productImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className={`item my-2 mx-1 bg-white rounded-2xl text-center flex items-center justify-center flex-col shadow-md                  ${
                    slideIndex === index
                      ? "border-blue-600"
                      : "border-gray-300"
                  }`}
                onClick={() => goto(index)}
              >
                <img
                 src={img}
                  className={`w-full transition-transform duration-300 hover:scale-110 rounded-2xl h-30 ${
                      isMobile
                        ? "h-[100px] w-full"
                        : "h-[90px] w-full"
                    }`}
                />
              </div>
            </SwiperSlide>

             ))}


            
          </Swiper>
        </div>

        {/* Main preview */}

               <div className="zoomContainer  w-full lg:w-[80%] h-[450px] overflow-hidden rounded-2xl">
         {!isMobile &&  <Swiper 
          ref={zoomSliderBig}
          slidesPerView={1} spaceBetween={0} navigation={false}
             onSlideChange={(swiper) =>
            setSlideIndex(swiper.activeIndex)
          }>
             {productImages.map((img, index) => (

            <SwiperSlide key={index}>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1.6}
                src={img}
              />
              
            </SwiperSlide>
            
              ))}
          </Swiper>}

                  {isMobile && (
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            zoom={true}
            modules={[Zoom]}
            onSlideChange={(s) => setSlideIndex(s.activeIndex)}
            className="h-full"
          >
            {productImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container">
                  <img
                    src={img}
                    className="w-full h-full object-contain"
                    onClick={() => setOpenGallery(true)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        </div>
      </div>

        {/* FULLSCREEN GALLERY (AMAZON STYLE) */}
      <Dialog
        fullScreen
        open={openGallery}
        onClose={() => setOpenGallery(false)}
      >
        <div className="relative w-full h-full bg-white">

          <IconButton
            onClick={() => setOpenGallery(false)}
            className="!absolute top-3 right-3 z-50 !text-black"
          >
            <FiX size={24} />
          </IconButton>

          <Swiper
            ref={galleryRef}
            initialSlide={slideIndex}
            zoom={true}
            modules={[Zoom]}
            className="w-full h-full"
          >
            {productImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container">
                  <img
                    src={img}
                    className="w-full h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Dialog>
    </>
  );
};