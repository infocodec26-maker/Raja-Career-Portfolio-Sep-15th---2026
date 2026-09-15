import React from 'react';
import { METRIC_CARDS } from '../data/portfolioData';
import { FadeInSection } from './FadeInSection';

export const CommercialSnapshot: React.FC = () => {
  return (
    <section
      id="impact"
      className="py-14 sm:py-18 bg-white border-b border-[#E2E8F0]"
      aria-labelledby="impact-heading"
    >
      <FadeInSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-left">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#315C8C] block mb-2">
            Commercial Snapshot
          </span>
          <h2
            id="impact-heading"
            className="font-heading text-2xl sm:text-3xl font-semibold text-[#172033] tracking-tight"
          >
            Verified Commercial and Account Foundation
          </h2>
          <p className="mt-2 text-sm text-[#64748B] max-w-2xl">
            A consistent track record across technology services, SaaS product adoption and multi-stakeholder enterprise partnerships.
          </p>
        </div>

        {/* 4 Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {METRIC_CARDS.map((card, idx) => (
            <div
              key={idx}
              id={`metric-card-${idx}`}
              className="p-5 sm:p-6 rounded-xl bg-[#F7F8FA] border border-[#E2E8F0] shadow-2xs hover:border-[#CBD5E1] transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#172033] tracking-tight font-heading mb-1.5">
                {card.metric}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#315C8C] mb-2.5">
                {card.label}
              </div>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};
