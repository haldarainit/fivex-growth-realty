'use client';

import React, { useState } from 'react';

export const LocationEmergingBento: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState('Noida Sector 150');
  const [calculatedRoi, setCalculatedRoi] = useState<string | null>(null);

  const handleCalculate = () => {
    setCalculatedRoi('Estimated ROI: 14.8% p.a.');
  };

  return (
    <section className="py-24 px-4 sm:px-8 lg:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16 space-y-2">
        <h2 className="font-display text-4xl text-primary font-bold">
          Emerging Corridors
        </h2>
        <p className="text-on-surface-variant font-body text-base">
          The next frontier of high-value residential and commercial developments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Bento 1: Greater Noida */}
        <div className="md:col-span-2 lg:col-span-2 bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-container transition-colors">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-secondary text-2xl">
                explore
              </span>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                Strategic Edge
              </span>
            </div>
            <h3 className="font-display text-2xl text-primary font-bold mb-4">
              Greater Noida
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              The planned industrial and residential city, now anchored by the upcoming Asia's largest airport in Jewar. Unmatched infrastructure and connectivity.
            </p>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2 text-xs font-bold text-primary">
              <span className="material-symbols-outlined text-green-600 text-lg">
                check_circle
              </span>
              Knowledge Park Hub
            </li>
            <li className="flex items-center gap-2 text-xs font-bold text-primary">
              <span className="material-symbols-outlined text-green-600 text-lg">
                check_circle
              </span>
              Expo Mart Proximity
            </li>
            <li className="flex items-center gap-2 text-xs font-bold text-primary">
              <span className="material-symbols-outlined text-green-600 text-lg">
                check_circle
              </span>
              Yamuna Expressway Access
            </li>
          </ul>
          <button className="w-fit border-b-2 border-primary font-bold text-xs uppercase tracking-wider hover:text-secondary hover:border-secondary transition-all cursor-pointer">
            View Micro-Market Report
          </button>
        </div>

        {/* Bento 2: Delhi NCR Outlook */}
        <div className="bg-primary text-white p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl">
          <span
            className="material-symbols-outlined text-secondary-fixed-dim text-5xl mb-4"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            insights
          </span>
          <h4 className="font-display text-2xl font-bold mb-2">Delhi NCR</h4>
          <p className="text-xs text-white/70 uppercase tracking-wider mb-6">
            Aggregate Market Outlook
          </p>
          <div className="w-full h-1 bg-white/10 rounded-full mb-6">
            <div className="w-3/4 h-full bg-secondary-fixed-dim rounded-full" />
          </div>
          <p className="text-xs font-semibold text-secondary-fixed-dim">
            High Bullish Sentiment for FY 2024-25
          </p>
        </div>

        {/* Bento 3: Industrial Corridors */}
        <div className="bg-secondary-container p-8 rounded-2xl flex flex-col justify-between group cursor-pointer overflow-hidden relative shadow-md">
          <div className="relative z-10">
            <h4 className="font-display text-xl font-bold text-on-secondary-container mb-4">
              Industrial Corridors
            </h4>
            <p className="text-on-secondary-container/80 text-sm leading-relaxed">
              Warehouse and logistics opportunities along major transit points.
            </p>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
            <span className="material-symbols-outlined text-[120px]">factory</span>
          </div>
          <span className="material-symbols-outlined text-on-secondary-container self-end mt-8 group-hover:translate-x-2 transition-transform">
            arrow_forward
          </span>
        </div>

        {/* Bento 4: ROI Calculator */}
        <div className="bg-surface-container-highest p-8 rounded-2xl border border-outline-variant/10 md:col-span-2 lg:col-span-1 flex flex-col justify-between">
          <div>
            <h4 className="font-display text-lg font-bold text-primary mb-4">
              Investment Calculator
            </h4>
            <p className="text-on-surface-variant text-xs mb-6 leading-relaxed">
              Estimate your ROI based on current market appreciation trends in specific sectors.
            </p>
            <div className="space-y-4">
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full bg-white border border-outline-variant/30 rounded p-2.5 text-xs text-primary font-bold outline-none cursor-pointer"
              >
                <option value="Noida Sector 150">Noida Sector 150</option>
                <option value="Greater Noida West">Greater Noida West</option>
                <option value="Dwarka Expressway">Dwarka Expressway</option>
              </select>

              {calculatedRoi && (
                <div className="bg-white p-3 rounded text-xs font-bold text-secondary border border-secondary/30 text-center">
                  {calculatedRoi}
                </div>
              )}
            </div>
          </div>
          <button
            onClick={handleCalculate}
            className="w-full bg-primary text-white py-3 rounded font-bold text-xs tracking-widest hover:bg-secondary transition-colors uppercase cursor-pointer mt-4"
          >
            Calculate ROI
          </button>
        </div>

        {/* Bento 5: Strategic Location Consulting */}
        <div className="md:col-span-3 bg-white p-8 sm:p-12 rounded-2xl border border-outline-variant/10 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex-1">
            <h3 className="font-display text-2xl text-primary font-bold mb-4">
              Strategic Location Consulting
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Not sure where to deploy your capital? Our experts provide bespoke location analysis reports tailored to your risk profile and investment horizon.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-8 py-4 bg-primary text-white rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-secondary transition-colors cursor-pointer text-center whitespace-nowrap">
              Request Free Call
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-bold tracking-widest uppercase text-xs hover:bg-primary hover:text-white transition-colors cursor-pointer text-center whitespace-nowrap">
              Download Market Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationEmergingBento;
