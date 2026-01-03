import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Rating from "@mui/material/Rating";

import Collapse from "react-collapse"; // ✅ FIXED
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

import "./Sidebar.css";

const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpernCategoryFilter] = useState(true);
  const [isOpenAvailFilter, setIsOpernAvailFilter] = useState(true);
  const [isOpenSizeFilter, setIsOpernSizeFilter] = useState(true);

  const [price, setPrice] = useState([0, 5000]);

  return (
    <aside className="sidebar !py-5 !pr-4">
      {/* CATEGORY */}
      <div className="box">
        <h3 className="w-full !mb-3 text-[16px] font-[600] flex items-center !pr-5">
          Shop By Category
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpernCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>

        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll !px-4 relative -!left-[13px]">
            {[
              "Fashion",
              "Electronics",
              "Bags",
              "Footwear",
              "Groceries",
              "Beauty",
              "Wellness",
              "Jewellery",
            ].map((item) => (
              <FormControlLabel
                key={item}
                control={<Checkbox size="small" />}
                label={item}
                className="w-full"
              />
            ))}
          </div>
        </Collapse>
      </div>

      {/* AVAILABILITY */}
      <div className="box">
        <h3 className="w-full !mb-3 text-[16px] font-[600] flex items-center !pr-5">
          Availability
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpernAvailFilter(!isOpenAvailFilter)}
          >
            {isOpenAvailFilter ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>

        <Collapse isOpened={isOpenAvailFilter}>
          <div className="scroll !px-4 relative -!left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available (17)"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In stock (10)"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Not available (17)"
            />
          </div>
        </Collapse>
      </div>

      {/* SIZE */}
      <div className="box !mt-3">
        <h3 className="w-full !mb-3 text-[16px] font-[600] flex items-center !pr-5">
          Size
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black"
            onClick={() => setIsOpernSizeFilter(!isOpenSizeFilter)}
          >
            {isOpenSizeFilter ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>

        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll !px-4 relative -!left-[13px]">
            {["Small", "Medium", "Large", "XL", "XXL"].map((size) => (
              <FormControlLabel
                key={size}
                control={<Checkbox size="small" />}
                label={`${size} (17)`}
                className="w-full"
              />
            ))}
          </div>
        </Collapse>
      </div>

      {/* PRICE FILTER */}
      <div className="box !mt-3">
        <h3 className="w-full !mb-3 text-[16px] font-[600]">Filter By Price</h3>

        <div className="!px-4 !pb-2 !pt-2 priceRange">
          <Slider
            value={price}
            onChange={(e, newValue) => setPrice(newValue)}
            min={0}
            max={5000}
            step={50}
            valueLabelDisplay="auto"
          />

          <div className="flex justify-between mt-2 text-sm font-medium">
            <span className="text-[13px]">
              <strong className="text-dark">₹{price[0]}</strong>
            </span>
            <span className="text-[13px]">
              <strong className="text-dark">₹{price[1]}</strong>
            </span>
          </div>
        </div>
      </div>
      <div className="box !mt-3">
        <h3 className="w-full !mb-3 text-[16px] font-[600]">Filter By Price</h3>

        <div className="w-full">
        <Rating name="rating" defaultValue={5} size="small" readOnly />
        </div>
        <div className="w-full">
        <Rating name="rating" defaultValue={4} size="small" readOnly />
        </div>
        <div className="w-full">
        <Rating name="rating" defaultValue={3} size="small" readOnly />
        </div>
        <div className="w-full">
        <Rating name="rating" defaultValue={2} size="small" readOnly />
        </div>
        <div className="w-full">
        <Rating name="rating" defaultValue={1} size="small" readOnly />
        </div>

      
      </div>
    </aside>
  );
};

export default Sidebar;
