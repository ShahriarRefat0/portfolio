import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, image, stack, github, demo }) => {
  return (
    <div
      className="
        contact-card min-h-[700px] relative overflow-hidden group
        bg-white/80 dark:bg-white/10
        backdrop-blur-xl shadow-lg rounded-2xl p-8
        border border-white/40 flex flex-col justify-between
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

      {/* IMAGE */}
      <div className="rounded-xl overflow-hidden mb-6 group bg-gray-100 dark:bg-white h-64 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      
              {/* TITLE */}
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {description}
          </p>
  



          {/* TECH STACK TAGS */}
          <div className="flex flex-wrap gap-3 mb-8">
            {stack.map((tech, i) => (
              <span
                key={i}
                className="
              bg-black/80 dark:bg-white/10 text-white dark:text-gray-200 
              px-4 py-2 rounded-xl text-sm font-medium
            "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* GitHub Button */}
            <motion.button
              className="
            relative overflow-hidden group/button
            inline-flex items-center justify-center
            bg-white border border-white
            text-black font-semibold px-10 py-4 rounded-full
            shadow-[0_0_15px_rgba(255,255,255,0.3)]
          "
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(github, "_blank")}
            >
              {/* Hover Sliders */}
              <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover/button:translate-x-0 transition-all duration-500"></span>
              <span className="absolute inset-0 bg-black translate-x-[100%] group-hover/button:translate-x-0 transition-all duration-500"></span>

              <span className="relative z-10 flex items-center gap-2 group-hover/button:text-white">
                <FaGithub /> GitHub
              </span>
            </motion.button>

            {/* Live Demo Button */}
            <motion.button
              className="
            relative overflow-hidden group/button
            inline-flex items-center justify-center
            bg-transparent border border-black dark:border-white
            text-black dark:text-white font-semibold px-10 py-4 rounded-full
          "
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(demo, "_blank")}
            >
              <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover/button:translate-x-0 transition-all duration-500"></span>
              <span className="absolute inset-0 bg-white translate-x-[100%] group-hover/button:translate-x-0 transition-all duration-500"></span>

              <span className="relative z-10 flex items-center gap-2 group-hover/button:text-black">
                <FaExternalLinkAlt /> Live
              </span>
            </motion.button>
          </motion.div>
        </div>
     

  
  );
};

export default ProjectCard;
