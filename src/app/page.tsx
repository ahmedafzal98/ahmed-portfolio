import HeroSection from "@/components/HeroSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import TechStackSection from "@/components/TechStackSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatIDoSection />
      <TechStackSection />
      <PortfolioSection />
      <ContactForm />
      <Footer />
    </>
  );
}
