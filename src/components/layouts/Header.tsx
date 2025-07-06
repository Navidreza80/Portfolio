'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full  px-6 lg:px-24 fixed top-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl w-full mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl tracking-tight">
          Navid<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-mono text-sm text-gray-300">
          <Link href="#projects" className="hover:text-white transition">Projects</Link>
          <Link href="#about" className="hover:text-white transition">About</Link>
          <Link href="#contact" className="hover:text-white transition">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 font-mono text-sm text-gray-300 bg-black/80 backdrop-blur">
          <Link href="#projects" className="block hover:text-white transition">Projects</Link>
          <Link href="#about" className="block hover:text-white transition">About</Link>
          <Link href="#contact" className="block hover:text-white transition">Contact</Link>
        </div>
      )}
    </header>
  );
}
