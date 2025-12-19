import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";

import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Home/Login/Login.jsx";
import Register from "./Pages/Home/Register/Register.jsx";
import CartPanel from "./Components/CartPanel/Cart.jsx";
import ProductListing from "./Pages/ProductListing/ProductListing.jsx";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails.jsx";

// ✅ CREATE & EXPORT CONTEXT
export const MyContext = createContext();

function App() {
  const [openCartPanel, setOpenCartPanel] = useState(false);

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  // ✅ VALUES PASSED TO CONTEXT
  const values = {
    openCartPanel,
    setOpenCartPanel,
  };

  return (
    <MyContext.Provider value={values}>
      <>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/productListing" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>

          <Footer />
        </BrowserRouter>

        {/* 🛒 Cart Panel */}
        <Drawer
  anchor="right"
  open={openCartPanel}
  onClose={toggleCartPanel(false)}
  PaperProps={{
    sx: {
      width: 400, // 🔥 change width here
    },
  }}
>
  <div style={{ padding: 16 }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
        paddingBottom: 10,
        borderBottom: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <h4 style={{ margin: 0 }}>Shopping Cart (1)</h4>

      <IoCloseSharp
        size={20}
        style={{ cursor: "pointer" }}
        onClick={toggleCartPanel(false)}
      />
    </div>

    <CartPanel /> {/* ✅ move CartPanel inside */}
  </div>
</Drawer>

      </>
    </MyContext.Provider>
  );
}

export default App;
