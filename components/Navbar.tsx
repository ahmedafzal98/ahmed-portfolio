"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Work", id: "projects" },
    { label: "Services", id: "services" },
    { label: "Reviews", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  const handleEmailClick = () => {
    const email = "ahmed.afzal2070@gmail.com";
    const subject = encodeURIComponent("Project Inquiry - Ahmed Afzal Portfolio");
    const body = encodeURIComponent(
      "Hi Ahmed,\n\nI came across your portfolio and I'm interested in discussing a potential project.\n\nBest regards,"
    );
    // Use mailto: protocol to open email app on mobile or default email client on desktop
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-white/60 backdrop-blur-sm"
      }`}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%'
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo - Left: Clean Syntax Design */}
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="flex items-center group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Clean Code Syntax: <Ahmed.dev /> */}
            <div className="flex items-baseline">
              {/* Opening Bracket - Teal, Monospace, Slides Out on Hover */}
              <motion.span 
                className="text-base sm:text-lg md:text-xl font-mono text-teal-600"
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace' }}
                initial={{ x: 0 }}
                whileHover={{ x: -4 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
              >
                &lt;
              </motion.span>
              
              {/* Name - Dark Grey, Sans-Serif, Bold */}
              <span 
                className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-700 tracking-tight mx-0 group-hover:mx-1 transition-all duration-300"
                style={{ 
                  fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 800,
                  letterSpacing: '-0.02em'
                }}
              >
                Ahmed
              </span>
              
              {/* Dot - Teal, Monospace */}
              <span 
                className="text-base sm:text-lg md:text-xl font-mono text-teal-600"
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace' }}
              >
                .
              </span>
              
              {/* dev - Teal, Lighter Weight (Regular/Medium) for Hierarchy */}
              <span 
                className="text-base sm:text-lg md:text-xl font-mono text-teal-600 font-normal"
                style={{ 
                  fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                  fontWeight: 400
                }}
              >
                dev
              </span>
              
              {/* Closing Bracket - Teal, Monospace, Slides Out on Hover */}
              <motion.span 
                className="text-base sm:text-lg md:text-xl font-mono text-teal-600"
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace' }}
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
              >
                /&gt;
              </motion.span>
            </div>
          </motion.button>

          {/* Desktop Navigation - Center/Right */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* Navigation Links */}
            <div className="flex items-center gap-4 xl:gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-xs xl:text-sm font-medium text-charcoal-700 hover:text-electric-600 transition-colors duration-300 relative group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-600 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Email Link & CTA Button - Far Right */}
            <div className="flex items-center gap-3 xl:gap-4">
              <motion.button
                onClick={handleEmailClick}
                className="p-2 sm:p-2.5 text-charcoal-700 hover:text-electric-600 hover:bg-electric-50 rounded-lg transition-all duration-300 touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Send email"
                title="Send email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-electric-600 text-white rounded-lg font-semibold text-xs sm:text-sm hover:bg-electric-700 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Talk
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-charcoal-900 hover:text-electric-600 transition-colors touch-manipulation"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-2 text-charcoal-700 hover:text-electric-600 hover:bg-electric-50 rounded-lg transition-colors duration-300 font-medium"
                >
                  {link.label}
                </button>
              ))}
              <motion.button
                onClick={handleEmailClick}
                className="w-full px-4 py-2.5 bg-gray-100 text-charcoal-700 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                Send Email
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="w-full px-4 py-2.5 bg-electric-600 text-white rounded-lg font-semibold hover:bg-electric-700 transition-all duration-300 shadow-md"
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

