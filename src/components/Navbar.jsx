import React, { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isLight, setIsLight] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLight(true);
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) setScrollProgress((window.scrollY / totalScroll) * 100);
      setScrolled(window.scrollY > 20);

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

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header style={{
        ...styles.header,
        boxShadow: scrolled ? '0 8px 32px 0 rgba(0,0,0,0.35)' : 'none',
      }} className="glass">
        <div style={styles.navContainer}>
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} style={styles.logo}>
            <span style={styles.logoDot}></span>
            <span style={styles.logoText}>Abhishekh Tiwari</span>
          </a>

          {/* Desktop Nav — hidden on mobile via CSS class */}
          <nav className="nav-desktop">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                style={{
                  ...styles.navLink,
                  color: activeSection === item.id ? 'var(--color-accent-1)' : 'var(--text-secondary)',
                  fontWeight: activeSection === item.id ? '600' : '400',
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div style={styles.controls}>
            {/* Theme toggle */}
            <button onClick={toggleTheme} style={styles.themeToggle} aria-label="Toggle Theme" className="interactive">
              {isLight ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile menu button — shown on mobile via CSS class */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="nav-menu-btn"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
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
                  fontWeight: activeSection === item.id ? '600' : '400',
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
    top: '1rem',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 2rem)',
    maxWidth: '1150px',
    zIndex: 100,
    borderRadius: '2rem',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 1.5rem',
    transition: 'box-shadow 0.3s ease',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '60px',
  },
  logo: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '1.15rem',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    flexShrink: 0,
  },
  logoText: {
    whiteSpace: 'nowrap',
  },
  logoDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-accent-1)',
    display: 'inline-block',
    flexShrink: 0,
  },
  navLink: {
    fontSize: '0.88rem',
    transition: 'color 0.2s ease',
    whiteSpace: 'nowrap',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flexShrink: 0,
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
    border: '1px solid var(--glass-border)',
    flexShrink: 0,
  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 0.5rem',
    gap: '0.25rem',
    borderTop: '1px solid var(--glass-border)',
    marginBottom: '0.75rem',
    borderRadius: '0 0 1.5rem 1.5rem',
  },
  mobileNavLink: {
    fontSize: '1rem',
    padding: '0.65rem 1rem',
    borderRadius: '0.75rem',
    transition: 'background 0.2s ease',
  },
};
