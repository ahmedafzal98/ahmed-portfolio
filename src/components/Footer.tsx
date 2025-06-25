import React from "react";
import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="lg:h-[525px] py-12 px-4 bg-[#1d1d1d] relative opacity-90 flex items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start gap-5 w-full md:w-1/2">
            <h1 className="text-white text-xl font-spaceGrotesk">Follow me</h1>

            {/* LinkedIn */}
            <div className="text-white border-2 gap-3 transition-all ease-in-out hover:bg-[#93F203] cursor-pointer px-4 py-2 rounded-full flex items-center font-spaceGrotesk text-[18px]">
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white w-5 h-5 hover:text-[#0A66C2]" />
              </a>
              <span className="ml-2 text-white font-medium">LinkedIn</span>
            </div>

            {/* GitHub */}
            <div className="text-white border-2 gap-3 px-4 transition-all ease-in-out cursor-pointer hover:bg-[#93F203] py-2 rounded-full flex items-center font-spaceGrotesk text-[18px]">
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white w-5 h-5 hover:text-[#0A66C2]" />
              </a>
              <span className="ml-2 text-white font-medium">GitHub</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-start gap-5 w-full md:w-1/2">
            <h5 className="text-white font-spaceGrotesk text-lg md:text-xl font-medium text-left">
              New Tips delivered to your inbox
            </h5>

            <input
              className="w-full max-w-sm h-18 text-white border-2 focus:outline-none focus:ring-0 border-white rounded-md pl-4"
              type="email"
              placeholder="Email"
            />

            <button className="cursor-pointer hover:bg-[#6805F1] transition-all ease-in w-full max-w-sm h-12 rounded-full hover:text-white text-black bg-[#93F203] font-semibold">
              SEND
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          {/* Back to Top Button */}

          {/* Signature */}
          <div className="text-white opacity-60 text-sm mt-4 md:mt-0">
            Made with 💻 by Ahmed Afzal
          </div>
          <div className="flex items-center gap-2 border border-white text-white px-4 py-2 rounded-full font-spaceGrotesk text-sm hover:bg-[#5404c5] transition">
            <a href="#top" className="flex items-center gap-2">
              <FaArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
