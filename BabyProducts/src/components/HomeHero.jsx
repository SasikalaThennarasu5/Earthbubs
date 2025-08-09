import React from "react";
import herobaby from "../assets/images/herobaby.png";

const HomeHead = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center px-8 md:px-20"
      style={{ backgroundImage: `url(${herobaby})` }}
    >
      <div className="text-white max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6 leading-tight">
          Gentle Care for Growing Joy
        </h1>
        <p className="text-lg md:text-xl font-poppins mb-8 leading-relaxed">
          Premium baby care products crafted with love, purity, and the softest materials – because your baby deserves the best.
        </p>
        
      </div>
    </div>
  );
};

export default HomeHead;
