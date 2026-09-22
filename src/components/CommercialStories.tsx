import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import {
  X,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Briefcase,
  Layers,
  TrendingUp,
} from 'lucide-react';
import { trackCaseStudyOpen } from '../utils/analytics';
import { FadeInSection } from './FadeInSection';
import { motion, AnimatePresence } from 'motion/react';
import { CaseStudy } from '../types';

export const CommercialStories: React.FC = () => {
  const [hoveredStory, setHoveredStory] = useState<CaseStudy | null>(null);
  const [isPopupHovered, setIsPopupHovered] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearAllTimers = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => clearAllTimers();
  }, [clearAllTimers]);

  // Handle escape key to close popup
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearAllTimers();
        setHoveredStory(null);
        setIsMobileModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [clearAllTimers]);

  // Handle Card Mouse Enter
  const handleCardMouseEnter = (study: CaseStudy) => {
    clearAllTimers();
    // Smooth 60ms debounce for natural feel without jitter
    hoverTimeoutRef.current = setTimeout(() => {
      if (hoveredStory?.id !== study.id) {
        trackCaseStudyOpen(study.title);
        setHoveredStory(study);
      }
    }, 60);
  };

  // Handle Card Mouse Leave
  const handleCardMouseLeave = () => {
    clearAllTimers();
    // 250ms grace period so mouse can enter popup container smoothly
    leaveTimeoutRef.current = setTimeout(() => {
      if (!isPopupHovered) {
        setHoveredStory(null);
      }
    }, 250);
  };

  // Handle Popup Container Mouse Enter
  const handlePopupMouseEnter = () => {
    clearAllTimers();
    setIsPopupHovered(true);
  };

  // Handle Popup Container Mouse Leave
  const handlePopupMouseLeave = () => {
    setIsPopupHovered(false);
    clearAllTimers();
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredStory(null);
    }, 220);
  };

  // Handle Mobile Tap / Click
  const handleCardClick = (study: CaseStudy) => {
    clearAllTimers();
    trackCaseStudyOpen(study.title);
    setHoveredStory(study);
    setIsMobileModalOpen(true);
  };

  const handleClosePopup = () => {
    clearAllTimers();
    setHoveredStory(null);
    setIsMobileModalOpen(false);
  };

  return (
    <section
      id="case-studies"
      className="py-12 sm:py-18 bg-slate-50 dark:bg-[#161822] border-b border-slate-200 dark:border-white/10 relative overflow-hidden"
      aria-labelledby="stories-heading"
    >
      <FadeInSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.52, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl mb-8 sm:mb-10 text-left"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/30 text-xs font-semibold text-red-600 dark:text-[#FF4A4A] uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-red-600 dark:text-[#FF2E2E]" />
            <span>Portfolio Case Studies</span>
          </div>
          <h2
            id="stories-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#FAF9F6] tracking-tight"
          >
            Selected Engagements
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
            Blueprinting full-cycle technology partnerships: From cold market diagnostics to multi-year revenue expansion. Hover any engagement card below to reveal the complete commercial strategy and outcome metrics.
          </p>
        </motion.div>

        {/* Engagements Grid (11 Case Studies with Thumbnails & Interactive Hover Behavior) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {CASE_STUDIES.map((study, idx) => {
            const isHovered = hoveredStory?.id === study.id;

            return (
              <motion.div
                key={study.id}
                id={`case-card-${study.id}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.52,
                  delay: Math.min((idx % 3) * 0.08, 0.25),
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                onMouseEnter={() => handleCardMouseEnter(study)}
                onMouseLeave={handleCardMouseLeave}
                onClick={() => handleCardClick(study)}
                tabIndex={0}
                role="button"
                aria-haspopup="dialog"
                aria-expanded={isHovered}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(study);
                  }
                }}
                className={`metafic-card group rounded-2xl border flex flex-col justify-between transition-all duration-300 overflow-hidden text-left cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500 ${
                  isHovered
                    ? 'bg-white dark:bg-[#1E2230] border-red-500 dark:border-[#FF2E2E] shadow-xl ring-2 ring-red-500/20 scale-[1.01]'
                    : 'bg-white dark:bg-[#1E2230] border-[#CBD5E1] dark:border-white/10 hover:border-red-400 dark:hover:border-red-500/50 shadow-xs'
                }`}
              >
                {/* Thumbnail Image Container */}
                <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-100 dark:bg-[#161822] border-b border-slate-200 dark:border-white/10">
                  {study.imageUrl ? (
                    <img
                      src={study.imageUrl}
                      alt={study.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-200 dark:bg-[#272B3D]">
                      <Briefcase className="w-10 h-10 text-slate-400" />
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none" />

                  {/* Badges on Thumbnail */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-white/95 dark:bg-[#161822]/95 backdrop-blur-xs text-red-600 dark:text-[#FF4A4A] border border-red-200 dark:border-[#FF2E2E]/30 uppercase tracking-wider shadow-xs">
                      {study.category}
                    </span>
                    {study.status && (
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-xs text-white border border-white/20 shadow-xs truncate max-w-[140px]">
                        {study.status}
                      </span>
                    )}
                  </div>

                  {/* Live Hover Status Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-xs text-[11px] font-medium text-slate-200 border border-white/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      <span>{isHovered ? 'Active Blueprint View' : 'Hover for Full Details'}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Industry & Market Tag */}
                    {study.industryAndMarket && (
                      <div className="text-[11px] font-semibold text-slate-500 dark:text-[#94A3B8] mb-1.5 line-clamp-1">
                        {study.industryAndMarket}
                      </div>
                    )}

                    {/* Case Study Title */}
                    <h3 className="font-heading text-base font-bold text-slate-900 dark:text-[#FAF9F6] leading-snug mb-2 group-hover:text-red-600 dark:group-hover:text-[#FF4A4A] transition-colors">
                      {study.title}
                    </h3>

                    {/* Short Summary */}
                    <p className="text-xs text-slate-600 dark:text-[#CBD5E1] leading-relaxed mb-3 line-clamp-3">
                      {study.summary}
                    </p>
                  </div>

                  {/* Bottom Interactive Strip (No button, clean hover feedback strip) */}
                  <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-2 text-[11px] font-medium text-slate-500 dark:text-[#94A3B8]">
                    <span className="inline-flex items-center gap-1 text-red-600 dark:text-[#FF4A4A] font-semibold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Strategy & Impact</span>
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform text-slate-400 dark:text-slate-500 font-semibold">
                      Hover to expand →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note on Outcome Benchmarks & Commercial Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 p-4 sm:p-5 rounded-xl bg-white dark:bg-[#1E2230] border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-[#CBD5E1] text-left max-w-4xl mx-auto shadow-xs"
        >
          <div className="font-bold text-slate-900 dark:text-[#FAF9F6] mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-red-600 dark:text-[#FF2E2E]" />
            <span>Note on Outcome Metrics & Commercial Scoping</span>
          </div>
          <p className="leading-relaxed">
            These case studies reflect representative engagements across SaaS, enterprise platforms, AI workflows, digital transformation, and engineering services. Where actual audited project metrics were available, they have been recorded directly; where solutions were scoped or phased, indicative impact and target benchmarks are provided based on workflow modeling and comparable deployments.
          </p>
        </motion.div>
      </FadeInSection>

      {/* Interactive Smooth Hover / Tap Popup Window Container */}
      <AnimatePresence>
        {hoveredStory && (
          <div
            id="case-study-hover-portal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-xs overflow-y-auto"
            onClick={handleClosePopup}
          >
            <motion.div
              id={`hover-popup-${hoveredStory.id}`}
              key={hoveredStory.id}
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={handlePopupMouseEnter}
              onMouseLeave={handlePopupMouseLeave}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-white dark:bg-[#1A1D2B] border-2 border-red-500/40 dark:border-red-500/50 shadow-2xl overflow-hidden text-left"
            >
              {/* Top Accent Gradient Bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-[#FF4A4A] to-red-600 shrink-0" />

              {/* Popup Header */}
              <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-[#161822]/90 flex items-start justify-between gap-4 shrink-0">
                <div className="pr-2">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-red-100 dark:bg-[#FF2E2E]/20 text-red-600 dark:text-[#FF4A4A] border border-red-200 dark:border-[#FF2E2E]/30 uppercase tracking-wider">
                      {hoveredStory.category}
                    </span>
                    {hoveredStory.status && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-[#CBD5E1]">
                        {hoveredStory.status}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-extrabold text-slate-900 dark:text-[#FAF9F6] leading-snug">
                    {hoveredStory.title}
                  </h3>
                  {hoveredStory.industryAndMarket && (
                    <p className="text-xs font-semibold text-slate-500 dark:text-[#94A3B8] mt-1">
                      {hoveredStory.industryAndMarket}
                    </p>
                  )}
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={handleClosePopup}
                  aria-label="Close detailed popup"
                  className="w-8 h-8 rounded-xl bg-slate-200/70 dark:bg-[#272B3D] text-slate-600 dark:text-slate-300 hover:bg-red-600 hover:text-white dark:hover:bg-[#FF2E2E] dark:hover:text-white transition-colors flex items-center justify-center shrink-0 cursor-pointer shadow-xs"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Popup Body (Scrollable with rich structured sections) */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs text-slate-700 dark:text-[#CBD5E1]">
                
                {/* Business Challenge */}
                {hoveredStory.businessChallenge && (
                  <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-[#1E2230]/70 border border-slate-200/80 dark:border-white/5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-600 dark:text-[#94A3B8] block mb-1">
                      Business Challenge:
                    </span>
                    <p className="leading-relaxed text-slate-800 dark:text-[#E2E8F0]">
                      {hoveredStory.businessChallenge}
                    </p>
                  </div>
                )}

                {/* Opportunity Discovery */}
                {hoveredStory.opportunityDiscovery && (
                  <div className="p-3.5 rounded-xl bg-red-50/50 dark:bg-[#FF2E2E]/5 border border-red-200/60 dark:border-[#FF2E2E]/20">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-red-600 dark:text-[#FF4A4A] block mb-1">
                      Opportunity Discovery:
                    </span>
                    <p className="leading-relaxed text-slate-800 dark:text-[#E2E8F0]">
                      {hoveredStory.opportunityDiscovery}
                    </p>
                  </div>
                )}

                {/* Commercial Approach */}
                {hoveredStory.commercialApproach && (
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-[#94A3B8] block mb-1">
                      Commercial Approach:
                    </span>
                    <p className="leading-relaxed text-slate-700 dark:text-[#CBD5E1]">
                      {hoveredStory.commercialApproach}
                    </p>
                  </div>
                )}

                {/* Solution Strategy */}
                {hoveredStory.solutionStrategy && hoveredStory.solutionStrategy.length > 0 && (
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-[#94A3B8] block mb-1.5">
                      Solution Strategy & Blueprint:
                    </span>
                    <ul className="space-y-1.5 pl-1">
                      {hoveredStory.solutionStrategy.map((s, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="text-red-500 font-bold shrink-0">•</span>
                          <span className="leading-relaxed text-slate-700 dark:text-[#CBD5E1]">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* My Contribution */}
                {hoveredStory.myContribution && hoveredStory.myContribution.length > 0 && (
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-[#94A3B8] block mb-1.5">
                      My Contribution & Account Leadership:
                    </span>
                    <ul className="space-y-1.5 pl-1">
                      {hoveredStory.myContribution.map((c, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <span className="text-red-500 font-bold shrink-0">•</span>
                          <span className="leading-relaxed text-slate-700 dark:text-[#CBD5E1]">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Impact & Outcomes Highlight Card */}
                {(hoveredStory.businessImpact ||
                  hoveredStory.indicativeBusinessImpact ||
                  hoveredStory.targetBusinessImpact) && (
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/30">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-red-600 dark:text-[#FF4A4A] block mb-2">
                      {hoveredStory.businessImpact
                        ? 'Audited Business Impact & Outcomes:'
                        : hoveredStory.targetBusinessImpact
                        ? 'Target Business Impact Benchmarks:'
                        : 'Indicative Business Impact:'}
                    </span>
                    <ul className="space-y-2 text-slate-800 dark:text-[#FAF9F6] font-medium">
                      {(
                        hoveredStory.businessImpact ||
                        hoveredStory.targetBusinessImpact ||
                        hoveredStory.indicativeBusinessImpact ||
                        []
                      ).map((imp, impIdx) => (
                        <li key={impIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-[#FF2E2E] shrink-0 mt-0.5" />
                          <span className="leading-snug">{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Capabilities Demonstrated */}
                {hoveredStory.capabilitiesDemonstrated && (
                  <div className="pt-2 border-t border-slate-200/80 dark:border-white/10">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-[#94A3B8] block mb-1.5">
                      Competencies Applied:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {hoveredStory.capabilitiesDemonstrated.map((cap, capIdx) => (
                        <span
                          key={capIdx}
                          className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-white dark:bg-[#272B3D] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-[#CBD5E1]"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Popup Footer */}
              <div className="p-3.5 px-5 sm:px-6 bg-slate-50 dark:bg-[#161822] border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-500 dark:text-[#94A3B8] shrink-0">
                <span>Move mouse away or press Esc to close</span>
                <button
                  type="button"
                  onClick={handleClosePopup}
                  className="font-bold text-red-600 dark:text-[#FF4A4A] hover:underline cursor-pointer"
                >
                  Close Blueprint ✕
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
