import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SocialSidebar from './components/SocialSidebar';
import Projects from './components/Projects';
import Footer from './components/Footer';
function App() {  
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-sans">
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <div id="home">
          <Hero />
          <SocialSidebar />
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
     
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
