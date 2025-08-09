// src/data/products.js
import img1 from "../assets/images/twinbaby.png";
import img2 from "../assets/images/babyrocker.png";
import img3 from "../assets/images/lavern.png";
import img4 from "../assets/images/rockroll.png";
import img5 from "../assets/images/kinger.png";
import img6 from "../assets/images/dravos.png";

const strollerData = [
  {
    id: 501,
    title: "Twin Baby",
   images: [img1, img3, img2,img3],
    price: 4399,
    mrp: 5466,
    rating: 5,
  },
  {
    id: 502,
    title: "Baby Rocker",
   images: [img2, img3, img2,img3],
    price: 8399,
    mrp: 9466,
    rating: 4,
  },
  {
    id: 503,
    title: "Lavern",
    images: [img3, img1, img2,img3],
    price: 9399,
    mrp: 10466,
    rating: 5,
  },
  {
    id: 504,
    title: "Rock Roll",
    images: [img4, img3, img2,img3],
    price: 3399,
    mrp: 4800,
    rating: 5,
  },
  {
    id: 505,
    title: "Kinger",
    images: [img5, img3, img2,img3],
    price: 6000,
    mrp: 7000,
    rating: 5,
  },
  {
    id: 506,
    title: "Dravo",
    images: [img6, img3, img2,img3],
    price: 4399,
    mrp: 5466,
    rating: 5,
  },
];

export default strollerData;