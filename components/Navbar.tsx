"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar text-white py-4 px-8 flex justify-between items-center shadow-md relative z-50">
      <div className="logo-brand text-2xl font-bold">
        <Image src={"/logoailo.png"} alt="logo" width={100} height={100} />
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
              Tentang kami
            </Link>
          </li>
          <li>
            <Link
              href="/publications"
              className="hover:text-gray-300 flip-hover"
            >
              Publikasi
            </Link>
          </li>
          <li>
            <Link href="/teams" className="hover:text-gray-300 flip-hover">
              Tim kami
            </Link>
          </li>
          <li>
            <div className="btn-contact">
              <Link href="/projects">Jelajahi Project</Link>
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
                Tentang kami
              </Link>
            </li>
            <li>
              <Link href="/publications" onClick={() => setMenuOpen(false)}>
                Publikasi
              </Link>
            </li>
            <li>
              <Link href="/teams" onClick={() => setMenuOpen(false)}>
                Tim kami
              </Link>
            </li>
            <li>
              <div className="btn-contact w-fit">
                <Link href="/projects" onClick={() => setMenuOpen(false)}>
                  Jelajahi Project
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
