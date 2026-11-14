import { Mail, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';
import { ContactForm } from './ContactForm';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pb-8 pt-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-start gap-11 border-b border-slate-200 pb-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-6">
            <div>
              <h2 className="text-[1.375rem] font-bold leading-snug tracking-tight text-[#0b1f3a]">
                Let&apos;s Discuss Your Website &amp; Rankings
              </h2>
              <p className="mt-2 max-w-[44ch] text-[15px] leading-relaxed text-slate-600">
                Reach out directly by email, WhatsApp, or use the quick form to share your goals.
              </p>
            </div>

            <div>
              <div className="text-[13px] font-semibold text-slate-500">Direct Email</div>
              <div className="mt-1.5">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2 text-[17px] font-semibold text-[#0b1f3a] transition-colors hover:text-emerald-700"
                >
                  <Mail size={18} className="text-emerald-700" aria-hidden="true" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </div>
            </div>

            <div>
              <div className="text-[13px] font-semibold text-slate-500">WhatsApp</div>
              <div className="mt-1.5 flex flex-wrap items-center gap-3">
                <a
                  href={CONTACT_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[17px] font-semibold text-[#0b1f3a] tabular-nums transition-colors hover:text-emerald-700"
                >
                  <MessageCircle size={18} className="text-emerald-700" aria-hidden="true" />
                  <span>{CONTACT_INFO.whatsappDisplay}</span>
                </a>
                <a
                  href={CONTACT_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[38px] items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-1.5 text-sm font-semibold text-[#0b1f3a] transition-colors hover:border-[#0b1f3a] hover:bg-slate-50"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            <div>
              <div className="text-[13px] font-semibold text-slate-500">
                Availability &amp; Global Coverage
              </div>
              <p className="mt-1.5 max-w-[46ch] text-[15px] font-medium leading-relaxed text-[#0b1f3a]">
                {CONTACT_INFO.availability}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
            <h3 className="mb-4 text-lg font-bold text-[#0b1f3a]">Quick Inquiry Form</h3>
            <ContactForm variant="footer" />
          </div>
        </div>

        <div className="pt-6 text-center">
          <p className="text-[13px] text-slate-500">&copy; 2026 Francis Clyde. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
