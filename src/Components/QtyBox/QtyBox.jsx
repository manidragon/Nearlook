import React, { useState, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export const QtyBox = ({
  min = 1,
  max = 99,
  value = 1,
  onChange,
}) => {
  const [qty, setQty] = useState(value);

  useEffect(() => {
    setQty(value);
  }, [value]);

  const updateQty = (val) => {
    if (isNaN(val)) return;
    const newVal = Math.max(min, Math.min(max, val));
    setQty(newVal);
    onChange && onChange(newVal);
  };

  return (
    <div
      className="
        grid grid-cols-[44px_1fr_44px] 
        w-full 
        bg-white border border-gray-300 
        rounded-3xl overflow-hidden shadow-sm
      "
    >
      {/* Minus */}
      <button
        onClick={() => updateQty(qty - 1)}
        disabled={qty <= min}
        className="
        bg-orange-600 hover:!bg-black hover:text-orange-500
          flex items-center justify-center
           p-3 text-[16px] text-center
          text-gray-600 hover:bg-gray-100 active:bg-gray-200
          disabled:opacity-40 disabled:cursor-not-allowed
          transition
        "
      >
        <FaMinus size={14} />
      </button>

      {/* Input (Full Width Center) */}
      <input
        type="number"
        inputMode="numeric"
        value={qty}
        onChange={(e) => updateQty(Number(e.target.value))}
        className="
          w-full 
          text-center
          text-[14px] md:text-[15px] lg:text-[16px]
          border-x border-gray-300
          focus:outline-none focus:ring-1 focus:ring-blue-500
        "
      />

      {/* Plus */}
      <button
        onClick={() => updateQty(qty + 1)}
        disabled={qty >= max}
        className=" bg-orange-600 text-[16px] hover:!bg-black hover:text-orange-500  
          flex items-center justify-center
         p-3
          text-gray-600 hover:bg-gray-100 active:bg-gray-200
          disabled:opacity-40 disabled:cursor-not-allowed
          transition
        "
      >
        <FaPlus size={14} />
      </button>
    </div>
  );
};
