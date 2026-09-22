import React, { useEffect, useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CommercialSnapshot } from './components/CommercialSnapshot';
import { HowIAddValue } from './components/HowIAddValue';
import { ProfessionalExperience } from './components/ProfessionalExperience';
import { TechAndIndustry } from './components/TechAndIndustry';
import { GtmFramework } from './components/GtmFramework';
import { CommercialStories } from './components/CommercialStories';
import { ToolsSystems } from './components/ToolsSystems';
import { FeedbackSection } from './components/FeedbackSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import {
  trackEvent,
  initScrollDepthTracking,
  initSectionTracking,
} from './utils/analytics';

const SECTION_NAV_MAP: Record<string, string> = {
  home: 'home',
  metrics: 'metrics',
  impact: 'metrics',
  capabilities: 'capabilities',
  strengths: 'capabilities',
  experience: 'experience',
  'tech-industry': 'tech-industry',
  'gtm-framework': 'gtm-framework',
  'case-studies': 'case-studies',
  tools: 'case-studies',
  feedback: 'feedback',
  contact: 'contact',
};

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Navigation scroll with sticky header height compensation
  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    // Compensate for sticky navbar so the section header aligns cleanly
    const navOffset = 70;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    const newHash = sectionId === 'home' ? '' : `#${sectionId}`;
    const newUrl = window.location.pathname + newHash;
    window.history.replaceState(null, '', newUrl);

    setActiveSection(SECTION_NAV_MAP[sectionId] || sectionId);
  }, []);

  // On initial mount: direct hash loading and analytics initialization
  useEffect(() => {
    trackEvent('page_view', { page_title: document.title });

    const cleanUpScroll = initScrollDepthTracking();
    const cleanUpSections = initSectionTracking();

    // Check direct hash URL on load
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const navOffset = 70;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
          setActiveSection(SECTION_NAV_MAP[targetId] || targetId);
        }
      }, 150);
    }

    return () => {
      cleanUpScroll();
      cleanUpSections();
    };
  }, []);

  // Update hash and nav state dynamically during scroll via replaceState
  useEffect(() => {
    const sectionIds = [
      'home',
      'metrics',
      'capabilities',
      'experience',
      'tech-industry',
      'gtm-framework',
      'case-studies',
      'tools',
      'feedback',
      'contact',
    ];

    let lastActiveId = '';

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // When near top
      if (scrollY < 100) {
        if (lastActiveId !== 'home') {
          lastActiveId = 'home';
          setActiveSection('home');
          if (window.location.hash) {
            window.history.replaceState(null, '', window.location.pathname);
          }
        }
        return;
      }

      // Check current section
      const headerOffset = 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - headerOffset;
          if (scrollY >= top) {
            if (lastActiveId !== id) {
              lastActiveId = id;
              setActiveSection(SECTION_NAV_MAP[id] || id);
              const hash = id === 'home' ? '' : `#${id}`;
              window.history.replaceState(null, '', window.location.pathname + hash);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#050508] text-slate-900 dark:text-[#FAF9F6] selection:bg-red-600 dark:selection:bg-[#FF2E2E] selection:text-white transition-colors duration-200">
      {/* Sticky Navigation with Dark/Light Toggle */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Single-Page Content */}
      <main className="flex-grow">
        {/* 1. Hero with uncropped full head portrait */}
        <Hero onNavigate={scrollToSection} />

        {/* 2. Commercial Snapshot (Metrics Dashboard) */}
        <CommercialSnapshot />

        {/* 3. Core Competencies & Commercial Tools */}
        <HowIAddValue />

        {/* 4. Professional Experience Lifecycle */}
        <ProfessionalExperience />

        {/* 5. Technology Solutions & SaaS Portfolio */}
        <TechAndIndustry />

        {/* 6. Go-To-Market Execution & Enablement Frameworks */}
        <GtmFramework onNavigate={scrollToSection} />

        {/* 7. Selected Engagements (Case Studies with Thumbnails & Deep Dive Modal) */}
        <CommercialStories />

        {/* 8. Tools, Commercial Systems & Disciplines */}
        <ToolsSystems />

        {/* 9. Testimonials */}
        <FeedbackSection />

        {/* 10. Let Us Connect (Lead Capture Hub) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
