import { useState } from 'react';
import { ArrowRight, Check, ExternalLink, Maximize2 } from 'lucide-react';
import {
  ABOUT_CONTENT,
  ABOUT_PILLARS,
  CERTIFICATES_LIST,
  CORE_SERVICES,
  HERO_IMPACT_STATS,
  RANKED_CLIENT_WEBSITES,
  TOOLS_STACK,
} from '../data/portfolioData';
import { AppRoute, CertificateItem } from '../types/portfolio';
import { ToolLogo } from '../components/BrandToolLogos';
import { CertificateModal } from '../components/CertificateModal';
import { GrowthSnapshot } from '../components/GrowthSnapshot';
import { WrBuildersMetricsChart } from '../components/WrBuildersMetricsChart';

interface HomePageProps {
  onNavigate: (route: AppRoute, sectionAnchor?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 pb-16 pt-14 lg:pt-[72px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-center">
              <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.12] tracking-[-0.03em] text-[#0b1f3a] [text-wrap:balance]">
                Websites Engineered to Rank First and{' '}
                <span className="text-emerald-700">Win AI Search.</span>
              </h1>
              <p className="mt-5 max-w-[58ch] text-[17px] leading-[1.7] text-slate-600">
                I&apos;m Francis Clyde. I combine technical and strategic SEO, AEO, GEO, and AIO
                with custom web development—helping international businesses dominate search
                results, earn top AI recommendations, and convert visitors into paying clients.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'contact' })}
                  className="inline-flex min-h-[44px] cursor-pointer shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-emerald-600 px-5 py-2.5 text-[15px] font-semibold text-white transition-all duration-150 hover:-translate-y-px hover:bg-emerald-700"
                >
                  <span>Let&apos;s Build Together</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'portfolio' })}
                  className="inline-flex min-h-[44px] cursor-pointer shrink-0 items-center justify-center whitespace-nowrap rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-[15px] font-semibold text-[#0b1f3a] transition-all duration-150 hover:border-[#0b1f3a] hover:bg-slate-100"
                >
                  View Portfolio
                </button>
              </div>
            </div>

            <GrowthSnapshot onNavigate={onNavigate} />
          </div>

          {/* 3-Column Quantitative Proof Strip */}
          <div className="mt-14 grid grid-cols-1 gap-7 border-t border-slate-200 pt-8 sm:grid-cols-3">
            {HERO_IMPACT_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-[1.625rem] font-bold leading-tight tracking-tight text-[#0b1f3a] tabular-nums">
                  {stat.value}
                </span>
                <span className="text-sm leading-relaxed text-slate-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. What I Do */}
      <section id="services" className="border-t border-slate-200 bg-white py-20 lg:py-[88px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-[13px] font-semibold tracking-wide text-emerald-700">
                What I Do
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.025em] text-[#0b1f3a] [text-wrap:balance]">
                Core SEO, AI Search &amp; Web Development Services
              </h2>
              <p className="mt-3.5 max-w-[64ch] text-[17px] leading-relaxed text-slate-600">
                Focused expertise in helping businesses rank across traditional search and modern
                AI search engines—paired with conversion-ready web development.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate({ page: 'contact' })}
              className="inline-flex min-h-[44px] cursor-pointer shrink-0 items-center justify-center whitespace-nowrap rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-[15px] font-semibold text-[#0b1f3a] transition-colors hover:border-[#0b1f3a] hover:bg-slate-100"
            >
              Request a Website Audit
            </button>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
            {CORE_SERVICES.map((service) => (
              <article
                key={service.title}
                className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_1px_2px_rgba(11,31,58,0.04),0_10px_30px_-12px_rgba(11,31,58,0.08)]"
              >
                <div>
                  <h3 className="text-xl font-bold leading-snug text-[#0b1f3a]">{service.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-slate-600">
                    {service.description}
                  </p>
                  <ul className="mt-5 grid gap-2.5 border-t border-slate-200 pt-4">
                    {service.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2.5 text-sm font-medium text-[#0b1f3a]"
                      >
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-emerald-600"
                          aria-hidden="true"
                        />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. My Work (Maximum 2 Client Websites Helped Rank) */}
      <section id="work" className="border-t border-slate-200 bg-slate-50 py-20 lg:py-[88px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-11">
            <p className="mb-3 text-[13px] font-semibold tracking-wide text-emerald-700">
              My Work
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.025em] text-[#0b1f3a] [text-wrap:balance]">
              Client Websites I Helped Rank
            </h2>
            <p className="mt-3.5 max-w-[64ch] text-[17px] leading-relaxed text-slate-600">
              Two featured client websites showing how clean web architecture paired with SEO, AEO,
              GEO, and AIO turns local and regional businesses into top-ranked category leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {RANKED_CLIENT_WEBSITES.map((client) => (
              <article
                key={client.id}
                className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_1px_2px_rgba(11,31,58,0.04),0_10px_30px_-12px_rgba(11,31,58,0.08)] transition-colors hover:border-slate-300"
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
                  <h3 className="text-[1.375rem] font-bold leading-snug text-[#0b1f3a]">
                    {client.name}
                  </h3>
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
                  <p className="mt-3 text-[15px] leading-[1.65] text-slate-600">{client.summary}</p>
                  {client.metrics && <WrBuildersMetricsChart metrics={client.metrics} />}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-4">
                  <button
                    type="button"
                    onClick={() => onNavigate({ page: 'case-study', caseStudyId: client.id })}
                    className="inline-flex min-h-[40px] shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#0b1f3a] transition-colors hover:border-[#0b1f3a] hover:bg-slate-100"
                  >
                    Explore Website Case Study
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tools I Use (9 Platforms including HubSpot) */}
      <section id="tools" className="border-t border-slate-200 bg-white py-20 lg:py-[88px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-11">
            <p className="mb-3 text-[13px] font-semibold tracking-wide text-emerald-700">
              Tools I Use
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.025em] text-[#0b1f3a] [text-wrap:balance]">
              Platforms &amp; Diagnostic Stack
            </h2>
            <p className="mt-3.5 max-w-[64ch] text-[17px] leading-relaxed text-slate-600">
              Industry-standard tools I use daily for keyword research, technical site crawls,
              local map tracking, CRM attribution, and conversion diagnostics.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS_STACK.map((tool) => (
              <article
                key={tool.id}
                className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_1px_2px_rgba(11,31,58,0.04),0_10px_30px_-12px_rgba(11,31,58,0.08)]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white"
                    aria-hidden="true"
                  >
                    <ToolLogo id={tool.id} />
                  </span>
                  <h3 className="text-[15px] font-semibold leading-snug text-[#0b1f3a]">
                    {tool.name}
                  </h3>
                </div>
                <p className="text-[13px] leading-relaxed text-slate-600">{tool.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About Me (Moved Before Certificates) */}
      <section id="about" className="border-t border-slate-200 bg-slate-50 py-20 lg:py-[88px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-3 text-[13px] font-semibold tracking-wide text-emerald-700">
                {ABOUT_CONTENT.eyebrow}
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.025em] text-[#0b1f3a] [text-wrap:balance]">
                {ABOUT_CONTENT.title}
              </h2>
              <div className="mt-5 grid gap-4 text-base leading-[1.75] text-slate-600">
                {ABOUT_CONTENT.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200">
              {ABOUT_PILLARS.map((pillar) => (
                <div key={pillar.title} className="border-b border-slate-200 py-5">
                  <h3 className="text-[17px] font-semibold text-[#0b1f3a]">{pillar.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Certificates */}
      <section id="certificates" className="border-t border-slate-200 bg-white py-20 lg:py-[88px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-11">
            <p className="mb-3 text-[13px] font-semibold tracking-wide text-emerald-700">
              Certificates
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.025em] text-[#0b1f3a] [text-wrap:balance]">
              Verified Training &amp; Industry Credentials
            </h2>
            <p className="mt-3.5 max-w-[64ch] text-[17px] leading-relaxed text-slate-600">
              Formal certifications across search optimization, answer engine optimization, and
              AI prompt engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {CERTIFICATES_LIST.map((cert) => (
              <article
                key={cert.title}
                className="flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_1px_2px_rgba(11,31,58,0.04),0_10px_30px_-12px_rgba(11,31,58,0.08)]"
              >
                <div>
                  {(cert.imageSrc || cert.pdfSrc) && (
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      aria-label={`Preview ${cert.title} certificate`}
                      className="group relative mb-4 block w-full overflow-hidden rounded-lg border border-slate-200 bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                    >
                      {cert.imageSrc ? (
                        <img
                          src={cert.imageSrc}
                          alt={cert.imageAlt ?? cert.title}
                          className="aspect-[16/10] w-full bg-slate-100 object-contain p-1.5 transition-transform duration-200 group-hover:scale-[1.02]"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <iframe
                          src={`${cert.pdfSrc}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                          title={`${cert.title} PDF preview`}
                          tabIndex={-1}
                          className="pointer-events-none aspect-[16/10] w-full border-0 bg-[#0b1f3a]"
                        />
                      )}
                      <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white/95 px-2 py-1 text-[11px] font-semibold text-[#0b1f3a] shadow-xs">
                        <Maximize2 size={12} aria-hidden="true" />
                        <span>View</span>
                      </span>
                    </button>
                  )}

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[13px] font-semibold text-emerald-700">
                        {cert.issuer}
                      </div>
                      <h3 className="mt-1 text-[17px] font-bold leading-snug text-[#0b1f3a]">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-slate-600">
                    {cert.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-3 text-[12px] font-medium text-slate-500">
                  <span>{cert.category}</span>
                  <span>{cert.status}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Home Closing Call-to-Action */}
      <section className="border-t border-slate-200 bg-slate-50 py-20 lg:py-[88px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-wrap items-center justify-between gap-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_1px_2px_rgba(11,31,58,0.04),0_10px_30px_-12px_rgba(11,31,58,0.08)] sm:p-10">
            <div>
              <p className="mb-2 text-[13px] font-semibold tracking-wide text-emerald-700">
                Start a Conversation
              </p>
              <h2 className="text-[clamp(1.625rem,2.8vw,2.25rem)] font-bold leading-tight tracking-tight text-[#0b1f3a] [text-wrap:balance]">
                Ready to Rank Higher and Launch a Stronger Website?
              </h2>
              <p className="mt-2.5 max-w-[60ch] text-[16px] leading-relaxed text-slate-600">
                Share your website goals or request an SEO, AEO, GEO, AIO, or custom web
                development consultation on the Contact page.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate({ page: 'contact' })}
                className="inline-flex min-h-[44px] cursor-pointer shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-emerald-600 px-5 py-2.5 text-[15px] font-semibold text-white transition-all duration-150 hover:-translate-y-px hover:bg-emerald-700"
              >
                <span>Let&apos;s Build Together</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate({ page: 'portfolio' })}
                className="inline-flex min-h-[44px] cursor-pointer shrink-0 items-center justify-center whitespace-nowrap rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-[15px] font-semibold text-[#0b1f3a] transition-colors hover:border-[#0b1f3a] hover:bg-slate-100"
              >
                Explore Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
      <CertificateModal certificate={selectedCert} onClose={() => setSelectedCert(null)} />
    </div>
  );
}
