import React from 'react';
import { FaqItem } from '@/types';

interface FaqAccordionItemProps {
  faq: FaqItem;
}

export const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({ faq }) => {
  return (
    <details className="group bg-white rounded-2xl border border-outline-variant/30 overflow-hidden shadow-sm">
      <summary className="flex justify-between items-center p-8 cursor-pointer select-none">
        <h4 className="font-bold text-lg text-primary pr-4">{faq.question}</h4>
        <span className="material-symbols-outlined text-secondary transition-transform duration-300 expand-icon flex-shrink-0">
          expand_more
        </span>
      </summary>
      <div className="px-8 pb-8 text-primary/70 leading-relaxed">
        {faq.answer}
      </div>
    </details>
  );
};

export default FaqAccordionItem;
