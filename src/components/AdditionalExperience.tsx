import React from 'react';
import { ADDITIONAL_EXPERIENCES } from '../data/portfolioData';
import { FileText, Cpu, Check } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

export const AdditionalExperience: React.FC = () => {
  return (
    <section
      id="additional"
      className="py-14 sm:py-20 border-b border-[#E2E8F0]/70"
      aria-labelledby="additional-heading"
    >
      <FadeInSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#315C8C] block mb-2">
            Supporting Engagements
          </span>
          <h2
            id="additional-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#172033] tracking-tight"
          >
            Additional Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B]">
            Compact supporting engagements demonstrating specialized solution discovery, operational workflows and stakeholder management.
          </p>
        </div>

        {/* Two Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ADDITIONAL_EXPERIENCES.map((item, idx) => {
            const Icon = idx === 0 ? Cpu : FileText;

            return (
              <div
                key={item.id}
                id={`additional-card-${item.id}`}
                className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#CBD5E1] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#F7F8FA] border border-[#E2E8F0] flex items-center justify-center text-[#315C8C]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#315C8C] block">
                        {item.category}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-[#172033]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#172033] leading-relaxed mb-4">
                    {item.overview}
                  </p>

                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#64748B] block mb-2">
                      Key Areas of Focus
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#64748B]">
                      {item.focusAreas.map((area, aIdx) => (
                        <li key={aIdx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#315C8C] shrink-0" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] text-xs text-[#64748B] leading-relaxed">
                  <span className="font-semibold text-[#172033]">Commercial Context: </span>
                  {item.commercialContext}
                </div>
              </div>
            );
          })}
        </div>
      </FadeInSection>
    </section>
  );
};
