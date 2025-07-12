"use client";

import HeroSection from "@/components/HeroSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import TechStackSection from "@/components/TechStackSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import AboutVideoSection from "@/components/AboutVideoSection";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <>
      <HeroSection scrollToContact={scrollToContact} />
      <WhatIDoSection />
      <Projects />
      <TechStackSection />
      <AboutVideoSection scrollToContact={scrollToContact} />
      <PortfolioSection />
      <ContactForm ref={contactRef} />
      <Footer />
    </>
  );
}
