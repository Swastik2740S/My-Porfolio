'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white text-black shadow-md flex items-center justify-between">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo or Brand Name */}
        <a href="/" className="text-3xl font-bold cursor-pointer">
          Swastik Verma
        </a>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex gap-5 rounded-lg">
          <Link href="/">
            <li className="flex items-center gap-2 text-sm py-0.5 px-2 sm:py-2 sm:px-4 border border-solid border-black shadow-custom shadow-black hover:bg-gray-300 hover:text-black transition-all duration-300 rounded-lg">
              Home
            </li>
          </Link>
          <Link href="/#about">
            <li className="flex items-center gap-2 text-sm py-0.5 px-2 sm:py-2 sm:px-4 border border-solid border-black shadow-custom shadow-black hover:bg-gray-300 hover:text-black transition-all duration-300 rounded-lg">
              About Me
            </li>
          </Link>
          <Link href="/#projects">
            <li className="flex items-center gap-2 text-sm py-0.5 px-2 sm:py-2 sm:px-4 border border-solid border-black shadow-custom shadow-black hover:bg-gray-300 hover:text-black transition-all duration-300 rounded-lg">
              Projects
            </li>
          </Link>
          <Link href="/Resume">
            <li className="flex items-center gap-2 text-sm py-0.5 px-2 sm:py-2 sm:px-4 border border-solid border-black shadow-custom shadow-black hover:bg-gray-300 hover:text-black transition-all duration-300 rounded-lg">
              Resume
            </li>
          </Link>
          <Link href="/#contact">
            <li className="flex items-center gap-2 text-sm py-0.5 px-2 sm:py-2 sm:px-4 border border-solid border-black shadow-custom shadow-black hover:bg-gray-300 hover:text-black transition-all duration-300 rounded-lg">
              Contact Me
            </li>
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 p-4 bg-white shadow-lg">
          <li className="font-medium py-2 border-b border-solid border-black hover:bg-gray-300 hover:text-black">
            <Link href="/">Home</Link>
          </li>
          <li className="font-medium py-2 border-b border-solid border-black hover:bg-gray-300 hover:text-black">
            <Link href="/#about">About Me</Link>
          </li>
          <li className="font-medium py-2 border-b border-solid border-black hover:bg-gray-300 hover:text-black">
            <Link href="/#projects">Projects</Link>
          </li>
          <li className="font-medium py-2 border-b border-solid border-black hover:bg-gray-300 hover:text-black">
            <Link href="/Resume">Resume</Link>
          </li>
          <li className="font-medium py-2 border-b border-solid border-black hover:bg-gray-300 hover:text-black">
  <Link href="onamverma8@gmail.com">Contact Me</Link>
</li>

        </ul>
      )}
    </nav>
  );
};

export default Navbar;
