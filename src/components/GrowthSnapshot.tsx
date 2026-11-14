import { ArrowRight } from 'lucide-react';
import { AppRoute } from '../types/portfolio';

interface GrowthSnapshotProps {
  onNavigate: (route: AppRoute) => void;
}

interface SnapshotRow {
  metric: string;
  value: string;
  barPercent: number;
  tone: 'emerald' | 'navy';
}

const COMBINED_RESULTS: SnapshotRow[] = [
  {
    metric: 'Active Users Growth (GA4)',
    value: '+2,188.9%',
    barPercent: 96,
    tone: 'emerald',
  },
  {
    metric: 'Total Search Clicks (GSC)',
    value: '+265.76%',
    barPercent: 90,
    tone: 'emerald',
  },
  {
    metric: 'Total Search Impressions (1.8M)',
    value: '+239.76%',
    barPercent: 86,
    tone: 'navy',
  },
  {
    metric: 'Tracked Events & Page Views Growth',
    value: '+668.5% / +424.5%',
    barPercent: 82,
    tone: 'emerald',
  },
  {
    metric: 'AI Search Share of Voice & AI Overviews',
    value: '#1 SoV (34%) · 10.8% AIO',
    barPercent: 88,
    tone: 'navy',
  },
];

export function GrowthSnapshot({ onNavigate }: GrowthSnapshotProps) {
  return (
    <aside
      aria-label="Verified Client Search and AI Growth Results"
      className="flex flex-col justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(11,31,58,0.04),0_10px_30px_-12px_rgba(11,31,58,0.08)] sm:p-7"
    >
      <div>
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <span className="text-[13px] font-semibold tracking-wide text-emerald-700">
            SEO, AEO &amp; GEO Results
          </span>
          <span className="text-xs font-medium text-slate-500">
            WR Builders &amp; Three Stones
          </span>
        </div>

        <div className="mt-4 grid gap-3.5">
          {COMBINED_RESULTS.map((row) => (
            <div key={row.metric} className="grid gap-1.5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="truncate text-[13px] font-semibold text-[#0b1f3a]">
                  {row.metric}
                </span>
                <span className="shrink-0 whitespace-nowrap text-[13px] font-bold text-emerald-700 tabular-nums">
                  {row.value}
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${
                    row.tone === 'emerald' ? 'bg-emerald-600' : 'bg-[#0b1f3a]'
                  }`}
                  style={{ width: `${row.barPercent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 text-xs">
        <span className="font-medium text-slate-500">
          Verified via GSC, GA4 &amp; AI Search Tracking
        </span>
        <button
          type="button"
          onClick={() => onNavigate({ page: 'portfolio' })}
          className="inline-flex cursor-pointer items-center gap-1 font-semibold text-[#0b1f3a] transition-colors hover:text-emerald-700"
        >
          <span>Explore Case Studies</span>
          <ArrowRight size={13} aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}
