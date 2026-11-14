import { useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { CertificateItem } from '../types/portfolio';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  useEffect(() => {
    if (!certificate) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [certificate, onClose]);

  if (!certificate || (!certificate.imageSrc && !certificate.pdfSrc)) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1f3a]/60 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="grid max-h-[90vh] w-full max-w-3xl gap-4 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[13px] font-semibold text-emerald-700">{certificate.issuer}</p>
            <h3 id="cert-modal-title" className="mt-0.5 text-xl font-bold text-[#0b1f3a]">
              {certificate.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate preview"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#0b1f3a] transition-colors hover:bg-slate-100"
          >
            <X size={18} />
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          {certificate.imageSrc ? (
            <img
              src={certificate.imageSrc}
              alt={certificate.imageAlt ?? certificate.title}
              className="h-auto w-full object-contain"
              referrerPolicy="no-referrer"
            />
          ) : (
            <iframe
              src={`${certificate.pdfSrc}#view=FitH`}
              title={`${certificate.title} PDF`}
              className="h-[68vh] w-full border-0 bg-white"
            />
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
          <span>
            {certificate.category} · {certificate.status}
          </span>
          <div className="flex items-center gap-2.5">
            {certificate.pdfSrc && (
              <a
                href={certificate.pdfSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
              >
                <span>Open PDF</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-[38px] items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-1.5 text-sm font-semibold text-[#0b1f3a] hover:bg-slate-100"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
