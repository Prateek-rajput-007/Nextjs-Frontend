
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ReadStoriesSection() {
  return (
    <section className="w-full h-[790px] bg-gradient-to-b from-white to-[#E8CDED] flex flex-col items-center py-16">
      {/* Section Heading */}
      <div className="text-center relative">
        <h2 className="text-[#9C29B2] font-righteous text-2xl tracking-wide">
          Pricing
        </h2>
        <h3 className="text-[#2E0336] font-righteous font-semibold text-4xl leading-[44.7px] mt-2 text-center relative">
          {/* Left Image */}
          <Image
            src="/t-image.png"
            alt="Left Decoration"
            width={160}
            height={260}
            className="absolute left-[-379px] top-[-50px]"
          />
          Our Subscription plans <br /> you that we provide!
          {/* Right Image */}
          <Image
            src="/t-image2.png"
            alt="Right Decoration"
            width={160}
            height={260}
            className="absolute right-[-390px] top-[-60px]"
          />
        </h3>
      </div>

      {/* Boxes Section */}
      <div className="mt-12 flex flex-col items-center w-full">
        {/* Two Boxes in a Row */}
        <div className="flex gap-8">
          {/* First Box */}
          <div className="w-[400px] bg-white rounded-lg p-6 flex items-center shadow-lg">
            <div className="w-20 h-28 flex-shrink-0 rounded-[50%] overflow-hidden">
              <Image
                src="/Ellipse.png"
                alt="Story Icon 1"
                width={80}
                height={112}
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <h4 className="text-[#710A85] font-righteous font-bold text-xl">Story Title 1</h4>
              <p className="text-sm text-gray-700 mt-1">
                Brief description about the first story goes here.
              </p>
              <Link href="#" className="text-[#710A85] font-Poppins flex items-center mt-2">
                Know More <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Second Box */}
          <div className="w-[400px] bg-white rounded-lg p-6 flex items-center shadow-lg">
            <div className="w-20 h-28 flex-shrink-0 rounded-[50%] overflow-hidden">
              <Image
                src="/Ellipse.png"
                alt="Story Icon 2"
                width={80}
                height={112}
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <h4 className="text-[#710A85] font-righteous font-bold text-xl">Story Title 2</h4>
              <p className="text-sm text-gray-700 mt-1">
                Brief description about the second story goes here.
              </p>
              <Link href="#" className="text-[#710A85] font-Poppins flex items-center mt-2">
                Know More <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Centered Box */}
        <div className="mt-8 w-[400px] bg-white rounded-lg p-6 flex items-center shadow-lg">
          <div className="w-20 h-28 flex-shrink-0 rounded-[50%] overflow-hidden">
            <Image
              src="/Ellipse.png"
              alt="Story Icon 3"
              width={80}
              height={112}
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <h4 className="text-[#710A85] font-righteous font-bold text-xl">Story Title 3</h4>
            <p className="text-sm text-gray-700 mt-1">
              Brief description about the third story goes here.
            </p>
            <Link href="#" className="text-[#710A85] font-Poppins flex items-center mt-2">
              Know More <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <Link href="#" className="bg-[#710A85] text-white text-base font-semibold rounded-md px-[30px] py-[9px] border-4 border-[#9C29B2] shadow-md hover:bg-[#5A0670] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9C29B2] focus:ring-opacity-50 transition-all duration-300 z-10">
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
}