import React from "react";
import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  image: StaticImageData;
  title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title }) => {
  return (
    <div className="relative hover:bg-[#F0EFEF] cursor-pointer w-full md:w-[32%] min-h-[200px] md:h-62 transition ease-in rounded-md border border-[#0D0D0D] p-4">
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
    </div>
  );
};

export default ServiceCard;
