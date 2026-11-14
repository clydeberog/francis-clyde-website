import { ClientSearchMetric } from '../types/portfolio';

interface WrBuildersMetricsChartProps {
  metrics: ClientSearchMetric[];
}

export function WrBuildersMetricsChart({ metrics }: WrBuildersMetricsChartProps) {
  return (
    <div
      className="mt-5 grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-3"
      aria-label="Client Search & Traffic Performance Metrics"
    >
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="flex flex-col gap-1 rounded-lg border border-slate-200 bg-white px-3.5 py-3"
        >
          <span className="text-xs font-medium text-slate-500">{metric.label}</span>
          <span className="text-lg font-bold tracking-tight text-emerald-700 tabular-nums">
            {metric.delta}
          </span>
        </div>
      ))}
    </div>
  );
}
