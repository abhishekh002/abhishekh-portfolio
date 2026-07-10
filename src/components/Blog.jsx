import React, { useState } from 'react';
import { Search, Calendar, Clock, ArrowRight, X, Heart, Share2, BookOpen } from 'lucide-react';
import abhishekhMotorcycle from '../assets/abhishekh_motorcycle.jpg';
import abhishekhCorridor from '../assets/abhishekh_corridor.jpg';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);
  const [likes, setLikes] = useState({});

  const tags = ['All', 'Career', 'Electronics', 'IoT', 'Software', 'AI/ML', 'Productivity', 'Learning'];

  const articles = [
    {
      id: 1,
      title: 'My Journey from Electronics to Software Development',
      excerpt: 'How drawing transistor logic gates led me down the rabbit hole of computer algorithms, full-stack Java, and intelligent apps.',
      tag: 'Career',
      date: 'Jul 08, 2026',
      readTime: '6 min read',
      cover: abhishekhCorridor,
      content: `
## Discovering a New Dimension

Entering the Electronics and Telecommunication branch at VSSUT Burla, I expected to spend my college years working with oscilloscopes, transistors, and signal generators. I did exactly that—until I ran into microcontrollers. 

Programming my first board to flash an LED using C++ opened up a new dimension of creativity. I realized that while hardware is the body, software is the soul. 

### Why Java Full Stack?

As I grew more confident, I realized I wanted to build large-scale systems. Java stood out as the backbone of enterprise engineering. Learning Java led me to databases, thread pools, and web APIs. Understanding how to manage memory, optimize queries, and design robust architectures turned me from a hobbyist coder into a software engineer.

### Merging Both Worlds

Today, I don't see myself as just an electronics student or a software developer. I sit at the intersection. My training in digital signal processing helps me understand machine learning features, and my knowledge of full-stack Java allows me to construct scalable frontends for IoT automation.
      `
    },
    {
      id: 2,
      title: 'What I Learned During My VLSI Internship',
      excerpt: 'Deep dive into silicon layouts, digital logic design, and the discipline required to design microchips where a single error costs millions.',
      tag: 'Electronics',
      date: 'Jun 20, 2026',
      readTime: '5 min read',
      cover: 'gradient-1',
      content: `
## Silicon Design Discipline

VLSI (Very Large Scale Integration) is where software concepts directly dictate physical layout. During my internship, I worked with hardware description languages (Verilog) to design layout paths.

### Key Takeaways:

1. **Precision**: In web development, you can deploy a hotfix in minutes. In hardware, tape-out errors cost millions of dollars and months of delays. Precision must be built in at every stage.
2. **Abstractions**: Breaking down complex circuits into logical cells is exactly like designing microservices.
3. **Synthesis**: Understanding how high-level code compiles into physical AND/OR gates teaches you to write efficient, low-overhead software.
      `
    },
    {
      id: 3,
      title: 'Building an Arduino Railway Gate Automation Project',
      excerpt: 'A step-by-step breakdown of utilizing ultrasonic sensors and servo motors to build an automated, accident-free level crossing.',
      tag: 'IoT',
      date: 'May 14, 2026',
      readTime: '7 min read',
      cover: 'gradient-2',
      content: `
## Solving Real-World Traffic Safety Issues

Railway crossing accidents remain a critical hazard. I wanted to design an embedded automation prototype that closes the gates safely whenever a train is approaching, without manual intervention.

### System Components:
* **Arduino Uno**: The brain processing signals.
* **Ultrasonic Sensors**: Positioned at a distance from the gate to calculate train proximity and speed.
* **Servo Motors**: Moving the physical barrier mechanism.
* **Liquid Crystal Display (LCD)**: Providing warning text and status indicators.

### The Algorithm:
The code continuously calculates the distance of objects. When an incoming train crosses the threshold, the servos actuate, lowering the gates while trigger alerts sound. Once the train passes a second sensor downstream, the gates open automatically.
      `
    },
    {
      id: 4,
      title: 'Why I Started Learning Java Full Stack Development',
      excerpt: 'Explaining why I chose Java over other ecosystems for backend reliability, multithreading capabilities, and architectural growth.',
      tag: 'Software',
      date: 'Apr 10, 2026',
      readTime: '4 min read',
      cover: 'gradient-3',
      content: `
## Building Systems That Scale

While JavaScript and Python are great, Java offers structural guardrails that make writing complex systems safer. 

### Core Reasons for Choosing Java:
* **The JVM**: Portability and runtime optimizations.
* **Robust Concurrency**: Java handles millions of active requests efficiently.
* **System Design Principles**: Java encourages design patterns, making codebases easier to maintain.

Currently, I am expanding my skills into Spring Boot, microservices, and React frontends to build unified applications.
      `
    },
    {
      id: 5,
      title: 'My Experience with AI and Machine Learning',
      excerpt: 'From basic linear regressions to neural networks. A review of how I train models to analyze sensors and automate tasks.',
      tag: 'AI/ML',
      date: 'Mar 15, 2026',
      readTime: '5 min read',
      cover: 'gradient-4',
      content: `
## Intelligent Automation

Artificial Intelligence is the next step for embedded systems. Instead of hardcoding conditional thresholds (e.g., if temp > 50), ML models can analyze patterns over time and adapt.

### Projects I am Working On:
1. **Anomaly Detectors**: Reviewing signals from motors to predict mechanical failure.
2. **Predictive Solar Cells**: Optimizing window panels to face solar beams by analyzing historical light parameters.
      `
    },
    {
      id: 6,
      title: 'Lessons from My Telecom Internships',
      excerpt: 'Analyzing signal propagation, microwave towers, fiber-optic distribution systems, and the foundations of the global internet.',
      tag: 'Electronics',
      date: 'Feb 18, 2026',
      readTime: '6 min read',
      cover: abhishekhMotorcycle,
      content: `
## Connecting the Dots

Interning with telecom departments gave me exposure to signal pipelines. 

### Key Lessons:
* **Signal Loss & Noise**: Minimizing noise in copper and optical networks.
* **Packet Routing**: Seeing the structural pipelines that power the web.
* **Scale**: Maintaining 99.999% network uptime under extreme weather conditions.
      `
    },
    {
      id: 7,
      title: 'Productivity Tips for Engineering Students',
      excerpt: 'Balancing B.Tech academics, software projects, coding practice, and internships without burnout.',
      tag: 'Productivity',
      date: 'Jan 22, 2026',
      readTime: '4 min read',
      cover: 'gradient-5',
      content: `
## Managing the Engineering Schedule

B.Tech coursework is heavy, but building a portfolio is vital. Here is how I organize my days:

* **Time Blocking**: Dedicating early mornings to code practice, afternoons to college labs, and evenings to project building.
* **Build publicly**: Documenting achievements on GitHub.
* **Active learning**: Explaining concepts through code writeups or sharing with peers.
      `
    },
    {
      id: 8,
      title: 'Things I\'m Learning Every Week',
      excerpt: 'A weekly digest logging my exploration into Spring Boot configurations, React transitions, and system architectures.',
      tag: 'Learning',
      date: 'Dec 05, 2025',
      readTime: '3 min read',
      cover: 'gradient-6',
      content: `
## The Lifelong Learner Log

Technology moves fast. To stay relevant, I commit to learning one new technology or architectural standard weekly.

### What is on the Radar:
* **Spring Boot JPA optimizations**.
* **Framer Motion animations**.
* **AWS Cloud deployments**.
      `
    }
  ];

  const handleLike = (id, e) => {
    e.stopPropagation();
    setLikes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'All' || article.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  const getCoverStyle = (cover) => {
    if (cover.startsWith('gradient-')) {
      const idx = cover.split('-')[1];
      const gradients = [
        'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
        'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
        'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
        'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
        'linear-gradient(135deg, #8b5cf6 0%, #10b981 100%)',
      ];
      return { background: gradients[parseInt(idx) - 1 || 0] };
    }
    return { backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center' };
  };

  return (
    <section id="blog" className="section" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Developer Blog</h2>
        <p className="section-subtitle">
          Documenting my experiments, learning progress, and internship journals in software development, VLSI, and IoT.
        </p>

        {/* Filter Controls */}
        <div style={styles.filterBar} className="glass">
          <div style={styles.searchWrapper}>
            <Search size={18} style={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
          </div>
          
          <div style={styles.tagWrapper}>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                style={{
                  ...styles.tagButton,
                  backgroundColor: selectedTag === tag ? 'var(--color-accent-1)' : 'transparent',
                  color: selectedTag === tag ? '#fff' : 'var(--text-secondary)',
                  borderColor: selectedTag === tag ? 'var(--color-accent-1)' : 'var(--glass-border)',
                }}
                className="interactive"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid" style={styles.grid}>
          {filteredArticles.map((article) => (
            <article 
              key={article.id} 
              style={styles.card} 
              className="glass tilt-card interactive"
              onClick={() => setActiveArticle(article)}
            >
              <div style={{ ...styles.cardCover, ...getCoverStyle(article.cover) }}>
                <span style={styles.cardTag}>{article.tag}</span>
              </div>
              <div style={styles.cardBody}>
                <div style={styles.metaRow}>
                  <span style={styles.metaItem}>
                    <Calendar size={13} /> {article.date}
                  </span>
                  <span style={styles.metaItem}>
                    <Clock size={13} /> {article.readTime}
                  </span>
                </div>
                <h3 style={styles.cardTitle}>{article.title}</h3>
                <p style={styles.cardExcerpt}>{article.excerpt}</p>
                
                <div style={styles.cardFooter}>
                  <span style={styles.readMore}>
                    Read Article <ArrowRight size={14} style={styles.readMoreArrow} />
                  </span>
                  <button 
                    onClick={(e) => handleLike(article.id, e)} 
                    style={styles.likeBtn}
                    className="interactive"
                  >
                    <Heart size={14} fill={likes[article.id] ? 'var(--color-accent-3)' : 'none'} color={likes[article.id] ? 'var(--color-accent-3)' : 'var(--text-secondary)'} />
                    <span>{likes[article.id] || 0}</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div style={styles.emptyState}>
            <p>No articles found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Article Detail Overlay Modal */}
      {activeArticle && (
        <div style={styles.modalOverlay} onClick={() => setActiveArticle(null)}>
          <div 
            style={styles.modalContent} 
            className="glass" 
            onClick={(e) => e.stopPropagation()}
          >
            <div style={styles.modalHeader}>
              <div style={styles.modalMeta}>
                <span style={styles.tagBadge}>{activeArticle.tag}</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <button 
                onClick={() => setActiveArticle(null)} 
                style={styles.closeBtn}
                className="interactive"
              >
                <X size={20} />
              </button>
            </div>
            
            <div style={{ ...styles.modalCover, ...getCoverStyle(activeArticle.cover) }}></div>

            <div style={styles.modalBody}>
              <h2 style={styles.modalTitle}>{activeArticle.title}</h2>
              <div className="markdown-body" dangerouslySetInnerHTML={{ __html: formatMarkdown(activeArticle.content) }} />
              
              <div style={styles.modalFooter}>
                <div style={styles.modalActions}>
                  <button 
                    onClick={(e) => handleLike(activeArticle.id, e)} 
                    style={styles.actionBtn}
                    className="interactive"
                  >
                    <Heart size={16} fill={likes[activeArticle.id] ? 'var(--color-accent-3)' : 'none'} color={likes[activeArticle.id] ? 'var(--color-accent-3)' : 'var(--text-secondary)'} />
                    <span>Like ({likes[activeArticle.id] || 0})</span>
                  </button>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    }} 
                    style={styles.actionBtn}
                    className="interactive"
                  >
                    <Share2 size={16} />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// Simple markdown formatter helper
function formatMarkdown(md) {
  if (!md) return '';
  return md
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^\* (.*$)/gim, '<li>$1</li>')
    .replace(/^(?!<h|<l)(.*$)/gim, '<p>$1</p>')
    .replace(/<li>(.*$)<\/li>/gim, '<ul><li>$1</li></ul>')
    .replace(/<\/ul>\n<ul>/g, '') // stitch bullet blocks together
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

const styles = {
  section: {
    position: 'relative',
    zIndex: 10,
  },
  filterBar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    padding: '1.25rem',
    borderRadius: '1.25rem',
    marginBottom: '3rem',
  },
  searchWrapper: {
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(0,0,0,0.2)',
    border: '1px solid var(--glass-border)',
    borderRadius: '2rem',
    padding: '0.5rem 1.25rem',
    gap: '0.75rem',
  },
  searchIcon: {
    color: 'var(--text-muted)',
  },
  searchInput: {
    width: '100%',
    fontSize: '0.95rem',
    color: 'var(--text-primary)',
  },
  tagWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  tagButton: {
    padding: '0.35rem 1rem',
    borderRadius: '1.5rem',
    fontSize: '0.85rem',
    fontWeight: '500',
    border: '1px solid',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '2rem',
  },
  card: {
    borderRadius: '1.25rem',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  cardCover: {
    height: '200px',
    position: 'relative',
  },
  cardTag: {
    position: 'absolute',
    bottom: '1rem',
    left: '1rem',
    padding: '0.25rem 0.75rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    borderRadius: '1rem',
    background: 'rgba(0,0,0,0.5)',
    color: '#fff',
    backdropFilter: 'blur(4px)',
  },
  cardBody: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  metaRow: {
    display: 'flex',
    gap: '1rem',
    fontSize: '0.8rem',
    color: 'var(--text-muted)',
    marginBottom: '0.75rem',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--text-primary)',
    lineHeight: '1.4',
    marginBottom: '0.75rem',
    transition: 'color 0.2s ease',
  },
  cardExcerpt: {
    fontSize: '0.92rem',
    lineHeight: '1.5',
    color: 'var(--text-secondary)',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid var(--glass-border)',
    paddingTop: '1rem',
    marginTop: 'auto',
  },
  readMore: {
    fontSize: '0.88rem',
    fontWeight: '600',
    color: 'var(--color-accent-1)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
  readMoreArrow: {
    transition: 'transform 0.2s ease',
  },
  likeBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.35rem',
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
  },
  emptyState: {
    textAlign: 'center',
    padding: '4rem 0',
    color: 'var(--text-muted)',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    backdropFilter: 'blur(8px)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  modalContent: {
    width: '100%',
    maxWidth: '850px',
    maxHeight: '90vh',
    borderRadius: '1.5rem',
    overflowY: 'auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.25rem 2rem',
    borderBottom: '1px solid var(--glass-border)',
  },
  modalMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
  },
  tagBadge: {
    background: 'rgba(99,102,241,0.15)',
    color: 'var(--color-accent-1)',
    padding: '0.2rem 0.6rem',
    borderRadius: '1rem',
    fontWeight: '600',
  },
  closeBtn: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'var(--text-primary)',
    transition: 'all 0.2s ease',
  },
  modalCover: {
    height: '280px',
    width: '100%',
  },
  modalBody: {
    padding: '2.5rem 3rem',
  },
  modalTitle: {
    fontSize: '2.25rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
  },
  modalFooter: {
    borderTop: '1px solid var(--glass-border)',
    paddingTop: '1.5rem',
    marginTop: '2.5rem',
  },
  modalActions: {
    display: 'flex',
    gap: '1rem',
  },
  actionBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    borderRadius: '2rem',
    border: '1px solid var(--glass-border)',
    fontSize: '0.88rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    color: 'var(--text-secondary)',
  },
};

// Insert micro-animations for cards hover
const blogCardAnim = `
article:hover h3 {
  color: var(--color-accent-1);
}
article:hover span[style*="readMoreArrow"] {
  transform: translateX(4px);
}
@media (max-width: 768px) {
  #blog div[style*="modalBody"] {
    padding: 1.5rem !important;
  }
  #blog h2[style*="modalTitle"] {
    font-size: 1.75rem !important;
  }
}
`;

if (typeof document !== 'undefined') {
  const stylesCard = document.createElement('style');
  stylesCard.innerText = blogCardAnim;
  document.head.appendChild(stylesCard);
}
