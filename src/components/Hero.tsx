import React from 'react';
import { ArrowDown, FileDown, ExternalLink, MapPin } from 'lucide-react';
import { PERSONAL_INFO, HERO_DATA } from '../data/portfolioData';
import { trackResumeDownload, trackLinkedInClick } from '../utils/analytics';
import { FadeInSection } from './FadeInSection';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleDownloadResume = () => {
    trackResumeDownload();
  };

  const handleLinkedIn = () => {
    trackLinkedInClick();
  };

  return (
    <section
      id="home"
      className="pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#E2E8F0]/70"
      aria-labelledby="hero-heading"
    >
      <FadeInSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Column 1: Core Narrative & Actions (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Location & Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-2xs text-xs font-medium text-[#64748B] mb-5">
              <MapPin className="w-3.5 h-3.5 text-[#315C8C]" />
              <span className="text-[#172033] font-semibold">{PERSONAL_INFO.professionalLocation}</span>
              <span className="text-[#CBD5E1]">|</span>
              <span>Available for Regional Opportunities</span>
            </div>

            {/* Headline (EB Garamond via font-heading) */}
            <h1
              id="hero-heading"
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#172033] tracking-tight leading-[1.18] mb-4"
            >
              {HERO_DATA.headline}
            </h1>

            {/* Support Line */}
            <p className="text-base sm:text-lg text-[#315C8C] font-semibold tracking-normal mb-5 leading-relaxed">
              {HERO_DATA.supportLine}
            </p>

            {/* Main Narrative */}
            <p className="text-base text-[#172033] leading-relaxed mb-4 max-w-2xl">
              {HERO_DATA.mainCopy}
            </p>

            {/* Secondary Line */}
            <p className="text-sm text-[#64748B] leading-relaxed mb-7 max-w-2xl">
              {HERO_DATA.secondaryLine}
            </p>

            {/* Role Focus Chips */}
            <div className="w-full mb-8" aria-label="Role focus areas">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#64748B] block mb-2.5">
                Core Role Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {HERO_DATA.roleFocusPills.map((role) => (
                  <span
                    key={role}
                    className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-white text-[#172033] border border-[#E2E8F0] shadow-2xs"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs and Links */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                id="hero-primary-cta"
                type="button"
                onClick={() => onNavigate('case-studies')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#172033] text-white shadow-xs hover:bg-[#22314d] transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#315C8C]"
              >
                <span>View Case Studies</span>
                <ArrowDown className="w-4 h-4 text-white/80" />
              </button>

              <a
                id="hero-secondary-cta"
                href={PERSONAL_INFO.canonicalResumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg text-sm font-semibold bg-white text-[#172033] border border-[#E2E8F0] shadow-2xs hover:bg-[#F7F8FA] hover:border-[#CBD5E1] transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#315C8C]"
              >
                <FileDown className="w-4 h-4 text-[#315C8C]" />
                <span>Download Resume</span>
              </a>

              <a
                id="hero-linkedin-link"
                href={PERSONAL_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkedIn}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-medium text-[#315C8C] hover:text-[#172033] underline-offset-4 hover:underline transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#315C8C] rounded-md"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#64748B]" />
              </a>
            </div>
          </div>

          {/* Column 2: Verified Profile Image (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              <div className="relative rounded-2xl p-2.5 bg-white border border-[#E2E8F0] shadow-sm">
                <img
                  id="hero-profile-image"
                  src={PERSONAL_INFO.profileImageUrl}
                  alt="Rajakumar Sivasubramanian - Professional Profile"
                  width={380}
                  height={380}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full aspect-square object-cover rounded-xl bg-[#F7F8FA]"
                />
                
                {/* Clean caption card under image */}
                <div className="pt-3 pb-1 px-2 flex items-center justify-between border-t border-[#E2E8F0]/60 mt-2">
                  <div>
                    <p className="text-xs font-semibold text-[#172033]">Rajakumar Sivasubramanian</p>
                    <p className="text-[11px] text-[#64748B]">B2B Technology and Customer Success</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1.5 align-middle"></span>
                    <span className="text-[11px] font-medium text-[#64748B] align-middle">Dubai, UAE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </FadeInSection>
    </section>
  );
};
