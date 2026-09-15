import React, { useState, useEffect } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import {
  ChevronDown,
  ChevronUp,
  X,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  Users,
  Target,
  ArrowRight,
} from 'lucide-react';
import { trackCaseStudyOpen, trackCaseStudyClose } from '../utils/analytics';
import { FadeInSection } from './FadeInSection';
import { motion, AnimatePresence } from 'motion/react';

export const CommercialStories: React.FC = () => {
  const [openStoryId, setOpenStoryId] = useState<string | null>(null);

  const toggleStory = (id: string, title: string) => {
    if (openStoryId === id) {
      trackCaseStudyClose(title);
      setOpenStoryId(null);
    } else {
      if (openStoryId) {
        const prev = CASE_STUDIES.find((c) => c.id === openStoryId);
        if (prev) trackCaseStudyClose(prev.title);
      }
      trackCaseStudyOpen(title);
      setOpenStoryId(id);
    }
  };

  const closeStory = (title?: string) => {
    if (title) trackCaseStudyClose(title);
    setOpenStoryId(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && openStoryId !== null) {
        const current = CASE_STUDIES.find((c) => c.id === openStoryId);
        closeStory(current?.title);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openStoryId]);

  return (
    <section
      id="case-studies"
      className="py-14 sm:py-20 bg-white border-b border-[#E2E8F0]"
      aria-labelledby="case-studies-heading"
    >
      <FadeInSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#315C8C] block mb-2">
            Commercial Track Record
          </span>
          <h2
            id="case-studies-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#172033] tracking-tight"
          >
            Selected Commercial Stories
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#172033] leading-relaxed">
            These are anonymized examples from my career. I have removed client names and individual deal values. The purpose is to show how I approached the requirement, worked with stakeholders and progressed the commercial relationship.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-[#64748B] bg-[#F7F8FA] px-3 py-1.5 rounded-md border border-[#E2E8F0]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#315C8C] shrink-0" />
            <span>Strictly anonymized to respect corporate and client confidentiality</span>
          </div>
        </div>

        {/* Responsive Grid: 1 column on mobile/tablet, 2 columns on desktop (items-start avoids shifting other rows) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {CASE_STUDIES.map((study) => {
            const isOpen = openStoryId === study.id;
            const contentId = `story-body-${study.id}`;

            return (
              <div
                key={study.id}
                id={`case-study-card-${study.id}`}
                className={`rounded-xl border transition-colors flex flex-col justify-between overflow-hidden ${
                  isOpen
                    ? 'bg-[#F7F8FA] border-[#CBD5E1] shadow-xs ring-1 ring-[#315C8C]/20 p-5 sm:p-7'
                    : 'bg-[#F7F8FA]/60 border-[#E2E8F0] hover:bg-[#F7F8FA] hover:border-[#CBD5E1] p-5 sm:p-6'
                }`}
              >
                <div>
                  {/* Category & Status Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#315C8C]">
                      {study.category}
                    </span>
                    {study.status && (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white border border-[#E2E8F0] text-[#172033]">
                        {study.status}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#172033] mb-3 leading-snug">
                    {study.title}
                  </h3>

                  {/* Summary context */}
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-5">
                    {study.summary}
                  </p>
                </div>

                {/* Actions & Seamless Expander */}
                <div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#E2E8F0]/80">
                    <button
                      id={`btn-toggle-story-${study.id}`}
                      type="button"
                      onClick={() => toggleStory(study.id, study.title)}
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 sm:py-2 rounded-lg border border-[#E2E8F0] bg-white text-[#172033] hover:bg-[#F7F8FA] hover:border-[#CBD5E1] active:bg-[#E2E8F0] transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#315C8C]"
                    >
                      <span>{isOpen ? 'Close Story' : 'View Story'}</span>
                      {isOpen ? (
                        <ChevronUp className="w-3.5 h-3.5 text-[#64748B]" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-[#64748B]" />
                      )}
                    </button>

                    {isOpen && (
                      <button
                        type="button"
                        onClick={() => closeStory(study.title)}
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#64748B] hover:text-[#172033] p-2 rounded-md hover:bg-white/80 transition-colors"
                        aria-label={`Close story: ${study.title}`}
                      >
                        <X className="w-4 h-4" />
                        <span className="hidden sm:inline">Close</span>
                      </button>
                    )}
                  </div>

                  {/* Seamless Height and Fade Animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={contentId}
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-[#E2E8F0] space-y-5">
                          
                          {/* 1. Quick Access Key Commercial Takeaways (Positioned at top for immediate reader access) */}
                          <div className="p-4 sm:p-5 rounded-lg bg-white border-l-4 border-l-[#315C8C] border border-[#E2E8F0] shadow-2xs">
                            <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#315C8C] mb-2">
                              <CheckCircle2 className="w-4 h-4 text-[#315C8C] shrink-0" />
                              <span>Key Commercial Takeaway & Outcome</span>
                            </div>
                            <p className="text-xs sm:text-sm text-[#172033] leading-relaxed font-semibold mb-2.5">
                              {study.commercialValue}
                            </p>
                            {study.whyThisMatters && (
                              <div className="pt-2.5 border-t border-[#E2E8F0]/80 text-xs text-[#64748B] leading-relaxed">
                                <span className="font-semibold text-[#172033]">Strategic Meaning: </span>
                                {study.whyThisMatters}
                              </div>
                            )}
                          </div>

                          {/* 2. Structured Narrative Breakdown */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div className="p-3.5 sm:p-4 rounded-lg bg-white border border-[#E2E8F0]">
                              <span className="text-xs uppercase tracking-wider font-semibold text-[#64748B] block mb-1.5">
                                Customer Situation
                              </span>
                              <p className="text-xs sm:text-sm text-[#172033] leading-relaxed">
                                {study.startingSituation}
                              </p>
                            </div>

                            {study.requirement && (
                              <div className="p-3.5 sm:p-4 rounded-lg bg-white border border-[#E2E8F0]">
                                <span className="text-xs uppercase tracking-wider font-semibold text-[#64748B] block mb-1.5">
                                  Requirement
                                </span>
                                <p className="text-xs sm:text-sm text-[#172033] leading-relaxed">
                                  {study.requirement}
                                </p>
                              </div>
                            )}
                          </div>

                          {study.whatIIdentified && (
                            <div className="p-3.5 sm:p-4 rounded-lg bg-white border border-[#E2E8F0]">
                              <span className="text-xs uppercase tracking-wider font-semibold text-[#315C8C] block mb-1.5">
                                What I Identified
                              </span>
                              <p className="text-xs sm:text-sm text-[#172033] leading-relaxed">
                                {study.whatIIdentified}
                              </p>
                            </div>
                          )}

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div className="p-3.5 sm:p-4 rounded-lg bg-white border border-[#E2E8F0]">
                              <div className="flex items-center gap-1.5 mb-1.5 text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                                <Briefcase className="w-3.5 h-3.5 text-[#315C8C]" />
                                <span>My Role</span>
                              </div>
                              <p className="text-xs sm:text-sm text-[#172033] leading-relaxed">
                                {study.myRole}
                              </p>
                            </div>

                            {study.stakeholders && (
                              <div className="p-3.5 sm:p-4 rounded-lg bg-white border border-[#E2E8F0]">
                                <div className="flex items-center gap-1.5 mb-1.5 text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                                  <Users className="w-3.5 h-3.5 text-[#315C8C]" />
                                  <span>Stakeholders</span>
                                </div>
                                <p className="text-xs sm:text-sm text-[#172033] leading-relaxed">
                                  {study.stakeholders}
                                </p>
                              </div>
                            )}
                          </div>

                          {study.solutionAlignment && (
                            <div className="p-3.5 sm:p-4 rounded-lg bg-white border border-[#E2E8F0]">
                              <div className="flex items-center gap-1.5 mb-1.5 text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                                <Target className="w-3.5 h-3.5 text-[#315C8C]" />
                                <span>Solution Alignment</span>
                              </div>
                              <p className="text-xs sm:text-sm text-[#172033] leading-relaxed">
                                {study.solutionAlignment}
                              </p>
                            </div>
                          )}

                          {study.howIProgressedIt && (
                            <div className="p-3.5 sm:p-4 rounded-lg bg-white border border-[#E2E8F0]">
                              <div className="flex items-center gap-1.5 mb-1.5 text-xs uppercase tracking-wider font-semibold text-[#64748B]">
                                <ArrowRight className="w-3.5 h-3.5 text-[#315C8C]" />
                                <span>How I Progressed It</span>
                              </div>
                              <p className="text-xs sm:text-sm text-[#172033] leading-relaxed">
                                {study.howIProgressedIt}
                              </p>
                            </div>
                          )}

                          {/* Quick close link at bottom of lengthy story */}
                          <div className="pt-2 flex justify-end">
                            <button
                              type="button"
                              onClick={() => closeStory(study.title)}
                              className="text-xs font-semibold text-[#315C8C] hover:text-[#172033] underline underline-offset-4"
                            >
                              Collapse Story &uarr;
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
