'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { blogPosts, blogContent } from '@/data/blogData';

export default function BlogDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const post = blogPosts.find((p) => p.id === id);
  const content = blogContent[id];

  const relatedPosts = blogPosts.filter((p) => p.id !== id).slice(0, 3);

  if (!post) {
    return (
      <>
        <Header />
        <main className="pt-32 pb-20 flex-grow min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-400 text-6xl font-bold mb-4">404</p>
            <p className="text-gray-600 mb-6">Article not found.</p>
            <Link href="/blog" className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-secondary transition-colors">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const paragraphs = (content?.body || post.excerpt)
    .split('\n\n')
    .filter(Boolean);

  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20 flex-grow bg-gray-50">
        {/* Hero Image */}
        <div className="relative w-full h-[45vh] sm:h-[55vh] lg:h-[65vh] overflow-hidden">
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-16 max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-secondary text-white px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
                {post.category}
              </span>
              <span className="text-white/60 text-xs">{post.readTime}</span>
              <span className="text-white/60 text-xs">{post.date}</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          {/* Author */}
          {content && (
            <div className="flex items-center gap-4 mb-8 sm:mb-12 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-secondary font-bold text-lg font-display">
                  {content.author.charAt(0)}
                </span>
              </div>
              <div className="min-w-0">
                <p className="font-bold text-gray-900 text-sm">{content.author}</p>
                <p className="text-gray-500 text-xs truncate">{content.authorRole}</p>
              </div>
              <div className="ml-auto flex-shrink-0">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider whitespace-nowrap">{post.date}</span>
              </div>
            </div>
          )}

          {/* Lead excerpt */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 font-body border-l-4 border-secondary pl-5 italic">
            {post.excerpt}
          </p>

          {/* Body paragraphs */}
          <article className="space-y-6">
            {paragraphs.map((para, idx) => {
              // Standalone bold heading (whole paragraph is **text**)
              if (/^\*\*[^*]+\*\*$/.test(para.trim())) {
                return (
                  <h2 key={idx} className="font-display text-xl sm:text-2xl font-bold text-primary mt-10 mb-3">
                    {para.replace(/\*\*/g, '')}
                  </h2>
                );
              }
              // Numbered or bullet list
              if (/^[\d]+\.\s/.test(para) || /^-\s/.test(para)) {
                const lines = para.split('\n').filter(Boolean);
                return (
                  <ul key={idx} className="space-y-3 pl-2">
                    {lines.map((line, li) => (
                      <li key={li} className="text-gray-600 text-sm sm:text-base leading-relaxed flex gap-3">
                        <span className="text-secondary font-bold mt-0.5 flex-shrink-0">→</span>
                        <span dangerouslySetInnerHTML={{
                          __html: line
                            .replace(/^\d+\.\s+/, '')
                            .replace(/^-\s+/, '')
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        }} />
                      </li>
                    ))}
                  </ul>
                );
              }
              // Regular paragraph (may contain inline **bold**)
              return (
                <p key={idx}
                   className="text-gray-600 text-sm sm:text-base leading-relaxed"
                   dangerouslySetInnerHTML={{
                     __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
                   }}
                />
              );
            })}
          </article>

          {/* Tags */}
          {content?.tags && (
            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Topics</p>
              <div className="flex flex-wrap gap-2">
                {content.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 p-6 sm:p-8 bg-primary rounded-3xl text-white text-center">
            <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Expert Consultation</p>
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">
              Ready to Invest Based on These Insights?
            </h3>
            <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
              Speak with our senior advisors to translate market intelligence into a bespoke investment strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/enquire"
                className="bg-secondary text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Book Consultation
              </Link>
              <Link
                href="/properties"
                className="border border-white/30 text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Browse Properties
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-primary mb-6">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                href={`/blog/${related.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">{related.category}</span>
                  <h4 className="font-bold text-sm text-gray-900 mt-1 line-clamp-2 group-hover:text-secondary transition-colors">
                    {related.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
