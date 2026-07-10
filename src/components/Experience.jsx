import React, { useState } from 'react';
import { Calendar, Briefcase, Award, GraduationCap, ChevronDown } from 'lucide-react';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experienceData = [
    {
      role: 'VLSI Design Intern',
      company: 'Semiconductor Research Lab / Internship Center',
      duration: 'May 2025 - Jul 2025',
      icon: <Award size={20} />,
      points: [
        'Engineered custom IC layout grids and structural digital cells using CMOS logic blocks.',
        'Synthesized digital block architectures from Verilog hardware definitions into hardware layouts.',
        'Tested layouts against Design Rule Checking (DRC) and Layout Versus Schematic (LVS) parameters.'
      ]
    },
    {
      role: 'Telecom Network Trainee',
      company: 'Telecom Training Division',
      duration: 'Mar 2025 - Apr 2025',
      icon: <Briefcase size={20} />,
      points: [
        'Studied GSM, LTE, and 5G network cell routing protocols and high-frequency microwave link alignments.',
        'Assisted technicians in tracing fiber-optic cables and diagnosing signal strength degradation.',
        'Analyzed packet transmission rates and routing switch logs to optimize connection loads.'
      ]
    },
    {
      role: 'MCL Systems Intern',
      company: 'Mahanadi Coalfields Limited (MCL)',
      duration: 'Jan 2025 - Feb 2025',
      icon: <Briefcase size={20} />,
      points: [
        'Analyzed industrial communication networks, telemetry monitoring loops, and control links.',
        'Assisted in configuring automated conveyor belt sensors and programmable logic controls (PLCs).',
        'Documented sensor configurations and network layout topologies for future maintenance logs.'
      ]
    },
    {
      role: 'Junior Engineer Intern',
      company: 'Automation & IoT Solutions Group',
      duration: 'Oct 2024 - Dec 2024',
      icon: <Briefcase size={20} />,
      points: [
        'Programmed microcontrollers and assembled sensor arrays for IoT automation projects.',
        'Constructed custom peripheral printed circuit boards (PCBs) using schematic design software.',
        'Assisted in writing API endpoints in Java Spring Boot to ingest incoming telemetry feeds.'
      ]
    },
    {
      role: 'Electronics & Telecommunication B.Tech student',
      company: 'Veer Surendra Sai University of Technology (VSSUT), Burla',
      duration: '2022 - Present',
      icon: <GraduationCap size={20} />,
      points: [
        'Studying B.Tech core syllabus: Signal systems, electromagnetic fields, analog layout, and digital design.',
        'Actively participating in technical clubs, robotics projects, and hacking competitions.',
        'Maintaining a solid academic score while developing full-stack software and AI projects.'
      ]
    }
  ];

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section id="experience" className="section" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Experience Timeline</h2>
        <p className="section-subtitle">
          A summary of my internships, practical engineering field trainings, and my academic journey in electronics and software.
        </p>

        <div style={styles.timeline}>
          {/* Vertical central bar */}
          <div style={styles.timelineLine}></div>

          {/* Timeline Items */}
          {experienceData.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div 
                key={idx} 
                style={{
                  ...styles.timelineItem,
                  flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse'
                }}
              >
                {/* Timeline node marker */}
                <div style={styles.timelineDotWrapper}>
                  <div style={styles.timelineDot} className="glass">
                    {exp.icon}
                  </div>
                </div>

                {/* Blank spacer to push cards to opposite side */}
                <div style={styles.timelineSpacer}></div>

                {/* Content Card */}
                <div 
                  onClick={() => handleToggle(idx)}
                  style={{
                    ...styles.card,
                    borderColor: isExpanded ? 'var(--color-accent-1)' : 'var(--glass-border)',
                  }} 
                  className="glass interactive"
                >
                  <div style={styles.cardHeader}>
                    <div>
                      <span style={styles.duration}>
                        <Calendar size={12} /> {exp.duration}
                      </span>
                      <h3 style={styles.roleTitle}>{exp.role}</h3>
                      <h4 style={styles.companyTitle}>{exp.company}</h4>
                    </div>
                    <button 
                      style={{
                        ...styles.expandBtn,
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)'
                      }}
                      aria-label="Expand details"
                    >
                      <ChevronDown size={18} />
                    </button>
                  </div>

                  <div 
                    style={{
                      ...styles.cardDetails,
                      maxHeight: isExpanded ? '300px' : '0',
                      opacity: isExpanded ? 1 : 0,
                    }}
                  >
                    <ul style={styles.pointsList}>
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} style={styles.pointItem}>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    zIndex: 10,
  },
  timeline: {
    position: 'relative',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem 0',
  },
  timelineLine: {
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '2px',
    background: 'linear-gradient(180deg, var(--glass-border), var(--color-accent-1) 15%, var(--color-accent-2) 80%, var(--glass-border))',
    transform: 'translateX(-50%)',
    zIndex: 1,
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '3rem',
    position: 'relative',
    zIndex: 10,
  },
  timelineSpacer: {
    flex: 1,
  },
  timelineDotWrapper: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelineDot: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-accent-1)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  card: {
    flex: 1,
    padding: '1.5rem',
    borderRadius: '1.25rem',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    margin: '0 2.5rem',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '1rem',
  },
  duration: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    fontWeight: '500',
    marginBottom: '0.5rem',
  },
  roleTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '0.25rem',
  },
  companyTitle: {
    fontSize: '0.95rem',
    color: 'var(--color-accent-2)',
    fontWeight: '500',
  },
  expandBtn: {
    background: 'rgba(255,255,255,0.05)',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    flexShrink: 0,
  },
  cardDetails: {
    overflow: 'hidden',
    transition: 'max-height 0.4s ease, opacity 0.4s ease, margin-top 0.4s ease',
  },
  pointsList: {
    paddingLeft: '1.25rem',
    marginTop: '1.25rem',
    color: 'var(--text-secondary)',
    fontSize: '0.92rem',
  },
  pointItem: {
    marginBottom: '0.6rem',
    lineHeight: '1.5',
  },
};

// Add responsive rules for vertical timeline (stack single file on mobile)
const timelineResponsive = `
@media (max-width: 768px) {
  #experience div[style*="timelineLine"] {
    left: '20px' !important;
    transform: none !important;
  }
  #experience div[style*="timelineItem"] {
    flex-direction: row !important;
    margin-bottom: 2rem;
  }
  #experience div[style*="timelineSpacer"] {
    display: none !important;
  }
  #experience div[style*="timelineDotWrapper"] {
    left: '20px' !important;
    transform: translateX(-50%) !important;
  }
  #experience div[style*="card"] {
    margin-left: 3rem !important;
    margin-right: 0 !important;
  }
}
`;
if (typeof document !== 'undefined') {
  const sheet = document.createElement('style');
  sheet.innerText = timelineResponsive;
  document.head.appendChild(sheet);
}
