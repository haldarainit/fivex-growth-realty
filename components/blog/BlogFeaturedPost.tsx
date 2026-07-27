import React from 'react';
import { blogPosts } from '@/data/blogData';

export const BlogFeaturedPost: React.FC = () => {
  const featured = blogPosts.find((p) => p.featured);
  if (!featured) return null;

  return (
    <section className="max-w-container-max mx-auto px-4 sm:px-8 lg:px-margin-desktop mb-20">
      <div className="mb-10">
        <h1 className="font-display text-4xl lg:text-6xl font-bold text-primary mb-4">
          Market Insights
        </h1>
        <p className="text-on-surface-variant max-w-2xl font-body text-lg leading-relaxed">
          Expert analysis, investment strategies, and the latest trends in high-end real estate and luxury living.
        </p>
      </div>

      <div className="relative group overflow-hidden rounded-xl bg-white shadow-md border border-outline-variant/10 flex flex-col md:flex-row h-auto md:h-[500px]">
        {/* Image Side */}
        <div className="md:w-2/3 relative overflow-hidden h-64 md:h-full">
          <img
            src={featured.image}
            alt={featured.imageAlt || featured.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {featured.featuredBadge && (
            <div className="absolute top-6 left-6">
              <span className="bg-secondary-fixed text-on-secondary-fixed px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                {featured.featuredBadge}
              </span>
            </div>
          )}
        </div>

        {/* Text Side */}
        <div className="md:w-1/3 p-8 sm:p-12 flex flex-col justify-center bg-white">
          <div className="flex items-center gap-4 text-on-surface-variant mb-6 text-xs font-bold uppercase tracking-wider">
            <span>{featured.category}</span>
            <span className="w-1 h-1 bg-outline-variant rounded-full" />
            <span>{featured.date}</span>
          </div>
          <h2 className="font-display text-2xl font-bold mb-6 leading-tight hover:text-secondary transition-colors cursor-pointer">
            {featured.title}
          </h2>
          <p className="text-on-surface-variant mb-8 font-body text-base line-clamp-3 leading-relaxed">
            {featured.excerpt}
          </p>
          <div className="mt-auto">
            <a
              href={`/blog/${featured.id}`}
              className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all group/btn text-xs uppercase tracking-wider"
            >
              Read Article
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFeaturedPost;
