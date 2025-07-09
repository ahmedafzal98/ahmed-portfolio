"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Footer: React.FC = () => {
  return (
    <footer className="lg:h-[525px] py-12 px-4 bg-[#1d1d1d] relative opacity-90 flex items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {/* Left Section */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-5 w-full md:w-1/2"
            variants={fadeUp}
            custom={0.2}
          >
            <h1 className="text-white text-xl font-spaceGrotesk">Follow me</h1>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ahmedafzal-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border-2 gap-3 transition-all ease-in-out hover:bg-[#93F203] cursor-pointer px-4 py-2 rounded-full flex items-center font-spaceGrotesk text-[18px]"
            >
              <FaLinkedin className="text-white w-5 h-5 hover:text-[#0A66C2]" />
              <span className="ml-2 text-white font-medium">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ahmedafzal98?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border-2 gap-3 px-4 transition-all ease-in-out cursor-pointer hover:bg-[#93F203] py-2 rounded-full flex items-center font-spaceGrotesk text-[18px]"
            >
              <FaGithub className="text-white w-5 h-5 hover:text-[#0A66C2]" />
              <span className="ml-2 text-white font-medium">GitHub</span>
            </a>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-5 w-full md:w-1/2"
            variants={fadeUp}
            custom={0.4}
          >
            <h5 className="text-white font-spaceGrotesk text-lg md:text-xl font-medium text-left">
              New Tips delivered to your inbox
            </h5>

            <input
              className="w-full max-w-sm h-18 text-white border-2 focus:outline-none focus:ring-0 border-white rounded-md pl-4 bg-transparent"
              type="email"
              placeholder="Email"
            />

            <button className="cursor-pointer hover:bg-[#6805F1] transition-all ease-in w-full max-w-sm h-12 rounded-full hover:text-white text-black bg-[#93F203] font-semibold">
              SEND
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          className="w-full flex flex-col md:flex-row justify-between items-center"
          variants={fadeUp}
          custom={0.6}
        >
          {/* Signature */}
          <div className="text-white opacity-60 text-sm mt-4 md:mt-0">
            Made with 💻 by Ahmed Afzal
          </div>

          {/* Back to Top Button */}
          <div className="flex items-center gap-2 border border-white text-white px-4 py-2 rounded-full font-spaceGrotesk text-sm hover:bg-[#5404c5] transition">
            <a href="#top" className="flex items-center gap-2">
              <FaArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
