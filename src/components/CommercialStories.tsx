import React, { useState, useRef, useEffect } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { trackCaseStudyOpen } from '../utils/analytics';
import { FadeInSection } from './FadeInSection';
import { motion, AnimatePresence } from 'motion/react';

export const CommercialStories: React.FC = () => {
  const [expandedStoryId, setExpandedStoryId] = useState<string | null>(null);
  const enterTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = () => {
    if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const toggleStory = (id: string, title: string) => {
    clearTimers();
    if (expandedStoryId === id) {
      setExpandedStoryId(null);
    } else {
      trackCaseStudyOpen(title);
      setExpandedStoryId(id);
    }
  };

  const handleStoryTriggerEnter = (id: string, title: string) => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    trackCaseStudyOpen(title);
    setExpandedStoryId(id);
  };

  const handleCardMouseLeave = () => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    leaveTimeoutRef.current = setTimeout(() => {
      setExpandedStoryId(null);
    }, 150);
  };

  return (
    <section
      id="case-studies"
      className="py-12 sm:py-18 bg-slate-50 dark:bg-[#161822] border-b border-slate-200 dark:border-white/10 relative overflow-hidden"
      aria-labelledby="stories-heading"
    >
      <FadeInSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.52, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl mb-8 sm:mb-10 text-left"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/30 text-xs font-semibold text-red-600 dark:text-[#FF4A4A] uppercase tracking-wider mb-2.5">
            <span>Commercial Deals & Accounts</span>
          </div>
          <h2
            id="stories-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#FAF9F6] tracking-tight"
          >
            Selected Commercial Stories
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
            Direct insight into discovery, deal progression, consultative scoping, and account expansion across 8 key engagements.
          </p>
        </motion.div>

        {/* Stories Grid: Smooth hover transitions, clean hand-off between boxes */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start"
          onMouseLeave={handleCardMouseLeave}
        >
          {CASE_STUDIES.map((study, idx) => {
            const isExpanded = expandedStoryId === study.id;
            const contentId = `story-detail-${study.id}`;

            return (
              <motion.div
                key={study.id}
                id={`case-card-${study.id}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.52,
                  delay: Math.min((idx % 4) * 0.08, 0.3),
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={`metafic-card rounded-xl border flex flex-col justify-between transition-all duration-200 ${
                  isExpanded
                    ? 'bg-white dark:bg-[#1E2230] border-red-500/60 dark:border-[#FF2E2E]/60 shadow-md dark:shadow-xl p-4 sm:p-5'
                    : 'bg-white dark:bg-[#1E2230] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/25 p-4 sm:p-5 shadow-xs'
                }`}
                onMouseLeave={handleCardMouseLeave}
              >
                <div>
                  {/* Category & Status Header */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[11px] font-bold text-red-600 dark:text-[#FF4A4A] uppercase tracking-wider">
                      {study.category}
                    </span>
                    {study.status && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-[#272B3D] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-[#CBD5E1] shrink-0">
                        {study.status}
                      </span>
                    )}
                  </div>

                  {/* Title: Clean, consistent typography */}
                  <h3 className="font-heading text-base font-bold text-slate-900 dark:text-[#FAF9F6] leading-snug mb-2 group-hover:text-red-600 dark:group-hover:text-[#FF4A4A] transition-colors">
                    {study.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 dark:text-[#CBD5E1] leading-relaxed mb-3">
                    {study.summary}
                  </p>
                </div>

                {/* Bottom Toggle Bar: Expands only on hover of 'View Commercial Story' */}
                <div className="pt-2.5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  <button
                    id={`toggle-story-btn-${study.id}`}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStory(study.id, study.title);
                    }}
                    onMouseEnter={() => handleStoryTriggerEnter(study.id, study.title)}
                    aria-expanded={isExpanded}
                    aria-controls={contentId}
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-[#272B3D] text-slate-800 dark:text-[#FAF9F6] hover:bg-red-600 hover:text-white dark:hover:bg-[#FF2E2E] dark:hover:border-[#FF2E2E] transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Story' : 'View Commercial Story'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Expanded Story Details: Short, sales-focused, fits nicely */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={contentId}
                      key="story-expanded"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3.5 pt-3.5 border-t border-slate-200 dark:border-white/10 space-y-2.5 text-left">
                        
                        {/* Requirement / Problem */}
                        {study.requirement && (
                          <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#161822] border border-slate-200/80 dark:border-white/10">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-[#94A3B8] block mb-0.5">
                              Core Requirement:
                            </span>
                            <p className="text-xs text-slate-700 dark:text-[#E2E8F0] leading-relaxed">
                              {study.requirement}
                            </p>
                          </div>
                        )}

                        {/* How I Progressed It / Sales Strategy */}
                        {study.howIProgressedIt && (
                          <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#161822] border border-slate-200/80 dark:border-white/10">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-red-600 dark:text-[#FF4A4A] block mb-0.5">
                              Commercial Progression:
                            </span>
                            <p className="text-xs text-slate-700 dark:text-[#E2E8F0] leading-relaxed">
                              {study.howIProgressedIt}
                            </p>
                          </div>
                        )}

                        {/* Commercial Outcome (No icons) */}
                        <div className="p-2.5 rounded-lg bg-red-50/60 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/30">
                          <div className="text-red-600 dark:text-[#FF4A4A] text-[10px] uppercase font-bold tracking-wider mb-0.5">
                            Commercial Value & Outcome:
                          </div>
                          <p className="text-xs font-semibold text-slate-800 dark:text-[#FAF9F6] leading-snug">
                            {study.commercialValue}
                          </p>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </FadeInSection>
    </section>
  );
};
