import React from "react";
import user1 from "../assets/images/user1.jpeg";
import user2 from "../assets/images/user2.jpeg";
import user3 from "../assets/images/user3.jpeg";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul S. – Bangalore, India",
    text: "We love the stroller – lightweight, easy to fold, and super smooth on roads. Perfect for city walks. The quality feels premium, and my daughter is always comfy in it.",
    image: user1,
  },
  {
    name: "Priya M. – Chennai, India",
    text: "The EarthBubs diapers are amazing! My baby sleeps through the night without any leaks or rashes. I’ve tried many brands, but this one is truly gentle and reliable.",
    image: user2,
  },
  {
    name: "Anika R. – Mumbai, India",
    text: "I ordered the baby soap kit and I’m blown away. The lotion and wash are so gentle, and the natural fragrance is lovely. No irritation at all – just soft, healthy skin.",
    image: user3,
  },
];

export default function Testimonial() {
  return (
    <div className="px-4 py-16 md:px-10 lg:px-20 text-center font-[Poppins]">
      <h2 className="text-3xl md:text-5xl font-bold mb-3">
        Customer Testimonials
      </h2>
      <p className="text-lg text-gray-600 mb-12">
        Parent Favorites, Baby Approved
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-stretch">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white p-6 pt-10 relative shadow-md border-[6px] border-[#B0E4F4] rounded-[30px] transform ${
              index === 0
                ? "-rotate-2"
                : index === 1
                ? "rotate-1"
                : "-rotate-1"
            }`}
          >
            {/* Avatar with star */}
            <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2">
              <div className="relative w-16 h-16 mx-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 object-cover rounded-full border-2 border-white"
                />
                <div className="absolute bottom-0 right-0 bg-yellow-300 rounded-full p-1">
                  <FaStar className="text-white text-xs" />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="font-medium text-sm text-black mb-2">
                {testimonial.name}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-10">
        <span className="h-2 w-2 rounded-full bg-[#00B4D8] block"></span>
        <span className="h-2 w-2 rounded-full bg-[#B0E4F4] block"></span>
        <span className="h-2 w-2 rounded-full bg-[#B0E4F4] block"></span>
      </div>
    </div>
  );
}
