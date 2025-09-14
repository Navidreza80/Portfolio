"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = ["Testimonial", "Experiences", "Projects", "Contact"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="
      w-full fixed top-0 left-0 px-5 md:px-12 lg:px-24 py-4 
      flex justify-between items-center 
      transition-all duration-300 z-50
bg-black  border-b border-white/10"
    >
      {/* Logo */}
      <span className="font-bold text-xl text-white tracking-wide">NAVID</span>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 lg:gap-8">
        {navLinks.map((item) => (
          <Link
            href={`#${item.toLowerCase()}`}
            key={item}
            className="font-light text-white/70 hover:text-white transition-colors text-sm relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
          </Link>
        ))}
        <Link
          href="/blogs"
          className="font-light text-white/70 hover:text-white transition-colors text-sm relative group"
        >
          Blogs
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none z-50 cursor-pointer relative w-8 h-8 flex items-center justify-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6">
          <span
            className={`absolute left-0 top-2 w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1"
            }`}
          ></span>
          <span
            className={`absolute left-0 top-2 w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute left-0 top-2 w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1"
            }`}
          ></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/80 transition-all duration-300
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          z-40 md:hidden
        `}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-lg
          shadow-lg py-6 px-5
          transition-all duration-300 z-50
          flex flex-col
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white p-2"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navLinks.map((item) => (
            <Link
              href={`#${item.toLowerCase()}`}
              key={item}
              className="font-light text-white/70 hover:text-white py-3 px-4 rounded transition-all hover:bg-white/5 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/blogs"
            className="font-light text-white/70 hover:text-white py-3 px-4 rounded transition-all hover:bg-white/5 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
