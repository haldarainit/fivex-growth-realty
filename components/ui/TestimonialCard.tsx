import React from 'react';
import { TestimonialItem } from '@/types';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const isDark = testimonial.variant === 'dark';

  return (
    <div
      className={`p-8 md:p-10 rounded-3xl relative transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl h-full ${
        isDark
          ? 'bg-primary border border-white/10 text-white'
          : 'bg-surface-container/30 border border-outline-variant/15 text-primary'
      }`}
    >
      {/* Decorative quote icon */}
      <span
        className={`material-symbols-outlined text-6xl absolute top-6 right-8 pointer-events-none ${
          isDark ? 'text-white/10' : 'text-secondary/15'
        }`}
      >
        format_quote
      </span>

      {/* Stars */}
      <div className="relative z-10 space-y-4">
        <div className="flex gap-0.5 text-secondary">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined text-base"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
          ))}
        </div>
        <p
          className={`italic leading-relaxed text-base md:text-lg font-body ${
            isDark ? 'text-white/85' : 'text-primary/85'
          }`}
        >
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author */}
      <div
        className={`flex items-center gap-4 pt-6 border-t mt-6 ${
          isDark ? 'border-white/10' : 'border-outline-variant/20'
        }`}
      >
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 shadow ${
            isDark ? 'bg-secondary text-white' : 'bg-primary text-secondary'
          }`}
        >
          {testimonial.initials}
        </div>
        <div>
          <h4 className={`font-bold text-base ${isDark ? 'text-white' : 'text-primary'}`}>
            {testimonial.author}
          </h4>
          <p className="text-xs text-secondary font-semibold uppercase tracking-wider">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
