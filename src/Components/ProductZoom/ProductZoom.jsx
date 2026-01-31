import React, { useRef, useState, useEffect } from "react";
import { InnerImageZoom } from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";

import { Zoom, Navigation, Autoplay } from "swiper/modules";

import { Dialog, IconButton } from "@mui/material";
import { FiX } from "react-icons/fi";

const FALLBACK_IMAGE = "/no-image.png";

export const ProductZoom = ({ images = [] }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [openGallery, setOpenGallery] = useState(false);

  const zoomSliderBig = useRef(null);
  const galleryRef = useRef(null);

  const productImages =
    images.length > 0 ? images : [FALLBACK_IMAGE];

  const canLoop = productImages.length > 1;

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
    zoomSliderBig.current?.swiper?.slideTo(index);
  };

  return (
    <>
      <div
        className={`flex gap-3 sticky top-20 ${
          isMobile ? "flex-col" : "flex-row"
        }`}
      >
        {/* THUMBNAILS */}
        <div
          className={`slider ${
            isMobile ? "order-2 w-full" : "order-1 w-[90px]"
          }`}
        >
          <Swiper
            ref={zoomSliderBig}
            loop={canLoop}
            autoplay={
              canLoop
                ? {
                    delay: 2000,
                    disableOnInteraction: false,
                  }
                : false
            }
            direction={isMobile ? "horizontal" : "vertical"}
            slidesPerView={4}
            spaceBetween={8}
            navigation={false}
            modules={[Navigation, Autoplay]}
            className={isMobile ? "h-auto" : "h-[450px]"}
          >
            {productImages.map((img, index) => (
              <SwiperSlide key={img + index}>
                <div
                  className={`item my-2 mx-1 bg-white rounded-2xl text-center 
                  flex items-center justify-center shadow-md border-2 cursor-pointer
                  ${
                    slideIndex === index
                      ? "border-orange-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => goto(index)}
                >
                  <img
                    src={img}
                    alt="thumbnail"
                    className={`w-full transition-transform duration-300 hover:scale-110 rounded-2xl
                    ${isMobile ? "h-[100px]" : "h-[90px]"}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* MAIN PREVIEW */}
        <div className="zoomContainer w-full lg:w-[80%] h-[450px] overflow-hidden rounded-2xl">
          {!isMobile && (
            <Swiper
              ref={zoomSliderBig}
              slidesPerView={1}
              spaceBetween={0}
              loop={canLoop}
              navigation={false}
              onSlideChange={(swiper) =>
                setSlideIndex(swiper.activeIndex)
              }
            >
              {productImages.map((img, index) => (
                <SwiperSlide key={img + index}>
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1.6}
                    src={img}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {isMobile && (
            <Swiper
              ref={zoomSliderBig}
              slidesPerView={1}
              zoom={true}
              loop={canLoop}
              modules={[Zoom]}
              onSlideChange={(s) =>
                setSlideIndex(s.activeIndex)
              }
              className="h-full"
            >
              {productImages.map((img, index) => (
                <SwiperSlide key={img + index}>
                  <div className="swiper-zoom-container">
                    <img
                      src={img}
                      alt="product"
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

      {/* FULLSCREEN GALLERY */}
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
            loop={canLoop}
            modules={[Zoom]}
            className="w-full h-full"
          >
            {productImages.map((img, index) => (
              <SwiperSlide key={img + index}>
                <div className="swiper-zoom-container">
                  <img
                    src={img}
                    alt="zoomed"
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
