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
  typeName: string; // Residential, Commercial, Mixed Use Property, Plots
  location: string;
  price: string;
  image: string;
  href: string;
}

export const megaMenuCities: CityOption[] = [
  { id: 'gurugram', name: 'Gurugram', count: 36 },
  { id: 'noida', name: 'Noida', count: 24 },
  { id: 'mumbai', name: 'Mumbai', count: 30 },
  { id: 'lucknow', name: 'Lucknow', count: 16 },
  { id: 'pune', name: 'Pune', count: 14 },
  { id: 'greater-noida-west', name: 'Greater Noida West', count: 12 },
  { id: 'greater-noida', name: 'Greater Noida', count: 10 },
  { id: 'yeida', name: 'YEIDA', count: 8 },
  { id: 'bangalore', name: 'Bangalore', count: 18 },
  { id: 'delhi-ncr', name: 'Delhi NCR', count: 28 },
];

export const megaMenuPropertyTypes: PropertyTypeOption[] = [
  { id: 'all', name: 'All Types' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'mixed-use', name: 'Mixed Use Property' },
  { id: 'plots', name: 'Plots' },
  { id: 'residential', name: 'Residential' },
];

export const megaMenuProjects: CityProject[] = [
  // Gurugram Projects
  {
    id: 'elan-statement',
    cityId: 'gurugram',
    typeName: 'Commercial',
    title: 'Elan The Statement Sector 49 Gurugram',
    location: 'Sector 49, Gurugram',
    price: 'On Request',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    href: '/projects/elan-the-statement',
  },
  {
    id: 'bptp-amstoria',
    cityId: 'gurugram',
    typeName: 'Residential',
    title: 'BPTP Amstoria Verti-Greens & GAIA Residences',
    location: 'Gurugram',
    price: '₹3.53 cr onward',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    href: '/projects/bptp-amstoria',
  },
  {
    id: 'signature-global',
    cityId: 'gurugram',
    typeName: 'Mixed Use Property',
    title: 'Signature Global Cloverdale SPR Sector 71',
    location: 'Sector 71, Gurugram',
    price: '₹2.10 cr onward',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80',
    href: '/projects/signature-global-cloverdale',
  },
  {
    id: 'dlf-privana',
    cityId: 'gurugram',
    typeName: 'Residential',
    title: 'DLF Privana South Sector 76',
    location: 'Sector 76, Gurugram',
    price: '₹6.25 cr onward',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    href: '/projects/dlf-privana',
  },
  {
    id: 'godrej-aristocrat',
    cityId: 'gurugram',
    typeName: 'Residential',
    title: 'Godrej Aristocrat Sector 49',
    location: 'Sector 49, Gurugram',
    price: '₹4.85 cr onward',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    href: '/projects/godrej-aristocrat',
  },
  {
    id: 'm3m-jewel',
    cityId: 'gurugram',
    typeName: 'Commercial',
    title: 'M3M Jewel Sector 25 MG Road',
    location: 'MG Road, Gurugram',
    price: '₹1.95 cr onward',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    href: '/projects/m3m-jewel',
  },
  {
    id: 'smartworld-one-dxp',
    cityId: 'gurugram',
    typeName: 'Plots',
    title: 'Smartworld One DXP Sector 113',
    location: 'Dwarka Expressway, Gurugram',
    price: '₹2.75 cr onward',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    href: '/projects/smartworld-one-dxp',
  },

  // Noida Projects
  {
    id: 'eldeco-live-greens',
    cityId: 'noida',
    typeName: 'Residential',
    title: 'Eldeco Live By The Greens',
    location: 'Sector 150, Noida',
    price: '₹1.85 cr onward',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    href: '/projects/eldeco-live-by-the-greens',
  },
  {
    id: 'godrej-tropical-isle',
    cityId: 'noida',
    typeName: 'Residential',
    title: 'Godrej Tropical Isle Sector 146',
    location: 'Sector 146, Noida',
    price: '₹2.99 cr onward',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    href: '/projects/godrej-tropical-isle',
  },
  {
    id: 'paras-avenue',
    cityId: 'noida',
    typeName: 'Commercial',
    title: 'Paras Avenue High Street Retail',
    location: 'Sector 129, Noida',
    price: '₹85 lakh onward',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&q=80',
    href: '/projects/paras-avenue',
  },
  {
    id: 'bhutani-cyberthum',
    cityId: 'noida',
    typeName: 'Mixed Use Property',
    title: 'Bhutani Cyberthum Grade A Towers',
    location: 'Sector 140A, Noida',
    price: '₹1.15 cr onward',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    href: '/projects/bhutani-cyberthum',
  },

  // Mumbai Projects
  {
    id: 'lodha-park',
    cityId: 'mumbai',
    typeName: 'Residential',
    title: 'Lodha Park Luxury Suites',
    location: 'Worli, Mumbai',
    price: '₹5.50 cr onward',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=600&q=80',
    href: '/projects/lodha-park',
  },
  {
    id: 'godrej-horizon',
    cityId: 'mumbai',
    typeName: 'Residential',
    title: 'Godrej Horizon Wadala',
    location: 'Wadala, Mumbai',
    price: '₹3.10 cr onward',
    image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=600&q=80',
    href: '/projects/godrej-horizon',
  },
  {
    id: 'oberoi-commerz',
    cityId: 'mumbai',
    typeName: 'Commercial',
    title: 'Oberoi Commerz III Business Park',
    location: 'Goregaon East, Mumbai',
    price: 'On Request',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    href: '/projects/oberoi-commerz',
  },

  // Lucknow Projects
  {
    id: 'shalimar-one-world',
    cityId: 'lucknow',
    typeName: 'Residential',
    title: 'Shalimar OneWorld Vista',
    location: 'Gomti Nagar Extension, Lucknow',
    price: '₹95 lakh onward',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
    href: '/projects/shalimar-oneworld',
  },
  {
    id: 'rishita-manhattan',
    cityId: 'lucknow',
    typeName: 'Plots',
    title: 'Rishita Manhattan Enclave Plots',
    location: 'Shaheed Path, Lucknow',
    price: '₹65 lakh onward',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    href: '/projects/rishita-manhattan',
  },

  // Pune Projects
  {
    id: 'panchshil-towers',
    cityId: 'pune',
    typeName: 'Residential',
    title: 'Panchshil Towers Kharadi',
    location: 'Kharadi, Pune',
    price: '₹2.40 cr onward',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    href: '/projects/panchshil-towers',
  },
  {
    id: 'kolte-patil-24k',
    cityId: 'pune',
    typeName: 'Mixed Use Property',
    title: 'Kolte Patil 24K Stargaze',
    location: 'Bavdhan, Pune',
    price: '₹1.65 cr onward',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    href: '/projects/kolte-patil-24k',
  },

  // Greater Noida West
  {
    id: 'gaur-city-center',
    cityId: 'greater-noida-west',
    typeName: 'Commercial',
    title: 'Gaurs City Center Highstreet',
    location: 'Gaur Chowk, Gr. Noida West',
    price: '₹45 lakh onward',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=600&q=80',
    href: '/projects/gaur-city-center',
  },
  {
    id: 'express-astra',
    cityId: 'greater-noida-west',
    typeName: 'Residential',
    title: 'Express Astra Sector 1 Gr. Noida West',
    location: 'Sector 1, Gr. Noida West',
    price: '₹1.10 cr onward',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    href: '/projects/express-astra',
  },

  // Greater Noida
  {
    id: 'godrej-golf-links',
    cityId: 'greater-noida',
    typeName: 'Plots',
    title: 'Godrej Golf Links Villa Plots',
    location: 'Jaypee Greens, Greater Noida',
    price: '₹3.80 cr onward',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    href: '/projects/godrej-golf-links',
  },

  // YEIDA
  {
    id: 'yeida-city-plots',
    cityId: 'yeida',
    typeName: 'Plots',
    title: 'Yamuna Expressway Authority Residential Plots',
    location: 'Sector 18/20 YEIDA Jewar Airport',
    price: '₹75 lakh onward',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    href: '/projects/yeida-city-plots',
  },

  // Bangalore
  {
    id: 'prestige-kingfisher-towers',
    cityId: 'bangalore',
    typeName: 'Residential',
    title: 'Prestige Kingfisher Towers',
    location: 'UB City, Bangalore',
    price: '₹35.00 cr onward',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    href: '/projects/prestige-kingfisher',
  },
  {
    id: 'sobha-dream-acres',
    cityId: 'bangalore',
    typeName: 'Residential',
    title: 'Sobha Dream Acres Panathur',
    location: 'Panathur, Bangalore',
    price: '₹1.20 cr onward',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    href: '/projects/sobha-dream-acres',
  },

  // Delhi NCR
  {
    id: 'dlf-one-midtown',
    cityId: 'delhi-ncr',
    typeName: 'Residential',
    title: 'DLF One Midtown Moti Nagar',
    location: 'Moti Nagar, New Delhi',
    price: '₹3.95 cr onward',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=600&q=80',
    href: '/projects/dlf-one-midtown',
  },
];
