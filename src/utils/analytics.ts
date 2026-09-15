// Analytics tracking utility for Google Tag Manager and GA4

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;

  // Initialize dataLayer if missing
  window.dataLayer = window.dataLayer || [];

  const payload: Record<string, unknown> = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...params,
  };

  window.dataLayer.push(payload);

  if (import.meta.env.DEV) {
    console.log('[Analytics Event]', eventName, params || {});
  }
}

// Canonical interaction tracking helpers
export function trackResumeDownload(): void {
  trackEvent('resume_download');
}

export function trackLinkedInClick(): void {
  trackEvent('linkedin_click');
}

export function trackEmailClick(): void {
  trackEvent('email_click');
}

export function trackPhoneClick(): void {
  trackEvent('phone_click');
}

export function trackWhatsAppClick(): void {
  trackEvent('whatsapp_click');
}

export function trackCalendlyClick(): void {
  trackEvent('calendly_click');
}

export function trackCaseStudyOpen(caseName: string): void {
  trackEvent('case_study_open', { case_name: caseName });
}

export function trackCaseStudyClose(caseName: string): void {
  trackEvent('case_study_close', { case_name: caseName });
}

export function trackExperienceOpen(company: string): void {
  trackEvent('experience_open', { company });
}

export function trackContactFormStart(): void {
  trackEvent('contact_form_start');
}

export function trackContactFormSubmit(): void {
  trackEvent('contact_form_submit');
}

// Scroll depth tracking with milestones: 25%, 50%, 75%, 90%
export function initScrollDepthTracking(): () => void {
  if (typeof window === 'undefined') return () => {};

  const triggeredDepths = new Set<number>();
  const milestones = [25, 50, 75, 90];

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) return;

    const currentDepth = Math.round((window.scrollY / scrollHeight) * 100);

    milestones.forEach((milestone) => {
      if (currentDepth >= milestone && !triggeredDepths.has(milestone)) {
        triggeredDepths.add(milestone);
        trackEvent('scroll_depth', { values: milestone });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}

// Section engagement and visibility tracking using IntersectionObserver
export function initSectionTracking(): () => void {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return () => {};

  const sectionActiveStart: Record<string, number> = {};
  const sectionAccumulatedTime: Record<string, number> = {};
  const visibleSections = new Set<string>();

  const getBucket = (seconds: number): string => {
    if (seconds < 5) return '<5s';
    if (seconds < 15) return '5-15s';
    if (seconds < 30) return '15-30s';
    if (seconds < 60) return '30-60s';
    return '60s+';
  };

  const flushEngagement = (sectionId: string) => {
    const now = Date.now();
    const start = sectionActiveStart[sectionId];
    if (start) {
      const elapsed = Math.round((now - start) / 1000);
      const total = (sectionAccumulatedTime[sectionId] || 0) + elapsed;
      sectionAccumulatedTime[sectionId] = total;
      delete sectionActiveStart[sectionId];

      if (total >= 3) {
        trackEvent('section_engagement', {
          section_name: sectionId,
          engagement_seconds_bucket: getBucket(total),
        });
      }
    }
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      // Pause all visible sections
      visibleSections.forEach((sectionId) => {
        const start = sectionActiveStart[sectionId];
        if (start) {
          const elapsed = Math.round((Date.now() - start) / 1000);
          sectionAccumulatedTime[sectionId] = (sectionAccumulatedTime[sectionId] || 0) + elapsed;
          delete sectionActiveStart[sectionId];
        }
      });
    } else {
      // Resume visible sections
      visibleSections.forEach((sectionId) => {
        sectionActiveStart[sectionId] = Date.now();
      });
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (!sectionId) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          if (!visibleSections.has(sectionId)) {
            visibleSections.add(sectionId);
            trackEvent('section_view', { section_name: sectionId });
            if (!document.hidden) {
              sectionActiveStart[sectionId] = Date.now();
            }
          }
        } else {
          if (visibleSections.has(sectionId)) {
            visibleSections.delete(sectionId);
            flushEngagement(sectionId);
          }
        }
      });
    },
    { threshold: [0.35] }
  );

  const sections = document.querySelectorAll('section[id]');
  sections.forEach((s) => observer.observe(s));

  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    visibleSections.forEach(flushEngagement);
    observer.disconnect();
  };
}
