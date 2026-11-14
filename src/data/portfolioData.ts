import {
  AboutPillar,
  CaseStudyDetail,
  CaseStudyId,
  CertificateItem,
  ClientSearchMetric,
  FaqItem,
  ImpactStat,
  RankedClientWebsite,
  ServiceOffering,
  ToolStackItem,
  WebsiteBuildProject,
} from '../types/portfolio';

export const CONTACT_INFO = {
  email: 'admin@francisclyde.com',
  whatsappDisplay: '+639926761848',
  whatsappHref: 'https://wa.me/639926761848',
  availability:
    'Based in the Philippines, partnering with clients across North America, Europe & Asia-Pacific',
} as const;

export const SERVICE_OPTIONS = [
  'SEO, AEO, GEO & AIO Strategy',
  'Website Design & Development',
  'Full Package: Web Development + Search & AI Visibility',
  'Technical Site Audit & Ranking Recovery',
  'Custom',
] as const;

export const HERO_IMPACT_STATS: ImpactStat[] = [
  {
    value: '+265.76%',
    label: 'Organic search clicks & up to +2,188.9% active user growth in client campaigns',
  },
  {
    value: '40 hrs / week',
    label: 'Dedicated weekly bandwidth for client SEO, AIO & web builds',
  },
  {
    value: '40+ Markets',
    label: 'Local service areas ranked through clean SEO & GEO structure',
  },
];

export const ABOUT_CONTENT = {
  eyebrow: 'About Me',
  title: 'Search Visibility & Web Engineering Built as One Strategy.',
  paragraphs: [
    'Working out of the Philippines with clients worldwide, I bridge the gap between technical search strategy and practical web development—so businesses never have to coordinate separate developers and SEO consultants who work against each other.',
    'From structuring service pages and entity schema for Google, ChatGPT, Gemini, and Perplexity to building responsive websites around real client requirements, my focus is simple: help your brand rank for more relevant terms, earn AI citations, and turn organic visits into lasting customer inquiries.',
  ],
};

export const ABOUT_PILLARS: AboutPillar[] = [
  {
    title: 'Built for Search & AI From Day One',
    description:
      'Clean semantic markup, structured schema, and focused content architecture so search crawlers index every page accurately and prioritize your core services.',
  },
  {
    title: 'Generative Engine Optimization (GEO)',
    description:
      'Structuring brand entities, authoritative signals, and citation-ready content so generative AI engines like ChatGPT, Gemini, and Perplexity understand and recommend your business.',
  },
  {
    title: 'Content Creation for Answer Engine Optimization (AEO)',
    description:
      'Crafting clear, structured, and intent-driven content—from direct FAQ blocks to authoritative service pages—engineered to capture featured snippets, voice search, and AI-powered answers.',
  },
];

export const CORE_SERVICES: ServiceOffering[] = [
  {
    title: 'SEO, AEO, GEO & AIO',
    description:
      'I help businesses rank higher in Google and across major AI search engines like ChatGPT, Gemini, and Perplexity—expanding your reach across more relevant keywords, search terms, and direct AI recommendations.',
    outcomes: [
      'Rank for more relevant keywords and high-intent search terms',
      'Earn stronger citations and mentions in AI search engines',
      'Structured data & AIO entity clarity across core service pages',
    ],
  },
  {
    title: 'Web Development & Architecture',
    description:
      'I design and build high-converting websites, service hubs, and landing pages with clean code, clear layout hierarchy, and technical fixes—engineered so visitors take action and search crawlers index every page effortlessly.',
    outcomes: [
      'Custom responsive websites built for clarity and mobile usability',
      'Technical fixes, clean architecture, internal linking & schema',
      'Conversion-focused layouts that turn organic traffic into leads',
    ],
  },
];

export const WR_BUILDERS_METRICS: ClientSearchMetric[] = [
  {
    label: 'Total Clicks',
    delta: '+265.76%',
    barPercent: 94,
    tone: 'emerald',
  },
  {
    label: 'Total Impressions',
    delta: '+239.76%',
    barPercent: 86,
    tone: 'navy',
  },
  {
    label: 'Average CTR',
    delta: '+7.65%',
    barPercent: 52,
    tone: 'emerald',
  },
];

export const THREE_STONES_METRICS: ClientSearchMetric[] = [
  {
    label: 'Active Users',
    delta: '+2,188.9%',
    barPercent: 96,
    tone: 'emerald',
  },
  {
    label: 'Event Count',
    delta: '+668.5%',
    barPercent: 88,
    tone: 'navy',
  },
  {
    label: 'Total Views',
    delta: '+424.5%',
    barPercent: 82,
    tone: 'emerald',
  },
];

export const RANKED_CLIENT_WEBSITES: RankedClientWebsite[] = [
  {
    id: 'wr-builders',
    name: 'WR Builders Inc.',
    url: 'https://www.wrbuildersinc.com/',
    logoSrc: '/assets/aistudio/WRB-logo-transparent_resize_22ae11b4.png',
    logoAlt: 'WR Builders Inc. logo',
    summary:
      'Strengthened technical foundations, localized construction and remodeling service pages, and structured schema so homeowners find and trust WR Builders Inc. across Google search, local maps, and AI recommendations.',
    metrics: WR_BUILDERS_METRICS,
  },
  {
    id: 'three-stones',
    name: 'Three Stones Kitchen Studio',
    url: 'https://threestoneskitchenstudio.com/',
    logoSrc: '/assets/aistudio/Asset-1_4x-8-scaled_40f0e075.webp',
    logoAlt: 'Three Stones Kitchen Studio logo',
    summary:
      'Refined kitchen design service architecture, high-intent keyword targeting, and AEO/AIO content clarity—helping Three Stones Kitchen Studio capture more relevant search terms and stand out in AI-assisted recommendations.',
    metrics: THREE_STONES_METRICS,
  },
];

export const TOOLS_STACK: ToolStackItem[] = [
  {
    id: 'semrush',
    name: 'SEMrush',
    description: 'Competitive keyword gap analysis, rank tracking, and market share audits.',
  },
  {
    id: 'ahrefs',
    name: 'Ahrefs',
    description: 'Backlink authority profiling, content explorer, and referring domain growth.',
  },
  {
    id: 'screaming-frog',
    name: 'Screaming Frog',
    description: 'Deep technical site crawls for broken links, metadata, redirects, and schema.',
  },
  {
    id: 'local-dominator',
    name: 'Local Dominator',
    description: 'Geo-grid local map rank tracking and neighborhood visibility heatmaps.',
  },
  {
    id: 'gsc',
    name: 'Google Search Console',
    description: 'Indexing diagnostics, search query impressions, clicks, and technical health.',
  },
  {
    id: 'ga4',
    name: 'Google Analytics',
    description: 'Organic traffic attribution, user journey tracking, and conversion measurement.',
  },
  {
    id: 'google-ads',
    name: 'Google Ads',
    description: 'Commercial keyword demand research, search volume, and intent validation.',
  },
  {
    id: 'clarity',
    name: 'Microsoft Clarity',
    description: 'Click heatmaps, scroll depth insights, and UX session recordings.',
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    description: 'CRM pipeline tracking, lead capture integration, and marketing attribution.',
  },
];

export const CERTIFICATES_LIST: CertificateItem[] = [
  {
    issuer: 'Semrush Academy',
    title: 'Semrush Crash Course',
    description:
      'Completed the Semrush SEO Crash Course with Brian Dean covering keyword research, competitive gap analysis, and search ranking workflows.',
    category: 'SEO Strategy',
    status: 'Expires Sep 2027',
    imageSrc: '/assets/aistudio/francis-clyde-laguda-berog-semrush_cert_3a6a351b.png',
    imageAlt: 'Semrush Academy Certificate for Semrush SEO Crash Course issued to Francis Clyde Laguda Berog',
  },
  {
    issuer: 'HubSpot Academy',
    title: 'AEO Fundamentals',
    description:
      'Certified in Answer Engine Optimization—structuring content and brand entities to earn visibility and citations across AI answer engines.',
    category: 'Answer Engine Optimization',
    status: 'Valid Sep 2026 – Oct 2028',
    imageSrc: '/assets/aistudio/a267bd7f02384813b9d15e9f86bb295f_168da120.png',
    imageAlt: 'HubSpot Academy AEO Fundamentals Certificate issued to Francis Clyde Berog',
  },
  {
    issuer: 'SuccessWise.ai',
    title: 'Prompt Engineering Mastery',
    description:
      'Certificate of Completion in AI & Technology, validating structured prompt engineering and generative AI workflows applied across AEO and GEO.',
    category: 'AI & Technology',
    status: 'Awarded Nov 3, 2026',
    imageSrc: '/assets/aistudio/Screenshot_2026-11-15_031726_939158dd.png',
    imageAlt:
      'SuccessWise.ai Certificate of Completion for Prompt Engineering Mastery issued to Francis Clyde Laguda Berog',
  },
];

export const WEBSITES_CREATED: WebsiteBuildProject[] = [
  {
    id: 'new-life-church',
    name: 'New Life Fundamental Baptist Church - Leyte, Leyte',
    url: 'https://lms.francisclyde.com/',
    summary:
      "Created according to the church's requirements so members and students can easily access lessons, learning materials, and ministry updates in one welcoming place.",
    previewImageSrc: '/assets/aistudio/Screenshot_2026-11-15_032008_c474e9e5.png',
    previewImageAlt: 'New Life Fundamental Baptist Church - Leyte, Leyte website preview',
  },
];

export const KEYWORD_TOOL_DATA = {
  id: 'keyword-research-tool' as CaseStudyId,
  name: 'Keyword Research Tool',
  url: 'https://metri-sync.francisclyde.com/',
  summary:
    'Built to uncover relevant search terms, organize keywords by customer intent, and speed up content planning for both traditional search rankings and AI answer visibility.',
  previewImageSrc: '/assets/aistudio/Screenshot_2026-11-15_031824_4ee3b07e.png',
  previewImageAlt: 'Keyword Research Tool interface preview',
};

export const CONTACT_FAQS: FaqItem[] = [
  {
    question: 'Can you improve an existing website without rebuilding it from scratch?',
    answer:
      'Yes. If your current domain already has strong authority or a working platform, I can implement technical fixes, refine page architecture, add structured schema, and optimize content for search and AI visibility directly on your existing site.',
  },
  {
    question: 'How do you handle time zones for international clients?',
    answer:
      'I work 40 hrs / week out of the Philippines with dedicated overlapping hours for North America, Europe, and Asia-Pacific—keeping project updates, audits, and launch reviews responsive.',
  },
  {
    question: 'How long does it take to see search and AI visibility gains?',
    answer:
      'Technical fixes and structured schema take effect as soon as pages are recrawled, while keyword growth and consistent AI engine citations typically compound across the first 3 to 6 months.',
  },
  {
    question: 'Do you offer both one-time builds and ongoing monthly SEO?',
    answer:
      'Yes. You can engage me for a focused website build or technical audit, an ongoing monthly SEO, AEO, GEO & AIO growth program, or a combined package—including custom scopes tailored to your team.',
  },
];

export const CASE_STUDIES_BY_ID: Record<CaseStudyId, CaseStudyDetail> = {
  'wr-builders': {
    id: 'wr-builders',
    sectionLabel: 'Client Case Study',
    name: 'WR Builders Inc.',
    url: 'https://www.wrbuildersinc.com/',
    logoSrc: '/assets/aistudio/WRB-logo-transparent_resize_22ae11b4.png',
    logoAlt: 'WR Builders Inc. logo',
    headline: 'Local SEO, AEO, GEO & Technical Search Architecture',
    challenge:
      'WR Builders Inc. needed stronger organic visibility for high-intent residential construction and remodeling terms across competitive local service areas.',
    strategy:
      'I improved technical crawl structure, organized core service and project pages around clear search intent, and implemented structured LocalBusiness and FAQ schema for search and AI engine comprehension.',
    deliverables: [
      'Traditional SEO: Technical site crawl diagnostics, metadata cleanup, internal linking, and high-intent commercial keyword targeting',
      'Answer Engine Optimization (AEO): Structured FAQ schema, conversational query targeting, and answer-ready content blocks for direct AI & featured snippet visibility',
      'Generative Engine Optimization (GEO): Brand entity structuring, LocalBusiness schema, and citation-ready authority signals for ChatGPT, Gemini, and Perplexity',
      'Local & Regional Search Architecture: Dedicated ADU, remodeling, and service-area landing pages with ongoing keyword and Share of Voice tracking',
    ],
    evidenceItems: [
      {
        title: 'Google Search Console Performance',
        subtitle: 'Sep 1, 2025 – Sep 13, 2026 · Domain Property: wrbuildersinc.com',
        imageSrc: '/assets/aistudio/google_search_performance_8398a96c.png',
        imageAlt:
          'Google Search Console Performance report for wrbuildersinc.com showing 4.3K clicks (+265.76%) and 1.8M impressions (+239.76%)',
        analysis:
          'Over the 12-month period, organic search visibility scaled to 1.8M total impressions (+239.76%) and 4.3K total clicks (+265.76%), while average ranking position improved by 21.52 spots to 13.7. Beyond strong branded demand ("wr builders inc" +71.02% clicks, "wr builders" +230.51% clicks), non-branded commercial ADU queries surged—with "prefab adu cost" climbing to position 7.2 (+425% clicks, +6,068.18% impressions) and "affordable adu" reaching position 8 (+466.67% clicks).',
        highlights: [
          '4.3K Total Clicks (+265.76%)',
          '1.8M Total Impressions (+239.76%)',
          'Avg. Position 13.7 (improved by 21.52 positions)',
          'Top-10 rankings for high-intent "prefab adu cost" & "affordable adu" terms',
        ],
      },
      {
        title: 'Organic Keyword Expansion & SERP Feature Distribution',
        subtitle: 'Multi-Tier Keyword Footprint & AI Overviews Presence',
        imageSrc: '/assets/aistudio/keywords_4a7070e5.png',
        imageAlt:
          'Keyword growth chart and SERP positions distribution showing organic rankings, AI Overviews, and top cited sources',
        analysis:
          'From a minimal initial footprint, WR Builders Inc. expanded into a sustained base of nearly 1,000 ranked organic keywords across Top 3, 4–10, 11–20, and 21–50 SERP tiers. While standard organic placements account for 96.5% of visibility, structured content and FAQ schema enabled the domain to capture 1.5% visibility in Google AI Overviews and 2% in additional SERP features—competing directly alongside major national home improvement directories such as Angi, Houzz, and HomeAdvisor.',
        highlights: [
          'Sustained growth from near-zero baseline to ~1,000 ranked keywords',
          '96.5% Organic distribution paired with 1.5% AI Overviews & 2% SERP features',
          'Consistent Top 3 and Page 1 (Positions 4–10) keyword retention across 2025–2026',
        ],
      },
      {
        title: 'Google Analytics Traffic & User Engagement',
        subtitle: 'Sep 1, 2025 – Sep 13, 2026 · GA4 Property Performance',
        imageSrc: '/assets/aistudio/traffic_analytics_75bd7e71.png',
        imageAlt:
          'Google Analytics traffic and engagement report for WR Builders Inc. showing 92.7K users, 118K sessions, and 60.52% engagement rate',
        analysis:
          'Higher search rankings translated into stronger on-site engagement quality rather than passive traffic alone. Total users reached 92.7K (+13.96%) across 118K sessions (+30.44%), while engaged sessions more than doubled to 71.1K (+114.37%). Engaged sessions per user rose 88.11% to 0.77 and the overall engagement rate climbed to 60.52% (+64.35%), confirming that visitors landing on localized service and ADU pages found relevant project information and stayed to explore.',
        highlights: [
          '92.7K Users (+13.96%) & 118K Total Sessions (+30.44%)',
          '71.1K Engaged Sessions (+114.37%)',
          '60.52% Overall Engagement Rate (+64.35%)',
          '0.77 Engaged Sessions per User (+88.11%)',
        ],
      },
    ],
    comparisonItems: [
      {
        title: 'Competitor Landscape: Share of Voice & Visibility Comparison',
        subtitle: 'AI & Search Competitor Benchmarking · Snapshot 1 vs. Snapshot 2',
        summaryDelta: '16% (#3) → 34% (#1 Share of Voice)',
        before: {
          stageLabel: 'Snapshot 1 · Baseline',
          timeframe: 'Sep 22 – Sep 24, 2026 (Daily)',
          keyMetric: '16% Share of Voice (#3 Rank)',
          imageSrc: '/assets/aistudio/share_of_voice_1_9eaa7f52.png',
          imageAlt:
            'Share of Voice baseline report showing WR Builders Inc at 16% (#3) behind Bay State Remodeling (34%) and S+H Construction (22%)',
        },
        after: {
          stageLabel: 'Snapshot 2 · After Optimization',
          timeframe: 'Sep 22 – Sep 29, 2026 (Weekly)',
          keyMetric: '34% Share of Voice (#1 Rank)',
          imageSrc: '/assets/aistudio/share_of_voice_2_17e3af05.png',
          imageAlt:
            'Share of Voice comparison report showing WR Builders Inc climbing to #1 at 34% ahead of Bay State Remodeling (27%) and S+H Construction (19%)',
        },
        analysis:
          'In the initial baseline snapshot (Sep 22–24), WR Builders Inc. held 3rd place with a 16% Share of Voice—trailing regional competitors Bay State Remodeling (34%) and S+H Construction (22%) while daily visibility hovered between 0% and 10%. Following targeted entity structuring and AEO/GEO service page optimization, WR Builders Inc. more than doubled its Share of Voice to 34% (+18 percentage points) in the weekly rollout (Sep 22–29), overtaking both Bay State Remodeling (27%) and S+H Construction (19%) to claim the #1 market position as visibility surged past 21.5%.',
        highlights: [
          'Share of Voice more than doubled from 16% (#3) to 34% (#1 Market Leader)',
          'Overtook Bay State Remodeling (27%) and S+H Construction (19%)',
          'Competitor visibility trajectory surged from ~6.7% to over 21.5%',
          'Established a clear lead over Howell Custom Building Group (7%) & Woodland Builders (5%)',
        ],
      },
      {
        title: 'AI Search Brand Sentiment Analysis Comparison',
        subtitle: 'Multi-Engine Sentiment Progression · ChatGPT, Gemini & Perplexity',
        summaryDelta: '20% → 30.79% Sentiment Score (+53.95%)',
        before: {
          stageLabel: 'Snapshot 1 · Baseline',
          timeframe: 'Sep 22 – Sep 24, 2026 (Daily)',
          keyMetric: '20% Overall Sentiment Score',
          imageSrc: '/assets/aistudio/sentiment_1_20468937.png',
          imageAlt:
            'Initial AI Sentiment Analysis report showing a 20% overall sentiment score across ChatGPT and Gemini',
        },
        after: {
          stageLabel: 'Snapshot 2 · After Optimization',
          timeframe: 'Sep 22 – Oct 13, 2026 (Weekly)',
          keyMetric: '30.79% Overall Sentiment Score',
          imageSrc: '/assets/aistudio/sentiment_2_175a4945.png',
          imageAlt:
            'Updated AI Sentiment Analysis report showing overall sentiment rising to 30.79% across ChatGPT, Gemini, and Perplexity',
        },
        analysis:
          'During the initial baseline (Sep 22–24), WR Builders Inc. recorded a 20% overall sentiment score with flat 0% sentiment on ChatGPT, a single 50% data point on Gemini, and no active sentiment footprint on Perplexity. Over the subsequent weekly tracking window (Sep 22 – Oct 13), overall brand sentiment improved to 30.79% (+10.79 percentage points, a +53.95% relative lift). Gemini sentiment climbed from 40% to nearly 70%, Perplexity entered and surged to 50% positive sentiment, and ChatGPT reached over 31% during peak weekly citations—confirming stronger trust signals and authoritative brand framing across all three major AI answer engines.',
        highlights: [
          'Overall AI Sentiment Score rose from 20% to 30.79% (+10.79 pts / +53.95% lift)',
          'Gemini positive brand sentiment climbed from 40% to ~70%',
          'Perplexity citation sentiment grew from unindexed to 50%',
          'ChatGPT sentiment expanded from 0% baseline up to 31%+ during active weeks',
        ],
      },
    ],
  },
  'three-stones': {
    id: 'three-stones',
    sectionLabel: 'Client Case Study',
    name: 'Three Stones Kitchen Studio',
    url: 'https://threestoneskitchenstudio.com/',
    logoSrc: '/assets/aistudio/Asset-1_4x-8-scaled_40f0e075.webp',
    logoAlt: 'Three Stones Kitchen Studio logo',
    headline: 'SEO, AEO, AIO & Search Visibility Strategy',
    challenge:
      'Three Stones Kitchen Studio wanted to capture more qualified design inquiries and stand out against national directories and competing showrooms in search and AI answers.',
    strategy:
      'I refined service page targeting, strengthened internal topic architecture, and structured content for AEO and AIO clarity so search engines and AI platforms cite the studio accurately.',
    deliverables: [
      'Traditional SEO Implementation: Commercial kitchen remodeling keyword mapping, technical on-page optimization, and internal linking architecture',
      'Targeted Generative Engine Optimization (GEO): Showroom entity structuring and local authority signals so AI platforms cite Three Stones Kitchen Studio accurately',
      'Answer Engine Optimization (AEO): Structured Q&A blocks and conversational query targeting to capture Google AI Overviews and direct buyer recommendations',
      'Strategic Content Creation: High-intent service and material content tailored around custom cabinetry, spatial layout design, engineered quartz, and sintered stone',
    ],
    outcome:
      'More ranked keywords and commercial search terms alongside stronger brand citations across Google, ChatGPT, Gemini, and Perplexity.',
    evidenceItems: [
      {
        title: 'Direct AI Search Recommendation & Local Entity Citation',
        subtitle: 'Conversational Buyer Query: "what kitchen remodeling company do you recommend in newton ma"',
        imageSrc: '/assets/aistudio/Screenshot_2026-11-15_035217_3ff6e85a.png',
        imageAlt:
          'AI search response recommending Three Stones Kitchen Studio in Newton, MA with a 5.0 rating and detailed cabinetry and material capabilities',
        analysis:
          'When prospective homeowners ask AI search engines for a recommended kitchen remodeling company in Newton, MA, Three Stones Kitchen Studio is surfaced directly with a 5.0-star place card and structured capability bullets. Because the studio’s service pages and entity schema clearly define its Elliot Street showroom, spatial optimization expertise, custom cabinetry installation, and engineered quartz/sintered stone materials, generative AI engines synthesize and cite the business accurately as a top local recommendation.',
        highlights: [
          'Primary AI recommendation for "what kitchen remodeling company do you recommend in newton ma"',
          'Rich 5.0★ local entity card paired with direct website citation link',
          'Accurate AI extraction of Elliot Street location & spatial layout expertise',
          'Specific service citations for custom cabinetry, engineered quartz & sintered stone',
        ],
      },
      {
        title: 'Google Analytics (GA4) Traffic & User Growth',
        subtitle: 'Year-over-Year Performance (Jan – Today vs. Previous Period) · threestoneskitchenstudio.com',
        imageSrc: '/assets/aistudio/Screenshot_2026-11-15_040652_689d6f92.png',
        imageAlt:
          'Google Analytics report for threestoneskitchenstudio.com showing 1.9K active users (+2,188.9%), 12K events (+668.5%), 4.1K views (+424.5%), and 1.8K new users (+2,179.0%)',
        analysis:
          'Comparing year-to-date performance against the prior baseline period, Three Stones Kitchen Studio experienced a dramatic surge in qualified website traffic and visitor interaction. Active users grew by +2,188.9% to 1.9K and new users climbed +2,179.0% to 1.8K, while total page views increased +424.5% to 4.1K and tracked user events rose +668.5% to 12K—demonstrating sustained homeowner discovery and multi-page showroom exploration.',
        highlights: [
          '1.9K Active Users (+2,188.9% vs. previous period)',
          '1.8K New Users (+2,179.0% acquisition growth)',
          '12K Tracked Events (+668.5% on-site interaction)',
          '4.1K Page Views (+424.5% content & portfolio engagement)',
        ],
      },
      {
        title: '1-Year Organic Traffic, Keyword Footprint & AI Overviews Share',
        subtitle: 'Jan 2026 – Nov 2026 · Search & AI Visibility Distribution',
        imageSrc: '/assets/aistudio/Screenshot_2026-11-15_040816_5c1707dc.png',
        imageAlt:
          '1-year SEO and AI search report for Three Stones Kitchen Studio showing organic traffic growth, keyword expansion across Top 3 to Top 50 tiers, and 10.8% Google AI Overviews share',
        analysis:
          'Starting from a near-zero organic footprint at the beginning of 2026, Three Stones Kitchen Studio built steady monthly organic traffic and expanded its ranked keyword portfolio across Top 3, 4–10, 11–20, and 21–50 positions. Notably, 10.8% of the domain’s SERP distribution now comes from Google AI Overviews (alongside 86.5% traditional organic rankings and 2.7% SERP features), earning citations alongside trusted municipal and industry sources such as newtonma.gov, mass.gov, and houzz.com.',
        highlights: [
          '10.8% of total SERP visibility captured in Google AI Overviews',
          '86.5% traditional organic rankings + 2.7% additional SERP features',
          'Consistent 1-year growth from zero baseline to Top 3 & Page 1 keywords',
          'Cited in the same local ecosystem as newtonma.gov, mass.gov & houzz.com',
        ],
      },
    ],
  },
  'new-life-church': {
    id: 'new-life-church',
    sectionLabel: 'Website Created',
    name: 'New Life Fundamental Baptist Church - Leyte, Leyte',
    url: 'https://lms.francisclyde.com/',
    previewImageSrc: '/assets/aistudio/Screenshot_2026-11-15_032008_c474e9e5.png',
    previewImageAlt: 'New Life Fundamental Baptist Church - Leyte, Leyte website preview',
    headline: 'Custom Learning & Community Website Build',
    challenge:
      'The church needed a dedicated online portal tailored to their community so members and learners could access courses, lessons, and updates easily.',
    strategy:
      'I created the website directly around the church’s specific requirements, organizing lessons, resources, and navigation in a clear, welcoming layout.',
    deliverables: [
      'Custom portal structured around church and student needs',
      'Organized lesson and learning material access',
      'Clean navigation across desktop and mobile devices',
    ],
    outcome:
      'A straightforward, easy-to-navigate online home for lessons and ministry resources accessible across desktop and mobile.',
  },
  'keyword-research-tool': {
    id: 'keyword-research-tool',
    sectionLabel: 'Tool Created',
    name: 'Keyword Research Tool',
    url: 'https://metri-sync.francisclyde.com/',
    previewImageSrc: '/assets/aistudio/Screenshot_2026-11-15_031824_4ee3b07e.png',
    previewImageAlt: 'Keyword Research Tool interface preview',
    headline: 'Search Term Discovery & Intent Planning Tool',
    challenge:
      'Planning SEO, AEO, GEO, and AIO content requires quickly sorting relevant search terms by buyer intent without getting buried in messy spreadsheets.',
    strategy:
      'I built the Keyword Research Tool at metri-sync.francisclyde.com to streamline keyword discovery, intent grouping, and search visibility planning.',
    deliverables: [
      'Commercial, local, and question-based intent grouping',
      'Fast keyword filtering for service and content planning',
      'Direct workflow support for SEO, AEO, and AIO campaigns',
    ],
    outcome:
      'Faster keyword mapping across service pages, local landing pages, and AI answer content.',
  },
};
