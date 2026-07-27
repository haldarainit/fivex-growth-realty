'use client';

import React, { useState } from 'react';
import { blogCategories } from '@/data/blogData';

interface BlogFiltersProps {
  activeCategory: string;
  onCategory: (id: string) => void;
  onSearch: (term: string) => void;
}

export const BlogFilters: React.FC<BlogFiltersProps> = ({
  activeCategory,
  onCategory,
  onSearch,
}) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <section className="max-w-container-max mx-auto px-margin-desktop mb-12">
      <div className="flex flex-wrap items-center gap-3 border-b border-outline-variant/20 pb-6">
        {blogCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategory(cat.id)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-primary text-white shadow-md'
                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            {cat.label}
          </button>
        ))}

        {/* Search (desktop) */}
        <div className="ml-auto hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant/10 gap-2">
          <span className="material-symbols-outlined text-outline text-lg">search</span>
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search insights..."
            className="bg-transparent border-none focus:ring-0 text-sm w-48 outline-none text-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogFilters;
