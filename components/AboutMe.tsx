"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Code, Rocket, Database, Brain, Cloud, Server, Play, Briefcase, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Replace with your actual YouTube/Vimeo video ID
  const videoId = "YOUR_VIDEO_ID"; // e.g., "dQw4w9WgXcQ" for YouTube
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  const handleVideoClick = () => {
    setVideoLoaded(true);
    setShowVideo(true);
  };

  const techStack = {
    fullStack: {
      title: "Full Stack",
      icon: Code,
      color: "blue",
      items: ["React.js", "Node.js", "Next.js", "TypeScript", "Express.js"],
    },
    ai: {
      title: "AI & Automation",
      icon: Brain,
      color: "purple",
      items: ["Python", "LangChain", "OpenAI API", "Google Document AI"],
    },
    infrastructure: {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "orange",
      items: ["Docker", "AWS", "GCP"],
    },
    database: {
      title: "Database",
      icon: Database,
      color: "teal",
      items: ["PostgreSQL", "MongoDB", "Firebase"],
    },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      {/* Background Pattern - Lighter */}
      <div className="absolute inset-0 opacity-[0.015] z-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, #64748b 1px, transparent 0)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      {/* Decorative Elements - Lighter */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-electric-50/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-50/30 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="text-left mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-900 mb-3 sm:mb-4 px-2">
              I bridge the gap between complex code and real-world business
              efficiency.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl px-2">
              My focus is delivering software that is scalable for the enterprise
              and profitable for the business owner.
            </p>
          </div>
        </Reveal>

        {/* Video Section - 2 Column Layout */}
        <Reveal delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-12 md:mb-16 lg:mb-20 mt-6 sm:mt-8 md:mt-12 lg:mt-16 items-center">
            {/* Left Side - About Me Text */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal-900">
                Who I Am
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed">
                I&apos;m a Full Stack Engineer and AI Automation Specialist based in Pakistan, 
                available for remote work with clients and teams worldwide.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                I specialize in building scalable web applications, 
                intelligent automation systems, and cloud-based solutions that drive real business value.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                My approach combines technical excellence with business acumen—I don&apos;t just write code, 
                I build systems that solve problems and generate ROI.
              </p>
              
              {/* Upwork Trust Badge */}
              <div className="pt-4 sm:pt-6">
                <a
                  href="https://www.upwork.com/freelancers/~01c4878170bab8029f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold text-sm sm:text-base hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
                >
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Verified on Upwork</span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  100% Job Success • Client Reviews Available
                </p>
              </div>
            </div>

            {/* Right Side - Video Thumbnail/Player */}
            <div className="relative">
              {!showVideo ? (
                <motion.div
                  onClick={handleVideoClick}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Video Thumbnail - Using profile photo as background */}
                  <div className="relative w-full aspect-video">
                    {/* Profile Photo as Background - Darkened */}
                    <div className="absolute inset-0">
                      <Image
                        src="/profile-photo.png"
                        alt="Ahmed Afzal - Introduction Video"
                        fill
                        className="object-cover object-top"
                        priority
                        quality={85}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Dark overlay for better contrast */}
                      <div className="absolute inset-0 bg-charcoal-900/50 group-hover:bg-charcoal-900/40 transition-colors duration-300" />
                    </div>
                    
                    {/* Play Button Overlay */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4">
                      <motion.div
                        className="w-20 h-20 sm:w-24 sm:h-24 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-10 h-10 sm:w-12 sm:h-12 text-electric-600 ml-1" fill="currentColor" />
                      </motion.div>
                      <p className="text-white font-bold text-base sm:text-lg md:text-xl drop-shadow-2xl text-center px-4">
                        Watch My Introduction
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  {videoLoaded && (
                    <iframe
                      src={videoUrl}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Introduction Video"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </Reveal>

          {/* Two Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16 lg:mb-20 mt-6 sm:mt-8 md:mt-12 lg:mt-16">
          {/* Card A - Engineering & Architecture */}
          <Reveal delay={0.1}>
            <div className="group relative bg-white rounded-xl border border-gray-200 p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-electric-50/30"
          >
            <div className="absolute inset-0 rounded-lg border-2 border-electric-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-electric-50 rounded-lg">
                <Server className="w-8 h-8 text-electric-600" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 mb-2 sm:mb-3">
                  Engineering & Architecture
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
                  I am a production-ready engineer focused
                  on writing clean, maintainable code. I specialize in building
                  robust backend architectures and responsive front-ends that scale with your business needs.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-50 rounded-full">
                  <span className="text-sm font-bold text-electric-800">
                    Production-Ready Engineer
                  </span>
                </div>
              </div>
            </div>
          </div>
          </Reveal>

          {/* Card B - Automation & ROI */}
          <Reveal delay={0.2}>
            <div className="group relative bg-white rounded-xl border border-gray-200 p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-teal-50/30"
          >
            <div className="absolute inset-0 rounded-lg border-2 border-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-teal-50 rounded-lg">
                <Rocket className="w-8 h-8 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 mb-2 sm:mb-3">
                  Automation & ROI
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 sm:mb-4">
                  I transform manual workflows into intelligent automation systems. 
                  If your team is spending hours on repetitive tasks or data entry, 
                  I build solutions that eliminate that overhead and drive efficiency.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full">
                  <span className="text-sm font-bold text-teal-800">
                    Custom AI Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>

          {/* Tech Stack Section */}
        <Reveal delay={0.3}>
          <div className="mt-8">
          {/* Subtle divider line */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-0.5 bg-teal-500 rounded-full" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-charcoal-900 mb-8 sm:mb-10 md:mb-12">
            The Tech Stack
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Full Stack */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-teal-50 rounded-full">
                  <Code className="w-6 h-6 text-teal-600" />
                </div>
                <h4 className="text-xl font-bold text-charcoal-900">
                  {techStack.fullStack.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.fullStack.items.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & Automation */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-purple-50/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-teal-50 rounded-full">
                  <Brain className="w-6 h-6 text-teal-600" />
                </div>
                <h4 className="text-xl font-bold text-charcoal-900">
                  {techStack.ai.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.ai.items.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-orange-50/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-teal-50 rounded-full">
                  <Cloud className="w-6 h-6 text-teal-600" />
                </div>
                <h4 className="text-xl font-bold text-charcoal-900">
                  {techStack.infrastructure.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.infrastructure.items.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-teal-50/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-teal-50 rounded-full">
                  <Database className="w-6 h-6 text-teal-600" />
                </div>
                <h4 className="text-xl font-bold text-charcoal-900">
                  {techStack.database.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.database.items.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

