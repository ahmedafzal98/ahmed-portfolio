import React from "react";
import Button from "./Button";

const HeroIntro: React.FC = () => {
  return (
    <div>
      <p className="mt-6 text-left text-white text-base font-bold md:hidden leading-relaxed">
        Full stack developer with 7 years of experience in developing robust web
        applications from front-end to back-end.
      </p>

      <div className="block md:hidden mt-4">
        <button className="w-full bg-[#93F203] text-black py-3 rounded-full font-bold font-poppins text-center">
          Hire Me
        </button>
      </div>

      <div className="hidden md:flex flex-col items-end gap-6 w-[30%] absolute right-10 top-[60%] flex-nowrap font-bold">
        <span className="text-2xl text-white text-right font-medium uppercase font-poppins leading-relaxed">
          Full stack developer with 7 years <br /> of experience in developing{" "}
          <br />
          robust web applications from <br /> front-end to back-end
        </span>
        <Button />
      </div>
    </div>
  );
};

export default HeroIntro;
