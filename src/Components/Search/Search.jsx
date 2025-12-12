import React from 'react'
import './Style.css'
import { GoSearch } from "react-icons/go";
import Button from "@mui/material/Button";



 const Search = () => {
  return (
    <div className="searchBox w-[100%] h[50px] bg-[#e5e5e5] !rounded-md flex items-center px-3 gap-2">
      <input
        type="text"
        placeholder="Search for Products"
        className="w-full h-[35px] focus:outline-none bg-inherit !p-2 text-[15px]"
      />
      <Button className='absolute  right-[5px] !rounded-md'>
        <GoSearch className='text-gray-500 text-2xl'/>
      </Button>
    </div>
  );
}

export default Search;