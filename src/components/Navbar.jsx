import React, { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isLight, setIsLight] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Journey', id: 'journey' },
    { name: 'Projects', id: 'projects' },
    { name: 'Blog', id: 'blog' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    // Check local storage or system preference for theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLight(true);
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }

    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Determine active section
      const scrollPosition = window.scrollY + 200;
      for (const item of menuItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setIsLight(false);
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsLight(true);
    }
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      
      <header style={styles.header} className="glass">
        <div style={styles.navContainer}>
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} style={styles.logo}>
            <span style={styles.logoDot}></span>
            Abhishekh Tiwari
          </a>

          {/* Desktop Nav */}
          <nav style={styles.desktopNav}>
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                style={{
                  ...styles.navLink,
                  color: activeSection === item.id ? 'var(--color-accent-1)' : 'var(--text-secondary)',
                  fontWeight: activeSection === item.id ? '600' : '400'
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div style={styles.controls}>
            <button 
              onClick={toggleTheme} 
              style={styles.themeToggle} 
              aria-label="Toggle Theme"
              className="interactive"
            >
              {isLight ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              style={styles.menuButton}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav style={styles.mobileNav} className="glass">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                style={{
                  ...styles.mobileNavLink,
                  color: activeSection === item.id ? 'var(--color-accent-1)' : 'var(--text-secondary)',
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: '1.25rem',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 2.5rem)',
    maxWidth: '1150px',
    height: '64px',
    zIndex: 100,
    borderRadius: '2rem',
    display: 'flex',
    alignItems: 'center',
    padding: '0 2rem',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '1.25rem',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logoDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-accent-1)',
    display: 'inline-block',
  },
  desktopNav: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  },
  navLink: {
    fontSize: '0.9rem',
    transition: 'color 0.2s ease',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  themeToggle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.05)',
    cursor: 'pointer',
    color: 'var(--text-primary)',
    transition: 'all 0.2s ease',
  },
  menuButton: {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'var(--text-primary)',
  },
  mobileNav: {
    position: 'absolute',
    top: '76px',
    left: 0,
    right: 0,
    borderRadius: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem',
    gap: '1rem',
  },
  mobileNavLink: {
    fontSize: '1.05rem',
    padding: '0.5rem 0',
  },
  // Responsive overrides via inline style adjustments handled dynamically or covered by css:
  // (We can use CSS media queries to hide/show standard classes)
};

// Add responsive style rule to hide desktop nav and show menu button on mobile
const responsiveStyles = `
@media (max-width: 768px) {
  header nav {
    display: none !important;
  }
  header button[aria-label="Toggle Menu"] {
    display: flex !important;
  }
}
`;
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = responsiveStyles;
  document.head.appendChild(styleEl);
}
