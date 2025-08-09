import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="relative border rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white overflow-hidden">
      {/* NEW Badge */}
      <div className="absolute top-2 left-2 z-10 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
        NEW
      </div>

      {/* Buy pill */}
      <div className="absolute top-2 right-2 z-10">
        <span className="bg-cyan-500 text-white text-sm px-4 py-1 rounded-full font-semibold shadow">
          Buy
        </span>
      </div>

      {/* Product Image */}
      <Link to="/HinduWeddingCards">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </Link>

      {/* Product Info */}
      <div className="bg-blue-100 p-4 text-center space-y-2">
        {/* Product Name */}
        <h2 className="text-lg font-bold text-gray-800 leading-snug">
          {product.name}
        </h2>

        {/* Rating Stars */}
        <div className="flex justify-center gap-0.5">
          {Array.from({ length: product.rating }).map((_, idx) => (
            <span key={idx} className="text-yellow-400 text-lg">★</span>
          ))}
        </div>

        {/* Pricing */}
        <div className="text-sm text-gray-800 space-x-2">
          <span className="line-through text-gray-600">MRP ₹{product.mrp}</span>
          <span className="font-bold text-black">Price ₹{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
