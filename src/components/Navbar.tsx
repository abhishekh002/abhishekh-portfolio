import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#experience' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-300">
      {/* Floating Navbar Pill */}
      <nav 
        className={`flex items-center justify-between w-full max-w-4xl px-6 py-3 transition-all duration-500 rounded-full 
          ${scrolled 
            ? 'backdrop-blur-md bg-[#12181F]/80 border border-[#FF9F45]/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]' 
            : 'backdrop-blur-sm bg-[#12181F]/40 border border-[#FF9F45]/10'}`}
      >
        {/* Brand Logo / Monogram */}
        <a 
          href="#hero" 
          onClick={(e) => handleScrollTo(e, '#hero')}
          className="text-xl font-bold tracking-widest text-[#F5F1E8] hover:text-[#FF9F45] transition-colors duration-300"
        >
          AT<span className="text-[#FF9F45]">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm font-medium tracking-wide text-[#F5F1E8]/80 hover:text-[#FF9F45] transition-colors duration-300 relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF9F45] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Custom Mobile Menu Toggle Button (2-line animated hamburger) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-between w-6 h-3.5 focus:outline-none cursor-pointer z-50"
          aria-label="Toggle Menu"
        >
          <span
            className={`w-6 h-[2px] bg-[#F5F1E8] rounded-full transition-all duration-300 ease-out origin-center
              ${isOpen ? 'rotate-45 translate-y-[6px] bg-[#FF9F45]' : ''}`}
          />
          <span
            className={`w-6 h-[2px] bg-[#F5F1E8] rounded-full transition-all duration-300 ease-out origin-center
              ${isOpen ? '-rotate-45 -translate-y-[6px] bg-[#FF9F45]' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Drawer (Glass overlay) */}
      <div
        className={`fixed inset-0 bg-[#0A0E12]/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 z-40 transition-all duration-500 md:hidden
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {navLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            onClick={(e) => handleScrollTo(e, link.href)}
            className="text-2xl font-semibold tracking-wider text-[#F5F1E8] hover:text-[#FF9F45] transition-all duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}
