export interface ExperienceItem {
  id: string;
  company: string;
  roleTitle: string;
  dates: string;
  shortSummary: string;
  roleFocus?: string;
  customerTypes?: string;
  solutionCategories?: string[];
  accountResponsibilities?: string[];
  commercialResponsibilities?: string[];
  achievements: string[];
  logoText: string;
  keyOutcomes?: string[];
  keyImpact?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  status?: string;
  imageUrl?: string;
  industryAndMarket?: string;
  summary: string;
  businessChallenge?: string;
  opportunityDiscovery?: string;
  commercialApproach?: string;
  solutionStrategy?: string[];
  myContribution?: string[];
  projectOutcome?: string;
  commercialOutcome?: string;
  businessImpact?: string[];
  targetBusinessImpact?: string[];
  indicativeBusinessImpact?: string[];
  capabilitiesDemonstrated?: string[];
  // Legacy / fallback fields
  startingSituation?: string;
  requirement?: string;
  whatIIdentified?: string;
  myRole?: string;
  howIProgressedIt?: string;
  commercialValue?: string;
}

export interface MetricCardItem {
  metric: string;
  label?: string;
  description: string;
}

export interface ValuePillarItem {
  title: string;
  description: string;
  category?: string;
  skills?: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  title: string;
  companyOrContext?: string;
  relationship?: string;
  text: string;
  verifiedYear?: string;
}

export interface GtmStep {
  stepNumber: number;
  title: string;
  frameworkTag?: string;
  description?: string;
}

export interface EnablementFrameworkCard {
  id: string;
  title: string;
  description: string;
}

export interface TechPortfolioTier {
  tierName: string;
  tierDescription?: string;
  items: {
    title: string;
    subtext: string;
  }[];
}

export interface PartnerAllianceItem {
  name: string;
  framework: string;
  outcome: string;
}

export interface AnalyticsPayload {
  eventName: string;
  params?: Record<string, string | number | boolean | undefined>;
}

