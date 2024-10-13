import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetActive = (item) => {
    setActive(item);
    setIsMenuOpen(false); // Close menu after clicking on mobile
  };

  return (
    <header className="bg-white h-[80px] -[1168px] flex items-center justify-between px-6 md:px-16 mx-auto rounded-full shadow-lg fixed top-4 left-0 right-0 z-10 max-w-7xl">
      {/* Logo */}
      <div className="text-2xl font-bold uppercase">Jasiso</div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8">
        {[
          "Home",
          "About",
          "Services",
          "Portfolio",
          "Testimonial",
          "Blog",
          "Contact",
        ].map((item) => (
          <li
            key={item}
            className={`cursor-pointer list-none ${
              active === item ? "text-btnColor font-semibold" : "text-gray-600"
            }`}
            onClick={() => handleSetActive(item)}
          >
            {item}
          </li>
        ))}
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={handleMenuToggle}>
          {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-[80px] left-0 right-0 bg-white py-4 shadow-lg z-20">
          <ul className="flex flex-col items-center gap-4">
            {[
              "Home",
              "About",
              "Services",
              "Portfolio",
              "Testimonial",
              "Blog",
              "Contact",
            ].map((item) => (
              <li
                key={item}
                className={`cursor-pointer ${
                  active === item
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                }`}
                onClick={() => handleSetActive(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
