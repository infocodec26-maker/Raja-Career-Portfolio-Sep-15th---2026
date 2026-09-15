import {
  ExperienceItem,
  CaseStudy,
  AdditionalExperienceItem,
  MetricCardItem,
  ValuePillarItem,
  TestimonialItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Rajakumar Sivasubramanian',
  professionalLocation: 'Dubai, UAE',
  email: 'raj.siva0710@gmail.com',
  phone: '+971 52 877 0047',
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
  headline: 'Key Account Management and Customer Success',
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
    label: 'Services Revenue',
    description: 'Recent revenue generated across technology services',
  },
  {
    metric: '5 to 8 Industries',
    label: 'Industry Breadth',
    description: 'Experience learning and working across different industry verticals',
  },
  {
    metric: 'Senior Stakeholders',
    label: 'Executive Alignment',
    description: 'Experience working with founders, C-level executives, vice presidents, directors, champions and delivery teams',
  },
];

export const VALUE_PILLARS: ValuePillarItem[] = [
  {
    title: 'Customer Relationships',
    description:
      'I normally build strong working relationships with customers by staying close to their requirements, responding clearly and keeping commercial and delivery conversations connected.',
  },
  {
    title: 'Product Adoption',
    description:
      'I focus on helping customers understand how the product or service fits their workflow and where they can get more value from it.',
  },
  {
    title: 'Renewals and Retention',
    description:
      'I understand the commercial process around AMC, subscription and licence renewals and the importance of staying ahead of renewal dates and customer concerns.',
  },
  {
    title: 'Account Expansion',
    description:
      'I look for adjacent customer requirements that can create genuine upsell or cross-sell opportunities rather than pushing unrelated products.',
  },
  {
    title: 'Stakeholder Management',
    description:
      'I am comfortable working with founders, executives, vice presidents, directors, champions, technical teams and operational users.',
  },
  {
    title: 'Market and Product Learning',
    description:
      'One of my strengths is learning a product or service quickly, understanding its market, identifying the ICP and translating product capabilities into customer use cases.',
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
      'Compliance and Audit Trail Software',
      'Workflow Automation',
    ],
    accountResponsibilities: [
      'Direct customer engagement through initial onboarding, workflow alignment and ongoing account check-ins.',
      'Translating laboratory compliance and calibration requirements into clear product enhancement dialogues.',
      'Managing software subscription renewals, annual maintenance discussions and licence upgrades.',
    ],
    commercialResponsibilities: [
      'Positioning specialized testing capabilities into higher-value comprehensive LIMS proposals.',
      'Refining Ideal Customer Profiles (ICP) across international markets including India, North America and the UAE.',
      'Structuring transparent software licences and ongoing support agreements.',
    ],
    achievements: [
      'Identified and drove expansion of a single manufacturing testing tool into a full-scale multi-industry LIMS platform.',
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
      'Generated $900K+ in recent technology services revenue through consultative account acquisition and expansion.',
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
      'Core Insurance Systems and Commodity Trading Workflows',
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
    category: 'SaaS Product and Market Development',
    summary:
      'A manufacturing testing product showed potential beyond its original use case. Through market research, customer conversations and my understanding of laboratory workflows, I identified an opportunity to position the platform as a broader LIMS solution.',
    startingSituation:
      'The product had initially been developed around a specific manufacturing testing requirement with limited awareness of laboratory software needs.',
    requirement:
      'Commercial testing laboratories and industrial QC units required unified sample tracking, calibration records, audit-ready compliance logs and automated test certificates.',
    whatIIdentified:
      'I researched the wider laboratory market and saw that similar workflow, traceability, compliance, calibration and reporting requirements existed across commercial testing laboratories and dedicated testing labs within manufacturing companies.',
    myRole:
      'I acted as the commercial lead conducting customer discovery, mapping operational bottlenecks, gathering feedback and translating requirements for product development.',
    stakeholders:
      'Lab Directors, Quality Assurance Managers, Plant Engineers and Executive Leadership.',
    solutionAlignment:
      'Broadened product capabilities to support sample management, ASTM/ISO compliance logging, equipment calibration schedules and automated result reporting.',
    howIProgressedIt:
      'I contributed market research, ICP thinking, industry use cases, customer feedback and commercial input that helped broaden the product positioning. Commercial focus expanded across India, North America and the UAE.',
    commercialValue:
      'Transformed a single-purpose testing tool into an expandable, high-value LIMS software platform. This opened conversations with multi-facility industrial testing labs and created a strong foundation for long-term SaaS subscription renewals.',
    whyThisMatters:
      'This experience helped me understand how customer conversations can influence product positioning, market selection and future account expansion.',
  },
  {
    id: 'case-2-leadnics',
    title: 'SaaS GTM and Customer Growth',
    category: 'B2B SaaS',
    summary:
      'Rapidly learned the Leadnics SaaS product, mapped targeted ICP segments, drove customer conversations and supported client adoption to build recurring account value.',
    startingSituation:
      'The product required clear market positioning, structured discovery conversations and dedicated commercial progression to convert interest into committed subscriptions.',
    requirement:
      'Mid-market B2B organizations needed verifiable lead discovery, automated email outreach and reliable workflow integration without complex onboarding friction.',
    whatIIdentified:
      'Customers frequently struggled with data accuracy and deliverability. Highlighting verified data checks and simple workflow setup made commercial progression straightforward.',
    myRole:
      'Handled product learning, market research, initial demos, commercial negotiation, onboarding assistance and post-implementation account reviews.',
    stakeholders:
      'Founders, Commercial Heads, Sales Operations Leads and Demand Generation Teams.',
    solutionAlignment:
      'Demonstrated concrete workflows matching customer campaign volumes and structured tiered subscription plans.',
    howIProgressedIt:
      'Maintained consistent follow-ups, clarified contract terms, assisted users through initial platform adoption and monitored account health indicators.',
    commercialValue:
      'Established steady account progression, predictable subscription renewals and identified opportunities for team licence upgrades as customer usage expanded.',
  },
  {
    id: 'case-3-metafic',
    title: 'Building a New Technology Services Revenue Stream',
    category: 'Technology Services and Commercial Growth',
    summary:
      'Developed a consultative commercial approach that broadened an IT services business from staff augmentation into custom web, mobile and AI solution delivery.',
    startingSituation:
      'The business was primarily dependent on staff augmentation and had limited track record selling mobile applications, web applications, custom AI solutions or broader software-development services.',
    requirement:
      'Prospective clients required end-to-end technology partners who could understand product visions, evaluate architectural feasibility and execute with high delivery standards.',
    whatIIdentified:
      'Clients were hesitant to purchase generic hours, but actively welcomed consultative partners who helped refine requirements into clear milestones, predictable scopes and dedicated squads.',
    myRole:
      'I researched suitable markets, refined the value proposition, used direct outreach, existing relationships and partnerships and worked with customers using a consultative approach.',
    stakeholders:
      'Startup Founders, Chief Technology Officers, Product Directors and Managing Partners.',
    solutionAlignment:
      'Structured customized development agreements covering design sprints, full-stack development, AI integration and ongoing application maintenance.',
    howIProgressedIt:
      'Worked closely with engineering leads to ensure transparent technical proposals, organized discovery workshops and maintained active communication throughout delivery.',
    commercialValue:
      '$900K+ recent revenue generated across technology services, helping the business scale from zero IT-services clients to more than 30 logos and establishing recurring client partnerships.',
  },
  {
    id: 'case-4-strategic-saas',
    title: 'Growing a Strategic B2B SaaS Relationship Across Multiple Requirements',
    category: 'Strategic Account Development',
    status: 'Advanced Commercial Pursuit',
    summary:
      'An initial relationship with the CEO of an established B2B SaaS company developed into discussions across several product and engineering requirements.',
    startingSituation:
      'The client was an established software organization with an expanding product ecosystem and multiple parallel engineering priorities.',
    requirement:
      'The organization needed specialized product engineering capabilities across customer-facing modules, intelligence workflows and communications infrastructure.',
    whatIIdentified:
      'Rather than treating each project as a detached transaction, there was an opportunity to establish an integrated partnership that supported evolving roadmap requirements across multiple quarters.',
    myRole:
      'I worked directly with senior stakeholders, understood evolving product priorities, coordinated technical discovery and helped structure different engagement options.',
    stakeholders:
      'Chief Executive Officer, VP of Engineering, Product Leads and Architecture Heads.',
    solutionAlignment:
      'The relationship expanded across SaaS platform support, sales intelligence, lead discovery, unified communication workflows, CRM concepts and adjacent product ideas.',
    howIProgressedIt:
      'I translated evolving requirements into structured scopes and commercial proposals while maintaining continuity across the account.',
    commercialValue:
      'The relationship progressed to an advanced commercial stage and remained a strong professional relationship beyond my tenure, proving how consistent relationship care builds account depth.',
  },
  {
    id: 'case-5-ai-mobile',
    title: 'AI-Enabled Mobile Product Engagement',
    category: 'AI and Mobile Application',
    status: 'Closed Engagement',
    summary:
      'Converted early-stage customer interest into a structured, delivered engagement combining modern mobile UX with AI conversational capabilities.',
    startingSituation:
      'The customer needed a mobile product combining community and content workflows with AI-enabled conversational functionality.',
    requirement:
      'The client had ambitious conceptual goals but needed a clear breakdown of technical feasibility, user experience journeys, backend models and project milestones.',
    whatIIdentified:
      'The customer required confidence in how conversational AI models would integrate with mobile push notifications, profile systems and secure data storage.',
    myRole:
      'I acted as the commercial and customer point of contact across requirements, solution alignment, proposal development and commercial progression.',
    stakeholders:
      'Business Owner, Product Sponsor, Lead Mobile Developer and AI Technical Lead.',
    solutionAlignment:
      'The engagement combined mobile application development, AI integration, backend services and customer-facing workflows.',
    howIProgressedIt:
      'Facilitated scoping sessions, aligned pricing with development milestones and provided regular commercial clarity to executive sponsors.',
    commercialValue:
      'The important outcome was converting an early product requirement into a structured engagement with clear scope, responsibilities and delivery expectations.',
  },
  {
    id: 'case-6-enterprise-resource',
    title: 'Enterprise Technology Resource Partnership',
    category: 'Enterprise Account and Technology Services',
    summary:
      'Coordinated specialized technical skills for complex enterprise platforms, maintaining multi-year engagement continuity and reliable account communications.',
    startingSituation:
      'Enterprise technology programmes required specialised engineering resources in niche technology areas where experienced talent was difficult to source.',
    requirement:
      'Enterprise systems (such as Guidewire insurance suites and OpenLink energy platforms) demanded strictly vetted domain specialists capable of immediate operational impact.',
    whatIIdentified:
      'Clients placed the highest priority on delivery stability, fast replacement turnaround if needed and commercial flexibility across shifting corporate quarters.',
    myRole:
      'I understood resource requirements, coordinated technical screening and resource mapping, supported stakeholder communication and managed the commercial progression.',
    stakeholders:
      'Enterprise Programme Directors, Resource Managers, Procurement Heads and Delivery Leads.',
    solutionAlignment:
      'Structured flexible resource agreements with clear SLAs, periodic performance reviews and pre-agreed rate cards.',
    howIProgressedIt:
      'These engagements required continuity after initial placement, ongoing customer communication, resource planning and maintaining the commercial relationship.',
    commercialValue:
      'This experience strengthened my understanding of longer-term account management, specialist customer requirements and recurring service relationships.',
  },
];

export const ADDITIONAL_EXPERIENCES: AdditionalExperienceItem[] = [
  {
    id: 'additional-legal-ai',
    title: 'AI Legal Workflow Automation',
    category: 'Specialized Solution Discovery',
    focusAreas: [
      'Complex document workflows',
      'AI and RAG solution discovery',
      'Security considerations',
      'Requirements definition',
      'Solution coordination',
      'Commercial progression',
    ],
    overview:
      'Conducted discovery for legal and corporate compliance environments exploring retrieval-augmented generation (RAG) to query internal contract archives and regulatory documentation.',
    commercialContext:
      'Addressed enterprise privacy concerns, on-premise vs private cloud options and structured phase-one feasibility scopes to reduce adoption friction.',
  },
  {
    id: 'additional-erp-agritech',
    title: 'Custom ERP and Operational Digitisation',
    category: 'Process Digitisation and Modernization',
    focusAreas: [
      'Manual workflows to digital transition',
      'Multi-role business processes',
      'Mobile and web requirements',
      'Operational discovery',
      'Solution planning',
      'Stakeholder management',
    ],
    overview:
      'Mapped legacy field and office processes for agriculture and trading operations to design unified mobile-to-cloud operational tracking.',
    commercialContext:
      'Guided non-technical operational heads through phased rollouts, ensuring frontline workers could easily adopt mobile logging while managers received accurate reporting.',
  },
];

export const TECH_CATEGORIES = [
  { name: 'SaaS Products', desc: 'B2B subscription platforms, self-serve and high-touch software' },
  { name: 'AI Integration', desc: 'Practical conversational workflows, RAG systems and process intelligence' },
  { name: 'Mobile Applications', desc: 'Native and cross-platform iOS and Android business applications' },
  { name: 'Web Applications', desc: 'Modern responsive cloud portals, dashboards and customer workspaces' },
  { name: 'Custom Software', desc: 'Tailored business logic, database integrations and API microservices' },
  { name: 'ERP and Business Applications', desc: 'Integrated operations, inventory, billing and workflow systems' },
  { name: 'Enterprise Platforms', desc: 'Specialized enterprise ecosystems (Guidewire, OpenLink, CRM engines)' },
  { name: 'Technology Services', desc: 'Fixed-deliverable engineering, dedicated squads and managed support' },
  { name: 'Staff Augmentation', desc: 'Niche domain technical resources, skill mapping and contractor continuity' },
  { name: 'CRM and Sales Technology', desc: 'Pipelines, account intelligence, automation hygiene and reporting' },
];

export const INDUSTRY_EXPOSURE = [
  { name: 'B2B SaaS', context: 'Sales intelligence, outreach, and workflow automation platforms' },
  { name: 'Testing and Laboratory Technology', context: 'Quality control, calibration logs, and LIMS ecosystems' },
  { name: 'Manufacturing', context: 'Materials testing, quality compliance, and production verification' },
  { name: 'Food and Quality Operations', context: 'Safety audits, lab batch verification, and traceability' },
  { name: 'Legal Technology', context: 'Document search, regulatory compliance, and retrieval workflows' },
  { name: 'Insurance Technology', context: 'Core claims, policy platforms, and specialist resource delivery' },
  { name: 'Energy and Commodity Trading', context: 'Trading lifecycle workflows, platform support, and technical staffing' },
  { name: 'Retail and E-commerce', context: 'Customer portals, catalogue management, and mobile commerce' },
  { name: 'Agriculture and ERP', context: 'Operational field logging, procurement tracking, and inventory' },
  { name: 'Professional Services', context: 'Consulting workflows, billing systems, and client delivery management' },
];

export const TOOLS_AND_SYSTEMS = {
  crm: [
    { name: 'Salesforce', description: 'Pipeline management, account history tracking, and enterprise CRM hygiene' },
    { name: 'HubSpot', description: 'Inbound lifecycle stages, deal tracking, contact segmentation, and email cadences' },
    { name: 'Zoho CRM', description: 'Operational pipeline coordination, task scheduling, and contact databases' },
  ],
  intelligence: [
    { name: 'LinkedIn Sales Navigator', description: 'Senior stakeholder mapping, account intent discovery, and relationship research' },
    { name: 'Apollo', description: 'Ideal Customer Profile enrichment, direct verification, and multi-touch outbound cadences' },
  ],
  productivity: {
    title: 'AI Research, Productivity and Workflow Tools',
    description:
      'Leveraging generative AI models, synthesis utilities, document analysis engines, and structured workflows for rapid market research, meeting synthesis, and communication clarity.',
  },
  adoption: {
    title: 'Product Adoption and Customer Health Concepts',
    description:
      'Thorough understanding of product adoption cycles, telemetry signals, onboarding milestones, and proactive health metrics. Familiar with the operational purpose and workflows of platforms such as Pendo to coordinate with product teams and protect customer retention.',
    note: 'Familiar with adoption principles and telemetry workflows without claiming hands-on production administration.',
  },
  capabilities: [
    'Account planning',
    'CRM hygiene',
    'Renewal tracking',
    'Customer feedback capture',
    'Commercial follow-up',
    'Stakeholder mapping',
    'Account expansion identification',
  ],
};

export const VERIFIED_FEEDBACK: TestimonialItem[] = [
  {
    id: 'feedback-1',
    name: 'Senior Director, Enterprise Technology Solutions',
    title: 'Former Client and Partner',
    companyOrContext: 'Enterprise IT Integrator',
    relationship: 'Commercial Partner',
    text:
      'Rajakumar has an exceptional ability to grasp customer priorities very early in the conversation. When dealing with technical stakeholders, he never lets expectations run ahead of execution. His follow-through on commercial documentation and renewal conversations made him a reliable partner across multiple engagements.',
    verifiedYear: '2023',
  },
  {
    id: 'feedback-2',
    name: 'Head of Engineering and Product Delivery',
    title: 'Technology Delivery Lead',
    companyOrContext: 'Digital Solutions Practice',
    relationship: 'Internal Cross-Functional Colleague',
    text:
      'Working alongside Rajakumar on complex client requirements was always straightforward. He took time to understand the engineering reality before quoting timelines to customers. His transparent relationship style built lasting trust with client executives and saved our delivery teams countless hours of friction.',
    verifiedYear: '2023',
  },
];
