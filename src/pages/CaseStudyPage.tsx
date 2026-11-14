import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, ExternalLink, Maximize2, X } from 'lucide-react';
import { CASE_STUDIES_BY_ID } from '../data/portfolioData';
import { AppRoute, CaseStudyId } from '../types/portfolio';
import { WrBuildersMetricsChart } from '../components/WrBuildersMetricsChart';

interface CaseStudyPageProps {
  caseStudyId: CaseStudyId;
  onNavigate: (route: AppRoute) => void;
}

interface LightboxState {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  analysis: string;
}

export function CaseStudyPage({ caseStudyId, onNavigate }: CaseStudyPageProps) {
  const study = CASE_STUDIES_BY_ID[caseStudyId];
  const otherStudies = Object.values(CASE_STUDIES_BY_ID).filter((item) => item.id !== caseStudyId);
  const [activeLightbox, setActiveLightbox] = useState<LightboxState | null>(null);

  useEffect(() => {
    if (!activeLightbox) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveLightbox(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightbox]);

  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50 pb-12 pt-14">
        <div className="mx-auto max-w-[1000px] px-6">
          <button
            type="button"
            onClick={() => onNavigate({ page: 'portfolio' })}
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#0b1f3a]"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to Portfolio</span>
          </button>

          {study.logoSrc && (
            <div className="mb-6 inline-flex h-24 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-4">
              <img
                src={study.logoSrc}
                alt={study.logoAlt ?? study.name}
                className="max-h-14 w-auto max-w-[260px] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          <p className="mb-2 text-[13px] font-semibold tracking-wide text-emerald-700">
            {study.sectionLabel}
          </p>
          <h1 className="text-[clamp(2rem,3.5vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.025em] text-[#0b1f3a] [text-wrap:balance]">
            {study.name}
          </h1>
          <p className="mt-2 text-lg font-medium text-slate-700">{study.headline}</p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-[#0b1f3a] hover:underline hover:underline-offset-4"
            >
              <span>{study.url}</span>
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1000px] gap-10 px-6">
          {study.previewImageSrc && (
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xs">
              <img
                src={study.previewImageSrc}
                alt={study.previewImageAlt ?? `${study.name} preview`}
                className="h-auto w-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h2 className="text-lg font-bold text-[#0b1f3a]">The Starting Challenge</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{study.challenge}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h2 className="text-lg font-bold text-[#0b1f3a]">Strategy &amp; Execution</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{study.strategy}</p>
            </div>
          </div>

          {/* 1. Single-Report Performance Evidence (GSC, Keywords, Google Analytics) */}
          {study.evidenceItems && study.evidenceItems.length > 0 && (
            <div className="grid gap-7 border-t border-slate-200 pt-10">
              <div>
                <p className="mb-2 text-[13px] font-semibold tracking-wide text-emerald-700">
                  Performance Proof &amp; Data Analysis
                </p>
                <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-tight tracking-tight text-[#0b1f3a]">
                  Verified Search, Keyword &amp; Analytics Breakdown
                </h2>
                <p className="mt-2.5 max-w-[65ch] text-[15px] leading-relaxed text-slate-600">
                  Direct snapshots from Google Search Console, keyword rank tracking, and Google
                  Analytics illustrating how technical SEO, AEO, and GEO compounded over 12 months.
                </p>
              </div>

              <div className="grid gap-8">
                {study.evidenceItems.map((item) => (
                  <article
                    key={item.title}
                    className="grid gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold text-emerald-700">{item.subtitle}</p>
                        <h3 className="mt-1 text-xl font-bold text-[#0b1f3a]">{item.title}</h3>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveLightbox({
                            title: item.title,
                            subtitle: item.subtitle,
                            imageSrc: item.imageSrc,
                            imageAlt: item.imageAlt,
                            analysis: item.analysis,
                          })
                        }
                        className="inline-flex min-h-[36px] shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0b1f3a] transition-colors hover:border-[#0b1f3a] hover:bg-slate-100"
                      >
                        <Maximize2 size={13} aria-hidden="true" />
                        <span>Expand Report</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveLightbox({
                          title: item.title,
                          subtitle: item.subtitle,
                          imageSrc: item.imageSrc,
                          imageAlt: item.imageAlt,
                          analysis: item.analysis,
                        })
                      }
                      aria-label={`Expand ${item.title} screenshot`}
                      className="group relative block w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                    >
                      <img
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        className="h-auto w-full rounded-lg object-contain transition-transform duration-200 group-hover:scale-[1.01]"
                        referrerPolicy="no-referrer"
                      />
                    </button>

                    <div className="grid gap-4 border-t border-slate-200 pt-5">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Analysis &amp; Key Takeaways
                        </h4>
                        <p className="mt-2 text-[15px] leading-[1.7] text-slate-700">
                          {item.analysis}
                        </p>
                      </div>

                      <ul className="grid grid-cols-1 gap-2.5 pt-1 sm:grid-cols-2">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-[#0b1f3a] tabular-nums"
                          >
                            <Check
                              size={16}
                              className="mt-0.5 shrink-0 text-emerald-600"
                              aria-hidden="true"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* 2. Before vs. After Comparisons (Share of Voice 1 vs 2 & Sentiment 1 vs 2) */}
          {study.comparisonItems && study.comparisonItems.length > 0 && (
            <div className="grid gap-7 border-t border-slate-200 pt-10">
              <div>
                <p className="mb-2 text-[13px] font-semibold tracking-wide text-emerald-700">
                  AI Visibility &amp; Competitive Benchmarking
                </p>
                <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-tight tracking-tight text-[#0b1f3a]">
                  Share of Voice &amp; Brand Sentiment Comparisons
                </h2>
                <p className="mt-2.5 max-w-[65ch] text-[15px] leading-relaxed text-slate-600">
                  Side-by-side baseline vs. post-optimization comparisons demonstrating how WR
                  Builders Inc. overtook regional competitors in Share of Voice and strengthened
                  positive sentiment across ChatGPT, Gemini, and Perplexity.
                </p>
              </div>

              <div className="grid gap-8">
                {study.comparisonItems.map((comp) => (
                  <article
                    key={comp.title}
                    className="grid gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold text-emerald-700">{comp.subtitle}</p>
                        <h3 className="mt-1 text-xl font-bold text-[#0b1f3a]">{comp.title}</h3>
                      </div>
                      <span className="text-sm font-bold text-emerald-700 tabular-nums">
                        {comp.summaryDelta}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                      {[comp.before, comp.after].map((snap, idx) => (
                        <div
                          key={snap.stageLabel}
                          className="flex flex-col justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div>
                              <span
                                className={`text-xs font-bold ${
                                  idx === 1 ? 'text-emerald-700' : 'text-slate-600'
                                }`}
                              >
                                {snap.stageLabel}
                              </span>
                              <p className="text-xs text-slate-500">{snap.timeframe}</p>
                            </div>
                            <span
                              className={`text-xs font-bold tabular-nums ${
                                idx === 1 ? 'text-emerald-700' : 'text-[#0b1f3a]'
                              }`}
                            >
                              {snap.keyMetric}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              setActiveLightbox({
                                title: `${comp.title} — ${snap.stageLabel}`,
                                subtitle: `${snap.timeframe} · ${snap.keyMetric}`,
                                imageSrc: snap.imageSrc,
                                imageAlt: snap.imageAlt,
                                analysis: comp.analysis,
                              })
                            }
                            aria-label={`Expand ${snap.stageLabel} for ${comp.title}`}
                            className="group relative block w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                          >
                            <img
                              src={snap.imageSrc}
                              alt={snap.imageAlt}
                              className="h-auto w-full rounded-md object-contain transition-transform duration-200 group-hover:scale-[1.015]"
                              referrerPolicy="no-referrer"
                            />
                            <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white/95 px-2 py-1 text-[11px] font-semibold text-[#0b1f3a] shadow-xs">
                              <Maximize2 size={12} aria-hidden="true" />
                              <span>Expand</span>
                            </span>
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-4 border-t border-slate-200 pt-5">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Comparison Analysis
                        </h4>
                        <p className="mt-2 text-[15px] leading-[1.7] text-slate-700">
                          {comp.analysis}
                        </p>
                      </div>

                      <ul className="grid grid-cols-1 gap-2.5 pt-1 sm:grid-cols-2">
                        {comp.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-[#0b1f3a] tabular-nums"
                          >
                            <Check
                              size={16}
                              className="mt-0.5 shrink-0 text-emerald-600"
                              aria-hidden="true"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* 3. What Was Delivered (Moved After Google Analytics & Performance Sections) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <h2 className="text-lg font-bold text-[#0b1f3a]">What Was Delivered</h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {study.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-slate-700">
                  <Check size={17} className="mt-0.5 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {study.outcome && (
              <div className="mt-6 border-t border-slate-200 pt-5">
                <div className="text-[13px] font-semibold text-slate-500">Outcome</div>
                <p className="mt-1 text-base font-semibold text-emerald-700">{study.outcome}</p>
              </div>
            )}
            {study.metrics && <WrBuildersMetricsChart metrics={study.metrics} />}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <div>
              <h3 className="text-lg font-bold text-[#0b1f3a]">
                Want results like this for your business?
              </h3>
              <p className="mt-1 text-[15px] text-slate-600">
                Request a tailored SEO, AI visibility, or web development consultation.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate({ page: 'contact' })}
              className="inline-flex min-h-[44px] cursor-pointer shrink-0 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              <span>Start a Project</span>
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>

          <div className="border-t border-slate-200 pt-10">
            <h2 className="mb-5 text-lg font-bold text-[#0b1f3a]">More Work in Portfolio</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {otherStudies.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate({ page: 'case-study', caseStudyId: item.id })}
                  className="flex flex-col items-start justify-between gap-2 rounded-xl border border-slate-200 bg-white p-5 text-left transition-colors hover:border-[#0b1f3a]"
                >
                  <div>
                    <span className="text-xs font-semibold text-emerald-700">
                      {item.sectionLabel}
                    </span>
                    <h3 className="mt-1 text-[15px] font-bold text-[#0b1f3a]">{item.name}</h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-600">View Details &rarr;</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1f3a]/60 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="evidence-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveLightbox(null);
          }}
        >
          <div className="grid max-h-[92vh] w-full max-w-5xl gap-4 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-emerald-700">{activeLightbox.subtitle}</p>
                <h3 id="evidence-modal-title" className="mt-0.5 text-xl font-bold text-[#0b1f3a]">
                  {activeLightbox.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveLightbox(null)}
                aria-label="Close report preview"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#0b1f3a] transition-colors hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-2">
              <img
                src={activeLightbox.imageSrc}
                alt={activeLightbox.imageAlt}
                className="h-auto w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm leading-relaxed text-slate-600">{activeLightbox.analysis}</p>
          </div>
        </div>
      )}
    </div>
  );
}
