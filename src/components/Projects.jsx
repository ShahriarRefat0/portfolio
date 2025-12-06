import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import bepaw from "../assets/bepaw.png";
import plateShare from "../assets/plateshare.png";
import bloodBank from "../assets/bloodbank.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const section = containerRef.current;

      // 🔥 Title popup
      gsap.from(".projects-title", {
        opacity: 0,
        scale: 0.8,
        y: 20,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // 🔥 Subtitle popup
      gsap.from(".projects-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // 🔥 Cards popup with stagger
      gsap.from(".project-card", {
        opacity: 0,
        scale: 0.85,
        y: 30,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // ✨ Floating particles (same as before)
      const particles = section.querySelectorAll(".particle");
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

  return (
    <section
      ref={containerRef}
      id="projects"
      className="
        relative overflow-hidden 
        pt-32 pb-20 
        px-4 sm:px-6 md:px-8 
        container mx-auto 
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
      <h2 className="projects-title skills-header text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-2 text-center">
        {"<Projects>"}
      </h2>

      <p className="projects-subtitle skills-header text-gray-600 dark:text-gray-400 mb-10 text-center text-sm sm:text-base">
        Recent Projects_
      </p>

      {/* RESPONSIVE GRID */}
      <div
        className="
          grid 
          gap-10 sm:gap-12 
          grid-cols-1 
          sm:grid-cols-2 
          justify-center
        "
      >
        {/* Card 1 */}
        <div className="project-card">
          <ProjectCard
            title="Plate Share"
            description="PlateShare is a full-stack MERN application that connects communities through food sharing..."
            image={plateShare}
            github="https://github.com/ShahriarRefat0/Plate-Share-client.git"
            demo="https://plate-share-b21c8.web.app/"
            stack={[
              "React",
              "Tailwind CSS",
              "DaisyUI",
              "Firebase",
              "Node.js",
              "Express.js",
              "MongoDB",
            ]}
          />
        </div>

        {/* Card 2 */}
        <div className="project-card">
          <ProjectCard
            title="Bepaw Pet Care"
            description="A modern winter pet care platform for users to discover services, winter care products, and grooming solutions..."
            image={bepaw}
            github="https://github.com/ShahriarRefat0/Bepaw-pet-care.git"
            demo="https://bepaw-pet-care.vercel.app/"
            stack={[
              "Tailwind",
              "MongoDB",
              "React.js",
              "Firebase",
              "Node.js",
              "Express.js",
            ]}
          />
        </div>

        {/* Card 3 — ALWAYS CENTERED */}
        <div className="sm:col-span-2 flex justify-center project-card">
          <div className="w-full max-w-[580px]">
            <ProjectCard
              title="Blood Bank"
              description="BloodBank is a modern platform for blood donation and requests..."
              image={bloodBank}
              github="https://github.com/ShahriarRefat0/blood-bank-v1.git"
              demo="https://blood-bank-v1.vercel.app/"
              stack={[
                "Next.js",
                "Tailwind",
                "MongoDB",
                "Firebase",
                "Node.js",
                "Express.js",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
