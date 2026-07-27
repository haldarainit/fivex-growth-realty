'use client';

import React, { useState } from 'react';
import { FaqItem, FaqCategory } from '@/types';

interface FaqAccordionSectionProps {
  category: FaqCategory;
  items: FaqItem[];
}

const AccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-outline-variant/20 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-body text-base text-primary group-hover:text-secondary transition-colors pr-4 font-semibold">
          {item.question}
        </span>
        <span
          className={`material-symbols-outlined text-outline transition-transform duration-300 flex-shrink-0 ${open ? 'rotate-180' : ''}`}
        >
          expand_more
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-on-surface-variant text-sm leading-relaxed font-body pr-8">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export const FaqAccordionSection: React.FC<FaqAccordionSectionProps> = ({
  category,
  items,
}) => {
  if (items.length === 0) return null;

  return (
    <div id={category.id}>
      <h2 className="font-display text-2xl text-primary font-bold mb-6 flex items-center gap-3">
        <span className="p-2 bg-secondary/10 rounded-lg">
          <span className="material-symbols-outlined text-secondary text-xl">
            {category.icon}
          </span>
        </span>
        {category.label}
      </h2>
      <div className="space-y-1 mb-12">
        {items.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FaqAccordionSection;
