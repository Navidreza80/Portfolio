"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = ["Testimonial", "Experiences", "Projects", "Contact"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full px-5 md:px-10 lg:px-20 py-5 md:py-5  md:pt-[20px] pt-[20px] flex justify-between items-center relative md:bg-transparent lg:bg-transparent bg-white z-50">
      {/* Logo */}
      <span className="font-black text-2xl text-primary z-50">NAVID</span>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 lg:gap-[34px]">
        {navLinks.map((item) => (
          <Link
            href={`#${item}`}
            key={item}
            className="font-light text-primary hover:text-primary/80 transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none z-50 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="space-y-2">
          <span
            className={`block w-8 h-0.5 bg-primary transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-primary transition-all ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-primary transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`
         fixed inset-0 bg-black/50 transition-opacity duration-300
        ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        z-40
      `}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`
        md:hidden absolute top-0 right-0 bg-white shadow-lg py-4 px-5
        transition-all duration-300 z-50
        ${isMenuOpen ? "translate-y-0" : "-translate-y-full opacity-0"}
      `}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((item) => (
            <Link
              href={`#${item}`}
              key={item}
              className="font-light text-primary py-2 hover:bg-primary/10 px-4 rounded transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
