import React from 'react';
import { blogPosts } from '@/data/blogData';

export const BlogFeaturedPost: React.FC = () => {
  const featured = blogPosts.find((p) => p.featured);
  if (!featured) return null;

  return (
    <section className="max-w-container-max mx-auto px-4 sm:px-8 mb-12 sm:mb-16 lg:mb-20 overflow-x-hidden">
      <div className="mb-8 sm:mb-10">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl font-extrabold text-primary mb-3">
          Market Insights
        </h1>
        <p className="text-gray-600 max-w-2xl font-body text-sm sm:text-base lg:text-lg leading-relaxed">
          Expert analysis, investment strategies, and the latest trends in high-end real estate and luxury living.
        </p>
      </div>

      <div className="relative group overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 flex flex-col md:flex-row h-auto">
        {/* Image Side */}
        <div className="md:w-7/12 relative overflow-hidden h-60 sm:h-72 md:h-auto min-h-[260px]">
          <img
            src={featured.image}
            alt={featured.imageAlt || featured.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {featured.featuredBadge && (
            <div className="absolute top-4 left-4">
              <span className="bg-secondary text-primary px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-extrabold tracking-widest uppercase shadow-md">
                {featured.featuredBadge}
              </span>
            </div>
          )}
        </div>

        {/* Text Side */}
        <div className="md:w-5/12 p-6 sm:p-8 lg:p-12 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center gap-3 text-gray-400 mb-4 text-xs font-bold uppercase tracking-wider">
              <span>{featured.category}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>{featured.date}</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold mb-4 leading-snug hover:text-secondary transition-colors cursor-pointer text-gray-900">
              {featured.title}
            </h2>
            <p className="text-gray-600 mb-6 font-body text-xs sm:text-sm line-clamp-3 leading-relaxed">
              {featured.excerpt}
            </p>
          </div>
          <div>
            <a
              href={`/blog/${featured.id}`}
              className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all text-xs uppercase tracking-wider cursor-pointer"
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
