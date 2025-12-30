import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { Button } from "@mui/material";

export const QtyBox = () => {
  const [qtyVal, setQtyVal] = useState(1);

  const plusQty = () => {
    setQtyVal((prev) => prev + 1);
  };

  const minusQty = () => {
    setQtyVal((prev) => (prev > 1 ? prev - 1 : 1)); // prevent negative values
  };

  return (
    <div className="qtyBox flex items-center relative">
      <input
        type="number"
        className="w-full h-[40px] p-2 pl-5 text-[15px] focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md"
        value={qtyVal}
        onChange={(e) => setQtyVal(Number(e.target.value))}
      />

      <div className="flex items-center flex-col justify-between h-[40px] absolute top-0 right-0 z-50">
        <Button
          className="!min-w-[25px] !w-[25px] !h-[20px] !text-black hover:!bg-[#f1f1f1]"
          onClick={plusQty}
        >
          <FaAngleUp className="opacity-55" />
        </Button>

        <Button
          className="!min-w-[25px] !w-[25px] !h-[20px] !text-black hover:!bg-[#f1f1f1]"
          onClick={minusQty}
        >
          <FaAngleDown className="opacity-55" />
        </Button>
      </div>
    </div>
  );
};
