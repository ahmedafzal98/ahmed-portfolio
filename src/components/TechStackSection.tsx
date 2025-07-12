"use client";

import React from "react";
import jsIcon from "../../public/assets/images/js-icon.png";
import reactIcon from "../../public/assets/images/react.png";
import Image from "next/image";
import TechBadge from "./TechBadge";
import { motion, Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.05,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TechStackSection: React.FC = () => {
  const stacks = [
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "React & Redux",
    "Next Js",
    "Sql & NoSql",
    "Node.js & Express",
    "Git & Version Control",
    "Agile Methodologies",
    "Open AI",
    "TypeScript",
    "Tailwind CSS",
    "RESTful APIs",
    "JWT Authentication",
  ];

  return (
    <motion.div
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
      className="bg-[url('/assets/images/hero-bg.png')] mt-[5%] bg-cover bg-no-repeat md:min-h-[600px] relative overflow-hidden p-6"
    >
      <div className="w-full border border-gray-500 rounded-2xl p-3 relative">
        {/* JS Icon - Top Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="absolute top-6 left-6 z-0 pointer-events-none"
        >
          <Image
            className="w-10 h-10 md:w-40 md:h-40"
            src={jsIcon}
            alt="JS Icon"
          />
        </motion.div>

        {/* React Icon - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute bottom-10 right-10 z-0 pointer-events-none"
        >
          <Image
            className="w-10 h-10 md:w-40 md:h-40"
            src={reactIcon}
            alt="React Icon"
          />
        </motion.div>

        <div className="flex justify-center items-center mt-12">
          <div className="w-full flex flex-col items-start md:items-center text-left md:text-center">
            {/* Small Tagline */}
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-[#93F203] text-xs sm:text-sm md:text-base font-workSans font-normal mb-3"
            >
              {`{ Tech Stack }`}
            </motion.h1>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-full sm:w-[90%] md:w-[80%] lg:w-[65%]"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold font-spaceGrotesk leading-tight">
                <span className="font-vt323">React & Node.js</span> powerhouse -{" "}
                <br className="hidden sm:block" />
                Full-stack web development arsenal delivering seamless digital
                experiences
              </h1>
            </motion.div>

            {/* Tech Stacks */}
            <motion.div
              className="mb-[5%] w-full sm:w-[90%] md:w-[80%] lg:w-[65%] flex flex-wrap gap-4 sm:gap-5 mt-8 justify-start md:justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {stacks.map((stack, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <TechBadge stack={stack} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechStackSection;
