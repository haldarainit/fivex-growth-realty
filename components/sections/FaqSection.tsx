import React from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import FaqAccordionItem from '@/components/ui/FaqAccordionItem';
import { faqs } from '@/data/homeData';
import Link from 'next/link';

export const FaqSection: React.FC = () => {
  return (
    <SectionContainer
      id="faq"
      bgStyle="bg-surface-container/20"
      containerClassName="max-w-4xl"
    >
      <SectionHeader
        badge="Knowledge Base"
        title="Frequently Asked Questions"
        centered={true}
      />
      <div className="space-y-4">
        {faqs.map((faq) => (
          <FaqAccordionItem key={faq.id} faq={faq} />
        ))}
      </div>

      {/* View More button */}
      <div className="text-center mt-12">
        <Link
          href="/faq"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-secondary hover:text-white transition-all shadow-md"
        >
          View Full Knowledge Base
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Link>
      </div>
    </SectionContainer>
  );
};

export default FaqSection;
