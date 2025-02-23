"use client";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";


export default function Navbar() {
  return (
    <nav className="bg-[#9C29B2] text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/d01.png" alt="Logo" width={218} height={145} />
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-10 text-lg">
          <li>
            <Link href="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-300">
              About us
            </Link>
          </li>
          <li>
            <Link href="/write" className="hover:text-yellow-300">
              Write
            </Link>
          </li>
          <li>
            <Link href="/read" className="hover:text-yellow-300">
              Read
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-yellow-300">
              Pricing
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="ml-16 space-x-6 flex items-center">
          <button className="border border-yellow-400 text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#9C29B2] transition flex items-center justify-center">
            English
            <FaAngleDown className="ml-2" size={16} />
          </button>
          <button className="bg-yellow-400 text-[#363636] px-6 py-2 rounded-md hover:bg-yellow-400 transition flex items-center justify-center">
            Sign In
            <Image
              src="/lock.png" // Replace with your actual image path
              alt="Lock Icon"
              width={20}
              height={20}
              className="ml-2"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
