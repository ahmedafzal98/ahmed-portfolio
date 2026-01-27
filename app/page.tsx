import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load components below the fold for better initial load performance
const AboutMe = dynamic(() => import("@/components/AboutMe"), {
  loading: () => null,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => null,
});
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => null,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => null,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => null,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}

