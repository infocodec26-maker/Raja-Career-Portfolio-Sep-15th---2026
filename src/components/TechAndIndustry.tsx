import React from 'react';
import { TECH_PORTFOLIO_TIERS, PARTNER_ALLIANCES } from '../data/portfolioData';
import { FadeInSection, StaggerItem } from './FadeInSection';
import { Layers, Network, ArrowRight } from 'lucide-react';

export const TechAndIndustry: React.FC = () => {
  return (
    <section
      id="tech-industry"
      className="py-12 sm:py-18 bg-white dark:bg-[#161822] border-b border-slate-200 dark:border-white/10 relative overflow-hidden"
      aria-labelledby="tech-industry-heading"
    >
      <FadeInSection stagger className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <StaggerItem className="max-w-3xl mb-8 sm:mb-10 text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/30 text-xs font-semibold text-red-600 dark:text-[#FF4A4A] uppercase tracking-wider mb-2.5">
            <span>Domain & Solutions Matrix</span>
          </div>
          <h2
            id="tech-industry-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#FAF9F6] tracking-tight"
          >
            Technology Solutions & SaaS Portfolio
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
            A hybrid matrix mapping technical domains across market tiers to establish predictable commercial alignment.
          </p>
        </StaggerItem>

        {/* Dual Market Tiers */}
        <div className="space-y-6 sm:space-y-8">
          {TECH_PORTFOLIO_TIERS.map((tier, tierIdx) => (
            <StaggerItem
              key={tier.tierName}
              className="metafic-card p-5 sm:p-7 rounded-2xl bg-slate-50 dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-200 dark:border-white/10 text-left">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/20 flex items-center justify-center">
                    <Layers className="w-4 h-4 text-red-600 dark:text-[#FF2E2E]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 dark:text-[#FAF9F6]">
                      {tier.tierName}
                    </h3>
                    {tier.tierDescription && (
                      <p className="text-xs text-slate-500 dark:text-[#94A3B8]">
                        {tier.tierDescription}
                      </p>
                    )}
                  </div>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-[#161822] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 self-start sm:self-auto">
                  {tierIdx === 0 ? 'Enterprise & Tier-1' : 'Mid-Market & Scale'}
                </span>
              </div>

              {/* 3-Column Responsive Grid Card Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 text-left">
                {tier.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#161822] border border-slate-200/90 dark:border-white/10 hover:border-red-500/50 dark:hover:border-[#FF2E2E]/50 transition-colors shadow-2xs group flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-[#FAF9F6] mb-1 group-hover:text-red-600 dark:group-hover:text-[#FF4A4A] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </StaggerItem>
          ))}
        </div>

        {/* 9b. Strategic Alliances & Ecosystem Monetization */}
        <StaggerItem className="mt-8 sm:mt-10 p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 shadow-xs text-left">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/20 flex items-center justify-center">
              <Network className="w-4 h-4 text-red-600 dark:text-[#FF2E2E]" />
            </div>
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-[#FAF9F6]">
                Ecosystem Partners & Channel Alliances
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#CBD5E1]">
                Leveraging strategic technology alliances to accelerate product delivery, capture enterprise opportunities, and scale custom software pipelines.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
            {PARTNER_ALLIANCES.map((alliance, aIdx) => (
              <div
                key={aIdx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-[#161822] border border-slate-200/80 dark:border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-red-600 dark:text-[#FF4A4A] uppercase tracking-wider block mb-1">
                    {alliance.name}
                  </span>
                  <div className="text-xs font-semibold text-slate-800 dark:text-[#FAF9F6] mb-2">
                    {alliance.framework}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                    {alliance.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </StaggerItem>
      </FadeInSection>
    </section>
  );
};
