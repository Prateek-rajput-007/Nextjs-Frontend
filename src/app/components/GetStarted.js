"use client";
import Image from "next/image";

export default function GetStarted() {
  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col items-center px-4 py-20 sm:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/background-image.png" // Update with actual image path
          alt="Get Started Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-6xl flex flex-col items-center text-center z-10">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#710A85] mb-12"
          style={{ fontFamily: "Righteous" }}
        >
          Get Started
        </h2>

        {/* Boxes Wrapper */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* Box 1 */}
          <div className="flex flex-col items-center bg-[#F3E9F5]/80 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image src="/g1.png" alt="Choose an illustration" width={60} height={60} className="mb-4" />
            <h3 className="text-xl font-semibold text-[#710A85]">Choose an illustration</h3>
            <p className="text-lg text-[#710A85]">
              Start your creative journey by creating an account. Try free (1) story reading and writing!
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center bg-[#550964] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image src="/g2.png" alt="Write your story" width={60} height={60} className="mb-4" />
            <h3 className="text-xl font-semibold text-white">Write your story</h3>
            <p className="text-lg text-white">
              Dive into a world of creative stories and inspire your writing with our collection.
            </p>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col items-center bg-[#F3E9F5] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image src="/g3.png" alt="Publish your story" width={60} height={60} className="mb-4" />
            <h3 className="text-xl font-semibold text-[#710A85]">Publish your Story</h3>
            <p className="text-lg text-[#710A85]">
              Begin crafting your own stories with our tools and share them with the community.
            </p>
          </div>
        </div>

        {/* "Try It Now" Button */}
        <button className="w-40 h-12 bg-[#710A85] text-white text-lg font-semibold rounded-md px-6 py-2 border-4 border-[#9C29B2] shadow-md hover:bg-[#5A0670] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9C29B2] focus:ring-opacity-50 transition-all duration-300">
          Try it now
        </button>
      </div>
    </section>
  );
}
