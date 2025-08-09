import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CartProvider } from './context/CartContext';
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Offer from "./pages/Offer";
import Payment from "./pages/Payments";
import Pampers from "./pages/Pampers";
import About from "./pages/About";
import Home from "./pages/Home";
import OrderComplete from "./pages/OrderComplete";
import BoysFashion from "./pages/BoysFashion";
import GirlsFashion from "./pages/GirlsFashion";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Soaps from "./pages/Soaps";
import Strollers from "./pages/Strollers";
import FeedingBottles from "./pages/FeedingBottles";
import ContactUs from "./pages/ContactUs";
import AboutStore from "./pages/AboutStore";
import Gifts from "./pages/Gifts";
import Shipping from "./pages/Shipping";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import ProductDescription from "./pages/ProductDescription";


const App = () => {
  return (
     <CartProvider>
    <Router>
      <Navbar />
      <ScrollToTop />
     
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Product Detail Page */}
        <Route path="/offers" element={<Offer />} />
        <Route path="/products/pampers" element={<Pampers />} />
    <Route path="/products/boys-fashion" element={<BoysFashion />} />
    <Route path="/products/girls-fashion" element={<GirlsFashion />} />
    <Route path="/products/soaps" element={<Soaps />} />
    <Route path="/products/strollers" element={<Strollers />} />
    <Route path="/products/feeding-bottles" element={<FeedingBottles />} />
    <Route path="/pampers" element={<Pampers />} />
<Route path="/girls-fashion" element={<GirlsFashion />} />
<Route path="/soaps" element={<Soaps />} />
<Route path="/strollers" element={<Strollers />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-complete" element={<OrderComplete />} />
        <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

<Route path="/about-store" element={<AboutStore />} />
<Route path="/gifts" element={<Gifts />} />
<Route path="/shipping" element={<Shipping />} />
<Route path="/policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
};

export default App;