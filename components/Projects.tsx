"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  FileText,
  ShoppingCart,
  Users,
  ExternalLink,
  Github,
  Play,
  ArrowRight,
} from "lucide-react";
import Reveal from "./Reveal";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "Automated Invoice Processing (White Label Ready)",
      tagline: "Eliminating manual data entry with Google Document AI. Designed for agencies to resell to their enterprise clients.",
      problem:
        "Agency clients were drowning in PDF invoices and manual entry.",
      solution:
        "Built a pipeline that extracts structured data from PDFs automatically using Google Document AI, reducing processing time by 90%. White-label ready for agencies to resell to enterprise clients.",
      techStack: ["Python", "Google Cloud Platform (GCP)", "Document AI", "LangChain"],
      links: [
        { label: "View Case Study", icon: FileText, href: "/projects/intelligent-document-processing" },
        { label: "GitHub", icon: Github, href: "https://github.com/ahmedafzal98/ocr-mvp-ui", target: "_blank", rel: "noopener noreferrer" },
      ],
      visualType: "diagram", // AI diagram
    },
    {
      id: 2,
      title: "Pickleball Store E-Commerce Engine",
      tagline: "Affiliate-powered retail with real-time inventory syncing.",
      problem: "Needed a robust store that syncs inventory across eBay and Amazon while tracking affiliate commissions.",
      solution:
        "Engineered a MERN stack e-commerce platform with eBay and Amazon affiliate integration, real-time inventory synchronization, automated commission tracking, and Stripe for secure global payments.",
      techStack: ["React.js", "Node.js", "Redux", "eBay API", "Stripe"],
      links: [
        { label: "View Case Study", icon: FileText, href: "/projects/pickleball-store-ecommerce" },
        { label: "Live Site", icon: ExternalLink, href: "https://wesellpickleball.xyz/", target: "_blank", rel: "noopener noreferrer" },
        { label: "GitHub", icon: Github, href: "https://github.com/ahmedafzal98/pickleball-store", target: "_blank", rel: "noopener noreferrer" },
      ],
      visualType: "mockup", // Website mockup
    },
    {
      id: 3,
      title: "Enterprise Attendance System",
      tagline: "Digitizing HR operations for a mobile workforce.",
      problem: "HR tracking was manual, error-prone, and slow.",
      solution:
        "Developed a cross-platform React Native app backed by Node.js to digitize attendance and employee tracking in real-time.",
      techStack: ["React Native", "Expo", "Node.js", "PostgreSQL"],
      links: [
        { label: "View Case Study", icon: FileText, href: "/projects/enterprise-attendance-system" },
        { label: "GitHub", icon: Github, href: "https://github.com/ahmedafzal98/attendance-system", target: "_blank", rel: "noopener noreferrer" },
      ],
      visualType: "mobile", // Mobile mockup
    },
  ];

  const VisualComponent = ({
    type,
    index,
  }: {
    type: string;
    index: number;
  }) => {
    if (type === "diagram") {
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-electric-50 to-teal-50 rounded-xl p-8 flex items-center justify-center">
          {/* AI Processing Diagram */}
          <div className="flex items-center gap-6 w-full">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-24 bg-white rounded-lg shadow-md flex items-center justify-center border-2 border-gray-200">
                <FileText className="w-10 h-10 text-gray-400" />
              </div>
              <span className="text-xs font-mono text-gray-600">PDF Input</span>
            </div>
            <ArrowRight className="w-8 h-8 text-electric-600" />
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-gradient-to-br from-electric-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white text-2xl"
                >
                  AI
                </motion.div>
              </div>
              <span className="text-xs font-mono text-gray-600">Processing</span>
            </div>
            <ArrowRight className="w-8 h-8 text-electric-600" />
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-24 bg-white rounded-lg shadow-md flex items-center justify-center border-2 border-gray-200">
                <div className="grid grid-cols-2 gap-1 p-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-teal-500 rounded"
                    />
                  ))}
                </div>
              </div>
              <span className="text-xs font-mono text-gray-600">Structured Output</span>
            </div>
          </div>
        </div>
      );
    }

    if (type === "mockup") {
      return (
        <div className="relative w-full h-full bg-gray-100 rounded-xl overflow-hidden shadow-2xl">
          {/* MacBook Frame Mockup */}
          <div className="bg-gray-800 rounded-t-lg p-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
          <div className="bg-white h-64 flex items-center justify-center">
            <div className="text-center">
              <ShoppingCart className="w-16 h-16 text-electric-600 mx-auto mb-4" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-48 mx-auto" />
                <div className="h-4 bg-gray-200 rounded w-32 mx-auto" />
                <div className="grid grid-cols-3 gap-2 mt-4 px-4">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="h-20 bg-gradient-to-br from-electric-100 to-teal-100 rounded"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (type === "mobile") {
      return (
        <div className="relative w-full h-full flex items-center justify-center gap-4">
          {/* iPhone and Android Mockups */}
          {[0, 1].map((phone) => (
            <div
              key={phone}
              className="relative w-32 h-56 bg-gray-900 rounded-3xl p-2 shadow-2xl"
            >
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                {/* Status Bar */}
                <div className="h-6 bg-gradient-to-r from-electric-500 to-teal-500 flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                {/* Content */}
                <div className="p-4 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-3/4" />
                  <div className="space-y-2 mt-4">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="h-8 bg-gradient-to-r from-electric-100 to-teal-100 rounded"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
    >
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02] z-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #111827 1px, transparent 1px),
              linear-gradient(-45deg, #111827 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      
      {/* Lightweight Background Elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-electric-100/15 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-teal-100/15 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-900 mb-3 sm:mb-4">
              Engineered Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              A selection of projects focused on automation, scalability, and
              business efficiency.
            </p>
          </div>
        </Reveal>

        {/* Projects */}
        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={project.id} className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
                {/* Visual - Left or Right based on index */}
                <Reveal delay={index * 0.1} direction={isEven ? "left" : "right"}>
                  <div
                    className={
                      isEven
                        ? "order-1 md:order-1"
                        : "order-1 md:order-2"
                    }
                  >
                    <div className="h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                      <VisualComponent type={project.visualType} index={index} />
                    </div>
                  </div>
                </Reveal>

                {/* Content - Right or Left based on index */}
                <Reveal delay={index * 0.1 + 0.15} direction={isEven ? "right" : "left"}>
                  <div
                    className={
                      isEven
                        ? "order-2 md:order-2 space-y-6 max-w-lg"
                        : "order-2 md:order-1 space-y-6 max-w-lg"
                    }
                  >
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-electric-600 font-medium mb-3 sm:mb-4">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-1">
                        The Problem:
                      </p>
                      <p className="text-base text-slate-600 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-1">
                        The Solution:
                      </p>
                      <p className="text-base text-slate-600 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-3">
                      Tech Stack:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-gray-100 text-slate-600 rounded-full text-xs font-mono border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
                    {project.links.map((link, linkIndex) => {
                      const Icon = link.icon;
                      const isInternalLink = link.href.startsWith("/");
                      
                      if (isInternalLink) {
                        return (
                          <Link
                            key={linkIndex}
                            href={link.href}
                            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-electric-600 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-electric-700 transition-colors duration-300 hover:shadow-lg touch-manipulation"
                          >
                            <Icon className="w-4 h-4" />
                            {link.label}
                          </Link>
                        );
                      }
                      
                      return (
                        <a
                          key={linkIndex}
                          href={link.href}
                          target={link.target || undefined}
                          rel={link.rel || undefined}
                          className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-electric-600 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-electric-700 transition-colors duration-300 hover:shadow-lg touch-manipulation"
                        >
                          <Icon className="w-4 h-4" />
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-8 sm:pt-12 md:pt-16 border-t border-gray-200"
        >
          <div className="text-center px-4">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-charcoal-900 mb-4 sm:mb-6">
              Have a project like this? Let&apos;s discuss your architecture.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-electric-600 text-white rounded-lg text-base sm:text-lg font-semibold hover:bg-electric-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Book a Technical Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

