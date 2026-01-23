import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { createPortal } from "react-dom";

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
      <StyledWrapper ref={inputRef}>
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
      </StyledWrapper>

      {showDropdown &&
        rect &&
        createPortal(
          <DropdownContainer
      ref={dropdownRef}
      style={{
        top: dropdownPos.top,
        left: dropdownPos.left,
        width: dropdownPos.width,
      }}
          >
            <p className="title">Trending Searches</p>
            {trendingSearches
              .filter((item) =>
                item.toLowerCase().includes(query.toLowerCase())
              )
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
          </DropdownContainer>,
          document.body
        )}
    </>
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
    background: linear-gradient(90deg, #fc4700ff 0%, #ca6238ff 100%);
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  button:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.5) 0 10px 20px;
    transform: translateY(-3px);
  }

  button:active {
    box-shadow: none;
    transform: translateY(0);
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
