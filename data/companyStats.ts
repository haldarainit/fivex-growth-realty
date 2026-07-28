export interface CompanyStat {
  value: string;
  label: string;
  sublabel?: string;
  icon: string;
  description?: string;
}

export const companyStats: CompanyStat[] = [
  {
    value: '500+',
    label: 'Total Projects',
    sublabel: 'Across India',
    icon: 'apartment',
    description: 'Delivered across residential, commercial, and mixed-use segments',
  },
  {
    value: '70+',
    label: 'Commercial Projects',
    sublabel: 'Grade A Offices & Retail',
    icon: 'business_center',
    description: 'Premium office spaces, retail hubs, and co-working environments',
  },
  {
    value: '60%',
    label: 'Residential',
    sublabel: 'Of Our Portfolio',
    icon: 'home',
    description: 'Luxury apartments, villas, penthouses, and gated communities',
  },
  {
    value: '40%',
    label: 'Commercial',
    sublabel: 'Of Our Portfolio',
    icon: 'storefront',
    description: 'Office complexes, IT parks, retail spaces, and mixed developments',
  },
  {
    value: '15+',
    label: 'Years of Excellence',
    sublabel: 'Since 2010',
    icon: 'history_edu',
    description: 'Trusted real estate partner for over a decade and a half',
  },
  {
    value: '1200+',
    label: 'Happy Clients',
    sublabel: 'Nationwide',
    icon: 'people',
    description: 'Families and investors who trust FIVEX with their real estate journey',
  },
  {
    value: '50+',
    label: 'Expert Advisors',
    sublabel: 'Pan-India Team',
    icon: 'support_agent',
    description: 'Certified real estate consultants with deep market expertise',
  },
  {
    value: '₹2500Cr+',
    label: 'Assets Managed',
    sublabel: 'Portfolio Value',
    icon: 'account_balance',
    description: 'Combined value of properties bought, sold and managed',
  },
];
