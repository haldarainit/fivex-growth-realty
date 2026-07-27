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
    console.log({ location, propertyType, budget, transactionType });
  };

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVN_s62XvE1DVTH7KzTCcrQo8gSV66mswAxVm8h-gRiJk_ec_RpesK3Y2y9yjRyNsg485PZYQxkvfoTSmGG6sWqKQxiG6xlIVcq13jysrO1sACo_A0zvhxma74Bx4e5gXNNuzW7hHHpoMKtG-vaIZ5qLKS9wLf3lqffA5G-JLgWSBu-ESfE9KgKk0_PRjV3cPCc8epos9KpqFJaEElw8ffk4o1P6XA4XKW3BRP7MR8O8eQTXC886KvfNpS1_AvcVIuBb8HsJB3AEXN"
          alt="Luxury Real Estate Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-16 px-margin-desktop max-w-container-max mx-auto w-full items-center pt-28 pb-32">
        <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-left duration-1000">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1px] bg-secondary" />
              <span className="text-secondary text-sm font-bold uppercase tracking-widest">
                Elite Real Estate Partners
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-6xl text-white font-bold leading-[1.1] tracking-tight">
              Find Your Perfect Property <br />
              <span className="text-secondary italic font-medium">with Confidence</span>
            </h1>
            <p className="font-body text-white/70 text-lg max-w-xl leading-relaxed">
              FIVEX GROWTH REALTY PVT LTD helps you discover premium residential, commercial, and investment properties with trust, transparency, and expert guidance.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <a
              href="#properties"
              className="bg-gold text-primary px-10 py-5 rounded-lg font-bold hover:brightness-110 transition-all shadow-xl shadow-secondary/20 flex items-center gap-3 group hover:bg-secondary"
            >
              Explore Properties
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
            <a
              href="#contact"
              className="border border-white/30 text-white px-10 py-5 rounded-lg font-bold hover:bg-white/5 transition-all backdrop-blur-sm text-center"
            >
              Book Free Consultation
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/10">
            {heroStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  {stat.icon}
                </span>
                <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Property Search Filter Bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-margin-mobile z-20">
        <form
          onSubmit={handleSearch}
          className="glass-card p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 items-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 flex-grow w-full gap-1">
            {/* Location Select */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">
                Location
              </p>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-white border-none p-0 focus:ring-0 text-sm font-semibold cursor-pointer"
              >
                {searchLocations.map((loc) => (
                  <option key={loc} value={loc} className="text-primary">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type Select */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">
                Property Type
              </p>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full bg-transparent text-white border-none p-0 focus:ring-0 text-sm font-semibold cursor-pointer"
              >
                {searchPropertyTypes.map((type) => (
                  <option key={type} value={type} className="text-primary">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Select */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r border-white/10">
              <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">
                Budget
              </p>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-transparent text-white border-none p-0 focus:ring-0 text-sm font-semibold cursor-pointer"
              >
                {searchBudgets.map((b) => (
                  <option key={b} value={b} className="text-primary">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Transaction Type Radio */}
            <div className="px-6 py-3">
              <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">
                Transaction
              </p>
              <div className="flex gap-4">
                <label className="inline-flex items-center text-white text-xs font-semibold cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    checked={transactionType === 'buy'}
                    onChange={() => setTransactionType('buy')}
                    className="text-secondary focus:ring-0"
                  />
                  <span className="ml-2">Buy</span>
                </label>
                <label className="inline-flex items-center text-white text-xs font-semibold cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    checked={transactionType === 'rent'}
                    onChange={() => setTransactionType('rent')}
                    className="text-secondary focus:ring-0"
                  />
                  <span className="ml-2">Rent</span>
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-gold text-primary h-full px-12 py-5 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all w-full md:w-auto hover:bg-secondary cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">search</span> Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
