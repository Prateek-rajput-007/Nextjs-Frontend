"use client";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#171717] border border-gray-800 pt-12 pb-8">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-10">
        <div className="flex flex-col items-center mb-8 md:items-start">
          <Image src="/d01.png" alt="Company Logo" width={250} height={180} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-righteous text-white text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-righteous text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="#" className="text-sm md:text-base hover:text-white transition-colors duration-300">
                  Our Team
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-sm md:text-base hover:text-white transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-sm md:text-base hover:text-white transition-colors duration-300">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-righteous text-white text-lg font-semibold mb-4">Navigation</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="#" className="text-sm md:text-base hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-sm md:text-base hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-sm md:text-base hover:text-white transition-colors duration-300">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-righteous text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex justify-center md:justify-start">
              <Link href="#" className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition-colors duration-300">
                Know More
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
      </div>
    </footer>
  );
}