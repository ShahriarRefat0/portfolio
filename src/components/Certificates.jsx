import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

// Certificate Assets
import typescript from "../assets/typescritp.png";
import programhub from "../assets/ShahriarRahmanRefat-PH.png";
import freecodecamp from "../assets/freecodecamp.png";

gsap.registerPlugin(ScrollTrigger);

const CERTIFICATES_DATA = [
  {
    title: "TypeScript Complete Course",
    issuer: "Programming Hero",
    image: typescript,
    link: "https://drive.google.com/file/d/1LsqA6kxlosOxG4lLBUQL38f44CfnlK0l/view?usp=sharing",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Programming Hero",
    image: programhub,
    link: "https://drive.google.com/file/d/1f1x_sklWmd8I93HuM1xpHb9vlDmg4WR6/view?usp=drive_link",
  },
  {
    title: "freeCodeCamp Certification",
    issuer: "freeCodeCamp",
    image: freecodecamp,
    link: "https://www.freecodecamp.org/",
  },
];

const Certificates = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const section = containerRef.current;
      if (!section) return;

      // Title animation
      gsap.from(".cert-title", {
        opacity: 0,
        scale: 0.85,
        y: 20,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      });

      // Subtitle animation
      gsap.from(".cert-subtitle", {
        opacity: 0,
        y: 15,
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      });

      // Floating particles
      const particles = section.querySelectorAll(".particle");
      particles.forEach((p) => {
        gsap.to(p, {
          x: "+=" + gsap.utils.random(-120, 120),
          y: "+=" + gsap.utils.random(-120, 120),
          duration: gsap.utils.random(5, 10),
          ease: "sine.inOut",
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
      id="certificates"
      className="
        relative overflow-hidden 
        py-24
        px-4 sm:px-6 md:px-8 
        container mx-auto max-w-7xl
        font-display 
        bg-background-light dark:bg-background-dark 
        text-gray-800 dark:text-gray-200
      "
    >
      {/* BACKGROUND PARTICLES */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className="particle absolute w-2 h-2 bg-white/40 dark:bg-white/15 rounded-full blur-[2px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* HEADER */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="cert-title text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">
          {"<Certificates/>"}
        </h2>
        <p className="cert-subtitle text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Verified Credentials & Professional Certifications_
        </p>
      </div>

      {/* CERTIFICATES GRID */}
      <div
        className="
          relative z-10 grid 
          gap-8 sm:gap-10 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3
          justify-center
          mb-8
        "
      >
        {CERTIFICATES_DATA.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex flex-col h-full"
          >
            <div
              className="
                relative overflow-hidden group
                bg-white/80 dark:bg-white/10
                backdrop-blur-xl shadow-lg rounded-3xl 
                border border-white/40 dark:border-white/20
                hover:border-white/60 dark:hover:border-white/40
                h-full flex flex-col justify-between
                transition-all duration-300
              "
            >
              {/* SHINE EFFECT */}
              <span
                className="
                  absolute inset-0 bg-gradient-to-r 
                  from-transparent via-white/40 dark:via-white/15 to-transparent
                  opacity-0 group-hover:opacity-100
                  translate-x-[-100%] group-hover:translate-x-[100%]
                  transition-all duration-700 ease-out pointer-events-none
                "
              />

              {/* CERTIFICATE IMAGE */}
              <div className="relative overflow-hidden rounded-t-3xl bg-gray-100 dark:bg-black/30 h-64 sm:h-72 flex items-center justify-center p-2">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div className="mb-6">
                  {cert.issuer && (
                    <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-1.5 block">
                      {cert.issuer}
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 dark:text-white leading-snug">
                    {cert.title}
                  </h3>
                </div>

                {/* VIEW CERTIFICATE BUTTON */}
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative overflow-hidden group/button
                    inline-flex items-center justify-center
                    bg-white border border-white
                    text-black font-semibold px-8 py-3.5 rounded-full text-sm
                    shadow-[0_0_15px_rgba(255,255,255,0.3)]
                    w-full
                  "
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover/button:translate-x-0 transition-all duration-500" />
                  <span className="relative z-10 flex items-center justify-center gap-2 group-hover/button:text-white">
                    <FaExternalLinkAlt className="w-3.5 h-3.5" /> View Certificate
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
