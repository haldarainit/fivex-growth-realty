export interface JobListing {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  experience: string;
  salary?: string;
  posted: string;
  isHot?: boolean;
  shortDescription: string;
  fullDescription: string[];
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  benefits: string[];
}

export const jobDepartments = ['All', 'Sales', 'Marketing', 'Operations', 'Legal', 'Finance', 'Technology', 'Human Resources'];

export const jobListings: JobListing[] = [
  {
    id: 'job-1',
    slug: 'senior-property-advisor-noida',
    title: 'Senior Property Advisor',
    department: 'Sales',
    location: 'Noida, UP',
    type: 'full-time',
    experience: '5–8 years',
    salary: '₹8–15 LPA + incentives',
    posted: '2026-07-15',
    isHot: true,
    shortDescription: 'Drive luxury property sales and build long-term client relationships in the premium Noida/Greater Noida market.',
    fullDescription: [
      'We are looking for a high-performing Senior Property Advisor to join our Noida team. As a Senior Advisor, you will be the face of FIVEX for our premium clients — guiding them through their property investment journey with expertise, empathy, and integrity.',
      'You will manage a portfolio of HNI clients, conduct site visits, lead negotiations, and close deals that align with our brand of excellence. This role offers an exceptional earning potential through our industry-leading incentive structure.',
    ],
    responsibilities: [
      'Develop and maintain relationships with HNI and corporate clients',
      'Conduct property presentations, site tours, and client consultations',
      'Achieve monthly and quarterly sales targets',
      'Coordinate with developers for inventory management and pricing',
      'Manage the complete sales lifecycle from lead to registration',
      'Maintain CRM records and prepare sales reports',
      'Mentor junior advisors in the team',
    ],
    requirements: [
      'Minimum 5 years of experience in real estate sales',
      'Proven track record of closing residential and/or commercial deals',
      'Strong network in the Noida/NCR real estate market',
      'Excellent communication and negotiation skills',
      'Bachelor\'s degree in any discipline (MBA preferred)',
      'Valid RERA certification or willingness to obtain',
    ],
    skills: ['Real Estate Sales', 'CRM', 'Client Relations', 'Market Analysis', 'Negotiation', 'Hindi & English fluency'],
    benefits: [
      'Competitive fixed salary + performance-linked incentives',
      'Health insurance for self and family',
      'Flexible working hours',
      'International property tour opportunities',
      'Professional development and training budget',
      'Employee referral bonus program',
    ],
  },
  {
    id: 'job-2',
    slug: 'digital-marketing-manager',
    title: 'Digital Marketing Manager',
    department: 'Marketing',
    location: 'Noida, UP (Hybrid)',
    type: 'full-time',
    experience: '4–7 years',
    salary: '₹7–12 LPA',
    posted: '2026-07-20',
    isHot: true,
    shortDescription: 'Lead our digital marketing strategy to generate quality leads and build FIVEX\'s premium brand presence across digital channels.',
    fullDescription: [
      'FIVEX is looking for a creative and data-driven Digital Marketing Manager to take ownership of our entire digital presence. You will craft compelling campaigns that resonate with luxury real estate buyers and investors.',
      'This is a high-impact role where you\'ll work directly with leadership to shape the brand\'s digital voice and drive measurable business outcomes through innovative marketing strategies.',
    ],
    responsibilities: [
      'Plan and execute digital marketing campaigns (SEO, SEM, Social, Email)',
      'Manage and grow social media presence (Instagram, LinkedIn, YouTube)',
      'Oversee content creation and editorial calendar',
      'Generate and nurture leads through digital channels',
      'Analyze campaign performance and optimize ROI',
      'Manage agency relationships and digital marketing budgets',
      'Develop property launch marketing campaigns',
    ],
    requirements: [
      'Minimum 4 years in digital marketing, preferably real estate',
      'Hands-on experience with Google Ads, Meta Ads, and SEO tools',
      'Strong analytical skills and data-driven mindset',
      'Portfolio of successful lead generation campaigns',
      'Experience with CRM and marketing automation tools',
    ],
    skills: ['Digital Marketing', 'Google Ads', 'Meta Ads', 'SEO', 'Content Strategy', 'Analytics', 'Social Media'],
    benefits: [
      'Competitive salary package',
      'Hybrid work model (3 days office, 2 days WFH)',
      'Annual performance bonus',
      'Learning and development allowance',
      'Health insurance coverage',
    ],
  },
  {
    id: 'job-3',
    slug: 'legal-compliance-executive',
    title: 'Legal & Compliance Executive',
    department: 'Legal',
    location: 'Noida, UP',
    type: 'full-time',
    experience: '3–6 years',
    salary: '₹6–10 LPA',
    posted: '2026-07-22',
    shortDescription: 'Ensure all transactions are legally sound, RERA-compliant, and protect both clients and FIVEX from legal risks.',
    fullDescription: [
      'We are seeking a meticulous Legal & Compliance Executive to join our growing team. This role is critical to ensuring every property transaction handled by FIVEX meets the highest standards of legal scrutiny and regulatory compliance.',
    ],
    responsibilities: [
      'Review property title documents, sale deeds, and lease agreements',
      'Ensure compliance with RERA regulations across all transactions',
      'Coordinate with external lawyers for litigation and dispute resolution',
      'Prepare and vet legal documentation for transactions',
      'Maintain a database of all ongoing legal matters',
      'Brief clients on legal aspects of their property investments',
    ],
    requirements: [
      'LLB degree from a recognized university',
      'Minimum 3 years in real estate legal practice',
      'Strong knowledge of RERA, Transfer of Property Act, and related statutes',
      'Experience with property title clearance and registration processes',
    ],
    skills: ['Property Law', 'RERA Compliance', 'Contract Drafting', 'Due Diligence', 'Legal Research'],
    benefits: [
      'Competitive salary',
      'Professional development support (bar council, certifications)',
      'Health insurance',
      'Stable, growing organization',
    ],
  },
  {
    id: 'job-4',
    slug: 'nri-relationship-manager',
    title: 'NRI Relationship Manager',
    department: 'Sales',
    location: 'Noida, UP (Remote eligible)',
    type: 'full-time',
    experience: '4–6 years',
    salary: '₹8–14 LPA + incentives',
    posted: '2026-07-18',
    shortDescription: 'Dedicated NRI desk role to help Indian diaspora invest confidently in premium Indian real estate from abroad.',
    fullDescription: [
      'As an NRI Relationship Manager at FIVEX, you will be the primary point of contact for Non-Resident Indians looking to invest in Indian real estate. Your role is to make the process seamless, transparent, and profitable for clients who are physically abroad.',
    ],
    responsibilities: [
      'Build and manage a portfolio of NRI clients across key diaspora markets',
      'Conduct virtual property consultations and presentations',
      'Manage Power of Attorney (PoA) documentation processes',
      'Coordinate NRE/NRO account transactions and RBI compliance',
      'Handle virtual property tours and remote closings',
      'Be available for flexible hours to accommodate international time zones',
    ],
    requirements: [
      'Minimum 4 years in NRI banking, remittance, or real estate',
      'Strong understanding of FEMA regulations for NRI property investment',
      'Excellent virtual communication and presentation skills',
      'Proficiency in Hindi and English; additional languages a plus',
    ],
    skills: ['NRI Advisory', 'FEMA Compliance', 'Virtual Presentations', 'Relationship Management', 'Documentation'],
    benefits: [
      'High incentive structure (travel-free deal closings)',
      'Flexible/remote work options',
      'International exposure and client base',
      'Health insurance',
    ],
  },
];

export const careerBenefits = [
  { icon: 'trending_up', title: 'Exceptional Earnings', description: 'Industry-leading incentive structures with no cap on earning potential' },
  { icon: 'school', title: 'Learning Culture', description: 'Regular training, certifications, and international exposure programs' },
  { icon: 'favorite', title: 'Health & Wellness', description: 'Comprehensive health insurance for you and your family' },
  { icon: 'groups', title: 'Collaborative Team', description: 'Work with India\'s most passionate real estate professionals' },
  { icon: 'rocket_launch', title: 'Career Growth', description: 'Clear growth paths with fast-track promotions for high performers' },
  { icon: 'location_on', title: 'Multiple Locations', description: 'Opportunities across Noida, Gurgaon, Mumbai, and growing cities' },
];

export const whyJoinUs = [
  'Work with India\'s top developers and premium properties',
  'Industry-leading compensation with uncapped incentives',
  'Continuous learning and upskilling culture',
  'Transparent, ethical organization with strong values',
  'Fast-growing company with significant career advancement opportunities',
  'Inclusive and diverse workplace',
];
