import React from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import FaqAccordionItem from '@/components/ui/FaqAccordionItem';
import { faqs } from '@/data/homeData';

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
    </SectionContainer>
  );
};

export default FaqSection;
