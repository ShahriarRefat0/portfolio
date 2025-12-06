import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

const Navbar = () => {
  const containerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    // Initial nav-item animation
    gsap.from(".nav-item", {
      y: -20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });

    // 🔥 Neon Glow Animation Using GSAP
// gsap.to(".glow-nav", {
//   boxShadow: `
//     0 0 20px rgba(255,255,255,0.6),
//     0 0 40px rgba(255,255,255,0.35),
//     0 0 65px rgba(255,255,255,0.2)
//   `,
//   duration: 2.2,
//   repeat: -1,
//   yoyo: true,
//   ease: "power2.inOut",
// });

  }, { scope: containerRef });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (

    <header
      ref={containerRef}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <motion.nav
        className="
        bg-white/30 dark:bg-white/10
        backdrop-blur-2xl
        border border-white/20 dark:border-white/30
        rounded-full
        px-6 py-3
        flex justify-between items-center
        w-full max-w-5xl
        shadow-[0_0_40px_rgba(255,255,255,0.35)]
        dark:shadow-[0_0_40px_rgba(255,255,255,0.35)]
      "
      >
        {/* Logo */}
        <div
          className="nav-item flex items-center space-x-3 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <p className="text-xl font-bold font-display text-black dark:text-white">
            WEB Dev/
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="
              nav-item text-sm font-medium
              text-gray-800 dark:text-gray-200
              hover:text-black dark:hover:text-white
              px-3 py-2 rounded-full
              hover:bg-white/50 dark:hover:bg-black/50
            "
            >
              {item}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="
          w-10 h-10 flex lg:hidden items-center justify-center
          bg-black dark:bg-white rounded-full
          text-white dark:text-black
          z-50 relative
        "
        >
          <span className="material-icons-outlined text-sm">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </motion.nav>

      {/* ⭐ MOBILE MENU OVERLAY—NOW OUTSIDE NAV ⭐ */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
          fixed inset-0 
          bg-white/95 dark:bg-black/95 
          backdrop-blur-xl 
          z-40 
          flex flex-col items-center justify-center
          space-y-8 lg:hidden
        "
        >
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-3xl font-bold text-black dark:text-white"
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );

  
};

export default Navbar;
