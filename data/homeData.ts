import {
  NavItem,
  HeroStatItem,
  PropertyItem,
  TestimonialItem,
  FaqItem,
  FeatureItem,
  PillarItem,
  ContactInfoItem,
} from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];



export const heroStats: HeroStatItem[] = [
  { icon: 'verified_user', label: 'Trusted Advisors' },
  { icon: 'task_alt', label: 'Verified Projects' },
  { icon: 'location_on', label: 'Prime Locations' },
  { icon: 'trending_up', label: 'Expert Guidance' },
];

export const searchLocations = [
  'All Locations',
  'Delhi NCR',
  'Noida Expressway',
  'Gurugram',
  'Jewar Airport Corridor',
  'Greater Noida',
];

export const searchPropertyTypes = [
  'All Types',
  'Residential Real Estate',
  'Commercial Real Estate',
  'Luxury Villas',
  'Premium Apartments',
  'Pre-Launch Opportunities',
];

export const searchBudgets = [
  'Any Budget',
  '₹50 Lakhs - ₹1 Cr',
  '₹1 Cr - ₹3 Cr',
  '₹3 Cr - ₹5 Cr',
  'Above ₹5 Cr',
];

export const aboutPillars: PillarItem[] = [
  {
    icon: 'handshake',
    title: 'Transparency First',
    description: 'Full legal verification and clear communication for every transaction.',
  },
  {
    icon: 'insights',
    title: 'Expert Market Insights',
    description: 'Data-driven advice to maximize your ROI and portfolio growth.',
  },
];

export const featuredProperties: PropertyItem[] = [
  {
    id: 'prop-1',
    title: 'Eldeco Live By The Greens',
    location: 'Sector 150, Noida (5 mins to Metro)',
    price: '₹1.85 Cr*',
    reraId: 'UPRERAPRJ12345',
    badgeStyle: 'bg-secondary text-white',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5JaE24MJYG344KYudLJuyBnbESQ1jaxDMFFSOYECjyuGTW-24K-nzGY8DppEDHr6nI1VOqrAvolfuDONsIO0I4CaQbVCyVkEJYGp-3iIh4tYsA06Pthf4BSvzPFRTUN2ABgsDt-HC6AY8xTFiB6u6Pp4rAGAYp3P00mHojIsb5elvxTGTosSoiHfyXekPO7eKQYtDHfIC5a-IK548gifRY63jyctpY3Gp_lH4X-D3MKFs_b1ageuhP8x4KFAJTHxYJtlKWoi7Mr_8',
    tags: ['Italian Marble', 'Smart Home Hub'],
    specs: [
      { icon: 'bed', label: '3 BHK' },
      { icon: 'square_foot', label: '1550 sq.ft' },
      { icon: 'directions_car', label: 'EV Charging' },
    ],
    actionText: 'Download Brochure',
  },
  {
    id: 'prop-2',
    title: 'Cyberthum Commercial Hub',
    location: 'Sector 140, Noida (Direct Highway Access)',
    price: '₹3.40 Cr*',
    reraId: 'UPRERAPRJ56789',
    badgeStyle: 'bg-primary text-white',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwvBYrOj-nxKng1waEymOjSYTdt2LxFgSnZo17hiSoKIwe8koeJe8UsYYKHpTUrnV4umG_BGC_52725giUmy6MJQ-UnYsON4RFrn0JhX6vyN9ztLVWm_mUFjP7kt0EbGCHxegB9sKG01zxSDfCGLlOmeoymtjZhUHCuqUqT-prjemns47ykRcbq6tHAtodwvKiwNaXHdDvnero-Kd5kEmlnTLkmrYXeuQTtBSi_3v-rt60exBhIixcizcHBdUhXR4eAQ6pZokh3vdX',
    tags: ['LEED Gold', 'Helipad Access'],
    specs: [
      { icon: 'business_center', label: 'Office Space' },
      { icon: 'height', label: 'High ROI' },
      { icon: 'stairs', label: 'Floor 12-25' },
    ],
    actionText: 'View Floor Plans',
  },
  {
    id: 'prop-3',
    title: 'Godrej Woods Signature Villas',
    location: 'Sector 43, Noida (Adjacent to Golf Course)',
    price: '₹2.10 Cr*',
    reraId: 'UPRERAPRJ99900',
    badgeStyle: 'bg-gold text-white',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4M6unZvoZbS4M_HujZi216_RQyRekQ0qN634z0oIWwm9X90YhCePr8jITtaFvBZjq8I00b9ZY9QCfvpVShxbxSJxIAvFz8a5sfR0zo1F-VgNf0O53QTl0XJNnWPfDq16c_kvszdJW1qDXIMS6Noa6F9w7uvJ1_mJw3Ru-Z8vBrYMlGJ78o0GUrUFIAh3ELLzofqpaNB5EtiryNfwF7Ag8gK6YmcPzf5MRCmuZwz2tNJP1I22LDDNBOeCo45HNkk0U7z9ENIn0vJJe',
    tags: ['Private Pool', 'VRV AC System'],
    specs: [
      { icon: 'villa', label: '4 BHK Luxury' },
      { icon: 'landscape', label: '250 Sqyd' },
      { icon: 'pool', label: 'Clubhouse' },
    ],
    actionText: 'Book Private Tour',
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: '"As an NRI living in London, navigating the Indian property market felt daunting. FiveX Growth Realty provided an end-to-end concierge service that was beyond impressive. Their market intelligence on upcoming infrastructure in Noida Phase II helped me secure a high-yield investment before the prices surged. The level of transparency in their legal vetting is unmatched."',
    author: 'Aditya Malhotra',
    role: 'Tech Entrepreneur, London',
    initials: 'AM',
    variant: 'light',
  },
  {
    id: 'test-2',
    quote: '"Expanding our corporate footprint to Delhi NCR required a partner who understood commercial zoning and ROI forecasting. The team at FiveX Growth Realty identified a Grade-A office space in Dubai-equivalent luxury standards. Their negotiation skills and deep connections with developers saved us significant capital. Truly elite consultants."',
    author: 'Zaid Sheikh',
    role: 'Managing Director, Dubai Logistics',
    initials: 'ZS',
    variant: 'dark',
  },
  {
    id: 'test-3',
    quote: '"Buying my home wasn\'t just about square footage; it was about lifestyle. FiveX Growth Realty curated a shortlist of the most exclusive penthouses in Noida that weren\'t even on the public market. Their personalized approach and attention to my aesthetic preferences made the process seamless. They don\'t just sell houses; they understand luxury."',
    author: 'Ritu Khanna',
    role: 'Renowned Interior Architect',
    initials: 'RK',
    variant: 'light',
  },
];

import { faqItems } from '@/data/faqData';

export const faqs: FaqItem[] = faqItems;

export const fivexFeatures: FeatureItem[] = [
  {
    id: 'feat-1',
    icon: 'groups',
    title: 'Experienced Leadership Team',
    description: 'Over 13+ years of collective leadership in North India real estate market advisory.',
  },
  {
    id: 'feat-2',
    icon: 'handshake',
    title: 'Transparent Business Practices',
    description: '100% legal title clearance, RERA-compliant advisory, and clear documentation.',
  },
  {
    id: 'feat-3',
    icon: 'person_pin',
    title: 'Customer-First Approach',
    description: 'Personalized property portfolio planning tailored to your budget and ROI goals.',
  },
  {
    id: 'feat-4',
    icon: 'insights',
    title: 'Extensive Market Knowledge',
    description: 'Deep market insights in Noida, Yamuna Expressway, Jewar Aerocity, and NCR.',
  },
  {
    id: 'feat-5',
    icon: 'trending_up',
    title: 'Strategic Investment Solutions',
    description: 'High appreciation yield residential, commercial, authority plots & pre-launch opportunities.',
  },
  {
    id: 'feat-6',
    icon: 'domain',
    title: 'Strong Developer Relationships',
    description: 'Direct tie-ups with 50+ tier-1 developers across Noida, NCR, and Gurgaon.',
  },
  {
    id: 'feat-7',
    icon: 'support_agent',
    title: 'End-to-End Support',
    description: 'From site visits & legal vetting to bank loans, registration, and post-purchase support.',
  },
];

export const contactInfos: ContactInfoItem[] = [
  {
    icon: 'call',
    label: 'Direct Line',
    value: '+91 8279319964',
  },
  {
    icon: 'mail',
    label: 'Email Inquiry',
    value: 'infofivexgrowthrealty@gmail.com',
  },
  {
    icon: 'location_on',
    label: 'Visit Headquarters',
    value: 'ATS Bouquet, Sector 132, Noida, UP - 201305',
  },
];

