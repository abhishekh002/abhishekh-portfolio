import React, { useState } from 'react';
import { Mail, Send, MessageSquare, User, AtSign } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    // Mocking form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section" style={styles.section}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have an idea, collaboration, internship opportunity, or just want to say hello? I'd love to hear from you.
        </p>

        <div style={styles.grid}>
          {/* Left Column: Social Links Cards */}
          <div style={styles.infoCol}>
            <h3 style={styles.infoTitle}>Connect With Me</h3>
            <p style={styles.infoDesc}>
              Feel free to reach out via email or connect with me on professional social platforms. I usually respond within 24 hours.
            </p>

            <div style={styles.socialGrid}>
              <a 
                href="mailto:abhishekkumartiwari.vssut@gmail.com" 
                style={styles.socialCard} 
                className="glass interactive"
              >
                <div style={{ ...styles.iconBg, color: 'var(--color-accent-3)' }} className="glass">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={styles.socialName}>Email</h4>
                  <span style={styles.socialValue}>abhishekkumartiwari...</span>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/abhishekh-kumar-tiwari" 
                target="_blank" 
                rel="noreferrer" 
                style={styles.socialCard} 
                className="glass interactive"
              >
                <div style={{ ...styles.iconBg, color: 'var(--color-accent-4)' }} className="glass">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
                <div>
                  <h4 style={styles.socialName}>LinkedIn</h4>
                  <span style={styles.socialValue}>abhishekh-kumar-tiwari</span>
                </div>
              </a>

              <a 
                href="https://github.com/abhishekh-tiwari" 
                target="_blank" 
                rel="noreferrer" 
                style={styles.socialCard} 
                className="glass interactive"
              >
                <div style={{ ...styles.iconBg, color: 'var(--text-primary)' }} className="glass">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </div>
                <div>
                  <h4 style={styles.socialName}>GitHub</h4>
                  <span style={styles.socialValue}>abhishekh-tiwari</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div style={styles.formCol}>
            <form onSubmit={handleSubmit} style={styles.form} className="glass">
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <User size={14} style={styles.labelIcon} /> Name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name" 
                  className="form-input"
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <AtSign size={14} style={styles.labelIcon} /> Email
                </label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="name@example.com" 
                  className="form-input"
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <MessageSquare size={14} style={styles.labelIcon} /> Message
                </label>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or details..." 
                  className="form-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="btn btn-primary interactive"
                style={styles.submitBtn}
              >
                {loading ? (
                  <span>Sending...</span>
                ) : submitted ? (
                  <span>Sent Successfully!</span>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
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
    gridTemplateColumns: '0.92fr 1.08fr',
    gap: '4rem',
    alignItems: 'start',
  },
  infoCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  infoTitle: {
    fontSize: '1.75rem',
    fontWeight: '700',
  },
  infoDesc: {
    fontSize: '1.02rem',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
    marginBottom: '1rem',
  },
  socialGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  socialCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    padding: '1.25rem',
    borderRadius: '1rem',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  iconBg: {
    width: '44px',
    height: '44px',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialName: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    marginBottom: '0.15rem',
  },
  socialValue: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
  },
  formCol: {
    display: 'flex',
  },
  form: {
    width: '100%',
    padding: '2.5rem',
    borderRadius: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.88rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.35rem',
  },
  labelIcon: {
    color: 'var(--color-accent-1)',
  },
  submitBtn: {
    width: '100%',
    padding: '0.85rem',
    borderRadius: '2rem',
    marginTop: '0.5rem',
  },
};

// Social hover animations inside CSS helper
const socialHoverStyles = `
#contact a[style*="socialCard"]:hover {
  transform: translateX(6px);
  border-color: var(--color-accent-1) !important;
}
@media (max-width: 992px) {
  #contact div[style*="grid"] {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
`;
if (typeof document !== 'undefined') {
  const sheet = document.createElement('style');
  sheet.innerText = socialHoverStyles;
  document.head.appendChild(sheet);
}
