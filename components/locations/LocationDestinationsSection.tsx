import React from 'react';
import Link from 'next/link';
import { locationDestinations } from '@/data/locationsData';

export const LocationDestinationsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-8 max-w-container-max mx-auto overflow-x-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-primary font-bold mb-2">
            Investment Destinations
          </h2>
          <p className="text-gray-600 font-body text-xs sm:text-sm md:text-base leading-relaxed">
            We've curated the most promising micro-markets based on upcoming infrastructure connectivity, policy support, and historical yield performance.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            aria-label="Previous destination"
            className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors cursor-pointer flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-primary text-lg">arrow_back</span>
          </button>
          <button
            aria-label="Next destination"
            className="p-3 bg-primary text-white rounded-full hover:bg-secondary transition-colors cursor-pointer flex items-center justify-center shadow-md"
          >
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {locationDestinations.map((loc) => (
          <div
            key={loc.id}
            className="group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={loc.image}
                  alt={loc.imageAlt || loc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap max-w-[85%]">
                  {loc.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm"
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <div className="flex flex-row justify-between items-start mb-4 gap-2">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-1">
                      {loc.title}
                    </h3>
                    <p className="text-gray-500 font-body text-xs sm:text-sm">
                      {loc.sectorsText}
                    </p>
                  </div>
                  <div className="text-right whitespace-nowrap flex-shrink-0">
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">
                      Inventory
                    </p>
                    <p className="font-extrabold text-primary text-sm sm:text-base font-display">
                      {loc.inventoryCount}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 pt-2 border-t border-gray-100">
                  {loc.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span
                        className="material-symbols-outlined text-secondary text-base mt-0.5 flex-shrink-0"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                      >
                        {h.icon}
                      </span>
                      <div>
                        <p className="text-xs font-bold text-primary">{h.title}</p>
                        <p className="text-[11px] text-gray-500">{h.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-5 sm:px-7 pb-6 border-t border-gray-100 pt-4 flex items-center justify-between gap-2">
              <span className="text-xs sm:text-sm font-bold text-primary truncate">{loc.growthPotential}</span>
              <Link
                href="/properties"
                className="flex items-center gap-1 text-secondary font-bold hover:gap-2 transition-all text-xs uppercase tracking-wider whitespace-nowrap flex-shrink-0"
              >
                Explore
                <span className="material-symbols-outlined text-base">trending_flat</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationDestinationsSection;
