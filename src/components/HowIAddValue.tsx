import React from 'react';
import { CORE_COMPETENCIES_COLUMNS } from '../data/portfolioData';
import { FadeInSection, StaggerItem } from './FadeInSection';
import { CheckCircle2, ShieldCheck, Target, Layers } from 'lucide-react';

export const HowIAddValue: React.FC = () => {
  const columnIcons = [
    <ShieldCheck className="w-4 h-4 text-red-600 dark:text-[#FF2E2E]" key="1" />,
    <Target className="w-4 h-4 text-red-600 dark:text-[#FF2E2E]" key="2" />,
    <Layers className="w-4 h-4 text-red-600 dark:text-[#FF2E2E]" key="3" />,
  ];

  return (
    <section
      id="capabilities"
      className="py-12 sm:py-16 bg-white dark:bg-[#161822] border-b border-slate-200 dark:border-white/10 relative overflow-hidden"
      aria-labelledby="capabilities-heading"
    >
      <FadeInSection stagger className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <StaggerItem className="max-w-3xl mb-8 sm:mb-10 text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/30 text-xs font-semibold text-red-600 dark:text-[#FF4A4A] uppercase tracking-wider mb-2.5">
            <span>Core Competencies & Capabilities</span>
          </div>
          <h2
            id="capabilities-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#FAF9F6] tracking-tight"
          >
            Core Competencies & Commercial Tools
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
            A battle-tested commercial toolkit built for complex market penetration and full-lifecycle expansion.
          </p>
        </StaggerItem>

        {/* 3-Column Bento Grid configuration matching master resume alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {CORE_COMPETENCIES_COLUMNS.map((col, idx) => (
            <StaggerItem
              key={col.title}
              id={`competency-col-${idx}`}
              className="metafic-card p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-3 pb-3.5 mb-4 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/20 flex items-center justify-center">
                      {columnIcons[idx]}
                    </div>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 dark:text-[#FAF9F6]">
                      {col.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200/70 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                    Column {idx + 1}
                  </span>
                </div>
                
                <ul className="space-y-2.5">
                  {col.skills.map((skill, skillIdx) => (
                    <li
                      key={skillIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-[#E2E8F0] leading-snug"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-600 dark:text-[#FF2E2E] shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-white/5 text-[11px] font-semibold text-red-600 dark:text-[#FF4A4A]">
                Validated Commercial Execution
              </div>
            </StaggerItem>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};
