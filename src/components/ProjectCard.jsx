import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  title,
  subtitle,
  role,
  description,
  image,
  stack = [],
  github,
  demo,
  badge = "Live Platform",
}) => {
  return (
    <div
      className="
        contact-card h-full min-h-[640px] relative overflow-hidden group
        bg-white/80 dark:bg-white/10
        backdrop-blur-xl shadow-lg rounded-3xl p-6 sm:p-8
        border border-white/40 dark:border-white/20
        flex flex-col justify-between
        hover:border-white/60 dark:hover:border-white/40
        transition-all duration-300
      "
    >
      {/* SHINE EFFECT */}
      <span
        className="
          absolute inset-0 bg-gradient-to-r 
          from-transparent via-white/40 dark:via-white/10 to-transparent
          opacity-0 group-hover:opacity-100
          translate-x-[-100%] group-hover:translate-x-[100%]
          transition-all duration-700 ease-out pointer-events-none
        "
      />

      <div>
        {/* IMAGE PREVIEW */}
        <div className="relative rounded-2xl overflow-hidden mb-6 bg-slate-900/5 dark:bg-black/40 h-60 sm:h-64 flex items-center justify-center border border-black/5 dark:border-white/10">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover sm:object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {badge && (
            <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-black/70 dark:bg-black/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center space-x-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{badge}</span>
            </span>
          )}
        </div>

        {/* ROLE / SUBTITLE */}
        {role && (
          <p className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-1 tracking-wide">
            {role}
          </p>
        )}

        {/* TITLE */}
        <h3 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 dark:text-white mb-3 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <div className="mb-6 space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          {Array.isArray(description) ? (
            description.map((point, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <span className="text-cyan-500 dark:text-cyan-400 mt-1 flex-shrink-0 text-xs">▹</span>
                <span>{point}</span>
              </div>
            ))
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>

      {/* FOOTER: TECH STACK + ACTION BUTTONS */}
      <div>
        {/* TECH STACK TAGS */}
        <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-black/5 dark:border-white/10">
          {stack.map((tech, i) => (
            <span
              key={i}
              className="
                bg-black/5 dark:bg-white/10 text-slate-800 dark:text-gray-200 
                px-3 py-1.5 rounded-xl text-xs font-medium border border-black/5 dark:border-white/10
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {/* GitHub Button */}
          {github && (
            <motion.button
              className="
                relative overflow-hidden group/button
                inline-flex items-center justify-center
                bg-white border border-white
                text-black font-semibold px-6 sm:px-8 py-3 rounded-full text-sm
                shadow-[0_0_15px_rgba(255,255,255,0.3)]
              "
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => window.open(github, "_blank")}
            >
              <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover/button:translate-x-0 transition-all duration-500" />
              <span className="relative z-10 flex items-center gap-2 group-hover/button:text-white">
                <FaGithub /> GitHub
              </span>
            </motion.button>
          )}

          {/* Live Demo Button */}
          {demo && (
            <motion.button
              className="
                relative overflow-hidden group/button
                inline-flex items-center justify-center
                bg-transparent border border-black dark:border-white
                text-black dark:text-white font-semibold px-6 sm:px-8 py-3 rounded-full text-sm
              "
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => window.open(demo, "_blank")}
            >
              <span className="absolute inset-0 bg-black dark:bg-white translate-x-[-100%] group-hover/button:translate-x-0 transition-all duration-500" />
              <span className="relative z-10 flex items-center gap-2 group-hover/button:text-white dark:group-hover/button:text-black">
                <FaExternalLinkAlt /> Live Demo
              </span>
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
