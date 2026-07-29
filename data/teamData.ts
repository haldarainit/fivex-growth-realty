export interface TeamMemberProfile {
  id: string;
  name: string;
  designation: string;
  department: string;
  shortBio: string;
  image: string;
  imageAlt: string;
  phone: string;
  email: string;
  linkedin?: string;
  skills: string[];
  experience: number;
  location: string;
}

export const departments = [
  { id: 'all', label: 'All Departments' },
  { id: 'sales', label: 'Sales & Advisory' },
  { id: 'marketing', label: 'Marketing & Brand' },
  { id: 'operations', label: 'Operations' },
  { id: 'legal', label: 'Legal & Compliance' },
  { id: 'finance', label: 'Finance' },
  { id: 'tech', label: 'Technology' },
  { id: 'hr', label: 'Human Resources' },
];

export const teamMembers: TeamMemberProfile[] = [
  {
    id: 'team-rohan-singh',
    name: 'Rohan Singh',
    designation: 'Senior Property Advisor',
    department: 'sales',
    shortBio: 'Expert in luxury residential properties across Noida and Greater Noida with 8 years of client advisory experience.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    imageAlt: 'Rohan Singh',
    phone: '+91 8279319964',
    email: 'infofivexgrowthrealty@gmail.com',
    linkedin: 'https://linkedin.com/company/fivex-growth-realty',
    skills: ['Residential Sales', 'Client Consultation', 'Market Analysis', 'Negotiation'],
    experience: 8,
    location: 'Noida',
  },
  {
    id: 'team-neha-gupta',
    name: 'Neha Gupta',
    designation: 'Investment Advisor',
    department: 'sales',
    shortBio: 'Specializes in commercial investment advisory and portfolio strategy for HNI clients seeking high-yield real estate assets.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    imageAlt: 'Neha Gupta',
    phone: '+91 8279319964',
    email: 'infofivexgrowthrealty@gmail.com',
    linkedin: 'https://linkedin.com/company/fivex-growth-realty',
    skills: ['Commercial Real Estate', 'Investment Strategy', 'Due Diligence', 'ROI Analysis'],
    experience: 6,
    location: 'Noida',
  },
  {
    id: 'team-vikash-kumar',
    name: 'Vikash Kumar',
    designation: 'NRI Relations Manager',
    department: 'sales',
    shortBio: 'Dedicated NRI desk specialist helping diaspora investors navigate Indian real estate with end-to-end support.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    imageAlt: 'Vikash Kumar',
    phone: '+91 8279319964',
    email: 'infofivexgrowthrealty@gmail.com',
    skills: ['NRI Advisory', 'Legal Documentation', 'POA Management', 'Relationship Building'],
    experience: 5,
    location: 'Noida',
  },
  {
    id: 'team-sneha-agarwal',
    name: 'Sneha Agarwal',
    designation: 'Digital Marketing Head',
    department: 'marketing',
    shortBio: 'Drives FIVEX\'s digital presence with expertise in real estate content marketing, social media, and lead generation campaigns.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    imageAlt: 'Sneha Agarwal',
    phone: '+91 8279319964',
    email: 'infofivexgrowthrealty@gmail.com',
    linkedin: 'https://linkedin.com/company/fivex-growth-realty',
    skills: ['Digital Marketing', 'SEO/SEM', 'Social Media', 'Content Strategy', 'Analytics'],
    experience: 7,
    location: 'Noida',
  },
  {
    id: 'team-arun-mishra',
    name: 'Arun Mishra',
    designation: 'Operations Manager',
    department: 'operations',
    shortBio: 'Ensures seamless operational excellence across FIVEX offices with process optimization and team coordination expertise.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    imageAlt: 'Arun Mishra',
    phone: '+91 8279319964',
    email: 'infofivexgrowthrealty@gmail.com',
    skills: ['Operations Management', 'Process Optimization', 'Team Leadership', 'CRM Systems'],
    experience: 9,
    location: 'Noida',
  },
  {
    id: 'team-kavita-sharma',
    name: 'Kavita Sharma',
    designation: 'Legal Compliance Officer',
    department: 'legal',
    shortBio: 'Ensures all FIVEX transactions meet RERA compliance standards and provides legal advisory on property documentation.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    imageAlt: 'Kavita Sharma',
    phone: '+91 8279319964',
    email: 'infofivexgrowthrealty@gmail.com',
    linkedin: 'https://linkedin.com/company/fivex-growth-realty',
    skills: ['RERA Compliance', 'Property Law', 'Title Clearance', 'Contract Review', 'Due Diligence'],
    experience: 12,
    location: 'Noida',
  },
  {
    id: 'team-rajan-patel',
    name: 'Rajan Patel',
    designation: 'Finance & Accounts Head',
    department: 'finance',
    shortBio: 'Manages FIVEX financial operations, client payment processing, and coordinates with banking partners for home loan facilitation.',
    image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&q=80',
    imageAlt: 'Rajan Patel',
    phone: '+91 8279319964',
    email: 'infofivexgrowthrealty@gmail.com',
    skills: ['Financial Management', 'Home Loan Advisory', 'Tax Planning', 'Banking Relations', 'Audit'],
    experience: 10,
    location: 'Noida',
  },
  {
    id: 'team-ananya-das',
    name: 'Ananya Das',
    designation: 'HR & Talent Manager',
    department: 'hr',
    shortBio: 'Builds and nurtures FIVEX\'s talent ecosystem, ensuring the right people are in place to deliver excellence for clients.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80',
    imageAlt: 'Ananya Das',
    phone: '+91 8279319964',
    email: 'infofivexgrowthrealty@gmail.com',
    linkedin: 'https://linkedin.com/company/fivex-growth-realty',
    skills: ['Talent Acquisition', 'Employee Development', 'Culture Building', 'Performance Management'],
    experience: 6,
    location: 'Noida',
  },
];
