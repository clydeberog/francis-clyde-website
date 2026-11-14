import { Check } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { CONTACT_FAQS } from '../data/portfolioData';

const HELPFUL_DETAILS = [
  'Your target cities, regions, or international markets',
  'Core services or products you want to rank first for',
  'Whether you need a new build, technical fixes, or ongoing SEO',
];

export function ContactPage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50 pb-10 pt-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="mb-3 text-[13px] font-semibold tracking-wide text-emerald-700">
            Contact
          </p>
          <h1 className="text-[clamp(2rem,3.6vw,3rem)] font-bold leading-[1.14] tracking-[-0.03em] text-[#0b1f3a] [text-wrap:balance]">
            Start Your SEO, AI Search &amp; Web Development Project
          </h1>
          <p className="mt-3.5 max-w-[64ch] text-[17px] leading-relaxed text-slate-600">
            Select the service you need, share your website URL if you have one, and outline your
            ranking or development goals to start a focused conversation.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-tight tracking-tight text-[#0b1f3a]">
                How We Can Work Together
              </h2>
              <p className="mt-2.5 text-[16px] leading-relaxed text-slate-600">
                Whether you are launching a brand-new website or fixing rankings on an existing
                domain, every engagement is built around measurable search and AI visibility.
              </p>

              <div className="mt-7 border-t border-slate-200">
                <div className="grid gap-1.5 border-b border-slate-200 py-5">
                  <h3 className="text-[17px] font-semibold text-[#0b1f3a]">
                    SEO, AEO, GEO &amp; AIO Campaigns
                  </h3>
                  <p className="text-[15px] leading-relaxed text-slate-600">
                    Structured keyword targeting, local map dominance, and answer-ready content
                    architecture designed to grow organic traffic and earn mentions on ChatGPT,
                    Gemini, and Perplexity.
                  </p>
                </div>

                <div className="grid gap-1.5 border-b border-slate-200 py-5">
                  <h3 className="text-[17px] font-semibold text-[#0b1f3a]">
                    Custom Web Development &amp; Technical Fixes
                  </h3>
                  <p className="text-[15px] leading-relaxed text-slate-600">
                    Clean, high-speed responsive websites and landing pages engineered without
                    template bloat so both visitors and search crawlers convert effortlessly.
                  </p>
                </div>

                <div className="grid gap-2 border-b border-slate-200 py-5">
                  <h3 className="text-[17px] font-semibold text-[#0b1f3a]">
                    Helpful Details to Include
                  </h3>
                  <ul className="mt-1 grid gap-2">
                    {HELPFUL_DETAILS.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[15px] font-medium text-[#0b1f3a]"
                      >
                        <Check
                          size={16}
                          className="mt-1 shrink-0 text-emerald-600"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div
              id="contact-page-form"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(11,31,58,0.04),0_10px_30px_-12px_rgba(11,31,58,0.08)] sm:p-8"
            >
              <ContactForm variant="page" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-8">
            <p className="mb-2 text-[13px] font-semibold tracking-wide text-emerald-700">
              Common Questions
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight tracking-tight text-[#0b1f3a]">
              Before You Reach Out
            </h2>
            <p className="mt-3 max-w-[64ch] text-[17px] leading-relaxed text-slate-600">
              Quick answers on how I work with international clients across SEO, AEO, GEO, AIO, and
              web development.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CONTACT_FAQS.map((faq) => (
              <article
                key={faq.question}
                className="grid gap-2 rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-[17px] font-semibold leading-snug text-[#0b1f3a]">
                  {faq.question}
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
