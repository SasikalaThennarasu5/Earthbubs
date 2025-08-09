const products = [
  // SOAPS (8)
  { id: 401, title: 'Gentle Baby Soap', price: 380, mrp: 466, rating: 5, category: 'soaps', images: ['/images/soap1.png'] },
  { id: 402, title: 'Baby Soap', price: 325, mrp: 500, rating: 4, category: 'soaps', images: ['/images/soap2.png'] },
  { id: 403, title: 'Natural Soap', price: 599, mrp: 600, rating: 5, category: 'soaps', images: ['/images/soap3.png'] },
  { id: 404, title: 'Pro Baby Soap', price: 320, mrp: 470, rating: 5, category: 'soaps', images: ['/images/soap4.png'] },
  { id: 405, title: 'Mee Baby Soap', price: 399, mrp: 466, rating: 5, category: 'soaps', images: ['/images/soap5.png'] },
  { id: 406, title: 'Milk Baby Soap', price: 800, mrp: 980, rating: 5, category: 'soaps', images: ['/images/soap6.png'] },
  { id: 407, title: 'Aloe Baby Soap', price: 420, mrp: 520, rating: 4, category: 'soaps', images: ['/images/soap7.png'] },
  { id: 408, title: 'Lavender Baby Soap', price: 450, mrp: 560, rating: 4, category: 'soaps', images: ['/images/soap8.png'] },

  // PAMPERS (8)
  { id: 201, title: 'Mee Mee Pampers S (44)', price: 700, mrp: 1044, rating: 4, category: 'pampers', images: ['/images/pamp1.png'] },
  { id: 202, title: 'Active Baby Diapers M', price: 899, mrp: 1200, rating: 5, category: 'pampers', images: ['/images/pamp2.png'] },
  { id: 203, title: 'Premium Dry Diapers L', price: 999, mrp: 1300, rating: 5, category: 'pampers', images: ['/images/pamp3.png'] },
  { id: 204, title: 'Ultra Comfort XS', price: 599, mrp: 800, rating: 4, category: 'pampers', images: ['/images/pamp4.png'] },
  { id: 205, title: 'Overnight Diapers XL', price: 1199, mrp: 1600, rating: 5, category: 'pampers', images: ['/images/pamp5.png'] },
  { id: 206, title: 'Tape Style S (72)', price: 1299, mrp: 1700, rating: 5, category: 'pampers', images: ['/images/pamp6.png'] },
  { id: 207, title: 'Pants Style L (56)', price: 1149, mrp: 1500, rating: 4, category: 'pampers', images: ['/images/pamp7.png'] },
  { id: 208, title: 'Eco Dry XL (38)', price: 899, mrp: 1200, rating: 4, category: 'pampers', images: ['/images/pamp8.png'] },

  // FEEDING BOTTLES (8)
  { id: 101, title: 'Anti-Colic Bottle 150ml', price: 299, mrp: 399, rating: 4, category: 'feeding-bottles', images: ['/images/bottle1.png'] },
  { id: 102, title: 'Glass Bottle 250ml', price: 449, mrp: 599, rating: 5, category: 'feeding-bottles', images: ['/images/bottle2.png'] },
  { id: 103, title: 'PP Bottle 200ml', price: 199, mrp: 299, rating: 4, category: 'feeding-bottles', images: ['/images/bottle3.png'] },
  { id: 104, title: 'Wide Neck 260ml', price: 399, mrp: 520, rating: 4, category: 'feeding-bottles', images: ['/images/bottle4.png'] },
  { id: 105, title: 'Silicone Bottle 180ml', price: 520, mrp: 699, rating: 5, category: 'feeding-bottles', images: ['/images/bottle5.png'] },
  { id: 106, title: 'Straw Bottle 300ml', price: 350, mrp: 499, rating: 4, category: 'feeding-bottles', images: ['/images/bottle6.png'] },
  { id: 107, title: 'Trainer Cup 200ml', price: 280, mrp: 360, rating: 4, category: 'feeding-bottles', images: ['/images/bottle7.png'] },
  { id: 108, title: 'Thermal Bottle 320ml', price: 650, mrp: 820, rating: 5, category: 'feeding-bottles', images: ['/images/bottle8.png'] },

  // STROLLERS (8)
  { id: 301, title: 'City Stroller Lite', price: 4499, mrp: 5999, rating: 4, category: 'strollers', images: ['/images/stroller1.png'] },
  { id: 302, title: 'Travel Stroller Air', price: 6999, mrp: 8999, rating: 5, category: 'strollers', images: ['/images/stroller2.png'] },
  { id: 303, title: 'Comfort Plus', price: 5499, mrp: 6999, rating: 4, category: 'strollers', images: ['/images/stroller3.png'] },
  { id: 304, title: 'All Terrain Pro', price: 9999, mrp: 12999, rating: 5, category: 'strollers', images: ['/images/stroller4.png'] },
  { id: 305, title: 'Umbrella Stroller', price: 2999, mrp: 3999, rating: 4, category: 'strollers', images: ['/images/stroller5.png'] },
  { id: 306, title: 'Twin Stroller', price: 11999, mrp: 14999, rating: 5, category: 'strollers', images: ['/images/stroller6.png'] },
  { id: 307, title: 'Recline Stroller', price: 5799, mrp: 7499, rating: 4, category: 'strollers', images: ['/images/stroller7.png'] },
  { id: 308, title: 'Urban Stroller', price: 6399, mrp: 7999, rating: 4, category: 'strollers', images: ['/images/stroller8.png'] },

  // GIRLS FASHION (8)
  { id: 501, title: 'Halemons Floral', price: 1399, mrp: 1466, rating: 5, category: 'girls-fashion', images: ['/images/girl1.png'] },
  { id: 502, title: 'Halemons Victoria', price: 1299, mrp: 1366, rating: 4, category: 'girls-fashion', images: ['/images/girl2.png'] },
  { id: 503, title: 'Newborn Cutie', price: 2399, mrp: 2466, rating: 5, category: 'girls-fashion', images: ['/images/girl3.png'] },
  { id: 504, title: 'Fareto Baby', price: 699, mrp: 866, rating: 4, category: 'girls-fashion', images: ['/images/girl4.png'] },
  { id: 505, title: 'Zibuyu', price: 499, mrp: 566, rating: 4, category: 'girls-fashion', images: ['/images/girl5.png'] },
  { id: 506, title: 'Poppes', price: 399, mrp: 466, rating: 4, category: 'girls-fashion', images: ['/images/girl6.png'] },
  { id: 507, title: 'Pastel Set', price: 799, mrp: 999, rating: 4, category: 'girls-fashion', images: ['/images/girl7.png'] },
  { id: 508, title: 'Party Dress', price: 1499, mrp: 1799, rating: 5, category: 'girls-fashion', images: ['/images/girl8.png'] },

  // BOYS FASHION (8)
  { id: 601, title: 'Casual Tee Set', price: 599, mrp: 799, rating: 4, category: 'boys-fashion', images: ['/images/boy1.png'] },
  { id: 602, title: 'Denim Shorts', price: 499, mrp: 699, rating: 4, category: 'boys-fashion', images: ['/images/boy2.png'] },
  { id: 603, title: 'Hoodie Set', price: 999, mrp: 1299, rating: 5, category: 'boys-fashion', images: ['/images/boy3.png'] },
  { id: 604, title: 'Party Suit', price: 1999, mrp: 2499, rating: 5, category: 'boys-fashion', images: ['/images/boy4.png'] },
  { id: 605, title: 'Athletic Wear', price: 899, mrp: 1099, rating: 4, category: 'boys-fashion', images: ['/images/boy5.png'] },
  { id: 606, title: 'Cotton Set', price: 699, mrp: 899, rating: 4, category: 'boys-fashion', images: ['/images/boy6.png'] },
  { id: 607, title: 'Formal Shirt', price: 799, mrp: 999, rating: 4, category: 'boys-fashion', images: ['/images/boy7.png'] },
  { id: 608, title: 'Winter Jacket', price: 1499, mrp: 1899, rating: 5, category: 'boys-fashion', images: ['/images/boy8.png'] },
];

export default products;