import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

// Import images
import product1 from "../assets/images/Img-card-col.png";
import product2 from "../assets/images/boy1.png";
import product3 from "../assets/images/girl1.png";

const products = [
  {
    id: 1,
    title: "Wipes",
    image: product1,
    price: "1299",
    mrp: "1444",
    stars: 5,
  },
  {
    id: 2,
    title: "Mama Miel Baby",
    image: product2,
    price: "1399",
    mrp: "1599",
    stars: 4,
  },
  {
    id: 3,
    title: "Zibuyu",
    image: product3,
    price: "1499",
    mrp: "1699",
    stars: 3,
  },
];

const BestSellers = () => {
  const navigate = useNavigate();

  const handleBuy = (product) => {
    navigate(`/product/${product.id}`, {
      state: product,
    });
  };

  return (
    <div className="px-4 py-16 md:px-10 lg:px-20">
      <h2 className="text-4xl font-bold text-center">Best Sellers</h2>
      <p className="text-center text-lg text-gray-600 mt-2 mb-10">
        Our Most Loved Products
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative rounded-xl border border-sky-300 overflow-hidden shadow-md"
          >
            <span className="absolute top-0 left-0 bg-cyan-500 text-white text-sm font-semibold px-4 py-1 rounded-br-xl">
              NEW
            </span>

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[280px] object-contain p-4"
            />

            <div className="bg-sky-100 px-4 py-4 rounded-tl-[40px] flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold capitalize">{product.title}</h3>
                <button
                  onClick={() => handleBuy(product)}
                  className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold"
                >
                  Buy
                </button>
              </div>

              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                {[...Array(product.stars)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {[...Array(5 - product.stars)].map((_, i) => (
                  <FaStar key={i + product.stars} className="text-gray-300" />
                ))}
              </div>

              <div className="text-sm font-medium">
                <span className="line-through text-gray-500 mr-2">
                  ₹{product.mrp}
                </span>
                <span className="text-black font-bold text-lg">
                  ₹{product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination indicators */}
      <div className="flex justify-center items-center gap-3 mt-10">
        <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
        <div className="w-3 h-3 bg-black rounded-full"></div>
        <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
        <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default BestSellers;
