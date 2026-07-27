import React from 'react';
import { TestimonialItem } from '@/types';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const isDark = testimonial.variant === 'dark';

  return (
    <div
      className={`p-10 rounded-3xl relative transition-all duration-300 flex flex-col justify-between ${
        isDark
          ? 'bg-primary border border-white/5 shadow-2xl text-white'
          : 'bg-surface-container/30 border border-outline-variant/10 text-primary'
      }`}
    >
      <span
        className={`material-symbols-outlined text-6xl absolute top-6 right-8 ${
          isDark ? 'text-white/10' : 'text-secondary/20'
        }`}
      >
        format_quote
      </span>
      <div className="space-y-6">
        <p
          className={`italic leading-relaxed text-lg ${
            isDark ? 'text-white/80' : 'text-primary/80'
          }`}
        >
          {testimonial.quote}
        </p>
      </div>

      <div
        className={`flex items-center gap-4 pt-6 border-t mt-6 ${
          isDark ? 'border-white/10' : 'border-outline-variant/20'
        }`}
      >
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center font-bold ${
            isDark ? 'bg-secondary text-primary' : 'bg-primary text-secondary'
          }`}
        >
          {testimonial.initials}
        </div>
        <div>
          <h4 className={`font-bold ${isDark ? 'text-white' : 'text-primary'}`}>
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
