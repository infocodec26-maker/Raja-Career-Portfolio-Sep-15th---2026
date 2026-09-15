import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MessageSquare,
  ExternalLink,
  Send,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Linkedin,
  ArrowUpRight,
  FileDown,
} from 'lucide-react';
import {
  trackEmailClick,
  trackPhoneClick,
  trackWhatsAppClick,
  trackLinkedInClick,
  trackResumeDownload,
  trackContactFormStart,
  trackContactFormSubmit,
} from '../utils/analytics';
import { FadeInSection, StaggerItem } from './FadeInSection';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    company: '',
    message: '',
  });

  const [formStarted, setFormStarted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!formStarted) {
      setFormStarted(true);
      trackContactFormStart();
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch(PERSONAL_INFO.formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.workEmail,
          company: formData.company,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmittedSuccess(true);
        trackContactFormSubmit();
        setFormData({
          name: '',
          workEmail: '',
          company: '',
          message: '',
        });
      } else {
        const resData = await response.json().catch(() => ({}));
        setErrorMessage(
          resData?.error || 'Unable to deliver message right now. Please email directly.'
        );
      }
    } catch {
      setErrorMessage('Network error. Please reach out via WhatsApp or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="pt-8 pb-14 sm:pt-10 sm:pb-16 bg-slate-50 dark:bg-[#161822] border-t border-slate-200 dark:border-white/10 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <FadeInSection stagger className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <StaggerItem className="max-w-3xl mb-7 text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-red-50 dark:bg-[#FF2E2E]/10 border border-red-200 dark:border-[#FF2E2E]/30 text-xs font-semibold text-red-600 dark:text-[#FF4A4A] uppercase tracking-wider mb-2">
            <span>Direct Dialogue</span>
          </div>
          <h2
            id="contact-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#FAF9F6] tracking-tight"
          >
            Let Us Connect
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-[#CBD5E1] leading-relaxed">
            I am exploring Strategic Account Management, Customer Success and GTM opportunities across Dubai, the UAE and regional markets.
          </p>
        </StaggerItem>

        {/* Two Columns: Clean Direct Channels + Compact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Column 1: Direct Channels List */}
          <StaggerItem className="lg:col-span-5 space-y-3.5">
            
            <div className="p-5 rounded-xl bg-[#F1F5F9] dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-3">
              
              {/* Location */}
              <div className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-[#FAF9F6] pb-2.5 border-b border-slate-200/80 dark:border-white/10">
                <MapPin className="w-4 h-4 text-red-600 dark:text-[#FF2E2E] shrink-0" />
                <span className="font-semibold text-slate-800 dark:text-[#FAF9F6]">{PERSONAL_INFO.professionalLocation}</span>
              </div>

              {/* Email */}
              <a
                id="contact-email-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => trackEmailClick()}
                className="flex items-center justify-between gap-2 text-xs text-slate-700 dark:text-[#FAF9F6] hover:text-red-600 dark:hover:text-[#FF4A4A] transition-colors pb-2.5 border-b border-slate-200/80 dark:border-white/10"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-red-600 dark:text-[#FF2E2E] shrink-0" />
                  <span className="font-semibold text-slate-800 dark:text-[#FAF9F6]">{PERSONAL_INFO.email}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {/* WhatsApp (+971...) */}
              <a
                id="contact-whatsapp-link"
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick()}
                className="flex items-center justify-between gap-2 text-xs text-slate-700 dark:text-[#FAF9F6] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors pb-2.5 border-b border-slate-200/80 dark:border-white/10"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-semibold text-slate-800 dark:text-[#FAF9F6]">{PERSONAL_INFO.phone} (WhatsApp)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {/* Mobile */}
              <a
                id="contact-phone-link"
                href={`tel:${PERSONAL_INFO.phone}`}
                onClick={() => trackPhoneClick()}
                className="flex items-center justify-between gap-2 text-xs text-slate-700 dark:text-[#FAF9F6] hover:text-red-600 dark:hover:text-[#FF4A4A] transition-colors pb-2.5 border-b border-slate-200/80 dark:border-white/10"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-red-600 dark:text-[#FF2E2E] shrink-0" />
                  <span className="font-semibold text-slate-800 dark:text-[#FAF9F6]">{PERSONAL_INFO.phone}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {/* LinkedIn */}
              <a
                id="contact-linkedin-link"
                href={PERSONAL_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLinkedInClick()}
                className="flex items-center justify-between gap-2 text-xs text-slate-700 dark:text-[#FAF9F6] hover:text-red-600 dark:hover:text-[#FF4A4A] transition-colors pb-2.5 border-b border-slate-200/80 dark:border-white/10"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-[#0A66C2] shrink-0" />
                  <span className="font-semibold text-slate-800 dark:text-[#FAF9F6]">LinkedIn</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {/* Download Resume (Kept right after LinkedIn) */}
              <a
                id="contact-resume-link"
                href={PERSONAL_INFO.canonicalResumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackResumeDownload()}
                className="flex items-center justify-between gap-2 text-xs text-slate-700 dark:text-[#FAF9F6] hover:text-red-600 dark:hover:text-[#FF4A4A] transition-colors pt-0.5"
              >
                <div className="flex items-center gap-2.5">
                  <FileDown className="w-4 h-4 text-red-600 dark:text-[#FF2E2E] shrink-0" />
                  <span className="font-semibold text-slate-800 dark:text-[#FAF9F6]">Download Resume</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

            </div>

          </StaggerItem>

          {/* Column 2: Compact Message Form (7 cols) */}
          <StaggerItem className="lg:col-span-7">
            <div className="metafic-card p-4 sm:p-5 rounded-xl bg-[#F1F5F9] dark:bg-[#1E2230] border border-[#CBD5E1] dark:border-white/10 shadow-xs">
              
              <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900 dark:text-[#FAF9F6] mb-1">
                Send Direct Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-[#94A3B8] mb-3">
                Reach out directly for discussions, interview scheduling or role introductions.
              </p>

              {submittedSuccess ? (
                <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 text-center space-y-1.5">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-[#FAF9F6]">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-[#CBD5E1]">
                    Thank you. Rajakumar will respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-left">
                  {errorMessage && (
                    <div className="p-2.5 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-300 dark:border-red-800 text-xs text-red-700 dark:text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="contact-name" className="block text-[11px] font-bold text-slate-700 dark:text-[#FAF9F6] uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-[#161822] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-[#FAF9F6] focus:outline-hidden focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-[11px] font-bold text-slate-700 dark:text-[#FAF9F6] uppercase tracking-wider mb-1">
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        name="workEmail"
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        placeholder="sarah@company.com"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-[#161822] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-[#FAF9F6] focus:outline-hidden focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-[11px] font-bold text-slate-700 dark:text-[#FAF9F6] uppercase tracking-wider mb-1">
                      Organization / Company
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company name or division"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-[#161822] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-[#FAF9F6] focus:outline-hidden focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[11px] font-bold text-slate-700 dark:text-[#FAF9F6] uppercase tracking-wider mb-1">
                      Message / Topic *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Brief note on opportunity, team requirements, or discussion topic..."
                      className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-[#161822] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-[#FAF9F6] focus:outline-hidden focus:border-red-500 resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 dark:bg-[#FF2E2E] dark:hover:bg-[#FF4A4A] text-white text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </StaggerItem>

        </div>
      </FadeInSection>
    </section>
  );
};
