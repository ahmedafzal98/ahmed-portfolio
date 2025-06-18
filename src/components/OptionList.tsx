import React from "react";

const OptionList: React.FC = () => {
  const options: string[] = [
    "UIUX Design",
    "Web Development",
    "App Development",
  ];
  return (
    <div className="flex flex-col gap-4 md:absolute md:top-[60%]">
      {options.map((option, index) => (
        <div
          key={index}
          className="flex text-2xl md:text-3xl gap-4 justify-start font-poppins font-bold"
        >
          <span className="text-[#93F203]">{"=>"}</span>
          <span className="text-white">{option}</span>
        </div>
      ))}
    </div>
  );
};

export default OptionList;
