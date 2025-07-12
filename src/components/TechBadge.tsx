import React from "react";

interface TechStackProps {
  stack: string;
}
const TechBadge: React.FC<TechStackProps> = ({ stack }) => {
  return (
    <div className="w-auto flex justify-center items-center rounded-full px-4 py-2 sm:px-5 sm:py-2.5 bg-[#1D1D1D]">
      <h5 className="font-spaceGrotesk text-sm sm:text-base md:text-lg font-medium text-[#F0EFEF] text-center whitespace-nowrap">
        {stack}
      </h5>
    </div>
  );
};

export default TechBadge;
