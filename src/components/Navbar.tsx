// components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options: string[] = ["HOME", "SERVICES", "BLOG", "PAGES", "PORTFOLIO"];

  // Disable scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <nav className="bg-transparent relative z-50">
      <div className="flex items-center justify-between  md:justify-around md:mt-5">
        {/* Logo */}
        <div>
          <span className="text-white font-extrabold font-anton text-3xl">
            AA.
          </span>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[40%] justify-between font-bold text-[18px] text-white">
          {options.map((item, index) => (
            <span key={index} className="cursor-pointer">
              {item}
            </span>
          ))}
        </div>

        <div className="hidden md:flex cursor-pointer w-auto p-3 h-11 items-center justify-center bg-[#6805F1] rounded-full">
          <span className="font-poppins font-bold text-white">
            ahmed.afzal2070@gmail.com
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-80 z-40 transition-all duration-300" />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 pt-6">
          <div>
            <span className="text-[#6805F1] font-extrabold font-anton text-3xl">
              AA.
            </span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-black">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center gap-6 mt-10 text-black text-2xl font-bold font-poppins w-full px-4">
          {options.map((item, index) => (
            <div key={index} className="w-full text-left">
              <div className="hover:text-[#93F203]">{item}</div>
              <div className="w-full h-px opacity-50 bg-gray-300 mt-2" />
            </div>
          ))}
          <div className="mt-10">
            <span className="text-black text-[20px]">
              Interested in a <br /> Collaboration or Need More Info?
            </span>
            <div className="mt-8 bg-[#6805F1] mx-6 px-6 py-3 text-white rounded-full text-center text-sm sm:text-base">
              ahmed.afzal2070@gmail.com
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
