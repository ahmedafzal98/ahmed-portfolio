"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import smartNewsHub from "../../public/assets/images/smartNewsHub.png";
import wesellPickLand from "../../public/assets/images/wesellPick-LandingPage.png";
import wesellPick from "../../public/assets/images/wesellPickleball.png";
import ahmedMeal from "../../public/assets/images/ahmedMeal.png";

type Project = {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  sourceCode: string;
  liveDemo: string;
  image: StaticImageData;
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const projects: Project[] = [
  {
    id: 1,
    name: "Pickleball E-commerce Web App",
    description:
      "Developed a full-stack e-commerce store for Pickleball products using the eBay API, with JWT authentication, secure checkout, and MongoDB integration.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "eBay API"],
    sourceCode: "https://github.com/ahmedafzal98/pickleball-store",
    liveDemo: "https://wesellpickleball.xyz/",
    image: wesellPick,
  },
  {
    id: 2,
    name: "Smart News Hub",
    description:
      "A personalized news app with Google login, topic-based feeds, AI-powered content generation and summarization, and custom article creation using the Tiptap editor with image uploads.",
    techStack: [
      "OpenAI",
      "Langchain",
      "TailwindCSS",
      "React.js",
      "Python",
      "Node.js",
      "MongoDB",
    ],
    sourceCode: "https://github.com/ahmedafzal98/FYP-2",
    liveDemo: "https://fyp-2-frontend.onrender.com",
    image: smartNewsHub,
  },
  {
    id: 3,
    name: "Pickleball Landing Page",
    description:
      "Designed an attractive landing page for wesellpickleball.com with a contact form using Nodemailer and Resend to send emails to both the website owner and customer.",
    techStack: ["React.js", "Node.js", "Resend", "TailwindCSS"],
    sourceCode: "https://github.com/ahmedafzal98/wesellpickleball",
    liveDemo: "https://wesellpickleball.com/",
    image: wesellPickLand,
  },
  {
    id: 4,
    name: "Food Order App",
    description:
      "A real-time food ordering system with Firebase integration, featuring cart management, checkout, and delivery information capture.",
    techStack: ["React.js", "Firebase", "CSS3"],
    sourceCode: "https://github.com/ahmedafzal98/foodorder",
    liveDemo: "https://animated-treacle-09aab4.netlify.app/",
    image: ahmedMeal,
  },
];

const Projects: React.FC = () => {
  return (
    <section id="portfolio" className="px-5 md:px-[8%] mt-[8%]">
      {/* Section Label */}
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-[#6805F1] text-sm md:text-base font-workSans font-normal mb-2"
      >
        {`{ My Web Projects }`}
      </motion.h1>

      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-[#0d0d0d] text-3xl md:text-6xl font-spaceGrotesk font-semibold flex gap-4"
      >
        <span className="font-vt323">Project</span>Gallery
      </motion.h1>

      {/* Project Cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 mt-5">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition hover:shadow-lg"
          >
            <Image
              src={project.image}
              alt={project.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-[#0D0D0D] font-medium font-spaceGrotesk text-4xl mb-2">
                  {project.name}
                </h3>
                <p className="text-[#0D0D0D] font-workSans text-[18px] font-normal mb-4">
                  {project.description}
                </p>
                <div>
                  <p className="font-workSans font-medium uppercase text-sm text-[#6805F1] mb-1">
                    Tech Stack:
                  </p>
                  <div className="flex mt-7 flex-wrap gap-3">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-[#0D0D0D] font-workSans text-base font-normal px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition"
                >
                  Source Code
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-black bg-[#93F203] hover:opacity-80 px-4 py-2 rounded-lg transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
