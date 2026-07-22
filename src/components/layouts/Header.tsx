"use client";

import Link from "next/link";
import { useState } from "react";
import { type Theme } from "@/app/actions/Theme";

const navLinks = [
  { label: "Skills", href: "/#skills" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const Header = ({ theme }: { theme: Theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      data-theme={theme}
      className="header-root header-bg w-full fixed top-0 left-0 px-5 md:px-12 lg:px-24 py-4 flex justify-between items-center z-50 border-b"
    >
      {/* Logo */}
      <Link href="/" className="header-logo font-bold text-xl tracking-wide">
        NAVID
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 lg:gap-8">
        {[...navLinks, { label: "Blogs", href: "/blogs" }].map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className="header-link font-light text-sm relative group"
          >
            {item.label}
            <span className="header-underline absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none z-50 cursor-pointer relative w-8 h-8 flex items-center justify-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6">
          <span
            className={`header-hamburger absolute left-0 top-2 w-6 h-0.5 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1"
            }`}
          />
          <span
            className={`header-hamburger absolute left-0 top-2 w-6 h-0.5 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`header-hamburger absolute left-0 top-2 w-6 h-0.5 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1"
            }`}
          />
        </div>
      </button>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } z-40 md:hidden`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`header-drawer fixed top-0 right-0 h-full w-64 shadow-2xl py-6 px-5 transition-all duration-300 z-50 flex flex-col ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="header-close-btn p-2"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {[...navLinks, { label: "Blogs", href: "/blogs" }].map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="header-drawer-link font-light py-3 px-4 rounded-lg text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
