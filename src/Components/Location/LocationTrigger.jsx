import React from "react";
import { MdLocationOn } from "react-icons/md";

const LocationTrigger = ({ address, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-2 cursor-pointer hover:outline hover:outline-1 hover:outline-white px-2 py-1"
    >
      <MdLocationOn size={25} className=" text-[#fc4b03]" />

      <div className="leading-tight flex ">
        <p className="text-[11px] text-gray-800">Deliver to</p>
        <p className="text-[13px] font-semibold text-black mx-1">
          {address
            ? `${address.city} ${address.pincode}`
            : "Select your location"}
        </p>
      </div>
    </div>
  );
};

export default LocationTrigger;
