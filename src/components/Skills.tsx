import { useState, useEffect, useRef } from 'react';
import OtdrTrace from './OtdrTrace';
import { Terminal, Globe, Database, Radio, Cpu, Settings } from 'lucide-react';

interface SkillGroup {
  category: string;
  icon: React.ComponentType<any>;
  skills: string[];
}

export default function Skills() {
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

  const skillGroups: SkillGroup[] = [
    {
      category: 'Languages',
      icon: Terminal,
      skills: ['Python', 'C++', 'Java (Full Stack)', 'SQL']
    },
    {
      category: 'Web / Full Stack',
      icon: Globe,
      skills: ['React', 'Next.js', 'Java Spring Boot', 'REST APIs', 'Tailwind CSS']
    },
    {
      category: 'Data & ML',
      icon: Database,
      skills: ['Pandas', 'NumPy', 'Machine Learning Fundamentals', 'Data Analytics']
    },
    {
      category: 'Comms Systems',
      icon: Radio,
      skills: ['Analog & Digital Communication', 'Signal Processing', 'Wireless Fundamentals', 'Fiber Optics (OTDR)']
    },
    {
      category: 'Embedded & Electronics',
      icon: Cpu,
      skills: ['Circuit Design', 'Microcontrollers & Arduino', 'Embedded C/C++', 'VHDL/Verilog']
    },
    {
      category: 'Tools & Devops',
      icon: Settings,
      skills: ['MATLAB', 'Proteus / Multisim', 'PCB Design (EasyEDA/Altium)', 'Docker', 'Git & GitHub']
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`relative py-24 md:py-36 bg-[#0A0E12] transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center gap-4 mb-16 text-center">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#3ED6C5]" />
            <span className="text-xs md:text-sm font-semibold tracking-widest text-[#3ED6C5] uppercase">
              Skills Spectrum
            </span>
            <span className="w-8 h-[1px] bg-[#3ED6C5]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F5F1E8]">
            Technical Competence
          </h2>
          <p className="text-sm md:text-base text-[#F5F1E8]/50 max-w-xl">
            Bridging hardware design, signal communication physics, and modern web application development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIdx) => {
            const Icon = group.icon;
            return (
              <div
                key={groupIdx}
                style={{ transitionDelay: `${groupIdx * 80}ms` }}
                className={`glass-panel rounded-2xl p-6 hover-glow-amber transition-all duration-700 ease-out transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Header: Icon + Category Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[#FF9F45]/10 border border-[#FF9F45]/20 text-[#FF9F45]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#F5F1E8]">
                    {group.category}
                  </h3>
                </div>

                {/* Skill Labels */}
                <div className="flex flex-col gap-2.5">
                  {group.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3ED6C5]" />
                      <span className="text-sm text-[#F5F1E8]/70 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <OtdrTrace height={40} duration="5.5s" className="opacity-60" />
      </div>
    </section>
  );
}
