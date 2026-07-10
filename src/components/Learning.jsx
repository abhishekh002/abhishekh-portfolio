import React from 'react';
import { Book, Cpu, Shield, Cloud, LayoutGrid, Terminal } from 'lucide-react';

export default function Learning() {
  const learningTopics = [
    {
      title: 'Spring Boot',
      desc: 'Mastering microservice patterns, Spring Security, REST custom filters, and JPA transaction management.',
      icon: <Terminal size={24} style={styles.iconRed} />,
      progress: '75%',
      badge: 'Backend'
    },
    {
      title: 'React',
      desc: 'Expanding into custom transition states, responsive component bindings, and high-performance states hooks.',
      icon: <LayoutGrid size={24} style={styles.iconBlue} />,
      progress: '85%',
      badge: 'Frontend'
    },
    {
      title: 'Machine Learning',
      desc: 'Studying neural networks architectures, classifiers models, signal noise filters, and sensors regression formulas.',
      icon: <Cpu size={24} style={styles.iconViolet} />,
      progress: '55%',
      badge: 'AI Systems'
    },
    {
      title: 'System Design',
      desc: 'Learning caching structures (Redis), message queues (Kafka), load balancers setups, and SQL/NoSQL trade-offs.',
      icon: <Shield size={24} style={styles.iconPink} />,
      progress: '60%',
      badge: 'Architecture'
    },
    {
      title: 'Cloud Computing',
      desc: 'Configuring Docker containers, basic AWS deployments, and automated CI/CD configurations.',
      icon: <Cloud size={24} style={styles.iconCyan} />,
      progress: '45%',
      badge: 'DevOps'
    },
    {
      title: 'Data Structures & Algorithms',
      desc: 'Practicing dynamic programming, heap structures, sorting pipelines, and graph paths algorithms daily.',
      icon: <Book size={24} style={styles.iconYellow} />,
      progress: '70%',
      badge: 'Core CS'
    }
  ];

  return (
    <section id="learning" className="section" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Currently Learning</h2>
        <p className="section-subtitle">
          Expanding my technical knowledge horizon. Here are the core topics and technologies I am currently studying and refining.
        </p>

        <div style={styles.grid}>
          {learningTopics.map((topic, idx) => (
            <div key={idx} style={styles.card} className="glass interactive">
              <div style={styles.cardHeader}>
                <div style={styles.iconWrapper} className="glass">
                  {topic.icon}
                </div>
                <span style={styles.badge} className="glass">{topic.badge}</span>
              </div>
              
              <h3 style={styles.cardTitle}>{topic.title}</h3>
              <p style={styles.cardDesc}>{topic.desc}</p>
              
              <div style={styles.progressContainer}>
                <div style={styles.progressLabel}>
                  <span>Progress</span>
                  <span>{topic.progress}</span>
                </div>
                <div style={styles.progressBarBg}>
                  <div 
                    style={{
                      ...styles.progressBarFill,
                      width: topic.progress,
                      background: idx % 3 === 0 ? 'linear-gradient(90deg, var(--color-accent-1), var(--color-accent-2))' :
                                  idx % 3 === 1 ? 'linear-gradient(90deg, var(--color-accent-2), var(--color-accent-3))' :
                                                  'linear-gradient(90deg, var(--color-accent-4), var(--color-accent-1))'
                    }}
                  />
                </div>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    padding: '1.75rem',
    borderRadius: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '280px',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.25rem',
  },
  iconWrapper: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    padding: '0.2rem 0.6rem',
    fontSize: '0.75rem',
    borderRadius: '0.5rem',
    color: 'var(--text-secondary)',
    fontWeight: '600',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    marginBottom: '0.5rem',
  },
  cardDesc: {
    fontSize: '0.88rem',
    lineHeight: '1.5',
    color: 'var(--text-secondary)',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  progressContainer: {
    marginTop: 'auto',
  },
  progressLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.78rem',
    color: 'var(--text-muted)',
    fontWeight: '600',
    marginBottom: '0.35rem',
  },
  progressBarBg: {
    height: '6px',
    width: '100%',
    backgroundColor: 'var(--bg-tertiary)',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: '3px',
    transition: 'width 0.5s ease',
  },

  /* Icons accents */
  iconRed: { color: '#ef4444' },
  iconBlue: { color: '#3b82f6' },
  iconViolet: { color: '#8b5cf6' },
  iconPink: { color: '#ec4899' },
  iconCyan: { color: '#06b6d4' },
  iconYellow: { color: '#eab308' },
};

// CSS hover rule
const learnHover = `
#learning div[style*="grid"] div:hover {
  transform: translateY(-5px) scale(1.01);
  border-color: var(--color-accent-2) !important;
  box-shadow: 0 12px 24px -12px var(--glow-color);
}
`;
if (typeof document !== 'undefined') {
  const sheet = document.createElement('style');
  sheet.innerText = learnHover;
  document.head.appendChild(sheet);
}
