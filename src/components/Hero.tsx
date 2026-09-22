import React from 'react';
import { PERSONAL_INFO, HERO_DATA } from '../data/portfolioData';
import {
  FileDown,
  ArrowDown,
  Mail,
  Linkedin,
  MapPin,
  CheckCircle2,
  Calendar,
  MessageSquare,
} from 'lucide-react';
import {
  trackResumeDownload,
  trackEmailClick,
  trackLinkedInClick,
  trackWhatsAppClick,
} from '../utils/analytics';
import { FadeInSection } from './FadeInSection';
import { motion } from 'motion/react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-[#050508]"
      aria-label="Hero Introduction"
    >
      <FadeInSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Column 1: Core Narrative & Profile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-8 space-y-5 sm:space-y-6 text-left"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-[#1E2230] border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-[#FAF9F6] shadow-2xs max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="leading-snug">
                Open to Strategic Account Management, Customer Success & GTM Opportunities &middot; Dubai, UAE
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1
                id="hero-title"
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-slate-900 dark:text-[#FAF9F6] tracking-tight leading-[1.12]"
              >
                {HERO_DATA.headline}
              </h1>
              <p className="mt-3.5 text-base sm:text-lg font-semibold text-red-600 dark:text-[#FF4A4A] leading-snug">
                {HERO_DATA.supportLine}
              </p>
            </div>

            {/* Core Narrative */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-[#E2E8F0] leading-relaxed max-w-2xl">
              {HERO_DATA.mainCopy}
            </p>

            {/* Role Focus Pills */}
            <div className="pt-1.5">
              <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500 dark:text-[#94A3B8] block mb-2.5">
                Core Competencies & Functional Focus
              </span>
              <div className="flex flex-wrap gap-2 sm:gap-2.5 items-center">
                {HERO_DATA.roleFocusPills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="metafic-card inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg bg-[#F1F5F9] dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 text-slate-800 dark:text-[#FAF9F6] hover:border-red-500 transition-colors shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-600 dark:text-[#FF2E2E] shrink-0" />
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
                className="inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-5 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 dark:bg-[#FF2E2E] dark:hover:bg-[#FF4A4A] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer shadow-xs"
              >
                <span>Explore Case Studies</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                id="hero-secondary-cta"
                href={PERSONAL_INFO.canonicalResumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackResumeDownload()}
                className="inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-5 rounded-xl text-sm font-bold bg-white dark:bg-[#1E2230] text-slate-800 dark:text-[#FAF9F6] border border-[#CBD5E1] dark:border-white/15 hover:border-red-500 dark:hover:border-[#FF2E2E] transition-colors shadow-xs"
              >
                <FileDown className="w-4 h-4 text-red-600 dark:text-[#FF4A4A]" />
                <span>{PERSONAL_INFO.ctaResumeText}</span>
              </a>

              <a
                id="hero-calendly-cta"
                href={PERSONAL_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-4.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-[#161822] text-slate-700 dark:text-[#CBD5E1] border border-slate-200 dark:border-white/10 hover:border-red-500 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-red-600 dark:text-[#FF4A4A]" />
                <span>Schedule 30-Min Call</span>
              </a>
            </div>

            {/* Quick Contact Micro-Row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 pt-3.5 text-xs text-slate-600 dark:text-[#94A3B8] border-t border-slate-200/80 dark:border-white/10">
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-red-600 dark:text-[#FF2E2E]" />
                <span>{PERSONAL_INFO.professionalLocation}</span>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => trackEmailClick()}
                className="flex items-center gap-1.5 hover:text-red-600 dark:hover:text-[#FF4A4A] transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-red-600 dark:text-[#FF2E2E]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick()}
                className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLinkedInClick()}
                className="flex items-center gap-1.5 hover:text-[#0A66C2] transition-colors font-medium"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
            </div>

          </motion.div>

          {/* Column 2: Executive Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#1E2230] border-2 border-slate-200 dark:border-white/15 shadow-xl group">
                <img
                  src={PERSONAL_INFO.profileImageUrl}
                  alt={PERSONAL_INFO.name}
                  loading="eager"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/60 backdrop-blur-xs border border-white/10 text-white text-left">
                  <div className="text-xs font-bold font-heading">{PERSONAL_INFO.name}</div>
                  <div className="text-[11px] text-slate-300 font-medium">Dubai, United Arab Emirates</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </FadeInSection>
    </section>
  );
};
