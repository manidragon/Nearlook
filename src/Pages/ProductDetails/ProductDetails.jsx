import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { ProductZoom } from "../../Components/ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { QtyBox } from "../../Components/QtyBox/QtyBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { LuGitCompareArrows } from "react-icons/lu";
import TextField from "@mui/material/TextField";
import ProductSlider from "../../Components/ProductsSlider/ProductsSlider.jsx";






export const ProductDetails = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);

  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="!py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Fashion
            </Link>
            <Link
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Women Black Cotton Blend Top
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white !py-5">
        <div className="container flex !gap-1 ">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] pr-10 pl-10">
            <h1 className="text-[24px] font-[600] mb-2 ">
              Chikankari Women Kurta
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-[13px]">
                Brand:
                <span className="font-[500] text-black opacity-75">
                  House of Chiankari
                </span>
              </span>
              <Rating name="rating" defaultValue={4} size="small" readOnly />
              <span className="text-[13px] cursor-pointer">Review(5)</span>
            </div>
            <div className="price mt-4 flex items-center gap-4">
              <span className="text-[20px] font-[600] text-orange-600">
                ₹4,999
              </span>
              <span className="oldPrice text-sm text-gray-500 line-through ">
                ₹9,999
              </span>

              <span className="text-[14px]">
                Available In Stock:
                <span className="text-green-600 text-[14px] font-bold">
                  147 Items
                </span>
              </span>
            </div>
            <p className="mt-3 pr-10 mb-5">
              For girl's seeking a ethnic set that melds classic charm with a
              contemporary twist, Trilok Fab flared ethnic gown is a perfect
              choice. It is designed with both comfort and style in mind, this
              maxi length gown is made to feel luxurious against the skin. The
              flowing flares allow for ease of movement, ensuring you feel as
              good as you look throughout the entire event. Despite the occasion
              that you want to wear it for, this dress leaves a lasting
              impression of refined elegance wherever you
            </p>
            <div className="flex gap-3">
              <span className="text-[16px]">Size:</span>
              <div className="flex items-center gap-1 actions">
                <Button
                  className={`${
                    productActionIndex === 0 ? "!bg-orange-500 !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>
                <Button
                  className={`${
                    productActionIndex === 1 ? "!bg-orange-500 !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>
                <Button
                  className={`${
                    productActionIndex === 2 ? "!bg-orange-500 !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>
                <Button
                  className={`${
                    productActionIndex === 3 ? "!bg-orange-500 !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
              </div>
            </div>

            <p className="text-[14px] mt-5 mb-2 text-[#000]">
              Free Shipping (Est. Delivery Time 2-3 Days)
            </p>

            <div className="flex items-center gap-4 py-4">
              <div className="qtyBoxWrapper w-[70px] ">
                <QtyBox />
              </div>

              <Button className="btn-org flex gap-2">
                <MdOutlineShoppingCart className="text-[20px]" />
                Add to Cart
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
                <FaRegHeart className="text-[18px]" /> Add to Wishlist
              </span>
              <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
                <LuGitCompareArrows className="text-[18px]" /> Add to Compare
              </span>
            </div>
          </div>
        </div>

        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5">
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 0 && "text-red-500"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>

            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 1 && "text-red-500"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product Details
            </span>

            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 2 && "text-red-500"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Reviews (5)
            </span>
          </div>

          {activeTab === 0 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <p>
                The best is yet to come! Give your walls a voice with a framed
                poster. This aesthethic, optimistic poster will look great in
                your desk or in an open-space office. Painted wooden frame with
                passe-partout for more depth.
              </p>

              <h4>Lightweight Design</h4>

              <p>
                Designed with a super light geometric case, the Versa family
                watches are slim, casual and comfortable enough to wear all day
                and night. Switch up your look with classic, leather, metal and
                woven accessory bands. Ut elit tellus, luctus nec ullamcorper
                mattis, pulvinar dapibus leo.
              </p>

              <h4>Free Shipping & Return</h4>

              <p>
                We offer free shipping for products on orders above 50$ and
                offer free delivery for all orders in US.
              </p>

              <h4>Money Back Guarantee</h4>
              <p>
                We guarantee our products and you could get back all of your
                money anytime you want in 30 days.
              </p>

              <h4>Online Support</h4>
              <p>
                You will get 24 hour support with this purchase product and you
                can return it within 30 days for an exchange.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Stand Up
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Folded (w/o wheels)
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Folded (w/ wheels)
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Door Pass Through
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-600">
                    <td class="px-6 py-4 font-[500]">
                      35″L x 24″W x 37-45″H(front to back wheel)
                    </td>
                    <td class="px-6 py-4 font-[500]">
                      32.5″L x 18.5″W x 16.5″H
                    </td>
                    <td class="px-6 py-4 font-[500]">32.5″L x 24″W x 18.5″H</td>
                    <td class="px-6 py-4 font-[500]">24</td>
                  </tr>

                  <tr class="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-600">
                    <td class="px-6 py-4 font-[500]">
                      35″L x 24″W x 37-45″H(front to back wheel)
                    </td>
                    <td class="px-6 py-4 font-[500]">
                      32.5″L x 18.5″W x 16.5″H
                    </td>
                    <td class="px-6 py-4 font-[500]">32.5″L x 24″W x 18.5″H</td>
                    <td class="px-6 py-4 font-[500]">24</td>
                  </tr>

                  <tr class="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-600">
                    <td class="px-6 py-4 font-[500]">
                      35″L x 24″W x 37-45″H(front to back wheel)
                    </td>
                    <td class="px-6 py-4 font-[500]">
                      32.5″L x 18.5″W x 16.5″H
                    </td>
                    <td class="px-6 py-4 font-[500]">32.5″L x 24″W x 18.5″H</td>
                    <td class="px-6 py-4 font-[500]">24</td>
                  </tr>

                  <tr class="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-600">
                    <td class="px-6 py-4 font-[500]">
                      35″L x 24″W x 37-45″H(front to back wheel)
                    </td>
                    <td class="px-6 py-4 font-[500]">
                      32.5″L x 18.5″W x 16.5″H
                    </td>
                    <td class="px-6 py-4 font-[500]">32.5″L x 24″W x 18.5″H</td>
                    <td class="px-6 py-4 font-[500]">24</td>
                  </tr>

                  <tr class="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-600">
                    <td class="px-6 py-4 font-[500]">
                      35″L x 24″W x 37-45″H(front to back wheel)
                    </td>
                    <td class="px-6 py-4 font-[500]">
                      32.5″L x 18.5″W x 16.5″H
                    </td>
                    <td class="px-6 py-4 font-[500]">32.5″L x 24″W x 18.5″H</td>
                    <td class="px-6 py-4 font-[500]">24</td>
                  </tr>

                  <tr class="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-600">
                    <td class="px-6 py-4 font-[500]">
                      35″L x 24″W x 37-45″H(front to back wheel)
                    </td>
                    <td class="px-6 py-4 font-[500]">
                      32.5″L x 18.5″W x 16.5″H
                    </td>
                    <td class="px-6 py-4 font-[500]">32.5″L x 24″W x 18.5″H</td>
                    <td class="px-6 py-4 font-[500]">24</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[18px]">Customer questions & answers</h2>

                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                  <div className="review pt-5 pb-5 border-b border-gray-200 w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-2">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinku Verma</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        <p className="mt-0 mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-gray-200 w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-2">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinku Verma</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        <p className="mt-0 mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-gray-200 w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-2">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinku Verma</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        <p className="mt-0 mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-gray-200 w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-2">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinku Verma</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        <p className="mt-0 mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-gray-200 w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-2">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://lirp.cdn-website.com/6f140169/dms3rep/multi/opt/Parikshit+Gokhale-640w.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinku Verma</h4>
                        <h5 className="text-[13px] mb-0">2024-12-01</h5>
                        <p className="mt-0 mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>

                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                </div>

                <br />

                <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                  <h2 className="text-[18px]">Add a review</h2>

                  <form className="w-full mt-5">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Write a review..."
                      className="w-full"
                      multiline
                      rows={5}
                    />

                    <br />
                    <br />
                    <Rating name="size-small" defaultValue={4} />

                    <div className="flex items-center mt-5">
                      <Button className="btn-org">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="container pt-8">
          <h2 className="text-[20px] font-[600] pb-0">Related Products</h2>
          <ProductSlider items={6} />
        </div>
      </section>
    </>
  );
};
