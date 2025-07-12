"use client";

import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options: string[] = [
    "HOME",
    "SERVICES",
    "PORTFOLIO",
    "SKILLS",
    "ABOUT",
    "RESUME",
    "CONTACT",
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-transparent sticky top-0 z-50 shadow-lg">
      <div className="flex items-center justify-between md:justify-around p-4">
        {/* Logo */}
        <div>
          <span className="text-white font-extrabold font-vt323 text-3xl">
            AA.
          </span>
        </div>

        {/* Hamburger (Mobile) */}
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
        <div className="hidden md:flex gap-6 font-bold text-[18px] text-white">
          {options.map((item, index) => (
            <span
              key={index}
              onClick={() => scrollToSection(item)}
              className="cursor-pointer hover:text-[#93F203] transition-colors"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Desktop Email */}
        <a
          href="mailto:ahmed.afzal2070@gmail.com"
          className="hidden md:flex cursor-pointer p-3 h-11 items-center justify-center bg-[#6805F1] rounded-full"
        >
          <span className="font-poppins font-bold text-white">
            ahmed.afzal2070@gmail.com
          </span>
        </a>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-80 z-40 transition-all duration-300" />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 pt-6">
          <span className="text-[#6805F1] font-extrabold font-vt323 text-3xl">
            AA.
          </span>
          <button onClick={() => setIsOpen(false)} className="text-black">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        {/* Drawer Body */}
        <div className="flex flex-col h-full px-6 pt-10 pb-6 overflow-y-auto justify-between">
          {/* Top Navigation Links */}
          <div className="space-y-6">
            {options.map((item, index) => (
              <div key={index} className="w-full">
                <span
                  onClick={() => scrollToSection(item)}
                  className="text-2xl font-bold text-black font-poppins cursor-pointer hover:text-[#93F203]"
                >
                  {item}
                </span>
                <div className="w-full h-px opacity-50 bg-gray-300 mt-2" />
              </div>
            ))}
          </div>

          {/* Email Fixed at Bottom */}
          <div className="mt-10 text-center">
            <span className="text-black text-[18px]">
              Interested in a <br /> Collaboration or Need More Info?
            </span>
            <a
              href="mailto:ahmed.afzal2070@gmail.com"
              className="mt-4 bg-[#6805F1] px-6 py-3 text-white rounded-full inline-block text-sm sm:text-base"
            >
              ahmed.afzal2070@gmail.com
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
