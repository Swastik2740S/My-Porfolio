'use client'
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

const navLinks = [
  { type: 'scroll', to: 'home', label: 'Home' },
  { type: 'scroll', to: 'about', label: 'About Me' },
  { type: 'scroll', to: 'projects', label: 'Projects' },
  { type: 'route', to: '/Resume', label: 'Resume' },
  { type: 'scroll', to: 'contact', label: 'Contact Me' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="/" className="text-3xl font-bold cursor-pointer">
          Swastik Verma
        </a>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-5 rounded-lg">
          {navLinks.map((link) =>
            link.type === 'scroll' ? (
              <li key={link.label}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  activeClass="bg-gray-300 text-black"
                  className="flex items-center gap-2 text-sm py-0.5 px-2 sm:py-2 sm:px-4 border border-solid border-black shadow-custom shadow-black hover:bg-gray-300 hover:text-black transition-all duration-300 rounded-lg cursor-pointer"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.to}
                  className="flex items-center gap-2 text-sm py-0.5 px-2 sm:py-2 sm:px-4 border border-solid border-black shadow-custom shadow-black hover:bg-gray-300 hover:text-black transition-all duration-300 rounded-lg cursor-pointer"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 p-4 bg-white shadow-lg transition-all duration-300">
          {navLinks.map((link) =>
            link.type === 'scroll' ? (
              <li key={link.label}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-base py-2 px-4 border border-solid border-black shadow-custom shadow-black hover:bg-gray-300 hover:text-black transition-all duration-300 rounded-lg cursor-pointer"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.to}
                  className="flex items-center gap-2 text-base py-2 px-4 border border-solid border-black shadow-custom shadow-black hover:bg-gray-300 hover:text-black transition-all duration-300 rounded-lg cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
}
