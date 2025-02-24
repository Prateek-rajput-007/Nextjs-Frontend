

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
      <div className="absolute top-[-5px] left-0 w-full h-[250px] z-0">
        <Image src="/bg.png" alt="Image 10" fill className="object-cover" />
      </div>

      {/* Heading */}
      <motion.h1
        className="absolute top-[214px] left-[5%] md:left-[10%] lg:left-[59px] w-[90%] md:w-[521px] text-[8vw] md:text-[54px] font-bold leading-tight md:leading-[67.05px] tracking-tight text-center text-[#710A85] p-4 font- z-10 flex flex-col items-start"
        style={{
          WebkitTextStroke: "1px white", 
          color: "#710A85", 
          fontFamily: "Righteous",
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
        className="absolute top-[399px] left-[5%] md:left-[81px] w-[90%] md:w-[542px] text-[#550964] font-poppins text-[4vw] md:text-[17px] leading-[6vw] md:leading-[25.5px] z-10"
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
        className="absolute top-[472px] left-[5%] md:left-[83px] w-[40vw] md:w-[141px] bg-[#710A85] text-white text-sm md:text-base font-semibold rounded-md px-[5vw] md:px-[30px] py-[2vw] md:py-[9px] border-4 border-[#9C29B2] shadow-md hover:bg-[#5A0670] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9C29B2] focus:ring-opacity-50 transition-all duration-300 z-10"
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
          className="absolute top-[149px] left-[60%] md:left-[790px] object-cover"
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
          className="absolute top-[163px] left-[75%] md:left-[1187px] object-cover"
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
          className="absolute top-[380px] left-[72%] md:left-[1154px] object-cover"
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
          className="absolute top-[396px] left-[62%] md:left-[985px] object-cover"
        />
      </motion.div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full h-[125px] z-0">
        <Image
          src="/curve.png"
          alt="Bottom Background"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
