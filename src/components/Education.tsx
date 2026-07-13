import { useState, useEffect, useRef } from 'react';
import OtdrTrace from './OtdrTrace';
import { Check } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  extra?: string;
}

export default function Education() {
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

  const educationList: EducationItem[] = [
    {
      degree: "B.Tech in Electronics & Telecommunication Engineering",
      institution: "Veer Surendra Sai University of Technology (VSSUT)",
      location: "Burla, Sambalpur, Odisha",
      year: "Pursuing, Expected 2027",
      extra: "Specializing in signal integrity, wireless communication theory, and full-stack enterprise computing."
    },
    {
      degree: "Diploma in Electronics & Telecommunication Engineering",
      institution: "Utkal Mani Gopabandhu Institute of Engineering (UGIE)",
      location: "Rourkela (SCTE&VT Odisha)",
      year: "Graduated 2024",
      extra: "Acquired fundamental laboratory skills in digital circuits, network analyses, microprocessors, and analog design."
    },
    {
      degree: "12th Standard (CHSE Science)",
      institution: "Ispat Autonomous College",
      location: "Rourkela, Odisha",
      year: "Completed 2021"
    },
    {
      degree: "10th Standard (CBSE)",
      institution: "Gyanjyoti Public School",
      location: "Rourkela, Odisha",
      year: "Completed 2019"
    }
  ];

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className={`relative py-24 md:py-36 bg-[#0A0E12] transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col gap-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#3ED6C5]" />
            <span className="text-xs md:text-sm font-semibold tracking-widest text-[#3ED6C5] uppercase">
              Academic Path
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F5F1E8]">
            Education History
          </h2>
        </div>

        {/* Compact Timeline Grid */}
        <div className="relative pl-8 border-l border-[#FF9F45]/15 ml-4 space-y-12">
          {educationList.map((edu, idx) => (
            <div 
              key={idx}
              className={`relative transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Tick Mark Dot */}
              <div className="absolute -left-[45px] top-1 w-6 h-6 rounded-full bg-[#FF9F45]/10 border border-[#FF9F45]/30 flex items-center justify-center text-[#FF9F45] shadow-[0_0_8px_rgba(255,159,69,0.2)]">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>

              {/* Detail Content */}
              <div>
                <span className="text-xs text-[#FF9F45] font-semibold tracking-wider block mb-1">
                  {edu.year}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-[#F5F1E8]">
                  {edu.degree}
                </h3>
                <p className="text-sm md:text-base text-[#F5F1E8]/70 font-semibold mt-0.5">
                  {edu.institution} • <span className="text-[#F5F1E8]/50 font-normal">{edu.location}</span>
                </p>
                {edu.extra && (
                  <p className="text-sm text-[#F5F1E8]/55 mt-2 max-w-2xl leading-relaxed">
                    {edu.extra}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <OtdrTrace height={40} duration="4.8s" className="opacity-60" />
      </div>
    </section>
  );
}
