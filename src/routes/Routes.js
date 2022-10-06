import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";



// Pages
import HomePage from "../pages/Home/HomePage";
import TracksPage from "../pages/TracksPage";
import PackagesPage from "../pages/PackagesPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/Login/LoginPage";

// Components
import ProductDetails from "../components/products/ProductDetails";
import ShopCart from "../components/ShopCart";
import ServicesPage from "../pages/ServicesPage";

const routes = () => {
   return (
      <div>
         <Routes>
            <Route path="/tracks" element={<TracksPage />} />
            <Route path="/tracks/:id" element={<ProductDetails />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" exact element={<HomePage />} />
            <Route path="/*" element={<Navigate to="/" />} />
         </Routes>
      </div>
   );
};

export default routes;
