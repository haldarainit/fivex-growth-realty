import React from 'react';
import { locationOverviewStats } from '@/data/locationsData';

export const LocationMarketStats: React.FC = () => {
  return (
    <section className="bg-surface-container-lowest -mt-16 relative z-20 shadow-xl rounded-t-3xl border-x border-t border-outline-variant/10">
      <div className="px-4 sm:px-8 lg:px-margin-desktop max-w-container-max mx-auto py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {locationOverviewStats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center px-4 ${
                idx < locationOverviewStats.length - 1
                  ? 'md:border-r border-outline-variant/30'
                  : ''
              }`}
            >
              <p className="text-secondary font-bold font-display text-3xl lg:text-4xl mb-1">
                {stat.value}
              </p>
              <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationMarketStats;
