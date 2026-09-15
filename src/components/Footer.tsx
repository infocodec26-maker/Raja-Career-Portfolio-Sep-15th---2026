import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileDown, ArrowUpRight } from 'lucide-react';
import { trackResumeDownload } from '../utils/analytics';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <footer id="site-footer" className="bg-[#172033] text-white py-12 border-t border-[#172033]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Identity */}
          <div className="flex items-center gap-3.5">
            <img
              src={PERSONAL_INFO.monogramUrl}
              alt="RS Monogram"
              width={36}
              height={36}
              className="w-9 h-9 rounded-lg bg-white object-contain p-0.5"
            />
            <div>
              <span className="font-heading text-lg font-semibold tracking-tight text-white block">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-white/60">
                Key Account Management and Customer Success &middot; Dubai, UAE
              </span>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center gap-5 text-xs text-white/70">
            <a
              href="#home"
              onClick={handleScrollTop}
              className="hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('experience');
              }}
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#capabilities"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('capabilities');
              }}
              className="hover:text-white transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#case-studies"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('case-studies');
              }}
              className="hover:text-white transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href={PERSONAL_INFO.canonicalResumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackResumeDownload}
              className="inline-flex items-center gap-1 text-white hover:text-white/80 transition-colors font-semibold"
            >
              <FileDown className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-white/50" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="text-right">
            Evidence-led professional portfolio for regional opportunities in the UAE.
          </p>
        </div>
      </div>
    </footer>
  );
};
