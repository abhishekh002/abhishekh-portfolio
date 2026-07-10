import React, { useEffect, useState } from 'react';
import { Terminal, Award, HelpCircle, Activity, Heart } from 'lucide-react';

export default function Journal() {
  const [visitorCount, setVisitorCount] = useState(1337);
  const [likes, setLikes] = useState(42);
  const [isLiked, setIsLiked] = useState(false);

  const dailyThoughts = [
    {
      date: 'Today',
      time: '18:45',
      text: 'Drafted the neural network topology for my predictive solar cell project. Optimizing signal weight coefficients.',
      category: 'AI/ML'
    },
    {
      date: 'Yesterday',
      time: '21:30',
      text: 'Successfully configured Spring Security filter chains for user logins. Authentication pipelines are clean now!',
      category: 'Java'
    },
    {
      date: 'Jul 08, 2026',
      time: '14:20',
      text: 'Finished the final documentation report for my VLSI internship. Laid out custom logic cells in schematic files.',
      category: 'VLSI'
    },
    {
      date: 'Jul 05, 2026',
      time: '23:10',
      text: 'Implemented smooth scrolling, custom cursor trails, and background particle physics on this React portfolio.',
      category: 'Frontend'
    },
    {
      date: 'Jun 30, 2026',
      time: '11:05',
      text: 'Designed custom PCB layouts for the automated railway gate barrier. Ready to test signals matching on hardware boards.',
      category: 'IoT'
    }
  ];

  // Contribution graph mockup blocks (53 weeks * 7 days = 371 blocks)
  // Shading values: 0 (empty), 1 (light), 2 (medium), 3 (dark green)
  const contributionGrid = [];
  useEffect(() => {
    // Visitor counter actual implementation (persisted via LocalStorage)
    const count = localStorage.getItem('visitor_counter');
    if (count) {
      const newCount = parseInt(count) + 1;
      setVisitorCount(newCount);
      localStorage.setItem('visitor_counter', newCount);
    } else {
      localStorage.setItem('visitor_counter', 1542);
      setVisitorCount(1542);
    }
  }, []);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  // Generate mock contribution cells
  // We want to generate ~180 cells representing the last ~26 weeks to keep it clean and fits nicely on mobile/desktop screens.
  for (let i = 0; i < 161; i++) {
    // Generate a weighted random state for the contribution density
    const rand = Math.random();
    let level = 0;
    if (rand > 0.85) level = 3;      // Dark green
    else if (rand > 0.70) level = 2; // Mid green
    else if (rand > 0.45) level = 1; // Light green
    contributionGrid.push(level);
  }

  const getCellColor = (level) => {
    const darkThemeColors = [
      'rgba(255,255,255,0.04)', // level 0
      '#0e4429',                // level 1
      '#006d32',                // level 2
      '#26a641'                 // level 3
    ];
    const lightThemeColors = [
      'rgba(0,0,0,0.04)',       // level 0
      '#9be9a8',                // level 1
      '#40c463',                // level 2
      '#216e39'                 // level 3
    ];
    
    // We will let CSS handle variables for graph colors so it shifts nicely on theme toggles
    return `var(--git-graph-lvl-${level})`;
  };

  return (
    <section id="journal" className="section" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Daily Thoughts & Logs</h2>
        <p className="section-subtitle">
          A terminal-style daily update log detailing what I am coding, building, and thinking, paired with live statistics.
        </p>

        <div style={styles.grid}>
          {/* Left Column: Thoughts log feed */}
          <div style={styles.thoughtsCol}>
            <div style={styles.terminalHeader} className="glass">
              <div style={styles.terminalDots}>
                <span style={{ ...styles.dot, backgroundColor: '#ef4444' }}></span>
                <span style={{ ...styles.dot, backgroundColor: '#fbbf24' }}></span>
                <span style={{ ...styles.dot, backgroundColor: '#10b981' }}></span>
              </div>
              <span style={styles.terminalTitle}>abhishekh@tiwari:~/journal</span>
              <Terminal size={14} style={{ color: 'var(--text-muted)' }} />
            </div>

            <div style={styles.terminalBody} className="glass">
              {dailyThoughts.map((thought, idx) => (
                <div key={idx} style={styles.logItem}>
                  <div style={styles.logHeader}>
                    <span style={styles.logTime}>[{thought.date} {thought.time}]</span>
                    <span style={styles.logCategory}>{thought.category}</span>
                  </div>
                  <p style={styles.logText}>$ {thought.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Git Graph & Live Stats */}
          <div style={styles.statsCol}>
            {/* Git contribution grid */}
            <div style={styles.statsCard} className="glass">
              <h3 style={styles.statsCardTitle}>
                <Activity size={18} style={styles.cardIcon} /> GitHub Contribution Graph
              </h3>
              
              <div style={styles.graphContainer}>
                <div style={styles.gridContainer}>
                  {contributionGrid.map((level, index) => (
                    <div 
                      key={index} 
                      style={{
                        ...styles.gridCell,
                        backgroundColor: getCellColor(level)
                      }}
                      title={`Activity index: ${level}`}
                    />
                  ))}
                </div>
                <div style={styles.graphLegend}>
                  <span>Less</span>
                  <div style={{ ...styles.legendBox, backgroundColor: getCellColor(0) }} />
                  <div style={{ ...styles.legendBox, backgroundColor: getCellColor(1) }} />
                  <div style={{ ...styles.legendBox, backgroundColor: getCellColor(2) }} />
                  <div style={{ ...styles.legendBox, backgroundColor: getCellColor(3) }} />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Live Counters */}
            <div style={styles.statsCard} className="glass">
              <h3 style={styles.statsCardTitle}>
                <HelpCircle size={18} style={styles.cardIcon} /> Live Board Signals
              </h3>
              
              <div style={styles.countersRow}>
                <div style={styles.counterItem}>
                  <span style={styles.counterValue}>{visitorCount}</span>
                  <span style={styles.counterLabel}>Total Visits</span>
                </div>

                <div 
                  style={{ ...styles.counterItem, cursor: 'pointer' }}
                  onClick={handleLike}
                  className="interactive"
                >
                  <span style={{ 
                    ...styles.counterValue, 
                    color: isLiked ? 'var(--color-accent-3)' : 'var(--text-primary)' 
                  }}>
                    {likes}
                  </span>
                  <span style={styles.counterLabel} className="btn-like-span">
                    <Heart size={12} fill={isLiked ? 'var(--color-accent-3)' : 'none'} color={isLiked ? 'var(--color-accent-3)' : 'var(--text-secondary)'} /> Click to Like
                  </span>
                </div>
              </div>
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
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '3rem',
    alignItems: 'start',
  },
  thoughtsCol: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '1.25rem',
    overflow: 'hidden',
  },
  terminalHeader: {
    padding: '0.75rem 1.25rem',
    borderTopLeftRadius: '1.25rem',
    borderTopRightRadius: '1.25rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid var(--glass-border)',
  },
  terminalDots: {
    display: 'flex',
    gap: '0.5rem',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    display: 'inline-block',
  },
  terminalTitle: {
    fontSize: '0.8rem',
    fontFamily: 'Consolas, Monaco, monospace',
    color: 'var(--text-secondary)',
  },
  terminalBody: {
    padding: '1.5rem',
    borderBottomLeftRadius: '1.25rem',
    borderBottomRightRadius: '1.25rem',
    borderTop: 'none',
    maxHeight: '400px',
    overflowY: 'auto',
    fontFamily: 'Consolas, Monaco, monospace',
  },
  logItem: {
    marginBottom: '1.25rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
    paddingBottom: '1rem',
  },
  logHeader: {
    display: 'flex',
    gap: '1rem',
    fontSize: '0.78rem',
    color: 'var(--text-muted)',
    marginBottom: '0.35rem',
  },
  logTime: {
    color: 'var(--color-accent-1)',
  },
  logCategory: {
    background: 'rgba(255,255,255,0.05)',
    padding: '0.1rem 0.4rem',
    borderRadius: '0.25rem',
  },
  logText: {
    fontSize: '0.9rem',
    lineHeight: '1.5',
    color: 'var(--text-primary)',
  },
  statsCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  statsCard: {
    padding: '1.75rem',
    borderRadius: '1.25rem',
  },
  statsCardTitle: {
    fontSize: '1.15rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  cardIcon: {
    color: 'var(--color-accent-1)',
  },
  graphContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(23, 1fr)',
    gap: '4px',
  },
  gridCell: {
    width: '100%',
    paddingBottom: '100%', // make square relative to column width
    borderRadius: '2px',
    transition: 'transform 0.15s ease',
  },
  graphLegend: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '0.3rem',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
  },
  legendBox: {
    width: '10px',
    height: '10px',
    borderRadius: '2px',
  },
  countersRow: {
    display: 'flex',
    gap: '2rem',
  },
  counterItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  counterValue: {
    fontSize: '2.5rem',
    fontWeight: '800',
    fontFamily: 'var(--font-display)',
    lineHeight: '1',
  },
  counterLabel: {
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
};

// Add variables for git graphs in theme styling
const gitGraphStyles = `
:root {
  --git-graph-lvl-0: rgba(255,255,255,0.04);
  --git-graph-lvl-1: #0e4429;
  --git-graph-lvl-2: #006d32;
  --git-graph-lvl-3: #26a641;
}
:root.light {
  --git-graph-lvl-0: rgba(0,0,0,0.04);
  --git-graph-lvl-1: #9be9a8;
  --git-graph-lvl-2: #40c463;
  --git-graph-lvl-3: #216e39;
}
#journal div[style*="gridCell"]:hover {
  transform: scale(1.3);
  z-index: 10;
}
.btn-like-span {
  transition: color 0.2s ease;
}
.btn-like-span:hover {
  color: var(--color-accent-3) !important;
}
@media (max-width: 992px) {
  #journal div[style*="grid"] {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
`;

if (typeof document !== 'undefined') {
  const sheet = document.createElement('style');
  sheet.innerText = gitGraphStyles;
  document.head.appendChild(sheet);
}
