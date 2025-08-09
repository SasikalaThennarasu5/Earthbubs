import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "#" }, // acts as a dropdown parent
    { name: "Offers", path: "/offers" },
    { name: "About", path: "/about" },
    { name: "Contacts", path: "/contacts" },
  ];

  const productLinks = [
    { name: "Boys Fashion", path: "/products/boys-fashion" },
    { name: "Girls Fashion", path: "/products/girls-fashion" },
    { name: "Pampers", path: "/products/pampers" },
    { name: "Baby Soaps", path: "/products/soaps" },
    { name: "Feeding Bottles", path: "/products/Feeding-bottles" },
    { name: "Strollers", path: "/products/strollers" },
  ];

  return (
    <nav className="bg-white font-poppins shadow sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="w-32 h-14 object-contain" />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-sm font-semibold items-center relative">
          {navLinks.map((link) =>
            link.name === "Products" ? (
              <li key={link.name} className="relative group cursor-pointer">
                <span className="px-2 py-1 hover:text-[#00B4D8]">
                  {link.name}
                </span>
                {/* Dropdown */}
                <ul className="absolute top-full left-0 bg-white shadow rounded w-44 z-50 hidden group-hover:block">
                  {productLinks.map((sublink) => (
                    <li key={sublink.name}>
                      <NavLink
                        to={sublink.path}
                        className="block px-4 py-2 text-sm hover:bg-[#B0E4F4] hover:text-black"
                      >
                        {sublink.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-2 py-1 ${
                      isActive
                        ? "bg-gradient-to-b from-white via-[#B0E4F4] to-[#00B4D8] text-black border-b-4 border-[#00B4D8] rounded-sm"
                        : "hover:text-[#00B4D8]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Right: Search and Icons */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border-2 border-[#00B4D8] rounded-xl px-4 py-1 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
            />
            <Search className="absolute right-2 top-2 h-4 w-4 text-gray-500" />
          </div>
          <NavLink to="/cart">
            <ShoppingCart className="text-black cursor-pointer" />
          </NavLink>
          <NavLink to="/login">
            <User className="text-black cursor-pointer" />
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) =>
            link.name === "Products" ? (
              <div key={link.name}>
                <span className="block font-semibold text-sm">Products</span>
                {productLinks.map((p) => (
                  <NavLink
                    key={p.name}
                    to={p.path}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 text-sm hover:bg-[#B0E4F4] rounded"
                  >
                    {p.name}
                  </NavLink>
                ))}
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? "bg-gradient-to-b from-white via-[#B0E4F4] to-[#00B4D8] text-black border-b-4 border-[#00B4D8]"
                      : "hover:bg-[#B0E4F4] hover:text-black"
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          )}

          {/* Mobile search */}
          <div className="mt-2 flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 border-2 border-[#00B4D8] rounded-xl px-3 py-1 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
            />
            <Search className="text-gray-500" />
            <NavLink to="/login">
              <User className="text-black" />
            </NavLink>
            <NavLink to="/cart">
              <ShoppingCart className="text-black" />
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
