import React from "react";
import Button from "./Button";
import { FiDownload } from "react-icons/fi";

interface HeroIntroProps {
  scrollToContact: () => void;
}

const HeroIntro: React.FC<HeroIntroProps> = ({ scrollToContact }) => {
  return (
    <div>
      {/* Mobile Summary */}
      <p className="mt-6 text-left text-white text-base font-bold md:hidden leading-relaxed">
        Full Stack Developer skilled in building robust, scalable web
        applications, from crafting intuitive user interfaces to developing
        powerful backend systems. Passionate about clean code and
        problem-solving.
      </p>

      {/* Mobile Hire Me Button */}
      <div className="block md:hidden space-y-3 mt-4">
        <button
          onClick={scrollToContact}
          className="w-full bg-[#93F203] text-black py-3 rounded-full font-bold font-poppins text-center"
        >
          Hire Me
        </button>
        <a
          href="/AhmedAfzal-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border border-[#93F203] text-white py-3 w-full rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-200 font-poppins text-sm"
        >
          <FiDownload size={18} />
          View Profile
        </a>
      </div>

      {/* Desktop Section */}
      <div className="hidden md:flex flex-col items-end gap-6 w-[30%] absolute right-10 top-[60%] flex-nowrap font-bold">
        <span className="text-2xl text-white text-right font-medium uppercase font-poppins leading-relaxed">
          Full stack developer crafting <br /> smart web solutions with seamless
          UI, robust backend & modern AI integrations.
        </span>

        <div className="flex gap-3 z-10 relative">
          {/* Hire Me Button */}
          <Button onClick={scrollToContact} title="HIRE ME" />

          {/* View Profile Button */}
          <a
            href="/AhmedAfzal-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-poppins justify-center gap-2 border border-[#93F203] text-white py-2 px-4 rounded-full hover:bg-[#93F203] hover:opacity-80 hover:text-black transition-colors duration-200 text-sm"
          >
            <FiDownload size={16} />
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroIntro;
