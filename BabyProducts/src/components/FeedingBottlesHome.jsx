import React from "react";
import bottle from "../assets/images/feedingbottle.png";
import { ArrowUpRight } from "lucide-react";

const FeedingBottles = () => {
  return (
    <section className="w-full px-6 py-10 md:py-16 lg:py-20 font-[Poppins] bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Feeding Bottle
          </h2>
          <p className="text-lg leading-relaxed text-gray-800 mb-8">
            The baby feeding bottle is made from 100% BPA-free, safe materials.
            Its soft silicone nipple feels natural and gentle on the baby’s
            mouth. The anti-colic design helps reduce gas and fussiness during
            feeding. It’s lightweight, easy to hold, and perfect for everyday
            use.
          </p>

          {/* Buy Now Button */}
          <button className="bg-[#B0E4F4] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-md">
            Buy Now <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={bottle}
            alt="Feeding Bottle"
            className="w-full max-w-md md:max-w-lg object-contain rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeedingBottles;
