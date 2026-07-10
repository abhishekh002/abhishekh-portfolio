import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Learning from './components/Learning';
import Journal from './components/Journal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Interactive cursor lighting effects */}
      <CustomCursor />

      {/* Aurora floating animated blobs */}
      <div className="aurora-bg">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
        <div className="aurora-blob blob-3"></div>
      </div>

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main content sections layout */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Blog />
        <Skills />
        <Learning />
        <Journal />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
