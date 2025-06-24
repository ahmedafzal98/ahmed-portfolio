import React from "react";

interface CareerSpecificProps {
  companyName: string;
  designation: string;
  desc: string;
  time: string;
}

const CareerSpecific: React.FC<CareerSpecificProps> = ({
  companyName,
  designation,
  desc,
  time,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-10 items-start md:items-center justify-between gap-6">
        {/* Left Section */}
        <div className="space-y-2 md:w-[30%] w-full">
          <h1 className="text-black uppercase text-sm font-medium tracking-wide">
            {companyName}
          </h1>
          <div>
            <span className="font-spaceGrotesk text-3xl md:text-4xl text-[#0D0D0D] leading-tight block">
              {designation}
            </span>
          </div>
        </div>

        {/* Middle Section - Description */}
        <div className="w-full md:w-[50%]">
          <p className="text-[#373636] font-workSans text-sm md:text-base leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Right Section - Date */}
        <div className="w-full md:w-auto text-right md:text-left">
          <span className="text-[#0D0D0D] text-base md:text-lg font-spaceGrotesk font-medium block">
            {time}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-[#F0EFEF] w-full h-0.5 mt-10"></div>
    </>
  );
};

export default CareerSpecific;
