import React from "react";
import diaper from "../assets/images/diaper.png";
import { ArrowUpRight } from "lucide-react";

const SoapHome = () => {
  return (
    <div className="font-[Poppins] bg-white px-4 py-8 md:py-16 flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <img
          src={diaper}
          alt="Pampers Diaper"
          className="w-full h-auto rounded-2xl shadow-md"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-black mb-4">Pampers</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Keep your baby dry, comfy, and smiling all day with our ultra-soft diapers. Designed
          with leak-lock technology and breathable layers for extra protection. Gentle on delicate
          skin, perfect for day and night comfort.
        </p>
        <button className="bg-[#B0E4F4] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-md">
        Buy Now <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default SoapHome;
