import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, title, image, price, mrp, stars }) => {
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate(`/product/${id}`, {
      state: { id, title, image, price, mrp, stars },
    });
  };

  return (
    <div
      className="w-[380px] rounded-t-xl overflow-hidden shadow-lg border-2 group transition-transform duration-300 ease-in-out"
      style={{ borderColor: "#B0E4F4" }}
    >
      {/* Top white area */}
      <div className="bg-white relative h-[360px]">
        <div className="absolute top-2 left-2 bg-sky-300 text-xs px-2 py-1 rounded-full font-semibold">
          New
        </div>
        <div className="h-full flex items-center justify-center">
          <div className="w-[260px] h-[260px] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-[240px] w-[240px] object-contain transform transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Bottom blue area */}
      <div
        className="text-black p-4 rounded-tr-[50px] relative"
        style={{ backgroundColor: "#B0E4F4" }}
      >
        <button
          onClick={handleBuy}
          className="absolute top-2 right-4 bg-white text-sm text-black font-bold px-4 py-1 rounded-full shadow"
        >
          Buy
        </button>

        <h3 className="font-bold text-xl mb-2">{title}</h3>

        <div className="flex text-yellow-400 text-xl mb-1">
          {"★".repeat(stars)}
          <span className="text-gray-300 ml-1">{"☆".repeat(5 - stars)}</span>
        </div>

        <p className="text-sm line-through">₹{mrp}</p>
        <p className="text-xl font-bold text-white">₹{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
