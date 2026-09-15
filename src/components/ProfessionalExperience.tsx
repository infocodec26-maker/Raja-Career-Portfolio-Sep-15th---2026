import React, { useState, useEffect, useRef } from 'react';
import { PROFESSIONAL_EXPERIENCES } from '../data/portfolioData';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { trackExperienceOpen } from '../utils/analytics';
import { FadeInSection } from './FadeInSection';
import { motion, AnimatePresence } from 'motion/react';

export const ProfessionalExperience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const enterTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = () => {
    if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
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
            <span>Career Path</span>
          </div>
          <h2
            id="experience-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#FAF9F6] tracking-tight"
          >
            Professional Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
            Continuous commercial progression across enterprise platforms, SaaS growth, and client account leadership in the UAE and international markets.
          </p>
        </motion.div>

        {/* Timeline Container with Clean Hover Hand-off and Exit */}
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
                  delay: Math.min(index * 0.08, 0.35),
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="relative group"
                onMouseLeave={handleCardMouseLeave}
              >
                {/* Timeline node number */}
                <div
                  className={`absolute -left-[31px] sm:-left-[43px] top-3 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    isExpanded
                      ? 'border-red-600 bg-red-600 text-white dark:border-[#FF2E2E] dark:bg-[#FF2E2E]'
                      : 'border-slate-300 dark:border-white/20 bg-white dark:bg-[#1E2230] text-slate-500 dark:text-[#94A3B8] group-hover:border-red-500'
                  }`}
                  aria-hidden="true"
                >
                  <span className="text-[10px] font-bold">{index + 1}</span>
                </div>

                {/* Card Container: Compact styling, automatically opens on hovering trigger */}
                <div
                  className={`metafic-card p-4 sm:p-5 rounded-xl border transition-all ${
                    isExpanded
                      ? 'bg-white dark:bg-[#1E2230] border-red-500/60 dark:border-[#FF2E2E]/60 shadow-md dark:shadow-xl'
                      : 'bg-white dark:bg-[#1E2230] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-xs'
                  }`}
                >
                  {/* Top Bar: Company Badge, Title, Dates */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-[#272B3D] border border-slate-200 dark:border-white/10 flex items-center justify-center font-bold text-xs text-red-600 dark:text-[#FF4A4A] tracking-wider shrink-0">
                        {exp.logoText}
                      </div>
                      <div>
                        <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 dark:text-[#FAF9F6] leading-snug">
                          {exp.company}
                        </h3>
                        <p className="text-xs font-semibold text-red-600 dark:text-[#FF4A4A]">
                          {exp.roleTitle}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-[#272B3D] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-[#CBD5E1] self-start sm:self-auto">
                      <span>{exp.dates}</span>
                    </div>
                  </div>

                  {/* Short summary */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-[#CBD5E1] leading-relaxed mb-3">
                    {exp.shortSummary}
                  </p>

                  {/* Toggle Trigger: View Experience Details + Down Arrow */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-white/10">
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
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-[#272B3D] text-slate-800 dark:text-[#FAF9F6] hover:bg-red-600 hover:text-white dark:hover:bg-[#FF2E2E] dark:hover:border-[#FF2E2E] transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Experience Details' : 'View Experience Details'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Content: Compact, side-by-side, no heavy scrolling required */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={contentId}
                        key="exp-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 space-y-3.5 text-left">
                          
                          {/* Top Row: Focus & Customer Types */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#161822] border border-slate-200 dark:border-white/10">
                              <span className="text-[11px] uppercase tracking-wider font-bold text-red-600 dark:text-[#FF4A4A] block mb-1">
                                Role Focus
                              </span>
                              <p className="text-xs text-slate-700 dark:text-[#E2E8F0] leading-relaxed">
                                {exp.roleFocus}
                              </p>
                            </div>
                            <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#161822] border border-slate-200 dark:border-white/10">
                              <span className="text-[11px] uppercase tracking-wider font-bold text-red-600 dark:text-[#FF4A4A] block mb-1">
                                Customer Types
                              </span>
                              <p className="text-xs text-slate-700 dark:text-[#E2E8F0] leading-relaxed">
                                {exp.customerTypes}
                              </p>
                            </div>
                          </div>

                          {/* Solution Categories Chips */}
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500 dark:text-[#94A3B8] mr-1">
                              Categories:
                            </span>
                            {exp.solutionCategories.map((cat, cIdx) => (
                              <span
                                key={cIdx}
                                className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#272B3D] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-[#FAF9F6]"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>

                          {/* Parallel 3-Column Grid for Responsibilities and Achievements */}
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                            {/* Account Responsibilities */}
                            <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#161822] border border-slate-200 dark:border-white/10">
                              <span className="text-[11px] uppercase tracking-wider font-bold text-red-600 dark:text-[#FF4A4A] block mb-2">
                                Account Responsibilities
                              </span>
                              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-[#E2E8F0]">
                                {exp.accountResponsibilities.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-1.5 leading-snug">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Commercial Responsibilities */}
                            <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#161822] border border-slate-200 dark:border-white/10">
                              <span className="text-[11px] uppercase tracking-wider font-bold text-red-600 dark:text-[#FF4A4A] block mb-2">
                                Commercial Responsibilities
                              </span>
                              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-[#E2E8F0]">
                                {exp.commercialResponsibilities.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-1.5 leading-snug">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Achievements (No 'Verified' prefix, no icons) */}
                            <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#161822] border border-slate-200 dark:border-white/10">
                              <span className="text-[11px] uppercase tracking-wider font-bold text-slate-900 dark:text-[#FAF9F6] block mb-2">
                                Achievements
                              </span>
                              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-[#E2E8F0]">
                                {exp.achievements.map((ach, idx) => (
                                  <li key={idx} className="flex items-start gap-1.5 leading-snug">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-[#FF2E2E] mt-1.5 shrink-0"></span>
                                    <span>{ach}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
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
