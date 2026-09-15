import React from 'react';
import { TECH_CATEGORIES, INDUSTRY_EXPOSURE } from '../data/portfolioData';
import { FadeInSection, StaggerItem } from './FadeInSection';

export const TechAndIndustry: React.FC = () => {
  return (
    <section
      id="tech-industry"
      className="py-12 sm:py-16 bg-white dark:bg-[#161822] border-b border-slate-200 dark:border-white/10 relative overflow-hidden"
      aria-labelledby="tech-industry-heading"
    >
      <FadeInSection stagger className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <StaggerItem className="max-w-3xl mb-8 sm:mb-10 text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/30 text-xs font-semibold text-red-600 dark:text-[#FF4A4A] uppercase tracking-wider mb-2.5">
            <span>Domain Scope</span>
          </div>
          <h2
            id="tech-industry-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#FAF9F6] tracking-tight"
          >
            Technology & Industry Expertise
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
            Consultative commercial capability across core technology categories and key enterprise industry verticals.
          </p>
        </StaggerItem>

        {/* Side-by-Side Parallel View: Staggered entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          
          {/* Column 1: Technology Categories */}
          <StaggerItem className="metafic-card p-5 sm:p-6 rounded-xl bg-[#F1F5F9] dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 flex flex-col justify-between shadow-xs">
            <div>
              <div className="pb-3 mb-4 border-b border-slate-200 dark:border-white/10">
                <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 dark:text-[#FAF9F6]">
                  Technology Categories
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {TECH_CATEGORIES.map((item, idx) => (
                  <div
                    key={idx}
                    id={`tech-cat-${idx}`}
                    className="h-11 sm:h-12 px-3.5 sm:px-4 rounded-lg bg-white dark:bg-[#272B3D] border border-slate-200/80 dark:border-white/10 hover:border-red-500/50 dark:hover:border-[#FF2E2E]/40 transition-colors flex items-center group cursor-default shadow-2xs"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-[#FAF9F6] group-hover:text-red-600 dark:group-hover:text-[#FF4A4A] transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Column 2: Industry Verticals */}
          <StaggerItem className="metafic-card p-5 sm:p-6 rounded-xl bg-[#F1F5F9] dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 flex flex-col justify-between shadow-xs">
            <div>
              <div className="pb-3 mb-4 border-b border-slate-200 dark:border-white/10">
                <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 dark:text-[#FAF9F6]">
                  Industry Verticals
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {INDUSTRY_EXPOSURE.map((item, idx) => (
                  <div
                    key={idx}
                    id={`industry-exp-${idx}`}
                    className={`h-11 sm:h-12 px-3.5 sm:px-4 rounded-lg bg-white dark:bg-[#272B3D] border border-slate-200/80 dark:border-white/10 hover:border-red-500/50 dark:hover:border-[#FF2E2E]/40 transition-colors flex items-center group cursor-default shadow-2xs ${
                      idx === INDUSTRY_EXPOSURE.length - 1 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-[#FAF9F6] group-hover:text-red-600 dark:group-hover:text-[#FF4A4A] transition-colors">
                      {item.name}
                    </span>
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
