import { useState, createContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./App.css";
import "./responsive.css";
import Home from "./Pages/Home/Home.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Checkout from "./Pages/Checkout/Checkout.jsx";
import Login from "./Pages/Home/Login/Login.jsx";
import Register from "./Pages/Home/Register/Register.jsx";

import ProductListing from "./Pages/ProductListing/ProductListing.jsx";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails.jsx";
import MyAccount from "./Pages/MyAccount/MyAccount.jsx";
import MyList from "./Pages/MyList/MyList.jsx";
import Orders from "./Pages/Orders/Orders.jsx";


// ✅ CREATE & EXPORT CONTEXT 
export const MyContext = createContext();

function App() {
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
 const[windowWidth, setWindowWidth] = useState(window.innerWidth);
 const [openFilter,setOpenFilter]=useState(false);
 const[isFilterBtnShow,setIsFilterBtnShow]=useState(false);

 useEffect(()=>{
   const handleResize = ()=>{
    setWindowWidth(window.innerWidth);

   };

   window.addEventListener("resize",handleResize);

   return ()=>{
    window.removeEventListener("resize",handleResize);
   }
 },[])

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const values = {
    openCartPanel,
    setOpenCartPanel,
    toggleCartPanel,
    isLogin,
    setIsLogin,
    windowWidth,
    setOpenFilter,
    openFilter,
    setIsFilterBtnShow,
    isFilterBtnShow
  };

  return (
    <MyContext.Provider value={values}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productListing" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/my-orders" element={<Orders />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
