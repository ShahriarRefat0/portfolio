import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaLaptopCode, FaCalendarCheck } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    document.querySelectorAll(".particle").forEach((p) => {
      gsap.to(p, {
        x: "+=" + gsap.utils.random(-200, 200), 
        y: "+=" + gsap.utils.random(-200, 200), 
        duration: gsap.utils.random(6, 12),     
        ease: "none",
        repeat: -1,
      });
    });
  }, { scope: containerRef });


  return (
    <section
      ref={containerRef}
      id="about"
      className="relative container pt-36 mx-auto px-6 pt-40 pb-16 lg:pt-32 overflow-hidden"
    >
      {/* Background Particles */}
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

      {/* 🌟 BACKGROUND PARTICLES (ADDED) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="particle absolute w-2 h-2 bg-white/40 rounded-full blur-[2px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatUpDown ${3 + Math.random() * 3}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="mb-14">
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white">
          {"<About Me/>"}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">
          My Introduction
        </p>
      </div>

      {/* GRID: LEFT CARDS + RIGHT TEXT */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: CARDS */}
      
        <div className="space-y-6">

          {/* Card Template 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="
      relative overflow-hidden group
      bg-white/80 dark:bg-white/10
      backdrop-blur-xl shadow-lg rounded-2xl p-6
      flex items-center space-x-4 border border-white/40
    "
          >
            {/* Shine Effect */}
            <span
              className="
        absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
        opacity-0 group-hover:opacity-100
        translate-x-[-100%] group-hover:translate-x-[100%]
        transition-all duration-700 ease-out pointer-events-none
      "
            ></span>

            <div className="text-black dark:text-white text-3xl">
              <FaUserTie />
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Fresher
              </p>
            </div>
          </motion.div>

          {/* Card Template 2 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="
      relative overflow-hidden group
      bg-white/80 dark:bg-white/10
      backdrop-blur-xl shadow-lg rounded-2xl p-6
      flex items-center space-x-4 border border-white/40
    "
          >
            <span
              className="
        absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
        opacity-0 group-hover:opacity-100
        translate-x-[-100%] group-hover:translate-x-[100%]
        transition-all duration-700 ease-out pointer-events-none
      "
            ></span>

            <div className="text-black dark:text-white text-3xl">
              <FaLaptopCode />
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Real-world Web Apps
              </p>
            </div>
          </motion.div>

          {/* Card Template 3 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
      relative overflow-hidden group
      bg-white/80 dark:bg-white/10
      backdrop-blur-xl shadow-lg rounded-2xl p-6
      flex items-center space-x-4 border border-white/40
    "
          >
            <span
              className="
        absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
        opacity-0 group-hover:opacity-100
        translate-x-[-100%] group-hover:translate-x-[100%]
        transition-all duration-700 ease-out pointer-events-none
      "
            ></span>

            <div className="text-black dark:text-white text-3xl">
              <FaCalendarCheck />
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                Availability
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Ready to Join
              </p>
            </div>
          </motion.div>

          {/* ⭐ NEW CARD — LEARNING JOURNEY */}
          {/* <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="
      relative overflow-hidden group
      bg-white/80 dark:bg-white/10
      backdrop-blur-xl shadow-lg rounded-2xl p-6
      flex items-center space-x-4 border border-white/40
    "
          >
            <span
              className="
        absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
        opacity-0 group-hover:opacity-100
        translate-x-[-100%] group-hover:translate-x-[100%]
        transition-all duration-700 ease-out pointer-events-none
      "
            ></span>

            <div className="text-black dark:text-white text-3xl">
              ⭐
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                Learning Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                1 Year of MERN Stack
              </p>
            </div>
          </motion.div> */}

        </div>


        {/* RIGHT TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            I'm a <span className="font-bold text-black dark:text-white">Frontend-Focused MERN Stack Developer </span>
             with <span className="font-semibold">1 year of hands-on learning experience</span> building clean, modern, and responsive web applications.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
            Skilled in <span className="font-semibold">React.js, Next.js, Tailwind CSS, Node.js, Express.js,</span> and
            <span className="font-semibold"> MongoDB</span>.
            I am highly motivated and ready to contribute to real-world projects.
          </p>

          {/* BUTTON */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1hg1OUyMveHAxata1rJvJ9ZTJ_dx-bk9r/view"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.9 }}
              className="
                relative overflow-hidden group
                inline-flex items-center justify-center
                bg-white border border-white
                text-black font-semibold px-10 py-4 rounded-full
                shadow-[0_0_15px_rgba(255,255,255,0.3)]
              "
              target="_blank"
            >
              {/* Hover animation backgrounds */}
              <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              <span className="absolute inset-0 bg-black translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

              {/* Text */}
              <span className="relative z-10 group-hover:text-white transition-all">
                Download Resume
              </span>

              {/* Icon bounce */}
              <motion.span
                className="relative z-10 material-icons-outlined ml-2"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                download
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
