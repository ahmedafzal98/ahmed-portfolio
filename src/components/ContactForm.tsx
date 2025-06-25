"use client";

import React from "react";
import bg_ahmed from "../../public/assets/images/bg-ahmed-image.png";
import morflax from "../../public/assets/images/morflax.png";
import Image from "next/image";

const ContactForm: React.FC = () => {
  return (
    <div className="relative bg-[#6805F1] h-[700px] p-4 mt-[8%] overflow-hidden">
      {/* Background Image */}
      <Image
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full object-cover opacity-40"
        src={bg_ahmed}
        alt="Background Image Ahmed"
      />

      {/* Floating Image */}
      <Image
        className="absolute bottom-10 left-[45%] transform -translate-x-1/2 object-contain opacity-80 w-[250px] md:w-[440px]"
        src={morflax}
        width={440}
        height={370}
        alt="Morflax Image"
      />

      {/* White bordered box */}
      <div className="relative z-10 h-full w-full border border-white rounded-2xl flex items-center justify-center">
        <div className="w-[90%] flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Section */}
          <div className="space-y-5 text-center md:text-left">
            <span className="flex flex-col font-spaceGrotesk text-3xl sm:text-4xl md:text-6xl font-semibold leading-[1.1] text-white">
              Looking to Work <span className="font-vt323">Together?</span>
            </span>

            <span className="font-workSans text-sm sm:text-base md:text-[18px] font-normal text-[#F0EFEF]">
              Great to see you here! I’m always eager{" "}
              <br className="hidden sm:block" />
              to discuss new projects or just geek out{" "}
              <br className="hidden sm:block" />
              about digital marketing
            </span>

            <div className="flex mt-6 items-center justify-center md:justify-start gap-3">
              <div className="w-3 h-3 bg-[#93F203] rounded-full"></div>
              <span className="uppercase font-spaceGrotesk text-[14px] sm:text-[16px] md:text-[20px] font-medium text-white">
                Available for work
              </span>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full md:w-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex flex-col w-full md:w-[330px]">
                <span className="opacity-80 text-white">Name</span>
                <input
                  className="text-black border-none focus:outline-none focus:ring-0 pl-5 mt-1 h-[55px] sm:h-[65px] md:h-[70px] rounded-md bg-white w-full"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-col w-full md:w-[330px]">
                <span className="opacity-80 text-white">Email</span>
                <input
                  className="text-black border-none focus:outline-none focus:ring-0 pl-5 mt-1 h-[55px] sm:h-[65px] md:h-[70px] rounded-md bg-white w-full"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="opacity-80 text-white">Message</span>
              <textarea
                rows={4}
                className="text-black pl-5 pt-2 mt-1 border-none focus:outline-none focus:ring-0 h-[120px] sm:h-[140px] rounded-md bg-white"
                placeholder="Message"
              />
            </div>

            <div className="mt-6 bg-[#93F203] text-black hover:text-white transition-all ease-in-out cursor-pointer h-12 sm:h-14 flex items-center justify-center rounded-full text-sm sm:text-base">
              SEND
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
