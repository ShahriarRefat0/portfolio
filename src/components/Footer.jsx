import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-20 border-t border-white/20 bg-background-light dark:bg-background-dark">
      <div className="text-center">
        <p className="text-gray-700 dark:text-gray-300 text-sm tracking-wide">
          © {new Date().getFullYear()}
          <span className="font-semibold text-black dark:text-white mx-1">
            Shahriar Rahman Refat
          </span>
          — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
