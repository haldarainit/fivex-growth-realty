import React from 'react';
import { trustMetrics } from '@/data/testimonialsData';

export const TestimonialsHero: React.FC = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-margin-desktop max-w-container-max mx-auto mb-20 text-center">
      <div className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed-variant px-4 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-widest">
        <span
          className="material-symbols-outlined text-sm"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          verified
        </span>
        Client Voices
      </div>

      <h1 className="font-display text-4xl lg:text-6xl text-primary font-bold mb-6 max-w-3xl mx-auto leading-tight">
        Voices of Trust, Stories of Success
      </h1>
      <p className="font-body text-on-surface-variant text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
        Discover why over 2,500 high-net-worth investors and families trust FIVEX Growth Realty with their architectural legacies and investment portfolios.
      </p>

      {/* Trust Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {trustMetrics.map((metric, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-outline-variant/20 flex flex-col items-center"
          >
            <span className="text-secondary font-display text-5xl font-bold mb-2">
              {metric.value}
            </span>
            {idx === 0 && (
              <div className="flex gap-0.5 text-secondary mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-xl"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    star
                  </span>
                ))}
              </div>
            )}
            {metric.icon && idx !== 0 && (
              <span className="material-symbols-outlined text-secondary mb-2 text-2xl">
                {metric.icon}
              </span>
            )}
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsHero;
