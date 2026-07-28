export const companyInfo = {
  name: 'MoneyTree Realty Services Limited',
  shortName: 'FIVEX GROWTH REALTY',
  tagline: 'Premier real estate brokerage delivering unparalleled investment growth through strategic property acquisitions and bespoke advisory across India.',
  foundedYear: 2010,
  gstin: '07AABCF1234A1Z5',
  rera: {
    up: 'UPRERAAGT25048',
    haryana: 'RC/HARERA/GGM/2569/2164/2024/282',
    maharashtra: 'A041172401062',
  },
};

export const officeAddresses = [
  {
    id: 'hq',
    label: 'Corporate Headquarters',
    address: 'B-15, Sector 62, Noida, Uttar Pradesh - 201309',
    phone: '+91 98765 43210',
    email: 'info@fivexgrowthrealty.com',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6167!2d77.3674!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMjInMDIuNiJF!5e0!3m2!1sen!2sin!4v1234567890',
    isPrimary: true,
  },
  {
    id: 'gurgaon',
    label: 'Gurgaon Branch',
    address: '4th Floor, Tower B, DLF Cyber City, Sector 25, Gurgaon, Haryana - 122002',
    phone: '+91 91234 56789',
    email: 'gurgaon@fivexgrowthrealty.com',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.7!2d77.0888!3d28.4944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI5JzM5LjkiTiA3N8KwMDUnMTkuNiJF!5e0!3m2!1sen!2sin!4v1234567890',
    isPrimary: false,
  },
  {
    id: 'mumbai',
    label: 'Mumbai Office',
    address: 'Unit 302, One World Centre, Lower Parel, Mumbai, Maharashtra - 400013',
    phone: '+91 22 4567 8900',
    email: 'mumbai@fivexgrowthrealty.com',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4!2d72.9925!3d18.9987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzAwLjAiTiA3MsKwNTknMzMuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
    isPrimary: false,
  },
];

export const contactDetails = {
  primaryPhone: '+91 98765 43210',
  secondaryPhone: '+91 91234 56789',
  whatsapp: '+91 98765 43210',
  email: 'info@fivexgrowthrealty.com',
  salesEmail: 'sales@fivexgrowthrealty.com',
  supportEmail: 'support@fivexgrowthrealty.com',
  workingHours: {
    weekdays: 'Monday – Friday: 9:00 AM – 7:00 PM',
    saturday: 'Saturday: 9:00 AM – 5:00 PM',
    sunday: 'Sunday: By Appointment Only',
  },
  emergencyContact: '+91 98765 43210',
};

export const socialLinks = [
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/fivex-growth-realty', iconImg: '/social/linkedin.png' },
  { platform: 'Facebook', url: 'https://facebook.com/fivexgrowthrealty', iconImg: '/social/facebok.png' },
  { platform: 'Instagram', url: 'https://instagram.com/fivexgrowthrealty', iconImg: '/social/instagram.png' },
  { platform: 'YouTube', url: 'https://youtube.com/@fivexgrowthrealty', iconImg: '/social/youtube.png' },
  { platform: 'Twitter/X', url: 'https://twitter.com/fivexrealty', iconImg: '/social/twitter.png' },
];

export const footerData = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Leadership', href: '/about#leadership' },
    { label: 'Our Team', href: '/team' },
    { label: 'Mission & Vision', href: '/about#vision' },
    { label: 'Our Journey', href: '/about#journey' },
    { label: 'Awards', href: '/about#awards' },
    { label: 'CSR Activities', href: '/csr' },
    { label: 'Careers', href: '/careers' },
  ],
  projects: [
    { label: 'All Projects', href: '/projects' },
    { label: 'Residential Projects', href: '/projects?type=residential' },
    { label: 'Commercial Projects', href: '/projects?type=commercial' },
    { label: 'Upcoming Projects', href: '/projects?status=upcoming' },
    { label: 'Completed Projects', href: '/projects?status=completed' },
  ],
  locations: [
    { label: 'Noida', href: '/locations?city=noida' },
    { label: 'Greater Noida', href: '/locations?city=greater-noida' },
    { label: 'Gurgaon', href: '/locations?city=gurgaon' },
    { label: 'Delhi NCR', href: '/locations?city=delhi-ncr' },
    { label: 'Mumbai', href: '/locations?city=mumbai' },
  ],
  propertyTypes: [
    { label: 'Residential Apartments', href: '/properties?type=apartment' },
    { label: 'Luxury Villas', href: '/properties?type=villa' },
    { label: 'Commercial Offices', href: '/properties?type=office' },
    { label: 'Retail Spaces', href: '/properties?type=retail' },
    { label: 'Plots & Land', href: '/properties?type=plot' },
    { label: 'Penthouses', href: '/properties?type=penthouse' },
  ],
  services: [
    { label: 'Property Advisory', href: '/services' },
    { label: 'Investment Consulting', href: '/services#investment' },
    { label: 'Home Loans', href: '/services#loans' },
    { label: 'Legal Advisory', href: '/services#legal' },
    { label: 'NRI Services', href: '/services#nri' },
    { label: 'Property Management', href: '/services#management' },
  ],
  quickLinks: [
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Our Partners', href: '/partners' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'CSR Policy', href: '/csr-policy' },
    { label: 'RERA Disclosure', href: '/contact#rera' },
    { label: 'Sitemap', href: '/sitemap' },
  ],
};
