import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <footer
      id="site-footer"
      className="bg-slate-100 dark:bg-[#12141C] text-slate-800 dark:text-[#FAF9F6] py-10 border-t border-slate-200 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/10">
          
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white dark:bg-[#1E2230] border border-slate-200 dark:border-white/15 overflow-hidden flex items-center justify-center shadow-xs">
              <img
                src={PERSONAL_INFO.monogramUrl}
                alt="RS Monogram"
                width={48}
                height={48}
                className="w-full h-full object-contain scale-145"
              />
            </div>
            <div>
              <span className="font-heading text-base font-bold tracking-tight text-slate-900 dark:text-[#FAF9F6] block">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-slate-500 dark:text-[#94A3B8]">
                Senior Account Manager | SaaS, Web & Mobile Solutions &middot; Dubai, UAE
              </span>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-semibold text-slate-600 dark:text-[#9CA3AF]">
            <a
              href="#home"
              onClick={handleScrollTop}
              className="hover:text-red-600 dark:hover:text-[#FF4A4A] transition-colors"
            >
              Overview
            </a>
            <a
              href="#metrics"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('metrics');
              }}
              className="hover:text-red-600 dark:hover:text-[#FF4A4A] transition-colors"
            >
              Dashboard
            </a>
            <a
              href="#capabilities"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('capabilities');
              }}
              className="hover:text-red-600 dark:hover:text-[#FF4A4A] transition-colors"
            >
              Competencies
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('experience');
              }}
              className="hover:text-red-600 dark:hover:text-[#FF4A4A] transition-colors"
            >
              Lifecycle
            </a>
            <a
              href="#tech-industry"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('tech-industry');
              }}
              className="hover:text-red-600 dark:hover:text-[#FF4A4A] transition-colors"
            >
              Solutions
            </a>
            <a
              href="#gtm-framework"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('gtm-framework');
              }}
              className="hover:text-red-600 dark:hover:text-[#FF4A4A] transition-colors"
            >
              GTM Execution
            </a>
            <a
              href="#case-studies"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('case-studies');
              }}
              className="hover:text-red-600 dark:hover:text-[#FF4A4A] transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#feedback"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('feedback');
              }}
              className="hover:text-red-600 dark:hover:text-[#FF4A4A] transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              className="hover:text-red-600 dark:hover:text-[#FF4A4A] transition-colors"
            >
              Contact
            </a>
          </div>

        </div>

        {/* Bottom Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-[#64748B]">
          <p>
            &copy; {new Date().getFullYear()} Rajakumar Sivasubramanian. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Enterprise case studies anonymized for confidentiality &middot; Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  );
};
