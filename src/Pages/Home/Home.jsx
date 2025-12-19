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
import { Navigation } from "swiper/modules";
import BannerBoxV2 from "../../Components/bannerBoxV2/BannerBoxV2";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (even, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="homeBanner">
        <HomeSlider />

        <section className="!py-6">
          <div className="container flex items-center gap-5">
            <div className="part1 w-[70%]">
              <HomeBannerV2 />
            </div>

            <div className="part2 w-[30%] !pl-2 flex items-center gap-5 !justify-between flex-col">
              <BannerBoxV2 info="left" image={"sub-banner-1.jpg"} />

              <BannerBoxV2 info="right" image={"sub-banner-2.jpg"} />
            </div>
          </div>
        </section>

        <HomeCatSlider />

        <section className="bg-white py-8">
          <div className="container">
            <div className="flex items-center justify-between mb-6 !pt-4">
              <div className="leftSec ">
                <h2 className="text-2xl font-bold">Top Deals on Products</h2>
                <p className="text-gray-600 text-[14px] font-[600]  ">
                  Grab the best deals on fashion products
                </p>
              </div>

              <div className="rightSec flex justify-end !w-[65%]">
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
            <div className="freeShipping w-[80%]  border-2  border-orange-500 flex items-center justify-between rounded-md !mb-7 !mx-auto">
              <div className="col1 flex items-center gap-4">
                <LiaShippingFastSolid className="text-7xl !pl-4 !pt-0" />
                <span className="text-2xl font-[600]">FREE SHIPPING</span>
              </div>

              <div className="col2 pr-4">
                <p className="mb-0 font-[500]">
                  Free Delivery Now On Your First Order and over ₹500
                </p>
              </div>

              <p className="col3 font-bold text-2xl !pr-4">- Shop Now</p>
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
              navigation={true}
              modules={[Navigation]}
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

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
