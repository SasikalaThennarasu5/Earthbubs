// src/data/products.js
import img1 from "../assets/images/soap1.png";
import img2 from "../assets/images/soap2.png";
import img3 from "../assets/images/soap3.png";
import img4 from "../assets/images/soap4.png";
import img5 from "../assets/images/soap5.png";
import img6 from "../assets/images/soap6.png";

const soapsData = [
  {
    id: 401,
    title: "Gentle Baby Soap",
   images: [img1, img3, img2,img3],
    price: 380,
    mrp: 466,
    rating: 5,
  },
  {
    id: 402,
    title: "Baby Soap",
   images: [img2, img3, img2,img3],
    price: 325,
    mrp: 500,
    rating: 4,
  },
  {
    id: 403,
    title: "Natural Soap",
    images: [img3, img1, img2,img3],
    price: 599,
    mrp: 600,
    rating: 5,
  },
  {
    id: 404,
    title: "Pro Baby Soap",
    images: [img4, img3, img2,img3],
    price: 320,
    mrp: 470,
    rating: 5,
  },
  {
    id: 405,
    title: "Mee Baby Soap",
    images: [img5, img3, img2,img3],
    price: 399,
    mrp: 466,
    rating: 5,
  },
  {
    id: 406,
    title: "Milk Baby Soap",
    images: [img6, img3, img2,img3],
    price: 800,
    mrp: 980,
    rating: 5,
  },
];

export default soapsData;