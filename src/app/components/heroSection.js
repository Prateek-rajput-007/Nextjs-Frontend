"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full h-[882px] bg-[#FFC909] overflow-hidden">
      {/* Top Full-Width Image */}
      <div className="absolute top-[-5px] left-0 w-full h-[150px] sm:h-[1500px] md:h-[250px] z-0">
        <Image src="/bg.png" alt="Image 10" fill className="object-cover" />
      </div>

      {/* Flex Container for Small Screens */}
      <div className="md:hidden flex flex-col items-center justify-center h-full">
        {/* Small Image Above Heading */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        ></motion.div>

        {/* Heading */}
        <motion.h1
          className="text-[9vw] sm:text-[7vw] font-bold leading-tight text-center text-[#710A85] p-2 sm:p-3 font-righteous z-10 flex flex-col items-start"
          style={{
            color: "#710A85",
          }}
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
        >
          <span>Get better at</span>
          <span>writing!</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-[3vw] sm:text-[4vw] text-[#550964] font-poppins leading-[4vw] sm:leading-[5vw] text-center mt-4 z-10"
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          Helping young writers make cool stories with awesome pictures.
          Storybird's art-inspired writing makes learning fun!
          <br />
          <br />
        </motion.p>

        {/* Join Now Button */}
        <motion.button
          className="bg-[#710A85] text-white text-xs sm:text-sm font-semibold rounded-md px-5 sm:px-6 py-2 border-4 border-[#9C29B2] shadow-md hover:bg-[#5A0670] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9C29B2] focus:ring-opacity-50 transition-all duration-300"
          aria-label="Join Now"
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          Join Now
        </motion.button>

        {/* Images in 2x2 Grid */}
        <motion.div
          className="grid grid-cols-2 gap-4 mt-8 w-full px-4"
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
        >
          <div className="col-span-1">
            <Image
              src="/image1.png"
              alt="Image 1"
              width={200}
              height={134}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/image2.png"
              alt="Image 2"
              width={165}
              height={111}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/image3.png"
              alt="Image 3"
              width={218}
              height={147}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="col-span-1">
            <Image
              src="/image4.png"
              alt="Image 4"
              width={93}
              height={105}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Default Layout for Larger Screens */}
      <div className="hidden md:block">
        {/* Small Image Above Heading */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          <Image
            src="/image5.png" // Replace with your small image path
            alt="Small Image"
            width={50}
            height={50}
            className="absolute top-[190px] left-[59px] w-[50px] h-[50px]"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="absolute top-[214px] left-[10%] lg:left-[59px] w-[90%] md:w-[521px] text-[6vw] sm:text-[7vw] md:text-[54px] font-bold leading-tight md:leading-[67.05px] tracking-tight text-center text-[#710A85] p-2 sm:p-3 md:p-4 font-righteous z-10 flex flex-col items-start"
          style={{
            WebkitTextStroke: "1px white",
            color: "#710A85",
          }}
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
        >
          <span>Get better at</span>
          <span>writing!</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="absolute top-[399px] left-[81px] w-[542px] text-[#550964] font-poppins text-[17px] leading-[25.5px] z-10"
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          Helping young writers make cool stories with awesome pictures.
          Storybird's art-inspired writing makes learning fun!
        </motion.p>

        {/* Join Now Button */}
        <motion.button
          className="absolute top-[472px] left-[83px] w-[141px] bg-[#710A85] text-white text-xs sm:text-sm font-semibold rounded-md px-5 sm:px-6 py-2 border-4 border-[#9C29B2] shadow-md hover:bg-[#5A0670] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9C29B2] focus:ring-opacity-50 transition-all duration-300"
          aria-label="Join Now"
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          Join Now
        </motion.button>

        {/* Images */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
        >
          <Image
            src="/image1.png"
            alt="Image 1"
            width={347}
            height={233}
            className="absolute top-[149px] left-[790px] object-cover w-[347px] h-[233px]"
          />
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          <Image
            src="/image2.png"
            alt="Image 2"
            width={275}
            height={185}
            className="absolute top-[163px] left-[1187px] object-cover w-[275px] h-[185px]"
          />
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <Image
            src="/image3.png"
            alt="Image 3"
            width={364}
            height={245}
            className="absolute top-[380px] left-[1154px] object-cover w-[364px] h-[245px]"
          />
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          <Image
            src="/image4.png"
            alt="Image 4"
            width={155}
            height={175}
            className="absolute top-[396px] left-[985px] object-cover w-[155px] h-[175px]"
          />
        </motion.div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-[-1px] left-0 w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] z-10">
        <Image
          src="/curve.png"
          alt="Bottom Background"
          fill
          className="object-contain object-bottom"
        />
      </div>
    </section>
  );
}
