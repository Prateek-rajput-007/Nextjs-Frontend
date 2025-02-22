"use client";
import Image from "next/image";

export default function GetStarted() {
  return (
    <section className="relative w-full h-[860px] bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/background-image.png" // Update with your actual image path
          alt="Get Started Background"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative w-full h-full flex flex-col items-center px-4 pt-40 pb-8 z-10">
        {/* Heading */}
        <h2
          className="text-[36px] leading-[44.7px] tracking-[0.03em] text-center text-[#710A85] font-bold mb-12"
          style={{
          fontFamily: "Righteous",
        }}
        >
          Get Started
        </h2>

        {/* Three Boxes in a Row */}
        <div className="w-[1006px] h-[259px] flex justify-between items-center gap-[53px] mb-12">
          {/* Box 1 */}
          <div className="flex flex-col items-center w-1/3 h-full bg-[#F3E9F5] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image src="/g1.png" alt="Choose an illustration" width={60} height={60} className="mb-4" />
            <h3 className="text-center text-[Poppins] text-[#710A85] text-[20px] font-semibold mb-2">
              Choose an illustration
            </h3>
            <p className="text-center text-[Poppins] text-[#710A85] text-[16px] font-normal leading-[24px]">
              Start your creative journey by creating an account. Try free (1) story reading and writing!
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center w-1/3 h-full bg-[#550964] rounded-lg p-4 ">
            <Image src="/g2.png" alt="Write your story" width={60} height={60} className="mb-4" />
            <h3 className="text-center text-[Poppins] text-[20px] font-semibold mb-2 text-white">
              Write your story
            </h3>
            <p className="text-center text-[16px] text-[Poppins] font-normal leading-[24px] text-white">
              Dive into a world of creative stories and inspire your writing with our collection.
            </p>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col items-center w-1/3 h-full bg-[#F3E9F5] rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image src="/g3.png" alt="Publish your story" width={60} height={60} className="mb-4" />
            <h3 className="text-center text-[Poppins] text-[#710A85] text-[20px] font-semibold mb-2">
              Publish your Story
            </h3>
            <p className="text-center text-[Poppins] text-[#710A85] text-[16px] font-normal leading-[24px]">
              Begin crafting your own stories with our tools and share them with the community.
            </p>
          </div>
        </div>

        {/* "Try It Now" Button */}
        <button className="w-[151px] h-[45px] bg-[#710A85] text-white text-base font-semibold rounded-md px-[30px] py-[9px] border-4 border-[#9C29B2] shadow-md hover:bg-[#5A0670] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9C29B2] focus:ring-opacity-50 transition-all duration-300 z-10">
          Try It Now
        </button>
      </div>
    </section>
  );
}