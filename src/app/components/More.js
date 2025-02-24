
"use client";
import Image from "next/image";
import Link from "next/link";

export default function More() {
  return (
    <section className="relative w-full min-h-screen bg-[#710A85] flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 py-12 overflow-hidden">
      {/* Top Full-Width Image */}
      <div className="absolute top-0 left-0 w-full h-[150px] z-0">
        <Image src="/bg-2.png" alt="Top Background" fill className="object-cover" />
      </div>

      {/* Left Section - Text Content */}
      <div className="w-full md:w-1/2 max-w-[587px] text-white space-y-6 z-10 relative">
        {/* New Images - Above Heading */}
        <div className="absolute left-[-12rem] top-[-5rem] w-1/4 h-1/4 overflow-hidden z-40">
          <Image src="/more-1.png" alt="Image 4" fill className="object-cover" />
        </div>
        <div className="absolute left-[35rem] top-[-5rem] w-1/5 h-1/5 overflow-hidden z-40">
          <Image src="/more-2.png" alt="Image 4" fill className="object-cover" />
        </div>
        <div className="absolute right-[-45rem] bottom-[2rem] w-1/4 h-1/4 overflow-hidden z-40">
          <Image src="/more-1.png" alt="Image 5" fill className="object-cover" />
        </div>

        <h2 className="text-3xl font-righteous sm:text-4xl font-bold">
          More About Us
        </h2>
        <h2 className="text-3xl sm:text-5xl font-righteous md:text-6xl font-bold leading-tight">
          What we <br /> do!
        </h2>
        <p className="text-base sm:text-lg">
          We provide cutting-edge solutions that transform businesses. Our
          services are tailored to deliver innovative digital experiences that
          make an impact.
        </p>
        <Link
          href="#"
          className="inline-block bg-white text-[#710A85] font-semibold py-2 px-6 hover:opacity-90 transition-colors duration-200"
        >
          Learn More
        </Link>
      </div>

      {/* Right Section - Image Stack */}
      <div className="w-full md:w-1/2 max-w-[585px] h-[374px] relative mt-12 md:mt-0">
        {/* Third image (bottom layer) */}
        <div className="absolute top-[-5rem] right-[-5rem] w-1/2 h-1/2 rounded-md overflow-hidden shadow-lg z-10">
          <Image src="/image11.png" alt="Image 3" fill className="object-cover rounded-md" />
        </div>

        {/* Second image (middle layer) */}
        <div className="absolute top-[1rem] right-[4rem] w-1/2 h-1/2 rounded-md overflow-hidden shadow-lg opacity-90 z-20">
          <Image src="/image13.png" alt="Image 2" fill className="object-cover rounded-md" />
        </div>

        {/* First image (top layer) */}
        <div className="absolute bottom-[5rem] left-[5rem] w-1/2 h-1/2 rounded-md overflow-hidden shadow-lg z-30">
          <Image src="/image12.png" alt="Image 1" fill className="object-cover rounded-md" />
        </div>
      </div>

      {/* Bottom Image */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] z-0">
        <Image src="/bg-1.png" alt="Bottom Decoration" fill className="object-cover" />
      </div>
    </section>
  );
}