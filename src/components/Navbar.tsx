import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { trackResumeDownload } from '../utils/analytics';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
  { label: 'Case Studies', href: '#case-studies', id: 'case-studies' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs'
          : 'bg-[#F7F8FA] border-b border-[#E2E8F0]/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Identity */}
          <a
            id="nav-logo-link"
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#315C8C] rounded-md"
            aria-label="Rajakumar Sivasubramanian - Home"
          >
            <img
              src={PERSONAL_INFO.monogramUrl}
              alt="RS Monogram"
              width={38}
              height={38}
              className="w-9.5 h-9.5 rounded-lg border border-[#E2E8F0] bg-white object-contain shadow-2xs group-hover:border-[#315C8C]/50 transition-colors"
            />
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-lg sm:text-xl text-[#172033] tracking-tight leading-tight">
                Rajakumar Sivasubramanian
              </span>
              <span className="text-xs text-[#64748B] font-medium tracking-wide">
                Key Account Management and Customer Success
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-[#172033] bg-[#E2E8F0]/60 font-semibold'
                      : 'text-[#64748B] hover:text-[#172033] hover:bg-black/5'
                  } focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#315C8C]`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA: Download Resume */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="nav-resume-cta"
              href={PERSONAL_INFO.canonicalResumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClick}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#172033] bg-white border border-[#E2E8F0] rounded-lg shadow-2xs hover:bg-[#F7F8FA] hover:border-[#CBD5E1] transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#315C8C]"
            >
              <FileDown className="w-3.5 h-3.5 text-[#315C8C]" />
              <span>{PERSONAL_INFO.ctaResumeText}</span>
              <ArrowUpRight className="w-3 h-3 text-[#64748B]" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#172033] rounded-lg border border-[#E2E8F0] bg-white hover:bg-[#F7F8FA] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#315C8C]"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden border-b border-[#E2E8F0] bg-white px-4 pt-3 pb-5 shadow-lg animate-in slide-in-from-top-2 duration-150"
        >
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`px-3 py-2.5 text-base font-medium rounded-lg ${
                    isActive
                      ? 'text-[#172033] bg-[#F7F8FA] font-semibold border-l-2 border-[#315C8C]'
                      : 'text-[#64748B] hover:text-[#172033] hover:bg-[#F7F8FA]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#E2E8F0]">
              <a
                id="mobile-resume-cta"
                href={PERSONAL_INFO.canonicalResumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  handleResumeClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#172033] bg-[#F7F8FA] border border-[#E2E8F0] rounded-lg"
              >
                <FileDown className="w-4 h-4 text-[#315C8C]" />
                <span>{PERSONAL_INFO.ctaResumeText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
