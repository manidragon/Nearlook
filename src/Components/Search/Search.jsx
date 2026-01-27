import React, { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { createPortal } from "react-dom";
import { MyContext } from "../../App";

const trendingSearches = [
  "iPhone 15",
  "Running Shoes",
  "Bluetooth Headphones",
  "Smart Watch",
  "Laptop Bag",
  "Men T-Shirts",
];

const Search = () => {
  const { searchQuery, setSearchQuery } = useContext(MyContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });
const updatePosition = () => {
  if (!inputRef.current) return;

  const rect = inputRef.current.getBoundingClientRect();
  setDropdownPos({
    top: rect.bottom + 8,
    left: rect.left,
    width: rect.width,
  });
};
useEffect(() => {
  if (!showDropdown) return;

  updatePosition();

  window.addEventListener("scroll", updatePosition, true);
  window.addEventListener("resize", updatePosition);

  return () => {
    window.removeEventListener("scroll", updatePosition, true);
    window.removeEventListener("resize", updatePosition);
  };
}, [showDropdown]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        inputRef.current &&
        !inputRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (text) => {
    setQuery(text);
    setShowDropdown(false);
  };

  const rect = inputRef.current?.getBoundingClientRect();

  return (
    <>
      <StyledWrapper ref={inputRef} className="">
        <div className="searchBox ">
<input
  className="searchInput"
  type="text"
  placeholder="Search products"
  value={searchQuery}
  onFocus={() => setShowDropdown(true)}
  onChange={(e) => setSearchQuery(e.target.value)}
/>

          <button className="searchButton" type="button">
            <IoIosSearch size={20} />
          </button>
        </div>
      </StyledWrapper>

{showDropdown && rect && window.innerWidth >= 992 && createPortal(
          <DropdownContainer
      ref={dropdownRef}
      style={{
        top: dropdownPos.top,
        left: dropdownPos.left,
        width: dropdownPos.width,
      }}
      className="bg-white"
          >
            <p className="title">Trending Searches</p>
            {trendingSearches
           .filter((item) =>
  item.toLowerCase().includes(searchQuery.toLowerCase())
)
              .map((item) => (
                <div
                  key={item}
                  className="dropdownItem "
                  onClick={() => handleSelect(item)}
                >
                  <IoIosSearch size={16} />
                  <span>{item}</span>
                </div>
              ))}
          </DropdownContainer>,
          document.body
        )}
    </>
  );
};

export default Search;

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px; /* Desktop default */
  margin: 0 auto;

  @media (max-width: 992px) {
    max-width: 100%;
  }

  .searchBox {
    display: flex;
    align-items: center;
    background: #ebe9e9;
    border-radius: 50px;
    position: relative;
    width: 100%;
  }

  .searchInput {
    border: none;
    background: none;
    outline: none;
    color: #2f3640;
    font-size: 15px;
    padding: 12px 44px 12px 16px;
    width: 100%;
  }

  .searchButton {
    color: white;
    position: absolute;
    right: 6px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(90deg, #fc4700ff 0%, #ca6238ff 100%);
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }
`;


const DropdownContainer = styled.div`
  position: fixed;
  z-index: 99999;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: 8px 0;

  .title {
    font-size: 13px;
    font-weight: 600;
    padding: 8px 14px;
    color: #555;
  }

  .dropdownItem {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background: #f5f5f5;
    }
  }
`;
