import React from "react";
import ProductCard from "../components/ProductCard";
import diaper1 from "../assets/images/Img-card-col.png";
import diaper2 from "../assets/images/boy1.png";
import diaper3 from "../assets/images/girl1.png";

const products = [
  { id: 1, title: "Wipes", image: diaper1, price: 680, mrp: 800, stars: 5 },
  { id: 2, title: "Caleb", image: diaper2, price: 450, mrp: 550, stars: 4 },
  { id: 3, title: "Mee Mee Premium", image: diaper3, price: 700, mrp: 1044, stars: 5 },
];

const BestSellers = () => {
  return (
    <div className="px-6 py-10 md:px-10 lg:px-20">
      <p className="text-sm text-gray-600 mb-4">Home &gt; Products &gt; Pamper's</p>

      <h2 className="text-3xl font-bold text-gray-800 mb-8">Best Sellers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
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
