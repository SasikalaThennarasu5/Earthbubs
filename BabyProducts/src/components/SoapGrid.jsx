import React from "react";
import soapsData from "../data/ProductsData";

const SoapGrid = ({ selectedFilter }) => {
  const filterProducts = (products) => {
    if (!selectedFilter) return products;

    // Example filter logic based on price
    if (selectedFilter === "below400") {
      return products.filter((item) => item.price < 400);
    }
    if (selectedFilter === "400to600") {
      return products.filter((item) => item.price >= 400 && item.price <= 600);
    }
    if (selectedFilter === "above600") {
      return products.filter((item) => item.price > 600);
    }

    return products;
  };

  const filteredSoaps = filterProducts(soapsData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredSoaps.map((soap) => (
        <div key={soap.id} className="border rounded-lg p-4 shadow-sm">
          <img
            src={soap.images[0]}
            alt={soap.title}
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h2 className="text-lg font-semibold mb-2">{soap.title}</h2>
          <p className="text-sm text-gray-500 mb-1">MRP: ₹{soap.mrp}</p>
          <p className="text-base font-medium text-green-700">₹{soap.price}</p>
          <p className="text-yellow-500">⭐ {soap.rating}/5</p>
        </div>
      ))}
    </div>
  );
};

export default SoapGrid;
