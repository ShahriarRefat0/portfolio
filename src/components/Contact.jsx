import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaInstagram, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // HEADER + CARD ANIMATION
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })
        .from(".contact-header", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        })
        .from(
          ".contact-card",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4"
        );

      // ⭐ CONTINUOUS FLOATING PARTICLES
      containerRef.current.querySelectorAll(".particle").forEach((p) => {
        gsap.to(p, {
          x: "+=" + gsap.utils.random(-150, 150),
          y: "+=" + gsap.utils.random(-150, 150),
          duration: gsap.utils.random(6, 12),
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative overflow-hidden font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200"
    >
      {/* BACKGROUND PARTICLES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="particle absolute w-2 h-2 bg-white/40 rounded-full blur-[2px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl w-full mx-auto">

          {/* HEADER */}
          <header className="mb-12 lg:mb-20 relative text-right">
            <h1
              aria-hidden="true"
              className="
                contact-header text-5xl sm:text-7xl lg:text-9xl
                font-bold text-gray-200 dark:text-gray-800
                absolute inset-0 flex items-center justify-center
                -z-10 select-none opacity-50
              "
            >
              Contact
            </h1>

            <h2 className="contact-header text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white">
              {"{Get In Touch}"}
            </h2>

            <p className="contact-header mt-4 text-gray-600 dark:text-gray-400">
              Feel free to reach out — always open to work, <br /> collaborations, or a friendly chat.
            </p>
          </header>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* LEFT COLUMN */}
            <div className="space-y-8">

              {/* CONTACT INFO CARD */}
              <div className="
                contact-card relative overflow-hidden group
                bg-white/80 dark:bg-white/10
                backdrop-blur-xl shadow-lg rounded-2xl p-8
                border border-white/40
              ">
                {/* SHINE */}
                <span className="
                  absolute inset-0 bg-gradient-to-r 
                  from-transparent via-white/40 to-transparent
                  opacity-0 group-hover:opacity-100
                  translate-x-[-100%] group-hover:translate-x-[100%]
                  transition-all duration-700 ease-out pointer-events-none
                "></span>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">

                  {/* EMAIL */}
                  <div className="flex items-start space-x-4">
                    <div className="
                      w-12 h-12 flex items-center justify-center
                      bg-black dark:bg-white rounded-full
                      text-white dark:text-black
                      transition-all duration-300
                      hover:bg-black hover:text-white
                      hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]
                    ">
                      <span className="material-icons-outlined">email</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <a href="mailto:shahariarrefat@gmail.com" className="text-lg font-semibold">
                        shahariarrefat@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-start space-x-4">
                    <div className="
                      w-12 h-12 flex items-center justify-center
                      bg-black dark:bg-white rounded-full
                      text-white dark:text-black
                      transition-all duration-300
                      hover:bg-black hover:text-white
                      hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]
                    ">
                      <span className="material-icons-outlined">phone</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <a href="tel:+8801793772245" className="text-lg font-semibold">
                        +880 1793 772 245
                      </a>
                    </div>
                  </div>

                  {/* LOCATION */}
                  <div className="flex items-start space-x-4">
                    <div className="
                      w-12 h-12 flex items-center justify-center
                      bg-black dark:bg-white rounded-full
                      text-white dark:text-black
                      transition-all duration-300
                      hover:bg-black hover:text-white
                      hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]
                    ">
                      <span className="material-icons-outlined">location_on</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="text-lg font-semibold">Rangpur, Bangladesh</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="
                contact-card relative overflow-hidden group
                bg-white/80 dark:bg-white/10
                backdrop-blur-xl shadow-lg rounded-2xl p-8
                border border-white/40
              ">
                <span className="
                  absolute inset-0 bg-gradient-to-r 
                  from-transparent via-white/40 to-transparent
                  opacity-0 group-hover:opacity-100
                  translate-x-[-100%] group-hover:translate-x-[100%]
                  transition-all duration-700 ease-out pointer-events-none
                "></span>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                  Follow Me
                </h3>

                <div className="flex space-x-4">

                  {/* Instagram */}
                  <a href="https://www.instagram.com/shahriar_refat/"
                    className="w-12 h-12 flex items-center justify-center
                      bg-black dark:bg-white rounded-full
                      text-white dark:text-black transition-all duration-300
                      hover:bg-black hover:text-white
                      hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]
                    ">
                    <FaInstagram className="text-xl" />
                  </a>

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/shahriar-refat/"
                    className="w-12 h-12 flex items-center justify-center
                      bg-black dark:bg-white rounded-full
                      text-white dark:text-black transition-all duration-300
                      hover:bg-black hover:text-white
                      hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]
                    ">
                    <FaLinkedinIn className="text-xl" />
                  </a>

                  {/* X */}
                  <a href="#"
                    className="w-12 h-12 flex items-center justify-center
                      bg-black dark:bg-white rounded-full
                      text-white dark:text-black transition-all duration-300
                      hover:bg-black hover:text-white
                      hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]
                    ">
                    <FaXTwitter className="text-xl" />
                  </a>

                </div>
              </div>

            </div>

            {/* RIGHT COLUMN — CONTACT FORM */}
            <div className="
              contact-card relative overflow-hidden group/card
              bg-white/80 dark:bg-white/10
              backdrop-blur-xl shadow-lg rounded-2xl p-8
              border border-white/40
            ">
              {/* Shine */}
              <span className="
                absolute inset-0 bg-gradient-to-r 
                from-transparent via-white/40 to-transparent
                opacity-0 group-hover/card:opacity-100
                translate-x-[-100%] group-hover/card:translate-x-[100%]
                transition-all duration-700 ease-out pointer-events-none
              "></span>

              <form className="space-y-6">

                {/* NAME */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg
                      bg-white dark:bg-black border border-gray-300 dark:border-gray-700
                      text-black dark:text-white focus:outline-none
                      focus:ring-2 focus:ring-black dark:focus:ring-white
                      transition-shadow
                    "
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg
                      bg-white dark:bg-black border border-gray-300 dark:border-gray-700
                      text-black dark:text-white focus:outline-none
                      focus:ring-2 focus:ring-black dark:focus:ring-white
                      transition-shadow
                    "
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Your message…"
                    className="w-full px-4 py-3 rounded-lg
                      bg-white dark:bg-black border border-gray-300 dark:border-gray-700
                      text-black dark:text-white focus:outline-none
                      focus:ring-2 focus:ring-black dark:focus:ring-white
                      transition-shadow h-32
                    "
                  ></textarea>
                </div>

                {/* SUBMIT BUTTON */}
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.button
                    className="relative overflow-hidden group/button
                      inline-flex items-center justify-center
                      bg-white border border-white
                      text-black font-semibold px-10 py-4 rounded-full
                      shadow-[0_0_15px_rgba(255,255,255,0.3)]
                    "
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="absolute inset-0 bg-black
                      translate-x-[-100%] group-hover/button:translate-x-0
                      transition-all duration-500 ease-out
                    "></span>

                    <span className="absolute inset-0 bg-black
                      translate-x-[100%] group-hover/button:translate-x-0
                      transition-all duration-500 ease-out
                    "></span>

                    <span className="relative z-10 group-hover/button:text-white transition-all">
                      Send Message
                    </span>

                    <motion.span
                      className="relative z-10 ml-2 group-hover/button:text-white"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    >
                      <FaPaperPlane className="text-lg" />
                    </motion.span>
                  </motion.button>
                </motion.div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
