'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import TestimonialsHero from '@/components/testimonials/TestimonialsHero';
import TestimonialsBentoWall from '@/components/testimonials/TestimonialsBentoWall';
import TestimonialsCTA from '@/components/testimonials/TestimonialsCTA';

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 flex-grow">
        <TestimonialsHero />
        <TestimonialsBentoWall />
        <TestimonialsCTA />
      </main>
      <Footer />
    </>
  );
}
