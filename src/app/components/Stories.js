// 

"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ReadStories() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#FFF0E5] py-12 px-4 sm:px-8 flex flex-col items-center">
      {/* Small Image at Top */}
      <motion.div
        className="w-[50px] sm:w-[66px] h-auto mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInDown}
      >
        <Image src="/image 10.png" alt="Decorative" width={66} height={43} />
      </motion.div>

      {/* Section Heading */}
      <div className="text-center">
        <motion.h2
          className="text-[#9C29B2] font-righteous text-xl sm:text-2xl tracking-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInDown}
        >
          Read Stories
        </motion.h2>
        <motion.h3
          className="text-[#2E0336] font-righteous font-semibold text-2xl sm:text-4xl leading-tight sm:leading-[44.7px] mt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInDown}
        >
          Take a look & Start Learning <br className="hidden sm:block" /> From Today
        </motion.h3>
      </div>

      {/* Grid Section - 8 Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-full max-w-[300px] bg-[#710A85] border-4 border-yellow-400 rounded-lg p-6 flex flex-col text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className="w-full h-[180px] mb-4">
              <Image
                src={`/image 14.png`}
                alt="Story Image"
                width={265}
                height={180}
                className="rounded-lg"
              />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2 text-left">
              Story Title {index + 1}
            </h4>
            <p className="text-sm mb-4 text-left">
              Interactively brand client center through customized value good ideas.
            </p>
            <Link
              href="#"
              className="bg-yellow-400 text-red-600 px-4 py-2 rounded-lg font-semibold hover:opacity-80 w-full text-center"
            >
              Read More
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Explore More Button */}
      <motion.div
        className="mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={scaleUp}
      >
        <Link
          href="#"
          className="bg-[#710A85] text-white text-base font-semibold rounded-md px-6 py-3 border-4 border-[#9C29B2] shadow-md hover:bg-[#5A0670] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#9C29B2] focus:ring-opacity-50 transition-all duration-300"
        >
          Explore more
        </Link>
      </motion.div>
    </section>
  );
}