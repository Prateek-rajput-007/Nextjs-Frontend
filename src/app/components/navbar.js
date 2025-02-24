"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#9C29B2] text-white py-6 px-6 min-h-[100px] flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/d01.png"
            alt="Logo"
            width={180} 
            height={120}
            className="w-auto h-14 md:h-16 lg:h-20"
          />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {["Home", "About us", "Write", "Read", "Pricing"].map((item, index) => (
            <li key={index}>
              <Link href={`/${item.toLowerCase().replace(" ", "")}`} className="hover:text-yellow-300">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex ml-8 space-x-4 items-center">
          <button className="border border-yellow-400 text-white px-5 py-2 rounded-md hover:bg-white hover:text-[#9C29B2] transition flex items-center">
            English
            <FaAngleDown className="ml-2" size={16} />
          </button>
          <button className="bg-yellow-400 text-[#363636] px-5 py-2 rounded-md hover:bg-yellow-500 transition flex items-center">
            Sign In
            <Image src="/lock.png" alt="Lock Icon" width={18} height={18} className="ml-2" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#9C29B2] w-full absolute top-[100px] left-0 py-6 px-4 flex flex-col items-center space-y-4 z-50">
          {["Home", "About us", "Write", "Read", "Pricing"].map((item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase().replace(" ", "")}`}
              className="text-lg hover:text-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <button className="border border-yellow-400 text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#9C29B2] transition flex items-center">
            English <FaAngleDown className="ml-2" size={16} />
          </button>
          <button className="bg-yellow-400 text-[#363636] px-6 py-2 rounded-md hover:bg-yellow-500 transition flex items-center">
            Sign In
            <Image src="/lock.png" alt="Lock Icon" width={20} height={20} className="ml-2" />
          </button>
        </div>
      )}
    </nav>
  );
}
