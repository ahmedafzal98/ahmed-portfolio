"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Sparkles,
  Smartphone,
  Check,
  Calendar,
  ArrowRight,
} from "lucide-react";
import Reveal from "./Reveal";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: 1,
      icon: Globe,
      title: "Full Stack Web Development",
      pitch:
        "I build production-ready web applications that scale. From robust backend architectures to responsive front-ends, I ensure your platform is fast, secure, and maintainable.",
      deliverables: [
        "SaaS MVPs (Minimum Viable Products)",
        "E-commerce Engines (Stripe/Payment Integration)",
        "Admin Dashboards & Internal Tools",
      ],
      techStack: ["React.js", "Next.js", "Node.js", "PostgreSQL"],
      color: "electric",
    },
    {
      id: 2,
      icon: Sparkles,
      title: "AI Automation Solutions",
      pitch:
        "Stop wasting time on manual data entry. I engineer intelligent systems using LLMs and Document AI to automate repetitive workflows and extract data from unstructured documents.",
      deliverables: [
        "Custom RAG (Retrieval-Augmented Generation) Chatbots",
        "Automated Document Processing Pipelines (PDF to Data)",
        "AI Agents for Agency Workflows",
      ],
      techStack: ["Python", "LangChain", "OpenAI API", "Google Document AI"],
      color: "teal",
    },
    {
      id: 3,
      icon: Smartphone,
      title: "Cross-Platform Mobile Apps",
      pitch:
        "Native-quality mobile experiences with a single codebase. I build iOS and Android apps that integrate seamlessly with your existing backend infrastructure.",
      deliverables: [
        "Enterprise Attendance & HR Systems",
        "Fintech & Payment Applications",
        "Client-facing Mobile Dashboards",
      ],
      techStack: ["React Native", "Expo", "Redux"],
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "electric":
        return {
          iconBg: "bg-electric-50",
          iconColor: "text-electric-600",
          borderColor: "border-electric-600",
        };
      case "teal":
        return {
          iconBg: "bg-teal-50",
          iconColor: "text-teal-600",
          borderColor: "border-teal-600",
        };
      case "purple":
        return {
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          borderColor: "border-purple-600",
        };
      default:
        return {
          iconBg: "bg-electric-50",
          iconColor: "text-electric-600",
          borderColor: "border-electric-600",
        };
    }
  };

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, #111827 1px, transparent 0)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
      
      {/* Lightweight Background Elements */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-purple-100/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-100/15 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-900 mb-3 sm:mb-4">
              How I Can Help Your Business
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Professional engineering services tailored to your business needs.
            </p>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);
            return (
              <Reveal key={service.id} delay={0.1 + index * 0.2}>
                <div className="group relative bg-white rounded-xl p-5 sm:p-6 md:p-8 transition-all duration-300 hover:bg-white hover:-translate-y-3 hover:shadow-2xl cursor-pointer border border-gray-100 shadow-md h-full flex flex-col"
              >
                {/* Hover Border */}
                <div
                  className={`absolute inset-0 rounded-lg border-2 ${colors.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 ${colors.iconBg} rounded-full flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-8 h-8 ${colors.iconColor}`} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>

                {/* Pitch */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6">
                  {service.pitch}
                </p>

                {/* What I Deliver */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-700 mb-3">
                    Deliverables:
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <Check className={`w-5 h-5 ${colors.iconColor} flex-shrink-0 mt-0.5`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <p className="text-sm font-semibold text-slate-700 mb-2">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white text-slate-600 rounded-full text-xs font-mono border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>

        {/* Availability Banner */}
        <Reveal delay={0.5}>
          <div className="relative bg-gradient-to-r from-charcoal-800 to-navy-900 rounded-2xl p-6 sm:p-8 md:p-12 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 text-center px-2">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-electric-400 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                Open to New Opportunities
              </h3>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Available for full-time roles, contract work, and project-based engagements. 
              Experienced in remote collaboration with teams across the globe.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("contact");
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
              }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-electric-600 text-white rounded-lg text-base sm:text-lg font-semibold hover:bg-electric-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Check Availability
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

