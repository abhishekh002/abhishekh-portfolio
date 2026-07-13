import { useState, useEffect, useRef } from 'react';
import OtdrTrace from './OtdrTrace';

interface TimelineItemProps {
  role: string;
  company: string;
  location: string;
  date: string;
  description: string;
}

function TimelineItem({ role, company, location, date, description }: TimelineItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative pl-8 pb-12 transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Node Dot on the timeline line */}
      <div className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full bg-[#FF9F45] pulse-amber shadow-[0_0_8px_#FF9F45]" />
      
      {/* Experience Card */}
      <div className="glass-panel rounded-xl p-6 hover-glow-amber">
        <span className="text-xs text-[#FF9F45] font-semibold tracking-wider uppercase block mb-1">
          {date}
        </span>
        <h4 className="text-lg font-bold text-[#F5F1E8] mb-0.5">
          {role}
        </h4>
        <p className="text-sm text-[#F5F1E8]/70 font-medium mb-3">
          {company} <span className="text-[#3ED6C5]">|</span> <span className="text-[#F5F1E8]/50">{location}</span>
        </p>
        <p className="text-sm text-[#F5F1E8]/60 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const internships = [
    {
      role: "Junior Engineer (Internship)",
      company: "Sharma Fabricators and Erectors (P) Ltd.",
      location: "Jharsuguda, Odisha",
      date: "Dec 2025 – Present",
      description: "Focusing on engineering layouts, design fabrication blueprints, operations planning, and structure inspection. Bridging electrical design parameters with industrial structural execution."
    },
    {
      role: "VLSI Designing Intern",
      company: "Maincrafts Technology (Ministry of MSME, Govt. of India)",
      location: "Online / Remote",
      date: "07 May 2026 – 22 Jun 2026",
      description: "Hands-on implementation of hardware description languages (Verilog), synthesis, static timing analysis, and basic schematic chip design workflows."
    },
    {
      role: "IT/Telecom Internship",
      company: "Mahanadi Coalfields Limited (MCL)",
      location: "Burla, Sambalpur",
      date: "30 Days",
      description: "Acquired real-world experience in corporate networks, optical fiber communication loops (OTDR testing, splice diagnostics), and enterprise network telemetry."
    },
    {
      role: "Telecom Internship",
      company: "Regional Telecommunication Training Centre",
      location: "Vani Vihar, Bhubaneswar",
      date: "40 Days",
      description: "Studied broad communications technologies including routing/switching protocols, optical transmission systems, mobile cellular topologies, and signal integrity."
    },
    {
      role: "Telecom Internship",
      company: "Tarkera (Telecom Sub Division)",
      location: "Rourkela",
      date: "20 Days",
      description: "Assisted with local telecommunication lines, fiber routing setups, and substation signal switching operations."
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className={`relative py-24 md:py-36 bg-[#0A0E12] transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Sticky Section Heading on the left */}
          <div className="md:col-span-4 md:sticky md:top-32 md:h-fit flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#FF9F45]" />
              <span className="text-xs md:text-sm font-semibold tracking-widest text-[#FF9F45] uppercase">
                Career Timeline
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F1E8]">
              Field-Tested Experience
            </h2>
            <p className="text-sm md:text-base text-[#F5F1E8]/50 leading-relaxed">
              Five internships bridging core telecommunications engineering, hardware microarchitecture, and full-stack software development.
            </p>
          </div>

          {/* Timeline on the right */}
          <div className="md:col-span-8 pl-4 md:pl-8 border-l border-[#FF9F45]/15 ml-3 relative">
            {/* The vertical timeline line container */}
            <div className="space-y-4">
              {internships.map((job, idx) => (
                <TimelineItem key={idx} {...job} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Thin OTDR trace divider */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <OtdrTrace height={40} duration="4.5s" className="opacity-60" />
      </div>
    </section>
  );
}
