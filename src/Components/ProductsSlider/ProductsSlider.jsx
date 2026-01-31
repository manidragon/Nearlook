import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import { MyContext } from "../../App";

import ProductItem from "../ProductItem/ProductItem";
import { PRODUCTS } from "../../data/products";

const ProductsSlider = (props) => {
  const context = useContext(MyContext);

  return (
    <div className="productsSlider py-5 !pt-8">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={context.windowWidth >= 992}
        freeMode={true}
        loop={true} // smoother infinite scroll
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, FreeMode, Autoplay]}
        breakpoints={{
          250: { slidesPerView: 1, spaceBetween: 10 },
          330: { slidesPerView: 2, spaceBetween: 10 },
          450: { slidesPerView: 3, spaceBetween: 10 },
          1100: { slidesPerView: 6, spaceBetween: 10 },
          1280: { slidesPerView: 7, spaceBetween: 10 },
        }}
        className="mySwiper"
      >
        {PRODUCTS.map((product, index) => (
          <SwiperSlide
            key={`product-slide-${product.id}-${index}`}
            className="!h-auto flex"
          >
            <div className="w-full h-full flex">
              <ProductItem product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
