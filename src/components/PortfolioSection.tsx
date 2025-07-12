import React from "react";
import CareerSpecific from "./CareerSpecific";

const PortfolioSection: React.FC = () => {
  const careerObj = [
    {
      companyName: "Alpha AI Solutions",
      designation: "Full Stack Developer",
      description:
        "Developed and deployed a full-stack eCommerce application using the MERN stack. Integrated eBay API for real-time product listings and managed data with MongoDB. Built responsive UI with React and handled API development, debugging, and deployment.",
      time: "2025 - Present",
    },
    {
      companyName: "FZHP Global Vision Marketing",
      designation: "MERN Stack Developer",
      description:
        "Developed and deployed a full-stack eCommerce application using the MERN stack. Integrated eBay API for real-time product listings and managed data with MongoDB. Built responsive UI with React and handled API development, debugging, and deployment.",
      time: "2022 - 2024",
    },
    {
      companyName: "Maspearls",
      designation: "Android Developer",
      description: `Developed two Android applications with clean UI/UX for business operations. 
Implemented secure payment gateways supporting credit card and QR code. 
Added user authentication, transaction history, and record tracking features.`,

      time: "2020 - 2021",
    },
  ];

  return (
    <div id="resume" className="px-5 md:px-[8%] mt-[8%]">
      <h1 className="text-[#6805F1] text-sm md:text-base font-workSans font-normal mb-2">
        {`{ My Career Journey }`}
      </h1>

      <h1 className="text-[#0d0d0d] text-3xl md:text-6xl font-spaceGrotesk font-semibold flex gap-2">
        <span className="font-vt323">Career</span>
        <span className="font-spaceGrotesk">Waypoints...</span>
      </h1>

      {careerObj.map((item, index) => {
        return (
          <CareerSpecific
            key={index}
            companyName={item.companyName}
            designation={item.designation}
            desc={item.description}
            time={item.time}
          />
        );
      })}
    </div>
  );
};

export default PortfolioSection;
