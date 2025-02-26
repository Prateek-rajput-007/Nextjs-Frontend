

// import Image from "next/image";
// import Link from "next/link";

// export default function GetInTouch() {
//   return (
//     <section className="w-full flex justify-center items-center py-16 relative bg-white">
//       {/* Rectangle Section with inward curved top edge using clip-path */}
//       <div
//         className="relative w-[1312px] h-[535px] bg-[#FFE7C0] flex flex-col items-center justify-center"
//         style={{
//           clipPath: "path('M0 0 Q656 100 1312 0 L1312 535 L0 535 Z')",
//         }}
//       >
//         {/* Top Left Image */}
//         <div className="absolute top-[1rem] left-[2rem] w-1/5 h-1/2">
//           <Image
//             src="/star.png"
//             alt="Top Left Decoration"
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Bottom Right Image */}
//         <div className="absolute bottom-[2rem] right-[8rem] w-[6%] h-1/4">
//           <Image
//             src="/star.png"
//             alt="Bottom Right Decoration"
//             fill
//             className="object-cover"
//           />
//         </div>
//         {/* GET IN TOUCH Text */}
//         <h4 className="text-[#F39C12] text-lg font-bold tracking-wide mt-12" style={{
//           fontFamily: "Righteous",
//         }}>
//           GET IN TOUCH
//         </h4>

//         {/* Needs Help? Let’s Get in Touch */}
//         <h2 className="text-[#550964]  font-righteous font-semibold text-4xl leading-[52.15px] tracking-wide text-center mt-2">
//           Needs Help? Let&rsquo;s Get in Touch
//         </h2>

//         {/* Description Text */}
//         <p className="text-[#550964] font-poppins text-base leading-6 tracking-wide text-center w-[587px] mt-6">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>

//         {/* Button */}
//         <div className="mt-8">
//           <Link
//             href="#"
//             className="bg-[#710A85] text-white text-base font-semibold rounded-md px-[30px] py-[9px] border-4 border-[#9C29B2] shadow-md hover:bg-[#5A0670] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9C29B2] focus:ring-opacity-50 transition-all duration-300 z-10"
//           >
//             Know more
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Image from "next/image";
// import Link from "next/link";

// export default function GetInTouch() {
//   return (
//     <section className="w-full flex justify-center items-center py-20 sm:py-24 relative bg-white px-4 sm:px-8">
//       {/* Rectangle Section with increased height */}
//       <div
//         className="relative w-full max-w-6xl min-h-[400px] sm:min-h-[400px] lg:min-h-[800px] bg-[#FFE7C0] flex flex-col items-center justify-center px-6 sm:px-12 py-16 sm:py-20"
//         style={{
//           clipPath: "path('M0 0 Q656 100 1312 0 L1312 800 L0 800 Z')",
//         }}
//       >
//         {/* Top Left Image */}
//         <div className="absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16">
//           <Image src="/star.png" alt="Top Left Decoration" fill className="object-contain" />
//         </div>

//         {/* Bottom Right Image */}
//         <div className="absolute bottom-6 right-8 w-10 h-10 sm:w-16 sm:h-16">
//           <Image src="/star.png" alt="Bottom Right Decoration" fill className="object-contain" />
//         </div>

//         {/* GET IN TOUCH Text */}
//         <h4
//           className="text-[#F39C12] text-sm sm:text-lg font-bold tracking-wide mt-8"
//           style={{ fontFamily: "Righteous" }}
//         >
//           GET IN TOUCH
//         </h4>

//         {/* Needs Help? Let’s Get in Touch */}
//         <h2 className="text-[#550964] font-righteous font-semibold text-2xl sm:text-3xl md:text-4xl leading-tight sm:leading-[52.15px] tracking-wide text-center mt-2">
//           Need Help? Let&rsquo;s Get in Touch
//         </h2>

//         {/* Description Text */}
//         <p className="text-[#550964] font-poppins text-sm sm:text-base leading-6 tracking-wide text-center max-w-lg mt-4 px-4 sm:px-0">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>

//         {/* Button */}
//         <div className="mt-8">
//           <Link
//             href="#"
//             className="bg-[#710A85] text-white text-sm sm:text-base font-semibold rounded-md px-6 sm:px-8 py-2 border-4 border-[#9C29B2] shadow-md hover:bg-[#5A0670] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9C29B2] focus:ring-opacity-50 transition-all duration-300"
//           >
//             Know more
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <section className="w-full flex justify-center items-center py-12 sm:py-16 relative bg-white px-4 sm:px-8">
      {/* Rectangle Section with reduced height */}
      <div
        className="relative w-full max-w-6xl min-h-[380px] bg-[#FFE7C0] flex flex-col items-center justify-center px-6 sm:px-12 py-10 sm:py-12"
        style={{
          clipPath: "path('M0 0 Q656 100 1312 0 L1312 380 L0 380 Z')",
        }}
      >
        {/* Top Left Image */}
        <div className="absolute top-4 left-4 w-10 h-10 sm:w-14 sm:h-14">
          <Image src="/star.png" alt="Top Left Decoration" fill className="object-contain" />
        </div>

        {/* Bottom Right Image */}
        <div className="absolute bottom-4 right-6 w-8 h-8 sm:w-12 sm:h-12">
          <Image src="/star.png" alt="Bottom Right Decoration" fill className="object-contain" />
        </div>

        {/* GET IN TOUCH Text */}
        <h4
          className="text-[#F39C12] text-sm sm:text-lg font-bold tracking-wide mt-4"
          style={{ fontFamily: "Righteous" }}
        >
          GET IN TOUCH
        </h4>

        {/* Needs Help? Let’s Get in Touch */}
        <h2 className="text-[#550964] font-righteous font-semibold text-xl sm:text-2xl md:text-3xl leading-tight tracking-wide text-center mt-2">
          Need Help? Let&rsquo;s Get in Touch
        </h2>

        {/* Description Text */}
        <p className="text-[#550964] font-poppins text-xs sm:text-sm leading-5 tracking-wide text-center max-w-md mt-2 px-4 sm:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Button */}
        <div className="mt-4">
          <Link
            href="#"
            className="bg-[#710A85] text-white text-xs sm:text-sm font-semibold rounded-md px-5 sm:px-6 py-2 border-4 border-[#9C29B2] shadow-md hover:bg-[#5A0670] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9C29B2] focus:ring-opacity-50 transition-all duration-300"
          >
            Know more
          </Link>
        </div>
      </div>
    </section>
  );
}