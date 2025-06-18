import Image from "next/image";
import React from "react";
import bgImageAhmed from "../../public/assets/images/bg-ahmed-image.png";
import ahmedImage from "../../public/assets/images/ahmed-image.png";

const OverlayImage: React.FC = () => {
  return (
    <div className="relative md:absolute w-full mt-10 h-auto md:top-50 md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgImageAhmed}
        alt="Background Image"
        width={900} // Replace with actual resolution
        height={900}
        priority
        quality={100}
        className="opacity-70 object-contain"
      />

      {/* Foreground Overlay Image */}
      <Image
        src={ahmedImage}
        alt="Ahmed Overlay"
        width={820} // Replace with actual resolution
        height={820}
        priority
        quality={100}
        className="absolute object-contain"
      />
    </div>
  );
};

export default OverlayImage;
