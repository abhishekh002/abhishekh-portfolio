import React, { useState } from 'react';
import { BookOpen, Cpu, Globe, Rocket, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import abhishekhYellow from '../assets/abhishekh_yellow.jpg';

export default function About() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const timelineData = [
    {
      year: '2022',
      title: 'VSSUT Burla Induction & C++',
      description: 'Entered Electronics & Telecommunication Engineering. Learned core C++, signal theories, and algorithms.',
      icon: <Award size={18} />
    },
    {
      year: '2023',
      title: 'Full Stack Java & Automation',
      description: 'Discovered Java ecosystem, database integrations, OOP, and started programming microcontrollers (Arduino).',
      icon: <Cpu size={18} />
    },
    {
      year: '2024',
      title: 'AI Exploration & Web Apps',
      description: 'Explored ML algorithms, data modeling, and developed automation prototypes like Railway Gate and Solar Windows.',
      icon: <Globe size={18} />
    },
    {
      year: '2025',
      title: 'Telecom & VLSI Internships',
      description: 'Completed practical trainings in VLSI layout, MCL networks, and modern telecom operations.',
      icon: <Rocket size={18} />
    }
  ];

  return (
    <section id="about" className="section" style={styles.section}>
      <div className="container">
        <h2 className="section-title">My Journey</h2>
        <p className="section-subtitle">
          Merging hardware engineering precision with the unlimited potential of full stack software and intelligent automation.
        </p>

        <div style={styles.grid}>
          {/* Left Column: Image with glow borders */}
          <div style={styles.imageColumn}>
            <div style={styles.imageContainer} className="glass">
              <img 
                src={abhishekhYellow} 
                alt="Abhishekh Kumar Tiwari" 
                style={styles.image}
              />
              <div style={styles.floatingBadge} className="glass">
                <span style={styles.badgePulse}></span>
                <span>Open for Internships</span>
              </div>
            </div>
          </div>

          {/* Right Column: Storytelling text */}
          <div style={styles.storyColumn}>
            <h3 style={styles.storyTitle}>Engineering the Future, One Line at a Time</h3>
            <p style={styles.storyText}>
              My journey began in the labs of <strong>Electronics & Telecommunication Engineering</strong> at VSSUT Burla, where I learned the laws of electromagnetics, communication systems, and embedded microprocessors. While mapping hardware pathways, I discovered coding. The ability to write instructions that control physical components or execute complex operations on a screen felt like magic.
            </p>
            <p style={styles.storyText}>
              I dived headfirst into the <strong>Java Ecosystem</strong>, studying robust backend design, database administration, and concurrency. My curiosity didn't stop there. I began designing smart embedded automation projects using microcontrollers, which led directly into my interest in <strong>Artificial Intelligence & Machine Learning</strong>—bridging the gap between dumb sensors and intelligent systems.
            </p>
            
            <div style={styles.skillsCallout} className="glass">
              <div style={styles.calloutItem}>
                <Cpu size={24} style={styles.calloutIcon} />
                <div>
                  <h4 style={styles.calloutTitle}>Hardware/IoT</h4>
                  <p style={styles.calloutDesc}>Arduino, VLSI design, signal processors, embedded programming.</p>
                </div>
              </div>
              <div style={styles.calloutItem}>
                <BookOpen size={24} style={styles.calloutIcon} />
                <div>
                  <h4 style={styles.calloutTitle}>Software Architecture</h4>
                  <p style={styles.calloutDesc}>Full stack Java development, databases, and microservices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Timeline */}
        <div id="journey" style={styles.timelineSection}>
          <h3 style={styles.timelineSectionTitle}>Journey Milestones</h3>
          
          <div style={styles.timelineContainer}>
            {/* Timeline Line */}
            <div style={styles.timelineProgressLine}>
              <div 
                style={{
                  ...styles.timelineProgressFill,
                  width: `${(activeMilestone / (timelineData.length - 1)) * 100}%`
                }}
              />
            </div>

            {/* Timeline nodes */}
            <div style={styles.timelineNodes}>
              {timelineData.map((node, idx) => (
                <div 
                  key={idx} 
                  style={styles.nodeWrapper}
                  onClick={() => setActiveMilestone(idx)}
                  className="interactive"
                >
                  <div 
                    style={{
                      ...styles.nodeDot,
                      borderColor: activeMilestone === idx ? 'var(--color-accent-1)' : 'var(--glass-border)',
                      backgroundColor: activeMilestone === idx ? 'var(--color-accent-1)' : 'var(--bg-secondary)',
                      boxShadow: activeMilestone === idx ? '0 0 15px var(--color-accent-1)' : 'none'
                    }}
                  >
                    {node.icon}
                  </div>
                  <span 
                    style={{
                      ...styles.nodeYear,
                      color: activeMilestone === idx ? 'var(--color-accent-1)' : 'var(--text-muted)',
                      fontWeight: activeMilestone === idx ? '700' : '500'
                    }}
                  >
                    {node.year}
                  </span>
                </div>
              ))}
            </div>

            {/* Selected node detail card */}
            <div style={styles.milestoneCard} className="glass">
              <h4 style={styles.milestoneTitle}>{timelineData[activeMilestone].title}</h4>
              <p style={styles.milestoneDesc}>{timelineData[activeMilestone].description}</p>
            </div>
          </div>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: '0.9fr 1.1fr',
    gap: '4rem',
    alignItems: 'center',
    marginBottom: '6rem',
  },
  imageColumn: {
    display: 'flex',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: '320px',
    height: '420px',
    borderRadius: '1.5rem',
    padding: '0.75rem',
    overflow: 'visible',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '1rem',
    filter: 'grayscale(20%)',
    transition: 'filter 0.3s ease',
  },
  floatingBadge: {
    position: 'absolute',
    bottom: '-1.5rem',
    right: '-1.5rem',
    padding: '0.6rem 1.2rem',
    borderRadius: '2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.85rem',
    fontWeight: '600',
  },
  badgePulse: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#10b981',
    animation: 'pulseGreen 2s infinite',
  },
  storyColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  storyTitle: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
  },
  storyText: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: 'var(--text-secondary)',
  },
  skillsCallout: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    padding: '1.5rem',
    marginTop: '1rem',
    borderRadius: '1rem',
  },
  calloutItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
  },
  calloutIcon: {
    color: 'var(--color-accent-1)',
    flexShrink: 0,
    marginTop: '0.2rem',
  },
  calloutTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    marginBottom: '0.25rem',
  },
  calloutDesc: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.4',
  },
  timelineSection: {
    marginTop: '4rem',
    textAlign: 'center',
  },
  timelineSectionTitle: {
    fontSize: '1.75rem',
    fontWeight: '700',
    marginBottom: '3rem',
  },
  timelineContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
    paddingBottom: '2rem',
  },
  timelineProgressLine: {
    position: 'absolute',
    top: '24px',
    left: '5%',
    right: '5%',
    height: '2px',
    backgroundColor: 'var(--glass-border)',
    zIndex: 1,
  },
  timelineProgressFill: {
    height: '100%',
    backgroundColor: 'var(--color-accent-1)',
    transition: 'width 0.4s ease',
  },
  timelineNodes: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 10,
    marginBottom: '2.5rem',
  },
  nodeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
    width: '80px',
  },
  nodeDot: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '2px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  nodeYear: {
    fontSize: '0.95rem',
  },
  milestoneCard: {
    padding: '2rem',
    borderRadius: '1.25rem',
    textAlign: 'left',
    minHeight: '130px',
    animation: 'fadeInUp 0.4s ease',
  },
  milestoneTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'var(--color-accent-1)',
    marginBottom: '0.75rem',
  },
  milestoneDesc: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
  },
};

// Insert animations CSS
const aboutAnim = `
@keyframes pulseGreen {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5); }
  70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (max-width: 992px) {
  #about div[style*="grid"] {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  #about div[style*="imageColumn"] {
    order: -1;
  }
}
@media (max-width: 576px) {
  #journey div[style*="nodeWrapper"] {
    width: 60px;
  }
  #journey div[style*="nodeDot"] {
    width: 38px;
    height: 38px;
  }
  #journey span[style*="nodeYear"] {
    font-size: 0.8rem;
  }
}
`;

if (typeof document !== 'undefined') {
  const sheet = document.createElement('style');
  sheet.innerText = aboutAnim;
  document.head.appendChild(sheet);
}
