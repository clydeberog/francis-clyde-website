import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import {
  KEYWORD_TOOL_DATA,
  RANKED_CLIENT_WEBSITES,
  WEBSITES_CREATED,
} from '../data/portfolioData';
import { AppRoute, PortfolioFilter } from '../types/portfolio';
import { WrBuildersMetricsChart } from '../components/WrBuildersMetricsChart';

interface PortfolioPageProps {
  onNavigate: (route: AppRoute) => void;
}

const FILTER_TABS: Array<{ id: PortfolioFilter; label: string }> = [
  { id: 'all', label: 'All Work' },
  { id: 'case-studies', label: 'Client Case Studies' },
  { id: 'websites', label: 'Websites I Created' },
  { id: 'tools', label: 'Tools I Created' },
];

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [filter, setFilter] = useState<PortfolioFilter>('all');

  const showGroup = (group: Exclude<PortfolioFilter, 'all'>) =>
    filter === 'all' || filter === group;

  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50 pb-10 pt-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="mb-3 text-[13px] font-semibold tracking-wide text-emerald-700">
            Portfolio
          </p>
          <h1 className="text-[clamp(2rem,3.6vw,3rem)] font-bold leading-[1.14] tracking-[-0.03em] text-[#0b1f3a] [text-wrap:balance]">
            Client Case Studies, Websites &amp; Tools
          </h1>
          <p className="mt-3.5 max-w-[64ch] text-[17px] leading-relaxed text-slate-600">
            Explore verified SEO, AEO, GEO &amp; AIO ranking engagements, client-requested websites,
            and custom research tools built for measurable business growth.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <div
              className="inline-flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 p-1"
              role="tablist"
              aria-label="Filter Portfolio Categories"
            >
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`shrink-0 whitespace-nowrap rounded-md px-3 py-1.5 text-[13px] transition-colors ${
                    filter === tab.id
                      ? 'bg-white font-semibold text-[#0b1f3a] shadow-xs'
                      : 'font-medium text-slate-600 hover:text-[#0b1f3a]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => onNavigate({ page: 'contact' })}
              className="inline-flex min-h-[40px] cursor-pointer shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-px hover:bg-emerald-700"
            >
              Start a Project
            </button>
          </div>
        </div>
      </section>

      {/* 1. Client Case Studies */}
      {showGroup('case-studies') && (
        <section className="border-b border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-8">
              <p className="mb-2 text-[13px] font-semibold tracking-wide text-emerald-700">
                Client Case Studies
              </p>
              <h2 className="text-[clamp(1.625rem,2.8vw,2.25rem)] font-bold leading-tight tracking-tight text-[#0b1f3a]">
                Search, AI Visibility &amp; Traffic Outcomes
              </h2>
              <p className="mt-3 max-w-[64ch] text-[17px] leading-relaxed text-slate-600">
                Documented growth engagements combining technical SEO, AEO, GEO, and AIO with clean
                web architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
              {RANKED_CLIENT_WEBSITES.map((client) => (
                <article
                  key={client.id}
                  className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_1px_2px_rgba(11,31,58,0.04),0_10px_30px_-12px_rgba(11,31,58,0.08)]"
                >
                  <div>
                    <div className="mb-5 flex h-24 items-center justify-start rounded-xl border border-slate-200 bg-slate-50 px-5 py-3">
                      <img
                        src={client.logoSrc}
                        alt={client.logoAlt}
                        className="max-h-14 w-auto max-w-[230px] object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="text-[1.375rem] font-bold text-[#0b1f3a]">{client.name}</h3>
                    <div className="mt-1.5 text-sm font-semibold text-emerald-700">
                      <a
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 break-all transition-colors hover:text-[#0b1f3a] hover:underline hover:underline-offset-4"
                      >
                        <span>{client.url}</span>
                        <ExternalLink size={14} className="shrink-0" aria-hidden="true" />
                      </a>
                    </div>
                    <p className="mt-3 text-[15px] leading-[1.65] text-slate-600">
                      {client.summary}
                    </p>
                    {client.metrics && <WrBuildersMetricsChart metrics={client.metrics} />}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-4">
                    <button
                      type="button"
                      onClick={() => onNavigate({ page: 'case-study', caseStudyId: client.id })}
                      className="inline-flex min-h-[40px] shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#0b1f3a] transition-colors hover:border-[#0b1f3a] hover:bg-slate-100"
                    >
                      Read Case Study
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2. Websites I Created */}
      {showGroup('websites') && (
        <section className="border-b border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-8">
              <p className="mb-2 text-[13px] font-semibold tracking-wide text-emerald-700">
                Websites I Created
              </p>
              <h2 className="text-[clamp(1.625rem,2.8vw,2.25rem)] font-bold leading-tight tracking-tight text-[#0b1f3a]">
                Websites Built Around Client Requirements
              </h2>
              <p className="mt-3 max-w-[64ch] text-[17px] leading-relaxed text-slate-600">
                I created these websites based on client requirements—focused on clear organization,
                easy navigation, and practical features tailored to how each organization serves its
                visitors.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {WEBSITES_CREATED.map((site) => (
                <article
                  key={site.id}
                  className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_1px_2px_rgba(11,31,58,0.04),0_10px_30px_-12px_rgba(11,31,58,0.08)] lg:grid-cols-2"
                >
                  <div>
                    <h3 className="text-[1.375rem] font-bold leading-snug text-[#0b1f3a]">
                      {site.name}
                    </h3>
                    <div className="mt-1.5 text-sm font-semibold text-emerald-700">
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 break-all transition-colors hover:text-[#0b1f3a] hover:underline hover:underline-offset-4"
                      >
                        <span>{site.url}</span>
                        <ExternalLink size={14} className="shrink-0" aria-hidden="true" />
                      </a>
                    </div>
                    <p className="mt-3 max-w-[65ch] text-[15px] leading-[1.65] text-slate-600">
                      {site.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[40px] shrink-0 items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                      >
                        Visit Website
                      </a>
                      <button
                        type="button"
                        onClick={() => onNavigate({ page: 'case-study', caseStudyId: site.id })}
                        className="inline-flex min-h-[40px] shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#0b1f3a] transition-colors hover:border-[#0b1f3a] hover:bg-slate-100"
                      >
                        View Build Details
                      </button>
                    </div>
                  </div>

                  {site.previewImageSrc && (
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${site.name} website`}
                      className="group block overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-xs"
                    >
                      <img
                        src={site.previewImageSrc}
                        alt={site.previewImageAlt ?? `${site.name} preview`}
                        className="h-auto w-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.015]"
                        referrerPolicy="no-referrer"
                      />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Tools I Created */}
      {showGroup('tools') && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-8">
              <p className="mb-2 text-[13px] font-semibold tracking-wide text-emerald-700">
                Tools I Created
              </p>
              <h2 className="text-[clamp(1.625rem,2.8vw,2.25rem)] font-bold leading-tight tracking-tight text-[#0b1f3a]">
                Custom SEO &amp; Research Utility
              </h2>
              <p className="mt-3 max-w-[64ch] text-[17px] leading-relaxed text-slate-600">
                A dedicated research tool built to simplify keyword discovery and search intent
                planning for SEO, AEO, GEO, and AIO campaigns.
              </p>
            </div>

            <article className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_1px_2px_rgba(11,31,58,0.04),0_10px_30px_-12px_rgba(11,31,58,0.08)] lg:grid-cols-2">
              <div>
                <h3 className="text-[1.375rem] font-bold text-[#0b1f3a]">
                  {KEYWORD_TOOL_DATA.name}
                </h3>
                <div className="mt-1.5 text-sm font-semibold text-emerald-700">
                  <a
                    href={KEYWORD_TOOL_DATA.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 break-all transition-colors hover:text-[#0b1f3a] hover:underline hover:underline-offset-4"
                  >
                    <span>{KEYWORD_TOOL_DATA.url}</span>
                    <ExternalLink size={14} className="shrink-0" aria-hidden="true" />
                  </a>
                </div>
                <p className="mt-3 text-[15px] leading-[1.65] text-slate-600">
                  {KEYWORD_TOOL_DATA.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={KEYWORD_TOOL_DATA.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] shrink-0 items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                  >
                    Open Keyword Research Tool
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate({ page: 'case-study', caseStudyId: KEYWORD_TOOL_DATA.id })
                    }
                    className="inline-flex min-h-[40px] shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#0b1f3a] transition-colors hover:border-[#0b1f3a] hover:bg-slate-100"
                  >
                    About This Tool
                  </button>
                </div>
              </div>

              <a
                href={KEYWORD_TOOL_DATA.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${KEYWORD_TOOL_DATA.name}`}
                className="group block overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-xs"
              >
                <img
                  src={KEYWORD_TOOL_DATA.previewImageSrc}
                  alt={KEYWORD_TOOL_DATA.previewImageAlt}
                  className="h-auto w-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.015]"
                  referrerPolicy="no-referrer"
                />
              </a>
            </article>
          </div>
        </section>
      )}
    </div>
  );
}
