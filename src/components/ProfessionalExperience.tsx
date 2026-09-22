import React, { useState, useEffect, useRef } from 'react';
import { PROFESSIONAL_EXPERIENCES } from '../data/portfolioData';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { trackExperienceOpen } from '../utils/analytics';
import { FadeInSection } from './FadeInSection';
import { motion, AnimatePresence } from 'motion/react';

export const ProfessionalExperience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = () => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const toggleExpand = (id: string, company: string) => {
    clearTimers();
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      trackExperienceOpen(company);
      setExpandedId(id);
    }
  };

  const handleTriggerEnter = (id: string, company: string) => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    trackExperienceOpen(company);
    setExpandedId(id);
  };

  const handleCardMouseLeave = () => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    leaveTimeoutRef.current = setTimeout(() => {
      setExpandedId(null);
    }, 150);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && expandedId !== null) {
        setExpandedId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedId]);

  return (
    <section
      id="experience"
      className="py-12 sm:py-18 bg-slate-50 dark:bg-[#161822] border-b border-slate-200 dark:border-white/10 relative overflow-hidden"
      aria-labelledby="experience-heading"
    >
      <FadeInSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.52, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl mb-8 sm:mb-10 text-left"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/30 text-xs font-semibold text-red-600 dark:text-[#FF4A4A] uppercase tracking-wider mb-2.5">
            <span>Career Lifecycle</span>
          </div>
          <h2
            id="experience-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#FAF9F6] tracking-tight"
          >
            Professional Experience Lifecycle
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
            Verified revenue lifecycle outcomes, customer retention frameworks, and technical product consultation across 12+ years.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div
          className="relative border-l-2 border-slate-300 dark:border-white/15 ml-3 sm:ml-6 pl-5 sm:pl-8 space-y-5 sm:space-y-6"
          onMouseLeave={handleCardMouseLeave}
        >
          {PROFESSIONAL_EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const contentId = `exp-content-${exp.id}`;

            return (
              <motion.div
                key={exp.id}
                id={`experience-entry-${exp.id}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.52,
                  delay: Math.min(index * 0.07, 0.35),
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="relative group text-left"
                onMouseLeave={handleCardMouseLeave}
              >
                {/* Timeline Node Dot */}
                <div
                  className={`absolute -left-[29px] sm:-left-[41px] top-6 w-4 h-4 rounded-full border-2 transition-colors duration-200 ${
                    isExpanded
                      ? 'bg-red-600 border-red-600 dark:bg-[#FF2E2E] dark:border-[#FF2E2E] shadow-sm'
                      : 'bg-white dark:bg-[#161822] border-slate-400 dark:border-white/30 group-hover:border-red-500'
                  }`}
                  aria-hidden="true"
                />

                {/* Resume Card */}
                <div
                  className={`metafic-card rounded-2xl border transition-all duration-200 ${
                    isExpanded
                      ? 'bg-white dark:bg-[#1E2230] border-red-500/60 dark:border-[#FF2E2E]/60 shadow-md dark:shadow-xl p-5 sm:p-6'
                      : 'bg-white dark:bg-[#1E2230] border-[#CBD5E1] dark:border-white/10 hover:border-slate-400 dark:hover:border-white/25 p-5 sm:p-6 shadow-xs'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-[#FAF9F6]">
                          {exp.roleTitle}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-red-600 dark:text-[#FF4A4A]">
                        <span>{exp.company}</span>
                        <span className="text-slate-300 dark:text-white/20">•</span>
                        <span className="text-slate-600 dark:text-[#94A3B8]">{exp.dates}</span>
                      </div>
                    </div>

                    <button
                      id={`toggle-exp-btn-${exp.id}`}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(exp.id, exp.company);
                      }}
                      onMouseEnter={() => handleTriggerEnter(exp.id, exp.company)}
                      aria-expanded={isExpanded}
                      aria-controls={contentId}
                      className="self-start inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-[#272B3D] text-slate-800 dark:text-[#FAF9F6] hover:bg-red-600 hover:text-white dark:hover:bg-[#FF2E2E] dark:hover:border-[#FF2E2E] transition-colors cursor-pointer shrink-0"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Impact'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-[#E2E8F0] leading-relaxed mb-3">
                    {exp.shortSummary}
                  </p>

                  {/* Key Outcomes / Key Impact Pill Container */}
                  {exp.keyOutcomes && exp.keyOutcomes.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1 pb-1">
                      {exp.keyOutcomes.map((outcome, oIdx) => (
                        <span
                          key={oIdx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200/80 dark:border-[#FF2E2E]/25 text-[11px] font-semibold text-slate-800 dark:text-[#FAF9F6]"
                        >
                          <CheckCircle2 className="w-3 h-3 text-red-600 dark:text-[#FF2E2E] shrink-0" />
                          <span>{outcome}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {exp.keyImpact && (
                    <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50/70 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/30 text-xs font-bold text-red-700 dark:text-[#FF4A4A]">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{exp.keyImpact}</span>
                    </div>
                  )}

                  {/* Expandable Deep Dive */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={contentId}
                        key="exp-expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 space-y-3 text-left">
                          <div>
                            <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 dark:text-[#94A3B8] block mb-2">
                              Key Deliverables & Responsibilities:
                            </span>
                            <ul className="space-y-1.5">
                              {exp.achievements.map((item, aIdx) => (
                                <li
                                  key={aIdx}
                                  className="flex items-start gap-2 text-xs text-slate-700 dark:text-[#CBD5E1]"
                                >
                                  <span className="text-red-500 font-bold">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </FadeInSection>
    </section>
  );
};
