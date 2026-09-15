import {
  ExperienceItem,
  CaseStudy,
  MetricCardItem,
  ValuePillarItem,
  TestimonialItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Rajakumar Sivasubramanian',
  professionalLocation: 'Dubai, UAE',
  email: 'raj.siva0710@gmail.com',
  phone: '+971 52 877 0047',
  whatsappUrl: 'https://wa.me/971528770047',
  linkedInUrl: 'https://linkedin.com/in/rajsiva/',
  profileImageUrl:
    'https://www.image2url.com/r2/default/images/1785784733130-463697ea-d4b8-40a6-a8e3-46ef59c33d68.jpg',
  monogramUrl:
    'https://www.image2url.com/r2/default/images/1785786452111-925fd485-8538-4e02-abc3-60a98eb62066.png',
  formspreeUrl: 'https://formspree.io/f/xaqggqzj',
  calendlyUrl: 'https://calendly.com/raj-siva0710/30min',
  canonicalResumeUrl: 'https://raja-sales-resume.linkyhost.com/',
  ctaResumeText: 'Download Resume',
};

export const HERO_DATA = {
  headline: 'Strategic Account Management, Customer Success and GTM',
  supportLine: '12+ years across B2B technology, SaaS, AI and digital solutions',
  mainCopy:
    'I work best where customer relationships, product understanding and commercial growth come together. I learn products quickly, understand the market, work with senior stakeholders and help customers adopt, renew and expand the solutions they use.',
  secondaryLine:
    'Experience across SaaS products, mobile applications, web applications, custom software, AI integrations and enterprise technology services.',
  roleFocusPills: [
    'Key Account Management',
    'Strategic Accounts',
    'Customer Success',
    'Client Partnerships',
    'Account Growth',
    'New Business Acquisition',
  ],
};

export const METRIC_CARDS: MetricCardItem[] = [
  {
    metric: '12+ Years',
    label: 'B2B Experience',
    description: 'B2B technology and commercial experience',
  },
  {
    metric: '$900K+',
    label: 'Recent Revenue',
    description: 'Combined technology services ($700K+) and SaaS revenue ($200K+) driven across key accounts',
  },
  {
    metric: 'Diverse Verticals',
    label: 'Catered into Different Verticals',
    description: 'How I add value to enterprise accounts across multiple industries',
  },
  {
    metric: 'Senior Stakeholders',
    label: 'Executive Alignment',
    description: 'Experience working with founders, C-level executives, directors and delivery teams',
  },
];

export const VALUE_PILLARS: ValuePillarItem[] = [
  {
    title: 'Customer Relationships',
    description:
      'Building strong working relationships with customers by staying close to their requirements, responding clearly and keeping commercial and delivery conversations connected.',
  },
  {
    title: 'Product Adoption',
    description:
      'Helping customers understand how the product or service fits their workflow and where they can extract maximum business value.',
  },
  {
    title: 'Renewals and Retention',
    description:
      'Managing the commercial process around AMC, subscription and licence renewals by staying ahead of renewal dates and customer concerns.',
  },
  {
    title: 'Account Expansion',
    description:
      'Identifying adjacent customer requirements that create genuine upsell or cross-sell opportunities rather than pushing unrelated products.',
  },
  {
    title: 'Stakeholder Management',
    description:
      'Comfortable engaging founders, executives, vice presidents, directors, champions, technical teams and operational users.',
  },
  {
    title: 'Market and Product Learning',
    description:
      'Quickly learning new products and services, understanding the market, identifying the ICP and translating capabilities into practical use cases.',
  },
];

export const PROFESSIONAL_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'tc-plus-lims',
    company: 'TC+ LIMS',
    roleTitle: 'Account Management and Commercial Lead',
    dates: '2023 - Present',
    shortSummary:
      'Leading commercial positioning, customer discovery and account expansion for laboratory information management systems across industrial and commercial testing sectors.',
    roleFocus:
      'Product positioning, account growth, customer discovery, renewals and commercial coordination.',
    customerTypes:
      'Commercial testing laboratories, industrial manufacturing quality control departments, food and metals testing facilities.',
    solutionCategories: [
      'Laboratory Information Management Systems (LIMS)',
      'Quality and Calibration Systems',
      'Compliance & Audit Trail Software',
      'Workflow Automation',
    ],
    accountResponsibilities: [
      'Direct customer engagement through initial onboarding, workflow alignment and ongoing account check-ins.',
      'Translating laboratory compliance and calibration requirements into clear product enhancement dialogues.',
      'Managing software subscription renewals, annual maintenance discussions and licence upgrades.',
    ],
    commercialResponsibilities: [
      'Generated $200K+ in SaaS and product revenue across commercial testing laboratories and industrial QC accounts.',
      'Positioning specialized testing capabilities into higher-value comprehensive LIMS proposals.',
      'Refining Ideal Customer Profiles (ICP) across international markets including India, North America and the UAE.',
      'Structuring transparent software licences and ongoing support agreements.',
    ],
    achievements: [
      'Generated $200K+ revenue while expanding a single manufacturing testing tool into a full-scale multi-industry LIMS platform.',
      'Established disciplined customer communication channels to proactively surface renewal opportunities.',
    ],
    logoText: 'TC+',
  },
  {
    id: 'metafic',
    company: 'Metafic',
    roleTitle: 'Business Development and Account Lead',
    dates: '2022 - 2023',
    shortSummary:
      'Expanded commercial revenue stream by consulting with clients on custom software, mobile applications, web platforms and AI-driven solutions.',
    roleFocus:
      'Account development, consultative discovery, cross-functional scoping and commercial contract execution.',
    customerTypes:
      'B2B SaaS companies, digital product studios, retail platforms and growth-stage enterprises.',
    solutionCategories: [
      'Custom Web and Mobile Applications',
      'AI Integration and Automation Services',
      'Dedicated Engineering Teams',
      'Digital Transformation',
    ],
    accountResponsibilities: [
      'Served as the primary commercial and customer point of contact from first discovery through delivery kick-off.',
      'Maintained consistent relationship health to ensure resource continuity and client satisfaction.',
      'Coordinated technical leads, solution architects and delivery teams to ensure promises matched capabilities.',
    ],
    commercialResponsibilities: [
      'Generated $700K+ in recent technology services revenue through consultative account acquisition and expansion.',
      'Helped develop a repeatable commercial process that scaled the IT services portfolio from early stages to more than 30 client logos.',
      'Structured fixed-scope and dedicated resource agreements tailored to client roadmaps.',
    ],
    achievements: [
      'Built multi-quarter customer relationships resulting in recurring engagements and repeat project extensions.',
      'Maintained 100% adherence to authentic scoping without overpromising technical delivery.',
    ],
    logoText: 'MET',
  },
  {
    id: 'maple-tax',
    company: 'Maple Tax',
    roleTitle: 'Client Solutions Specialist',
    dates: '2021 - 2022',
    shortSummary:
      'Managed commercial engagements and client accounts for financial workflow software, compliance filings and operational advisory services.',
    roleFocus:
      'Account retention, client onboarding, renewal tracking and process guidance.',
    customerTypes:
      'Corporate accounting departments, mid-sized business owners and tax consulting firms.',
    solutionCategories: [
      'Tax Workflow and Filing Platforms',
      'Corporate Compliance Management',
      'Advisory and Bookkeeping Services',
    ],
    accountResponsibilities: [
      'Facilitated smooth transition from signing to active service delivery.',
      'Addressed customer concerns proactively ahead of critical filing and statutory deadlines.',
      'Maintained CRM hygiene and documented customer requirements for future renewal cycles.',
    ],
    commercialResponsibilities: [
      'Managed subscription renewals and service contract extensions.',
      'Identified opportunities to extend annual advisory packages to existing clients.',
    ],
    achievements: [
      'Sustained high client retention rates by ensuring predictable communications during peak regulatory periods.',
    ],
    logoText: 'MPL',
  },
  {
    id: 'ebusiness-international',
    company: 'e-Business International',
    roleTitle: 'Senior Account Executive',
    dates: '2017 - 2021',
    shortSummary:
      'Managed long-term enterprise technology accounts and resource partnerships across specialized platform ecosystems including Guidewire, OpenLink and enterprise ERPs.',
    roleFocus:
      'Enterprise account management, strategic staffing, stakeholder mapping and contract extensions.',
    customerTypes:
      'Tier-1 insurance carriers, commodities and energy trading organizations, enterprise software integrators.',
    solutionCategories: [
      'Enterprise Platform Solutions (Guidewire, OpenLink)',
      'Specialized Technical Resource Augmentation',
      'Core Insurance Systems & Trading Workflows',
    ],
    accountResponsibilities: [
      'Maintained day-to-day communication with delivery heads, programme managers and vendor management teams.',
      'Coordinated technical screening, resource mapping and skill validation for mission-critical enterprise systems.',
      'Ensured SLA compliance and rapid resolution of operational feedback.',
    ],
    commercialResponsibilities: [
      'Managed multi-year resource renewals and commercial rate negotiations.',
      'Protected margin health while accommodating client budget constraints across shifting fiscal years.',
    ],
    achievements: [
      'Successfully sustained multi-year accounts through consistent stakeholder alignment and reliable delivery follow-up.',
    ],
    logoText: 'EBI',
  },
  {
    id: 'nec',
    company: 'NEC',
    roleTitle: 'Enterprise Account Executive',
    dates: '2015 - 2017',
    shortSummary:
      'Managed commercial and partner accounts across enterprise infrastructure, telecommunications, unified communications and IT hardware platforms.',
    roleFocus:
      'Channel partner collaboration, commercial proposals, client relationship development.',
    customerTypes:
      'Large enterprises, educational institutions, hospitality chains and regional government bodies.',
    solutionCategories: [
      'Unified Communications and VoIP Platforms',
      'Enterprise IT Hardware and Servers',
      'Network Infrastructure and Security Systems',
    ],
    accountResponsibilities: [
      'Maintained regular contact with enterprise procurement and IT directors.',
      'Conducted onsite demonstrations and structured product review sessions.',
      'Managed warranty, AMC and annual maintenance contract renewals.',
    ],
    commercialResponsibilities: [
      'Prepared detailed commercial bids, RFP responses and pricing configurations.',
      'Coordinated with distributors and certified system integrators to fulfill client specifications.',
    ],
    achievements: [
      'Consistently met annual renewal and delivery benchmarks across regional enterprise accounts.',
    ],
    logoText: 'NEC',
  },
  {
    id: 'marketone',
    company: 'MarketOne',
    roleTitle: 'Account Specialist',
    dates: '2012 - 2015',
    shortSummary:
      'Executed B2B customer discovery, qualification and account coordination for global enterprise technology vendors.',
    roleFocus:
      'Account qualification, persona mapping, CRM hygiene, enterprise discovery.',
    customerTypes:
      'Global technology vendors, IT services conglomerates and SaaS enterprises.',
    solutionCategories: [
      'B2B Commercial Intelligence',
      'Lead Qualification and Account Mapping',
      'Salesforce and CRM Data Hygiene',
    ],
    accountResponsibilities: [
      'Engaged director and C-level prospects to understand technology roadmaps and evaluation timelines.',
      'Maintained meticulous recordkeeping in Salesforce and marketing automation platforms.',
    ],
    commercialResponsibilities: [
      'Delivered structured discovery notes to field account directors for strategic deal progression.',
      'Identified specific technical triggers that enabled targeted follow-up discussions.',
    ],
    achievements: [
      'Built a disciplined foundation in stakeholder qualification, communication clarity and account tracking.',
    ],
    logoText: 'M1',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1-lims',
    title: 'Expanding a Testing Product into a Broader LIMS Opportunity',
    category: 'SaaS Product & Market Expansion',
    status: '$200K+ Revenue Generated',
    summary:
      'Repositioned a single-purpose manufacturing testing tool into a comprehensive laboratory information management system (LIMS) catering to commercial QC facilities.',
    startingSituation:
      'The initial product was focused solely on narrow manufacturing testing with limited awareness of commercial laboratory workflows.',
    requirement:
      'Labs needed unified sample tracking, calibration records, audit-ready compliance logs and automated test certification.',
    whatIIdentified:
      'Identified common compliance and sample lifecycle bottlenecks across commercial testing labs in India, North America, and the UAE.',
    myRole: 'Commercial lead conducting customer discovery and translating laboratory requirements into product expansion.',
    howIProgressedIt:
      'Mapped customer use cases, structured tiered subscription licensing, and led consultative discovery with lab directors and QC heads.',
    commercialValue:
      'Generated $200K+ in SaaS revenue and broadened product scope into an expandable SaaS platform, establishing recurring subscription accounts and opening multi-facility dialogues.',
  },
  {
    id: 'case-2-leadnics',
    title: 'SaaS GTM and Customer Growth',
    category: 'B2B SaaS Growth',
    status: 'Active Subscriptions',
    summary:
      'Accelerated customer adoption and pipeline progression for an outbound SaaS solution through targeted ICP discovery and onboarding alignment.',
    startingSituation:
      'The platform required clear market positioning and dedicated commercial follow-through to convert trials into committed subscriptions.',
    requirement:
      'B2B commercial teams needed verified lead discovery and automated email cadences without complex technical setup.',
    whatIIdentified:
      'Prospects prioritized deliverability and data accuracy over complex feature lists; simplified the onboarding workflow.',
    myRole: 'Handled market research, customer demos, commercial terms negotiation, and post-onboarding health check-ins.',
    howIProgressedIt:
      'Demonstrated concrete workflows matching customer campaign volume, structured transparent tiers, and proactively resolved early adoption hurdles.',
    commercialValue:
      'Built steady ARR progression, high retention, and team licence expansions as account usage grew.',
  },
  {
    id: 'case-3-metafic',
    title: 'Building a New Technology Services Revenue Stream',
    category: 'Technology Services & Digital Solutions',
    status: '$700K+ Generated',
    summary:
      'Spearheaded commercial expansion from staff augmentation into custom web, mobile, and AI application engineering engagements.',
    startingSituation:
      'Business was primarily reliant on time-and-materials staffing without an established track record in complete digital product delivery.',
    requirement:
      'Startup founders and enterprise CTOs required trusted engineering squads capable of translating product roadmaps into reliable releases.',
    whatIIdentified:
      'Clients preferred consultative milestone-based delivery with dedicated squads rather than buying unmanaged hours.',
    myRole: 'Commercial and account lead managing discovery, solution alignment, proposal structuring, and client governance.',
    howIProgressedIt:
      'Conducted discovery workshops with technical architects, established transparent sprint pricing, and maintained ongoing client communications.',
    commercialValue:
      'Generated $700K+ in recent technology services revenue, scaling the portfolio to 30+ client logos with recurring multi-quarter engagements.',
  },
  {
    id: 'case-4-strategic-saas',
    title: 'Growing a Strategic B2B SaaS Relationship Across Roadmaps',
    category: 'Strategic Account Development',
    status: 'Enterprise Partnership',
    summary:
      'Expanded an initial CEO relationship with an established B2B SaaS organization into multi-workstream engineering and product engagements.',
    startingSituation:
      'Client had an expanding product ecosystem with multiple simultaneous roadmap priorities needing specialized technical depth.',
    requirement:
      'The organization needed dedicated squads for intelligence workflows, communications infrastructure, and CRM concepts.',
    whatIIdentified:
      'Identified opportunity for a multi-quarter strategic partnership rather than one-off tactical contractor assignments.',
    myRole: 'Executive stakeholder engagement, translating evolving priorities into structured milestone statements of work.',
    howIProgressedIt:
      'Maintained consistent dialogue with the CEO and VP of Engineering, structuring adaptable squad models across shifting quarters.',
    commercialValue:
      'Deepened account value across parallel product initiatives while protecting high delivery trust and relationship continuity.',
  },
  {
    id: 'case-5-ai-mobile',
    title: 'AI-Enabled Mobile Product Engagement',
    category: 'AI & Mobile Engineering',
    status: 'Delivered Engagement',
    summary:
      'Converted early-stage customer concept into a structured, delivered engagement combining modern mobile UX with conversational AI models.',
    startingSituation:
      'Customer required a mobile application incorporating community workflows and interactive conversational AI assistance.',
    requirement:
      'Client needed architectural feasibility clarity, phased sprints, and reliable integration of LLM endpoints on mobile devices.',
    whatIIdentified:
      'Identified need to de-risk AI latency and data privacy concerns early through clear phased milestone scoping.',
    myRole: 'Commercial lead across requirement alignment, technical proposal definition, and ongoing account communication.',
    howIProgressedIt:
      'Aligned mobile engineering leads with client stakeholders, establishing a clear MVP scope with transparent delivery milestones.',
    commercialValue:
      'Successfully contracted and launched an AI mobile product, validating a repeatable commercial framework for AI-led customer solutions.',
  },
  {
    id: 'case-6-enterprise-resource',
    title: 'Enterprise Technology Resource Partnership',
    category: 'Enterprise Accounts & Platform Alliances',
    status: 'Multi-Year Retention',
    summary:
      'Managed mission-critical technical competencies for enterprise platforms (Guidewire, OpenLink), protecting multi-year client accounts.',
    startingSituation:
      'Enterprise programmes in insurance and energy required scarce domain experts with immediate operational readiness.',
    requirement:
      'Tier-1 carriers and trading organizations demanded strictly vetted specialists with strict SLA compliance.',
    whatIIdentified:
      'Clients valued contractor stability, rapid turnaround on replacements, and predictable commercial terms across fiscal cycles.',
    myRole: 'Senior account executive handling stakeholder mapping, talent alignment, rate negotiations, and quarterly business reviews.',
    howIProgressedIt:
      'Maintained structured communication with procurement and delivery heads, safeguarding SLAs and resolving feedback quickly.',
    commercialValue:
      'Sustained high account retention across multi-year cycles, protecting contract margins through shifting corporate budget cycles.',
  },
  {
    id: 'case-7-legal-ai',
    title: 'AI Legal Workflow Automation',
    category: 'Specialized Solution Discovery',
    status: 'Consultative Scoping',
    summary:
      'Conducted discovery for corporate legal compliance exploring retrieval-augmented generation (RAG) to query contract archives and regulatory filings.',
    startingSituation:
      'Legal teams faced massive document backlogs, manual search overhead, and strict internal compliance constraints.',
    requirement:
      'Enterprise-grade security, on-premise or private cloud deployment options, and strict access controls over proprietary contracts.',
    whatIIdentified:
      'Enterprise buyers required proof-of-concept validation around data privacy and source hallucination safeguards before full commitment.',
    myRole: 'Led commercial discovery, stakeholder mapping across legal and IT security, and framed phased milestone proposals.',
    howIProgressedIt:
      'Structured a low-friction phase-one feasibility scope with clear acceptance criteria and compliance benchmarks.',
    commercialValue:
      'Positioned high-value AI compliance capabilities, reducing evaluation friction and creating a structured pathway for adoption.',
  },
  {
    id: 'case-8-custom-erp',
    title: 'Custom ERP and Operational Digitisation',
    category: 'Process Modernization & ERP',
    status: 'Phased Deployment',
    summary:
      'Mapped legacy field and office workflows for trading and agriculture operations into a unified mobile-to-cloud operational system.',
    startingSituation:
      'Operations relied heavily on fragmented paperwork and spreadsheets, creating delays and reporting blindspots for leadership.',
    requirement:
      'Simple mobile field data logging for frontline personnel paired with real-time operational reporting for management.',
    whatIIdentified:
      'Frontline adoption was the primary risk factor; workflows needed to be intuitive with offline data sync capabilities.',
    myRole: 'Commercial relationship lead aligning operational stakeholders, software architects, and executive sponsors.',
    howIProgressedIt:
      'Guided non-technical operational leaders through staged rollouts, ensuring rapid user adoption and visible business wins at each step.',
    commercialValue:
      'Eliminated manual administrative overhead, providing real-time visibility into inventory and revenue tracking across field units.',
  },
];

export const TECH_CATEGORIES = [
  { name: 'SaaS Products' },
  { name: 'AI Integration' },
  { name: 'Mobile & Web Apps' },
  { name: 'Custom Software' },
  { name: 'Staff Augmentation' },
];

export const INDUSTRY_EXPOSURE = [
  { name: 'B2B SaaS' },
  { name: 'Manufacturing' },
  { name: 'Retail' },
  { name: 'Healthcare' },
  { name: 'E-Commerce' },
  { name: 'Logistics' },
  { name: 'Lab' },
  { name: 'Banking & Finance' },
  { name: 'Insurance' },
];

export const TOOLS_AND_SYSTEMS = {
  crmList: ['Salesforce', 'HubSpot', 'Zoho CRM'],
  intelligenceList: ['LinkedIn', 'Apollo', 'AI Productivity & Research Tools'],
  productAdoption: {
    title: 'Product Adoption & Customer Health',
    description:
      'Thorough understanding of product adoption cycles, telemetry signals, onboarding milestones, and proactive health metrics. Leveraging Mixpanel to coordinate with product teams and protect customer retention.',
    highlights: [
      'Understanding telemetry signals & user journeys',
      'Mixpanel for feature adoption & user retention',
      'Onboarding milestone completion tracking',
      'Proactive customer health score monitoring',
    ],
  },
  operationalDisciplines: [
    'New Business Acquisition',
    'CRM Hygiene & Pipeline Accounting',
    'Renewal Tracking & Contract Expirations',
    'Customer Feedback Capture',
    'Commercial Follow-ups',
    'Stakeholder Mapping',
    'Account Expansion Identification',
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
    text:
      'Excellent service and very professional. Highly recommended!',
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
