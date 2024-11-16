// File: components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="container pt-7 pl-0 pr-0">
      <div className="flex justify-between items-end">
        <div className="text-teal-500 font-bold font-mono pl-0">My Portfolio</div>
        <ul className="gap-9 lg:gap-16 hidden md:flex">
          <li className="menuLink">
            <Link href="/" className="text-white cursor-pointer hover:text-teal-500 transition-colors duration-300">
              Home
            </Link>
          </li>
          <li className="menuLink">
            <Link href="/about" className="text-white cursor-pointer hover:text-teal-500 transition-colors duration-300">
              About
            </Link>
          </li>
          <li className="menuLink">
            <Link href="/projects" className="text-white cursor-pointer hover:text-teal-500 transition-colors duration-300">
              Projects
            </Link>
          </li>
          <li className="menuLink">
            <Link href="/contact" className="text-white cursor-pointer hover:text-teal-500 transition-colors duration-300">
              Contact
            </Link>
          </li>
          <li className="menuLink">
            <Link href="/guides" className="text-white cursor-pointer hover:text-teal-500 transition-colors duration-300">
              Guides
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
