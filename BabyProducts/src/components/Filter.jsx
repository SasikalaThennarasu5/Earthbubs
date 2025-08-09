import React, { useState } from "react";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Filter <i className="icon ml-2" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded shadow-lg z-50">
          <ul>
            <li className="p-2 border-b hover:bg-gray-100 cursor-pointer">Price (100–1000)</li>
            <li className="p-2 border-b hover:bg-gray-100 cursor-pointer">Price (1000–1500)</li>
            <li className="p-2 border-b hover:bg-gray-100 cursor-pointer">Price (1500–10000)</li>
            <li className="p-2 border-b hover:bg-gray-100 cursor-pointer">Free Shipping</li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Discounts (6)</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
