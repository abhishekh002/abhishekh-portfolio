import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer style={styles.footer} className="glass">
      <div className="container" style={styles.container}>
        <div style={styles.left}>
          <p style={styles.thanks}>Thanks for visiting my digital space.</p>
          <p style={styles.credits}>
            Designed & Developed by <span style={styles.highlight}>Abhishekh Kumar Tiwari</span>
          </p>
        </div>

        <div style={styles.right}>
          <div style={styles.socials}>
            <a 
              href="mailto:abhishekkumartiwari.vssut@gmail.com" 
              style={styles.socialIcon} 
              aria-label="Email" 
              className="interactive"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/abhishekh-kumar-tiwari" 
              target="_blank" 
              rel="noreferrer" 
              style={styles.socialIcon} 
              aria-label="LinkedIn" 
              className="interactive"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a 
              href="https://github.com/abhishekh-tiwari" 
              target="_blank" 
              rel="noreferrer" 
              style={styles.socialIcon} 
              aria-label="GitHub" 
              className="interactive"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>

          <button 
            onClick={scrollToTop} 
            style={styles.backToTop} 
            aria-label="Back to Top"
            className="interactive"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    borderTop: '1px solid var(--glass-border)',
    padding: '2.5rem 0',
    marginTop: '6rem',
    borderRadius: '1.5rem 1.5rem 0 0',
    position: 'relative',
    zIndex: 10,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  thanks: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    fontWeight: '500',
  },
  credits: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
  },
  highlight: {
    color: 'var(--color-accent-1)',
    fontWeight: '600',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  socials: {
    display: 'flex',
    gap: '1rem',
  },
  socialIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid var(--glass-border)',
    color: 'var(--text-secondary)',
    transition: 'all 0.2s ease',
  },
  backToTop: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, var(--color-accent-1), var(--color-accent-2))',
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
    transition: 'all 0.3s ease',
  },
};

// CSS hover effects for footer
const footerHoverStyles = `
footer a[style*="socialIcon"]:hover {
  border-color: var(--color-accent-1) !important;
  color: var(--color-accent-1) !important;
  background: rgba(99, 102, 241, 0.05) !important;
}
footer button[style*="backToTop"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.35);
}
@media (max-width: 576px) {
  footer div[style*="container"] {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  footer div[style*="right"] {
    flex-direction: column;
    gap: 1rem;
  }
}
`;
if (typeof document !== 'undefined') {
  const sheet = document.createElement('style');
  sheet.innerText = footerHoverStyles;
  document.head.appendChild(sheet);
}
