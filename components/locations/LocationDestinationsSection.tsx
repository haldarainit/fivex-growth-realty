import React from 'react';
import Link from 'next/link';
import { locationDestinations } from '@/data/locationsData';

export const LocationDestinationsSection: React.FC = () => {
  return (
    <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl text-primary font-bold mb-4">
            Investment Destinations
          </h2>
          <p className="text-on-surface-variant font-body text-base leading-relaxed">
            We've curated the most promising micro-markets based on upcoming infrastructure connectivity, policy support, and historical yield performance.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            aria-label="Previous destination"
            className="p-3 border border-outline rounded-full hover:bg-surface-container transition-colors cursor-pointer flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <button
            aria-label="Next destination"
            className="p-3 bg-primary text-white rounded-full hover:bg-secondary transition-colors cursor-pointer flex items-center justify-center shadow-md"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {locationDestinations.map((loc) => (
          <div
            key={loc.id}
            className="group relative overflow-hidden rounded-xl bg-white shadow-sm border border-outline-variant/20 hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={loc.image}
                  alt={loc.imageAlt || loc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 flex gap-2 flex-wrap">
                  {loc.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className={`${badge.style} px-3 py-1 rounded text-xs font-bold uppercase tracking-wider`}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-6 gap-4">
                  <div>
                    <h3 className="font-display text-3xl font-bold text-primary mb-1">
                      {loc.title}
                    </h3>
                    <p className="text-on-surface-variant font-body text-sm">
                      {loc.sectorsText}
                    </p>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest">
                      Inventory
                    </p>
                    <p className="font-bold text-primary text-base font-display">
                      {loc.inventoryCount}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {loc.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span
                        className="material-symbols-outlined text-secondary"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                      >
                        {h.icon}
                      </span>
                      <div>
                        <p className="text-xs font-bold text-primary">{h.title}</p>
                        <p className="text-[12px] text-on-surface-variant">{h.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-8 pb-8 border-t border-outline-variant/10 pt-6 flex items-center justify-between">
              <span className="text-sm font-bold text-primary">{loc.growthPotential}</span>
              <Link
                href="/properties"
                className="flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all text-sm uppercase tracking-wider"
              >
                Explore Properties
                <span className="material-symbols-outlined">trending_flat</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationDestinationsSection;
