export interface SocialLink {
  platform: string;
  url: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  designation: string;
  department: 'executive' | 'director' | 'founder' | 'management';
  shortBio: string;
  image: string;
  imageAlt: string;
  phone: string;
  email: string;
  linkedin: string;
  social: SocialLink[];
  fullBio: string[];
  experience: number; // years
  education: { degree: string; institution: string; year: string }[];
  skills: string[];
  awards: { title: string; year: string; issuer: string }[];
  responsibilities: string[];
  achievements: string[];
}

export const leadershipMembers: LeadershipMember[] = [
  {
    id: 'ceo-rajesh-sharma',
    name: 'Rajesh Sharma',
    designation: 'Chief Executive Officer',
    department: 'executive',
    shortBio: '25+ years of strategic leadership in Indian real estate with a proven track record of building premium property portfolios and forging high-value developer partnerships.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
    imageAlt: 'Rajesh Sharma, CEO',
    phone: '+91 98765 43210',
    email: 'rajesh.sharma@fivexgrowthrealty.com',
    linkedin: 'https://linkedin.com/in/rajesh-sharma-realty',
    social: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/rajesh-sharma-realty' },
      { platform: 'Twitter', url: 'https://twitter.com/rajeshsharma_realty' },
    ],
    fullBio: [
      'Rajesh Sharma is the visionary Chief Executive Officer of FIVEX Growth Realty, bringing over 25 years of comprehensive experience in the Indian real estate landscape. His career began in the mid-1990s when he joined a boutique property consultancy in Delhi NCR, quickly rising through the ranks due to his exceptional market insight and client-first philosophy.',
      'Under his leadership, FIVEX has grown from a regional consultancy to one of India\'s most respected premium real estate brokerages, with a portfolio spanning residential luxury, commercial Grade-A assets, and strategic land acquisitions across seven major cities.',
      'Rajesh has been instrumental in forging strategic alliances with India\'s top developers including DLF, Godrej Properties, Prestige Group, and Lodha, ensuring FIVEX clients receive exclusive access to pre-launch inventory and preferred pricing.',
    ],
    experience: 25,
    education: [
      { degree: 'MBA (Finance & Strategy)', institution: 'IIM Ahmedabad', year: '1998' },
      { degree: 'B.Tech (Civil Engineering)', institution: 'IIT Delhi', year: '1995' },
    ],
    skills: ['Strategic Leadership', 'Investment Analysis', 'Developer Relations', 'Portfolio Management', 'Market Research', 'Client Advisory'],
    awards: [
      { title: 'Real Estate CEO of the Year', year: '2023', issuer: 'CREDAI National Awards' },
      { title: 'Top 50 Real Estate Leaders', year: '2022', issuer: 'Economic Times' },
      { title: 'Best Brokerage Leadership Award', year: '2021', issuer: 'NAR India' },
    ],
    responsibilities: [
      'Overall strategic direction and vision of the organization',
      'P&L ownership and financial performance management',
      'Developer partnerships and key account management',
      'Brand positioning and market expansion strategy',
      'Regulatory compliance and RERA adherence oversight',
    ],
    achievements: [
      'Scaled FIVEX from 5 to 50+ team members in 10 years',
      'Closed deals worth ₹2500 Cr+ in total asset value',
      'Established FIVEX presence in 5 major Indian cities',
      'Built a client retention rate of 78% (industry average: 45%)',
    ],
  },
  {
    id: 'director-priya-malhotra',
    name: 'Priya Malhotra',
    designation: 'Director – Residential Sales',
    department: 'director',
    shortBio: '18 years of expertise in luxury residential real estate, having managed over 400 successful transactions for HNI and NRI clients across Delhi NCR and Mumbai.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    imageAlt: 'Priya Malhotra, Director',
    phone: '+91 91234 56789',
    email: 'priya.malhotra@fivexgrowthrealty.com',
    linkedin: 'https://linkedin.com/in/priya-malhotra-realty',
    social: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/priya-malhotra-realty' },
      { platform: 'Instagram', url: 'https://instagram.com/priya.malhotra.realty' },
    ],
    fullBio: [
      'Priya Malhotra is a seasoned real estate professional with 18 years of focused expertise in luxury residential sales across India\'s premium markets. Her deep understanding of HNI and NRI client psychology has made her one of the most sought-after advisors in the Delhi NCR luxury segment.',
      'Having started her career with Cushman & Wakefield, Priya brings a global perspective to Indian real estate advisory. She has closed landmark deals in Noida\'s most prestigious addresses including projects by Godrej, Emaar, and Gaur Group.',
    ],
    experience: 18,
    education: [
      { degree: 'MBA (Marketing)', institution: 'MDI Gurgaon', year: '2006' },
      { degree: 'B.Com (Hons)', institution: 'Delhi University', year: '2003' },
    ],
    skills: ['Luxury Residential Sales', 'NRI Advisory', 'CRM Management', 'Negotiation', 'Client Relations', 'Market Analysis'],
    awards: [
      { title: 'Top Residential Sales Director', year: '2022', issuer: 'NAREDCO' },
      { title: 'Women Leaders in Real Estate', year: '2021', issuer: 'Realty+ Magazine' },
    ],
    responsibilities: [
      'Lead the residential sales team of 20+ advisors',
      'Develop and implement luxury residential sales strategy',
      'Maintain relationships with top HNI and NRI clients',
      'Conduct exclusive property showcases and client events',
    ],
    achievements: [
      'Managed 400+ successful luxury residential transactions',
      'Built NRI client network spanning 15 countries',
      'Achieved 95% client satisfaction score consistently',
    ],
  },
  {
    id: 'director-amit-verma',
    name: 'Amit Verma',
    designation: 'Director – Commercial & Investment',
    department: 'director',
    shortBio: '20 years in commercial real estate investment, specializing in Grade-A office spaces, retail assets, and institutional-grade investment advisory for corporate clients.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    imageAlt: 'Amit Verma, Director Commercial',
    phone: '+91 90000 12345',
    email: 'amit.verma@fivexgrowthrealty.com',
    linkedin: 'https://linkedin.com/in/amit-verma-commercial-realty',
    social: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/amit-verma-commercial-realty' },
    ],
    fullBio: [
      'Amit Verma heads the commercial and investment vertical at FIVEX, bringing two decades of specialized expertise in Grade-A commercial assets. His analytical approach to yield computation, tenant profiling, and risk assessment has made FIVEX the preferred commercial advisory partner for corporates expanding in India.',
      'Prior to FIVEX, Amit worked with JLL India and CBRE, where he managed corporate real estate portfolios for Fortune 500 companies setting up India operations.',
    ],
    experience: 20,
    education: [
      { degree: 'MBA (Finance)', institution: 'IIM Calcutta', year: '2004' },
      { degree: 'B.Arch', institution: 'CEPT University, Ahmedabad', year: '2001' },
    ],
    skills: ['Commercial Leasing', 'Investment Analysis', 'ROI Modeling', 'Corporate Advisory', 'Due Diligence', 'Tenant Relations'],
    awards: [
      { title: 'Commercial Dealmaker of the Year', year: '2023', issuer: 'PropTiger Awards' },
    ],
    responsibilities: [
      'Lead commercial real estate advisory and investment verticals',
      'Manage institutional client relationships',
      'Develop investment thesis and portfolio strategy for clients',
      'Oversee due diligence processes for commercial acquisitions',
    ],
    achievements: [
      'Closed commercial deals worth ₹800 Cr+ over 5 years',
      'Advised 30+ corporations on their India real estate strategy',
      'Delivered consistent 8-12% yield outcomes for investment clients',
    ],
  },
  {
    id: 'founder-sunita-kapoor',
    name: 'Sunita Kapoor',
    designation: 'Co-Founder & Chairperson',
    department: 'founder',
    shortBio: 'Visionary entrepreneur who co-founded FIVEX in 2010. Pioneer in bringing international brokerage standards to Indian residential real estate with a client-first ethos.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
    imageAlt: 'Sunita Kapoor, Co-Founder',
    phone: '+91 98800 11111',
    email: 'sunita.kapoor@fivexgrowthrealty.com',
    linkedin: 'https://linkedin.com/in/sunita-kapoor-fivex',
    social: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/sunita-kapoor-fivex' },
      { platform: 'Twitter', url: 'https://twitter.com/sunitakapoor_realty' },
    ],
    fullBio: [
      'Sunita Kapoor is the co-founder and Chairperson of FIVEX Growth Realty, a visionary entrepreneur who identified the gap between international brokerage quality and what was available in India\'s rapidly growing real estate market.',
      'In 2010, she co-founded FIVEX with a simple yet powerful mission: to bring global standards of transparency, integrity, and client service to Indian real estate. Under her leadership philosophy, FIVEX instituted its proprietary 42-point property verification process — now an industry benchmark.',
      'Sunita is a prominent voice in CREDAI and NAREDCO, frequently speaking at national conferences on ethics in real estate brokerage and the role of proptech in transforming the industry.',
    ],
    experience: 30,
    education: [
      { degree: 'Masters in Business Law', institution: 'Delhi University', year: '1994' },
      { degree: 'B.Com (Hons)', institution: 'Lady Shri Ram College', year: '1992' },
    ],
    skills: ['Business Strategy', 'Legal Compliance', 'Policy Advocacy', 'Brand Building', 'Corporate Governance', 'Stakeholder Management'],
    awards: [
      { title: 'Entrepreneur of the Year – Real Estate', year: '2022', issuer: 'ASSOCHAM' },
      { title: 'Power Women in Real Estate', year: '2020', issuer: 'Times Property' },
      { title: 'CREDAI Lifetime Achievement Recognition', year: '2019', issuer: 'CREDAI' },
    ],
    responsibilities: [
      'Set the overall ethical and cultural tone for the organization',
      'Chair the Board of Directors and governance committees',
      'Represent FIVEX in industry associations and policy forums',
      'Mentor the next generation of real estate professionals',
    ],
    achievements: [
      'Built FIVEX from a 3-person startup to a 50+ member organization',
      'Established industry-first 42-point property verification standard',
      'Featured in Forbes India\'s Top 100 Women Entrepreneurs 2021',
    ],
  },
];
