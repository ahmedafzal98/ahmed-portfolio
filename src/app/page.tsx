import HeroSection from "@/components/HeroSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import TechStackSection from "@/components/TechStackSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import AboutVideoSection from "@/components/AboutVideoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatIDoSection />
      <Projects />
      <TechStackSection />
      <AboutVideoSection />
      <PortfolioSection />
      <ContactForm />
      <Footer />
    </>
  );
}
