import React from "react";
import ServiceCard from "./ServiceCard";

import fullstack from "../../public/assets/images/fullstack.png";
import api from "../../public/assets/images/api.png";
import mern_stack from "../../public/assets/images/mern-stack.png";
import spa from "../../public/assets/images/spa.png";
import web_app_maintain from "../../public/assets/images/web-app-maintain.png";
import web_vital_enhan from "../../public/assets/images/web-vital-enhan.png";

const WhatIDoSection: React.FC = () => {
  const serviceObj = [
    { title: "Full Stack Web Development", image: fullstack },
    { title: "RESTful API Development", image: api },
    { title: "MERN Stack Development", image: mern_stack },
    { title: "Single Page Applications (SPA)", image: spa },
    { title: "Web Application Maintenance", image: web_app_maintain },
    { title: "Web Vitals Enhancement", image: web_vital_enhan },
  ];

  return (
    <div className="px-5 md:px-[8%] mt-[8%]">
      {/* Section Label */}
      <h1 className="text-[#6805F1] text-sm md:text-base font-normal mb-2">
        {`{ What I do }`}
      </h1>

      {/* Heading */}
      <h1 className="text-[#0d0d0d] text-3xl md:text-6xl font-spaceGrotesk font-semibold flex flex-col gap-2">
        <span>Crafting Seamless</span>
        <span>
          <span className="font-vt323">Full-Stack</span> Solutions
        </span>
      </h1>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-5 mt-10">
        {serviceObj.map((item, index) => (
          <ServiceCard key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default WhatIDoSection;
