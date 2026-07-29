export interface SocialLink {
  platform: string;
  url: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  designation: string;
  headline?: string;
  department: 'executive' | 'director' | 'founder' | 'management';
  shortBio: string;
  image: string;
  imageAlt: string;
  phone: string;
  whatsapp?: string;
  email: string;
  website?: string;
  linkedin: string;
  social: SocialLink[];
  fullBio: string[];
  experience: number; // years
  education: { degree: string; institution: string; year: string }[];
  skills: string[];
  awards: { title: string; year: string; issuer: string }[];
  responsibilities: string[];
  achievements: string[];
  areasServed?: string[];
  developerPartnersList?: string[];
}

export const leadershipMembers: LeadershipMember[] = [
  {
    id: 'syed-zeeshan-ahmad',
    name: 'SYED ZEESHAN AHMAD',
    designation: 'Founder & Managing Director',
    headline: 'Founder | FiveX Growth Realty Pvt. Ltd | Real Estate Expert | Investment Consultant | Residential & Commercial Specialist | Investment Strategist | Yamuna Expressway & Noida Property Expert | RERA-Registered Consultant',
    department: 'founder',
    shortBio: 'Founder & CEO of FiveX Growth Realty Pvt. Ltd, specializing in residential, commercial, plotted developments, and industrial leasing with 10+ years of expert advisory across Noida, Greater Noida, and Yamuna Expressway.',
    image: '/members/SyedZeeshanAhmad.jpg',
    imageAlt: 'Syed Zeeshan Ahmad, Founder & Managing Director',
    phone: '+91- 827 931 9964',
    whatsapp: 'https://wa.me/message/US6IITAWHUQGD1',
    email: 'infofivexgrowthrealty@gmail.com',
    website: 'www.fivexgrowthrealty.com',
    linkedin: 'https://in.linkedin.com/in/syed-zeeshan-ahmad',
    social: [
      { platform: 'LinkedIn', url: 'https://in.linkedin.com/in/syed-zeeshan-ahmad' },
      { platform: 'Facebook', url: 'https://www.facebook.com/share/1EM6RmN44z/' },
      { platform: 'Instagram', url: 'https://www.instagram.com/syed_zeeshan_ahmad?igsh=MXg5d3hibXdpM2E4cA==' },
      { platform: 'YouTube', url: 'https://www.youtube.com/@syedzeeshanahmad5001' },
      { platform: 'Twitter/X', url: 'https://x.com/syedzeshanahmad' },
      { platform: 'Tumblr', url: 'https://www.tumblr.com/syedzeeshanahmad?redirect_to=%2Fexplore%2Ftrending&source=blog_follow' },
      { platform: 'Pinterest', url: 'https://pin.it/5CFarQsN8' },
    ],
    fullBio: [
      'I am the Founder & CEO of FiveX Growth Realty Pvt. Ltd, a leading name in North India’s real estate sector, specializing in residential, commercial, plotted developments, and industrial leasing. I bring market knowledge, investor mindset, and ethical practices to every deal. We specialize in Noida, Greater Noida, Yamuna Expressway, and Delhi NCR, especially projects linked to Jewar Airport, Film City, and industrial corridors.',
      'We offer end-to-end property solutions—from investment consulting to resale, leasing, and documentation.',
      'With over 10+ years of experience, my focus is on client satisfaction, transparent deals, and helping investors find the right opportunities with high ROI potential. We work with Gated Society Apartments, Authority Plots, Builder Floors, Farmhouses, and Commercial Assets across NCR, especially in Noida, Greater Noida, Yamuna Expressway, and Delhi NCR.',
      'Our team ensures clients get verified properties, clear titles, RERA-registered options, and investment guidance that leads to high ROI.',
    ],
    experience: 10,
    education: [
      { degree: 'Bachelor of Commerce & Real Estate Management', institution: 'Delhi University', year: '2014' },
      { degree: 'RERA Certified Real Estate Consultant', institution: 'UP RERA Authority', year: '2018' },
    ],
    skills: [
      'Real Estate Investment Strategy',
      'Yamuna Expressway & Jewar Belt Expert',
      'Authority Plots (YEIDA, GNIDA, Noida)',
      'Commercial & Industrial Leasing',
      'Project Marketing & Channel Sales',
      'RERA & Legal Title Clearance',
      'High ROI Portfolio Planning',
    ],
    awards: [
      { title: 'Top Real Estate Consultant - Yamuna Expressway Belt', year: '2024', issuer: 'NCR Realty Excellence' },
      { title: 'High ROI Investment Specialist Award', year: '2023', issuer: 'North India Property Forum' },
      { title: 'Recognized Developer Channel Partner', year: '2022', issuer: 'Leading Developer Association' },
    ],
    responsibilities: [
      'Strategic leadership and overall vision of FiveX Growth Realty Pvt. Ltd',
      'Heading key investor portfolios across Yamuna Expressway, Jewar Airport zone, and Noida',
      'Fostering partnerships with 50+ tier-1 developer groups in NCR & Gurgaon',
      'Overseeing end-to-end legal title verification and RERA compliance',
      'Guiding corporate leasing, industrial land acquisition, and landowner collaboration deals',
    ],
    achievements: [
      'Closed 300+ successful property transactions',
      'Delivered 100+ investments with 30–60% capital appreciation',
      'Recognized partner with top tier-1 developers across Delhi NCR & Gurgaon',
      'Specialist in Yamuna Expressway Sector 18, 20, 22D & Jewar Aerocity belt',
      'Consulted 1,000+ buyers & investors with customized property portfolios',
      'Built a team of RERA-Certified Real Estate Consultants in Noida',
    ],
    areasServed: [
      'Delhi NCR, Noida, Sector 150, 137, 93, 76',
      'Noida Extension, Greater Noida / Pari Chowk / KP Series',
      'Yamuna Expressway Sector 18, 20, 22D, Jewar',
      'Ghaziabad / Indirapuram / Rajnagar Ext.',
      'Jewar Airport Investment Zone',
      'Gurugram (Selective Projects)',
    ],
  },
  {
    id: 'mohammad-bashiruddin',
    name: 'Mr. Mohammad Bashiruddin',
    designation: 'Director',
    headline: 'Director | FiveX Growth Realty Pvt. Ltd | Strategic Real Estate Leader | Commercial & Residential Advisory',
    department: 'director',
    shortBio: 'Director at FiveX Growth Realty Private Limited, combining deep market insight, strategic vision, and an unwavering commitment to client success across residential and commercial sectors.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    imageAlt: 'Mohammad Bashiruddin, Director',
    phone: '+91 8279319964',
    whatsapp: 'https://wa.me/message/US6IITAWHUQGD1',
    email: 'infofivexgrowthrealty@gmail.com',
    website: 'www.fivexgrowthrealty.com',
    linkedin: 'https://linkedin.com/company/fivex-growth-realty',
    social: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/company/fivex-growth-realty' },
    ],
    fullBio: [
      'Mr. Mohammad Bashiruddin serves as Director of FiveX Growth Realty Private Limited. With over 13 years of collective industry leadership and market knowledge, he drives strategic partnerships with leading developers and oversees high-value commercial and residential real estate advisory across North India.',
      'His key focus remains on ensuring transparent business practices, robust legal documentation support, and building long-term client relationships for buyers, investors, and corporate clients.',
    ],
    experience: 13,
    education: [
      { degree: 'Master of Business Administration (MBA)', institution: 'Jamia Millia Islamia', year: '2011' },
    ],
    skills: [
      'Strategic Property Advisory',
      'Developer Relations',
      'Commercial Property Acquisition',
      'Client Relationship Management',
      'Legal & Registry Support',
    ],
    awards: [
      { title: 'Excellence in Real Estate Leadership', year: '2023', issuer: 'Real Estate Growth Summit' },
    ],
    responsibilities: [
      'Strategic corporate direction and market expansion',
      'Managing commercial sales and corporate leasing vertical',
      'Maintaining relationships with premier developer partners',
      'Ensuring operational compliance and customer satisfaction',
    ],
    achievements: [
      'Over 13 years of collective industry leadership',
      'Helped establish FiveX as a trusted partner in Noida real estate',
      'Advised hundreds of families and corporate clients on property selection',
    ],
    areasServed: [
      'Noida & Noida Extension',
      'Greater Noida & Yamuna Expressway',
      'Delhi NCR',
    ],
  },
];

