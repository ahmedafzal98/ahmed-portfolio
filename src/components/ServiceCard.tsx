"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ServiceCardProps {
  image: StaticImageData;
  title: string;
  delay?: number;
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: custom },
  }),
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  delay = 0,
}) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay}
      className="relative hover:bg-[#F0EFEF] cursor-pointer w-full md:w-[32%] min-h-[200px] md:h-62 transition ease-in rounded-md border border-[#0D0D0D] p-4"
    >
      {/* Image at top-right */}
      <div className="absolute top-4 right-4">
        <Image className="w-14 h-14 md:w-20 md:h-20" src={image} alt={title} />
      </div>

      {/* Text at bottom-left */}
      <div className="absolute bottom-4 left-4 right-4">
        <h1 className="text-black text-lg md:text-[24px] font-spaceGrotesk font-medium leading-snug">
          {title.split(" ").slice(0, 3).join(" ")} <br />
          {title.split(" ").slice(3).join(" ")}
        </h1>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
