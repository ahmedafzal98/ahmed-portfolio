"use client";

import React, { useState, forwardRef } from "react";
import { z } from "zod";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import confetti from "canvas-confetti";

import bg_ahmed from "../../public/assets/images/bg-ahmed-image.png";
import morflax from "../../public/assets/images/morflax.png";

// Define zod schema
const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  message: z.string().min(1, "Message is required"),
});

const ContactForm = forwardRef<HTMLDivElement>((props, ref) => {
  const [UserData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const ContactFormHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");
    setIsSubmitting(true);

    const result = ContactSchema.safeParse(UserData);

    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UserData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess("Message sent successfully!");
        setUserData({ name: "", email: "", message: "" });
        triggerConfetti();
      } else {
        setErrors({ api: data.error || "Something went wrong" });
      }
    } catch {
      setErrors({ api: "Failed to send. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="relative bg-[#6805F1] h-[700px] p-4 mt-[8%] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background images */}
      <Image
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full object-cover opacity-40"
        src={bg_ahmed}
        alt="Background Image Ahmed"
      />
      <Image
        className="absolute bottom-10 left-[45%] transform -translate-x-1/2 object-contain opacity-80 w-[250px] md:w-[440px]"
        src={morflax}
        width={440}
        height={370}
        alt="Morflax Image"
      />

      <div
        id="contact"
        className="relative z-10 h-full w-full border border-white rounded-2xl flex items-center justify-center"
      >
        <div className="w-[90%] flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Section */}
          <motion.div
            className="space-y-5 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="flex flex-col font-spaceGrotesk text-3xl sm:text-4xl md:text-6xl font-semibold leading-[1.1] text-white">
              <Typewriter
                words={["Looking to Work", "Together?"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>

            <span className="font-workSans text-sm sm:text-base md:text-[18px] font-normal text-[#F0EFEF]">
              Great to see you here! I’m always eager{" "}
              <br className="hidden sm:block" />
              to discuss new projects or just geek out{" "}
              <br className="hidden sm:block" />
              about digital marketing
            </span>

            <div className="flex mt-6 items-center justify-center md:justify-start gap-3">
              <div className="w-3 h-3 bg-[#93F203] rounded-full"></div>
              <span className="uppercase font-spaceGrotesk text-[14px] sm:text-[16px] md:text-[20px] font-medium text-white">
                Available for work
              </span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={ContactFormHandler}
            className="w-full md:w-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Name + Email */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex flex-col w-full md:w-[330px]">
                <span className="opacity-80 text-white">Name</span>
                <input
                  type="text"
                  value={UserData.name}
                  onChange={(e) =>
                    setUserData({ ...UserData, name: e.target.value })
                  }
                  className="text-black pl-5 mt-1 h-[55px] sm:h-[65px] md:h-[70px] rounded-md bg-white w-full focus:outline-none"
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col w-full md:w-[330px]">
                <span className="opacity-80 text-white">Email</span>
                <input
                  type="email"
                  value={UserData.email}
                  onChange={(e) =>
                    setUserData({ ...UserData, email: e.target.value })
                  }
                  className="text-black pl-5 mt-1 h-[55px] sm:h-[65px] md:h-[70px] rounded-md bg-white w-full focus:outline-none"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <span className="opacity-80 text-white">Message</span>
              <textarea
                rows={4}
                value={UserData.message}
                onChange={(e) =>
                  setUserData({ ...UserData, message: e.target.value })
                }
                className="text-black pl-5 pt-2 mt-1 h-[120px] sm:h-[140px] rounded-md bg-white focus:outline-none"
                placeholder="Message"
              />
              {errors.message && (
                <p className="text-red-700 font-bold text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {errors.api && (
              <p className="text-red-700 font-bold text-center mt-4">
                {errors.api}
              </p>
            )}
            {success && (
              <p className="text-green-600 text-[20px] opacity-100 font-bold text-center mt-4">
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-6 md:w-full ${
                isSubmitting ? "opacity-60 cursor-not-allowed" : ""
              } bg-[#93F203] text-black hover:text-white transition-all ease-in-out cursor-pointer h-12 sm:h-14 flex items-center justify-center rounded-full text-sm sm:text-base`}
            >
              {isSubmitting ? "Sending..." : "SEND"}
            </button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;
