import React from "react";

// Import images
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";
import icon5 from "../assets/images/icon5.png";

export default function ParentsTrust() {
  const features = [
    {
      icon: icon1,
      title: "Dermatologist Approved",
      description:
        "Every product is tested and safe for even the most sensitive baby skin.",
    },
    {
      icon: icon2,
      title: "Natural & Non-Toxic Ingredients",
      description:
        "We use only gentle, plant-based formulas free from harsh chemicals.",
    },
    {
      icon: icon3,
      title: "Loved by Thousands of Parents",
      description:
        "Real reviews, real results trusted by families across the country.",
    },
    {
      icon: icon4,
      title: "Eco-Friendly Promise",
      description:
        "From biodegradable packaging to cruelty-free manufacturing, we care for the planet as much as your baby.",
    },
    {
      icon: icon5,
      title: "Fast & Reliable Shipping",
      description:
        "We deliver your baby’s essentials swiftly and safely because every moment counts.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white font-poppins">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Why Parents Trust Us
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Designed with Love. Backed by Science.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group border border-blue-300 rounded-3xl p-6 flex flex-col items-center text-center shadow transition-all duration-300 hover:shadow-xl hover:scale-[1.03] h-full"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-24 h-24 object-contain mb-4 transform transition duration-300 group-hover:scale-110"
              />
              <div className="bg-[#B0E4F4] rounded-xl p-4 w-full shadow-md transition duration-300 group-hover:shadow-lg h-full flex flex-col justify-between">
                <h3 className="font-semibold text-sm md:text-base text-black mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-700">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
