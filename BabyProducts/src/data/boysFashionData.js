// src/data/products.js
import img1 from "../assets/images/boy1.png";
import img2 from "../assets/images/boy2.png";
import img3 from "../assets/images/boy3.png";
import img4 from "../assets/images/boy4.png";
import img5 from "../assets/images/boy5.png";
import img6 from "../assets/images/boy6.png";

const boysFashionData = [
  {
    id: 201,
    title: "Mama Miei Baby",
   images: [img1, img3, img2,img3],
    price: 3199,
    mrp: 3600,
    rating: 5,
  },
  {
    id: 202,
    title: "Caleb",
   images: [img2, img3, img2,img3],
    price: 1800,
    mrp: 2300,
    rating: 4,
  },
  {
    id: 203,
    title: "Mee Mee Premium",
    images: [img3, img1, img2,img3],
    price: 1399,
    mrp: 2068,
    rating: 5,
  },
  {
    id: 204,
    title: "Saphis",
    images: [img4, img3, img2,img3],
    price: 1800,
    mrp: 2100,
    rating: 5,
  },
  {
    id: 205,
    title: "Archer",
    images: [img5, img3, img2,img3],
    price: 1399,
    mrp: 1456,
    rating: 5,
  },
  {
    id: 206,
    title: "Marcus",
    images: [img6, img3, img2,img3],
    price: 1199,
    mrp: 1456,
    rating: 5,
  },
];

export default boysFashionData;