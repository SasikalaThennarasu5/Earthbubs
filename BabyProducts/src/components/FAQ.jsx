import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Are your products safe for newborns?",
    answer:
      "Yes, all our products are dermatological tested and made with gentle, non-toxic ingredients that are safe for newborns and sensitive skin.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes 3–5 business days depending on your location and availability.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Yes, we offer a hassle-free 7-day return and exchange policy for unused and unopened products.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, UPI, net banking, and select wallet payments like Paytm and PhonePe.",
  },
  {
    question: "Are your skincare products organic or natural?",
    answer:
      "Our skincare range includes products that are both organic and made with natural ingredients. Each product is labeled accordingly.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team via email at support@example.com or through our live chat available on the website.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="px-4 py-16 md:px-10 lg:px-20 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-3">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-lg text-gray-600 mb-10">
        We’re Here to Help – Every Step of the Way
      </p>

      <div className="space-y-6"> {/* More vertical spacing between FAQ blocks */}
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-cyan-400 pb-6 transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left focus:outline-none gap-4"
            >
              <h3 className="text-base md:text-lg font-semibold text-black leading-relaxed">
                {faq.question}
              </h3>

              <div
                className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600"
              >
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </button>

            {activeIndex === index && (
              <p className="mt-4 text-sm md:text-base text-gray-800 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
