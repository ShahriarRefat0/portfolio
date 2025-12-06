import React from "react";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div
      id="social-sidebar"
      className="
        fixed left-3 md:left-6 top-1/2 -translate-y-1/2
        z-50 flex flex-col space-y-4 
      "
    >
      {/* GitHub */}
      <a
        href="https://github.com/"
        target="_blank"
        className="group relative flex items-center"
      >
        {/* Label */}
        <span
          className="
            absolute left-12 px-3 py-1 rounded-md 
            bg-white text-black text-xs 
            opacity-0 group-hover:opacity-100 group-hover:translate-x-2
            transition-all duration-300 shadow-md
          "
        >
          Shahriar_Rahman_Refat
        </span>

        {/* Icon */}
        <span
          className="
            flex items-center justify-center w-10 h-10
            bg-white/40 backdrop-blur-xl
            rounded-full
            hover:bg-white
            transition-all duration-300
            shadow-[0_0_10px_rgba(255,255,255,0.5)]
            hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]
          "
        >
          <FaGithub className="text-black text-xl" />
        </span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/shahriar-rahman-refat/"
        target="_blank"
        className="group relative flex items-center"
      >
        <span
          className="
            absolute left-12 px-3 py-1 rounded-md 
            bg-white text-black text-xs 
            opacity-0 group-hover:opacity-100 group-hover:translate-x-2
            transition-all duration-300 shadow-md
          "
        >
          Shahriar_Rahman_Refat
        </span>

        <span
          className="
            flex items-center justify-center w-10 h-10
            bg-white/40 backdrop-blur-xl
            rounded-full
            hover:bg-white
            transition-all duration-300
            shadow-[0_0_10px_rgba(255,255,255,0.5)]
            hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]
          "
        >
          <FaLinkedinIn className="text-black text-xl" />
        </span>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/shahriarrefat0"
        target="_blank"
        className="group relative flex items-center"
      >
        <span
          className="
            absolute left-12 px-3 py-1 rounded-md 
            bg-white text-black text-xs 
            opacity-0 group-hover:opacity-100 group-hover:translate-x-2
            transition-all duration-300 shadow-md
          "
        >
          Shahriar_Refat
        </span>

        <span
          className="
            flex items-center justify-center w-10 h-10
            bg-white/40 backdrop-blur-xl
            rounded-full
            hover:bg-white
            transition-all duration-300
            shadow-[0_0_10px_rgba(255,255,255,0.5)]
            hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]
          "
        >
          <FaFacebookF className="text-black text-xl" />
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/+8801793772245?text=Hello%20I%20want%20to%20contact%20you"
        target="_blank"
        className="group relative flex items-center"
      >
        <span
          className="
            absolute left-12 px-3 py-1 rounded-md 
            bg-white text-black text-xs 
            opacity-0 group-hover:opacity-100 group-hover:translate-x-2
            transition-all duration-300 shadow-md
          "
        >
          +8801793772245
        </span>

        <span
          className="
            flex items-center justify-center w-10 h-10
            bg-white/40 backdrop-blur-xl
            rounded-full
            hover:bg-white
            transition-all duration-300
            shadow-[0_0_10px_rgba(255,255,255,0.5)]
            hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]
          "
        >
          <FaWhatsapp className="text-black text-xl" />
        </span>
      </a>
    </div>
  );
};

export default SocialSidebar;
