import React, { useState, useContext } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import OffersData from "../data/OffersData";
import PampersData from "../data/PampersData";
import GirlsFashionData from "../data/GirlsFashionData";
import SoapsData from "../data/SoapsData";
import StrollersData from "../data/StrollersData";
import BottlesData from "../data/BottlesData";
import BoysFashionData from "../data/BoysFashionData";
import deliveryIcon from "../assets/images/delivery.png";
import returnIcon from "../assets/images/return.png";
import { CartContext } from "../context/CartContext";

const ProductDescription = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const allProducts = [
    ...OffersData,
    ...PampersData,
    ...GirlsFashionData,
    ...BoysFashionData,
    ...SoapsData,
    ...StrollersData,
    ...BottlesData,
  ];

  // Try to get product from route state (Buy button)
  const productFromState = location.state;
  let product = productFromState;

  // If direct link, fallback to matching product from all data
  if (!product) {
    product = allProducts.find((p) => p.id === parseInt(id));
  }

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-red-600">Product Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
        >
          Go to Home
        </button>
      </div>
    );
  }

  const [mainImage, setMainImage] = useState(
    product.image || (product.images?.length ? product.images[0] : "")
  );
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleInputChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val > 0) {
      setQuantity(val);
    } else if (e.target.value === "") {
      setQuantity("");
    }
  };

  const handleBuyNow = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      image: mainImage,
      price: product.price,
      quantity,
    };

    addToCart(cartItem);
    navigate("/cart");
  };

  return (
    <div className="max-w-8xl mx-auto">
      <div className="text-lg font-medium space-x-2 p-10">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span>›</span>
        <span>Products</span>
        <span>›</span>
        <span>{product.title}</span>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 py-6 px-4 sm:px-6 lg:px-20">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[65%] p-4 flex flex-col items-center">
          <div className="w-full flex flex-col lg:flex-row gap-4 mt-6">
            {/* Thumbnails */}
            {product.images?.length > 0 && (
              <div className="flex lg:flex-col flex-wrap gap-3 justify-center">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumb ${index}`}
                    onClick={() => setMainImage(img)}
                    className={`w-[90px] h-[90px] lg:w-[120px] lg:h-[130px] object-cover rounded-xl border-2 cursor-pointer ${
                      mainImage === img
                        ? "border-cyan-500"
                        : "border-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Main Image */}
            <div className="relative flex-1 h-[300px] md:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border shadow-md flex justify-center items-center bg-[#B0E6F9]">
              <img
                src={mainImage}
                alt="Main product"
                className="w-[90%] h-full object-contain"
              />
              <div className="absolute top-0 right-0 bg-cyan-400 px-3 py-2 rounded-bl-xl text-sm font-semibold">
                Coupon: EB55
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          {product.images?.length > 1 && (
            <div className="flex gap-3 mt-6">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`w-3 h-3 rounded-full ${
                    mainImage === img ? "bg-black scale-110" : "bg-cyan-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-[35%] space-y-4 text-[16px] leading-relaxed mt-8 lg:mt-0">
          <h1 className="text-2xl font-bold">{product.title}</h1>

          <div className="flex items-center gap-2 text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={
                  i < (product.stars || product.rating) ? "" : "text-gray-300"
                }
              />
            ))}
            <span className="text-gray-600 text-sm font-medium">
              (18 Reviews)
            </span>
            <span className="text-green-500 text-sm font-medium border-l pl-2 border-gray-300">
              In Stock
            </span>
          </div>

          <p className="text-gray-700 font-semibold">
            Give your baby the gentle care they deserve with ultra-soft,
            breathable materials. These diapers keep your little one dry,
            happy, and rash-free for up to 12 hours.
          </p>

          <div className="flex gap-6 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span>Colours:</span>
              <span className="w-5 h-5 bg-cyan-400 rounded-full"></span>
              <span className="w-5 h-5 bg-pink-500 rounded-full"></span>
            </div>
            <div className="flex items-center gap-2">
              <span>Size:</span>
              <span>Free Size</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <span className="text-gray-400 font-bold line-through text-lg">
              MRP ₹{product.mrp?.toFixed(2)}
            </span>
            <span className="text-2xl font-bold text-black">
              Sale Price ₹{product.price?.toFixed(2)}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <div className="flex items-center gap-2 border px-3 py-2 rounded-xl">
              <button
                onClick={decrement}
                className="w-9 h-9 border rounded-lg flex items-center justify-center text-xl font-bold bg-cyan-200"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={handleInputChange}
                className="w-14 text-center rounded-lg py-1 text-lg font-medium focus:outline-none"
              />
              <button
                onClick={increment}
                className="w-9 h-9 border rounded-lg flex items-center justify-center text-xl font-bold bg-cyan-200"
              >
                +
              </button>
            </div>

            <button
              onClick={handleBuyNow}
              className="bg-[#00b4d8] hover:bg-[#009ec2] text-white px-8 py-2 rounded-xl font-semibold text-base shadow"
            >
              Buy Now
            </button>
          </div>

          <div className="border border-cyan-500 mt-6 rounded-lg divide-y">
            <div className="flex gap-3 px-4 py-3 items-start">
              <img src={deliveryIcon} alt="Delivery" className="w-6 h-6" />
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-sm text-gray-600 font-semibold underline">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex gap-3 px-4 py-3 items-start">
              <img src={returnIcon} alt="Return" className="w-6 h-6" />
              <div>
                <p className="font-semibold">Return Delivery</p>
                <p className="text-sm text-gray-600 font-semibold">
                  Free 7 Days Delivery Returns.{" "}
                  <span className="underline cursor-pointer text-blue-600">
                    Details
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
