'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import FaqHero from '@/components/faq/FaqHero';
import FaqSidebar from '@/components/faq/FaqSidebar';
import FaqAccordionSection from '@/components/faq/FaqAccordionSection';
import FaqStillNeedHelp from '@/components/faq/FaqStillNeedHelp';
import { faqItems, faqCategories } from '@/data/faqData';

export default function FaqPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = useMemo(() => {
    return faqItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        searchTerm === '' ||
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  // Non-'all' categories to render sections for
  const categoryGroups = faqCategories.filter((c) => c.id !== 'all');

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 flex-grow">
        <FaqHero
          onSearch={setSearchTerm}
          activeCategory={activeCategory}
          onCategory={setActiveCategory}
        />

        <section className="px-4 sm:px-8 lg:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-gutter">
          <FaqSidebar />

          <div className="lg:col-span-9">
            {filteredItems.length === 0 ? (
              <div className="text-center py-20">
                <span className="material-symbols-outlined text-5xl text-outline-variant mb-4 block">
                  search_off
                </span>
                <p className="text-on-surface-variant font-body text-lg">
                  No matching questions found.
                </p>
                <p className="text-sm text-on-surface-variant mt-2">
                  Try a different search term or browse all categories.
                </p>
              </div>
            ) : (
              categoryGroups.map((cat) => {
                const items = filteredItems.filter((i) => i.category === cat.id);
                return (
                  <FaqAccordionSection key={cat.id} category={cat} items={items} />
                );
              })
            )}
          </div>
        </section>

        <FaqStillNeedHelp />
      </main>
      <Footer />
    </>
  );
}
