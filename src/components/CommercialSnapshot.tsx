import React from 'react';
import { METRIC_CARDS } from '../data/portfolioData';
import { FadeInSection, StaggerItem } from './FadeInSection';

export const CommercialSnapshot: React.FC = () => {
  return (
    <section
      id="metrics"
      className="py-12 sm:py-16 bg-slate-50 dark:bg-[#161822] border-b border-slate-200 dark:border-white/10 relative overflow-hidden"
      aria-labelledby="metrics-heading"
    >
      <FadeInSection stagger className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <StaggerItem className="mb-8 sm:mb-10 text-left max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/30 text-xs font-semibold text-red-600 dark:text-[#FF4A4A] uppercase tracking-wider mb-2.5">
            <span>Executive Performance Dashboard</span>
          </div>
          <h2
            id="metrics-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#FAF9F6] tracking-tight"
          >
            Commercial Impact Dashboard
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
            A comprehensive index of audited revenue generation, market acquisition, and deal cycle efficiency across global tech landscapes.
          </p>
        </StaggerItem>

        {/* 5 Metric Bento Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {METRIC_CARDS.map((card, idx) => (
            <StaggerItem
              key={idx}
              id={`metric-card-${idx}`}
              className="metafic-card p-5 rounded-xl bg-white dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 relative overflow-hidden group cursor-default shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-[#FAF9F6] tracking-tight font-heading mb-1 group-hover:text-red-600 dark:group-hover:text-[#FF4A4A] transition-colors">
                  {card.metric}
                </div>
                
                {card.label && (
                  <div className="text-[11px] font-bold uppercase tracking-wider text-red-600 dark:text-[#FF4A4A] mb-2">
                    {card.label}
                  </div>
                )}
              </div>
              
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                {card.description}
              </p>
            </StaggerItem>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};
