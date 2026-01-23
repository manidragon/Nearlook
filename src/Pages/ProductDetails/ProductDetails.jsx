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
import { FaUndoAlt, FaMoneyBillWave, FaTruck, FaStar, FaLock } from "react-icons/fa";

import { Dialog, DialogContent, IconButton } from "@mui/material";
import { MdLocalOffer } from "react-icons/md";
import { Popover} from "@mui/material";
import { MdStore } from "react-icons/md";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { MyContext } from "../../App";
import { useContext } from "react";
// import ReviewDialog from "./ReviewDialog.jsx";
import ReviewsPage from "./ReviewsPage.jsx";
import { useNavigate } from "react-router-dom";





export const ProductDetails = () => {
  const navigate = useNavigate();

  const [productActionIndex, setProductActionIndex] = useState(null);
  const [showMoreCoupons, setShowMoreCoupons] = useState(false);
const [showMoreOffers, setShowMoreOffers] = useState(false);
const [openOfferDialog, setOpenOfferDialog] = useState(false);
const [sellerAnchorEl, setSellerAnchorEl] = useState(null);
const [productDetailsOpen, setProductDetailsOpen] = useState(false);
const [discriptionOpen, setdiscriptionOpen] = useState(false);
const [AdditionalproductDetailsOpen, setAdditionalProductDetailsOpen] = useState(false);
const [reviewsOpen, setreviewsOpen] = useState(false);
const [selectedColor, setSelectedColor] = useState(0);
const [selectedSize, setSelectedSize] = useState("M");
  const [openReview, setOpenReview] = useState(false);
const [openSizeChart, setOpenSizeChart] = useState(false);
const [showStickyBar, setShowStickyBar] = useState(true);
const inactivityTimer = React.useRef(null);
const [isHoveringBar, setIsHoveringBar] = useState(false);


 const productBenefits = [
  {
    id: 1,
    icon: FaUndoAlt,
    label: "10 Days Return"
  },
  {
    id: 2,
    icon: FaMoneyBillWave,
    label: "Pay on Delivery"
  },
  {
    id: 3,
    icon: FaTruck,
    label: "Free Delivery"
  },
  {
    id: 4,
    icon: FaStar,
    label: "Top Brand"
  },
  {
    id: 5,
    icon: FaLock,
    label: "Secure Transaction"
  }
];
const context = useContext(MyContext);
React.useEffect(() => {
  if (context.windowWidth >= 992) return;

  const showBar = () => {
    setShowStickyBar(true);

    clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => {
      if (!isHoveringBar) {
        setShowStickyBar(false);
      }
    }, 1500);
  };

  window.addEventListener("scroll", showBar, { passive: true });
  window.addEventListener("touchstart", showBar);
  window.addEventListener("mousemove", showBar);

  return () => {
    window.removeEventListener("scroll", showBar);
    window.removeEventListener("touchstart", showBar);
    window.removeEventListener("mousemove", showBar);
    clearTimeout(inactivityTimer.current);
  };
}, [context.windowWidth, isHoveringBar]);



const kurtiColorVariants = [
  {
    color: "Maroon",
    image:
      "https://api.spicezgold.com/download/file_1734528862997_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-2-202404071601.jpg"
  },
  {
    color: "Green",
    image:
      "https://api.spicezgold.com/download/file_1734527612717_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-1-202404071602.jpg"
  },
  {
    color: "Mustard",
    image:
      "https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
  },
  {
    color: "Blue",
    image:
      "https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
  },
  {
    color: "Purple",
    image:
      "https://api.spicezgold.com/download/file_1734529758900_fabflee-party-printed-women-s-top-women-tops-crepe-top-tops-for-women-tops-for-women-product-images-rvwdnv1ypj-0-202311010723.webp"
  }
];


const isSellerOpen = Boolean(sellerAnchorEl);



  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="!py-2">
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






      <section className="bg-white !py-5  ">


        <div className=" container  ">
        <div className=" flex !gap-1 flex-col lg:flex-row  ">
          <div className="productZoomContainer w-full lg:w-[40%]">
            <ProductZoom />
          </div>

          <div className="productContent w-full lg:w-[60%] md:pr-10 md:pl-10">
            <h1 className="text-[18px] sm:text-[22px] font-[600] mb-2 ">
              Chikankari Women Kurta
            </h1>
            <div className="flex items-start sm:items-center flex-col sm:flex-row md:flex-row lg:flex-row gap-3 justify-start">
              <span className="text-gray-400 text-[13px]">
                Brand:
                <span className="font-[500] text-black opacity-75">
                  House of Chiankari
                </span>
              </span>
              <Rating name="rating" defaultValue={4} size="small" readOnly />
              <span className="text-[13px] cursor-pointer">Review(5)</span>
            </div>

            {/* COLOR VARIANTS */}
<div className="mt-5">
  <h4 className="text-sm font-medium mb-2">Color</h4>

<div className="flex gap-3 overflow-x-auto no-scrollbar ">
  {kurtiColorVariants.map((item, index) => (
    <div
      key={index}
      className={`w-[60px] h-[80px] border rounded cursor-pointer
        ${selectedColor === index ? "border-orange-600" : "border-gray-300"}
      `}
      onClick={() => setSelectedColor(index)}
    >
      <img
        src={item.image}
        alt={item.color}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>

</div>

{/* SIZE VARIANTS */}
<div className="mt-5">
  <div className="flex items-center gap-3 mb-2">
    <h4 className="text-sm font-medium">Size</h4>
    <span
      className="text-orange-600 text-sm cursor-pointer"
      onClick={() => setOpenSizeChart(true)}
    >
      Size Chart
    </span>
  </div>

<div className="flex gap-3 flex-wrap">
  {["S", "M", "L", "XL", "XXL"].map((size) => (
    <button
      key={size}
      onClick={() => setSelectedSize(size)}
      className={`
        px-3 py-1.5 sm:px-4 sm:py-2
        text-xs sm:text-sm md:text-base
        border rounded transition-all
        ${
          selectedSize === size
            ? "border-orange-600 text-orange-600 font-medium"
            : "border-gray-300 text-gray-700"
        }
      `}
    >
      {size}
    </button>
  ))}
</div>

</div>
            <div className="price mt-4 flex flex-col  sm:flex-row md:flex-row lg:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
              <span className="oldPrice text-sm text-gray-500 line-through ">
                ₹9,999
              </span>
               <span className="text-[20px] font-[600] text-orange-600">
                ₹4,999
              </span>
              </div>

              <div className="flex items-center gap-2">
              <span className="text-[14px]">
                Available In Stock:
                <span className="text-green-600 text-[14px] ml-1 font-bold">
                  147 Items
                </span>
              </span>
              </div>

            </div>
  




 {/* SELLER INFO */}
<div className="my-8 text-sm">
  <div className="flex items-center gap-2">
    <span className="text-gray-600">Seller</span>

    <span className="text-orange-600 font-medium cursor-pointer">
      LONGANITRADING
    </span>

    <span className="bg-orange-600 text-white text-xs px-2 py-0.5 rounded">
      4.5 ★
    </span>
  </div>

  <div className="flex items-center gap-2 mt-1 text-gray-600">
    <span>• 10 days return policy</span>
    <span className="cursor-pointer text-gray-400">ⓘ</span>
  </div>

  <span
    className="text-orange-600 cursor-pointer mt-1 inline-block"
    onClick={(e) => setSellerAnchorEl(e.currentTarget)}
  >
    See other sellers
  </span>
</div>

<div className="mt-4 py-3">
      <div className="flex gap-6 overflow-x-auto no-scrollbar">
        {productBenefits.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center min-w-[80px] text-center"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
              <item.icon className="text-orange-700 text-lg" />
            </div>
            <p className="text-xs mt-2 text-orange-600 font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
            {/* COUPONS FOR YOU */}
<div className="mt-4">
  <h3 className="font-semibold mb-2">Coupons for you</h3>

  <div className="space-y-2 text-sm">
    <div className="flex items-start gap-2">
      <MdLocalOffer className="text-green-600 mt-1" />
      <span>
        <b>Special Price</b> Get extra 15% off upto ₹300 on 50 item(s)
        <span className="text-orange-600 cursor-pointer ml-1">T&C</span>
      </span>
    </div>

    {showMoreCoupons && (
      <div className="flex items-start gap-2">
        <MdLocalOffer className="text-green-600 mt-1" />
        <span>
          <b>Partner Offer</b> Buy this & get 5% off upto ₹750 on furniture,
          Only for you!
          <span
            className="text-orange-600 cursor-pointer ml-1"
            onClick={() => setOpenOfferDialog(true)}
          >
            Know More
          </span>
        </span>
      </div>
    )}

    <span
      className="text-orange-600 cursor-pointer text-sm"
      onClick={() => setShowMoreCoupons(!showMoreCoupons)}
    >
      {showMoreCoupons ? "Show less" : "+1 more coupon"}
    </span>
  </div>
</div>

{/* AVAILABLE OFFERS */}
<div className="mt-5">
  <h3 className="font-semibold mb-2">Available offers</h3>

  <div className="space-y-2 text-sm">
    <div className="flex items-start gap-2">
      <MdLocalOffer className="text-green-600 mt-1" />
      <span>
        <b>Bank Offer</b> Flat ₹50 off on Flipkart Bajaj Finserv Insta EMI Card
        <span className="text-orange-600 ml-1 cursor-pointer">T&C</span>
      </span>
    </div>

    <div className="flex items-start gap-2">
      <MdLocalOffer className="text-green-600 mt-1" />
      <span>
        <b>Bank Offer</b> 10% off up to ₹750 on HDFC Bank Credit Card
        <span className="text-orange-600 ml-1 cursor-pointer">T&C</span>
      </span>
    </div>

    {showMoreOffers && (
      <>
        <div className="flex items-start gap-2">
          <MdLocalOffer className="text-green-600 mt-1" />
          <span>
            <b>Bank Offer</b> 10% off up to ₹1,250 on YES Bank Credit Card EMI
            <span className="text-orange-600 ml-1 cursor-pointer">T&C</span>
          </span>
        </div>

        <div className="flex items-start gap-2">
          <MdLocalOffer className="text-green-600 mt-1" />
          <span>
            <b>Special Price</b> Extra discount on prepaid orders
          </span>
        </div>
      </>
    )}

    <span
      className="text-orange
      -600 cursor-pointer text-sm"
      onClick={() => setShowMoreOffers(!showMoreOffers)}
    >
      {showMoreOffers ? "Show less" : "+14 more offers"}
    </span>
  </div>
</div>


            <div className="flex flex-col lg:flex-row items-center gap-4 py-4">
              <div className="qtyBoxWrapper w-full ">
                <QtyBox />
              </div>

              <Button className="btn-org bg-orange-600 flex gap-2 !rounded-3xl w-full" onClick={() => navigate("/cart")}>
                <MdOutlineShoppingCart className="text-[20px]" />
                Add to Cart
              </Button>
              <Button className="btn-org bg-orange-600 flex gap-2 !rounded-3xl w-full" onClick={() => navigate("/checkout")}>
                <MdOutlineShoppingCart className="text-[20px]" />
                BUy Now
              </Button>
            </div>

            <div className="flex items-center gap-4 my-4">
              <span className="flex items-center gap-2 text-[14px] sm:text-[15px] link cursor-pointer font-[500]">
                <FaRegHeart className="text-[18px]" /> Add to Wishlist
              </span>
              <span className="flex items-center gap-2  text-[14px] sm:text-[15px] link cursor-pointer font-[500]">
                <LuGitCompareArrows className="text-[18px]" /> Add to Compare
              </span>
            </div>

{context.windowWidth < 992 &&<Accordion
  expanded={productDetailsOpen}
  onChange={() => setProductDetailsOpen(!productDetailsOpen)}
  elevation={0}
  className="border-b border-gray-200"
>
  <AccordionSummary
    expandIcon={
      productDetailsOpen ? (
        <FiMinus className="text-lg" />
      ) : (
        <FiPlus className="text-lg" />
      )
    }
  >
    <h3 className="font-semibold text-base p-2">Product Details</h3>
  </AccordionSummary>

  <AccordionDetails>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 text-sm">
      <div className="flex">
        <span className="w-40 text-gray-500">Package Contents</span>
        <span>1 Kurti</span>
      </div>

      <div className="flex">
        <span className="w-40 text-gray-500">Brand</span>
        <span>YouTastic</span>
      </div>

      <div className="flex">
        <span className="w-40 text-gray-500">Ideal For</span>
        <span>Women</span>
      </div>

      <div className="flex">
        <span className="w-40 text-gray-500">Length Type</span>
        <span>Hip Length</span>
      </div>

      <div className="flex">
        <span className="w-40 text-gray-500">Brand Color</span>
        <span>Wine</span>
      </div>

      <div className="flex">
        <span className="w-40 text-gray-500">Occasion</span>
        <span>Casual</span>
      </div>

      <div className="flex">
        <span className="w-40 text-gray-500">Pattern</span>
        <span>Chikankari Embroidery</span>
      </div>

      <div className="flex">
        <span className="w-40 text-gray-500">Fabric</span>
        <span>Georgette</span>
      </div>

      <div className="flex">
        <span className="w-40 text-gray-500">Style</span>
        <span>Front Slit</span>
      </div>

      <div className="flex">
        <span className="w-40 text-gray-500">Neck</span>
        <span>Round Neck</span>
      </div>

      <div className="flex">
        <span className="w-40 text-gray-500">Sleeve</span>
        <span>3/4 Sleeve</span>
      </div>

      <div className="flex">
        <span className="w-40 text-gray-500">Color</span>
        <span>Purple</span>
      </div>

      <div className="flex">
        <span className="w-40 text-gray-500">Number of Contents</span>
        <span>Pack of 1</span>
      </div>

      <div className="flex">
        <span className="w-40 text-gray-500">Fabric Care</span>
        <span>Machine Wash as per tag</span>
      </div>

      <div className="flex">
        <span className="w-40 text-gray-500">Style Code</span>
        <span>YTA-White</span>
      </div>
    </div>
  </AccordionDetails>
</Accordion>}
{context.windowWidth < 992 &&<Accordion
  expanded={discriptionOpen}
  onChange={() => setdiscriptionOpen(!discriptionOpen)}
  elevation={0}
  className="border-b border-gray-200"
>
  <AccordionSummary
    expandIcon={
     discriptionOpen? (
        <FiMinus className="text-lg" />
      ) : (
        <FiPlus className="text-lg" />
      )
    }
  >
    <h3 className="font-semibold text-base p-2">  Description</h3>
  </AccordionSummary>

  <AccordionDetails className="p-0">
                <div className="md:shadow-md w-full py-5 px-3 rounded-md">
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
  </AccordionDetails>
</Accordion>}

{context.windowWidth < 992 &&<Accordion
  expanded={AdditionalproductDetailsOpen}
  onChange={() => setAdditionalProductDetailsOpen(!AdditionalproductDetailsOpen)}
  elevation={0}
  className="border-b border-gray-200"
>
  <AccordionSummary
    expandIcon={
     discriptionOpen? (
        <FiMinus className="text-lg" />
      ) : (
        <FiPlus className="text-lg" />
      )
    }
  >
    <h3 className="font-semibold text-base p-2">  Additional info</h3>
  </AccordionSummary>

  <AccordionDetails>
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
  </AccordionDetails>
</Accordion>}





 {context.windowWidth > 992 && 
  <div className=" pt-10">
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
            <div className="shadow-md w-full  py-5 px-1 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[18px]">Customer questions & answers</h2>

                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                  <div className="review pt-5 pb-5 border-b border-gray-200 w-full flex flex-col items-center justify-between">
                    <div className="info lg:w-[60%] flex   items-center gap-2">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://api.spicezgold.com/download/file_1734528862997_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-2-202404071601.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-full">
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
                          src="https://api.spicezgold.com/download/file_1734527612717_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-1-202404071602.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-full">
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
                          src="https://api.spicezgold.com/download/file_1734529363003_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-full">
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
                          src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-full">
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

                  <div className="review pt-5 pb-5 border-b border-gray-200 w-full flex flex-col items-center justify-between">
                    <div className="info w-[60%] flex flex-col items-center gap-2">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://api.spicezgold.com/download/file_1734529758900_fabflee-party-printed-women-s-top-women-tops-crepe-top-tops-for-women-tops-for-women-product-images-rvwdnv1ypj-0-202311010723.webp"
                          className="w-full"
                        />
                      </div>

                      <div className="w-full">
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

                <div className="reviewForm bg-[#fafafa] p-2 rounded-md">
                  <h2 className="text-[18px]">Add a review</h2>

                  <form className="w-full mt-5">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Write a review..."
                      className="w-full"
                      multiline
                      rows={3}
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
   </div>}
<ReviewsPage />
          </div>
        </div>
    


        <div className="container pt-8">
          <h2 className="text-[20px] font-[600] pb-0">Related Products</h2>
          <ProductSlider items={6} />
        </div>

        </div>
{context.windowWidth < 992 && (
 <div
  role="region"
  aria-label="Purchase actions"
  onMouseEnter={() => setIsHoveringBar(true)}
  onMouseLeave={() => setIsHoveringBar(false)}
  onTouchStart={() => setIsHoveringBar(true)}
  onTouchEnd={() => setIsHoveringBar(false)}
  className={`fixed bottom-14 left-0 w-full z-[60] bg-white 
    backdrop-blur-[2px] shadow-lg
    transition-all duration-300 ease-out will-change-transform
    ${showStickyBar 
      ? "translate-y-0 opacity-100 scale-100" 
      : "translate-y-full opacity-0 scale-[0.98]"
    }
  `}
>

    <div className="flex items-center justify-between px-3 py-2 gap-2">
      {/* PRICE */}
      <div className="flex flex-col leading-tight">
        <span className="text-[12px] text-gray-400 line-through">
          ₹9,999
        </span>
        <span className="text-[16px] font-bold text-green-600">
          ₹4,999
        </span>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-1 gap-2 max-w-[260px]">
        <button
          type="button"
          className="flex-1 border border-orange-600 text-orange-600 font-medium rounded-md py-2 text-sm active:scale-95 transition"
        >
          Add to Cart
        </button>

        <button
          type="button"
          className="flex-1 bg-yellow-500 text-black font-medium rounded-md py-2 text-sm active:scale-95 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
)}



      </section>

      

      <Dialog
  open={openOfferDialog}
  onClose={() => setOpenOfferDialog(false)}
  maxWidth="sm"
  fullWidth
>
  <DialogContent>
    <div className="space-y-4 text-sm">
      <h3 className="font-semibold text-base">What is the Offer?</h3>
      <p>
        Buy this & get 5% off upto ₹750 on furniture, Only for you!
      </p>

      <h3 className="font-semibold text-base">What are the Offer Benefits?</h3>
      <p>
        Get upto ₹750 discount applicable on select furniture items.
      </p>

      <h3 className="font-semibold text-base">What is the offer duration?</h3>
      <p>Offer live till last stock.</p>

      <h3 className="font-semibold text-base">
        What are the eligibility conditions?
      </h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Applicable only once during offer period</li>
        <li>Not applicable on cancellations / returns</li>
        <li>Discount applicable on select sellers</li>
        <li>Subject to pincode serviceability</li>
      </ul>

      <h3 className="font-semibold text-base">How do I avail the offer?</h3>
      <p>
        Purchase this product to get upto ₹750 off on furniture.
      </p>
    </div>
  </DialogContent>
</Dialog>

<Dialog
  open={openSizeChart}
  onClose={() => setOpenSizeChart(false)}
  maxWidth="lg"
  fullWidth
>
  <DialogContent className="relative">
    {/* Close Button */}
    <IconButton
      onClick={() => setOpenSizeChart(false)}
      className="!absolute top-3 right-3"
    >
      <FiX />
    </IconButton>

    <h2 className="text-lg font-semibold mb-4">Size Chart</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* LEFT – SIZE TABLE */}
      <div className="overflow-auto max-h-[400px] border rounded">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="p-2 text-left">Size</th>
              <th className="p-2">Chest/Bust</th>
              <th className="p-2">Waist</th>
              <th className="p-2">Shoulder</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["S", "36.5", "33", "14.5"],
              ["M", "38.5", "35", "15"],
              ["L", "40.5", "37", "15.5"],
              ["XL", "43.5", "39", "16"],
              ["XXL", "44.5", "41", "16.5"],
            ].map((row, i) => (
              <tr key={i} className="border-t">
                {row.map((cell, idx) => (
                  <td key={idx} className="p-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* RIGHT – MEASUREMENT GUIDE */}
      <div className="text-sm overflow-auto max-h-[400px] pr-2">
        <h3 className="font-semibold mb-2">Women Kurta</h3>
        <p className="mb-2">
          Not sure about your kurta size? Follow these simple steps:
        </p>

        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li><b>Bust:</b> Measure around fullest part</li>
          <li><b>Waist:</b> Measure around natural waistline</li>
          <li><b>Shoulder:</b> Measure from shoulder seam</li>
          <li><b>Length:</b> Measure from shoulder to hem</li>
        </ul>

        <img
          src="https://rukminim2.flixcart.com/image/300/300/xif0q/sizechart/women-kurta.png"
          alt="Size Guide"
          className="mx-auto"
        />
      </div>
    </div>
  </DialogContent>
</Dialog>
{/* <ReviewDialog
  open={openReview}
  onClose={() => setOpenReview(false)}
/> */}


    </>
  );
};
