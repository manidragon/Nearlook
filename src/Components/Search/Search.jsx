import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

const trendingSearches = [
  "iPhone 15",
  "Running Shoes",
  "Bluetooth Headphones",
  "Smart Watch",
  "Laptop Bag",
  "Men T-Shirts",
];

const Search = () => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
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

  return (
    <StyledWrapper ref={wrapperRef}>
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          name="search"
          placeholder="Search products"
          value={query}
          onFocus={() => setShowDropdown(true)}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="searchButton" type="button">
          <IoIosSearch size={20} />
        </button>
      </div>

      {showDropdown && (
        <div className="dropdown">
          <p className="title">Trending Searches</p>
          {trendingSearches
            .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
            .map((item) => (
              <div
                key={item}
                className="dropdownItem"
                onClick={() => handleSelect(item)}
              >
                <IoIosSearch size={16} />
                <span>{item}</span>
              </div>
            ))}
        </div>
      )}
    </StyledWrapper>
  );
};

export default Search;
const StyledWrapper = styled.div`
  position: relative;

  .searchBox {
    display: flex;
    align-items: center;
    background: #ebe9e9;
    border-radius: 50px;
    position: relative;
  }

  .searchInput {
    border: none;
    background: none;
    outline: none;
    color: #2f3640;
    font-size: 15px;
    padding: 14px 40px 14px 16px;
    width: 100%;
  }

  .searchButton {
    color: white;
    position: absolute;
    right: 8px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(
      --gradient-2,
      linear-gradient(90deg, #fc4700ff 0%, #ca6238ff 100%)
    );
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  } /*hover effect*/
  button:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.5) 0 10px 20px;
    transform: translateY(-3px);
  } /*button pressing effect*/
  button:active {
    box-shadow: none;
    transform: translateY(0);
  }

  .dropdown {
    position: absolute;
    top: 110%;
    width: 100%;
    background: white;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    z-index: 20;
    padding: 8px 0;
  }

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
