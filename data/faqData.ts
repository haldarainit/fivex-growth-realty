import { FaqItem, FaqCategory } from '@/types';

export const faqCategories: FaqCategory[] = [
  { id: 'all', label: 'All Questions', icon: 'apps' },
  { id: 'buying', label: 'Buying', icon: 'home' },
  { id: 'investment', label: 'Investment', icon: 'payments' },
  { id: 'documentation', label: 'Documentation', icon: 'article' },
];

export const faqItems: FaqItem[] = [
  {
    id: 'faq-buy-1',
    category: 'buying',
    question: 'What are the initial steps for a first-time home buyer?',
    answer:
      'The process begins with defining your budget and getting pre-approved for a mortgage. Once you have a clear financial roadmap, we recommend scheduling a consultation with our advisors to identify locations and property types that align with your lifestyle or portfolio goals.',
  },
  {
    id: 'faq-buy-2',
    category: 'buying',
    question: 'How long does the closing process typically take?',
    answer:
      'On average, the closing process takes between 30 to 45 days. This timeframe covers home inspections, appraisal, final loan approval, and legal title transfers. Our concierge team manages these milestones to ensure a seamless transition.',
  },
  {
    id: 'faq-buy-3',
    category: 'buying',
    question: 'What are the hidden costs I should be aware of when purchasing?',
    answer:
      'Beyond the property price, buyers should account for stamp duty (5–7% of the circle rate), registration charges (1%), GST (for under-construction), legal fees, and loan processing charges. Our advisors provide a complete cost estimate before you commit.',
  },
  {
    id: 'faq-inv-1',
    category: 'investment',
    question: 'What is the expected ROI for luxury apartments in the current market?',
    answer:
      'Current market data suggests a gross rental yield of 4–6% for high-end residential properties, with a projected capital appreciation of 8–12% annually in emerging corridors. We provide detailed data-driven reports for every project we represent.',
  },
  {
    id: 'faq-inv-2',
    category: 'investment',
    question: 'Do you offer property management services for investors?',
    answer:
      'Yes, FIVEX Growth Realty provides end-to-end property management including tenant sourcing, rent collection, and maintenance management, specifically designed for non-resident and portfolio investors.',
  },
  {
    id: 'faq-inv-3',
    category: 'investment',
    question: 'What are the best sectors in Noida for long-term investment?',
    answer:
      'Based on our current data, Sectors 150, 143, and 137 along the Noida Expressway offer the highest growth trajectories due to Metro connectivity, proximity to Jewar International Airport, and Grade-A developer activity. Greater Noida West (Noida Extension) is also an excellent entry point for long-term capital appreciation.',
  },
  {
    id: 'faq-doc-1',
    category: 'documentation',
    question: 'What legal documents are required for property registration?',
    answer:
      'Key documents include the Sale Deed, Mother Deed, Encumbrance Certificate (EC), Khata Certificate, and latest tax paid receipts. Our legal team assists in the verification and processing of all required documentation.',
  },
  {
    id: 'faq-doc-2',
    category: 'documentation',
    question: 'Are there specific tax implications for NRI investors?',
    answer:
      'NRI investors are subject to TDS (Tax Deducted at Source) on property sales and income tax on rental yields. However, there are significant benefits under various DTAA treaties. We recommend a consultation with our specialized NRI tax desk.',
  },
];
