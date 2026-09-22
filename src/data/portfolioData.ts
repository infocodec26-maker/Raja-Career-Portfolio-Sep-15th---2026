import {
  ExperienceItem,
  CaseStudy,
  MetricCardItem,
  TestimonialItem,
  GtmStep,
  EnablementFrameworkCard,
  TechPortfolioTier,
  PartnerAllianceItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Rajakumar Sivasubramanian',
  title: 'Senior Account Manager | SaaS, Web & Mobile Solutions Specialist',
  professionalLocation: 'Dubai, UAE',
  email: 'raj.siva0710@gmail.com',
  phone: '+971-528770047',
  whatsappUrl: 'https://wa.me/971528770047',
  linkedInUrl: 'https://linkedin.com/in/rajsiva/',
  profileImageUrl:
    'https://www.image2url.com/r2/default/images/1785784733130-463697ea-d4b8-40a6-a8e3-46ef59c33d68.jpg',
  monogramUrl:
    'https://www.image2url.com/r2/default/images/1785786452111-925fd485-8538-4e02-abc3-60a98eb62066.png',
  formspreeUrl: 'https://formspree.io/f/xaqggqzj',
  calendlyUrl: 'https://calendly.com/raj-siva0710/30min',
  canonicalResumeUrl:
    'https://drive.google.com/file/d/1sb2JpcewwGYvDQKyClDyf8KsVa8TpSiX/view?usp=sharing',
  ctaResumeText: 'Download Master Resume',
};

export const HERO_DATA = {
  headline:
    'B2B Tech Sales & Account Management Professional | SaaS, Web & Mobile Solutions',
  supportLine:
    'I help technology companies win new clients, protect recurring revenue frameworks, and expand account value through consultative discovery, rapid product mastery, and structured software solution delivery.',
  mainCopy:
    'Highlighting 12 years of international sales execution mastering diverse tech verticals quickly—from custom Web & Mobile App development to specialized SaaS—and pioneering greenfield market entries across UAE, USA, APAC, EMEA and India.',
  roleFocusPills: [
    'Greenfield Business Development',
    'Strategic Account Management',
    'Customer Success & Retention',
    'Consultative Discovery',
    'Solution Engineering & Scoping',
    'MEDDPICC & TAS Execution',
  ],
};

export const METRIC_CARDS: MetricCardItem[] = [
  {
    metric: '14+ Years',
    label: 'B2B Tech Experience',
    description:
      'Proven lifecycle adaptability across Web Apps, Mobile Platforms, and Niche SaaS.',
  },
  {
    metric: '~900K USD',
    label: 'Recent Revenue',
    description:
      'Sourced, signed, and managed across cross-border tech landscapes through greenfield business development.',
  },
  {
    metric: '30+ Logos',
    label: 'International Logos',
    description:
      'Successfully acquired, onboarded, and retained across global regions with near-zero churn.',
  },
  {
    metric: '20% Reduction',
    label: 'Avg. Sales Cycle Reduction',
    description:
      'Compressed pipeline signature velocity via standardized discovery and scoping frameworks.',
  },
  {
    metric: 'Pioneering Entry',
    label: 'Market Entry & Anchor Acquisition',
    description:
      'Established outbound execution structures in greenfield territories to win initial accounts and secure long-term retainers.',
  },
];

export const CORE_COMPETENCIES_COLUMNS = [
  {
    title: 'Commercial Strategy',
    skills: [
      'Strategic Account Management',
      'Stakeholder Management',
      'Account Growth and Expansion',
      'Consultative Selling',
      'Customer Retention Tracking',
      'Account Expansion',
      'Value-Based Solution Selling',
    ],
  },
  {
    title: 'GTM & Execution',
    skills: [
      'Greenfield Business Development',
      'Pioneering Market Entry',
      'Solution and Consultative Selling',
      'GTM Strategy Execution',
      'Commercial Negotiation',
      'Technical Product Adoption',
      'Product Usage Tracking',
    ],
  },
  {
    title: 'Technical Verticals',
    skills: [
      'Technical Product Adoption',
      'Product Usage Tracking',
      'SaaS Platforms & Implementation',
      'Custom Software, Web, & Mobile Solutions',
      'Technical Scoping (BRD/RFP Mapping)',
    ],
  },
];

export const PROFESSIONAL_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'tc-plus-lims-infocodec',
    company: 'TC+LIMS - Infocodec',
    roleTitle: 'Senior Customer Success & Account Manager',
    dates: 'Sep 2025 – Present',
    shortSummary:
      'Orchestrated the greenfield business development framework and pioneered the international commercial footprint for TC+LIMS across the USA, India, and UAE. Secured initial anchor laboratory accounts and structured the post-sale customer onboarding lifecycle, leveraging data analytics to guarantee product adoption.',
    keyOutcomes: [
      '100% Enterprise Account Retention Rate',
      'Modernized Core Software Modules via Direct Customer Feedback Loops',
      'Automated Usage Monitoring & Health Tracking via Mixpanel',
    ],
    achievements: [
      'Orchestrated international expansion across USA, India, and UAE markets.',
      'Secured initial anchor laboratory accounts with structured post-sale customer onboarding.',
      'Automated product adoption and usage telemetry using Mixpanel.',
    ],
    logoText: 'TC+',
  },
  {
    id: 'metafic',
    company: 'Metafic',
    roleTitle: 'Senior Account Manager',
    dates: 'Dec 2022 – Jul 2025',
    shortSummary:
      'Managed full sales and post-sale onboarding lifecycles for 30+ international SME and mid-market accounts. Successfully pivoted the company’s engagement layer from pure staff augmentation to a highly scalable custom software services model, standardizing discovery scoping to compress sales timelines.',
    keyOutcomes: [
      '~900K USD Total Realized Portfolio Value',
      '30+ Global Accounts Onboarded',
      '3–4 High-Yield Market Aggregator Partnerships Activated',
      'Sales Cycle Compressed by 20%',
    ],
    achievements: [
      'Pivoted engagement layer to high-value custom software and digital product engineering.',
      'Standardized discovery scoping to compress sales cycle length by 20%.',
      'Built multi-quarter accounts generating ~900K USD total realized portfolio value.',
    ],
    logoText: 'MET',
  },
  {
    id: 'your-maple-tax',
    company: 'Your Maple Tax',
    roleTitle: 'Client Account Manager',
    dates: 'Jul 2021 – Sep 2022',
    shortSummary:
      'Built a high-velocity remote North American outbound GTM engine from scratch using Apollo and Sales Navigator to manage full-lifecycle acquisitions and client health for Canadian SME accounts.',
    keyImpact: '$180K+ signed contract value, closed 15+ new client retainers.',
    achievements: [
      'Built high-velocity outbound GTM engine using Apollo & Sales Navigator.',
      'Signed $180K+ contract value, onboarding 15+ new client retainers.',
    ],
    logoText: 'YMT',
  },
  {
    id: 'ebusiness-international',
    company: 'e-Business International',
    roleTitle: 'Senior Account Executive – Enterprise Staffing',
    dates: 'Jun 2020 – Jun 2021',
    shortSummary:
      'Analyzed deep architectural bottlenecks to structure enterprise talent placement, procurement, and onboarding cycles for major North American accounts.',
    keyImpact: '$120K+ in active T&M consulting and contract revenue generated.',
    achievements: [
      'Managed Tier-1 procurement cycles and specialized technical placements.',
      'Generated $120K+ in active T&M consulting and contract revenue.',
    ],
    logoText: 'EBI',
  },
  {
    id: 'infocodec',
    company: 'Infocodec',
    roleTitle: 'Sr. Business Development Executive',
    dates: 'Jul 2016 – May 2020',
    shortSummary:
      'Owned the end-to-end commercial lifecycle, initial technical mapping, pre-sales alignment, and complex RFP architectures for Tier-1 consulting clients across Guidewire (Insurance) and ETRM (Energy Trading) solutions.',
    keyImpact: '$650K+ total milestone revenue generated.',
    achievements: [
      'Authored complex RFP proposals and led technical mapping for enterprise solutions.',
      'Generated $650K+ total milestone revenue across enterprise platform modernization programs.',
    ],
    logoText: 'INF',
  },
  {
    id: 'nec-america',
    company: 'NEC America',
    roleTitle: 'Business Development Executive',
    dates: 'Aug 2015 – Apr 2016',
    shortSummary:
      'Cultivated robust funnels and mapped client technical requirements from initial cold discovery through final closure for enterprise hardware systems.',
    keyImpact: '$100K+ services revenue with 3 new mid-market accounts acquired.',
    achievements: [
      'Expanded enterprise hardware and infrastructure accounts.',
      'Acquired 3 new mid-market enterprise logos generating $100K+ services revenue.',
    ],
    logoText: 'NEC',
  },
  {
    id: 'marketone-india',
    company: 'MarketOne India',
    roleTitle: 'Business Development Associate',
    dates: 'Jun 2012 – Mar 2015',
    shortSummary:
      'Supervised pipeline architecture and localized account-based demand generation campaigns across APAC for top-tier technology clients like Google Cloud, NetApp, and Dassault.',
    keyImpact:
      'Maintained a consistent 7% to 10% lead-to-opportunity framework conversion rate.',
    achievements: [
      'Delivered structured demand generation programs for Google Cloud, NetApp, and Dassault.',
      'Maintained high conversion velocity across international enterprise campaigns.',
    ],
    logoText: 'M1',
  },
];

export const TECH_PORTFOLIO_TIERS: TechPortfolioTier[] = [
  {
    tierName: 'Targeting Enterprise & Tier-1 Markets',
    tierDescription:
      'High-compliance platforms, mission-critical architectures, and modern intelligence engines.',
    items: [
      {
        title: 'SaaS Solutions',
        subtext: 'TC+ LIMS, Compliance & Quality Platforms',
      },
      {
        title: 'Insurance Technology',
        subtext: 'Guidewire Platform Modernizations & Core Systems',
      },
      {
        title: 'Energy & Commodity Trading',
        subtext: 'ETRM Platform Enhancements (Openlink / Endur)',
      },
      {
        title: 'AI Solutions',
        subtext: 'Generative AI, Document Intelligence & Computer Vision',
      },
    ],
  },
  {
    tierName: 'Custom Web & Mobile Development [Startups to Mid-Market]',
    tierDescription:
      'Agile software engineering squads, production-grade applications, and workflow digitisation.',
    items: [
      {
        title: 'Food & Beverage Manufacturing',
        subtext: 'QC Workflows, Batch Traceability & CoA Platforms',
      },
      {
        title: 'Enterprise Staffing & Tech Services',
        subtext: 'Product Engineering Squads & Dedicated Teams',
      },
      {
        title: 'Business Applications & Digital Platforms',
        subtext: 'ERP, CRM, Automated Workflows & Marketplaces',
      },
      {
        title: 'Native Mobile Apps',
        subtext: 'Cross-platform iOS & Android Engineering',
      },
      {
        title: 'Web Applications & Dashboards',
        subtext: 'Custom Cloud Portals, Analytics & Internal Tools',
      },
      {
        title: 'SaaS MVP Launch Frameworks',
        subtext: 'Rapid GTM Prototypes & Scalable Architectures',
      },
    ],
  },
];

export const PARTNER_ALLIANCES: PartnerAllianceItem[] = [
  {
    name: 'OutSystems Alliance',
    framework: 'Strategic Low-Code Modernization Framework',
    outcome:
      'Established a strategic deployment framework to secure niche enterprise software modernizations and accelerate delivery.',
  },
  {
    name: 'ITeXchange Network',
    framework: 'Co-Sell & Delivery Partnership',
    outcome:
      'Leveraged co-sell mechanisms as a core development partner to win high-margin IT service and enterprise infrastructure contracts.',
  },
  {
    name: 'Digital Outsourcing Ecosystems',
    framework: 'ExpandMyBusiness & Benchkart Channel Alliances',
    outcome:
      'Structured flexible, fixed-price project frameworks and partner-led models to optimize delivery performance and customer acquisition.',
  },
];

export const GTM_EXECUTION_STEPS: GtmStep[] = [
  {
    stepNumber: 1,
    title: 'Market Research & ICP Mapping',
    frameworkTag: 'TAS Engine',
    description: 'Pinpoint high-propensity accounts and target buying personas.',
  },
  {
    stepNumber: 2,
    title: 'Multi-Channel Outreach',
    frameworkTag: 'Target Outbound',
    description: 'Coordinated LinkedIn, email, and network engagement.',
  },
  {
    stepNumber: 3,
    title: 'Discovery & Deep Diagnostics',
    frameworkTag: 'Solution Selling',
    description: 'Surface root operational pain points and workflow risks.',
  },
  {
    stepNumber: 4,
    title: 'BRD Authoring',
    frameworkTag: 'Technical Scoping',
    description: 'Transform client requirements into detailed technical blueprints.',
  },
  {
    stepNumber: 5,
    title: 'Solution Engineering & POC',
    frameworkTag: 'Architecture Design',
    description: 'Validate technical feasibility and interactive prototypes.',
  },
  {
    stepNumber: 6,
    title: 'Proposal & ROI Modeling',
    frameworkTag: 'Value Framework',
    description: 'Quantify payback timelines and cost-benefit milestones.',
  },
  {
    stepNumber: 7,
    title: 'MEDDPICC Client Negotiation',
    frameworkTag: 'Qualification',
    description: 'Align economic buyer, metrics, and decision criteria.',
  },
  {
    stepNumber: 8,
    title: 'Contract Execution & Closure',
    frameworkTag: 'Commercial Sign-off',
    description: 'Structure transparent milestones and legal agreements.',
  },
  {
    stepNumber: 9,
    title: 'Structured Delivery Hand-off',
    frameworkTag: 'Governance',
    description: 'Bridge sales commitments seamlessly to engineering teams.',
  },
  {
    stepNumber: 10,
    title: 'Proactive Account Expansion',
    frameworkTag: 'Mixpanel & Retention',
    description: 'Monitor telemetry, ensure renewals, and expand account value.',
  },
];

export const ENABLEMENT_FRAMEWORKS: EnablementFrameworkCard[] = [
  {
    id: 'brd-authoring',
    title: 'Business Requirement Documents (BRD) Authoring',
    description:
      'End-to-end technical scoping and workflow mapping built directly from discovery sessions.',
  },
  {
    id: 'solution-proposals',
    title: 'Comprehensive Solution Proposals',
    description:
      'Tailored commercial structuring, value proposition alignment, and platform architecture design.',
  },
  {
    id: 'poc-roadmaps',
    title: 'Proof of Concept (POC) Roadmaps',
    description:
      'Agile technical validation blueprints defined specifically for client technical evaluation cycles.',
  },
  {
    id: 'roi-analysis',
    title: 'Financial & Phased ROI Analysis',
    description:
      'Quantitative cost-benefit modeling and payback timeline frameworks designed for executive sign-off.',
  },
  {
    id: 'meddpicc-checks',
    title: 'MEDDPICC Qualification & Health Checks',
    description:
      'Proactive opportunity qualification, economic buyer mapping, and pipeline risk management.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'engagement-1-lims',
    title: 'Laboratory Digitization & Regulatory Platform',
    category: 'Testing & Laboratory Services',
    status: 'Delivered Platform',
    imageUrl:
      'https://ik.imagekit.io/zwyjez0nb/Portfolio%20Images%20-%20Sep%2022nd,%202026/Laboratory%20Digitization%20&%20Regulatory%20Platform',
    industryAndMarket: 'Testing, Inspection and Laboratory Services | UAE & India',
    summary:
      'Centralized spreadsheet-driven laboratory workflows into a digital LIMS for sample tracking, QA controls, and audit readiness.',
    businessChallenge:
      'The laboratory was managing several operational workflows through spreadsheets and disconnected processes. Sample movement, reporting, testing status, QA checks, and audit documentation were difficult to track centrally. This created delays in report generation and increased the risk of missing information during regulatory and NABL audits.',
    opportunityDiscovery:
      'The opportunity was identified through discussions with operational and QA stakeholders rather than through a standard software requirement. The key issue was not simply that the client needed new software. They needed better control over laboratory operations, traceability, reporting, and compliance.',
    commercialApproach:
      'I worked with the stakeholders to understand the full process from sample registration through testing, QA review, report generation, and final delivery. The solution was positioned around operational visibility and compliance rather than around individual software features.',
    solutionStrategy: [
      'Sample registration & accessioning',
      'Test workflow & department-level tracking',
      'QA controls & calibration logs',
      'Automated report generation',
      'Immutable audit trails & user permissions',
      'Real-time management reporting dashboard',
    ],
    myContribution: [
      'Involved in discovery, stakeholder coordination, solution positioning, internal technical discussions, and commercial conversations.',
      'Ensured that the technical solution remained strictly connected to the client’s operational and compliance problems.',
    ],
    projectOutcome:
      'The engagement moved the laboratory from spreadsheet-driven workflows toward centralized digital operations.',
    businessImpact: [
      'Near-complete digital sample traceability',
      'Approximately 40% faster report-generation workflows',
      'Reduced dependency on spreadsheets',
      'Improved audit readiness for NABL accreditation',
      'Better operational visibility across testing departments',
    ],
    capabilitiesDemonstrated: [
      'Consultative Selling',
      'Digital Transformation',
      'Enterprise Solution Sales',
      'Stakeholder Management',
      'Business Process Discovery',
      'Account Management',
    ],
    commercialValue:
      '40% faster report generation and complete digital audit traceability.',
  },
  {
    id: 'engagement-2-visitor-intelligence',
    title: 'B2B Visitor Intelligence & Sales Acceleration SaaS',
    category: 'B2B SaaS / MarTech',
    status: 'Commercial SaaS',
    imageUrl:
      'https://ik.imagekit.io/zwyjez0nb/Portfolio%20Images%20-%20Sep%2022nd,%202026/B2B%20Visitor%20Intelligence%20&%20Sales%20Acceleration%20SaaS.png',
    industryAndMarket: 'B2B SaaS / Sales Intelligence / MarTech',
    summary:
      'Turned anonymous B2B website traffic into enriched, high-intent sales intelligence integrated with CRM workflows.',
    businessChallenge:
      'The business wanted to identify companies visiting a website without completing a form and turn that traffic into actionable sales intelligence. Sales teams had limited visibility into buyer intent, while marketing teams could not easily understand which anonymous visitors represented high-value accounts.',
    opportunityDiscovery:
      'I originated the opportunity through outbound prospecting and continued building the relationship through multiple conversations. Over time, the discussion developed from a general technology conversation into a much more structured SaaS product opportunity.',
    commercialApproach:
      'I worked with business and technical stakeholders to define how the product could identify visitors, enrich company information, detect high-intent behavior, and connect those insights with sales workflows. The discussion was positioned around creating a commercial SaaS product rather than delivering a simple website-tracking feature.',
    solutionStrategy: [
      'Anonymous company IP identification',
      'Visitor tracking & behavior analytics',
      'B2B data enrichment & confidence scoring',
      'Real-time buyer-intent notifications',
      'HubSpot and Salesforce CRM integrations',
      'Privacy and consent management compliance',
      'Future lead scoring & predictive intelligence roadmap',
    ],
    myContribution: [
      'Personally handled outbound opportunity generation and relationship development.',
      'Led stakeholder discovery and product requirement discussions.',
      'Managed internal technical coordination, solution positioning, proposal management, commercial discussions, negotiation, and closure progression.',
    ],
    commercialOutcome:
      'The engagement progressed from a cold outbound conversation into a strategic SaaS product opportunity and commercial engagement.',
    targetBusinessImpact: [
      'Targeted a visitor-identification rate of at least 70% for qualifying companies',
      'Reduced manual account research and increased speed-to-lead',
      'Improved marketing attribution and opportunity quality',
    ],
    capabilitiesDemonstrated: [
      'Enterprise SaaS Sales',
      'Consultative Selling',
      'Product Discovery',
      'Complex Solution Sales',
      'GTM Consulting',
      'Stakeholder Management',
      'Commercial Negotiation',
    ],
    commercialValue:
      '70%+ target visitor identification with real-time CRM enrichment.',
  },
  {
    id: 'engagement-3-legal-document-ai',
    title: 'AI-Powered Legal Document Automation Platform',
    category: 'LegalTech / GenAI',
    status: 'AI Architecture',
    imageUrl:
      'https://ik.imagekit.io/zwyjez0nb/Portfolio%20Images%20-%20Sep%2022nd,%202026/AI-Powered%20Legal%20Document%20Automation%20Platform.png',
    industryAndMarket: 'LegalTech / Generative AI | Chile',
    summary:
      'Deployed Retrieval-Augmented Generation (RAG) to accelerate legal document review, multilingual research, and report authoring.',
    businessChallenge:
      'Legal teams were spending substantial time reviewing large volumes of documents, searching for information, and preparing structured reports manually. The process was repetitive, difficult to scale, and dependent on experienced consultants.',
    opportunityDiscovery:
      'Through structured conversations with legal and operational stakeholders, I identified repetitive tasks that could be supported through AI while still keeping human review in place.',
    commercialApproach:
      'Rather than positioning AI as a replacement for legal professionals, the solution was positioned around improving productivity, document access, consistency, and turnaround time. Security and information confidentiality were central to the commercial discussion.',
    solutionStrategy: [
      'Secure document ingestion & indexing',
      'Retrieval-Augmented Generation (RAG) architecture',
      'AI-assisted document analysis & multilingual search',
      'Structured report generation & knowledge retrieval',
      'Role-based access & human validation workflows',
    ],
    myContribution: [
      'Helped translate operational pain points into a practical AI use case.',
      'Coordinated business and technical conversations, supporting solution and commercial positioning.',
    ],
    projectOutcome:
      'The engagement created a scalable foundation for AI-assisted legal document processing and knowledge retrieval.',
    indicativeBusinessImpact: [
      '40–60% reduction in first-level document review effort',
      'Faster structured report preparation',
      'Higher document-processing capacity without proportional headcount growth',
      'Improved consistency in repetitive research tasks',
    ],
    capabilitiesDemonstrated: [
      'AI Solution Selling',
      'Enterprise Discovery',
      'Product Consulting',
      'Stakeholder Management',
      'GenAI Use-Case Development',
      'Commercial Negotiation',
    ],
    commercialValue:
      '40-60% expected reduction in first-level legal document review effort.',
  },
  {
    id: 'engagement-4-saas-modernization',
    title:
      'SaaS Platform Modernization, Engineering Transition & Scale Partnership',
    category: 'B2B SaaS / Scale',
    status: 'Strategic Partnership',
    imageUrl:
      'https://ik.imagekit.io/zwyjez0nb/Portfolio%20Images%20-%20Sep%2022nd,%202026/AI-Powered%20Product%20Customization%20Marketplace.png',
    industryAndMarket: 'B2B SaaS / Sales Automation',
    summary:
      'Structured a phased engineering transition program for a production-critical SaaS platform to reduce technical debt and optimize cloud spend.',
    businessChallenge:
      'A mature SaaS platform had reached a stage where the business needed additional engineering capacity, better platform support, performance improvement, and a lower-risk way to reduce dependency on its existing development setup. The platform was already complex and production-critical.',
    opportunityDiscovery:
      'The relationship started through outbound engagement and developed over time. As trust increased, discussions expanded into platform support, engineering transition, performance improvements, DevOps, technical debt, and longer-term ownership.',
    commercialApproach:
      'I did not position this as a simple resource-augmentation deal. The strategy was to reduce the client’s transition risk through gradual codebase understanding, support, enhancement, and confidence building.',
    solutionStrategy: [
      'Backend and frontend engineering support',
      'DevOps, infrastructure improvements & continuous monitoring',
      'Performance optimization for APIs & WebSockets',
      'QA, technical debt reduction & issue resolution',
      'Structured architecture improvements & knowledge transfer',
    ],
    myContribution: [
      'Developed the account from outbound and maintained founder-level communication.',
      'Coordinated technical discovery, structured the phased engagement model, and managed proposals.',
      'Negotiated resource and commercial terms across a long sales cycle, expanding into additional product initiatives.',
    ],
    commercialOutcome:
      'The relationship evolved into a broader strategic engineering partnership covering platform continuity, modernization, and new product initiatives.',
    targetBusinessImpact: [
      '99.9% platform availability target',
      'Faster API and WebSocket performance with reduced technical debt',
      'Lower technical support burden and faster feature velocity',
      '30–40% potential infrastructure cost savings identified',
    ],
    capabilitiesDemonstrated: [
      'Strategic Account Management',
      'Enterprise Sales',
      'Account Expansion',
      'SaaS Consulting',
      'Engineering Services Sales',
      'Stakeholder Management',
      'Commercial Negotiation',
    ],
    commercialValue:
      '99.9% availability target and 30-40% potential infrastructure savings.',
  },
  {
    id: 'engagement-5-product-customization',
    title: 'AI-Powered Product Customization Marketplace',
    category: 'E-Commerce / AI',
    status: 'Marketplace Solution',
    imageUrl:
      'https://ik.imagekit.io/zwyjez0nb/Portfolio%20Images%20-%20Sep%2022nd,%202026/AI-Powered%20Product%20Customization%20Marketplace.png',
    industryAndMarket: 'Retail / E-Commerce | Chile',
    summary:
      'Designed an interactive personalization engine connecting online buyers directly with manufacturing fulfillment workflows.',
    businessChallenge:
      'The business wanted to sell customized products online, but the existing e-commerce setup could not handle complex product personalization. A large part of the process depended on manual communication between buyers, sales teams, and manufacturing operations.',
    opportunityDiscovery:
      'The requirement became clear through customer-journey and operational discovery showing that manual coordination was affecting order accuracy, fulfillment speed, and business scalability.',
    commercialApproach:
      'Positioned the project around improving customer experience and manufacturing coordination rather than simply building another e-commerce website.',
    solutionStrategy: [
      'Interactive product visual configuration',
      'Customer personalization & dynamic product options',
      'Structured order capture & manufacturing info flow',
      'Order-management dashboard & scalable backend',
    ],
    myContribution: [
      'Supported discovery, commercial positioning, stakeholder alignment, and product discussions.',
      'Connected customer-facing digital experience with backend operational requirements.',
    ],
    projectOutcome:
      'Established a digital foundation for handling customized products without depending on manual coordination for every order.',
    indicativeBusinessImpact: [
      'Significantly faster product configuration',
      'Reduced configuration errors and lower manual coordination effort',
      'Improved ability to handle customized orders at scale',
      'Potential improvement in conversion for personalized items',
    ],
    capabilitiesDemonstrated: [
      'E-Commerce Consulting',
      'Solution Sales',
      'Product Discovery',
      'Customer Journey Mapping',
      'Digital Transformation',
      'Commercial Strategy',
    ],
    commercialValue:
      'Automated product configuration and eliminated manual manufacturing coordination.',
  },
  {
    id: 'engagement-6-agritech-erp',
    title: 'Farm Production Operations ERP',
    category: 'AgriTech / Operations',
    status: 'Digital ERP',
    imageUrl:
      'https://ik.imagekit.io/zwyjez0nb/Portfolio%20Images%20-%20Sep%2022nd,%202026/Farm%20Production%20Operations%20ERP.png',
    industryAndMarket: 'AgriTech / Agriculture Operations | Chile',
    summary:
      'Built a centralized operational ERP capturing mobile harvest tracking, inventory, automated labeling, and shipment readiness.',
    businessChallenge:
      'Farm operations depended heavily on spreadsheets and manual communication for harvesting, workforce activity, inventory, labeling, and shipment readiness. Management had limited real-time visibility into day-to-day production.',
    opportunityDiscovery:
      'The engagement required understanding actual field operations rather than applying a generic ERP model, mapping how information moved between farm workers, supervisors, inventory teams, and management.',
    commercialApproach:
      'Positioned the solution around improving visibility, traceability, and operational control during highly seasonal farming operations.',
    solutionStrategy: [
      'Mobile harvest tracking & workforce activity capture',
      'Inventory management & automated labeling',
      'Shipment tracking & production dashboards',
      'Operational alerts & real-time management reporting',
    ],
    myContribution: [
      'Worked with operational stakeholders to identify production bottlenecks and translate them into structured software requirements.',
      'Positioned the solution commercially around operational efficiency and visibility.',
    ],
    projectOutcome:
      'The platform reduced spreadsheet dependence and provided a centralized system for tracking farm production activity.',
    businessImpact: [
      'Near-complete digital traceability for recorded harvesting activities',
      'More than 50% reduction in spreadsheet-driven reporting processes',
      'Real-time production visibility across fields and packing houses',
      'Faster shipment-readiness reporting and improved workforce tracking',
    ],
    capabilitiesDemonstrated: [
      'ERP Solution Selling',
      'Business Process Discovery',
      'Digital Transformation',
      'AgriTech Consulting',
      'Stakeholder Management',
    ],
    commercialValue:
      '50%+ reduction in spreadsheet reporting and real-time field-to-packhouse visibility.',
  },
  {
    id: 'engagement-7-guidewire-partnership',
    title: 'Guidewire Insurance Technology Partnership',
    category: 'InsuranceTech / Enterprise',
    status: 'Enterprise Partnership',
    imageUrl:
      'https://ik.imagekit.io/zwyjez0nb/Portfolio%20Images%20-%20Sep%2022nd,%202026/Guidewire%20Insurance%20Technology%20Partnership.png',
    industryAndMarket: 'Insurance Technology | North America',
    summary:
      'Delivered specialist Guidewire and Java engineering capacity for enterprise insurance transformation programs.',
    businessChallenge:
      'Enterprise insurance transformation programs required specialized Guidewire and Java engineering expertise. The required talent was difficult to source through normal recruitment channels, causing delays in delivery.',
    opportunityDiscovery:
      'The commercial opportunity came from identifying specific technology and resource shortages rather than selling generic IT staffing.',
    commercialApproach:
      'Positioned the engagement as a long-term engineering-capacity solution, providing pre-qualified specialist resources without the overhead and delay of permanent hiring.',
    solutionStrategy: [
      'Pre-vetted Guidewire ClaimCenter/PolicyCenter specialists',
      'Core Java engineering and integration squads',
      'Flexible technical resource augmentation & scaling',
      'Long-term delivery continuity & SLA governance',
    ],
    myContribution: [
      'Conducted stakeholder discovery and resource requirement mapping.',
      'Managed technical profile coordination, commercial rate discussions, procurement alignment, negotiation, and account relationships.',
    ],
    commercialOutcome:
      'Provided a scalable model for delivering specialist insurance-technology engineering capacity across multi-year cycles.',
    indicativeBusinessImpact: [
      '30–50% faster access to specialist technical resources compared with traditional hiring',
      'Reduced internal recruitment overhead and faster engineering capacity deployment',
      'Lower risk of project delays caused by niche skill shortages',
    ],
    capabilitiesDemonstrated: [
      'Enterprise Account Management',
      'Staff Augmentation Sales',
      'Insurance Technology',
      'Procurement Management',
      'Commercial Negotiation',
      'Strategic Partnerships',
    ],
    commercialValue:
      '30-50% faster specialist technical onboarding for Tier-1 insurance transformations.',
  },
  {
    id: 'engagement-8-openlink-etrm',
    title: 'Openlink ETRM Energy Trading Technology Partnership',
    category: 'Energy & Commodities',
    status: 'Mission-Critical ETRM',
    imageUrl:
      'https://ik.imagekit.io/zwyjez0nb/Portfolio%20Images%20-%20Sep%2022nd,%202026/Openlink%20ETRM%20Energy%20Trading%20Technology.png',
    industryAndMarket: 'Energy and Commodity Trading | North America',
    summary:
      'Secured critical Openlink Endur and Java engineering capacity for energy trading platform modernization and risk management.',
    businessChallenge:
      'Energy trading businesses required highly specialized Openlink/Endur and Java engineering skills for critical trading platforms. Specialist talent availability was limited, while modernization and enhancement programs could not be delayed.',
    opportunityDiscovery:
      'The opportunity was developed around the customer’s technical-resource gaps and mission-critical delivery timelines.',
    commercialApproach:
      'Instead of positioning individual contractors, I positioned the relationship around access to specialist engineering capacity and delivery continuity.',
    solutionStrategy: [
      'Openlink/Endur trading system specialists',
      'Java engineering & ETRM workflow development',
      'Platform enhancements & integration support',
      'Flexible resource scaling & knowledge retention',
    ],
    myContribution: [
      'Involved in resource discovery, technical requirement mapping, stakeholder alignment, commercial discussions, rate negotiation, procurement coordination, and ongoing account management.',
    ],
    commercialOutcome:
      'Supported additional specialist delivery capacity for business-critical energy trading technology programs.',
    indicativeBusinessImpact: [
      '30–50% shorter specialist resource acquisition cycles',
      'Faster capacity deployment and reduced engineering backlog',
      'Better continuity for critical ETRM programs with reduced permanent hiring overhead',
    ],
    capabilitiesDemonstrated: [
      'Enterprise Sales',
      'Energy Technology',
      'Resource Augmentation',
      'Strategic Account Management',
      'Technical Solution Selling',
      'Commercial Negotiation',
    ],
    commercialValue:
      '30-50% shorter acquisition cycles for mission-critical trading platform enhancements.',
  },
  {
    id: 'engagement-9-event-lead-capture',
    title: 'Event-Focused Lead Capture & Automated Sales Pipeline SaaS',
    category: 'EventTech / CRM SaaS',
    status: 'Commercial SaaS GTM',
    imageUrl:
      'https://ik.imagekit.io/zwyjez0nb/Portfolio%20Images%20-%20Sep%2022nd,%202026/Event-Focused%20Lead%20Capture%20&%20Automated%20Sales%20Pipeline%20SaaS.png',
    industryAndMarket: 'EventTech / MarTech / CRM SaaS | North America & UAE',
    summary:
      'Pioneered GTM for a mobile lead capture and instant follow-up SaaS, onboarding early adopter accounts and generating initial ARR.',
    businessChallenge:
      'Companies participating in trade shows and exhibitions were collecting leads manually and often following up only after the event. This created delays, inconsistent data, poor event attribution, and lost sales opportunities.',
    opportunityDiscovery:
      'The product concept came from understanding the workflow of event-based sales teams and how quickly lead value decreases when follow-up is delayed.',
    commercialApproach:
      'Worked on the GTM side by identifying event-active target accounts, conducting prospect discussions, demonstrating the product, and connecting the value proposition with immediate lead follow-up.',
    solutionStrategy: [
      'Mobile lead capture & badge scanning',
      'Offline data capture & automatic cloud sync',
      'CRM synchronization & automated email follow-up',
      'Lead qualification, event analytics & AI-assisted sales workflows',
    ],
    myContribution: [
      'Handled GTM planning, target-account identification, outbound prospecting, and discovery.',
      'Conducted product demonstrations, commercial discussions, customer onboarding, and early account development.',
    ],
    commercialOutcome:
      'The product onboarded 3 early-adopter client accounts, 15 paid seats, and generated >$7K in initial SaaS ARR.',
    businessImpact: [
      'Shifted customer workflow from delayed post-event lead entry to near-real-time capture and follow-up',
      'Immediate lead enrichment and CRM ingestion during live exhibitions',
    ],
    capabilitiesDemonstrated: [
      'SaaS GTM',
      'Product-Led Growth',
      'Outbound Sales',
      'Product Demonstration',
      'Customer Acquisition',
      'Early-Stage SaaS Sales',
    ],
    commercialValue:
      'Onboarded 3 early accounts with 15 paid seats and immediate post-event follow-up.',
  },
  {
    id: 'engagement-10-linkedin-crm',
    title: 'LinkedIn-First CRM & Unified Smart Inbox',
    category: 'SalesTech / CRM SaaS',
    status: 'Product Extension',
    imageUrl:
      'https://ik.imagekit.io/zwyjez0nb/Portfolio%20Images%20-%20Sep%2022nd,%202026/unified-smart-inbox.png',
    industryAndMarket:
      'SalesTech / CRM SaaS / LinkedIn Productivity',
    summary:
      'Conceptualized and scoped a 3-pane LinkedIn-centric smart inbox and CRM extension to eliminate workflow fragmentation.',
    businessChallenge:
      'Sales professionals were managing relationships across LinkedIn profiles, connection lists, messages, Sales Navigator, CRM, campaign tools, notes, and enrichment platforms. The fragmented workflow created unnecessary context switching and made relationship management difficult.',
    opportunityDiscovery:
      'This opportunity emerged through an existing strategic account relationship where the stakeholder wanted to create a simple and affordable LinkedIn-first CRM together with a better way to manage conversations.',
    commercialApproach:
      'Translated the founder-led idea into a structured SaaS product discussion focusing on solving a specific workflow problem for LinkedIn-centric sales users.',
    solutionStrategy: [
      'Connection synchronization & centralized connection management',
      'Search, tagging, notes, follow-up reminders & browser extension',
      'Three-pane Smart Inbox synchronizing LinkedIn & Sales Navigator',
      'Lead intelligence panel, snippets, attachments, CRM actions & contact reveal',
    ],
    myContribution: [
      'Supported relationship development, product discovery, and competitor-inspired requirement analysis.',
      'Led MVP prioritization, internal product and engineering alignment, commercial positioning, scope discussions, and account expansion.',
    ],
    commercialOutcome:
      'The existing account expanded beyond the original engineering discussion into additional standalone SaaS product opportunities.',
    targetBusinessImpact: [
      '~30% reduction in time lost switching between LinkedIn and SaaS tools',
      'Message synchronization in under 2 seconds',
      'Elimination of lead-to-message mapping errors',
      'Faster access to account and relationship context',
    ],
    capabilitiesDemonstrated: [
      'SaaS Product Consulting',
      'Strategic Account Development',
      'SalesTech',
      'CRM Solutioning',
      'Product Discovery',
      'Account Expansion',
      'Stakeholder Management',
    ],
    commercialValue:
      '30% estimated reduction in context-switching with <2s message synchronization.',
  },
  {
    id: 'engagement-11-lead-monetization',
    title: 'B2B Lead Intelligence & Data Monetization Platform',
    category: 'Data SaaS / Prospecting',
    status: 'Product Stabilization & Scale',
    imageUrl:
      'https://ik.imagekit.io/zwyjez0nb/Portfolio%20Images%20-%20Sep%2022nd,%202026/B2B%20Lead%20Intelligence%20&%20Data%20Monetization%20Platform.png',
    industryAndMarket:
      'Sales Intelligence / Prospecting Technology / B2B Data SaaS',
    summary:
      'Structured a 4-stage stabilization, enrichment, and credit-based monetization roadmap to turn raw search into commercial SaaS.',
    businessChallenge:
      'An existing lead-search product was not commercially ready. The core search experience had performance and usability issues, while the platform lacked a mature way to organize leads, enrich contact information, and monetize data.',
    opportunityDiscovery:
      'The engagement came through an existing strategic relationship where the first priority was stabilizing the product rather than adding unneeded features.',
    commercialApproach:
      'Supported the conversation around fixing the core product before introducing additional monetization and integration layers, keeping scope connected to user experience and commercial viability.',
    solutionStrategy: [
      'Stage 1 (Stability): Search accuracy, filters, saved searches, selection logic, and speed',
      'Stage 2 (Lead Management): Structured tables, personas, tags, sorting, and lead profiles',
      'Stage 3 (Monetization): Credit-based email and phone reveal architecture',
      'Stage 4 (Ecosystem Integration): CSV export, CRM integration, subscription limits, and upgrade paths',
    ],
    myContribution: [
      'Maintained the stakeholder relationship and converted pain points into an expansion opportunity.',
      'Coordinated product and engineering discussions, roadmap prioritization, scope expectations, and commercial structuring.',
    ],
    commercialOutcome:
      'Expanded the account from engineering support into additional product-development opportunities around lead intelligence and sales technology.',
    targetBusinessImpact: [
      'Faster prospect discovery with lower manual research effort',
      'Improved lead-data completeness and higher prospecting throughput',
      'New recurring revenue streams through credit-based contact reveals',
      'Faster movement of qualified leads into CRM and outreach workflows',
    ],
    capabilitiesDemonstrated: [
      'Account Expansion',
      'SaaS Sales',
      'Sales Intelligence',
      'Product Strategy',
      'Consultative Selling',
      'Commercial Negotiation',
      'Strategic Account Management',
    ],
    commercialValue:
      'Created multi-stage expansion roadmap introducing credit-based monetization.',
  },
];

export const OVERALL_SALES_APPROACH_STEPS = [
  'Outbound Prospecting',
  'Relationship Development',
  'Business Discovery',
  'Solution Positioning',
  'Technical Alignment',
  'Commercial Negotiation',
  'Closure',
  'Account Expansion',
];

export const CORE_CAPABILITIES_LIST = [
  'Enterprise Sales',
  'Strategic Account Management',
  'SaaS Sales',
  'Consultative Selling',
  'Complex Solution Sales',
  'Account Expansion',
  'Customer Discovery',
  'Stakeholder Management',
  'Commercial Negotiation',
  'GTM Strategy',
  'Product Consulting',
  'AI Solution Selling',
  'Engineering Services Sales',
  'Staff Augmentation',
  'Digital Transformation',
  'CRM and SalesTech',
  'Product-Led Growth',
  'Cross-Functional Coordination',
];

export const TOOLS_AND_SYSTEMS = {
  crmList: ['Salesforce', 'HubSpot', 'Zoho CRM'],
  intelligenceList: ['LinkedIn', 'Apollo', 'AI Productivity & Research Tools'],
  productAdoption: {
    title: 'Product Adoption & Customer Health',
    description:
      'Deep understanding of product adoption cycles, telemetry signals, onboarding milestones, and proactive health metrics. Leveraging Mixpanel to coordinate with product teams and protect customer retention.',
    highlights: [
      'Understanding telemetry signals & user journeys',
      'Mixpanel for feature adoption & user retention',
      'Onboarding milestone completion tracking',
      'Proactive customer health score monitoring',
    ],
  },
  operationalDisciplines: [
    'Greenfield Business Development',
    'CRM Hygiene & Pipeline Accounting',
    'Renewal Tracking & Contract Expirations',
    'Customer Feedback Capture Loops',
    'Commercial Follow-ups & SOW Authoring',
    'Stakeholder Mapping & Economic Buyer Alignment',
    'Account Expansion & Upsell Identification',
  ],
};

export const VERIFIED_FEEDBACK: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    name: 'Gagan Josan',
    title: 'CEO',
    companyOrContext: '',
    relationship: '',
    text:
      'He has been instrumental in driving the growth of TC+ LIMS and our other SaaS solutions. His deep understanding of laboratory workflows, strong consultative approach, and ability to translate customer needs into successful implementations have consistently delivered excellent results.',
    verifiedYear: '2024',
  },
  {
    id: 'testimonial-2',
    name: 'Priyanka Manjariya',
    title: 'CPO',
    companyOrContext: '',
    relationship: '',
    text:
      'I have had the privilege of working with Raj and he is one of the most strategic and results-driven sales leaders I’ve encountered. In Sales and Account Management, he combines business acumen with exceptional execution.',
    verifiedYear: '2024',
  },
  {
    id: 'testimonial-3',
    name: 'Stanley Charles',
    title: 'Director',
    companyOrContext: '',
    relationship: '',
    text:
      'I highly recommend Raj for his exceptional performance as a Senior Business Development Executive at NEC America. He excelled in acquiring new business for IT services and infrastructure products.',
    verifiedYear: '2023',
  },
  {
    id: 'testimonial-4',
    name: 'Ignacio Vásquez',
    title: 'Director',
    companyOrContext: '',
    relationship: '',
    text: 'Excellent service and very professional. Highly recommended!',
    verifiedYear: '2023',
  },
  {
    id: 'testimonial-5',
    name: 'Jairo Hott Reyes',
    title: 'Director',
    companyOrContext: '',
    relationship: '',
    text:
      'I want to take a moment to wholeheartedly highlight and recommend Raja. From the very first day we interacted, it was clear that I was dealing with someone who truly understands business needs.',
    verifiedYear: '2023',
  },
];
