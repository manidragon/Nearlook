import React, { useState } from "react";
import Button from "@mui/material/Button";
import CheckedOutItems from "./CheckedOutItems";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import {
  Box,
  Typography,
  Divider,
  Paper,
  Checkbox
} from "@mui/material";

/* ------------------ DUMMY CART ------------------ */
const DUMMY_CART = [
  {
    id: "p1",
    name: "A-Line Kurti With Shawl",
    price: 450,
    qty: 1,
    image:
      "https://api.spicezgold.com/download/file_1734526483283_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp"
  },
  {
    id: "p2",
    name: "Women's Casual Saree",
    price: 650,
    qty: 1,
    image:
      "https://api.spicezgold.com/download/file_1734526483283_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp"
  },
  {
    id: "p3",
    name: "Fashion Kurti Set",
    price: 350,
    qty: 2,
    image:
      "https://api.spicezgold.com/download/file_1734526483283_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp"
  }
];

const Checkout = () => {
  /* ------------------ STATE ------------------ */
  const [activeStep, setActiveStep] = useState(3);
  const [cartItems, setCartItems] = useState(DUMMY_CART);
  const [selectedItems, setSelectedItems] = useState(
    new Set(DUMMY_CART.map(item => item.id))
  );

  const [showNewAddressForm, setShowNewAddressForm] = useState(false);



  /* ------------------ FUNCTIONS ------------------ */
  const toggleItem = id => {
    setSelectedItems(prev => {
      const updated = new Set(prev);
      updated.has(id) ? updated.delete(id) : updated.add(id);
      return updated;
    });
  };

  const toggleAll = () => {
    if (selectedItems.size === cartItems.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(cartItems.map(i => i.id)));
    }
  };

  const totalPrice = cartItems
    .filter(item => selectedItems.has(item.id))
    .reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    const orderItems = cartItems.filter(item =>
      selectedItems.has(item.id)
    );

    console.log("Final Order Items:", orderItems);
    alert("Order placed successfully. Check console for order data.");
  };

  return (
    <section className="py-4 lg:py-10 bg-gray-50 text-xs sm:text-sm md:text-base">
      <div className="container mx-auto px-1 lg:px-8">
        <div className="container w-[90%] max-w-[90%] flex gap-5 flex-col lg:flex-row">

          {/* ================= LEFT PART ================= */}
          <div className="leftPart w-full lg:w-[75%] space-y-4">

            {/* STEP 1 — LOGIN */}
            <Paper className="rounded-md overflow-hidden">
              <div
                onClick={() => setActiveStep(1)}
                className={`flex items-center justify-between px-4 py-3 cursor-pointer ${
                  activeStep === 1
                    ? "bg-orange-600 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 flex items-center justify-center text-sm bg-white text-orange-600 rounded">
                    1
                  </span>
                  <span className="font-semibold">LOGIN</span>
                </div>
                {activeStep !== 1 && (
                  <span className="text-sm font-semibold text-orange-400 bg-gray-100 py-2 px-3 rounded">
                    CHANGE
                  </span>
                )}
              </div>

              {activeStep === 1 && (
                <Box className="p-5 bg-white">
                  <Typography className="text-sm mb-2">
                    Phone: <b>+918838542598</b>
                  </Typography>

                  <Button
                    variant="contained"
                    className="!bg-orange-500 !hover:bg-orange-600 text-xs sm:text-sm md:text-base"
                    onClick={() => setActiveStep(2)}
                  > 
                  <span className="text-xs sm:text-sm md:text-base">CONTINUE CHECKOUT</span>
                 
                  </Button>

                  <Box className="mt-4 text-sm text-gray-600 space-y-1">
                    <p>✔ Easily Track Orders, Hassle free Returns</p>
                    <p>✔ Get Relevant Alerts and Recommendations</p>
                    <p>✔ Wishlist, Reviews, Ratings and more</p>
                  </Box>
                </Box>
              )}
            </Paper>

            {/* STEP 2 — DELIVERY ADDRESS */}
            <Paper className="rounded-md overflow-hidden">
              <div
                onClick={() => setActiveStep(2)}
                className={`flex items-center justify-between px-4 py-3 cursor-pointer ${
                  activeStep === 2
                    ? "bg-orange-600 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 flex items-center justify-center text-sm bg-white text-orange-600 rounded">
                    2
                  </span>
                  <span className="font-semibold text-xs sm:text-sm md:text-base">DELIVERY ADDRESS</span>
                </div>
                {activeStep !== 2 && (
                  <span className="text-sm font-semibold text-orange-400 bg-gray-100 py-2 px-3 rounded">
                    CHANGE
                  </span>
                )}
              </div>

              {activeStep === 2 && (
                <Box className=" p-2 lg:p-5 ">
                  <div className="flex justify-between items-start">
                    <div className="text-xs sm:text-sm md:text-base">
                      <Typography className="font-semibold text-xs sm:text-sm md:text-base">
                        <span className=" text-xs sm:text-sm md:text-base">
                        MAREES SAKTHIVEL{" "}</span>
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded ml-2 text-xs sm:text-sm md:text-base">
                          HOME
                        </span>
                      </Typography>

                      <Typography className="text-sm mt-1">
                        <span className=" text-xs sm:text-sm md:text-base">
                            12, Bala Nagar 3rd Street Bommayakoundan patti,
                        Theni - 625531, Tamil Nadu
                        </span>
                      
                      </Typography>

                      <Typography className="text-sm mt-1">
                          <span className=" text-xs sm:text-sm md:text-base">  Phone: 8838542598</span>
                      
                      </Typography>
                    </div>

                    <span  onClick={() => setShowNewAddressForm(prev => !prev)} className="text-xs sm:text-sm md:text-base text-orange-600 text-sm cursor-pointer">
                      EDIT
                    </span>
                  </div>

                  <Button
                    variant="contained"
                    className="!bg-orange-500 !hover:bg-orange-600 mt-4"
                    onClick={() => setActiveStep(3)}
                  >
                    DELIVER HERE
                  </Button>
<div
  className="mt-4 text-orange-600 text-sm cursor-pointer hover:underline"
  onClick={() => setShowNewAddressForm(prev => !prev)}
>
  + Add a new address
</div>
{showNewAddressForm && (
  <Box className="mt-4 bg-orange-50 shadow-lg rounded-md  p-2 lg:p-5">

    {/* Use Current Location */}
    <Button
      variant="outlined"
      className="!border-orange-600 !text-orange-600 !mb-4"
    >
      Use my current location
    </Button>

    {/* Reusable Floating Input */}
    {({ id, label, type = "text" }) => (
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder=" "
          className="peer w-full border border-gray-300 bg-gray-100 rounded p-2 text-sm outline-none focus:border-orange-500"
        />
        <label
          htmlFor={id}
          className="absolute left-2 top-2 text-orange-500 text-sm transition-all
          peer-placeholder-shown:top-2.5
          peer-placeholder-shown:text-sm
          peer-focus:-top-2
          peer-focus:text-xs
          peer-focus:bg-orange-50
          peer-focus:px-1"
        >
          {label}
        </label>
      </div>
    )}

    {/* Row 1 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="relative">
        <input
          id="name"
          placeholder=" "
          className="peer w-full border border-gray-300  rounded p-2 text-sm outline-none focus:border-orange-500"
        />
        <label
          htmlFor="name"
          className="absolute left-2 top-2 text-orange-500 text-sm transition-all
          peer-placeholder-shown:top-2.5
          peer-placeholder-shown:text-sm
          peer-focus:-top-2
          peer-focus:text-xs
          peer-focus:bg-orange-50
          peer-focus:px-1"
        >
          Name
        </label>
      </div>

      <div className="relative">
        <input
          id="mobile"
          placeholder=" "
          className="peer w-full border border-gray-300 rounded p-2 text-sm outline-none focus:border-orange-500"
        />
        <label
          htmlFor="mobile"
          className="absolute left-2 top-2 text-orange-500 text-sm transition-all
          peer-placeholder-shown:top-2.5
          peer-placeholder-shown:text-sm
          peer-focus:-top-2
          peer-focus:text-xs
          peer-focus:bg-orange-50
          peer-focus:px-1"
        >
          10-digit mobile number
        </label>
      </div>
    </div>

    {/* Row 2 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
      <div className="relative">
        <input
          id="pincode"
          placeholder=" "
          className="peer w-full border border-gray-300 rounded p-2 text-sm outline-none focus:border-orange-500"
        />
        <label
          htmlFor="pincode"
          className="absolute left-2 top-2 text-orange-500 text-sm transition-all
          peer-placeholder-shown:top-2.5
          peer-placeholder-shown:text-sm
          peer-focus:-top-2
          peer-focus:text-xs
          peer-focus:bg-orange-50
          peer-focus:px-1"
        >
          Pincode
        </label>
      </div>

      <div className="relative">
        <input
          id="locality"
          placeholder=" "
          className="peer w-full border border-gray-300 rounded p-2 text-sm outline-none focus:border-orange-500"
        />
        <label
          htmlFor="locality"
          className="absolute left-2 top-2 text-orange-500 text-sm transition-all
          peer-placeholder-shown:top-2.5
          peer-placeholder-shown:text-sm
          peer-focus:-top-2
          peer-focus:text-xs
          peer-focus:bg-orange-50
          peer-focus:px-1"
        >
          Locality
        </label>
      </div>
    </div>

    {/* Address */}
    <div className="relative mt-3">
      <textarea
        id="address"
        placeholder=" "
        rows="3"
        className="peer w-full border border-gray-300 rounded p-2 text-sm outline-none focus:border-orange-500"
      />
      <label
        htmlFor="address"
        className="absolute left-2 top-2 text-orange-500 text-sm transition-all
        peer-placeholder-shown:top-2.5
        peer-placeholder-shown:text-sm
        peer-focus:-top-2
        peer-focus:text-xs
        peer-focus:bg-orange-50
        peer-focus:px-1"
      >
        Address (Area and Street)
      </label>
    </div>

    {/* Row 3 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
      <div className="relative">
        <input
          id="city"
          placeholder=" "
          className="peer w-full border border-gray-300 rounded p-2 text-sm outline-none focus:border-orange-500"
        />
        <label
          htmlFor="city"
          className="absolute left-2 top-2 text-orange-500 text-sm transition-all
          peer-placeholder-shown:top-2.5
          peer-placeholder-shown:text-sm
          peer-focus:-top-2
          peer-focus:text-xs
          peer-focus:bg-orange-50
          peer-focus:px-1"
        >
          City / District / Town
        </label>
      </div>

      <div className="relative">
        <select
          id="state"
          className="peer w-full border border-gray-300 rounded p-2 text-sm outline-none focus:border-orange-500"
        >
          <option value="">Select State</option>
          <option>Tamil Nadu</option>
          <option>Kerala</option>
          <option>Karnataka</option>
        </select>
        <label
          htmlFor="state"
          className="absolute left-2 -top-2 text-xs bg-orange-50 px-1 text-orange-500"
        >
          State
        </label>
      </div>
    </div>

    {/* Row 4 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
      <div className="relative">
        <input
          id="landmark"
          placeholder=" "
          className="peer w-full border border-gray-300 rounded p-2 text-sm outline-none focus:border-orange-500"
        />
        <label
          htmlFor="landmark"
          className="absolute left-2 top-2 text-orange-500 text-sm transition-all
          peer-placeholder-shown:top-2.5
          peer-placeholder-shown:text-sm
          peer-focus:-top-2
          peer-focus:text-xs
          peer-focus:bg-orange-50
          peer-focus:px-1"
        >
          Landmark (Optional)
        </label>
      </div>

      <div className="relative">
        <input
          id="altPhone"
          placeholder=" "
          className="peer w-full border border-gray-300 rounded p-2 text-sm outline-none focus:border-orange-500"
        />
        <label
          htmlFor="altPhone"
          className="absolute left-2 top-2 text-orange-500 text-sm transition-all
          peer-placeholder-shown:top-2.5
          peer-placeholder-shown:text-sm
          peer-focus:-top-2
          peer-focus:text-xs
          peer-focus:bg-orange-50
          peer-focus:px-1"
        >
          Alternate Phone (Optional)
        </label>
      </div>
    </div>

    {/* Address Type */}
    <div className="flex flex-col lg:flex-row gap-6 mt-4 text-sm">
      <label className="flex items-center gap-2">
        <input type="radio" name="addressType" defaultChecked />
        Home (All day delivery)
      </label>
      <label className="flex items-center gap-2">
        <input type="radio" name="addressType" />
        Work (10 AM - 5 PM)
      </label>
    </div>

    {/* Actions */}
<div className="flex gap-3 md:gap-4 mt-5 flex-wrap">
  <Button
    variant="contained"
    className="!bg-orange-500 !hover:bg-orange-600 
      !text-xs sm:!text-sm md:!text-base 
      px-3 sm:px-4 md:px-6"
    onClick={() => {
      setShowNewAddressForm(false);
      alert("Address saved!");
    }}
  >
    SAVE AND DELIVER HERE
  </Button>

  <Button
    variant="text"
    className="!text-orange-600 
      !text-xs sm:!text-sm md:!text-base"
    onClick={() => setShowNewAddressForm(false)}
  >
    CANCEL
  </Button>
</div>

  </Box>
)}


                </Box>
              )}
            </Paper>

            {/* STEP 3 — ORDER SUMMARY */}
            <Paper className="rounded-md overflow-hidden">
              <div
                onClick={() => setActiveStep(3)}
                className={`flex items-center justify-between px-4 py-3 cursor-pointer ${
                  activeStep === 3
                    ? "bg-orange-600 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 flex items-center justify-center text-sm bg-white text-orange-600 rounded">
                    3
                  </span>
                  <span className="font-semibold">ORDER SUMMARY</span>
                </div>
              </div>

              {activeStep === 3 && (
                <Box className="bg-white lg:p-2">
                  {cartItems.map(item => (
                    <CheckedOutItems
                      key={item.id}
                      item={item}
                      checked={selectedItems.has(item.id)}
                      onToggle={() => toggleItem(item.id)}
                    />
                  ))}
                </Box>
              )}
            </Paper>
          </div>

          {/* ================= RIGHT PART ================= */}
          <Box className="card bg-orange-50 h-fit sticky top-10 shadow-lg rounded-lg p-5 text-sm w-full lg:w-[30%]">

            {/* MRP */}
            <Box className="flex justify-between py-2">
              <span className="font-medium">MRP</span>
              <span>₹{totalPrice + 300}</span>
            </Box>

            {/* Fees */}
            <details className="group border-t py-2">
              <summary className="flex justify-between cursor-pointer list-none">
                <span className="font-medium flex items-center gap-1">
                  Fees
                  <span className="group-open:hidden text-gray-500">
                    <MdKeyboardArrowDown size={18} />
                  </span>
                  <span className="hidden group-open:inline text-gray-500">
                    <MdKeyboardArrowUp size={18} />
                  </span>
                </span>
                <span>₹65</span>
              </summary>

              <Box className="pl-3 pt-2 space-y-1 text-gray-600">
                <Box className="flex justify-between">
                  <span>Protect Promise Fee (2)</span>
                  <span>₹65</span>
                </Box>
              </Box>
            </details>

            {/* Discounts */}
            <details className="group border-t py-2">
              <summary className="flex justify-between cursor-pointer list-none">
                <span className="font-medium flex items-center gap-1">
                  Discounts
                  <span className="group-open:hidden text-gray-500">
                    <MdKeyboardArrowDown size={18} />
                  </span>
                  <span className="hidden group-open:inline text-gray-500">
                    <MdKeyboardArrowUp size={18} />
                  </span>
                </span>
                <span className="text-green-600">-₹27,895</span>
              </summary>

              <Box className="pl-3 pt-2 space-y-1 text-gray-600">
                <Box className="flex justify-between">
                  <span>Discount on MRP</span>
                  <span className="text-green-600">-₹27,751</span>
                </Box>

                <Box className="flex justify-between">
                  <span>Buy More Save More (1)</span>
                  <span className="text-green-600">-₹16</span>
                </Box>

                <Box className="flex justify-between">
                  <span>Coupons Applied (8)</span>
                  <span className="text-green-600">-₹393</span>
                </Box>
              </Box>
            </details>

            <Divider className="my-2" />

            {/* Total */}
            <Box className="flex justify-between font-semibold text-base py-2">
              <span>Total Amount</span>
              <span>₹13,530</span>
            </Box>

            {/* Savings Banner */}
            <Box className="mt-3 bg-green-100 text-green-700 p-3 rounded text-center text-sm font-medium">
              You will save ₹28,095 on this order
            </Box>

            {/* Secure Info */}
            <Box className="flex items-center gap-2 mt-4 text-gray-600 text-xs">
              <span className="w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full">
                ✔
              </span>
              <span>
                Safe and Secure Payments. Easy returns. 100% Authentic products.
              </span>
            </Box>

            <Button
              variant="contained"
              fullWidth
              disabled={selectedItems.size === 0}
              className="!bg-orange-500 !hover:bg-orange-600 text-white py-3 mt-4 font-semibold"
              startIcon={<BsFillBagCheckFill />}
              onClick={handleCheckout}
            >
              CONTINUE
            </Button>
          </Box>
        </div>
      </div>
    
    </section>
  );
};

export default Checkout;
