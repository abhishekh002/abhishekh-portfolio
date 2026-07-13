import { useState, useEffect, useRef } from 'react';
import OtdrTrace from './OtdrTrace';
import personalPhoto from '../assets/headshot.jpg';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Reveal only once
          }
        });
      },
      { threshold: 0.15 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={domRef}
      className={`relative py-24 md:py-36 bg-[#0A0E12] transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-center reveal-hidden ${
          isVisible ? 'reveal-visible' : ''
        }`}>
          
          {/* Left Column: Headshot Photo with Amber Glow */}
          <div className="md:col-span-5 flex justify-center">
            <div className="group relative w-64 h-[380px] md:w-80 md:h-[480px] rounded-2xl overflow-hidden glass-panel p-2 hover:border-[#FF9F45]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,159,69,0.25)]">
              <img 
                src={personalPhoto} 
                alt="Abhishekh Kumar Tiwari" 
                className="w-full h-full object-cover object-top rounded-xl transition-all duration-700 ease-out scale-100 group-hover:scale-105"
              />
              {/* Pulsing Accent corners/laser border */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#FF9F45] opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#FF9F45] opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#FF9F45] opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#FF9F45] opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Right Column: Bio details */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#3ED6C5]" />
              <span className="text-xs md:text-sm font-semibold tracking-widest text-[#3ED6C5] uppercase">
                Behind the Signal
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F1E8]">
              Methodical Engineering, End-to-End Execution
            </h2>

            <div className="text-base md:text-lg text-[#F5F1E8]/70 leading-relaxed flex flex-col gap-4">
              <p>
                I am a B.Tech Electronics & Telecommunication Engineering student at <strong>VSSUT Burla</strong> (class of 2027), merging telecom network foundations with modern full-stack engineering.
              </p>
              <p>
                My background spans telecom infrastructure, fiber optics testing, VLSI design, and building robust, scalable web architectures. I approach software development with the same rigor and analytical precision I used to trace fiber optic networks—ensuring complete signal integrity, optimal performance, and clean, modular systems.
              </p>
            </div>

            {/* Telemetry/Stat Row */}
            <div className="grid grid-cols-3 gap-4 mt-4 pt-6 border-t border-[#FF9F45]/15">
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-[#FF9F45]">5</span>
                <span className="text-xs text-[#F5F1E8]/50 uppercase tracking-wider mt-1">Internships</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-[#3ED6C5]">E&TC + Dev</span>
                <span className="text-xs text-[#F5F1E8]/50 uppercase tracking-wider mt-1">Double Focus</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-[#F5F1E8]">VSSUT</span>
                <span className="text-xs text-[#F5F1E8]/50 uppercase tracking-wider mt-1">Burla, Odisha</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer OTDR divider */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <OtdrTrace height={40} duration="5s" className="opacity-60" />
      </div>
    </section>
  );
}
