'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import BlogFeaturedPost from '@/components/blog/BlogFeaturedPost';
import BlogFilters from '@/components/blog/BlogFilters';
import BlogCard from '@/components/blog/BlogCard';
import BlogNewsletterBento from '@/components/blog/BlogNewsletterBento';
import { blogPosts } from '@/data/blogData';

const POSTS_PER_PAGE = 4;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  const nonFeaturedPosts = blogPosts.filter((p) => !p.featured);

  const filteredPosts = useMemo(() => {
    return nonFeaturedPosts.filter((post) => {
      const matchesCat =
        activeCategory === 'all' ||
        post.category.toLowerCase().replace(/\s/g, '-') === activeCategory;
      const matchesSearch =
        searchTerm === '' ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const paginatedPosts = filteredPosts.slice(0, page * POSTS_PER_PAGE);
  const hasMore = paginatedPosts.length < filteredPosts.length;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 flex-grow">
        <BlogFeaturedPost />
        <BlogFilters
          activeCategory={activeCategory}
          onCategory={handleCategoryChange}
          onSearch={setSearchTerm}
        />

        <section className="max-w-container-max mx-auto px-4 sm:px-8 lg:px-margin-desktop">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-5xl text-outline-variant mb-4 block">
                article
              </span>
              <p className="text-on-surface-variant font-body text-lg">
                No articles found for this filter.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                {paginatedPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
                <BlogNewsletterBento />
              </div>

              {/* Pagination */}
              <div className="mt-20 flex justify-center items-center gap-3">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container-low transition-colors cursor-pointer disabled:opacity-40"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  {page}
                </button>
                {hasMore && (
                  <button
                    onClick={() => setPage((p) => p + 1)}
                    className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container-low transition-colors cursor-pointer text-sm font-bold"
                  >
                    {page + 1}
                  </button>
                )}
                {hasMore && (
                  <button
                    onClick={() => setPage((p) => p + 1)}
                    className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container-low transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                )}
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
