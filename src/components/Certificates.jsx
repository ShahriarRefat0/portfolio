import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import typescript from "../assets/typescritp.png";
import programhub from "../assets/ShahriarRahmanRefat-PH.png";

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Title animation
      gsap.from(".cert-title", {
        opacity: 0,
        scale: 0.8,
        y: 20,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Subtitle animation
      gsap.from(".cert-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Cards animation
      gsap.from(".cert-card", {
        opacity: 0,
        scale: 0.85,
        y: 30,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Floating particles
      const particles = containerRef.current.querySelectorAll(".particle");
      particles.forEach((p) => {
        gsap.to(p, {
          x: "+=" + gsap.utils.random(-120, 120),
          y: "+=" + gsap.utils.random(-120, 120),
          duration: gsap.utils.random(5, 10),
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
      });
    },
    { scope: containerRef }
  );

  const certificates = [
    {
      title: "TypeScript Complete Course",
      image: typescript,
      link: "https://drive.google.com/file/d/1LsqA6kxlosOxG4lLBUQL38f44CfnlK0l/view?usp=sharing",
    },
    {
      title: "Programming Hub - Full Stack Web Development",
      image: programhub,
      link: "https://drive.google.com/file/d/1f1x_sklWmd8I93HuM1xpHb9vlDmg4WR6/view?usp=drive_link",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="certificates"
      className="
        relative overflow-hidden 
        pt-36
        px-4 sm:px-6 md:px-8 
        container mx-auto max-w-7xl
        font-display 
        bg-background-light dark:bg-background-dark 
        text-gray-800 dark:text-gray-200
      "
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

      {/* HEADER */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="cert-title text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">
          {"<Certificates>"}
        </h2>
        <p className="cert-subtitle text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Professional Certifications_
        </p>
      </div>

      {/* CERTIFICATES GRID */}
      <div
        className="
          relative z-10 grid 
          gap-10 sm:gap-12 
          grid-cols-1 
          sm:grid-cols-2 
          justify-center
          mb-8
        "
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="cert-card"
          >
            <div
              className="
                relative overflow-hidden group
                bg-white/80 dark:bg-white/10
                backdrop-blur-xl shadow-lg rounded-2xl 
                border border-white/40
                h-full flex flex-col
              "
            >
              {/* SHINE EFFECT */}
              <span
                className="
                  absolute inset-0 bg-gradient-to-r 
                  from-transparent via-white/40 to-transparent
                  opacity-0 group-hover:opacity-100
                  translate-x-[-100%] group-hover:translate-x-[100%]
                  transition-all duration-700 ease-out pointer-events-none
                "
              ></span>

              {/* CERTIFICATE IMAGE */}
              <div className="relative overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-white/5">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {cert.title}
                </h3>

                {/* VIEW CERTIFICATE BUTTON */}
 <motion.a
   href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
              className="
            relative overflow-hidden group/button
            inline-flex items-center justify-center
            bg-white border border-white
            text-black font-semibold px-10 py-4 rounded-full
            shadow-[0_0_15px_rgba(255,255,255,0.3)]
          "
              whileHover={{ scale: 1.05 }}
            //   onClick={() => window.open( "_blank")}
            >
              {/* Hover Sliders */}
              <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover/button:translate-x-0 transition-all duration-500"></span>
              <span className="absolute inset-0 bg-black translate-x-[100%] group-hover/button:translate-x-0 transition-all duration-500"></span>

              <span className="relative z-10 flex items-center gap-2 group-hover/button:text-white">
                <FaExternalLinkAlt className="w-4 h-4"/> View Certificate
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
