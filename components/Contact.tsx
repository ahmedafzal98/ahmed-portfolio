"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Linkedin,
  MapPin,
  Send,
  Github,
  ExternalLink,
  Briefcase,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration
      const serviceId = "service_zdqd973";
      const templateId = "template_3izoml6";
      const publicKey = "35zDPFRcIfMdFFeqP";

      // Prepare template parameters
      // Template variables must match exactly: {{from_name}}, {{from_email}}, {{project_type}}, {{message}}
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.inquiryType, // Note: form field is "inquiryType" but template expects "project_type"
        message: formData.message,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("EmailJS response:", response);

      // Success - clear form and show success message
      setSubmitStatus("success");
      setFormData({ name: "", email: "", inquiryType: "", message: "" });
    } catch (error: any) {
      console.error("Form submission error:", error);
      console.error("Error details:", {
        status: error?.status,
        text: error?.text,
        message: error?.message,
      });
      
      // Show more specific error message
      setSubmitStatus("error");
      
      // Log helpful debugging info
      if (error?.status === 400) {
        console.error(
          "400 Bad Request - Common causes:\n" +
          "1. Template variable names don't match\n" +
          "2. Template ID is incorrect\n" +
          "3. Required fields missing in template\n" +
          "Please check your EmailJS template configuration."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative bg-gradient-to-b from-charcoal-900 via-navy-900 to-charcoal-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Whether you need a Full Stack Engineer for your team or an AI
            solution for your business, I am ready to help.
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          {/* Left Column: Direct Contact Info (For HR) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Direct Contact
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                Get in touch directly for project inquiries, collaboration opportunities, or role discussions.
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-electric-600/20 rounded-lg">
                <Mail className="w-6 h-6 text-electric-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <a
                  href="mailto:ahmed.afzal2070@gmail.com?subject=Project Inquiry - Ahmed Afzal Portfolio&body=Hi Ahmed,%0A%0AI came across your portfolio and I'm interested in discussing a potential project.%0A%0ABest regards,"
                  className="text-electric-400 hover:text-electric-300 transition-colors font-medium"
                >
                  ahmed.afzal2070@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-electric-600/20 rounded-lg">
                <Linkedin className="w-6 h-6 text-electric-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/ahmedafzal-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric-400 hover:text-electric-300 transition-colors font-medium inline-flex items-center gap-1"
                >
                  linkedin.com/in/ahmedafzal-dev
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-electric-600/20 rounded-lg">
                <Github className="w-6 h-6 text-electric-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">GitHub</p>
                <a
                  href="https://github.com/ahmedafzal98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric-400 hover:text-electric-300 transition-colors font-medium inline-flex items-center gap-1"
                >
                  github.com/ahmedafzal98
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Upwork */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-600/20 rounded-lg">
                <Briefcase className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Upwork Profile</p>
                <a
                  href="https://www.upwork.com/freelancers/~01c4878170bab8029f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors font-medium inline-flex items-center gap-1"
                >
                  View My Upwork Profile
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-xs text-gray-500 mt-1">Verified Freelancer • 100% Job Success</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-electric-600/20 rounded-lg">
                <MapPin className="w-6 h-6 text-electric-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Location</p>
                <p className="text-gray-300">
                  Based in Pakistan. Available for Remote Work globally
                  (US, UK, Gulf).
                </p>
                <p className="text-sm text-electric-400 mt-2 font-medium">
                  Working Hours: Available during UK & EU Business Hours (BST/CET)
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form (For Clients) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                {/* Circular Avatar - "Live Agent" Effect */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-electric-500/50 shadow-lg flex-shrink-0">
                  <Image
                    src="/profile-photo.png"
                    alt="Ahmed Afzal"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center top' }}
                    loading="lazy"
                    quality={75}
                    sizes="64px"
                    onError={(e) => {
                      // Hide image if it fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    Start a Conversation
                  </h3>
                  <p className="text-xs sm:text-sm text-electric-400 flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Available now
                  </p>
                </div>
              </div>
                  <p className="text-gray-300">
                    Share your project details, role requirements, or collaboration ideas, and I&apos;ll get back to you
                    within 24 hours.
                  </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-4 py-3 sm:py-3.5 bg-charcoal-800/50 border border-teal-500/30 rounded-lg text-white text-base sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400 transition-all backdrop-blur-sm touch-manipulation"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-4 py-3 sm:py-3.5 bg-charcoal-800/50 border border-teal-500/30 rounded-lg text-white text-base sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400 transition-all backdrop-blur-sm touch-manipulation"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label
                  htmlFor="inquiryType"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-charcoal-800/50 border border-teal-500/30 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400 transition-all backdrop-blur-sm"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="fulltime">Full-time Employment Opportunity</option>
                  <option value="contract">Contract/Project-based Work</option>
                  <option value="freelance">
                    Freelance Project (Web/Mobile/AI)
                  </option>
                  <option value="ai">AI Automation Solution</option>
                  <option value="collaboration">Technical Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-charcoal-800/50 border border-teal-500/30 rounded-lg text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400 transition-all resize-none backdrop-blur-sm"
                  placeholder="Tell me a bit about the project scope or the role..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-5 sm:px-6 py-2.5 sm:py-3 bg-electric-600 text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-electric-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm"
                >
                  Message sent successfully! I&apos;ll get back to you within 24 hours.
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm"
                >
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-teal-500/20 py-6 sm:py-8 bg-charcoal-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2026 Ahmed Afzal. All Rights Reserved.
            </p>

            {/* Social Icons & Tech Badge */}
            <div className="flex items-center gap-6">
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/ahmedafzal98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-electric-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/ahmedafzal-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-electric-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01c4878170bab8029f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label="Upwork"
                >
                  <Briefcase className="w-5 h-5" />
                </a>
              </div>

              {/* Divider */}
              <div className="h-6 w-px bg-teal-500/30" />

              {/* Tech Badge */}
              <p className="text-gray-400 text-xs font-mono">
                Built with Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

