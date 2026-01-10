import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Rating from "@mui/material/Rating";
import { MdOutlineFilterAlt } from "react-icons/md";

import Collapse from "react-collapse"; // ✅ FIXED
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { MyContext } from "../../App";
import { useContext } from "react";

import "./Sidebar.css";

const Sidebar = () => {

  const context = useContext(MyContext);
  const [isOpenCategoryFilter, setIsOpernCategoryFilter] = useState(true);
  const [isOpenAvailFilter, setIsOpernAvailFilter] = useState(true);
  const [isOpenSizeFilter, setIsOpernSizeFilter] = useState(true);

  const [price, setPrice] = useState([0, 5000]);

  return (
    <aside className="sidebar  py-3 lg:py-5 static lg:sticky top-[130px] z-[50] pr-0 lg:!pr-5">
      <div className="max-h-[60vh] lg:overflow-hidden overflow-auto w-full ">
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
        <h3 className="w-full !mb-3 text-[16px] font-[600] flex items-center pr-5">Filter By Rating</h3>

        <div className="flex items-center pl-2 lg:pl-1">
          <FormControlLabel
          value={5}
          control={<Checkbox size="small" />}
            />
        <Rating name="rating" defaultValue={5} size="small" readOnly />
        </div>
        <div className="flex items-center pl-2 lg:pl-1">
                    <FormControlLabel
          value={4}
          control={<Checkbox size="small" />}
            />
        <Rating name="rating" defaultValue={4} size="small" readOnly />
        </div>
        <div className="flex items-center pl-2 lg:pl-1">
                    <FormControlLabel
          value={3}
          control={<Checkbox size="small" />}
            />
        <Rating name="rating" defaultValue={3} size="small" readOnly />
        </div>
        <div className="flex items-center pl-2 lg:pl-1">
                    <FormControlLabel
          value={2}
          control={<Checkbox size="small" />}
            />
        <Rating name="rating" defaultValue={2} size="small" readOnly />
        </div>
        <div className="flex items-center pl-2 lg:pl-1">
                    <FormControlLabel
          value={1}
          control={<Checkbox size="small" />}
            />
        <Rating name="rating" defaultValue={1} size="small" readOnly />
        </div>
  
      
      </div>
      </div>
    
            <br />
      <Button className="btn btn-org w-full !flex lg:hidden"  onClick={()=>context?.setOpenFilter(false)}>
        <MdOutlineFilterAlt size={20} />
            Filters
      </Button>

    </aside>
    
  );
};

export default Sidebar;


