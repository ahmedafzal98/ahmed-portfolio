"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AboutVideoSection: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isMuted, setMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleMute = () => {
    setMuted((prev) => !prev);
  };

  // Intersection Observer: detects when video section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const embedUrl = `https://www.loom.com/embed/00eb3e366ece463ab1b7961a5de9a8d7?autoplay=1&muted=${
    isMuted ? 1 : 0
  }`;

  return (
    <section
      ref={sectionRef}
      className="px-5 md:px-[8%] mt-[10%] relative z-10"
    >
      {/* Section Label */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[#6805F1] text-sm md:text-base font-workSans font-normal mb-2"
      >
        {`{ About Me }`}
      </motion.h1>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[#0d0d0d] text-3xl md:text-6xl font-spaceGrotesk font-semibold mb-6"
      >
        <span>Get to Know</span> <span className="font-vt323">Ahmed Afzal</span>
      </motion.h2>

      {/* Embedded Loom Video */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg relative"
      >
        {isVisible && (
          <iframe
            ref={iframeRef}
            className="w-full h-full"
            src={embedUrl}
            title="Ahmed Afzal Introduction Video"
            allow="autoplay; fullscreen"
            frameBorder="0"
            allowFullScreen
          />
        )}

        {/* Mute/Unmute Button */}
        <button
          onClick={handleToggleMute}
          className="absolute bottom-3 right-3 z-10 bg-black px-4 py-1 rounded-md text-sm font-medium shadow"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-[#F9F9F9] p-6 mt-8 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p className="text-[#0d0d0d] font-workSans text-lg md:text-xl text-center md:text-left">
          Ready to bring your ideas to life? I'm available for freelance
          projects and collaborations.
        </p>
        <a
          href="#contact"
          className="bg-[#93F203] text-black px-6 py-3 rounded-lg text-sm md:text-base font-semibold hover:opacity-80 transition"
        >
          Let&apos;s Connect
        </a>
      </motion.div>
    </section>
  );
};

export default AboutVideoSection;
