import React, { useRef } from "react";
import Button from "./Button";

interface HeroIntroProps {
  scrollToContact: () => void;
}
const HeroIntro: React.FC<HeroIntroProps> = ({ scrollToContact }) => {
  return (
    <div>
      <p className="mt-6 text-left text-white text-base font-bold md:hidden leading-relaxed">
        Full Stack Developer skilled in building robust, scalable web
        applications, from crafting intuitive user interfaces to developing
        powerful backend systems. Passionate about clean code and
        problem-solving.
      </p>

      <div onClick={scrollToContact} className="block md:hidden mt-4">
        <button className="w-full bg-[#93F203] text-black py-3 rounded-full font-bold font-poppins text-center">
          Hire Me
        </button>
      </div>

      <div className="hidden md:flex flex-col items-end gap-6 w-[30%] absolute right-10 top-[60%] flex-nowrap font-bold">
        <span className="text-2xl text-white text-right font-medium uppercase font-poppins leading-relaxed">
          Full stack developer crafting <br /> smart web solutions with seamless
          UI, robust backend & modern AI integrations.
        </span>

        <Button onClick={scrollToContact} title="HIRE ME" />
      </div>
    </div>
  );
};

export default HeroIntro;
