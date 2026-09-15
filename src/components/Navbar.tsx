import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { trackResumeDownload } from '../utils/analytics';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { label: 'Overview', href: '#home', id: 'home' },
  { label: 'Impact', href: '#metrics', id: 'metrics' },
  { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Case Studies', href: '#case-studies', id: 'case-studies' },
  { label: 'Testimonials', href: '#feedback', id: 'feedback' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Escape key and body lock when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  const handleResumeClick = () => {
    trackResumeDownload();
  };

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#161822]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-sm dark:shadow-md'
          : 'bg-white/85 dark:bg-[#161822]/85 backdrop-blur-md border-b border-slate-200/70 dark:border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo & Identity: Enhanced scale monogram fitting boldly into the box */}
          <a
            id="nav-logo-link"
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-red-600 rounded-lg shrink-0"
            aria-label="Rajakumar Sivasubramanian - Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-slate-200 dark:border-white/15 bg-white dark:bg-[#1E2230] overflow-hidden flex items-center justify-center transition-all duration-200 group-hover:border-red-500 shadow-xs shrink-0">
              <img
                src={PERSONAL_INFO.monogramUrl}
                alt="RS Monogram"
                width={48}
                height={48}
                className="w-full h-full object-contain scale-145 transition-transform duration-200 group-hover:scale-155"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-heading font-bold text-sm sm:text-base md:text-lg text-slate-900 dark:text-[#FAF9F6] tracking-tight leading-tight group-hover:text-red-600 dark:group-hover:text-[#FF4A4A] transition-colors truncate max-w-[155px] xs:max-w-[200px] sm:max-w-none">
                {PERSONAL_INFO.name}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Visible on large screens) */}
          <nav
            id="desktop-navigation"
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100/80 dark:bg-[#1E2230] border border-slate-200 dark:border-white/10"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-red-600 dark:bg-[#FF2E2E]'
                      : 'text-slate-600 dark:text-[#CBD5E1] hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area: Dual Theme Toggle (Light & Dark) with Refined Glow + Resume + CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            
            {/* Refined dual toggle: Light (Sun) & Dark (Moon) */}
            <div
              id="theme-toggle-group"
              className="inline-flex items-center p-0.5 sm:p-1 rounded-xl border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-[#1E2230] shadow-xs"
              role="group"
              aria-label="Theme mode selection"
            >
              {/* Light Mode Button */}
              <button
                id="theme-light-btn"
                type="button"
                onClick={() => {
                  if (theme !== 'light') toggleTheme();
                }}
                aria-pressed={theme === 'light'}
                title="Light Mode"
                className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg transition-all duration-200 cursor-pointer ${
                  theme === 'light'
                    ? 'bg-white text-amber-500 border border-amber-300/80 toggle-glow-light ring-1 ring-amber-400/30'
                    : 'text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="sr-only">Light</span>
              </button>

              {/* Dark Mode Button */}
              <button
                id="theme-dark-btn"
                type="button"
                onClick={() => {
                  if (theme !== 'dark') toggleTheme();
                }}
                aria-pressed={theme === 'dark'}
                title="Dark Mode"
                className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg transition-all duration-200 cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-[#272B3D] text-[#FF4A4A] border border-red-500/50 toggle-glow-dark ring-1 ring-red-500/30'
                    : 'text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="sr-only">Dark</span>
              </button>
            </div>

            {/* CTA Button */}
            <a
              id="nav-cta-btn"
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-lg text-white bg-red-600 hover:bg-red-700 dark:bg-[#FF2E2E] dark:hover:bg-[#FF4A4A] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile/Tablet Menu Button */}
            <button
              id="mobile-menu-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-[#CBD5E1] hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-[#1E2230] border border-slate-200 dark:border-white/10 focus:outline-hidden cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle main navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Backdrop Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-16 sm:top-18 bg-black/50 backdrop-blur-xs z-40 lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile & Tablet Full Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            key="mobile-menu-content"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden relative z-50 bg-white/95 dark:bg-[#1A1D2A]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 px-4 sm:px-6 pt-3 pb-6 shadow-2xl space-y-3"
          >
            {/* Navigation links */}
            <div className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    id={`drawer-nav-${item.id}`}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-red-600 text-white dark:bg-[#FF2E2E] dark:text-[#FAF9F6] shadow-xs'
                        : 'text-slate-700 dark:text-[#CBD5E1] hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Actions: Resume & Contact */}
            <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.canonicalResumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleResumeClick();
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-[#1E2230] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-[#FAF9F6] hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
              >
                <FileDown className="w-4 h-4 text-red-600 dark:text-[#FF4A4A]" />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-700 dark:bg-[#FF2E2E] dark:hover:bg-[#FF4A4A] transition-colors"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
