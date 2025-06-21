"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar text-white py-5 px-8 flex justify-between items-center shadow-md relative z-50">
      <div className="logo-brand text-2xl font-bold">
        <Link href="/">AILO</Link>
      </div>

      {/* Hamburger Menu - Mobile Only */}
      <div
        className="lg:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Links - Desktop */}
      <div className="hidden lg:flex nav-links">
        <ul className="flex space-x-4 justify-center items-center">
          <li>
            <Link href="/" className="hover:text-gray-300 flip-hover">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300 flip-hover">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-300 flip-hover">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 flip-hover">
              Contact
            </Link>
          </li>
          <li>
            <div className="btn-contact">
              <Link href="/blog">Contact Us</Link>
            </div>
          </li>
        </ul>
      </div>

      {/* Links - Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full  rounded-b-lg py-4 px-6 lg:hidden navbar-responsive">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <div className="btn-contact w-fit">
                <Link href="/blog" onClick={() => setMenuOpen(false)}>
                  Contact Us
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
