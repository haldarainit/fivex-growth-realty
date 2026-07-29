'use client';

import React from 'react';
import Link from 'next/link';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-28 sm:scroll-mt-32 py-20 sm:py-24 bg-gradient-to-b from-white via-surface-container-low/30 to-white relative overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 relative">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-secondary font-extrabold text-xs uppercase tracking-[0.25em] bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Our Corporate Legacy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary font-extrabold tracking-tight leading-tight">
            Redefining Luxury Real Estate Consultancy <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
              Across India
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            Founded on the pillars of transparency, market foresight, and 42-point property verification, FIVEX Growth Realty curates world-class real estate portfolios for buyers and investors.
          </p>
        </div>

        {/* Grid Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Visual Banner (5 cols) */}
          <div className="lg:col-span-5 relative group rounded-3xl overflow-hidden shadow-2xl border border-gray-100 min-h-[420px] flex flex-col justify-end">
            <img
              src="/aboutus.jpg"
              alt="FiveX Growth Realty Advisory"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />

            <div className="relative p-7 text-white space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-secondary bg-primary/80 px-3 py-1 rounded-full border border-secondary/30 backdrop-blur-md inline-block">
                Established 2010
              </span>
              <h3 className="font-display font-extrabold text-2xl text-white">
                ₹2,500 Cr+ Assets Managed
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-medium">
                Pioneering institutional real estate advisory across Delhi NCR, Gurugram, Noida, Mumbai, and high-growth airport corridors.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-bold text-secondary">
                <span className="flex items-center gap-1">✓ 1,200+ HNIs Served</span>
                <span className="flex items-center gap-1">✓ 42-Point RERA Check</span>
              </div>
            </div>
          </div>

          {/* Right Content Column: Mission & Vision Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">

            {/* Mission & Vision Side-by-Side Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Mission Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
                <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center mb-5 border border-secondary/30">
                  <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                    verified_user
                  </span>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary block mb-1">
                  OUR MISSION
                </span>
                <h4 className="font-display font-bold text-xl text-primary mb-3">
                  Uncompromising Value
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  To protect every rupee of client investment through rigorous due diligence, transparent advisory, and end-to-end portfolio optimization from consultation to handover.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-primary rounded-3xl p-6 sm:p-7 text-white shadow-xl hover:shadow-2xl transition-all duration-300 relative group overflow-hidden border border-secondary/20">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center mb-5 border border-secondary/30">
                  <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                    visibility
                  </span>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary block mb-1">
                  OUR VISION
                </span>
                <h4 className="font-display font-bold text-xl text-white mb-3">
                  National Leadership
                </h4>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  To be India&apos;s most trusted luxury real estate consultancy — managing ₹10,000 Cr+ portfolios across 15 premier Indian economic corridors by 2030.
                </p>
              </div>

            </div>

            {/* Core Values Strip */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md">
              <h4 className="font-display font-extrabold text-sm text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Why Clients Trust FIVEX
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: 'gavel', title: 'Legal Integrity', desc: '100% RERA compliant with 0 litigation track record.' },
                  { icon: 'insights', title: 'Market Intelligence', desc: 'Data-backed price trends and growth forecasts.' },
                  { icon: 'handshake', title: 'Concierge Advisory', desc: 'Dedicated advisor for lifecycle assistance.' },
                ].map((item) => (
                  <div key={item.title} className="p-3 rounded-2xl bg-surface-container-low/50 border border-gray-100">
                    <span className="material-symbols-outlined text-secondary text-xl mb-1 block">
                      {item.icon}
                    </span>
                    <h5 className="font-bold text-xs text-primary">{item.title}</h5>
                    <p className="text-[11px] text-gray-500 mt-1 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-2xl text-xs font-extrabold uppercase tracking-wider hover:bg-secondary hover:text-primary transition-all shadow-lg cursor-pointer"
              >
                Learn More About Our Journey
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <Link
                href="/about#mission-vision"
                className="text-xs font-extrabold text-primary hover:text-secondary flex items-center gap-1 transition-colors"
              >
                Explore Full Mission &amp; Vision →
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
