import React from 'react';
import { successStories } from '@/data/testimonialsData';
import { SuccessStory } from '@/types';

const StarRow: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex text-secondary gap-0.5">
    {Array.from({ length: Math.floor(count) }).map((_, i) => (
      <span
        key={i}
        className="material-symbols-outlined text-lg"
        style={{ fontVariationSettings: '"FILL" 1' }}
      >
        star
      </span>
    ))}
    {count % 1 !== 0 && (
      <span
        className="material-symbols-outlined text-lg"
        style={{ fontVariationSettings: '"FILL" 1' }}
      >
        star_half
      </span>
    )}
  </div>
);

const FeaturedCard: React.FC<{ story: SuccessStory }> = ({ story }) => (
  <div className="md:col-span-8 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/20 flex flex-col md:flex-row">
    <div className="md:w-2/5 relative min-h-[300px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${story.image}')` }}
        aria-label={story.imageAlt}
      />
    </div>
    <div className="md:w-3/5 p-8 sm:p-10 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <StarRow count={story.stars} />
          {story.badge && (
            <span className="text-xs font-semibold text-on-surface-variant">{story.badge}</span>
          )}
        </div>
        <h3 className="font-display text-xl text-primary font-bold mb-4 leading-snug italic">
          {story.quoteHeadline}
        </h3>
        {story.body && (
          <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-body">
            {story.body}
          </p>
        )}
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-on-secondary-fixed text-sm flex-shrink-0">
          {story.initials}
        </div>
        <div>
          <p className="font-bold text-primary text-sm">{story.author}</p>
          <p className="text-xs font-bold text-secondary">{story.role}</p>
        </div>
      </div>
    </div>
  </div>
);

const DarkCard: React.FC<{ story: SuccessStory }> = ({ story }) => (
  <div className="md:col-span-4 bg-primary text-white p-8 sm:p-10 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
    <div>
      <span
        className="material-symbols-outlined text-secondary-fixed-dim mb-6 text-5xl block"
        style={{ fontVariationSettings: '"FILL" 0' }}
      >
        format_quote
      </span>
      <p className="text-base italic leading-relaxed mb-6 font-body">{story.quoteHeadline}</p>
    </div>
    <div className="flex items-center gap-4">
      <div
        className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-secondary-fixed-dim flex-shrink-0"
        style={story.image ? { backgroundImage: `url('${story.image}')` } : {}}
        aria-label={story.imageAlt}
      />
      <div>
        <p className="font-bold text-sm">{story.author}</p>
        <p className="text-xs text-secondary-fixed-dim font-bold">{story.role}</p>
      </div>
    </div>
  </div>
);

const LightCard: React.FC<{ story: SuccessStory }> = ({ story }) => (
  <div className="md:col-span-4 bg-white p-8 sm:p-10 rounded-xl border border-outline-variant/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
    <StarRow count={story.stars} />
    <p className="text-on-surface-variant text-sm leading-relaxed my-6 font-body">
      {story.quoteHeadline}
    </p>
    <div className="mt-auto pt-6 border-t border-outline-variant/10">
      <p className="font-bold text-primary text-sm">{story.author}</p>
      <p className="text-xs text-on-surface-variant">{story.role}</p>
    </div>
  </div>
);

const ImageOverlayCard: React.FC<{ story: SuccessStory }> = ({ story }) => (
  <div className="md:col-span-8 relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-[400px]">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('${story.image}')` }}
      aria-label={story.imageAlt}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
    <div className="absolute bottom-0 left-0 p-8 sm:p-10 w-full">
      <div className="max-w-2xl">
        {story.badge && (
          <span className="inline-block bg-secondary text-on-secondary px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase mb-4">
            {story.badge}
          </span>
        )}
        <h3 className="text-white font-display text-xl font-bold italic mb-4 leading-snug">
          {story.quoteHeadline}
        </h3>
        <p className="text-white/90 font-bold text-sm">
          {story.author}
          <span className="mx-2 text-secondary">|</span>
          {story.role}
        </p>
      </div>
    </div>
  </div>
);

const DetailCard: React.FC<{ story: SuccessStory }> = ({ story }) => (
  <div className="md:col-span-6 bg-white p-8 sm:p-10 rounded-xl border border-outline-variant/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="flex justify-between items-start mb-6">
      <div className="flex flex-col gap-1">
        {story.category && (
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            {story.category}
          </span>
        )}
        <StarRow count={story.stars} />
      </div>
      <span className="material-symbols-outlined text-outline-variant cursor-pointer hover:text-secondary transition-colors">
        share
      </span>
    </div>
    {story.body && (
      <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-body">{story.body}</p>
    )}
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary text-sm flex-shrink-0">
        {story.initials}
      </div>
      <div>
        <p className="font-bold text-primary text-sm">{story.author}</p>
        <p className="text-xs text-on-surface-variant">{story.role}</p>
      </div>
    </div>
  </div>
);

export const TestimonialsBentoWall: React.FC = () => {
  const featured = successStories.find((s) => s.variant === 'featured')!;
  const dark = successStories.find((s) => s.variant === 'dark')!;
  const light = successStories.find((s) => s.variant === 'light')!;
  const overlay = successStories.find((s) => s.variant === 'image-overlay')!;
  const details = successStories.filter((s) => s.variant === 'detail');

  return (
    <section className="px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <FeaturedCard story={featured} />
        <DarkCard story={dark} />
        <LightCard story={light} />
        <ImageOverlayCard story={overlay} />
        {details.map((story) => (
          <DetailCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsBentoWall;
