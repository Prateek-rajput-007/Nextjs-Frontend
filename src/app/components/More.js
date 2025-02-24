
// "use client";
// import Image from "next/image";
// import Link from "next/link";

// export default function More() {
//   return (
//     <section className="relative w-full min-h-screen bg-[#710A85] flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 py-12 overflow-hidden">
//       {/* Top Full-Width Image */}
//       <div className="absolute top-0 left-0 w-full h-[150px] z-0">
//         <Image src="/bg-2.png" alt="Top Background" fill className="object-cover" />
//       </div>

//       {/* Left Section - Text Content */}
//       <div className="w-full md:w-1/2 max-w-[587px] text-white space-y-6 z-10 relative">
//         {/* New Images - Above Heading */}
//         <div className="absolute left-[-12rem] top-[-5rem] w-1/6 h-1/6 overflow-hidden z-40">
//           <Image src="/more-1.png" alt="Image 4" fill className="object-cover" />
//         </div>
//         <div className="absolute left-[35rem] top-[-5rem] w-1/5 h-1/5 overflow-hidden z-40">
//           <Image src="/more-2.png" alt="Image 4" fill className="object-cover" />
//         </div>
//         <div className="absolute right-[-45rem] bottom-[2rem] w-1/4 h-1/4 overflow-hidden z-40">
//           <Image src="/more-1.png" alt="Image 5" fill className="object-cover" />
//         </div>

//         <h2 className="text-3xl font-righteous sm:text-4xl font-bold">
//           More About Us
//         </h2>
//         <h2 className="text-3xl sm:text-5xl font-righteous md:text-6xl font-bold leading-tight">
//           What we <br /> do!
//         </h2>
//         <p className="text-base sm:text-lg">
//           We provide cutting-edge solutions that transform businesses. Our
//           services are tailored to deliver innovative digital experiences that
//           make an impact.
//         </p>
//         <Link
//           href="#"
//           className="inline-block bg-white text-[#710A85] font-semibold py-2 px-6 hover:opacity-90 transition-colors duration-200"
//         >
//           Learn More
//         </Link>
//       </div>

//       {/* Right Section - Image Stack */}
//       <div className="w-full md:w-1/2 max-w-[585px] h-[374px] relative mt-12 md:mt-0">
//         {/* Third image (bottom layer) */}
//         <div className="absolute top-[-5rem] right-[-5rem] w-1/2 h-1/2 rounded-md overflow-hidden shadow-lg z-10">
//           <Image src="/image11.png" alt="Image 3" fill className="object-cover rounded-md" />
//         </div>

//         {/* Second image (middle layer) */}
//         <div className="absolute top-[1rem] right-[4rem] w-1/2 h-1/2 rounded-md overflow-hidden shadow-lg opacity-90 z-20">
//           <Image src="/image13.png" alt="Image 2" fill className="object-cover rounded-md" />
//         </div>

//         {/* First image (top layer) */}
//         <div className="absolute bottom-[5rem] left-[5rem] w-1/2 h-1/2 rounded-md overflow-hidden shadow-lg z-30">
//           <Image src="/image12.png" alt="Image 1" fill className="object-cover rounded-md" />
//         </div>
//       </div>

//       {/* Bottom Image */}
//       <div className="absolute bottom-0 left-0 w-full h-[150px] z-0">
//         <Image src="/bg-1.png" alt="Bottom Decoration" fill className="object-cover" />
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function More() {
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

  return (
    <section className="relative w-full h-[1200px] md:min-h-screen bg-[#710A85] flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 py-12 overflow-hidden">
      {/* Top Full-Width Image */}
      <motion.div
        className="absolute top-[-5px] md:top-0 left-0 w-full h-[150px] z-0"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <Image src="/bg-2.png" alt="Top Background" fill className="object-cover" />
      </motion.div>

      {/* Flex Container */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-8 md:space-y-0 z-10 relative">
        {/* Left Section - Text Content */}
        <div className="w-full md:w-1/2 max-w-[587px] text-white space-y-6 mt-40 md:mt-0">
          {/* New Images - Above Heading */}
          <motion.div
            className="absolute left-[-8rem] md:left-[-10rem] top-[-2rem] md:top-[-3rem] w-[60px] md:w-[80px] h-[60px] md:h-[80px] overflow-hidden z-40"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <Image src="/more-1.png" alt="Image 4" fill className="object-cover" />
          </motion.div>
          <motion.div
            className="absolute left-[25rem] md:left-[30rem] top-[-2rem] md:top-[-3rem] w-[80px] md:w-[100px] h-[80px] md:h-[100px] overflow-hidden z-40"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <Image src="/more-2.png" alt="Image 4" fill className="object-cover" />
          </motion.div>
          <motion.div
            className="absolute right-[-35rem] md:right-[-40rem] bottom-[-1rem] md:bottom-[2rem] w-[120px] md:w-1/4 h-[120px] md:h-1/4 overflow-hidden z-40"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
          >
            <Image src="/more-1.png" alt="Image 5" fill className="object-cover" />
          </motion.div>

          <motion.h2
            className="text-3xl font-righteous sm:text-4xl font-bold"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
          >
            More About Us
          </motion.h2>
          <motion.h2
            className="text-3xl sm:text-5xl md:text-6xl font-righteous font-bold leading-tight"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            What we <br /> do!
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            We provide cutting-edge solutions that transform businesses. Our
            services are tailored to deliver innovative digital experiences that
            make an impact.
          </motion.p>
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9 }}
          >
            <Link
              href="#"
              className="inline-block bg-white text-[#710A85] font-semibold py-2 px-6 hover:opacity-90 transition-colors duration-200"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Right Section - Image Stack */}
        <div className="w-full md:w-1/2 max-w-[585px] h-[374px] relative mt-12 md:mt-0">
          {/* Third image (bottom layer) */}
          <motion.div
            className="absolute top-[2rem] md:top-[-5rem] right-[-1rem] md:right-[-5rem] w-[150px] md:w-1/2 h-[150px] md:h-1/2 rounded-md overflow-hidden shadow-lg z-10"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            <Image src="/image11.png" alt="Image 3" fill className="object-cover rounded-md" />
          </motion.div>

          {/* Second image (middle layer) */}
          <motion.div
            className="absolute top-[8rem] md:top-[1rem] right-[3rem] md:right-[4rem] w-[150px] md:w-1/2 h-[150px] md:h-1/2 rounded-md overflow-hidden shadow-lg opacity-90 z-20"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <Image src="/image13.png" alt="Image 2" fill className="object-cover rounded-md" />
          </motion.div>

          {/* First image (top layer) */}
          <motion.div
            className="absolute bottom-[1rem] md:bottom-[5rem] left-[3rem] md:left-[5rem] w-[150px] md:w-1/2 h-[150px] md:h-1/2 rounded-md overflow-hidden shadow-lg z-30"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            <Image src="/image12.png" alt="Image 1" fill className="object-cover rounded-md" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Image */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[150px] z-0"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 2.1 }}
      >
        <Image src="/bg-1.png" alt="Bottom Decoration" fill className="object-cover" />
      </motion.div>
    </section>
  );
}