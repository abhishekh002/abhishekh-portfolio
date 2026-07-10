import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Code, BookOpen, Briefcase, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import abhishekhMotorcycle from '../assets/abhishekh_motorcycle.jpg';

export default function Hero() {
  const words = [
    'Full Stack Java Developer',
    'Electronics Engineer',
    'AI Explorer',
    'Problem Solver',
    'Lifelong Learner'
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const canvasRef = useRef(null);

  // Typing effect loop
  useEffect(() => {
    let timer;
    const fullWord = words[currentWordIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(150);
          return;
        }
      }
      setTypingSpeed(isDeleting ? 50 : 150);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  // Floating particles canvas background for Hero section
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(99, 102, 241, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particlesArray = [];
    const numberOfParticles = 60;
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" style={styles.heroSection}>
      <canvas ref={canvasRef} style={styles.particleCanvas} />
      
      <div className="container hero-grid">
        {/* Left column: Text Content */}
        <div className="hero-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={styles.welcomeTag} className="glass hero-intro">
              ✨ Welcome to my digital space
            </span>
            <h1 style={styles.headline} className="hero-headline">
              Hi, I'm <br />
              <span className="text-gradient">Abhishekh Kumar Tiwari</span>
            </h1>
            
            <div style={styles.typingContainer} className="hero-typing">
              <span style={styles.typingLabel}>I am a </span>
              <span style={styles.typingText}>
                {currentText}
                <span style={styles.cursor}>|</span>
              </span>
            </div>

            <p style={styles.introduction}>
              I enjoy transforming ideas into software, embedded systems, and intelligent applications while documenting everything I learn.
            </p>

            <div style={styles.btnGroup} className="hero-btns">
              <button 
                onClick={() => handleScrollTo('journey')} 
                className="btn btn-primary interactive"
              >
                <Briefcase size={16} /> Explore My Journey
              </button>
              <button 
                onClick={() => handleScrollTo('projects')} 
                className="btn btn-secondary interactive"
              >
                <Code size={16} /> View Projects
              </button>
              <button 
                onClick={() => handleScrollTo('blog')} 
                className="btn btn-secondary interactive"
              >
                <BookOpen size={16} /> Read My Blog
              </button>
              <a 
                href="#contact" 
                onClick={() => handleScrollTo('contact')}
                className="btn btn-secondary interactive"
                style={{ display: 'inline-flex' }}
              >
                <FileText size={16} /> Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right column: 3D Glowing Orb Visual */}
        <div className="hero-right">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-orb-wrapper"
            style={styles.orbWrapper}
          >
            <div className="hero-orb-outer interactive" style={styles.orbOuterRing}>
              <div style={styles.orbInnerRing}>
                <img 
                  src={abhishekhMotorcycle} 
                  alt="Abhishekh Kumar Tiwari on Motorcycle" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    filter: 'contrast(1.02) brightness(0.95)',
                    transition: 'transform 0.5s ease',
                  }}
                  className="profile-pic"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div style={styles.scrollDownIndicator} onClick={() => handleScrollTo('about')}>
        <span style={styles.scrollText}>Scroll Down</span>
        <ArrowDown size={14} style={styles.scrollArrow} />
      </div>
    </section>
  );
}

const styles = {
  heroSection: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '80px',
  },
  particleCanvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1,
  },
  heroContainer: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '3rem',
    alignItems: 'center',
    width: '100%',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 10,
  },
  welcomeTag: {
    display: 'inline-block',
    padding: '0.4rem 1rem',
    fontSize: '0.85rem',
    fontWeight: '500',
    color: 'var(--color-accent-1)',
    borderRadius: '2rem',
    marginBottom: '1.5rem',
    width: 'fit-content',
  },
  headline: {
    fontSize: '4rem',
    fontWeight: '800',
    lineHeight: '1.1',
    marginBottom: '1.5rem',
  },
  typingContainer: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    height: '2.5rem',
    color: 'var(--text-secondary)',
  },
  typingLabel: {
    color: 'var(--text-muted)',
  },
  typingText: {
    color: 'var(--color-accent-1)',
  },
  cursor: {
    animation: 'blink 1s step-end infinite',
    color: 'var(--color-accent-1)',
  },
  introduction: {
    fontSize: '1.15rem',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
    marginBottom: '2.5rem',
    maxWidth: '550px',
  },
  btnGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  rightCol: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  orbWrapper: {
    position: 'relative',
    width: '320px',
    height: '320px',
  },
  orbOuterRing: {
    width: '320px',
    height: '320px',
    borderRadius: '50%',
    padding: '12px',
    background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.2), rgba(236, 72, 153, 0.1))',
    boxShadow: '0 0 40px rgba(99, 102, 241, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'pulseOuter 4s ease-in-out infinite alternate',
  },
  orbInnerRing: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--glass-border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  orbGlow: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, var(--color-accent-1) 0%, var(--color-accent-2) 40%, transparent 70%)',
    filter: 'blur(15px)',
    animation: 'pulseOrb 6s ease-in-out infinite alternate',
  },
  scrollDownIndicator: {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    opacity: 0.7,
    transition: 'opacity 0.2s ease',
    zIndex: 10,
  },
  scrollText: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--text-muted)',
  },
  scrollArrow: {
    animation: 'bounceArrow 2s infinite',
    color: 'var(--text-secondary)',
  },
};

// Keyframe animations — injected once cleanly (no responsive overrides; those are in index.css)
const heroKeyframes = `
@keyframes pulseOuter {
  0% { transform: scale(0.98); box-shadow: 0 0 25px rgba(99, 102, 241, 0.15); }
  100% { transform: scale(1.03); box-shadow: 0 0 45px rgba(99, 102, 241, 0.35); }
}
@keyframes blink {
  from, to { opacity: 0 }
  50% { opacity: 1 }
}
@keyframes pulseOrb {
  0% { transform: scale(0.9); opacity: 0.7; filter: blur(12px); }
  100% { transform: scale(1.15); opacity: 1; filter: blur(20px); }
}
@keyframes bounceArrow {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-6px); }
  60% { transform: translateY(-3px); }
}
`;

if (typeof document !== 'undefined' && !document.getElementById('hero-keyframes')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'hero-keyframes';
  styleSheet.textContent = heroKeyframes;
  document.head.appendChild(styleSheet);
}
