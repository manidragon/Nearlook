import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Home from "./Pages/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./Pages/ProductListing/ProductListing.jsx";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/productListing" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
