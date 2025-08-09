import React from "react";
import twinbaby from "../assets/images/girl1.png";
import babyrocker from "../assets/images/girl2.png";
import lavern from "../assets/images/girl3.png";
import rockroll from "../assets/images/girl4.png";
import kinger from "../assets/images/girl5.png";
import dravos from "../assets/images/girl6.png";

const products = [
  {
    id: 1,
    name: "Twin Baby",
    image: twinbaby,
    mrp: 5466,
    price: 4399,
    rating: 5,
  },
  {
    id: 2,
    name: "Baby Rocker",
    image: babyrocker,
    mrp: 9466,
    price: 8399,
    rating: 5,
  },
  {
    id: 3,
    name: "Lavern",
    image: lavern,
    mrp: 10466,
    price: 9399,
    rating: 5,
  },
  {
    id: 4,
    name: "Rock Roll",
    image: rockroll,
    mrp: 4800,
    price: 3399,
    rating: 4,
  },
  {
    id: 5,
    name: "Kinger",
    image: kinger,
    mrp: 7000,
    price: 6000,
    rating: 4,
  },
  {
    id: 6,
    name: "Dravo",
    image: dravos,
    mrp: 5466,
    price: 4399,
    rating: 4,
  },
];

const Strollers = () => {
  return (
    <div className="p-6 md:p-10 font-poppins">
      <p className="text-sm text-gray-600 mb-4">Home &gt; Products &gt; Stroller</p>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Strollers</h2>
        <button className="border px-4 py-2 rounded-md text-sm flex items-center gap-2">
          Filter <span>🧮</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((item) => (
          <div key={item.id} className="border rounded-xl shadow-sm relative">
            {/* NEW tag */}
            <div className="absolute top-2 left-2 bg-accent text-white text-xs px-3 py-1 rounded-full font-semibold">
              NEW
            </div>

            {/* Image */}
            <div className="bg-[#B0E4F4] rounded-t-xl flex justify-center p-6 h-56">
              <img src={item.image} alt={item.name} className="max-h-full object-contain" />
            </div>

            {/* Details */}
            <div className="p-4 bg-[#B0E4F4] rounded-b-xl relative">
              <h3 className="text-lg font-bold">{item.name}</h3>

              {/* Stars */}
              <div className="flex text-yellow-400 text-sm mt-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {Array.from({ length: 5 - item.rating }).map((_, i) => (
                  <span key={i}>☆</span>
                ))}
              </div>

              {/* Prices */}
              <p className="text-sm text-gray-700 mt-1">
                MRP <span className="line-through">₹{item.mrp}.00</span>{" "}
                <span className="font-bold text-black">Price ₹{item.price}.00</span>
              </p>

              {/* Buy Button */}
              <button className="absolute top-4 right-4 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-[#0096c7] transition">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button className="px-2 py-1 border rounded">←</button>
        {[1, 2, 3, 4, 5, 6, 7].map((page) => (
          <button
            key={page}
            className="px-3 py-1 rounded border bg-white hover:bg-[#B0E4F4] text-sm"
          >
            {page}
          </button>
        ))}
        <button className="px-2 py-1 border rounded">→</button>
      </div>
    </div>
  );
};

export default Strollers;
