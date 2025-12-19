import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

// Correct Link import
import { Link } from "react-router-dom";

import ProductItem from '../ProductItem/ProductItem';

 const ProductsSlider = (props) => {
  return (
      <div className="productsSlider py-5 !pt-8">
          
          <Swiper
                    slidesPerView={props.items}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
              <SwiperSlide>
                  <ProductItem />
              </SwiperSlide>
              <SwiperSlide>
                  <ProductItem />
              </SwiperSlide>
              <SwiperSlide>
                  <ProductItem />
              </SwiperSlide>
              <SwiperSlide>
                  <ProductItem />
              </SwiperSlide>
              <SwiperSlide>
                  <ProductItem />
              </SwiperSlide>
              <SwiperSlide>
                  <ProductItem />
              </SwiperSlide>
              <SwiperSlide>
                  <ProductItem />
              </SwiperSlide>
              <SwiperSlide>
                  <ProductItem />
              </SwiperSlide>
            </Swiper>
          
      </div> 
  );
}
export default ProductsSlider;