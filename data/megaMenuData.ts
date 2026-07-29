export interface CityOption {
  id: string;
  name: string;
  count: number;
}

export interface PropertyTypeOption {
  id: string;
  name: string;
}

export interface CityProject {
  id: string;
  title: string;
  cityId: string;
  typeName: string;
  location: string;
  price: string;
  image: string;
  href: string;
}

// 🌍 Areas We Serve - Exact Order requested by Client
export const megaMenuCities: CityOption[] = [
  { id: 'delhi-ncr', name: 'Delhi NCR', count: 42 },
  { id: 'noida-expressway', name: 'Noida Expressway', count: 35 },
  { id: 'noida-sectors', name: 'Noida, Sector 150, 137, 93, 76', count: 28 },
  { id: 'noida-extension', name: 'Noida Extension', count: 31 },
  { id: 'greater-noida', name: 'Greater Noida', count: 22 },
  { id: 'pari-chowk', name: 'Pari Chowk', count: 16 },
  { id: 'knowledge-park', name: 'Knowledge Park', count: 14 },
  { id: 'yamuna-expressway', name: 'Yamuna Expressway Sector 18, 20, 22D', count: 25 },
  { id: 'jewar', name: 'Jewar', count: 19 },
  { id: 'ghaziabad', name: 'Ghaziabad', count: 18 },
  { id: 'indirapuram', name: 'Indirapuram', count: 15 },
  { id: 'rajnagar-extension', name: 'Rajnagar Extension', count: 12 },
  { id: 'jewar-airport', name: 'Jewar Airport Corridor', count: 29 },
  { id: 'gurugram', name: 'Gurugram', count: 38 },
  { id: 'dwarka', name: 'Dwarka', count: 20 },
  { id: 'new-noida', name: 'New Noida', count: 17 },
];

// Our Services - Property Types requested by Client
export const megaMenuPropertyTypes: PropertyTypeOption[] = [
  { id: 'all', name: 'All Services' },
  { id: 'residential', name: 'Residential Real Estate' },
  { id: 'commercial', name: 'Commercial Real Estate' },
  { id: 'premium-apartments', name: 'Premium Apartments' },
  { id: 'luxury-villas', name: 'Luxury Villas' },
  { id: 'ready-to-move', name: 'Ready-to-Move Homes' },
  { id: 'investment', name: 'Investment Properties' },
  { id: 'pre-launch', name: 'Pre-Launch Opportunities' },
];

export const megaMenuProjects: CityProject[] = [
  // Delhi NCR
  {
    id: 'dlf-one-midtown',
    cityId: 'delhi-ncr',
    typeName: 'Residential Real Estate',
    title: 'DLF One Midtown Moti Nagar',
    location: 'Moti Nagar, New Delhi',
    price: '₹3.95 cr onward',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=600&q=80',
    href: '/projects/dlf-one-midtown',
  },
  {
    id: 'unity-the-amaryllis',
    cityId: 'delhi-ncr',
    typeName: 'Premium Apartments',
    title: 'The Amaryllis Karol Bagh',
    location: 'Karol Bagh, New Delhi',
    price: '₹4.50 cr onward',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    href: '/projects/the-amaryllis',
  },

  // Noida Expressway
  {
    id: 'paras-avenue',
    cityId: 'noida-expressway',
    typeName: 'Commercial Real Estate',
    title: 'Paras Avenue High Street Retail',
    location: 'Sector 129, Noida Expressway',
    price: '₹85 lakh onward',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&q=80',
    href: '/projects/paras-avenue',
  },
  {
    id: 'godrej-tropical-isle',
    cityId: 'noida-expressway',
    typeName: 'Luxury Villas',
    title: 'Godrej Tropical Isle Sector 146',
    location: 'Sector 146, Noida Expressway',
    price: '₹2.99 cr onward',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    href: '/projects/godrej-tropical-isle',
  },

  // Noida, Sector 150, 137, 93, 76
  {
    id: 'eldeco-live-greens',
    cityId: 'noida-sectors',
    typeName: 'Premium Apartments',
    title: 'Eldeco Live By The Greens',
    location: 'Sector 150, Noida',
    price: '₹1.85 cr onward',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    href: '/projects/eldeco-live-by-the-greens',
  },
  {
    id: 'supertech-supernova',
    cityId: 'noida-sectors',
    typeName: 'Pre-Launch Opportunities',
    title: 'Supernova Spira Luxury Suites',
    location: 'Sector 94, Noida',
    price: '₹2.40 cr onward',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    href: '/projects/supernova-spira',
  },

  // Noida Extension
  {
    id: 'express-astra',
    cityId: 'noida-extension',
    typeName: 'Residential Real Estate',
    title: 'Express Astra Sector 1',
    location: 'Noida Extension (Gr. Noida West)',
    price: '₹1.10 cr onward',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    href: '/projects/express-astra',
  },

  // Greater Noida
  {
    id: 'godrej-golf-links',
    cityId: 'greater-noida',
    typeName: 'Luxury Villas',
    title: 'Godrej Golf Links Resort Villas',
    location: 'Jaypee Greens, Greater Noida',
    price: '₹3.80 cr onward',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    href: '/projects/godrej-golf-links',
  },

  // Pari Chowk
  {
    id: 'ansal-plaza-pari-chowk',
    cityId: 'pari-chowk',
    typeName: 'Commercial Real Estate',
    title: 'Pari Chowk Central Hub',
    location: 'Pari Chowk, Greater Noida',
    price: '₹75 lakh onward',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    href: '/projects/pari-chowk-hub',
  },

  // Knowledge Park
  {
    id: 'knowledge-park-tech',
    cityId: 'knowledge-park',
    typeName: 'Investment Properties',
    title: 'Knowledge Park Corporate Suites',
    location: 'Knowledge Park III, Greater Noida',
    price: '₹60 lakh onward',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    href: '/projects/knowledge-park-tech',
  },

  // Yamuna Expressway Sector 18, 20, 22D
  {
    id: 'yeida-city-plots',
    cityId: 'yamuna-expressway',
    typeName: 'Investment Properties',
    title: 'Yamuna Expressway Authority Sectors 18/20/22D',
    location: 'Sector 18/20, Yamuna Expressway',
    price: '₹85 lakh onward',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    href: '/projects/yeida-city-plots',
  },

  // Jewar
  {
    id: 'jewar-greenfield-estates',
    cityId: 'jewar',
    typeName: 'Pre-Launch Opportunities',
    title: 'Jewar Aerocity Green Enclave',
    location: 'Jewar Central Corridor',
    price: '₹55 lakh onward',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80',
    href: '/projects/jewar-aerocity',
  },

  // Ghaziabad
  {
    id: 'mahagun-mezzaria-ghz',
    cityId: 'ghaziabad',
    typeName: 'Ready-to-Move Homes',
    title: 'Mahagun Empire Heights',
    location: 'Ghaziabad Central',
    price: '₹95 lakh onward',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    href: '/projects/mahagun-empire',
  },

  // Indirapuram
  {
    id: 'shipra-sun-city',
    cityId: 'indirapuram',
    typeName: 'Ready-to-Move Homes',
    title: 'Indirapuram Residency Towers',
    location: 'Ahinsa Khand, Indirapuram',
    price: '₹1.25 cr onward',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    href: '/projects/indirapuram-residency',
  },

  // Rajnagar Extension
  {
    id: 'rajnagar-luxury-flats',
    cityId: 'rajnagar-extension',
    typeName: 'Premium Apartments',
    title: 'Rajnagar Green Valley',
    location: 'Rajnagar Extension, Ghaziabad',
    price: '₹68 lakh onward',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
    href: '/projects/rajnagar-green-valley',
  },

  // Jewar Airport
  {
    id: 'jewar-airport-skyline',
    cityId: 'jewar-airport',
    typeName: 'Investment Properties',
    title: 'Noida International Airport Logistics Hub',
    location: 'Jewar Airport Hub Corridor',
    price: '₹1.45 cr onward',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    href: '/projects/jewar-airport-hub',
  },

  // Gurugram
  {
    id: 'elan-statement',
    cityId: 'gurugram',
    typeName: 'Commercial Real Estate',
    title: 'Elan The Statement Sector 49 Gurugram',
    location: 'Sector 49, Gurugram',
    price: '₹3.20 cr onward',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    href: '/projects/elan-the-statement',
  },
  {
    id: 'dlf-privana',
    cityId: 'gurugram',
    typeName: 'Luxury Villas',
    title: 'DLF Privana South Sector 76',
    location: 'Sector 76, Gurugram',
    price: '₹6.25 cr onward',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    href: '/projects/dlf-privana',
  },

  // Dwarka
  {
    id: 'dwarka-diplomatic-enclave',
    cityId: 'dwarka',
    typeName: 'Residential Real Estate',
    title: 'Diplomatic Enclave Heights Sector 24',
    location: 'Sector 24, Dwarka, New Delhi',
    price: '₹2.85 cr onward',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=600&q=80',
    href: '/projects/dwarka-diplomatic-enclave',
  },

  // New Noida
  {
    id: 'new-noida-smart-city',
    cityId: 'new-noida',
    typeName: 'Pre-Launch Opportunities',
    title: 'New Noida DNGIR Smart Industrial Hub',
    location: 'Dadri-Noida-Ghaziabad Investment Region',
    price: '₹95 lakh onward',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80',
    href: '/projects/new-noida-smart-city',
  },
];
