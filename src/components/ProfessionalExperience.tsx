import React, { useState, useEffect } from 'react';
import { PROFESSIONAL_EXPERIENCES } from '../data/portfolioData';
import { ChevronDown, ChevronUp, X, CheckCircle2, Building2 } from 'lucide-react';
import { trackExperienceOpen } from '../utils/analytics';
import { FadeInSection } from './FadeInSection';
import { motion, AnimatePresence } from 'motion/react';

export const ProfessionalExperience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string, company: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      trackExperienceOpen(company);
      setExpandedId(id);
    }
  };

  const closeExpanded = () => {
    setExpandedId(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && expandedId !== null) {
        closeExpanded();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedId]);

  return (
    <section
      id="experience"
      className="py-14 sm:py-20 bg-white border-b border-[#E2E8F0]"
      aria-labelledby="experience-heading"
    >
      <FadeInSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#315C8C] block mb-2">
            Career Timeline
          </span>
          <h2
            id="experience-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#172033] tracking-tight"
          >
            Professional Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B]">
            A continuous progression across B2B technology companies, enterprise software partners and commercial solutions.
          </p>
        </div>

        {/* Vertical Timeline - Responsively aligned with exact node positioning */}
        <div className="relative border-l-2 border-[#CBD5E1] ml-3 sm:ml-5 pl-6 sm:pl-8 space-y-8 sm:space-y-10">
          {PROFESSIONAL_EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const contentId = `exp-content-${exp.id}`;

            return (
              <div
                key={exp.id}
                id={`experience-entry-${exp.id}`}
                className="relative group"
              >
                {/* Timeline node icon: mathematically centered on 2px border (left: -24px - 12px + 1px = -35px) */}
                <div
                  className={`absolute -left-[35px] sm:-left-[43px] top-2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isExpanded
                      ? 'border-[#315C8C] bg-[#315C8C] text-white'
                      : 'border-[#CBD5E1] bg-white text-[#64748B] group-hover:border-[#315C8C]'
                  }`}
                  aria-hidden="true"
                >
                  <span className="text-[10px] font-bold">{index + 1}</span>
                </div>

                {/* Card Container */}
                <div
                  className={`p-5 sm:p-6 rounded-xl border transition-colors ${
                    isExpanded
                      ? 'bg-[#F7F8FA] border-[#CBD5E1] shadow-xs ring-1 ring-[#315C8C]/20'
                      : 'bg-[#F7F8FA]/60 border-[#E2E8F0] hover:bg-[#F7F8FA] hover:border-[#CBD5E1]'
                  }`}
                >
                  {/* Top Bar: Company Badge, Title, Dates */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-xs text-[#172033] tracking-wider shadow-2xs shrink-0">
                        {exp.logoText}
                      </div>
                      <div>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-[#172033] leading-tight">
                          {exp.company}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-[#315C8C]">
                          {exp.roleTitle}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] text-[#64748B] self-start sm:self-auto">
                      {exp.dates}
                    </div>
                  </div>

                  {/* One short summary */}
                  <p className="text-sm text-[#172033] leading-relaxed mb-4">
                    {exp.shortSummary}
                  </p>

                  {/* Toggle Button: View Experience / Close */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      id={`toggle-exp-btn-${exp.id}`}
                      type="button"
                      onClick={() => toggleExpand(exp.id, exp.company)}
                      aria-expanded={isExpanded}
                      aria-controls={contentId}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 sm:py-2 rounded-lg border border-[#E2E8F0] bg-white text-[#172033] hover:bg-[#F7F8FA] hover:border-[#CBD5E1] active:bg-[#E2E8F0] transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#315C8C]"
                    >
                      <span>{isExpanded ? 'Close Experience' : 'View Experience'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 text-[#64748B]" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-[#64748B]" />
                      )}
                    </button>

                    {isExpanded && (
                      <button
                        type="button"
                        onClick={closeExpanded}
                        className="inline-flex items-center gap-1 text-xs text-[#64748B] hover:text-[#172033] p-2 rounded-md hover:bg-white/80 transition-colors"
                        aria-label="Close detailed experience"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Close</span>
                      </button>
                    )}
                  </div>

                  {/* Seamless Height and Fade Animation */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={contentId}
                        key="exp-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-5 border-t border-[#E2E8F0] space-y-5">
                          
                          {/* Role Focus & Customer Types */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0]">
                              <span className="text-xs uppercase tracking-wider font-semibold text-[#64748B] block mb-1">
                                Role Focus
                              </span>
                              <p className="text-xs sm:text-sm text-[#172033] leading-relaxed">
                                {exp.roleFocus}
                              </p>
                            </div>
                            <div className="p-3.5 rounded-lg bg-white border border-[#E2E8F0]">
                              <span className="text-xs uppercase tracking-wider font-semibold text-[#64748B] block mb-1">
                                Customer Types
                              </span>
                              <p className="text-xs sm:text-sm text-[#172033] leading-relaxed">
                                {exp.customerTypes}
                              </p>
                            </div>
                          </div>

                          {/* Solution Categories */}
                          <div>
                            <span className="text-xs uppercase tracking-wider font-semibold text-[#64748B] block mb-2">
                              Solution Categories
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {exp.solutionCategories.map((cat, cIdx) => (
                                <span
                                  key={cIdx}
                                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] text-[#172033]"
                                >
                                  {cat}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Account & Commercial Responsibilities */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="p-4 rounded-lg bg-white border border-[#E2E8F0]">
                              <span className="text-xs uppercase tracking-wider font-semibold text-[#315C8C] block mb-2.5">
                                Account Responsibilities
                              </span>
                              <ul className="space-y-2 text-xs sm:text-sm text-[#172033]">
                                {exp.accountResponsibilities.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#315C8C] mt-2 shrink-0"></span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="p-4 rounded-lg bg-white border border-[#E2E8F0]">
                              <span className="text-xs uppercase tracking-wider font-semibold text-[#315C8C] block mb-2.5">
                                Commercial Responsibilities
                              </span>
                              <ul className="space-y-2 text-xs sm:text-sm text-[#172033]">
                                {exp.commercialResponsibilities.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#315C8C] mt-2 shrink-0"></span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Verified Achievements */}
                          <div className="p-4 rounded-lg bg-white border border-[#E2E8F0]">
                            <span className="text-xs uppercase tracking-wider font-semibold text-[#172033] block mb-2">
                              Verified Achievements
                            </span>
                            <ul className="space-y-2 text-xs sm:text-sm text-[#172033]">
                              {exp.achievements.map((ach, idx) => (
                                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                                  <CheckCircle2 className="w-4 h-4 text-[#315C8C] shrink-0 mt-0.5" />
                                  <span>{ach}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Quick collapse link */}
                          <div className="pt-1 flex justify-end">
                            <button
                              type="button"
                              onClick={closeExpanded}
                              className="text-xs font-semibold text-[#315C8C] hover:text-[#172033] underline underline-offset-4"
                            >
                              Collapse Experience &uarr;
                            </button>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </FadeInSection>
    </section>
  );
};
