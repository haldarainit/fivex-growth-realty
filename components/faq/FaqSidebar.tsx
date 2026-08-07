import React from 'react';
import Link from 'next/link';
import { faqCategories } from '@/data/faqData';

export const FaqSidebar: React.FC = () => {
  const categories = faqCategories.filter((c) => c.id !== 'all');

  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-32 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-outline-variant/10 shadow-sm">
        <h3 className="font-display text-xl font-bold text-primary mb-6">Categories</h3>
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat.id}>
              <a
                href={`#${cat.id}`}
                className="flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors text-sm font-semibold p-2 rounded-lg hover:bg-surface-container-low"
              >
                <span className="material-symbols-outlined text-lg text-secondary">{cat.icon}</span>
                {cat.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-6 border-t border-outline-variant/10">
          <p className="text-xs text-on-surface-variant mb-4 leading-relaxed">
            Can't find what you're looking for?
          </p>
          <Link
            href="/#contact"
            className="w-full bg-primary text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-secondary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">call</span>
            Talk to an Advisor
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default FaqSidebar;
