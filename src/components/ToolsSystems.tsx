import React from 'react';
import { TOOLS_AND_SYSTEMS } from '../data/portfolioData';
import { FadeInSection, StaggerItem } from './FadeInSection';

export const ToolsSystems: React.FC = () => {
  return (
    <section
      id="tools"
      className="py-12 sm:py-16 bg-white dark:bg-[#161822] border-b border-slate-200 dark:border-white/10 relative overflow-hidden"
      aria-labelledby="tools-heading"
    >
      <FadeInSection stagger className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <StaggerItem className="max-w-3xl mb-8 sm:mb-10 text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/30 text-xs font-semibold text-red-600 dark:text-[#FF4A4A] uppercase tracking-wider mb-2.5">
            <span>Operational Stack</span>
          </div>
          <h2
            id="tools-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#FAF9F6] tracking-tight"
          >
            Tools, Commercial Systems & Disciplines
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
            Practical commercial stack and day-to-day disciplines used to drive pipeline hygiene, customer health, and account growth.
          </p>
        </StaggerItem>

        {/* 4 Compact Cards in a balanced 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          
          {/* Card 1: CRM Systems */}
          <StaggerItem className="metafic-card p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 flex flex-col justify-between shadow-xs">
            <div>
              <div className="mb-3">
                <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900 dark:text-[#FAF9F6]">
                  CRM Systems
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {TOOLS_AND_SYSTEMS.crmList.map((crm, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white dark:bg-[#272B3D] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-[#FAF9F6]"
                  >
                    {crm}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Card 2: Grouped LinkedIn, Apollo, and AI Research Tools */}
          <StaggerItem className="metafic-card p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 flex flex-col justify-between shadow-xs">
            <div>
              <div className="mb-3">
                <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900 dark:text-[#FAF9F6]">
                  Prospecting & AI Research
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {TOOLS_AND_SYSTEMS.intelligenceList.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white dark:bg-[#272B3D] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-[#FAF9F6]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Card 3: Product Adoption & Mixpanel */}
          <StaggerItem className="metafic-card p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 flex flex-col justify-between shadow-xs">
            <div>
              <div className="mb-3">
                <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900 dark:text-[#FAF9F6]">
                  Product Adoption & Retention (Mixpanel)
                </h3>
              </div>

              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-[#CBD5E1]">
                {TOOLS_AND_SYSTEMS.productAdoption.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* Card 4: Operational Disciplines */}
          <StaggerItem className="metafic-card p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 flex flex-col justify-between shadow-xs">
            <div>
              <div className="mb-3">
                <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900 dark:text-[#FAF9F6]">
                  Operational Disciplines
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 dark:text-[#CBD5E1]">
                {TOOLS_AND_SYSTEMS.operationalDisciplines.map((disc, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-red-500 shrink-0"></span>
                    <span>{disc}</span>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>

        </div>
      </FadeInSection>
    </section>
  );
};
