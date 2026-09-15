import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  Calendar,
  FileDown,
  ExternalLink,
  Send,
  CheckCircle2,
  AlertCircle,
  MapPin,
} from 'lucide-react';
import {
  trackEmailClick,
  trackPhoneClick,
  trackLinkedInClick,
  trackCalendlyClick,
  trackResumeDownload,
  trackContactFormStart,
  trackContactFormSubmit,
} from '../utils/analytics';
import { FadeInSection } from './FadeInSection';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    company: '',
    roleOrOpportunity: '',
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
          role_or_opportunity: formData.roleOrOpportunity,
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
          roleOrOpportunity: '',
          message: '',
        });
      } else {
        const resData = await response.json().catch(() => ({}));
        setErrorMessage(
          resData?.error || 'Unable to deliver message at this time. Please use direct email.'
        );
      }
    } catch {
      setErrorMessage('Network connection error. Please email raj.siva0710@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-white"
      aria-labelledby="contact-heading"
    >
      <FadeInSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#315C8C] block mb-2">
            Direct Dialogue
          </span>
          <h2
            id="contact-heading"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-[#172033] tracking-tight"
          >
            Let Us Connect
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#172033] leading-relaxed">
            I am currently focused on Key Account Management, Customer Success, Strategic Account Management and Client Partnership opportunities in Dubai and the UAE.
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#64748B] leading-relaxed">
            If my experience is relevant to your team, I will be happy to discuss the role and how I can contribute.
          </p>
        </div>

        {/* Two Columns: Contact Channels & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Direct Contact Details & Scheduling (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location & Availability Card */}
            <div className="p-5 rounded-xl bg-[#F7F8FA] border border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#172033] mb-1">
                <MapPin className="w-4 h-4 text-[#315C8C]" />
                <span>Location: {PERSONAL_INFO.professionalLocation}</span>
              </div>
              <p className="text-xs text-[#64748B]">
                Immediate availability for interviews and regional exploratory discussions.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-3">
              {/* Email */}
              <a
                id="contact-email-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={trackEmailClick}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#F7F8FA] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#315C8C] group-hover:border-[#315C8C]/40">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#64748B] block">Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#172033]">{PERSONAL_INFO.email}</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#172033]" />
              </a>

              {/* Phone */}
              <a
                id="contact-phone-link"
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                onClick={trackPhoneClick}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#F7F8FA] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#315C8C] group-hover:border-[#315C8C]/40">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#64748B] block">Phone</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#172033]">{PERSONAL_INFO.phone}</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#172033]" />
              </a>

              {/* LinkedIn */}
              <a
                id="contact-linkedin-link"
                href={PERSONAL_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackLinkedInClick}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#F7F8FA] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#315C8C] group-hover:border-[#315C8C]/40">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#64748B] block">LinkedIn</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#172033]">linkedin.com/in/rajsiva</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#172033]" />
              </a>

              {/* Download Resume */}
              <a
                id="contact-resume-link"
                href={PERSONAL_INFO.canonicalResumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackResumeDownload}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#F7F8FA] border border-[#E2E8F0] hover:border-[#CBD5E1] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#315C8C] group-hover:border-[#315C8C]/40">
                    <FileDown className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-[#64748B] block">Curriculum Vitae</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#172033]">Download Resume (PDF)</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#172033]" />
              </a>

              {/* Calendly */}
              <a
                id="contact-calendly-link"
                href={PERSONAL_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackCalendlyClick}
                className="flex items-center justify-between p-4 rounded-xl bg-[#172033] text-white hover:bg-[#22314d] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-white/70 block">Direct Calendar</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">Schedule a 30-Minute Conversation</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-white/70 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Direct Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-[#F7F8FA] border border-[#E2E8F0]">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#172033] mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mb-6">
                All messages are delivered straight to my primary inbox.
              </p>

              {submittedSuccess ? (
                <div
                  id="form-success-banner"
                  className="p-6 rounded-lg bg-white border border-emerald-200 text-center animate-in fade-in duration-200"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-heading text-lg font-bold text-[#172033] mb-1">
                    Message Received
                  </h4>
                  <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto mb-5">
                    Thank you for reaching out. I have received your message and will respond promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmittedSuccess(false)}
                    className="text-xs font-semibold px-4 py-2 rounded-md border border-[#E2E8F0] bg-white hover:bg-[#F7F8FA] text-[#172033]"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-md bg-rose-50 border border-rose-200 flex items-center gap-2 text-xs text-rose-700">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="field-name" className="block text-xs font-semibold text-[#172033] mb-1.5">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="field-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="First and last name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-sm text-[#172033] placeholder:text-[#94A3B8] focus:outline-hidden focus:ring-2 focus:ring-[#315C8C]"
                      />
                    </div>

                    {/* Work Email */}
                    <div>
                      <label htmlFor="field-email" className="block text-xs font-semibold text-[#172033] mb-1.5">
                        Work Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="field-email"
                        type="email"
                        name="workEmail"
                        required
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-sm text-[#172033] placeholder:text-[#94A3B8] focus:outline-hidden focus:ring-2 focus:ring-[#315C8C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company */}
                    <div>
                      <label htmlFor="field-company" className="block text-xs font-semibold text-[#172033] mb-1.5">
                        Company or Organization
                      </label>
                      <input
                        id="field-company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-sm text-[#172033] placeholder:text-[#94A3B8] focus:outline-hidden focus:ring-2 focus:ring-[#315C8C]"
                      />
                    </div>

                    {/* Role or Opportunity */}
                    <div>
                      <label htmlFor="field-role" className="block text-xs font-semibold text-[#172033] mb-1.5">
                        Role or Opportunity
                      </label>
                      <input
                        id="field-role"
                        type="text"
                        name="roleOrOpportunity"
                        value={formData.roleOrOpportunity}
                        onChange={handleInputChange}
                        placeholder="e.g. Key Account Manager"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-sm text-[#172033] placeholder:text-[#94A3B8] focus:outline-hidden focus:ring-2 focus:ring-[#315C8C]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="field-message" className="block text-xs font-semibold text-[#172033] mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="field-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Brief details about the role, account challenges or team context..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E2E8F0] text-sm text-[#172033] placeholder:text-[#94A3B8] focus:outline-hidden focus:ring-2 focus:ring-[#315C8C]"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      id="btn-submit-contact"
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold bg-[#172033] text-white hover:bg-[#22314d] disabled:opacity-60 transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#315C8C]"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                          <span>Delivering...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                    <span className="text-[11px] text-[#64748B]">
                      Powered by direct secure transport
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </FadeInSection>
    </section>
  );
};
