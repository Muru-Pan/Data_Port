import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Blog from './components/Blog';
import Contact from './components/Contact';
import FloatingCTA from './components/FloatingCTA';

const Footer = () => (
  <footer className="py-12 bg-[#102240] text-white border-t border-white/5">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <h2 className="text-xl font-bold tracking-widest mb-2">MURUGA PANDIAN</h2>
        <p className="text-white/40 text-sm">© 2026 | Data Scientist & Analyst Portfolio</p>
      </div>

      <div className="flex gap-8 text-sm font-medium text-white/60">
        <a href="#hero" className="hover:text-accent transition-colors">Home</a>
        <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
        <a href="#blog" className="hover:text-accent transition-colors">Blog</a>
        <a href="#contact" className="hover:text-accent transition-colors">Hire Me</a>
      </div>

      <div className="text-xs text-white/20 text-center md:text-right">
        Designed & Built by Muruga Pandian<br />
        Using React, Vite & Tailwind CSS
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-background-custom selection:bg-accent/30 selection:text-accent">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
