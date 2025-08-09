import React from "react";
import strollerImg from "../assets/images/stroller.png"; // update with your path
import { ArrowUpRight } from "lucide-react";

const StrollersHome= () => {
  return (
    <section className="font-poppins py-12 px-4 md:px-12 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Trending Products
        </h2>
        <br />
        <p className="text-lg md:text-xl text-gray-600 mt-2">
  Parent Favorites, Baby Approved
</p>
      </div>

      {/* Product Card */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={strollerImg}
            alt="Baby Stroller"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-black">
  Baby Stroller
</h3>
          <p className="text-base md:text-lg text-gray-700 leading-extra mb-6">
            Explore the world in comfort with our smooth and stylish baby stroller. Designed
            for safety, ease, and flexibility — perfect for every little adventure. Lightweight,
            foldable, and parent-friendly for life on the go.
          </p>
          <button className="bg-[#B0E4F4] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-md">
                      Buy Now <ArrowUpRight size={18} />
                    </button>
        </div>
      </div>
    </section>
  );
};

export default StrollersHome;
