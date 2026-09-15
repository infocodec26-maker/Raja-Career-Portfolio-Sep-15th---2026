export interface ExperienceItem {
  id: string;
  company: string;
  roleTitle: string;
  dates: string;
  shortSummary: string;
  roleFocus: string;
  customerTypes: string;
  solutionCategories: string[];
  accountResponsibilities: string[];
  commercialResponsibilities: string[];
  achievements: string[];
  logoText: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  status?: string;
  summary: string;
  startingSituation: string;
  requirement?: string;
  whatIIdentified?: string;
  myRole: string;
  stakeholders?: string;
  solutionAlignment?: string;
  howIProgressedIt?: string;
  accountDevelopment?: string;
  commercialApproach?: string;
  commercialValue: string;
  outcomeNote?: string;
  whyThisMatters?: string;
}

export interface AdditionalExperienceItem {
  id: string;
  title: string;
  category: string;
  focusAreas: string[];
  overview: string;
  commercialContext: string;
}

export interface MetricCardItem {
  metric: string;
  label: string;
  description: string;
}

export interface ValuePillarItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  title: string;
  companyOrContext: string;
  relationship: string;
  text: string;
  verifiedYear: string;
}

export interface AnalyticsPayload {
  eventName: string;
  params?: Record<string, string | number | boolean | undefined>;
}
