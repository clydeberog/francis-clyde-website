export type PageKey = 'home' | 'portfolio' | 'contact' | 'case-study';

export type CaseStudyId =
  | 'wr-builders'
  | 'three-stones'
  | 'new-life-church'
  | 'keyword-research-tool';

export interface AppRoute {
  page: PageKey;
  caseStudyId?: CaseStudyId;
}

export type PortfolioFilter = 'all' | 'case-studies' | 'websites' | 'tools';

export type ToolLogoId =
  | 'semrush'
  | 'ahrefs'
  | 'screaming-frog'
  | 'local-dominator'
  | 'gsc'
  | 'ga4'
  | 'google-ads'
  | 'clarity'
  | 'hubspot';

export interface ImpactStat {
  value: string;
  label: string;
}

export interface AboutPillar {
  title: string;
  description: string;
}

export interface ServiceOffering {
  title: string;
  description: string;
  outcomes: string[];
}

export interface ClientSearchMetric {
  label: string;
  delta: string;
  barPercent: number;
  tone: 'emerald' | 'navy';
}

export interface RankedClientWebsite {
  id: CaseStudyId;
  name: string;
  url: string;
  logoSrc: string;
  logoAlt: string;
  summary: string;
  metrics?: ClientSearchMetric[];
}

export interface WebsiteBuildProject {
  id: CaseStudyId;
  name: string;
  url: string;
  summary: string;
  previewImageSrc?: string;
  previewImageAlt?: string;
}

export interface ToolStackItem {
  id: ToolLogoId;
  name: string;
  description: string;
}

export interface CertificateItem {
  issuer: string;
  title: string;
  description: string;
  category: string;
  status: string;
  imageSrc?: string;
  imageAlt?: string;
  pdfSrc?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CaseStudyEvidenceItem {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  analysis: string;
  highlights: string[];
}

export interface CaseStudyComparisonSnapshot {
  stageLabel: string;
  timeframe: string;
  keyMetric: string;
  imageSrc: string;
  imageAlt: string;
}

export interface CaseStudyComparisonItem {
  title: string;
  subtitle: string;
  summaryDelta: string;
  before: CaseStudyComparisonSnapshot;
  after: CaseStudyComparisonSnapshot;
  analysis: string;
  highlights: string[];
}

export interface CaseStudyDetail {
  id: CaseStudyId;
  sectionLabel: string;
  name: string;
  url: string;
  logoSrc?: string;
  logoAlt?: string;
  previewImageSrc?: string;
  previewImageAlt?: string;
  headline: string;
  challenge: string;
  strategy: string;
  deliverables: string[];
  outcome?: string;
  metrics?: ClientSearchMetric[];
  evidenceItems?: CaseStudyEvidenceItem[];
  comparisonItems?: CaseStudyComparisonItem[];
}

export interface ContactFormValues {
  name: string;
  email: string;
  service: string;
  customService: string;
  website: string;
  details: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;
