import React from 'react';
import { TECH_CATEGORIES, INDUSTRY_EXPOSURE } from '../data/portfolioData';
import { Layers, Building } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

export const TechAndIndustry: React.FC = () => {
  return (
    <section
      id="capabilities"
      className="py-14 sm:py-20 border-b border-[#E2E8F0]/70"
      aria-labelledby="capabilities-heading"
    >
      <FadeInSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#315C8C] block mb-2">
            Breadth and Adaptability
          </span>
          <h2
            id="capabilities-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#172033] tracking-tight"
          >
            Technology and Industry Experience
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#172033] leading-relaxed">
            I have worked across different products, services and industries. My strength is not being limited to one solution category. I can learn the product, understand the customer problem and build the commercial conversation around it.
          </p>
          <p className="mt-2 text-xs text-[#64748B] italic">
            Note: Industry exposure is represented at a consultative commercial and account level based on authentic project engagements.
          </p>
        </div>

        {/* Two-Column Grid: Technology Categories & Industry Exposure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: Technology Categories */}
          <div className="p-6 sm:p-7 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
            <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-[#E2E8F0]">
              <div className="w-8 h-8 rounded-md bg-[#F7F8FA] border border-[#E2E8F0] flex items-center justify-center text-[#315C8C]">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[#172033]">
                  Technology Categories
                </h3>
                <span className="text-xs text-[#64748B]">Solutions, architecture models and delivery modes</span>
              </div>
            </div>

            <div className="space-y-3.5">
              {TECH_CATEGORIES.map((item, idx) => (
                <div
                  key={idx}
                  id={`tech-cat-${idx}`}
                  className="p-3 rounded-lg bg-[#F7F8FA] border border-[#E2E8F0]/80 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4"
                >
                  <span className="text-xs sm:text-sm font-semibold text-[#172033] shrink-0">
                    {item.name}
                  </span>
                  <span className="text-xs text-[#64748B] sm:text-right">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Industry Exposure */}
          <div className="p-6 sm:p-7 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
            <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-[#E2E8F0]">
              <div className="w-8 h-8 rounded-md bg-[#F7F8FA] border border-[#E2E8F0] flex items-center justify-center text-[#315C8C]">
                <Building className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-[#172033]">
                  Industry Exposure
                </h3>
                <span className="text-xs text-[#64748B]">Commercial context and customer environments</span>
              </div>
            </div>

            <div className="space-y-3.5">
              {INDUSTRY_EXPOSURE.map((item, idx) => (
                <div
                  key={idx}
                  id={`industry-exp-${idx}`}
                  className="p-3 rounded-lg bg-[#F7F8FA] border border-[#E2E8F0]/80 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4"
                >
                  <span className="text-xs sm:text-sm font-semibold text-[#172033] shrink-0">
                    {item.name}
                  </span>
                  <span className="text-xs text-[#64748B] sm:text-right">
                    {item.context}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </FadeInSection>
    </section>
  );
};
