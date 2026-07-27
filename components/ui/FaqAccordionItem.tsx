import React from 'react';
import { FaqItem } from '@/types';

interface FaqAccordionItemProps {
  faq: FaqItem;
}

export const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({ faq }) => {
  return (
    <details className="group bg-white rounded-2xl border border-outline-variant/25 overflow-hidden shadow-sm hover:shadow-md transition-all">
      <summary className="flex justify-between items-center p-5 sm:p-7 md:p-8 cursor-pointer select-none gap-4">
        <h4 className="font-bold text-base md:text-lg text-primary">{faq.question}</h4>
        <span className="material-symbols-outlined text-secondary transition-transform duration-300 expand-icon flex-shrink-0 text-xl">
          expand_more
        </span>
      </summary>
      <div className="px-5 sm:px-7 md:px-8 pb-6 md:pb-8 text-primary/70 leading-relaxed text-sm md:text-base">
        {faq.answer}
      </div>
    </details>
  );
};

export default FaqAccordionItem;
