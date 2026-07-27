'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVN_s62XvE1DVTH7KzTCcrQo8gSV66mswAxVm8h-gRiJk_ec_RpesK3Y2y9yjRyNsg485PZYQxkvfoTSmGG6sWqKQxiG6xlIVcq13jysrO1sACo_A0zvhxma74Bx4e5gXNNuzW7hHHpoMKtG-vaIZ5qLKS9wLf3lqffA5G-JLgWSBu-ESfE9KgKk0_PRjV3cPCc8epos9KpqFJaEElw8ffk4o1P6XA4XKW3BRP7MR8O8eQTXC886KvfNpS1_AvcVIuBb8HsJB3AEXN"
          alt="Luxury Real Estate Background"
          className="w-full h-full object-cover object-center scale-105 md:scale-100"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(197,160,89,0.20),transparent_35%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_28%)]" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16 max-w-[1280px] mx-auto w-full pt-24 sm:pt-28 pb-6 sm:pb-8">
        <div className="max-w-2xl flex flex-col gap-4 sm:gap-6">
          <div className="flex items-center gap-3 hero-fade-up">
            <span className="w-8 sm:w-10 h-[2px] bg-secondary flex-shrink-0" />
            <span className="text-secondary text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              ELITE REAL ESTATE PARTNERS
            </span>
          </div>

          <h1 className="hero-fade-up-delay-1 font-display text-[2.1rem] leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-tight max-w-xl">
            Find Your Perfect Property{' '}
            <span className="block text-secondary italic font-semibold font-serif">
              with Confidence
            </span>
          </h1>

          <p className="hero-fade-up-delay-2 font-body text-white/78 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
            FIVEX GROWTH REALTY PVT LTD helps you discover premium residential, commercial, and investment properties with trust, transparency, and expert guidance.
          </p>

          <div className="hero-fade-up-delay-2 flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-3 sm:gap-4 pt-1">
            <Link
              href="/properties"
              className="bg-secondary text-primary px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-sm hover:bg-gold transition-all shadow-xl shadow-secondary/20 flex items-center gap-2 group cursor-pointer w-full xs:w-auto justify-center"
            >
              Explore Properties
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
            <Link
              href="/enquire"
              className="border border-white/20 bg-white/8 backdrop-blur-xl text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-sm hover:bg-white/14 transition-all text-center cursor-pointer w-full xs:w-auto justify-center flex"
            >
              Book Free Consultation
            </Link>
          </div>

          <div className="hero-fade-up-delay-3 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-5 mt-1 border-t border-white/15">
            {heroStats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-secondary text-lg sm:text-xl flex-shrink-0"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  {stat.icon}
                </span>
                <span className="text-white/80 text-[10px] sm:text-[11px] font-bold uppercase tracking-wide leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full px-4 sm:px-8 lg:px-16 max-w-[1280px] mx-auto pb-6 sm:pb-10">
        <form
          onSubmit={handleSearch}
          className="glass-card bg-primary/40 p-4 sm:p-5 md:p-6 rounded-3xl shadow-2xl flex flex-col lg:flex-row items-stretch gap-4 sm:gap-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 flex-1">
            <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 border border-white/8 px-4 py-3 transition-all hover:bg-white/8">
              <label className="text-[10px] text-white/50 font-bold uppercase tracking-widest">
                LOCATION
              </label>
              <div className="relative">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent text-white border-none p-0 pr-5 focus:ring-0 text-sm font-bold cursor-pointer appearance-none outline-none"
                >
                  {searchLocations.map((loc) => (
                    <option key={loc} value={loc} className="bg-[#0a192f] text-white">
                      {loc}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined text-white/40 text-base absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 border border-white/8 px-4 py-3 transition-all hover:bg-white/8">
              <label className="text-[10px] text-white/50 font-bold uppercase tracking-widest">
                PROPERTY TYPE
              </label>
              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-transparent text-white border-none p-0 pr-5 focus:ring-0 text-sm font-bold cursor-pointer appearance-none outline-none"
                >
                  {searchPropertyTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#0a192f] text-white">
                      {type}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined text-white/40 text-base absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 border border-white/8 px-4 py-3 transition-all hover:bg-white/8">
              <label className="text-[10px] text-white/50 font-bold uppercase tracking-widest">
                BUDGET
              </label>
              <div className="relative">
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-transparent text-white border-none p-0 pr-5 focus:ring-0 text-sm font-bold cursor-pointer appearance-none outline-none"
                >
                  {searchBudgets.map((b) => (
                    <option key={b} value={b} className="bg-[#0a192f] text-white">
                      {b}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined text-white/40 text-base absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 rounded-2xl bg-white/5 border border-white/8 px-4 py-3 transition-all hover:bg-white/8">
              <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">
                TRANSACTION
              </span>
              <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
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

          <button
            type="submit"
            className="bg-secondary text-primary px-6 sm:px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gold transition-all w-full lg:w-auto cursor-pointer shadow-lg active:scale-95 text-sm tracking-wide whitespace-nowrap lg:self-end"
          >
            <span className="material-symbols-outlined text-lg">search</span>
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
