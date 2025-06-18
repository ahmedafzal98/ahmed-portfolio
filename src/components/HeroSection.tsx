import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Button from "./Button";
import OptionList from "./OptionList";
import HeroIntro from "./HeroIntro";
import OverlayImage from "./OverlayImage";
import LargeName from "./LargeName";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-[url('/assets/images/hero-bg.png')] bg-cover bg-no-repeat h-auto md:h-[100vh] relative overflow-hidden p-3">
      <div className="min-h-screen md:min-h-full w-full border border-gray-500 rounded-2xl p-3">
        <Navbar />
        <div className="flex justify-center items-center mt-[7%]">
          <div className="w-full text-left md:text-center">
            <LargeName />
            <HeroIntro />

            <div className="flex flex-col mt-10">
              <OptionList />
              <OverlayImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
