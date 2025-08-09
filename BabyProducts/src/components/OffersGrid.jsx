// src/components/OffersGrid.jsx
import React from "react";
import offersData from "../data/OffersData";

const OffersGrid = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">🔥 Special Offers</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {offersData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>

              <div className="flex items-center mb-2">
                <span className="text-xl font-bold text-pink-600">₹{item.price}</span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  ₹{item.mrp}
                </span>
              </div>

              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {Array.from({ length: 5 - item.rating }).map((_, i) => (
                  <span key={i} className="text-gray-300">★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersGrid;
