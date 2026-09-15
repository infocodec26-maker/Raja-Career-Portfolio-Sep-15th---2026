import React from 'react';
import { VERIFIED_FEEDBACK } from '../data/portfolioData';
import { Quote } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

export const FeedbackSection: React.FC = () => {
  return (
    <section
      id="feedback"
      className="py-14 sm:py-20 border-b border-[#E2E8F0]/70"
      aria-labelledby="feedback-heading"
    >
      <FadeInSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#315C8C] block mb-2">
            Professional Endorsements
          </span>
          <h2
            id="feedback-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#172033] tracking-tight"
          >
            Client and Colleague Feedback
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B]">
            Authentic feedback from executive stakeholders and engineering delivery leads who have collaborated directly on customer accounts.
          </p>
        </div>

        {/* 2 Verified Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VERIFIED_FEEDBACK.map((item, idx) => (
            <div
              key={item.id}
              id={`feedback-card-${idx}`}
              className="p-6 sm:p-7 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#CBD5E1] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#F7F8FA] border border-[#E2E8F0] flex items-center justify-center text-[#315C8C] mb-4">
                  <Quote className="w-4 h-4" />
                </div>
                <blockquote className="text-xs sm:text-sm text-[#172033] leading-relaxed mb-6 italic">
                  "{item.text}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <div>
                  <div className="font-heading text-sm sm:text-base font-bold text-[#172033]">
                    {item.name}
                  </div>
                  <div className="text-xs text-[#64748B]">
                    {item.title} &middot; {item.companyOrContext}
                  </div>
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#F7F8FA] text-[#64748B] border border-[#E2E8F0]">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};
