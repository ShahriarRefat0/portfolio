import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBuilding,
  FaExternalLinkAlt,
  FaLaptopCode,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

// Default experience data (can be overridden via props for full reusability)
const DEFAULT_EXPERIENCES = [
  {
    id: 1,
    role: "Backend Developer",
    company: "Rise Together",
    companyUrl: "",
    period: "Jun 2026 - Present",
    location: "Remote",
    type: "Remote",
    isCurrent: true,
    description: [
      "Developed and maintained secure, scalable backend services for a real-world SaaS application, focusing on authentication, authorization, and core business features.",
      "Worked with the team to ship production features, review code, and ensure performance and reliability.",
      "Conducted technical sessions for intern developers, introducing industry-standard project setup, Redis, CI/CD, and Docker, while helping them understand practical backend development and development workflows.",
    ],
    skills: ["Node.js", "Express.js", "Redis", "Docker", "CI/CD", "Authentication", "SaaS"],
  },
  {
    id: 2,
    role: "Full Stack Web Developer (Intern)",
    company: "Dept of ICT, Lakshmipur",
    companyUrl: "",
    period: "Feb 2026 - May 2026",
    location: "Lakshmipur, Bangladesh",
    type: "Internship",
    isCurrent: false,
    description: [
      "Developed full-stack web applications using the MERN stack.",
      "Built secure APIs with authentication and role-based access.",
      "Collaborated with the team to improve application performance and user experience.",
    ],
    skills: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "RBAC"],
  },
];

/**
 * Reusable Experience Section Component
 *
 * @param {Object} props
 * @param {Array} [props.experiences] - Custom experience items array
 * @param {string} [props.title] - Section title (default: "<Experience/>")
 * @param {string} [props.subtitle] - Section subtitle (default: "Career Journey & Work History_")
 * @param {string} [props.id] - Section container id (default: "experience")
 * @param {string} [props.className] - Additional class names for container
 */
const Experience = ({
  experiences = DEFAULT_EXPERIENCES,
  title = "<Experience/>",
  subtitle = "Career Journey & Work History_",
  id = "experience",
  className = "",
}) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const section = containerRef.current;
      if (!section) return;

      // Title animation
      gsap.from(".exp-title", {
        opacity: 0,
        scale: 0.85,
        y: 20,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Subtitle animation
      gsap.from(".exp-subtitle", {
        opacity: 0,
        y: 15,
        duration: 0.8,
        delay: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Experience timeline cards animation
      gsap.from(".exp-card", {
        opacity: 0,
        y: 35,
        scale: 0.92,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Floating ambient particles animation
      const particles = section.querySelectorAll(".exp-particle");
      particles.forEach((p) => {
        gsap.to(p, {
          x: "+=" + gsap.utils.random(-80, 80),
          y: "+=" + gsap.utils.random(-80, 80),
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
      id={id}
      className={`relative container mx-auto max-w-7xl px-4 sm:px-6 py-20 overflow-hidden ${className}`}
    >
      {/* Ambient background particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="exp-particle absolute w-2 h-2 bg-cyan-400/30 dark:bg-white/20 rounded-full blur-[2px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Section Header */}
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="exp-title text-3xl sm:text-4xl md:text-5xl font-bold font-display text-black dark:text-white tracking-tight">
          {title}
        </h2>
        <p className="exp-subtitle text-gray-600 dark:text-gray-400 mt-3 text-base sm:text-lg">
          {subtitle}
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Central timeline neon line (visible on md+) */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-8 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-500/80 via-white/30 to-transparent dark:from-cyan-400/80 dark:via-white/20 shadow-[0_0_12px_rgba(0,234,255,0.4)]" />

        {/* Left timeline line for mobile */}
        <div className="md:hidden absolute left-5 top-4 bottom-8 w-[2px] bg-gradient-to-b from-cyan-500/80 via-black/20 to-transparent dark:via-white/20" />

        {/* Experience Items List */}
        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.id || index}
                className={`exp-card relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center / Mobile Timeline Indicator Node */}
                <div
                  className="
                    absolute left-5 md:left-1/2 -translate-x-1/2 top-6 z-20
                    w-7 h-7 sm:w-8 sm:h-8 rounded-full
                    bg-white dark:bg-black
                    border-2 border-cyan-500 dark:border-cyan-400
                    flex items-center justify-center
                    shadow-[0_0_15px_rgba(0,234,255,0.6)]
                  "
                >
                  <FaBriefcase className="text-cyan-500 dark:text-cyan-400 text-xs sm:text-sm" />
                </div>

                {/* Card Content Wrapper */}
                <div
                  className={`w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0 ${
                    isEven ? "md:text-left" : "md:text-left"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="
                      relative overflow-hidden group
                      bg-white/80 dark:bg-white/10
                      backdrop-blur-xl
                      rounded-2xl p-6 sm:p-8
                      border border-black/10 dark:border-white/20
                      hover:border-cyan-500/60 dark:hover:border-cyan-400/60
                      shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_0_30px_rgba(255,255,255,0.05)]
                      hover:shadow-[0_0_35px_rgba(0,234,255,0.18)]
                      transition-all duration-300
                    "
                  >
                    {/* Hover Shine Effect */}
                    <span
                      className="
                        absolute inset-0 bg-gradient-to-r
                        from-transparent via-white/30 dark:via-white/10 to-transparent
                        opacity-0 group-hover:opacity-100
                        translate-x-[-100%] group-hover:translate-x-[100%]
                        transition-all duration-700 ease-out pointer-events-none
                      "
                    />

                    {/* Top Badges: Period & Status */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                        <FaCalendarAlt className="text-[10px]" />
                        <span>{exp.period}</span>
                      </span>

                      {exp.isCurrent && (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Current Role</span>
                        </span>
                      )}

                      {exp.type && !exp.isCurrent && (
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded bg-black/5 dark:bg-white/5">
                          {exp.type}
                        </span>
                      )}
                    </div>

                    {/* Role Title */}
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 dark:text-white mb-1 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>

                    {/* Company & Location */}
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 font-semibold text-black dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                        >
                          <FaBuilding className="text-xs opacity-70" />
                          <span>{exp.company}</span>
                          <FaExternalLinkAlt className="text-[10px] opacity-70" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center space-x-1 font-semibold text-black dark:text-white">
                          <FaBuilding className="text-xs opacity-70" />
                          <span>{exp.company}</span>
                        </span>
                      )}

                      {exp.location && (
                        <span className="inline-flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                          <FaMapMarkerAlt className="text-[10px]" />
                          <span>{exp.location}</span>
                        </span>
                      )}
                    </div>

                    {/* Description bullet points */}
                    <div className="space-y-2 mb-6">
                      {Array.isArray(exp.description) ? (
                        exp.description.map((point, i) => (
                          <div key={i} className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            <span className="text-cyan-500 dark:text-cyan-400 mt-1 flex-shrink-0">▹</span>
                            <span>{point}</span>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                      )}
                    </div>

                    {/* Tech Stack Chips */}
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-black/5 dark:border-white/10">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="
                              text-xs font-medium px-2.5 py-1 rounded-lg
                              bg-black/5 dark:bg-white/10
                              text-slate-800 dark:text-gray-200
                              border border-black/5 dark:border-white/10
                              hover:border-cyan-500/40 transition-colors
                            "
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
