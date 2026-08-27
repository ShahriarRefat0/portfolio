import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Project Preview Assets (All 9 projects)
import risetogether from "../assets/risetoghether.png";
import uparzo from "../assets/uparzo.png";
import feletrip from "../assets/feletrip.png";
import biponiq from "../assets/biponiq.png";
import schoologyBD from "../assets/schoologyBD.png";
import book2door from "../assets/book2door.png";
import plateShare from "../assets/plateshare.png";
import bepaw from "../assets/bepaw.png";
import bloodBank from "../assets/bloodbank.png";

gsap.registerPlugin(ScrollTrigger);

const ALL_PROJECTS = [
  // 1. Featured Production SaaS Platforms
  {
    id: "risetogether",
    title: "Rise Together — Digital Engineering Platform",
    role: "Full Stack Web Developer — Backend Focus",
    badge: "Production Platform",
    featured: true,
    description: [
      "A production-ready engineering platform with JWT authentication, dynamic Role-Based Access Control (RBAC), and permission-based dashboard access.",
      "Engineered scalable backend APIs with Redis caching, API rate limiting, BullMQ background job processing, and asynchronous email queues.",
      "Architected for high throughput, security, and low latency in production.",
    ],
    image: risetogether,
    github: "https://github.com/ShahriarRefat0",
    demo: "https://risetogetherbd.vercel.app/",
    stack: ["NestJS", "Node.js", "JWT", "Redis", "BullMQ", "REST APIs", "RBAC", "TypeScript"],
  },
  {
    id: "uparzo",
    title: "Uparzo.com — E-commerce Builder Platform",
    role: "Backend Developer",
    badge: "Production SaaS",
    featured: true,
    description: [
      "A no-code e-commerce website builder that enables users and merchants to create, manage, and scale online stores effortlessly.",
      "Integrated online payment processing with SSLCommerz and bKash, and developed core e-commerce backend workflow APIs.",
      "Documented backend APIs using Swagger, fixed critical production bugs, and deployed containerized services with Docker and CI/CD.",
    ],
    image: uparzo,
    github: "https://github.com/ShahriarRefat0",
    demo: "https://uparzo.com/",
    stack: ["Next.js", "Express.js", "SSLCommerz", "bKash", "Docker", "CI/CD", "Swagger", "Node.js"],
  },
  {
    id: "feletrip",
    title: "FeleTrip.com — Hotel Booking SaaS",
    role: "Backend & Systems Developer",
    badge: "Live SaaS",
    featured: true,
    description: [
      "Developed secure role-based access control (RBAC) with hotel room booking, promotional deals, and advertisement management modules.",
      "Integrated SSLCommerz payment gateway for secure online transaction processing and automated verification.",
      "Containerized the entire application with Docker and implemented automated CI/CD deployment pipelines using GitHub Actions.",
    ],
    image: feletrip,
    github: "https://github.com/ShahriarRefat0",
    demo: "https://feletrip.com",
    stack: [
      "Node.js",
      "Express.js",
      "JWT",
      "SSLCommerz",
      "Redis",
      "Docker",
      "GitHub Actions",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    id: "biponiq",
    title: "Biponiq.com — E-commerce SaaS Platform",
    role: "Backend & Database Architect",
    badge: "Live SaaS",
    featured: true,
    description: [
      "Designed the normalized database schema and ERD architecture to support complex multi-vendor business workflows.",
      "Developed complete order management, automated payment, and delivery workflows from cart checkout to order fulfillment.",
      "Implemented comprehensive merchant dashboards with live inventory tracking, customer insights, and sales analytics.",
    ],
    image: biponiq,
    github: "https://github.com/ShahriarRefat0",
    demo: "https://biponiq.com",
    stack: [
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "GitHub Actions",
      "Node.js",
    ],
  },

  // 2. Full-Stack Web Applications
  {
    id: "schoologybd",
    title: "SchoologyBD — Multi-Tenant School SaaS",
    role: "Full Stack Developer",
    badge: "Multi-Tenant SaaS",
    featured: false,
    description: [
      "A multi-tenant SaaS-based school management system with 6 role-based dashboards (Admin, Principal, Teacher, Student, Parents, Accountant).",
      "Features online examinations, AI-powered bulk student import, report generation, and real-time student grading.",
    ],
    image: schoologyBD,
    github: "https://github.com/ShahriarRefat0/School-management.git",
    demo: "https://school-management-ruby-omega.vercel.app/",
    stack: ["Next.js", "TypeScript", "Supabase", "Prisma ORM", "Tailwind CSS", "Multi-tenant SaaS"],
  },
  {
    id: "book2door",
    title: "Book2Door — Online Bookstore Platform",
    role: "Full Stack Developer",
    badge: "E-Commerce",
    featured: false,
    description: [
      "A full-featured multi-role online bookstore application offering a seamless shopping experience.",
      "Includes intuitive catalog search, user cart & wishlist, order tracking, and secure payment processing.",
    ],
    image: book2door,
    github: "https://github.com/ShahriarRefat0/Book2Door-client.git",
    demo: "https://book2-door-client.vercel.app/",
    stack: ["React.js", "Tailwind CSS", "DaisyUI", "Firebase", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: "plateshare",
    title: "Plate Share — Community Food Sharing",
    role: "Full Stack Developer",
    badge: "Community Platform",
    featured: false,
    description: [
      "A full-stack MERN application connecting local communities through surplus food sharing.",
      "Allows donors to post available food items and empowers recipients to find and request meals, minimizing food waste.",
    ],
    image: plateShare,
    github: "https://github.com/ShahriarRefat0/Plate-Share-client.git",
    demo: "https://plate-share-client-nu.vercel.app/",
    stack: ["React.js", "Tailwind CSS", "DaisyUI", "Firebase", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: "bepaw",
    title: "Bepaw Pet Care — Pet Services & Supplies",
    role: "Full Stack Developer",
    badge: "Web Platform",
    featured: false,
    description: [
      "A comprehensive pet care platform helping pet owners discover veterinary services, grooming packages, winter supplies, and pet care tips.",
      "Features private user dashboards for managing pet records and appointments.",
    ],
    image: bepaw,
    github: "https://github.com/ShahriarRefat0/Bepaw-pet-care.git",
    demo: "https://bepaw-pet-care.vercel.app/",
    stack: ["React.js", "Tailwind CSS", "Firebase", "Node.js", "Express.js", "DaisyUI"],
  },
  {
    id: "bloodbank",
    title: "Blood Bank — Emergency Donor Network",
    role: "Full Stack Developer",
    badge: "Healthcare Platform",
    featured: false,
    description: [
      "A live platform facilitating urgent blood donation requests and matching with nearby verified donors.",
      "Dynamic real-time request status management, donor profiles, and search filters by blood group and district.",
    ],
    image: bloodBank,
    github: "https://github.com/ShahriarRefat0/blood-bank-v1.git",
    demo: "https://blood-bank-v1.vercel.app/",
    stack: ["Next.js", "Tailwind CSS", "MongoDB", "Firebase", "Node.js", "Express.js"],
  },
];

const INITIAL_VISIBLE_COUNT = 4;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const section = containerRef.current;
      if (!section) return;

      // Title popup
      gsap.from(".projects-title", {
        opacity: 0,
        scale: 0.85,
        y: 20,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      });

      // Subtitle popup
      gsap.from(".projects-subtitle", {
        opacity: 0,
        y: 15,
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      });

      // Floating particles
      const particles = section.querySelectorAll(".particle");
      particles.forEach((p) => {
        gsap.to(p, {
          x: "+=" + gsap.utils.random(-100, 100),
          y: "+=" + gsap.utils.random(-100, 100),
          duration: gsap.utils.random(6, 12),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    },
    { scope: containerRef }
  );

  const displayedProjects = showAll
    ? ALL_PROJECTS
    : ALL_PROJECTS.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="
        relative overflow-hidden 
        py-24 
        px-4 sm:px-6 
        container mx-auto max-w-7xl
        font-display 
        bg-background-light dark:bg-background-dark 
        text-gray-800 dark:text-gray-200
      "
    >
      {/* BACKGROUND PARTICLES */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className="particle absolute w-2 h-2 bg-cyan-400/20 dark:bg-white/15 rounded-full blur-[2px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="projects-title text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-3">
          {"<Projects/>"}
        </h2>
        <p className="projects-subtitle text-gray-600 dark:text-gray-400 text-base sm:text-lg">
          Featured Production Applications & SaaS Platforms ({ALL_PROJECTS.length} Projects)_
        </p>
      </div>

      {/* RESPONSIVE 2-COLUMN GRID */}
      <div className="grid gap-8 sm:gap-10 grid-cols-1 lg:grid-cols-2">
        {displayedProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (idx % 2) * 0.15 }}
            className="flex h-full"
          >
            <ProjectCard
              title={project.title}
              role={project.role}
              badge={project.badge}
              description={project.description}
              image={project.image}
              github={project.github}
              demo={project.demo}
              stack={project.stack}
            />
          </motion.div>
        ))}
      </div>

      {/* VIEW ALL / VIEW LESS BUTTON */}
      <div className="mt-14 sm:mt-16 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAll(!showAll)}
          className="
            inline-flex items-center space-x-2.5
            px-8 py-3.5 rounded-full
            bg-white dark:bg-white/10
            text-black dark:text-white
            font-display font-semibold text-sm sm:text-base
            border border-black/10 dark:border-white/20
            shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_0_25px_rgba(255,255,255,0.1)]
            hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
            transition-all duration-300 cursor-pointer
          "
        >
          <span>
            {showAll
              ? "Show Featured Only"
              : `See All Projects (${ALL_PROJECTS.length})`}
          </span>
          {showAll ? (
            <FaChevronUp className="text-xs" />
          ) : (
            <FaChevronDown className="text-xs" />
          )}
        </motion.button>
      </div>
    </section>
  );
};

export default Projects;
