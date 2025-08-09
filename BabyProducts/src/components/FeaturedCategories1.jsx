import React from "react";
import { ArrowUpRight } from "lucide-react";

// Import your images
import img1 from "../assets/images/diaper.png";
import img2 from "../assets/images/boy1.png";
import img3 from "../assets/images/soap1.png";
import img4 from "../assets/images/Frame 14.png";

const categories = [
  {
    title: "Diapers & Pampers",
    image: img1,
  },
  {
    title: "Baby Dress",
    image: img2,
  },
  {
    title: "Baby Soap",
    image: img3,
  },
  {
    title: "Baby Stroller & Prams",
    image: img4,
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 px-4 bg-white font-poppins">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Categories</h2>
        <p className="text-gray-600 text-lg mb-12">Everything Your Baby Needs</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#BFEFFF] rounded-3xl shadow-md transition hover:shadow-xl group overflow-hidden"
            >
              <div className="p-4">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-[220px] object-contain rounded-2xl mx-auto"
                />
              </div>
              <div className="flex justify-between items-center bg-[#BFEFFF] px-4 py-3 rounded-b-3xl">
                <p className="text-base font-medium text-black">{category.title}</p>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform duration-300 transform group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
