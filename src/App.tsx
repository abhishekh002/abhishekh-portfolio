import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0E12] text-[#F5F1E8] font-sans selection:bg-[#FF9F45]/30 selection:text-[#FF9F45] relative">
      
      {/* Cinematic OTDR coordinate grid overlay background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-40 z-0 bg-[linear-gradient(to_right,rgba(255,159,69,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,159,69,0.02)_1px,transparent_1px)]" 
        style={{ backgroundSize: '48px 48px' }}
      />
      
      {/* Subtle ambient amber signal pulse radial glow in center screen */}
      <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#FF9F45]/5 blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#3ED6C5]/3 blur-[180px] pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar />

      {/* Core Portfolio Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
