import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";


import photo from "../assets/photo.jpg";

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Fade + slide-in animation for hero text
    // gsap.from(".hero-content", {
    //   y: 40,
    //   opacity: 0,
    //   duration: 1,
    //   stagger: 0.25,
    //   ease: "power3.out",
    // });

    // Fade + scale for photo
    gsap.from(".hero-photo", {
      opacity: 0,
      scale: 0.8,
      duration: 1.4,
      ease: "power3.out",
      delay: 0.4,
    });

    // Rotate outer rings endlessly
    // gsap.to(".ring-1", {
    //   rotate: 360,
    //   duration: 18,
    //   ease: "none",
    //   repeat: -1,
    // });

    // gsap.to(".ring-2", {
    //   rotate: -360,
    //   duration: 26,
    //   ease: "none",
    //   repeat: -1,
    // });

    // Orbiting balls around circles
    gsap.to(".ball-1", {
      rotate: 360,
      duration: 250,   // ← FAST
      repeat: -1,
    });

    gsap.to(".ball-2", {
      rotate: -360,
      duration: 200,   // ← FAST
      repeat: -1,
    });

    // Optional particle floating animation
    gsap.to(".particle", {
      y: -20,
      opacity: 1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: "sine.inOut",
    });
  }, { scope: containerRef });

  return (
    <main
      ref={containerRef}
      className="relative container mx-auto px-6 pt-40 pb-16 lg:pt-32 overflow-hidden"
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

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-2 items-center min-h-screen gap-12">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          <motion.span
            className="inline-block text-black dark:text-white font-semibold uppercase tracking-widest text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I'm
          </motion.span>

          <motion.h1
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mt-3 text-gray-900 dark:text-white leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Shahriar
            <br />
            Rahman
          </motion.h1>

          <motion.div
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Typewriter
              words={["Front-End Developer", "JavaScript Enthusiast", "React Developer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </motion.div>

          <motion.p
            className="max-w-lg mx-auto lg:mx-0 mt-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.4 }}
          >
            I craft clean, modern, and interactive digital experiences —
            blending thoughtful design, smooth animations, and high-performance code.
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1hg1OUyMveHAxata1rJvJ9ZTJ_dx-bk9r/view?usp=drive_link"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.9 }}
              className="
      relative overflow-hidden group
      inline-flex items-center justify-center
      bg-white border border-white
      text-black font-semibold px-10 py-4 rounded-full
      transition-all duration-300
      shadow-[0_0_15px_rgba(255,255,255,0.3)]
    "
              target="_blank"
            >

              {/* 🔥 Sliding Black Background (LEFT) */}
              <span
                className="
        absolute inset-0 bg-black
        translate-x-[-100%] group-hover:translate-x-0
        transition-transform duration-500 ease-out
      "
              ></span>

              {/* 🔥 Sliding Black Background (RIGHT) */}
              <span
                className="
        absolute inset-0 bg-black
        translate-x-[100%] group-hover:translate-x-0
        transition-transform duration-500 ease-out
      "
              ></span>

              {/* TEXT */}
              <span
                className="
        relative z-10
        group-hover:text-white
        group-hover:drop-shadow-[0_0_6px_white]
        transition-all duration-300
      "
              >
                Resume
              </span>

              {/* 🔥 Animated Download Icon (Up–Down Loop) */}
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


        </div>



        {/* RIGHT IMAGE + ANIMATION */}
        <div className="hero-photo relative flex items-center justify-center">
          {/* RING 1 */}
          <div
            className=" absolute z-10
  w-[180px] h-[180px]
  sm:w-[260px] sm:h-[260px]
  md:w-[330px] md:h-[330px]
  lg:w-[430px] lg:h-[430px]
  rounded-full border border-white/50"
          ></div>

          {/* RING 2 */}
          <div
            className=" absolute z-10
  w-[220px] h-[220px]
  sm:w-[300px] sm:h-[300px]
  md:w-[380px] md:h-[380px]
  lg:w-[480px] lg:h-[480px]
  rounded-full border border-white/50"
          ></div>

          {/* BALL 1 */}
          <div
            className="ball-1 absolute z-20 pointer-events-none
  w-[220px] h-[220px]
  sm:w-[300px] sm:h-[300px]
  md:w-[380px] md:h-[380px]
  lg:w-[480px] lg:h-[480px]
  flex items-start justify-center"
          >
            <div className="glow-ball w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"></div>
          </div>

          {/* BALL 2 */}
          <div
            className="ball-2 absolute z-20 pointer-events-none
  w-[220px] h-[220px]
  sm:w-[300px] sm:h-[300px]
  md:w-[380px] md:h-[380px]
  lg:w-[480px] lg:h-[480px]
  flex items-end justify-center"
          >
            <div className="glow-ball w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"></div>
          </div>

          {/* PHOTO */}
          <div
            className="
    relative z-0 
    w-[150px] h-[150px]
    sm:w-[230px] sm:h-[230px]
    md:w-[300px] md:h-[300px]
    lg:w-[360px] lg:h-[360px]
    group
  "
          >
            <div className="w-full h-full rounded-full border-2 border-white/20 overflow-hidden">
              <img
                src={photo}
                alt="Profile"
                className="
        w-full h-full object-cover
        filter grayscale 
        transition-all duration-500 ease-in-out
        group-hover:grayscale-0
      "
              />
            </div>
          </div>


        </div>

      </div>
    </main>
  );
};

export default Hero;
