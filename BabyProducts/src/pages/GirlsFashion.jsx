import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import diaper1 from "../assets/images/Girl1.png";
import diaper2 from "../assets/images/Girl2.png";
import diaper3 from "../assets/images/Girl3.png";
import diaper4 from "../assets/images/Girl4.png";
import diaper5 from "../assets/images/Girl5.png";
import diaper6 from "../assets/images/Girl6.png";




const originalProducts = [
  { id: 1, title: "Halemans Floral", image: diaper1, price: 1466, mrp: 800, stars: 5 },
  { id: 2, title: "Halemans Victoria", image: diaper2, price: 450, mrp: 550, stars: 4 },
  { id: 3, title: "Mee Premium", image: diaper3, price: 700, mrp: 1044, stars: 5 },
  { id: 4, title: "Newborn Cutie", image: diaper4, price: 580, mrp: 650, stars: 4 },
  { id: 5, title: "zibiyu", image: diaper5, price: 800, mrp: 950, stars: 5 },
  { id: 6, title: "Poppes", image: diaper6, price: 1300, mrp: 1590, stars: 5 },
];

const GirlsFashion = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(originalProducts);

  useEffect(() => {
    let filtered = [...originalProducts];

    if (selectedFilter === "0-1000") {
      filtered = filtered.filter(p => p.price <= 1000);
    } else if (selectedFilter === "1000-1500") {
      filtered = filtered.filter(p => p.price > 1000 && p.price <= 1500);
    } else if (selectedFilter === "discount") {
      filtered = filtered.filter(p => p.mrp > p.price);
    }

    setFilteredProducts(filtered);
  }, [selectedFilter]);

  return (
    <div className="px-6 py-6">
      <p className="text-sm text-gray-600 mb-4">Home &gt; Products &gt; Pamper's</p>

      <div className="flex justify-end mb-4">
        <select
          className="border rounded px-2 py-1 text-sm"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="">Filter 🔃</option>
          <option value="0-1000">Price (0–1000)</option>
          <option value="1000-1500">Price (1000–1500)</option>
          <option value="discount">Discounts</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center px-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No products found.</p>
        )}
      </div>

      <div className="flex justify-center items-center mt-6">
        <div className="flex space-x-1 text-sm">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <button key={num} className="px-2 py-1 rounded border hover:bg-gray-100">
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GirlsFashion;
