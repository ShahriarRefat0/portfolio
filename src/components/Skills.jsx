import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
  SiExpress, SiNextdotjs, SiMongodb
} from "react-icons/si";
import {
  SiGit, SiGithub, SiFigma,
  SiTailwindcss, SiFirebase, SiVercel
} from "react-icons/si";
// import { RiVercelLine } from 'react-icons/ri';
import { TbBrandVscode } from "react-icons/tb"; 


gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(".skills-header", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    })
      // .from(".skill-card", {
      //   y: 50,
      //   opacity: 0,
      //   duration: 0.8,
      //   stagger: 0.1,
      //   ease: "power3.out"
      // }, "-=0.4")
      .from(".tech-icon", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.7)"
      }, "-=0.4");
    
    containerRef.current.querySelectorAll(".particle").forEach((p) => {
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
      className="relative font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 overflow-hidden"
    >
  {/* Background Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
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
      <div
        className="relative bg-background-light/90 dark:bg-background-dark/95 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <section className="w-full max-w-4xl text-center mb-16">
          {/* <div className="skills-header inline-flex items-center justify-center text-black dark:text-white mb-4">
            <span className="material-icons-outlined text-4xl">code</span>
          </div> */}
          <h2 className="skills-header  text-4xl sm:text-5xl font-bold text-black dark:text-white mb-2">{"[Skills]"}</h2>
          <p className="skills-header text-gray-600 dark:text-gray-400 mb-10">I am striving to never stop learning and improving_</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

            {/* ⭐ Frontend Development */}
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
              {/* ✨ Shine Animation */}
              <span
                className="
        absolute inset-0 bg-gradient-to-r 
        from-transparent via-white/40 to-transparent
        opacity-0 group-hover:opacity-100
        translate-x-[-100%] group-hover:translate-x-[100%]
        transition-all duration-700 ease-out pointer-events-none
      "
              ></span>

              {/* ICON */}
              <span
                className="
        material-icons-outlined text-black dark:text-white text-3xl mt-1
        p-4 rounded-full
        bg-white/30 dark:bg-white/10
       
        
      "
              >
                web
              </span>

              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  Frontend Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  HTML, CSS, JS, REACT JS, NEXT JS
                </p>
              </div>
            </motion.div>

            {/* ⭐ Backend Development */}
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
              {/* ✨ Shine Animation */}
              <span
                className="
        absolute inset-0 bg-gradient-to-r 
        from-transparent via-white/40 to-transparent
        opacity-0 group-hover:opacity-100
        translate-x-[-100%] group-hover:translate-x-[100%]
        transition-all duration-700 ease-out pointer-events-none
      "
              ></span>

              {/* ICON */}
              <span
                className="
        material-icons-outlined text-black dark:text-white text-3xl mt-1
        p-4 rounded-full
        bg-white/30 dark:bg-white/10
        
        
      "
              >
                storage
              </span>

              <div >
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  Backend Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  EXPRESS JS, NODE JS, MONGODB, FIREBASE, REST API, JWT
                </p>
              </div>
            </motion.div>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">

            {/* HTML */}
            <div className="tech-icon flex flex-col items-center space-y-2">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 
                 rounded-full flex items-center justify-center backdrop-blur-sm grayscale 
                 hover:grayscale-0 transition-all duration-300">
                <SiHtml5 className="text-orange-500 w-8 h-8" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">HTML</span>
            </div>

            {/* CSS */}
            <div className="tech-icon flex flex-col items-center space-y-2">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 
                 rounded-full flex items-center justify-center backdrop-blur-sm grayscale 
                 hover:grayscale-0 transition-all duration-300">
                <SiCss3 className="text-blue-500 w-8 h-8" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">CSS</span>
            </div>

            {/* JS */}
            <div className="tech-icon flex flex-col items-center space-y-2">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 
                 rounded-full flex items-center justify-center backdrop-blur-sm grayscale 
                 hover:grayscale-0 transition-all duration-300">
                <SiJavascript className="text-yellow-400 w-8 h-8" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">JavaScript</span>
            </div>

            {/* React */}
            <div className="tech-icon flex flex-col items-center space-y-2">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 
                 rounded-full flex items-center justify-center backdrop-blur-sm grayscale 
                 hover:grayscale-0 transition-all duration-300">
                <SiReact className="text-blue-400 w-8 h-8" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">React JS</span>
            </div>

            {/* Node */}
            <div className="tech-icon flex flex-col items-center space-y-2">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 
                 rounded-full flex items-center justify-center backdrop-blur-sm grayscale 
                 hover:grayscale-0 transition-all duration-300">
                <SiNodedotjs className="text-green-600 w-8 h-8" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Node.js</span>
            </div>

            {/* Express */}
            <div className="tech-icon flex flex-col items-center space-y-2">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 
                 rounded-full flex items-center justify-center backdrop-blur-sm grayscale 
                 hover:grayscale-0 transition-all duration-300">
                <SiExpress className="text-gray-300 w-8 h-8" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Express</span>
            </div>

            {/* Next.js */}
            <div className="tech-icon flex flex-col items-center space-y-2">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 
                 rounded-full flex items-center justify-center backdrop-blur-sm grayscale 
                 hover:grayscale-0 transition-all duration-300">
                <SiNextdotjs className="text-white w-8 h-8" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Next.js</span>
            </div>

            {/* MongoDB */}
            <div className="tech-icon flex flex-col items-center space-y-2">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 
                 rounded-full flex items-center justify-center backdrop-blur-sm grayscale 
                 hover:grayscale-0 transition-all duration-300">
                <SiMongodb className="text-green-500 w-8 h-8" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">MongoDB</span>
            </div>

          </div>

        </section>
        <section className="w-full max-w-4xl text-center pb-8">
          <div className="skills-header inline-flex items-center justify-center text-black dark:text-white mb-4">
            <span className="material-icons-outlined text-4xl">build</span>
          </div>
          <h2 className="skills-header text-4xl sm:text-5xl font-bold text-black dark:text-white mb-2">Tools &amp; Technologies</h2>
          <p className="skills-header text-gray-600 dark:text-gray-400 mb-10">Tools I use to bring ideas to life</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">

            {/* Git */}
            <div className="tech-icon flex flex-col items-center space-y-2">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 bg-gray-100 dark:bg-gray-900 border border-gray-200 
                 dark:border-gray-800 rounded-lg flex items-center justify-center
                 backdrop-blur-sm p-2 grayscale hover:grayscale-0 transition-all"
              >
                <SiGit className="text-orange-600 w-12 h-12" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Git</span>
            </div>

            {/* GitHub */}
            <div className="tech-icon flex flex-col items-center space-y-2">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}
                className="w-20 h-20 bg-gray-100 dark:bg-gray-900 border border-gray-200 
                 dark:border-gray-800 rounded-lg flex items-center justify-center backdrop-blur-sm p-2 
                 grayscale hover:grayscale-0 transition-all">
                <SiGithub className="text-gray-800 dark:text-white w-12 h-12" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</span>
            </div>

            {/* VS Code */}
            <div className="tech-icon flex flex-col items-center space-y-2">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}
                className="w-20 h-20 bg-gray-100 dark:bg-gray-900 border border-gray-200 
                 dark:border-gray-800 rounded-lg flex items-center justify-center backdrop-blur-sm p-2 
                 grayscale hover:grayscale-0 transition-all">
                <TbBrandVscode  className="text-blue-500 w-12 h-12" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">VS Code</span>
            </div>

            {/* Figma */}
            <div className="tech-icon flex flex-col items-center space-y-2">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}
                className="w-20 h-20 bg-gray-100 dark:bg-gray-900 border border-gray-200 
                 dark:border-gray-800 rounded-lg flex items-center justify-center backdrop-blur-sm p-2 
                 grayscale hover:grayscale-0 transition-all">
                <SiFigma className="text-pink-500 w-12 h-12" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Figma</span>
            </div>

            {/* Tailwind CSS */}
            <div className="tech-icon flex flex-col items-center space-y-2">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}
                className="w-20 h-20 bg-gray-100 dark:bg-gray-900 border border-gray-200 
                 dark:border-gray-800 rounded-lg flex items-center justify-center backdrop-blur-sm p-2 
                 grayscale hover:grayscale-0 transition-all">
                <SiTailwindcss className="text-cyan-400 w-12 h-12" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tailwind</span>
            </div>

            {/* Firebase */}
            <div className="tech-icon flex flex-col items-center space-y-2">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}
                className="w-20 h-20 bg-gray-100 dark:bg-gray-900 border border-gray-200 
                 dark:border-gray-800 rounded-lg flex items-center justify-center backdrop-blur-sm p-2 
                 grayscale hover:grayscale-0 transition-all">
                <SiFirebase className="text-yellow-500 w-12 h-12" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Firebase</span>
            </div>

            {/* Vercel */}
            <div className="tech-icon flex flex-col items-center space-y-2">
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}
                className="w-20 h-20 bg-gray-100 dark:bg-gray-900 border border-gray-200 
                 dark:border-gray-800 rounded-lg flex items-center justify-center backdrop-blur-sm p-2 
                 grayscale hover:grayscale-0 transition-all">
                <SiVercel className="text-black dark:text-white w-12 h-12" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Vercel</span>
            </div>

          </div>

        </section>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-repeat-x"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '1rem 1rem' }}>
        </div>
      </div>
    </section>
  );
};

export default Skills;

