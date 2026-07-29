export interface CSRInitiative {
  id: string;
  title: string;
  description: string;
  icon: string;
  impact: string;
  year: string;
}

export interface CSRStat {
  value: string;
  label: string;
  icon: string;
}

export interface CSREvent {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  participants: number;
  category: string;
}

export const csrMission = {
  title: 'Investing in Communities, Not Just Properties',
  description: 'At FIVEX Growth Realty, we believe that true growth extends beyond property portfolios. Our CSR initiatives are designed to create lasting positive impact in the communities we operate in — from environmental sustainability to education and social welfare.',
};

export const csrInitiatives: CSRInitiative[] = [
  {
    id: 'csr-environment',
    title: 'Green Earth Initiative',
    description: 'Planting 10,000 trees across Delhi NCR in partnership with municipal corporations and real estate developers. We integrate green mandates into our property advisory to promote eco-conscious real estate choices.',
    icon: 'eco',
    impact: '8,500 trees planted',
    year: '2024',
  },
  {
    id: 'csr-education',
    title: 'Shiksha Setu',
    description: 'Providing educational scholarships and school supplies to underprivileged children in Noida\'s urban slum communities. We believe education is the foundation of real growth.',
    icon: 'school',
    impact: '200+ children supported',
    year: '2023–2024',
  },
  {
    id: 'csr-health',
    title: 'Arogya Camp',
    description: 'Monthly health camps in partnership with local hospitals providing free medical check-ups, blood pressure monitoring, and health awareness to construction workers and low-income families.',
    icon: 'local_hospital',
    impact: '1,200+ beneficiaries',
    year: '2024',
  },
  {
    id: 'csr-women',
    title: 'Udyam: Women Empowerment',
    description: 'Vocational training and micro-financing support for women entrepreneurs in Noida\'s peripheral communities, helping them become financially independent through skill development.',
    icon: 'woman',
    impact: '150+ women trained',
    year: '2023',
  },
  {
    id: 'csr-blood',
    title: 'Jeevan Daan Blood Drive',
    description: 'Quarterly blood donation camps at our offices with employee participation, in partnership with Red Cross and major hospitals. Life-saving contributions from our team to the community.',
    icon: 'favorite',
    impact: '500+ units donated',
    year: 'Ongoing',
  },
  {
    id: 'csr-skill',
    title: 'Construction Worker Welfare',
    description: 'Skill development, safety training, and welfare support for construction workers on sites of our developer partners. Ensuring dignity and safety for those who build the homes we sell.',
    icon: 'engineering',
    impact: '300+ workers benefited',
    year: '2024',
  },
];

export const csrStats: CSRStat[] = [
  { value: '10,000+', label: 'Trees Planted', icon: 'eco' },
  { value: '200+', label: 'Students Supported', icon: 'school' },
  { value: '1,200+', label: 'Health Camp Beneficiaries', icon: 'medical_services' },
  { value: '500+', label: 'Blood Units Donated', icon: 'bloodtype' },
  { value: '₹1.5Cr+', label: 'CSR Investment', icon: 'currency_rupee' },
  { value: '15+', label: 'NGO Partners', icon: 'handshake' },
];

export const csrEvents: CSREvent[] = [
  {
    id: 'event-1',
    title: 'World Environment Day Tree Plantation',
    date: 'June 5, 2024',
    location: 'Sector 15, Noida',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
    description: 'The entire FIVEX team joined hands to plant 500 trees across Noida\'s green belt areas in honor of World Environment Day.',
    participants: 85,
    category: 'Environment',
  },
  {
    id: 'event-2',
    title: 'Annual Blood Donation Camp',
    date: 'May 15, 2024',
    location: 'FIVEX HQ, Sector 132, Noida',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&q=80',
    description: 'Our quarterly blood donation drive saw a record 120 units donated by employees, clients, and community members.',
    participants: 120,
    category: 'Health',
  },
  {
    id: 'event-3',
    title: 'Shiksha Setu School Kit Distribution',
    date: 'April 14, 2024',
    location: 'Sector 58, Noida',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    description: 'On Ambedkar Jayanti, we distributed school supplies, uniforms, and educational materials to 75 underprivileged students.',
    participants: 75,
    category: 'Education',
  },
];
