import React from 'react';
import {
  GTM_EXECUTION_STEPS,
  ENABLEMENT_FRAMEWORKS,
  OVERALL_SALES_APPROACH_STEPS,
  CORE_CAPABILITIES_LIST,
  PERSONAL_INFO,
} from '../data/portfolioData';
import { FadeInSection, StaggerItem } from './FadeInSection';
import { ArrowRight, CheckCircle2, Calendar, FileText } from 'lucide-react';

interface GtmFrameworkProps {
  onNavigate: (sectionId: string) => void;
}

export const GtmFramework: React.FC<GtmFrameworkProps> = ({ onNavigate }) => {
  return (
    <section
      id="gtm-framework"
      className="py-12 sm:py-18 bg-slate-50 dark:bg-[#161822] border-b border-slate-200 dark:border-white/10 relative overflow-hidden"
      aria-labelledby="gtm-heading"
    >
      <FadeInSection stagger className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section 10 Header: Go-To-Market Execution */}
        <StaggerItem className="max-w-3xl mb-8 sm:mb-10 text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/30 text-xs font-semibold text-red-600 dark:text-[#FF4A4A] uppercase tracking-wider mb-2.5">
            <span>Methodology & Deal Architecture</span>
          </div>
          <h2
            id="gtm-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#FAF9F6] tracking-tight"
          >
            Go-To-Market Execution: From Rapid Product Diagnostic to Predictable Revenue
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
            Blending Target Account Selling (TAS), Solution Selling, and MEDDPICC with rapid product mastery to build outbound engines for SaaS, Web, and Mobile solutions.
          </p>
        </StaggerItem>

        {/* Horizontal Milestone Pipeline Timeline */}
        <StaggerItem className="mb-12 sm:mb-16">
          <div className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 shadow-xs">
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200 dark:border-white/10 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#FF4A4A]">
                10-Stage GTM Execution Lifecycle
              </span>
              <span className="text-xs text-slate-500 dark:text-[#94A3B8] hidden sm:inline">
                End-to-End Deal Progression
              </span>
            </div>

            {/* Scrollable / Responsive Pipeline Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-left">
              {GTM_EXECUTION_STEPS.map((step) => (
                <div
                  key={step.stepNumber}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#161822] border border-slate-200/80 dark:border-white/10 flex flex-col justify-between group hover:border-red-500/50 dark:hover:border-[#FF2E2E]/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="w-6 h-6 rounded-full bg-red-600 dark:bg-[#FF2E2E] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                        {step.stepNumber}
                      </span>
                      {step.frameworkTag && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white dark:bg-[#1E2230] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-[#CBD5E1] truncate">
                          {step.frameworkTag}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-slate-900 dark:text-[#FAF9F6] leading-snug mb-1">
                      {step.title}
                    </div>
                    {step.description && (
                      <p className="text-[11px] text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </StaggerItem>

        {/* Section 11: Strategic Sales Execution And Enablement Capabilities */}
        <StaggerItem className="max-w-3xl mb-8 sm:mb-10 text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/30 text-xs font-semibold text-red-600 dark:text-[#FF4A4A] uppercase tracking-wider mb-2.5">
            <span>Enablement Frameworks</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#FAF9F6] tracking-tight">
            Commercial Execution & Enablement Frameworks
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
            A battle-tested methodology for authoring technical documentation, mapping enterprise stakeholders, and validating business ROI across the deal lifecycle.
          </p>
        </StaggerItem>

        {/* 5-Card Bento Grid (Visual Capabilities Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
          {ENABLEMENT_FRAMEWORKS.map((card, idx) => (
            <StaggerItem
              key={card.id}
              className="metafic-card p-4 sm:p-5 rounded-xl bg-white dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 flex flex-col justify-between shadow-xs text-left group hover:border-red-500/60 dark:hover:border-[#FF2E2E]/60 transition-colors"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/20 flex items-center justify-center mb-3">
                  <FileText className="w-4 h-4 text-red-600 dark:text-[#FF2E2E]" />
                </div>
                <h3 className="font-heading text-sm font-bold text-slate-900 dark:text-[#FAF9F6] mb-2 group-hover:text-red-600 dark:group-hover:text-[#FF4A4A] transition-colors leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </div>

        {/* Call To Action Button */}
        <StaggerItem className="flex flex-wrap items-center justify-center gap-3 pt-3 mb-12">
          <button
            id="gtm-discuss-cta"
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 dark:bg-[#FF2E2E] dark:hover:bg-[#FF4A4A] transition-colors shadow-xs cursor-pointer"
          >
            <span>Discuss Interface & GTM Execution</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={PERSONAL_INFO.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-white dark:bg-[#1E2230] text-slate-800 dark:text-[#FAF9F6] border border-[#CBD5E1] dark:border-white/15 hover:border-red-500 transition-colors shadow-xs"
          >
            <Calendar className="w-4 h-4 text-red-600 dark:text-[#FF4A4A]" />
            <span>Schedule A Strategy Call</span>
          </a>
        </StaggerItem>

        {/* Overall Sales Approach & Core Capabilities Banner */}
        <StaggerItem className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 text-left shadow-xs">
          <div className="max-w-3xl mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#FF4A4A] block mb-1">
              Overall Sales Approach
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-[#FAF9F6] mb-2">
              The Consultative Bridge: From Pain to Revenue Commitment
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
              "What I bring to these conversations is the ability to understand enough of the customer's business and technology problem to translate it into a commercial opportunity, while allowing engineering and product specialists to own the deeper technical design."
            </p>
          </div>

          {/* Sequential Approach Chain */}
          <div className="flex flex-wrap items-center gap-2 py-3 border-y border-slate-200 dark:border-white/10 my-4">
            {OVERALL_SALES_APPROACH_STEPS.map((step, idx) => (
              <React.Fragment key={idx}>
                <span className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-[#161822] border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-[#FAF9F6]">
                  {step}
                </span>
                {idx < OVERALL_SALES_APPROACH_STEPS.length - 1 && (
                  <span className="text-slate-400 dark:text-white/20 text-xs font-bold">→</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Core Capabilities Chips */}
          <div className="mt-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-[#94A3B8] block mb-2.5">
              Core Capabilities Demonstrated Across Engagements
            </span>
            <div className="flex flex-wrap gap-2">
              {CORE_CAPABILITIES_LIST.map((cap, cIdx) => (
                <span
                  key={cIdx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-50 dark:bg-[#161822] border border-slate-200/90 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-[#E2E8F0]"
                >
                  <CheckCircle2 className="w-3 h-3 text-red-600 dark:text-[#FF2E2E]" />
                  <span>{cap}</span>
                </span>
              ))}
            </div>
          </div>
        </StaggerItem>
      </FadeInSection>
    </section>
  );
};
