'use client';

import React, { useState } from 'react';
import { faqCategories } from '@/data/faqData';

interface FaqHeroProps {
  onSearch: (term: string) => void;
  activeCategory: string;
  onCategory: (cat: string) => void;
}

export const FaqHero: React.FC<FaqHeroProps> = ({ onSearch, activeCategory, onCategory }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <>
      <section className="px-margin-desktop max-w-container-max mx-auto mb-12 text-center">
        <span className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
          Help Center
        </span>
        <h1 className="font-display text-4xl lg:text-6xl mb-6 text-primary font-bold leading-tight">
          Frequently Asked <br /> Questions
        </h1>
        <p className="font-body text-on-surface-variant text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Transparent answers to your most pressing real estate queries. Explore our knowledge base to make informed decisions.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative">
          <input
            id="faqSearch"
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Search questions (e.g. 'down payment', 'ROI')…"
            className="w-full pl-12 pr-4 py-4 rounded-xl border-none bg-surface-container shadow-sm focus:ring-2 focus:ring-secondary/30 transition-all outline-none text-sm font-body"
          />
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">
            search
          </span>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-margin-desktop max-w-container-max mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-3 border-b border-outline-variant/30 pb-4">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-md'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default FaqHero;
