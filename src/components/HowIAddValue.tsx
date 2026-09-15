import React from 'react';
import { VALUE_PILLARS } from '../data/portfolioData';
import { FadeInSection, StaggerItem } from './FadeInSection';

export const HowIAddValue: React.FC = () => {
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
            <span>Strategic Competence</span>
          </div>
          <h2
            id="capabilities-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#FAF9F6] tracking-tight"
          >
            How I Add Value to an Enterprise Account
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
            Connecting customer requirements with commercial growth across discovery, onboarding, renewal retention, and strategic expansion.
          </p>
        </StaggerItem>

        {/* 6 Compact Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4.5">
          {VALUE_PILLARS.map((pillar, idx) => (
            <StaggerItem
              key={pillar.title}
              id={`strength-card-${idx}`}
              className="metafic-card p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 flex flex-col justify-between group cursor-default shadow-xs"
            >
              <div>
                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-[#FAF9F6] mb-1.5 group-hover:text-red-600 dark:group-hover:text-[#FF4A4A] transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};
