"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import FluidMesh from "./FluidMesh";
import Reveal from "./Reveal";

export default function Hero() {
  // Removed duplicate mouse tracking - FluidMesh handles it now
  const [showMesh, setShowMesh] = useState(false);

  // Defer heavy visual effects until after first paint (improves perceived load time)
  useEffect(() => {
    const id = window.requestAnimationFrame(() => setShowMesh(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Add offset for better visual positioning
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-electric-50/30">
      {/* Fluid Gradient Mesh - Glassmorphism Effect - Only in Hero with mouse tracking */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {showMesh ? <FluidMesh intensity="medium" enableMouseTracking={true} /> : null}
      </div>
      
      {/* Enhanced Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.08] z-[2]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #111827 1px, transparent 1px),
            linear-gradient(to bottom, #111827 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Interactive Grid Highlight - Removed duplicate, FluidMesh handles it */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-40 w-full min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start w-full">
          {/* Left Side: Text Content */}
          <div className="space-y-8 flex flex-col">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-2"
            >
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-transparent border-2 border-teal-500">
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-green-500"
                />
                <span className="font-mono text-sm font-semibold text-teal-600">
                  Available for Hire
                </span>
              </div>
            </motion.div>

            {/* Greeting Structure - The "Friendly Expert" */}
            {/* Aligned to start at same line as image */}
            <div className="space-y-4">
              {/* Top Line: The Greeting - Starts at same line as image top */}
              <Reveal delay={0}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-charcoal-900" style={{ letterSpacing: '-0.02em' }}>
                  Hi, I&apos;m Ahmed Afzal{" "}
                  <span className="inline-block animate-wave">👋</span>
                </h1>
              </Reveal>

              {/* Middle Line: The Value */}
              <Reveal delay={0.2}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-electric-600 via-teal-600 to-electric-600 bg-clip-text text-transparent">
                    Full Stack Developer & AI Engineer
                  </span>
                </h2>
              </Reveal>

              {/* Bottom Line: The Detail */}
              <Reveal delay={0.3}>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-full lg:max-w-[600px] leading-relaxed font-normal pt-2" style={{ lineHeight: '1.6' }}>
                  Professional Full Stack Developer specializing in{" "}
                  <span className="font-mono text-electric-700 font-semibold">React</span>,{" "}
                  <span className="font-mono text-electric-700 font-semibold">Next.js</span>,{" "}
                  <span className="font-mono text-electric-700 font-semibold">Node.js</span>, and{" "}
                  <span className="font-mono text-teal-700 font-semibold">AI Automation</span>. 
                  Available for remote work with clients in UK, Europe, Gulf, and worldwide.
                </p>
              </Reveal>
            </div>

            {/* Mobile Photo - Shows between headline and buttons */}
            <Reveal delay={0.3}>
              <div className="lg:hidden flex justify-center my-8">
                <div className="relative flex items-end justify-center">
                  {/* Natural photo - minimal shadow for edge smoothing only */}
                  <div className="relative" style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05))' }}>
                    <Image
                      src="/profile-photo.png"
                      alt="Ahmed Afzal - Full Stack Developer & AI Engineer | Remote Developer for UK, Europe & Gulf"
                      width={192}
                      height={192}
                      className="object-contain object-bottom"
                      style={{ objectPosition: 'center bottom' }}
                      priority
                      loading="eager"
                      quality={85}
                      sizes="192px"
                      onError={(e) => {
                        // Hide image if it fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CTA Buttons */}
            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-electric-600 text-white rounded-lg font-semibold text-base shadow-md hover:shadow-lg hover:bg-electric-700 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 touch-manipulation"
              >
                View Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-transparent border-2 border-electric-600 text-electric-600 rounded-lg font-semibold text-base hover:bg-electric-50 transition-all duration-300 touch-manipulation"
              >
                Contact Me
              </button>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Professional Photo (Desktop) - Transparent PNG */}
          {/* Container: Top-aligned with headline, bottom-extended (cut off) */}
          <div className="relative hidden lg:flex items-start justify-center h-full overflow-hidden">
            <Reveal delay={0.3} direction="right" className="w-full h-full">
              <div 
                className="relative w-full max-w-lg h-full flex items-end justify-center ml-4"
                style={{ bottom: '-40px' }}
              >
              {/* Professional Photo - Natural, integrated look */}
              <div className="relative w-full h-full flex items-end justify-center">
                {/* Photo Container - Natural appearance, no card styling */}
                <div className="relative w-full h-full flex items-end overflow-visible">
                  {/* Minimal shadow for natural edge smoothing only */}
                  <div 
                    className="relative w-full"
                    style={{
                      filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.08))',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'flex-end'
                    }}
                  >
                    <Image
                      src="/profile-photo.png"
                      alt="Ahmed Afzal - Full Stack Developer & AI Engineer | Remote Software Engineer for UK, Europe & Gulf"
                      width={500}
                      height={900}
                      className="object-contain w-full"
                      style={{ 
                        objectPosition: 'top center',
                        height: '100%',
                        maxHeight: 'none'
                      }}
                      priority
                      loading="eager"
                      quality={85}
                      sizes="(max-width: 768px) 100vw, 500px"
                      onError={(e) => {
                        // Hide image if it fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

