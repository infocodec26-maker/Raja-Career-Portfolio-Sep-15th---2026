import React from 'react';
import { VALUE_PILLARS } from '../data/portfolioData';
import {
  Users,
  Compass,
  RefreshCw,
  TrendingUp,
  Briefcase,
  BookOpen,
} from 'lucide-react';
import { FadeInSection } from './FadeInSection';

const ICONS = [Users, Compass, RefreshCw, TrendingUp, Briefcase, BookOpen];

export const HowIAddValue: React.FC = () => {
  return (
    <section
      id="strengths"
      className="py-14 sm:py-20 border-b border-[#E2E8F0]/70"
      aria-labelledby="strengths-heading"
    >
      <FadeInSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#315C8C] block mb-2">
            Strategic Competence
          </span>
          <h2
            id="strengths-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#172033] tracking-tight"
          >
            How I Add Value to an Account
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#64748B] leading-relaxed">
            My experience is broader than a traditional account management role. I have worked across customer acquisition, solution discovery, account relationships, renewals, product adoption and expansion. This helps me understand both what the customer needs and what the business needs from the account.
          </p>
        </div>

        {/* 6 Concise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_PILLARS.map((pillar, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={pillar.title}
                id={`strength-card-${idx}`}
                className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#CBD5E1] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#F7F8FA] border border-[#E2E8F0] flex items-center justify-center text-[#315C8C] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#172033] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </FadeInSection>
    </section>
  );
};
