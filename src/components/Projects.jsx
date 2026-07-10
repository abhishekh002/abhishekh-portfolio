import React, { useState, useRef } from 'react';
import { ExternalLink, Code, Database, Cpu, Settings } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Software', 'IoT/Hardware'];

  const projectsData = [
    {
      id: 1,
      title: 'Industrial AI Assistant',
      category: 'Software',
      desc: 'An intelligent telemetry logs parser and anomaly detector. Provides warning indicators, plant metrics feeds, and automated failure predictions.',
      tech: ['Python', 'PyTorch', 'React', 'FastAPI'],
      github: '#',
      demo: '#',
      icon: <Settings size={20} />
    },
    {
      id: 2,
      title: 'Railway Gate Automation',
      category: 'IoT/Hardware',
      desc: 'An automated safety level-crossing simulator. Triggers servo gate barriers using speed distance readings from ultrasonic sensors.',
      tech: ['Arduino C++', 'Ultrasonic Sensors', 'Servo Motors', 'LCD Display'],
      github: '#',
      demo: '#',
      icon: <Cpu size={20} />
    },
    {
      id: 3,
      title: 'Solar Window Automation',
      category: 'IoT/Hardware',
      desc: 'Smart building window panes that align to daylight beams. Increases energy harvest by matching tracking profiles from light resistor sensors.',
      tech: ['Embedded C++', 'LDR Sensors', 'Stepper Motors', 'MATLAB'],
      github: '#',
      demo: '#',
      icon: <Cpu size={20} />
    },
    {
      id: 4,
      title: 'Java Banking System',
      category: 'Software',
      desc: 'A multithreaded bank database transaction ledger. Supports secure authentications, simultaneous transfers, and historical CSV statements printing.',
      tech: ['Java SE', 'JDBC', 'MySQL', 'Concurrency', 'Swing'],
      github: '#',
      demo: '#',
      icon: <Database size={20} />
    },
    {
      id: 5,
      title: 'Student Management System',
      category: 'Software',
      desc: 'A scalable REST administration dashboard. Catalogs student files, academic grades, courses registration, and PDF gradecard exports.',
      tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'React'],
      github: '#',
      demo: '#',
      icon: <Code size={20} />
    },
    {
      id: 6,
      title: 'Premium Portfolio Website',
      category: 'Software',
      desc: 'A luxurious portfolio and blog website for Abhishekh. Includes custom glassmorphism, searchable articles, and interactive timelines.',
      tech: ['React', 'Vite', 'Framer Motion', 'GSAP', 'CSS Modules'],
      github: '#',
      demo: '#',
      icon: <Code size={20} />
    }
  ];

  const filteredProjects = projectsData.filter(project => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  // Hover tilt and light flare coordinates tracker
  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // Calculate rotation angles based on cursor offset from card center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 10; // max 10 degrees
    const rotateY = ((x - centerX) / centerX) * 10; // max 10 degrees

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.boxShadow = `0 15px 30px rgba(99, 102, 241, 0.15)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.boxShadow = '0 8px 32px 0 var(--glass-shadow)';
  };

  return (
    <section id="projects" className="section" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Explore a showcase of my technical projects, ranging from cloud microservices and database engines to embedded systems and smart automation.
        </p>

        {/* Filter buttons */}
        <div style={styles.filterGroup}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                ...styles.filterBtn,
                background: filter === cat ? 'linear-gradient(135deg, var(--color-accent-1), var(--color-accent-2))' : 'var(--glass-bg)',
                borderColor: filter === cat ? 'transparent' : 'var(--glass-border)',
                color: filter === cat ? '#fff' : 'var(--text-secondary)'
              }}
              className="interactive"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid showcase */}
        <div className="projects-grid" style={styles.grid}>
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={handleMouseLeave}
              style={styles.card}
              className="glass tilt-card"
            >
              <div style={styles.cardHeader}>
                <div style={styles.cardIconWrapper} className="glass">
                  {project.icon}
                </div>
                <span style={styles.cardCategory}>{project.category}</span>
              </div>

              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{project.title}</h3>
                <p style={styles.cardDesc}>{project.desc}</p>
                
                <div style={styles.techStack}>
                  {project.tech.map((techItem) => (
                    <span key={techItem} style={styles.techBadge} className="glass">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              <div style={styles.cardFooter}>
                <a href={project.github} style={styles.actionLink} className="interactive">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Code
                </a>
                <a href={project.demo} style={styles.actionLink} className="interactive">
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </div>
          ))}
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
  filterGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '3.5rem',
  },
  filterBtn: {
    padding: '0.5rem 1.5rem',
    borderRadius: '2rem',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    border: '1px solid',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  },
  card: {
    borderRadius: '1.25rem',
    padding: '1.75rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '340px',
    transition: 'transform 0.1s ease-out, box-shadow 0.3s ease',
    transformStyle: 'preserve-3d',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    transform: 'translateZ(20px)',
  },
  cardIconWrapper: {
    width: '40px',
    height: '40px',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-accent-1)',
  },
  cardCategory: {
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    letterSpacing: '0.05em',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    transform: 'translateZ(30px)',
  },
  cardTitle: {
    fontSize: '1.35rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '0.75rem',
  },
  cardDesc: {
    fontSize: '0.92rem',
    lineHeight: '1.5',
    color: 'var(--text-secondary)',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  techBadge: {
    padding: '0.2rem 0.6rem',
    fontSize: '0.75rem',
    borderRadius: '0.5rem',
    color: 'var(--color-accent-2)',
    fontWeight: '500',
  },
  cardFooter: {
    display: 'flex',
    gap: '1.5rem',
    borderTop: '1px solid var(--glass-border)',
    paddingTop: '1.25rem',
    transform: 'translateZ(10px)',
  },
  actionLink: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.35rem',
    transition: 'color 0.2s ease',
  },
};

// Insert hover effects rule inside CSS
const projectsStyle = `
a[style*="actionLink"]:hover {
  color: var(--color-accent-1) !important;
}
`;
if (typeof document !== 'undefined') {
  const stylesProj = document.createElement('style');
  stylesProj.innerText = projectsStyle;
  document.head.appendChild(stylesProj);
}
