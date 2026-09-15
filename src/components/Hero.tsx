import React from 'react';
import { motion } from 'motion/react';
import {
  FileDown,
  ArrowDown,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO, HERO_DATA } from '../data/portfolioData';
import { trackResumeDownload, trackLinkedInClick } from '../utils/analytics';
import { LinkedInIcon } from './BrandIcons';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleDownloadResume = () => {
    trackResumeDownload();
  };

  const handleLinkedIn = () => {
    trackLinkedInClick();
  };

  return (
    <section
      id="home"
      className="relative pt-6 pb-14 sm:pt-12 sm:pb-20 overflow-hidden bg-white dark:bg-[#161822] border-b border-slate-200 dark:border-white/10"
      aria-label="Executive Overview"
    >
      {/* Background tiny grid: optimized dark to light fade away */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden" 
        aria-hidden="true"
      >
        {/* Light Mode Grid */}
        <div 
          className="dark:hidden absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(100, 116, 139, 0.22) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(100, 116, 139, 0.22) 1px, transparent 1px)
            `,
            backgroundSize: '22px 22px',
            maskImage: 'radial-gradient(ellipse 95% 75% at 50% 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.12) 78%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 95% 75% at 50% 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.12) 78%, transparent 100%)',
          }}
        />
        {/* Dark Mode Grid */}
        <div 
          className="hidden dark:block absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(148, 163, 184, 0.22) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(148, 163, 184, 0.22) 1px, transparent 1px)
            `,
            backgroundSize: '22px 22px',
            maskImage: 'radial-gradient(ellipse 95% 75% at 50% 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.12) 78%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 95% 75% at 50% 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.12) 78%, transparent 100%)',
          }}
        />
        <div className="absolute top-[-80px] left-1/4 w-[400px] h-[400px] rounded-full bg-red-500/8 dark:bg-[#FF2E2E]/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Column 1: Executive Information (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-5 text-left"
          >
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/30 text-xs font-semibold text-red-600 dark:text-[#FF4A4A]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>Open to Strategic Commercial Opportunities | Dubai, UAE</span>
            </div>

            {/* Main Headline: Strategic Account Management, Customer Success and GTM */}
            <div>
              <h1
                id="hero-title"
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-slate-900 dark:text-[#FAF9F6] tracking-tight leading-[1.14]"
              >
                {HERO_DATA.headline}
              </h1>
              <p className="mt-2.5 text-base sm:text-lg font-semibold text-red-600 dark:text-[#FF4A4A]">
                {HERO_DATA.supportLine}
              </p>
            </div>

            {/* Core Narrative */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-[#E2E8F0] leading-relaxed max-w-2xl">
              {HERO_DATA.mainCopy}
            </p>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-[#94A3B8] leading-relaxed">
              {HERO_DATA.secondaryLine}
            </p>

            {/* Role Focus Pills - Core Competencies with New Business Acquisition */}
            <div className="pt-1">
              <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500 dark:text-[#94A3B8] block mb-2">
                Core Competencies & Functional Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {HERO_DATA.roleFocusPills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="metafic-card inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-[#F1F5F9] dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 text-slate-800 dark:text-[#FAF9F6] hover:border-red-500"
                  >
                    <CheckCircle2 className="w-3 h-3 text-red-600 dark:text-[#FF2E2E]" />
                    <span>{pill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-primary-cta"
                type="button"
                onClick={() => onNavigate('case-studies')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 dark:bg-[#FF2E2E] dark:hover:bg-[#FF4A4A] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
              >
                <span>Explore Case Studies</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                id="hero-secondary-cta"
                href={PERSONAL_INFO.canonicalResumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownloadResume}
                className="metafic-card inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-[#1E2230] text-slate-800 dark:text-[#FAF9F6] border border-[#CBD5E1] dark:border-white/15 hover:border-red-500 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <FileDown className="w-4 h-4 text-red-600 dark:text-[#FF4A4A]" />
                <span>Download Resume</span>
              </a>

              {/* LinkedIn with official LinkedIn icon */}
              <a
                id="hero-linkedin-link"
                href={PERSONAL_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkedIn}
                aria-label="Rajakumar's LinkedIn Profile"
                className="metafic-card inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white dark:bg-[#1E2230] text-[#0A66C2] dark:text-[#0A66C2] border border-[#CBD5E1] dark:border-white/15 hover:border-[#0A66C2] transition-colors focus:outline-hidden"
              >
                <LinkedInIcon className="w-4 h-4 fill-[#0A66C2]" />
                <span className="text-slate-800 dark:text-[#FAF9F6]">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Normal Profile Image without frame + Market Focus underneath */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] flex flex-col items-center lg:items-start">
              
              {/* Profile Image with uncropped full-head view + Dubai location tag */}
              <div className="relative w-full h-[380px] sm:h-[430px] rounded-2xl overflow-hidden shadow-md dark:shadow-2xl border border-[#CBD5E1] dark:border-white/10 bg-[#F1F5F9] dark:bg-[#1E2230]">
                <img
                  id="hero-profile-image"
                  src={PERSONAL_INFO.profileImageUrl}
                  alt="Rajakumar Sivasubramanian - Portrait"
                  width={380}
                  height={460}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-contain object-top"
                />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 dark:bg-[#1E2230]/95 backdrop-blur-xs border border-[#CBD5E1] dark:border-white/15 text-xs font-semibold text-slate-800 dark:text-[#FAF9F6] shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-red-600 dark:text-[#FF2E2E]" />
                  <span>Dubai, UAE</span>
                </div>
              </div>

              {/* Market Focus directly under photo */}
              <div className="mt-3.5 w-full text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#94A3B8]">
                    Market Focus
                  </span>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {['North America', 'UAE', 'EMEA', 'India'].map((region, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#F1F5F9] dark:bg-[#1E2230] text-slate-800 dark:text-[#FAF9F6] border border-[#CBD5E1] dark:border-white/10"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
