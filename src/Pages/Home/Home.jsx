import React from "react";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import HomeCatSlider from "../../Components/CatSlider/CatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../Components/AdsBannerSlider/AdsBannerSlider";
import AdsBannerSliderV2 from "../../Components/AdsBannerSliderV2/AdsBannerSliderV2";
import BlogItem from "../../Components/BlogItem/BlogItem";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeBannerV2 from "../../Components/HomeSliderV2/HomeBannerV2";
import ProductsSlider from "../../Components/ProductsSlider/ProductsSlider";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation , FreeMode} from "swiper/modules";
import "swiper/css/free-mode";
import { MyContext } from "../../App";
import { useContext } from "react";

import BannerBoxV2 from "../../Components/bannerBoxV2/BannerBoxV2";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const context = useContext(MyContext);

  const handleChange = (even, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="min-h-max lg:min-h-[65vh] homeBanner mb-0 overflow-hidden">
        <HomeSlider />

 <section className="!py-6 pt-0 bg-white">
          <div className="container flex  flex-col lg:flex-row gap-5">
            <div className="part1  w-full lg:w-[70%]">
              <HomeBannerV2 />
            </div>

            <div className="part2  scrollableBox h-auto lg:h-[500px] w-full lg:w-[30%] !pl-2 flex items-center  justify-between gap-5 flex-row  lg:flex-col">
              <BannerBoxV2 info="left" image={"sub-banner-1.jpg"} />

              <BannerBoxV2 info="right" image={"sub-banner-2.jpg"} />
            </div>
          </div>
        </section>

        

        <HomeCatSlider />

        <section className="bg-white py-8">
          <div className="container">
            <div className="flex items-center justify-between flex-col lg:flex-row mb-6 !pt-4">
              <div className="leftSec w-full lg:!w-[40%] ">
                <h2 className="text-[14px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-[600]">Top Deals on Products</h2>
                <p className="text-[14px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-[600] ">
                  Grab the best deals on fashion products
                </p>
              </div>

              <div className="rightSec flex justify-end  w-full lg:!w-[65%]">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Fashion" />
                  <Tab label="Electronics" />
                  <Tab label="Bags" />
                  <Tab label="Footwear" />
                  <Tab label="Groceries" />
                  <Tab label="Beauty" />
                  <Tab label="Wellness" />
                  <Tab label="Jewellery" />
                </Tabs>
              </div>
            </div>

            <ProductsSlider items={6} />
          </div>
        </section>

        <section className="!py-10 bg-white !mt-5 ">
          <div className="container ">
            <div className="freeShipping w-full md:w-[80%]  border-2  border-orange-500 flex items-center justify-center lg:justify-between rounded-md !mb-7 !mx-auto flex-col lg:flex-row">
              <div className="col1 flex items-center gap-4">
                <LiaShippingFastSolid className=" text-[30px] text-[50px] !pl-4 !pt-0" />
                <span className="text-[16px] lg:text-[20px] font-[600]">FREE SHIPPING</span>
              </div>

              <div className="col2 px-3 text-center">
                <p className="mb-0 font-[500] text-center">
                  Free Delivery Now On Your First Order and over ₹500
                </p>
              </div>

              <p className="col3 font-bold text-[20px] lg:text-[25px] !pr-4 text-center">- Shop Now</p>
            </div>

            <AdsBannerSliderV2 items={4} />
          </div>
        </section>

        <section className="py-5 pt-0 bg-white ">
          <div className="container">
            <h2 className="text-2xl font-[600]">Latest Products</h2>
            <ProductsSlider items={6} />

            <AdsBannerSlider items={3} />
          </div>
        </section>

        <section className="py-5 pt-0 bg-white ">
          <div className="container">
            <h2 className="text-2xl font-[600]">Featured Products</h2>
            <ProductsSlider items={6} />
          </div>
        </section>

        <section className="!py-5 pt-0 !pb-8 bg-white blogSection">
          <div className="container !py-5">
            <h2 className="text-2xl font-[600] !mb-5">From Our Blog</h2>
            <Swiper
              slidesPerView={4}
            
                  spaceBetween={30}
                   navigation={context.windowWidth >= 992}
                    modules={[Navigation,FreeMode]}
                    breakpoints={{
                         250:{
                           slidesPerView:1,
                           spaceBetween:30,
                         },
                         330: {
                           slidesPerView: 1,
                           spaceBetween: 30,
                         },
                         500: {
                           slidesPerView: 2,
                           spaceBetween: 30,
                         },
                         700: {
                           slidesPerView: 3,
                           spaceBetween: 30,
                         },
                         1100: {
                           slidesPerView: 4,
                           spaceBetween: 30,
                         },
                       }}
              className="blogSlider"
            >
              <SwiperSlide>
                <BlogItem />
              </SwiperSlide>
              <SwiperSlide>
                <BlogItem />
              </SwiperSlide>
              <SwiperSlide>
                <BlogItem />
              </SwiperSlide>
              <SwiperSlide>
                <BlogItem />
              </SwiperSlide>
              <SwiperSlide>
                <BlogItem />
              </SwiperSlide>
              <SwiperSlide>
                <BlogItem />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>

    </>
  );
};

export default Home;
