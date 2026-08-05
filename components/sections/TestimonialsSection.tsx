import React from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonials } from '@/data/homeData';
import Link from 'next/link';

export const TestimonialsSection: React.FC = () => {
  return (
    <SectionContainer id="testimonials" bgStyle="bg-white">
      <SectionHeader
        badge="Client Success Stories"
        title="Trusted by Global Visionaries"
        centered={true}
      />

      {/* 3-column grid – same layout as before, responsive stacking */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 items-stretch">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {/* View More button */}
      <div className="text-center mt-12">
        <Link
          href="/testimonials"
          className="inline-flex items-center gap-2 border-2 border-secondary text-secondary px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-secondary hover:text-white transition-all shadow-sm"
        >
          View More Success Stories
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Link>
      </div>
    </SectionContainer>
  );
};

export default TestimonialsSection;
