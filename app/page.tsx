import dynamic from "next/dynamic";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load components below the fold for better initial load performance
// Using Suspense for better loading states
const AboutMe = dynamic(() => import("@/components/AboutMe"), {
  loading: () => null,
  ssr: true, // Enable SSR for SEO
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => null,
  ssr: true,
});
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => null,
  ssr: true,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => null,
  ssr: true,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => null,
  ssr: true,
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

