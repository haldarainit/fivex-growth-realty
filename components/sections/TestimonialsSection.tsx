import React from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { testimonials } from '@/data/homeData';

export const TestimonialsSection: React.FC = () => {
  return (
    <SectionContainer id="testimonials" bgStyle="bg-white">
      <SectionHeader
        badge="Client Success Stories"
        title="Trusted by Global Visionaries"
        centered={true}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default TestimonialsSection;
