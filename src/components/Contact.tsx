import { useState, useEffect, useRef } from 'react';
import OtdrTrace from './OtdrTrace';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`relative pt-24 pb-16 bg-[#0A0E12] transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        {/* Contact Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#3ED6C5]" />
          <span className="text-xs md:text-sm font-semibold tracking-widest text-[#3ED6C5] uppercase">
            Connection Node
          </span>
          <span className="w-8 h-[1px] bg-[#3ED6C5]" />
        </div>

        {/* Large closing heading */}
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#F5F1E8] mb-12 max-w-3xl leading-tight">
          Let's build something that <span className="text-[#FF9F45]">carries signal.</span>
        </h2>

        {/* Icon Pill Buttons Grid */}
        <div className="flex flex-wrap justify-center gap-5 mb-20">
          {/* Email button */}
          <a
            href="mailto:abhisekh31tiwari@gmail.com"
            className="flex items-center gap-3 px-6 py-3.5 rounded-full backdrop-blur-md bg-[#12181F]/70 border border-[#FF9F45]/15 text-[#F5F1E8] font-semibold text-sm hover-glow-amber transition-all duration-300"
          >
            <Mail className="w-4 h-4 text-[#FF9F45]" />
            <span>Email me</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
          </a>

          {/* GitHub button */}
          <a
            href="https://github.com/abhishekh002"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3.5 rounded-full backdrop-blur-md bg-[#12181F]/70 border border-[#FF9F45]/15 text-[#F5F1E8] font-semibold text-sm hover-glow-amber transition-all duration-300"
          >
            <Github className="w-4 h-4 text-[#FF9F45]" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
          </a>

          {/* LinkedIn button */}
          <a
            href="https://linkedin.com/in/abhishekh31"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3.5 rounded-full backdrop-blur-md bg-[#12181F]/70 border border-[#FF9F45]/15 text-[#F5F1E8] font-semibold text-sm hover-glow-amber transition-all duration-300"
          >
            <Linkedin className="w-4 h-4 text-[#FF9F45]" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
          </a>
        </div>

        {/* Footer Meta & Copyright */}
        <div className="text-xs text-[#F5F1E8]/30 font-medium tracking-wide flex flex-col items-center gap-2">
          <p>© {new Date().getFullYear()} Abhishekh Kumar Tiwari. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed for signal integrity <span className="text-[#3ED6C5] font-semibold">|</span> Developed with React & Tailwind CSS
          </p>
        </div>

      </div>

      {/* Final thin bottom OTDR trace flourish */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <OtdrTrace height={50} duration="3.2s" className="opacity-80" />
      </div>
    </section>
  );
}
