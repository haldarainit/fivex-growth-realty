import React from 'react';
import { aboutStatsMetrics } from '@/data/aboutData';

export const StatsBar: React.FC = () => {
  return (
    <section className="relative z-20 -mt-16 px-6 md:px-16 max-w-container-max mx-auto">
      <div className="glass-card bg-white/90 backdrop-blur-xl border border-white/40 rounded-2xl p-8 md:p-12 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-8">
        {aboutStatsMetrics.map((metric, idx) => (
          <div
            key={idx}
            className={`text-center ${
              idx < aboutStatsMetrics.length - 1
                ? 'md:border-r border-outline-variant/30'
                : ''
            }`}
          >
            <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
              {metric.value}
              {metric.suffix}
            </div>
            <div className="text-on-surface-variant font-body text-xs uppercase tracking-wider font-semibold">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
