"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";
import { Star } from "lucide-react";
import Reveal from "./Reveal";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = {
    upwork1: {
      name: "Verified Upwork Client",
      role: "Business Owner",
      company: "Android Development",
      location: "International",
      text: "Ahmed Afzal helped fix Android Native apps quickly and efficiently. It was a pleasure working with him!",
      rating: 5,
      project: "Rebuild ready 3 Android Native apps",
    },
    upwork2: {
      name: "Verified Upwork Client",
      role: "Business Owner",
      company: "Android Development",
      location: "International",
      text: "Perfect work done by Ahmed, Highly recommended!",
      rating: 5,
      project: "I need an Android Developer",
    },
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-teal-500 text-teal-500"
          />
        ))}
      </div>
    );
  };


  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-teal-100/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-electric-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-900 mb-3 sm:mb-4">
              Trusted by Clients
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              See what agency owners and business leaders say about working with me.
            </p>
          </div>
        </Reveal>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Upwork Review 1 */}
          <Reveal delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-full"
            >
              <div className="flex flex-col h-full">
                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonials.upwork1.rating} />
                </div>

                {/* Testimonial Text */}
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 flex-grow">
                  &quot;{testimonials.upwork1.text}&quot;
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-charcoal-900">
                    {testimonials.upwork1.name}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {testimonials.upwork1.role} • Client from {testimonials.upwork1.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Upwork Review 2 */}
          <Reveal delay={0.3}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-full"
            >
              <div className="flex flex-col h-full">
                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonials.upwork2.rating} />
                </div>

                {/* Testimonial Text */}
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 flex-grow">
                  &quot;{testimonials.upwork2.text}&quot;
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-charcoal-900">
                    {testimonials.upwork2.name}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {testimonials.upwork2.role} • Client from {testimonials.upwork2.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

