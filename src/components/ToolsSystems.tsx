import React from 'react';
import { TOOLS_AND_SYSTEMS } from '../data/portfolioData';
import { Database, Search, Sparkles, Activity, CheckSquare } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

export const ToolsSystems: React.FC = () => {
  return (
    <section
      id="tools"
      className="py-14 sm:py-20 bg-white border-b border-[#E2E8F0]"
      aria-labelledby="tools-heading"
    >
      <FadeInSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#315C8C] block mb-2">
            Operational Stack
          </span>
          <h2
            id="tools-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#172033] tracking-tight"
          >
            Tools and Commercial Systems
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#64748B]">
            Practical software, account intelligence platforms and daily operational disciplines supporting customer relationship management.
          </p>
        </div>

        {/* Modular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. CRM Systems */}
          <div className="p-6 rounded-xl bg-[#F7F8FA] border border-[#E2E8F0]">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-white border border-[#E2E8F0] flex items-center justify-center text-[#315C8C]">
                <Database className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-base font-bold text-[#172033]">
                CRM Systems
              </h3>
            </div>
            <div className="space-y-3">
              {TOOLS_AND_SYSTEMS.crm.map((item) => (
                <div key={item.name} className="p-3 bg-white rounded-lg border border-[#E2E8F0]">
                  <div className="text-xs font-bold text-[#172033] mb-1">{item.name}</div>
                  <div className="text-xs text-[#64748B] leading-relaxed">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Prospecting & Account Intelligence */}
          <div className="p-6 rounded-xl bg-[#F7F8FA] border border-[#E2E8F0]">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-white border border-[#E2E8F0] flex items-center justify-center text-[#315C8C]">
                <Search className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-base font-bold text-[#172033]">
                Prospecting and Account Intelligence
              </h3>
            </div>
            <div className="space-y-3">
              {TOOLS_AND_SYSTEMS.intelligence.map((item) => (
                <div key={item.name} className="p-3 bg-white rounded-lg border border-[#E2E8F0]">
                  <div className="text-xs font-bold text-[#172033] mb-1">{item.name}</div>
                  <div className="text-xs text-[#64748B] leading-relaxed">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. AI and Productivity */}
          <div className="p-6 rounded-xl bg-[#F7F8FA] border border-[#E2E8F0]">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-white border border-[#E2E8F0] flex items-center justify-center text-[#315C8C]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-base font-bold text-[#172033]">
                AI and Productivity
              </h3>
            </div>
            <div className="p-4 bg-white rounded-lg border border-[#E2E8F0] h-[calc(100%-3.5rem)] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#172033] block mb-2">
                  {TOOLS_AND_SYSTEMS.productivity.title}
                </span>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {TOOLS_AND_SYSTEMS.productivity.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E2E8F0] text-[11px] text-[#64748B]">
                Applied for synthesis, market verification and clear executive communication.
              </div>
            </div>
          </div>

          {/* 4. Product Adoption (Span 2 cols on lg) */}
          <div className="p-6 rounded-xl bg-[#F7F8FA] border border-[#E2E8F0] lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-white border border-[#E2E8F0] flex items-center justify-center text-[#315C8C]">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-base font-bold text-[#172033]">
                Product Adoption and Usage Signals
              </h3>
            </div>
            <div className="p-4.5 bg-white rounded-lg border border-[#E2E8F0]">
              <p className="text-xs sm:text-sm text-[#172033] leading-relaxed mb-3">
                {TOOLS_AND_SYSTEMS.adoption.description}
              </p>
              <div className="p-2.5 rounded-md bg-[#F7F8FA] border border-[#E2E8F0] text-xs text-[#64748B]">
                <span className="font-semibold text-[#172033]">Clear Distinction: </span>
                {TOOLS_AND_SYSTEMS.adoption.note}
              </div>
            </div>
          </div>

          {/* 5. Core Operational Disciplines */}
          <div className="p-6 rounded-xl bg-[#F7F8FA] border border-[#E2E8F0]">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-white border border-[#E2E8F0] flex items-center justify-center text-[#315C8C]">
                <CheckSquare className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-base font-bold text-[#172033]">
                Account Management Disciplines
              </h3>
            </div>
            <div className="p-4 bg-white rounded-lg border border-[#E2E8F0]">
              <ul className="space-y-2 text-xs text-[#172033]">
                {TOOLS_AND_SYSTEMS.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#315C8C] shrink-0"></span>
                    <span className="capitalize">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </FadeInSection>
    </section>
  );
};
