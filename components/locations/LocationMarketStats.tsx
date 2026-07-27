import React from 'react';
import { locationOverviewStats } from '@/data/locationsData';

export const LocationMarketStats: React.FC = () => {
  return (
    <section className="bg-white relative z-20 shadow-xl border-b border-gray-100">
      <div className="px-4 sm:px-8 max-w-container-max mx-auto py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {locationOverviewStats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center px-4 py-4 sm:py-0 ${
                idx < locationOverviewStats.length - 1
                  ? 'md:border-r border-gray-200'
                  : ''
              }`}
            >
              <p className="text-secondary font-bold font-display text-2xl sm:text-3xl lg:text-4xl mb-1 break-words">
                {stat.value}
              </p>
              <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider leading-tight">
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
