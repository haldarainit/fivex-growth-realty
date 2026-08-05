'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { successStories } from '@/data/testimonialsData';

const StarRating: React.FC<{ stars: number }> = ({ stars }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`material-symbols-outlined text-base ${i < stars ? 'text-secondary' : 'text-gray-200'}`}
        style={{ fontVariationSettings: '"FILL" 1' }}
      >
        star
      </span>
    ))}
  </div>
);

const TestimonialCard: React.FC<{ story: typeof successStories[0] }> = ({ story }) => (
  <div className="w-[340px] sm:w-[400px] flex-shrink-0 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col justify-between mx-3">
    <div>
      {/* Rating */}
      <StarRating stars={story.stars} />

      {/* Quote */}
      <blockquote className="mt-4">
        {story.badge && (
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-2.5 py-1 rounded-full mb-3">
            {story.badge}
          </span>
        )}
        <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-semibold line-clamp-4">
          {story.quoteHeadline}
        </p>
        {story.body && (
          <p className="text-gray-500 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">{story.body}</p>
        )}
      </blockquote>
    </div>

    {/* Author */}
    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100">
      {story.image ? (
        <img
          src={story.image}
          alt={story.author}
          className="w-11 h-11 rounded-full object-cover border-2 border-secondary/20 flex-shrink-0"
        />
      ) : (
        <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center flex-shrink-0 border-2 border-secondary/20">
          <span className="text-secondary font-bold text-sm">{story.initials}</span>
        </div>
      )}
      <div>
        <p className="font-display font-bold text-sm text-primary">{story.author}</p>
        <p className="text-xs text-gray-400">{story.role}</p>
      </div>
      <div className="ml-auto">
        <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
          <span
            className="material-symbols-outlined text-secondary text-base"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            format_quote
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default function TestimonialsSlider() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  // Doubled list for seamless continuous infinite marquee
  const doubledStories = [...successStories, ...successStories];

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-surface-container-low overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 mb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-secondary text-xs font-extrabold uppercase tracking-widest mb-3">
              <span className="w-8 h-px bg-secondary" />
              Client Stories
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-gray-500 text-base max-w-xl leading-relaxed">
              Real experiences from investors and homebuyers who trusted FIVEX with their most important real estate decisions.
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <div className="text-right">
              <p className="font-display font-extrabold text-3xl text-primary leading-none">4.9/5</p>
              <StarRating stars={5} />
              <p className="text-xs text-gray-400 mt-1">Google Verified Rating</p>
            </div>
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 bg-primary text-white hover:bg-secondary hover:text-white px-5 py-3 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all shadow-md"
            >
              View All Testimonials
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Continuous Automatic Marquee Slider (Always moves left-to-right) */}
      <div className="marquee-wrapper">
        <div className="marquee-track" style={{ animationDuration: '40s' }}>
          {doubledStories.map((story, i) => (
            <TestimonialCard key={`${story.id}-${i}`} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
