import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import bepaw from "../assets/bepaw.png";
import plateShare from "../assets/plateshare.png";
import bloodBank from "../assets/bloodbank.png";
import gsap from "gsap";             // ✅ FIXED — GSAP IMPORT
import { useGSAP } from "@gsap/react";

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const particles = containerRef.current.querySelectorAll(".particle");

      particles.forEach((p) => {
        gsap.to(p, {
          x: "+=" + gsap.utils.random(-150, 150),
          y: "+=" + gsap.utils.random(-150, 150),
          duration: gsap.utils.random(6, 12),
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
      ref={containerRef}   // ✅ Make sure particles are inside this container
      id="projects"
      className="relative pt-36 min-h-screen my-auto container mx-auto overflow-hidden font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200"
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

      <h2 className="skills-header text-4xl sm:text-5xl font-bold text-black dark:text-white mb-2">
        {"<Projects>"}
      </h2>
      <p className="skills-header text-gray-600 dark:text-gray-400 mb-10">
        Recent Projects_
      </p>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
        <ProjectCard
          title="Plate Share"
          description="PlateShare is a full-stack MERN application that connects communities through food sharing. It allows users to donate surplus food and helps others find and request meals, reducing food waste while supporting those in need."
          image={plateShare}
          github="https://github.com/ShahriarRefat0/Plate-Share-client.git"
          demo="https://plate-share-b21c8.web.app/"
          stack={["React", "Tailwind CSS", "DaisyUI", "Firebase", "Node.js", "Express.js", "MongoDB"]}
        />

        <ProjectCard
          title="Bepaw Pet Care"
          description="A modern winter pet care platform for pet owners to discover services, winter products, grooming options, and expert tips all in one place. It also has a user-friendly interface and provides real-time updates on pet care services."
          image={bepaw}
          github="https://github.com/ShahriarRefat0/Bepaw-pet-care.git"
          demo="https://bepaw-pet-care.vercel.app/"
          stack={["Tailwind", "MongoDB", "React.js", "Firebase", "Node.js", "Express.js"]}
        />

        {/* Card 3 centered */}
        <div className="md:col-span-2 flex justify-center">
          <div className="w-full max-w-[592px]">
            <ProjectCard
              title="Blood Bank"
              description="BloodBank is a modern Blood Donation & Request Platform. Where users can donate blood and request blood for themselves or others. It also has a user-friendly interface and provides real-time updates on blood availability."
              image={bloodBank}
              github="https://github.com/ShahriarRefat0/blood-bank-v1.git"
              demo="https://blood-bank-v1.vercel.app/"
              stack={["Next.js", "Tailwind", "MongoDB", "Firebase", "Node.js", "Express.js"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
