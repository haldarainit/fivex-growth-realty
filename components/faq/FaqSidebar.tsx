import React from 'react';
import Link from 'next/link';

export const FaqSidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-32 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-outline-variant/10 shadow-sm">
        <h3 className="font-display text-xl font-bold text-primary mb-6">Quick Links</h3>
        <ul className="space-y-4">
          <li>
            <a
              href="#buying"
              className="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors text-sm font-semibold"
            >
              <span className="material-symbols-outlined text-xl">home</span>
              Buying Process
            </a>
          </li>
          <li>
            <a
              href="#investment"
              className="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors text-sm font-semibold"
            >
              <span className="material-symbols-outlined text-xl">trending_up</span>
              Investment Strategy
            </a>
          </li>
          <li>
            <a
              href="#documentation"
              className="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors text-sm font-semibold"
            >
              <span className="material-symbols-outlined text-xl">description</span>
              Documentation
            </a>
          </li>
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
