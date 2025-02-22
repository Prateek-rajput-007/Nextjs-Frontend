

import Image from "next/image";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <section className="w-full flex justify-center items-center py-16 relative bg-white">
      {/* Rectangle Section with inward curved top edge using clip-path */}
      <div
        className="relative w-[1312px] h-[535px] bg-[#FFE7C0] flex flex-col items-center justify-center"
        style={{
          clipPath: "path('M0 0 Q656 100 1312 0 L1312 535 L0 535 Z')",
        }}
      >
        {/* Top Left Image */}
        <div className="absolute top-[1rem] left-[2rem] w-1/5 h-1/2">
          <Image
            src="/star.png"
            alt="Top Left Decoration"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Right Image */}
        <div className="absolute bottom-[2rem] right-[8rem] w-[15%] h-1/4">
          <Image
            src="/star.png"
            alt="Bottom Right Decoration"
            fill
            className="object-cover"
          />
        </div>
        {/* GET IN TOUCH Text */}
        <h4 className="text-[#F39C12] text-lg font-bold tracking-wide mt-12">
          GET IN TOUCH
        </h4>

        {/* Needs Help? Let’s Get in Touch */}
        <h2 className="text-[#550964]  font-righteous font-semibold text-4xl leading-[52.15px] tracking-wide text-center mt-2">
          Needs Help? Let&rsquo;s Get in Touch
        </h2>

        {/* Description Text */}
        <p className="text-[#550964] font-poppins text-base leading-6 tracking-wide text-center w-[587px] mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="#"
            className="bg-[#710A85] text-white text-base font-semibold rounded-md px-[30px] py-[9px] border-4 border-[#9C29B2] shadow-md hover:bg-[#5A0670] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9C29B2] focus:ring-opacity-50 transition-all duration-300 z-10"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
}
