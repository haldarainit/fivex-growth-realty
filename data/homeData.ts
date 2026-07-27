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
  { label: 'About', href: '/about' },
  { label: 'Properties', href: '/properties' },
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/projects' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

export const heroStats: HeroStatItem[] = [
  { icon: 'verified_user', label: 'Trusted Advisors' },
  { icon: 'task_alt', label: 'Verified Projects' },
  { icon: 'location_on', label: 'Prime Locations' },
  { icon: 'trending_up', label: 'Expert Guidance' },
];

export const searchLocations = [
  'All Noida',
  'Greater Noida',
  'Delhi NCR',
  'Gurgaon',
];

export const searchPropertyTypes = [
  'Residential',
  'Commercial',
  'Plots',
];

export const searchBudgets = [
  '50L - 1Cr',
  '1Cr - 5Cr',
  '5Cr+',
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
    badgeStyle: 'bg-gold text-primary',
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
    quote: '"As an NRI living in London, navigating the Indian property market felt daunting. FIVEX provided an end-to-end concierge service that was beyond impressive. Their market intelligence on upcoming infrastructure in Noida Phase II helped me secure a high-yield investment before the prices surged. The level of transparency in their legal vetting is unmatched."',
    author: 'Aditya Malhotra',
    role: 'Tech Entrepreneur, London',
    initials: 'AM',
    variant: 'light',
  },
  {
    id: 'test-2',
    quote: '"Expanding our corporate footprint to Delhi NCR required a partner who understood commercial zoning and ROI forecasting. The team at FIVEX identified a Grade-A office space in Dubai-equivalent luxury standards. Their negotiation skills and deep connections with developers saved us significant capital. Truly elite consultants."',
    author: 'Zaid Sheikh',
    role: 'Managing Director, Dubai Logistics',
    initials: 'ZS',
    variant: 'dark',
  },
  {
    id: 'test-3',
    quote: '"Buying my home wasn\'t just about square footage; it was about lifestyle. FIVEX curated a shortlist of the most exclusive penthouses in Noida that weren\'t even on the public market. Their personalized approach and attention to my aesthetic preferences made the process seamless. They don\'t just sell houses; they understand luxury."',
    author: 'Ritu Khanna',
    role: 'Renowned Interior Architect',
    initials: 'RK',
    variant: 'light',
  },
];

export const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How does FIVEX ensure investment security for its clients?',
    answer: 'We employ a rigorous 5-step verification process that includes RERA compliance checks, title deed clearance, developer track record analysis, and current construction progress audits. We only list properties from developers with a proven history of timely delivery and structural integrity.',
  },
  {
    id: 'faq-2',
    question: 'What is the process for NRIs looking to invest in Noida real estate?',
    answer: 'FIVEX provides a dedicated NRI concierge. The process involves identifying a project, verifying documents through our legal team, managing the NRE/NRO account transactions, and handling the Power of Attorney (PoA) if you are unable to travel for registration. We handle all local paperwork on your behalf.',
  },
  {
    id: 'faq-3',
    question: 'What are the expected ROI and rental yields in Delhi NCR currently?',
    answer: 'Current market data indicates residential capital appreciation of 8-12% annually in high-growth corridors like Sector 150 and Yamuna Expressway. Commercial properties in prime hubs like Sector 140 are yielding 6-9% in annual rentals, significantly higher than the national average.',
  },
  {
    id: 'faq-4',
    question: 'Does FIVEX assist with home loans and financial planning?',
    answer: 'Yes, we have strategic partnerships with top-tier banks including HDFC, ICICI, and SBI. We assist in loan eligibility checks, document compilation, and ensuring you get the most competitive interest rates and fastest processing times.',
  },
  {
    id: 'faq-5',
    question: 'What property verification standards do you follow?',
    answer: 'Our standards exceed mandatory RERA requirements. We conduct independent soil tests (for plots), environmental impact reviews, and check for any historical litigation on the land. Our "FIVEX Verified" badge is only awarded to projects that pass our internal 42-point checklist.',
  },
  {
    id: 'faq-6',
    question: 'What is the timeline for property registration after purchase?',
    answer: 'For ready-to-move properties, registration typically takes 15-30 days once the full payment and documentation are in place. For under-construction projects, the sub-lease deed execution happens upon completion, following the developer\'s handover schedule.',
  },
];

export const fivexFeatures: FeatureItem[] = [
  {
    id: 'feat-1',
    icon: 'verified',
    title: 'Verified Properties',
    description: 'We conduct rigorous 5-step verification on all projects to ensure your investment is safe and legally sound.',
  },
  {
    id: 'feat-2',
    icon: 'person_pin',
    title: 'Expert Consultation',
    description: 'Personalized advisors who understand your financial goals and property requirements precisely.',
  },
  {
    id: 'feat-3',
    icon: 'currency_exchange',
    title: 'Best Price Guarantee',
    description: 'Leveraging our developer partnerships to get you exclusive deals and pre-launch prices.',
  },
  {
    id: 'feat-4',
    icon: 'account_balance',
    title: 'Loan Assistance',
    description: 'Seamless home loan facilitation through our network of premium banking partners.',
  },
  {
    id: 'feat-5',
    icon: 'gavel',
    title: 'Legal Advisory',
    description: 'Expert legal support for registration, paperwork, and property title clearance.',
  },
  {
    id: 'feat-6',
    icon: 'history_edu',
    title: 'Resale Support',
    description: 'Long-term commitment helping you exit or upgrade your real estate assets profitably.',
  },
];

export const contactInfos: ContactInfoItem[] = [
  {
    icon: 'call',
    label: 'Direct Line',
    value: '+91 98XXX XXXXX',
  },
  {
    icon: 'mail',
    label: 'Email Inquiry',
    value: 'info@fivexgrowthrealty.com',
  },
  {
    icon: 'location_on',
    label: 'Visit Headquarters',
    value: 'Sector 62, Noida, Uttar Pradesh',
  },
];
