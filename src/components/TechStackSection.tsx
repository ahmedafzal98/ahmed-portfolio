"use client";

import React from "react";
import jsIcon from "../../public/assets/images/js-icon.png";
import reactIcon from "../../public/assets/images/react.png";
import Image from "next/image";
import TechBadge from "./TechBadge";

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
    <div className="bg-[url('/assets/images/hero-bg.png')] mt-[5%] bg-cover bg-no-repeat md:min-h-[600px] relative overflow-hidden p-6">
      <div className="w-full border border-gray-500 rounded-2xl p-3 relative">
        {/* JS Icon - Top Left */}
        <div className="absolute top-6 left-6 z-0 opacity-80 pointer-events-none">
          <Image
            className="w-10 h-10 md:w-40 md:h-40"
            src={jsIcon}
            alt="JS Icon"
          />
        </div>

        {/* React Icon - Bottom Right */}
        <div className="absolute bottom-10 right-10 z-0 opacity-80 pointer-events-none">
          <Image
            className="w-10 h-10 md:w-40 md:h-40"
            src={reactIcon}
            alt="React Icon"
          />
        </div>

        <div className="flex justify-center items-center mt-12">
          <div className="w-full flex flex-col items-start md:items-center text-left md:text-center">
            {/* Small Tagline */}
            <h1 className="text-[#93F203] text-xs sm:text-sm md:text-base font-workSans font-normal mb-3">
              {`{ What I do }`}
            </h1>

            {/* Heading */}
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[65%]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold font-spaceGrotesk leading-tight">
                <span className="font-vt323">React & Node.js</span> powerhouse -{" "}
                <br className="hidden sm:block" />
                Full-stack web development arsenal delivering seamless digital
                experiences
              </h1>
            </div>

            {/* Tech Stacks */}
            <div className="mb-[5%] w-full sm:w-[90%] md:w-[80%] lg:w-[65%] flex flex-wrap gap-4 sm:gap-5 mt-8 justify-start md:justify-center">
              {stacks.map((stack, index) => (
                <TechBadge key={index} stack={stack} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
