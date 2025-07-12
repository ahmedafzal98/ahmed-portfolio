import React from "react";

interface ButtonProps {
  onClick: () => void;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full cursor-pointer hover:opacity-80 w-[140px] h-[55px] bg-[#93F203] z-[9999] relative pointer-events-auto"
    >
      <span className="text-black font-light">{title}</span>
    </button>
  );
};

export default Button;
