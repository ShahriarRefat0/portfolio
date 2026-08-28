import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

// Category Icons
import { LuMonitor, LuServer, LuCloud, LuWrench } from "react-icons/lu";
import { TbSparkles } from "react-icons/tb";

// Frontend Icons
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiReactrouter,
} from "react-icons/si";

// Backend Icons
import {
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiFirebase,
  SiPrisma,
  SiMongoose,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";

// DevOps & Cloud Icons
import {
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiVercel,
  SiNetlify,
  SiGithubactions,
} from "react-icons/si";

// Tools & Libraries Icons
import {
  SiPostman,
  SiFigma,
  SiAxios,
  SiReactquery,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "FRONTEND",
    icon: LuMonitor,
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#00eaff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "React Router", icon: SiReactrouter, color: "#CA4245" },
    ],
  },
  {
    id: "backend",
    title: "BACKEND & DATABASES",
    icon: LuServer,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#9ca3af" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Prisma", icon: SiPrisma, color: "#38BDF8" },
      { name: "Mongoose", icon: SiMongoose, color: "#E53E3E" },
    ],
  },
  {
    id: "devops",
    title: "DEVOPS & CLOUD",
    icon: LuCloud,
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#9ca3af" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Vercel", icon: SiVercel, color: "#00eaff" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
    ],
  },
  {
    id: "tools",
    title: "TOOLS & ARCHITECTURE",
    icon: LuWrench,
    skills: [
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "React-Query", icon: SiReactquery, color: "#FF4154" },
      { name: "Axios", icon: SiAxios, color: "#5A29E4" },
      { name: "Agentic AI", icon: TbSparkles, color: "#10A37F" },
    ],
  },
];

// Reusable individual skill pill with dynamic real-color hover
const SkillPill = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className="
        relative overflow-hidden group/pill flex items-center space-x-2.5
        px-3.5 py-3 rounded-xl
        bg-black/5 dark:bg-white/10
        border border-black/10 dark:border-white/20
        hover:border-black/30 dark:hover:border-white/40
        hover:bg-black/10 dark:hover:bg-white/15
        hover:shadow-md
        transition-all duration-300 cursor-default
      "
    >
      <Icon
        className="text-xl flex-shrink-0 transition-all duration-300 text-slate-700 dark:text-slate-300"
        style={{
          color: isHovered ? skill.color : undefined,
          filter: isHovered ? `drop-shadow(0 0 10px ${skill.color}90)` : "none",
        }}
      />
      <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 group-hover/pill:text-black dark:group-hover/pill:text-white transition-colors truncate">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const section = containerRef.current;
      if (!section) return;

      // Section headers animation (fires once reliably)
      gsap.from(".skills-header", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      });

      // Ambient particle floating
      const particles = section.querySelectorAll(".skill-particle");
      particles.forEach((p) => {
        gsap.to(p, {
          x: "+=" + gsap.utils.random(-80, 80),
          y: "+=" + gsap.utils.random(-80, 80),
          duration: gsap.utils.random(6, 12),
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
      id="skills"
      className="relative pt-24 pb-20 container mx-auto max-w-7xl px-4 sm:px-6 overflow-hidden"
    >
      {/* Ambient background particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className="skill-particle absolute w-2 h-2 bg-white/20 dark:bg-white/15 rounded-full blur-[2px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="text-center mb-14 sm:mb-16">
        <h2 className="skills-header text-3xl sm:text-4xl md:text-5xl font-bold font-display text-black dark:text-white tracking-tight">
          {"<Skills/>"}
        </h2>
        <p className="skills-header text-gray-500 dark:text-gray-400 mt-3 text-base sm:text-lg">
          Technical Stack & Capabilities_
        </p>
      </div>

      {/* 2x2 Grid of Categorized Skill Cards styled consistently */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="
              relative overflow-hidden group
              bg-white/80 dark:bg-white/10
              backdrop-blur-xl shadow-lg rounded-2xl p-6 sm:p-8
              border border-white/40 dark:border-white/20
              hover:border-white/60 dark:hover:border-white/40
              transition-all duration-300 flex flex-col justify-between
            "
          >
            {/* SHINE EFFECT (Matching Project Card) */}
            <span
              className="
                absolute inset-0 bg-gradient-to-r 
                from-transparent via-white/40 dark:via-white/15 to-transparent
                opacity-0 group-hover:opacity-100
                translate-x-[-100%] group-hover:translate-x-[100%]
                transition-all duration-700 ease-out pointer-events-none
              "
            />

            {/* Card Top Header */}
            <div>
              <div className="relative z-10 flex items-center justify-between pb-5 border-b border-black/10 dark:border-white/15">
                <div className="flex items-center space-x-3">
                  {category.icon && (
                    <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/10 flex items-center justify-center text-slate-800 dark:text-white border border-black/5 dark:border-white/15 shadow-sm">
                      <category.icon className="text-base" />
                    </div>
                  )}
                  <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-slate-900 dark:text-white uppercase bg-black/5 dark:bg-white/15 px-3 py-1 rounded-lg border border-black/5 dark:border-white/20">
                    {category.title}
                  </span>
                </div>
                <span className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 text-xs font-mono font-semibold flex items-center justify-center text-slate-700 dark:text-slate-300">
                  {category.skills.length}
                </span>
              </div>

              {/* Skills Pills Grid */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6">
                {category.skills.map((skill) => (
                  <SkillPill key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
