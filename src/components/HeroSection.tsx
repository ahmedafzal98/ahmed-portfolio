"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import OptionList from "./OptionList";
import HeroIntro from "./HeroIntro";
import OverlayImage from "./OverlayImage";
import LargeName from "./LargeName";

// Simple fade-in variant (no movement)
const fadeOnly = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay },
  }),
};

interface HeroSectionProps {
  scrollToContact: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToContact }) => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="bg-[url('/assets/images/hero-bg.png')] bg-cover bg-no-repeat md:h-[100vh] relative overflow-hidden p-3"
    >
      <div className="md:min-h-full w-full border border-gray-500 rounded-2xl p-3">
        {/* Fade-in Navbar */}
        <motion.div variants={fadeOnly} custom={0}>
          <Navbar />
        </motion.div>

        <div className="flex justify-center items-center mt-[7%]">
          <div className="w-full text-left md:text-center">
            {/* Name */}
            <motion.div variants={fadeOnly} custom={0.2}>
              <LargeName />
            </motion.div>

            {/* Hero Intro */}
            <motion.div variants={fadeOnly} custom={0.4}>
              <HeroIntro scrollToContact={scrollToContact} />
            </motion.div>

            <div className="flex flex-col mt-10 gap-5">
              {/* Options List */}
              <motion.div variants={fadeOnly} custom={0.6}>
                <OptionList />
              </motion.div>

              {/* Overlay Image */}
              <motion.div variants={fadeOnly} custom={0.8}>
                <OverlayImage />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
