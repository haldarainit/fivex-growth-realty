'use client';

import React, { useState } from 'react';
import {
  heroStats,
  searchLocations,
  searchPropertyTypes,
  searchBudgets,
} from '@/data/homeData';

export const HeroSection: React.FC = () => {
  const [location, setLocation] = useState(searchLocations[0]);
  const [propertyType, setPropertyType] = useState(searchPropertyTypes[0]);
  const [budget, setBudget] = useState(searchBudgets[0]);
  const [transactionType, setTransactionType] = useState<'buy' | 'rent'>('buy');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/properties?location=${encodeURIComponent(
      location
    )}&type=${encodeURIComponent(propertyType)}&budget=${encodeURIComponent(budget)}`;
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden pt-28 pb-12">
      {/* Background Image & Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVN_s62XvE1DVTH7KzTCcrQo8gSV66mswAxVm8h-gRiJk_ec_RpesK3Y2y9yjRyNsg485PZYQxkvfoTSmGG6sWqKQxiG6xlIVcq13jysrO1sACo_A0zvhxma74Bx4e5gXNNuzW7hHHpoMKtG-vaIZ5qLKS9wLf3lqffA5G-JLgWSBu-ESfE9KgKk0_PRjV3cPCc8epos9KpqFJaEElw8ffk4o1P6XA4XKW3BRP7MR8O8eQTXC886KvfNpS1_AvcVIuBb8HsJB3AEXN"
          alt="Luxury Real Estate Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/95 via-[#0a192f]/70 to-[#0a192f]/40" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full my-auto">
        <div className="max-w-2xl flex flex-col gap-6 animate-in fade-in slide-in-from-left duration-1000">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2px] bg-secondary" />
            <span className="text-secondary text-xs font-bold uppercase tracking-widest">
              ELITE REAL ESTATE PARTNERS
            </span>
          </div>

          {/* Heading matching exact visual hierarchy from reference */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold leading-[1.1] tracking-tight">
            Find Your Perfect <br />
            Property <br />
            <span className="text-secondary italic font-semibold font-serif">
              with Confidence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-white/80 text-base lg:text-lg leading-relaxed max-w-lg">
            FIVEX GROWTH REALTY PVT LTD helps you discover premium residential, commercial, and investment properties with trust, transparency, and expert guidance.
          </p>

          {/* CTA Buttons matching reference design */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/properties"
              className="bg-secondary text-primary px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-gold transition-all shadow-xl shadow-secondary/20 flex items-center gap-2 group cursor-pointer"
            >
              Explore Properties
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
            <a
              href="/enquire"
              className="border border-white/30 bg-white/5 backdrop-blur-md text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-white/15 transition-all text-center cursor-pointer"
            >
              Book Free Consultation
            </a>
          </div>

          {/* 4 Trust Feature Badges matching reference layout */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 mt-2 border-t border-white/15">
            {heroStats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <span
                  className="material-symbols-outlined text-secondary text-xl flex-shrink-0"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  {stat.icon}
                </span>
                <span className="text-white/80 text-[11px] font-bold uppercase tracking-wider leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Property Search Filter Bar matching reference image layout & gap */}
      <div className="relative z-20 px-margin-desktop max-w-container-max mx-auto w-full mt-10">
        <form
          onSubmit={handleSearch}
          className="glass-card bg-[#0a192f]/75 backdrop-blur-2xl border border-white/15 p-4 rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center gap-4"
        >
          {/* Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 w-full">
            {/* Location Filter */}
            <div className="flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 sm:pr-4">
              <label className="text-[10px] text-white/50 font-bold uppercase tracking-widest">
                LOCATION
              </label>
              <div className="relative">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent text-white border-none p-0 pr-6 focus:ring-0 text-sm font-bold cursor-pointer appearance-none outline-none"
                >
                  {searchLocations.map((loc) => (
                    <option key={loc} value={loc} className="bg-[#0a192f] text-white">
                      {loc}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined text-white/50 text-base absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            {/* Property Type Filter */}
            <div className="flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 sm:pr-4">
              <label className="text-[10px] text-white/50 font-bold uppercase tracking-widest">
                PROPERTY TYPE
              </label>
              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-transparent text-white border-none p-0 pr-6 focus:ring-0 text-sm font-bold cursor-pointer appearance-none outline-none"
                >
                  {searchPropertyTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#0a192f] text-white">
                      {type}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined text-white/50 text-base absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            {/* Budget Filter */}
            <div className="flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 sm:pr-4">
              <label className="text-[10px] text-white/50 font-bold uppercase tracking-widest">
                BUDGET
              </label>
              <div className="relative">
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-transparent text-white border-none p-0 pr-6 focus:ring-0 text-sm font-bold cursor-pointer appearance-none outline-none"
                >
                  {searchBudgets.map((b) => (
                    <option key={b} value={b} className="bg-[#0a192f] text-white">
                      {b}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined text-white/50 text-base absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            {/* Transaction Radio Buttons matching reference image */}
            <div className="flex flex-col gap-1.5 justify-center">
              <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">
                TRANSACTION
              </span>
              <div className="flex items-center gap-5">
                <label className="inline-flex items-center text-white text-xs font-bold cursor-pointer gap-1.5">
                  <input
                    type="radio"
                    name="hero-transaction"
                    checked={transactionType === 'buy'}
                    onChange={() => setTransactionType('buy')}
                    className="accent-secondary w-3.5 h-3.5 cursor-pointer"
                  />
                  <span>Buy</span>
                </label>
                <label className="inline-flex items-center text-white text-xs font-bold cursor-pointer gap-1.5">
                  <input
                    type="radio"
                    name="hero-transaction"
                    checked={transactionType === 'rent'}
                    onChange={() => setTransactionType('rent')}
                    className="accent-secondary w-3.5 h-3.5 cursor-pointer"
                  />
                  <span>Rent</span>
                </label>
              </div>
            </div>
          </div>

          {/* Search Button matching gold color in reference image */}
          <button
            type="submit"
            className="bg-secondary text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gold transition-all w-full lg:w-auto cursor-pointer shadow-lg hover:scale-[1.02] active:scale-95 text-sm font-display tracking-wide whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-lg">search</span> Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
