import React, { useState } from 'react';
import { Code, Layout, Cpu, Wrench } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: null },
    { name: 'Programming', icon: <Code size={16} /> },
    { name: 'Frontend', icon: <Layout size={16} /> },
    { name: 'Engineering', icon: <Cpu size={16} /> },
    { name: 'Tools', icon: <Wrench size={16} /> }
  ];

  const skillsData = [
    // Programming
    { name: 'Java', category: 'Programming', level: 'Advanced', description: 'Core Java, Multithreading, Streams, JVM' },
    { name: 'Python', category: 'Programming', level: 'Intermediate', description: 'Data Science scripts, PyTorch, Scripting' },
    { name: 'C++', category: 'Programming', level: 'Intermediate', description: 'Embedded code, Algorithms, Pointers' },
    { name: 'JavaScript', category: 'Programming', level: 'Advanced', description: 'ES6+, DOM actions, async logic' },

    // Frontend
    { name: 'HTML5', category: 'Frontend', level: 'Expert', description: 'Semantic layout, SEO structures' },
    { name: 'CSS3', category: 'Frontend', level: 'Expert', description: 'Flexbox, Grids, Keyframes, Custom Vars' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 'Advanced', description: 'Utility layouts, responsive setups' },
    { name: 'React', category: 'Frontend', level: 'Advanced', description: 'Hooks, Context, State machines' },

    // Engineering
    { name: 'Arduino', category: 'Engineering', level: 'Advanced', description: 'Sensors interfaces, Actuators relays' },
    { name: 'Embedded Systems', category: 'Engineering', level: 'Intermediate', description: 'Microcontrollers, SPI, I2C, USART' },
    { name: 'Digital Communication', category: 'Engineering', level: 'Intermediate', description: 'Modulation, Signals encoding, Pipelines' },
    { name: 'Signal Processing', category: 'Engineering', level: 'Intermediate', description: 'Fourier Transforms, Filter architectures' },

    // Tools
    { name: 'Git', category: 'Tools', level: 'Advanced', description: 'Branch management, Rebase, Merges' },
    { name: 'GitHub', category: 'Tools', level: 'Advanced', description: 'PR pipelines, Actions runners' },
    { name: 'VS Code', category: 'Tools', level: 'Expert', description: 'Key bindings, extensions optimization' },
    { name: 'IntelliJ', category: 'Tools', level: 'Expert', description: 'Refactoring tools, debugger profiles' },
    { name: 'MATLAB', category: 'Tools', level: 'Intermediate', description: 'Matrix operations, DSP scripts simulations' },
    { name: 'Proteus', category: 'Tools', level: 'Intermediate', description: 'Circuit designs simulations testing' }
  ];

  const filteredSkills = skillsData.filter(skill => {
    if (activeCategory === 'All') return true;
    return skill.category === activeCategory;
  });

  return (
    <section id="skills" className="section" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A breakdown of my software coding skills, electronic engineering engineering techniques, and development tools.
        </p>

        {/* Category switcher */}
        <div style={styles.tabsContainer}>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              style={{
                ...styles.tabButton,
                borderColor: activeCategory === cat.name ? 'var(--color-accent-1)' : 'var(--glass-border)',
                background: activeCategory === cat.name ? 'rgba(99, 102, 241, 0.08)' : 'var(--glass-bg)',
                color: activeCategory === cat.name ? 'var(--color-accent-1)' : 'var(--text-secondary)'
              }}
              className="interactive"
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="skills-grid" style={styles.grid}>
          {filteredSkills.map((skill) => (
            <div key={skill.name} style={styles.card} className="glass interactive">
              <div style={styles.cardHeader}>
                <h3 style={styles.skillName}>{skill.name}</h3>
                <span 
                  style={{
                    ...styles.levelBadge,
                    color: skill.level === 'Expert' ? 'var(--color-accent-3)' : 
                           skill.level === 'Advanced' ? 'var(--color-accent-1)' : 'var(--color-accent-4)'
                  }}
                >
                  {skill.level}
                </span>
              </div>
              <p style={styles.skillDesc}>{skill.description}</p>
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
  tabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginBottom: '3rem',
  },
  tabButton: {
    padding: '0.5rem 1.25rem',
    borderRadius: '1.5rem',
    fontSize: '0.88rem',
    fontWeight: '600',
    cursor: 'pointer',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    transition: 'all 0.3s ease',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    padding: '1.25rem 1.5rem',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skillName: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
  },
  levelBadge: {
    fontSize: '0.75rem',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  skillDesc: {
    fontSize: '0.85rem',
    lineHeight: '1.4',
    color: 'var(--text-secondary)',
  },
};

// CSS classes hover scales
const skillsHover = `
.skills-grid div:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent-1) !important;
  box-shadow: 0 10px 20px -10px var(--glow-color);
}
`;
if (typeof document !== 'undefined') {
  const sheet = document.createElement('style');
  sheet.innerText = skillsHover;
  document.head.appendChild(sheet);
}
