import React, { useState, useContext } from "react";
import { MyContext } from "../../App";

import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

/* 🔹 Badge Wrapper */
const IconWithBadge = ({ badgeContent, children }) => {
  return (
    <Badge badgeContent={badgeContent} color="error">
      {children}
    </Badge>
  );
};

/* 🔥 CATEGORY DATA — EXTENDED WITH MANY CATEGORIES */
const categoryData = {
  "For You": {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    popular: [
      { title: "Valentine Sale", action: "Shop now", image: "https://images.unsplash.com/flagged/photo-1575995872537-3793d29d972c?w=300" },
      { title: "Student Club", action: "Claim now", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
      { title: "Mega Offers", action: "Explore", image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=300" },
      { title: "Top Picks", action: "View", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300" },
      { title: "Flash Sale", action: "Buy", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300" }
    ],
    recent: [
      { name: "Laptop Bag", image: "https://images.unsplash.com/photo-1585386959984-a41552231691?w=200" },
      { name: "Phone Stand", image: "https://images.unsplash.com/photo-1580910051074-7e1a2d1e5f08?w=200" },
      { name: "Smart Bottle", image: "https://images.unsplash.com/photo-1600850055794-fbf46260b93f?w=200" },
      { name: "Desk Lamp", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200" }
    ]
  },

  Grocery: {
    icon: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
    popular: [
      { title: "Fresh Veggies", action: "Shop", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300" },
      { title: "Organic Foods", action: "Explore", image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=300" },
      { title: "Breakfast Deals", action: "Buy", image: "https://images.unsplash.com/photo-1505253216365-8b5f5b41fd3c?w=300" }
    ],
    recent: [
      { name: "Rice", image: "https://images.unsplash.com/photo-1586201375754-1421b8a6b4a3?w=200" },
      { name: "Milk", image: "https://images.unsplash.com/photo-1580910051074-7e1a2d1e5f08?w=200" },
      { name: "Bread", image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=200" }
    ]
  },

  Fashion: {
    icon: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
    popular: [
      { title: "Winter Sale", action: "Shop", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300" },
      { title: "Accessories", action: "Explore", image: "https://images.unsplash.com/photo-1512499617640-c2f999098c01?w=300" }
    ],
    recent: [
      { name: "Shoes", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200" },
      { name: "Jackets", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200" },
      { name: "Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200" }
    ]
  },

  Electronics: {
    icon: "https://cdn-icons-png.flaticon.com/512/3659/3659899.png",
    popular: [
      { title: "Mobiles", action: "Shop", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300" },
      { title: "Gaming Gear", action: "Explore", image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=300" }
    ],
    recent: [
      { name: "Laptop", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200" },
      { name: "Keyboard", image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=200" },
      { name: "Monitor", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200" }
    ]
  },

  Home: {
    icon: "https://cdn-icons-png.flaticon.com/512/609/609803.png",
    popular: [
      { title: "Furniture Sale", action: "Shop", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=300" },
      { title: "Decor Trends", action: "Explore", image: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=300" }
    ],
    recent: [
      { name: "Sofa", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=200" },
      { name: "Wall Art", image: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=200" },
      { name: "Table Lamp", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200" }
    ]
  },

  Beauty: {
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
    popular: [
      { title: "Makeup Deals", action: "Shop", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300" },
      { title: "Skincare", action: "Explore", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300" }
    ],
    recent: [
      { name: "Face Cream", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200" },
      { name: "Lipstick", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200" },
      { name: "Perfume", image: "https://images.unsplash.com/photo-1585386959984-a41552231691?w=200" }
    ]
  },

  Sports: {
    icon: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
    popular: [
      { title: "Fitness Gear", action: "Shop", image: "https://images.unsplash.com/photo-1571019613914-85f342c55f6c?w=300" },
      { title: "Outdoor Sports", action: "Explore", image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=300" }
    ],
    recent: [
      { name: "Dumbbells", image: "https://images.unsplash.com/photo-1583454110551-21f0c7b5c68f?w=200" },
      { name: "Football", image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=200" },
      { name: "Yoga Mat", image: "https://images.unsplash.com/photo-1571019613914-85f342c55f6c?w=200" }
    ]
  },

  Books: {
    icon: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
    popular: [
      { title: "Best Sellers", action: "Shop", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300" },
      { title: "New Arrivals", action: "Explore", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=300" }
    ],
    recent: [
      { name: "Novels", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200" },
      { name: "Comics", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=200" },
      { name: "Study Guides", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200" }
    ]
  },

  Automotive: {
    icon: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
    popular: [
      { title: "Car Accessories", action: "Shop", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300" },
      { title: "Bike Gear", action: "Explore", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300" }
    ],
    recent: [
      { name: "Helmet", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200" },
      { name: "Car Cover", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200" },
      { name: "Seat Cushion", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200" }
    ]
  },

  Toys: {
    icon: "https://cdn-icons-png.flaticon.com/512/3082/3082039.png",
    popular: [
      { title: "Kids Toys", action: "Shop", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300" },
      { title: "Educational Games", action: "Explore", image: "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?w=300" }
    ],
    recent: [
      { name: "Puzzle", image: "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?w=200" },
      { name: "Action Figure", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=200" },
      { name: "Board Game", image: "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?w=200" }
    ]
  }
};

const categories = Object.keys(categoryData);

const CategoryPage = () => {
  const [activeCategory, setActiveCategory] = useState("For You");
  const context = useContext(MyContext);

const navigate = useNavigate();
  return (
    <div className="bg-white h-[100vh] flex flex-col overflow-hidden">

      {/* 🔥 HEADER */}
      <div className="sticky top-0 z-20 bg-white flex items-center justify-between px-4 py-2 ">
        <div className="flex justify-center items-center gap-2">
            <Button
                onClick={() => {
              context.setOpenCategory(false);
             
            }}
              className="!w-[35px] !min-w-[35px] !h-[35px] rounded-full !text-gray-800"
            >
              <FaArrowLeft  size={22}/>
            </Button>
        <p className="text-[16px] font-semibold text-gray-700">
          Categories
        </p>
        </div>

        <div className="flex">
          <Button

            className="flex-col !w-[40px] !capitalize !text-gray-700"
            onClick={() => {
              context.setOpenCategory(false);
              context.setOpenSearchPanel(true);
            }}
          >
            <IoIosSearch size={18} />
          </Button>

<Button
  className="flex-col !w-[40px] !capitalize !text-gray-700"
  onClick={() => {context.setOpenCategory(false);
    navigate("/cart");
    
  }}
>
  <IconWithBadge badgeContent={4}>
    <MdOutlineShoppingCart size={18} />
  </IconWithBadge>
</Button>
        </div>
      </div>

      {/* 🔥 BODY */}
      <div className="flex flex-1 overflow-hidden">

        {/* 🔥 LEFT SIDEBAR — FIXED */}
        <div className="w-[90px] shrink-0 sticky top-0 h-full overflow-y-auto bg-orange-50 shadow-[6px_0_10px_-2px_rgba(0,0,0,0.2)]">
          {categories.map((cat) => (
            <div
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                flex flex-col items-center text-center px-2 py-4 cursor-pointer
                ${
                  activeCategory === cat
                    ? "bg-white border-l-4 border-orange-500 font-semibold"
                    : "text-gray-500 hover:bg-gray-100"
                }
              `}
            >
              <img
                src={categoryData[cat].icon}
                alt={cat}
                className="w-10 h-10 object-contain mb-2"
                loading="lazy"
              />
              <span className="text-[12px] leading-tight">
                {cat}
              </span>
            </div>
          ))}
        </div>

        {/* 🔥 RIGHT CONTENT — SCROLL ONLY HERE */}
        <div className="flex-1 h-full overflow-y-auto p-4 overscroll-contain touch-pan-y">

          {/* Popular Store */}
          <p className="text-[15px] font-semibold mb-3">
            Popular Store
          </p>
          <div className="flex gap-4 mb-6 overflow-x-auto">
            {categoryData[activeCategory].popular.map((item, i) => (
              <div
                key={i}
                className="min-w-[140px] h-[130px] bg-gray-100 rounded-xl flex flex-col justify-center items-center shadow-sm hover:shadow transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain mb-2"
                  loading="lazy"
                />
                <p className="text-[13px] font-medium text-center">
                  {item.title}
                </p>
                <p className="text-[12px] text-blue-600">
                  {item.action}
                </p>
              </div>
            ))}
          </div>

          {/* Recently Viewed */}
          <p className="text-[15px] font-semibold mb-3">
            Recently Viewed Stores
          </p>
          <div className="flex gap-4 mb-6 overflow-x-auto">
            {categoryData[activeCategory].recent.map((item, i) => (
              <div
                key={i}
                className="min-w-[110px] bg-white border rounded-lg p-2 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[80px] object-contain rounded mb-2"
                  loading="lazy"
                />
                <p className="text-[12px] truncate">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

{/* Have You Tried */}
<p className="text-[15px] font-semibold mb-3">
  Have you tried?
</p>

<div className="grid grid-cols-3 gap-4">
  {[
    {
      name: "UPI",
      icon: "https://cdn-icons-png.flaticon.com/512/825/825454.png"
    },
    {
      name: "SuperCoin",
      icon: "https://cdn-icons-png.flaticon.com/512/3523/3523887.png"
    },
    {
      name: "Bills",
      icon: "https://cdn-icons-png.flaticon.com/512/833/833314.png"
    },
    {
      name: "Flipkart Pay",
      icon: "https://cdn-icons-png.flaticon.com/512/196/196561.png"
    },
    {
      name: "LiveShop",
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920329.png"
    },
    {
      name: "Become Seller",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    }
  ].map((item, i) => (
    <div
      key={i}
      className="flex flex-col items-center text-center cursor-pointer"
    >
      {/* ICON BOX */}
      <div className="bg-gray-100 hover:bg-orange-50 rounded-2xl w-[90px] h-[90px] flex items-center justify-center shadow-sm hover:shadow transition active:scale-95">
        <img
          src={item.icon}
          alt={item.name}
          className="w-10 h-10 object-contain"
          loading="lazy"
        />
      </div>

      {/* LABEL OUTSIDE */}
      <p className="mt-2 text-[12px] font-medium text-gray-700">
        {item.name}
      </p>
    </div>
  ))}
</div>


        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
