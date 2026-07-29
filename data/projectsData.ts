import {
  UnifiedProject,
  ProjectFilterOptions,
  ProjectItem,
  UpcomingProjectItem,
  CompletedProjectItem,
} from '@/types';

// ─── Filter Options Constants ────────────────────────────────────────────────

export const projectCityOptions = [
  { id: 'all', label: 'All Locations' },
  { id: 'delhi-ncr', label: 'Delhi NCR' },
  { id: 'noida-expressway', label: 'Noida Expressway' },
  { id: 'noida-sectors', label: 'Noida Sectors (150, 137, 93)' },
  { id: 'noida-extension', label: 'Noida Extension' },
  { id: 'greater-noida', label: 'Greater Noida' },
  { id: 'pari-chowk', label: 'Pari Chowk' },
  { id: 'knowledge-park', label: 'Knowledge Park' },
  { id: 'yamuna-expressway', label: 'Yamuna Expressway' },
  { id: 'jewar', label: 'Jewar' },
  { id: 'ghaziabad', label: 'Ghaziabad' },
  { id: 'indirapuram', label: 'Indirapuram' },
  { id: 'rajnagar-extension', label: 'Rajnagar Extension' },
  { id: 'jewar-airport', label: 'Jewar Airport Corridor' },
  { id: 'gurugram', label: 'Gurugram' },
  { id: 'dwarka', label: 'Dwarka' },
  { id: 'new-noida', label: 'New Noida' },
];

export const projectTypeOptions = [
  'All Types',
  'Residential Real Estate',
  'Commercial Real Estate',
  'Premium Apartments',
  'Luxury Villas',
  'Ready-to-Move Homes',
  'Investment Properties',
  'Pre-Launch Opportunities',
];

export const projectStatusOptions = [
  'All Status',
  'Ongoing',
  'Upcoming',
  'Completed',
  'Ready-to-Move',
  'For Sale',
];

export const projectPriceRanges = [
  { id: 'all', label: 'Any Price', min: 0, max: Infinity },
  { id: '50l-1cr', label: '₹50 Lakhs - ₹1 Cr', min: 5000000, max: 10000000 },
  { id: '1cr-3cr', label: '₹1 Cr - ₹3 Cr', min: 10000000, max: 30000000 },
  { id: '3cr-5cr', label: '₹3 Cr - ₹5 Cr', min: 30000000, max: 50000000 },
  { id: 'above-5cr', label: 'Above ₹5 Cr', min: 50000000, max: Infinity },
];

export const projectSortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'newest', label: 'Newest First' },
];

// ─── Default Agent & Investment Insights ────────────────────────────────────

const defaultAgent = {
  name: 'Alexander Sterling',
  role: 'Senior Portfolio Advisor',
  image:
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
};

const defaultLandmarks = [
  { icon: 'flight_takeoff', name: 'Noida International Airport', distance: '15 Mins' },
  { icon: 'directions_subway', name: 'Metro Station', distance: '5 Mins' },
  { icon: 'local_hospital', name: 'Fortis Multi-Specialty Hospital', distance: '10 Mins' },
  { icon: 'school', name: 'International School Zone', distance: '8 Mins' },
];

const defaultAmenities = [
  { icon: 'pool', title: 'Infinity Pool' },
  { icon: 'fitness_center', title: 'Private Gym & Spa' },
  { icon: 'local_parking', title: 'Covered Valet Parking' },
  { icon: 'wine_bar', title: 'Clubhouse Lounge' },
  { icon: 'theaters', title: 'Mini Theater' },
  { icon: 'concierge', title: '24/7 Multi-tier Security' },
  { icon: 'stream_apps', title: 'Smart Home Automation' },
  { icon: 'park', title: 'Landscaped Central Park' },
];

// ─── Comprehensive Unified Projects List ─────────────────────────────────────

export const unifiedProjects: UnifiedProject[] = [
  {
    id: 'aurelius-sky-gardens',
    slug: 'aurelius-sky-gardens',
    title: 'Aurelius Sky Gardens',
    subtitle: 'Ultra-luxury residences with 360° skyline views',
    location: 'Sector 150, Noida Expressway',
    cityId: 'noida-sectors',
    cityName: 'Noida Sectors (150, 137, 93)',
    type: 'Premium Apartments',
    status: 'Ongoing',
    startingPrice: '₹2.40 Cr',
    priceNumeric: 24000000,
    yieldText: '7.2% Expected ROI Yield',
    description:
      'Ultra-luxury residences featuring private sky decks, automated smart home tech, double-height ceilings, and panoramic skyline vistas.',
    fullOverview: [
      'Aurelius Sky Gardens sets a benchmark for elite architectural living on the Noida Expressway. Rising 42 stories into the skyline, every apartment features floor-to-ceiling double-glazed thermal windows, private plunge pools on top balconies, and imported Italian marble finishes.',
      'Designed with sustainable eco-smart technology, solar power microgrids, and rainwater harvesting, residents enjoy zero-carbon luxury coupled with five-star concierge hospitality.',
    ],
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&q=80',
    imageAlt: 'Modern glass luxury skyscraper tower at dusk',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&q=80',
        alt: 'Exterior modern luxury glass tower',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80',
        alt: 'High-ceiling open plan luxury living room',
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80',
        alt: 'Sky deck terrace with private infinity pool',
      },
    ],
    badges: [
      { label: 'Hot Investment', style: 'bg-amber-500 text-white' },
      { label: 'Ongoing', style: 'bg-primary text-white' },
    ],
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: '3,850 SQFT',
    amenities: defaultAmenities,
    floorPlanImage:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1000&q=80',
    landmarks: defaultLandmarks,
    agent: defaultAgent,
    investmentInsight: {
      title: 'High Growth Corridor',
      description:
        'Sector 150 is Noida\'s greenest hub, experiencing a 14.8% YoY capital appreciation due to proximity to the Jewar International Airport corridor.',
      trendLabel: 'High Yield Urban Zone',
    },
    featured: true,
  },
  {
    id: 'dlf-one-midtown',
    slug: 'dlf-one-midtown',
    title: 'DLF One Midtown',
    subtitle: 'Heart of Central Delhi luxury living',
    location: 'Moti Nagar, New Delhi',
    cityId: 'delhi-ncr',
    cityName: 'Delhi NCR',
    type: 'Residential Real Estate',
    status: 'Ongoing',
    startingPrice: '₹3.95 Cr',
    priceNumeric: 39500000,
    yieldText: 'Prime Capital Asset',
    description:
      'A iconic gated residential enclave spanning 128 acres of greenery in Central Delhi, offering unmatched connectivity and world-class luxury.',
    fullOverview: [
      'DLF One Midtown brings high-end residential living right into the vibrant heart of Delhi. Located in Moti Nagar, these 2, 3, and 4 BHK luxury residences overlook 128 acres of lush green parks.',
      'Equipped with a grand 45,000 sq ft clubhouse, temperature-controlled Olympic swimming pool, tennis courts, and high-speed private elevators.',
    ],
    image:
      'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=1000&q=80',
    imageAlt: 'Grand residential towers overlooking central park green zone',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=1000&q=80',
        alt: 'DLF One Midtown aerial architecture view',
      },
      {
        url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1000&q=80',
        alt: 'Lobby lounge with Italian marble flooring',
      },
    ],
    badges: [
      { label: 'Prime Location', style: 'bg-emerald-600 text-white' },
      { label: 'Ongoing', style: 'bg-primary text-white' },
    ],
    bedrooms: 3,
    bathrooms: 3,
    sqft: '2,400 SQFT',
    amenities: defaultAmenities,
    floorPlanImage:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1000&q=80',
    landmarks: [
      { icon: 'subway', name: 'Moti Nagar Metro Station', distance: '2 Mins' },
      { icon: 'local_hospital', name: 'BLK Super Specialty Hospital', distance: '12 Mins' },
      { icon: 'shopping_bag', name: 'Connaught Place', distance: '20 Mins' },
    ],
    agent: defaultAgent,
    investmentInsight: {
      title: 'Central Delhi Demand',
      description:
        'Limited new land allocations in Central Delhi guarantee strong resale value and multi-generational wealth safety.',
      trendLabel: 'Elite Heritage Value',
    },
    featured: true,
  },
  {
    id: 'godrej-tropical-isle',
    slug: 'godrej-tropical-isle',
    title: 'Godrej Tropical Isle',
    subtitle: 'Island resort style living in Noida Expressway',
    location: 'Sector 146, Noida Expressway',
    cityId: 'noida-expressway',
    cityName: 'Noida Expressway',
    type: 'Luxury Villas',
    status: 'Ongoing',
    startingPrice: '₹2.99 Cr',
    priceNumeric: 29900000,
    yieldText: 'Resort Residences',
    description:
      'Tropical island-themed luxury apartments and sky villas featuring artificial beaches, serene water canals, and forest trails.',
    fullOverview: [
      'Godrej Tropical Isle transforms suburban luxury with an innovative island concept. Residents step out onto white-sand artificial lagoons, private cabanas, and air-purified green walkways.',
      'Located directly on the Sector 146 metro corridor, offering effortless access to Jewar Airport and South Delhi within 30 minutes.',
    ],
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80',
    imageAlt: 'Luxury resort villa with private pool at sunset',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80',
        alt: 'Tropical resort villa exterior',
      },
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=80',
        alt: 'Poolside cabana lounge',
      },
    ],
    badges: [
      { label: 'Island Theme', style: 'bg-cyan-600 text-white' },
      { label: 'Ongoing', style: 'bg-primary text-white' },
    ],
    bedrooms: 4,
    bathrooms: 4,
    sqft: '3,250 SQFT',
    amenities: defaultAmenities,
    floorPlanImage:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1000&q=80',
    landmarks: defaultLandmarks,
    agent: defaultAgent,
    investmentInsight: {
      title: 'Expressway Growth Zone',
      description:
        'Direct connection to Yamuna Expressway ensures high rental demand from corporate hubs nearby.',
      trendLabel: 'High Yield Asset',
    },
    featured: true,
  },
  {
    id: 'paras-avenue',
    slug: 'paras-avenue',
    title: 'Paras Avenue High Street Retail',
    subtitle: 'Next-gen commercial & retail high street',
    location: 'Sector 129, Noida Expressway',
    cityId: 'noida-expressway',
    cityName: 'Noida Expressway',
    type: 'Commercial Real Estate',
    status: 'Ongoing',
    startingPrice: '₹85 Lakh',
    priceNumeric: 8500000,
    yieldText: '8.5% Guaranteed Rental Yield',
    description:
      'Ultra-modern commercial landmark featuring high-street retail shops, multiplexes, open-air food courts, and corporate office suites.',
    fullOverview: [
      'Paras Avenue is engineered for maximum retail footfall along the busy Noida Expressway corridor. Designed with triple-height storefronts, escalator plazas, and dedicated valet drop-offs.',
      'Backed by major national retail brands and anchor tenants, securing high rental yields from day one.',
    ],
    image:
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1000&q=80',
    imageAlt: 'Modern illuminated retail commercial complex',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1000&q=80',
        alt: 'High street commercial facade',
      },
    ],
    badges: [
      { label: 'High ROI', style: 'bg-amber-600 text-white' },
      { label: 'Commercial', style: 'bg-indigo-600 text-white' },
    ],
    sqft: '650 SQFT',
    amenities: [
      { icon: 'storefront', title: 'Triple-Height Retail' },
      { icon: 'local_parking', title: 'Multi-level Parking' },
      { icon: 'fastfood', title: 'Food Court Plaza' },
      { icon: 'videocam', title: '24/7 CCTV Surveillance' },
    ],
    agent: defaultAgent,
    investmentInsight: {
      title: 'Commercial Hub Demand',
      description:
        'Over 50,000 corporate employees in surrounding IT parks create continuous daily footfall.',
      trendLabel: 'Commercial Cashflow',
    },
    featured: true,
  },
  {
    id: 'dlf-privana-south',
    slug: 'dlf-privana-south',
    title: 'DLF Privana South',
    subtitle: 'Ultra-luxury living amidst Southern Aravalli hills',
    location: 'Sector 76, Gurugram',
    cityId: 'gurugram',
    cityName: 'Gurugram',
    type: 'Luxury Villas',
    status: 'Ongoing',
    startingPrice: '₹6.25 Cr',
    priceNumeric: 62500000,
    yieldText: 'High Appreciation Landmark',
    description:
      'Low-density ultra-luxury enclave offering views of the Aravalli hills, private green parks, world-class clubhouses, and elite privacy.',
    fullOverview: [
      'DLF Privana South redefines luxury living in Gurugram. Nestled near Sector 76, these master-crafted high-rise and villa residences offer unhindered vistas of the Aravallis.',
      'Featuring private elevator lobbies, VRV air conditioning, smart home automation, and an expansive 60,000 sq ft resort clubhouse.',
    ],
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80',
    imageAlt: 'Luxury villa architecture surrounded by nature greenery',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80',
        alt: 'DLF Privana South villa exterior',
      },
    ],
    badges: [
      { label: 'Ultra Luxury', style: 'bg-purple-700 text-white' },
      { label: 'Gurugram Prime', style: 'bg-secondary text-primary font-bold' },
    ],
    bedrooms: 4,
    bathrooms: 5,
    sqft: '5,400 SQFT',
    amenities: defaultAmenities,
    agent: defaultAgent,
    investmentInsight: {
      title: 'Gurugram Prime Market',
      description:
        'DLF developments in Cyber City and Golf Course extension have historically yielded 20%+ annual value surges.',
      trendLabel: 'Trophy Asset',
    },
    featured: true,
  },
  {
    id: 'jewar-aerocity-green-enclave',
    slug: 'jewar-aerocity-green-enclave',
    title: 'Jewar Aerocity Green Enclave',
    subtitle: 'Plots & Pre-launch opportunities near Jewar Airport',
    location: 'Jewar Airport Corridor',
    cityId: 'jewar-airport',
    cityName: 'Jewar Airport Corridor',
    type: 'Pre-Launch Opportunities',
    status: 'Upcoming',
    startingPrice: '₹55 Lakh',
    priceNumeric: 5500000,
    yieldText: 'Upcoming 3x Growth Corridor',
    description:
      'Freehold residential and commercial plot developments situated 10 minutes from Asia\'s largest upcoming international airport hub.',
    fullOverview: [
      'Jewar Aerocity Enclave offers early-bird investors priority access to government-approved plots directly along the Yamuna Expressway & Airport Link Road.',
      'Perfect for land banking, custom villa construction, or long-term high-return commercial development.',
    ],
    image:
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1000&q=80',
    imageAlt: 'Master-planned township plot development landscape',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1000&q=80',
        alt: 'Green enclave development master plan view',
      },
    ],
    badges: [
      { label: 'Airport Hub', style: 'bg-blue-600 text-white' },
      { label: 'New Launch', style: 'bg-emerald-600 text-white' },
    ],
    sqft: '1,800 SQFT (200 Sq Yds)',
    amenities: [
      { icon: 'landscape', title: 'Wide 60ft Roads' },
      { icon: 'electric_meter', title: 'Underground Utilities' },
      { icon: 'security', title: 'Gated Security Entry' },
      { icon: 'park', title: 'Green Park Belts' },
    ],
    agent: defaultAgent,
    investmentInsight: {
      title: 'Infrastructure Explosion',
      description:
        'Operationalization of Noida International Airport will double property valuations across this corridor by 2026.',
      trendLabel: 'Exponential Growth',
    },
    featured: true,
  },
  {
    id: 'godrej-golf-links',
    slug: 'godrej-golf-links',
    title: 'Godrej Golf Links Resort Villas',
    subtitle: '9-Hole Golf Course Golf-Side Living',
    location: 'Jaypee Greens, Greater Noida',
    cityId: 'greater-noida',
    cityName: 'Greater Noida',
    type: 'Luxury Villas',
    status: 'Ready-to-Move',
    startingPrice: '₹3.80 Cr',
    priceNumeric: 38000000,
    yieldText: 'Golf Course Estate',
    description:
      'Exquisite 4 and 5 BHK golf villas surrounded by a private 9-hole golf course, private swimming pools, and serene green gardens.',
    fullOverview: [
      'Godrej Golf Links is a flagship 100-acre township featuring independent golf villas built around a lush 9-hole golf course.',
      'Offers marble flooring, private rooftop decks, high-speed elevator access, and a grand 50,000 sq ft sports clubhouse.',
    ],
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000&q=80',
    imageAlt: 'Luxury golf course villa estate view',
    badges: [
      { label: 'Ready to Move', style: 'bg-green-700 text-white' },
      { label: 'Golf Estate', style: 'bg-amber-600 text-white' },
    ],
    bedrooms: 5,
    bathrooms: 6,
    sqft: '4,500 SQFT',
    amenities: defaultAmenities,
    agent: defaultAgent,
    featured: true,
  },
  {
    id: 'elan-the-statement',
    slug: 'elan-the-statement',
    title: 'Elan The Statement Sector 49',
    subtitle: 'Signature commercial office towers & luxury retail',
    location: 'Sector 49, Gurugram',
    cityId: 'gurugram',
    cityName: 'Gurugram',
    type: 'Commercial Real Estate',
    status: 'Ongoing',
    startingPrice: '₹3.20 Cr',
    priceNumeric: 32000000,
    yieldText: 'Institutional Grade Yield',
    description:
      'State-of-the-art office skyscraper and retail landmark on Sohna Road, featuring LEED Gold certification and glass facade aesthetics.',
    fullOverview: [
      'Elan The Statement is designed by international master architects as a flagship corporate headquarters location in Gurugram.',
      'Features high-speed smart elevators, high-street shopping plazas, gourmet rooftop restaurants, and helipad facilities.',
    ],
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80',
    imageAlt: 'Modern glass corporate skyscraper office building',
    badges: [
      { label: 'Corporate Hub', style: 'bg-sky-600 text-white' },
      { label: 'Ongoing', style: 'bg-primary text-white' },
    ],
    sqft: '1,500 SQFT',
    amenities: defaultAmenities,
    agent: defaultAgent,
    featured: false,
  },
  {
    id: 'express-astra-sector-1',
    slug: 'express-astra-sector-1',
    title: 'Express Astra Sector 1',
    subtitle: 'Vastu-compliant luxury family apartments',
    location: 'Noida Extension (Gr. Noida West)',
    cityId: 'noida-extension',
    cityName: 'Noida Extension',
    type: 'Residential Real Estate',
    status: 'Ongoing',
    startingPrice: '₹1.10 Cr',
    priceNumeric: 11000000,
    yieldText: '6.5% Rental Yield',
    description:
      'Corner-plot eco-friendly residential complex offering 75% green open spaces, zero vehicle surface movement, and Vastu-compliant homes.',
    fullOverview: [
      'Express Astra Sector 1 is built around a central park layout where all apartments are open on 3 sides for natural sunlight and breeze.',
      'Includes a multi-tier security system, clubhouse, swimming pool, badminton court, and kid play zones.',
    ],
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=80',
    imageAlt: 'Modern high-rise residential apartment towers',
    badges: [
      { label: 'Vastu Compliant', style: 'bg-teal-600 text-white' },
      { label: 'Ongoing', style: 'bg-primary text-white' },
    ],
    bedrooms: 3,
    bathrooms: 3,
    sqft: '1,850 SQFT',
    amenities: defaultAmenities,
    agent: defaultAgent,
    featured: false,
  },
  {
    id: 'pari-chowk-central-hub',
    slug: 'pari-chowk-central-hub',
    title: 'Pari Chowk Central Commercial Hub',
    subtitle: 'Prime commercial spaces at Pari Chowk metro junction',
    location: 'Pari Chowk, Greater Noida',
    cityId: 'pari-chowk',
    cityName: 'Pari Chowk',
    type: 'Commercial Real Estate',
    status: 'Ongoing',
    startingPrice: '₹75 Lakh',
    priceNumeric: 7500000,
    yieldText: 'High Footfall Zone',
    description:
      'Directly connected to Pari Chowk Metro Station, offering prime retail showrooms, bank branches, and executive office spaces.',
    fullOverview: [
      'Pari Chowk Central Hub stands at the busiest intersection of Greater Noida. High visibility storefronts make it ideal for retail brands, food chains, and corporate offices.',
    ],
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80',
    imageAlt: 'Illuminated commercial store facade at night',
    badges: [
      { label: 'Metro Linked', style: 'bg-indigo-600 text-white' },
      { label: 'Commercial', style: 'bg-amber-600 text-white' },
    ],
    sqft: '800 SQFT',
    amenities: defaultAmenities,
    agent: defaultAgent,
    featured: false,
  },
  {
    id: 'indirapuram-residency-towers',
    slug: 'indirapuram-residency-towers',
    title: 'Indirapuram Residency Towers',
    subtitle: 'Ready-to-move luxury apartments near Delhi border',
    location: 'Ahinsa Khand, Indirapuram',
    cityId: 'indirapuram',
    cityName: 'Indirapuram',
    type: 'Ready-to-Move Homes',
    status: 'Ready-to-Move',
    startingPrice: '₹1.25 Cr',
    priceNumeric: 12500000,
    yieldText: 'Immediate Possession',
    description:
      'Established high-density residential community featuring spacious 3BHK flats, swimming pool, power backup, and top school proximity.',
    fullOverview: [
      'Indirapuram Residency Towers offers fully ready-to-move homes with immediate registry. Located 5 minutes from Anand Vihar ISBT and Delhi Border.',
    ],
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&q=80',
    imageAlt: 'Completed luxury residential apartment building',
    badges: [
      { label: 'Ready to Move', style: 'bg-green-700 text-white' },
      { label: 'Delhi Border', style: 'bg-blue-600 text-white' },
    ],
    bedrooms: 3,
    bathrooms: 2,
    sqft: '1,650 SQFT',
    amenities: defaultAmenities,
    agent: defaultAgent,
    featured: false,
  },
  {
    id: 'dwarka-diplomatic-enclave-heights',
    slug: 'dwarka-diplomatic-enclave-heights',
    title: 'Diplomatic Enclave Heights',
    subtitle: 'Luxury apartments adjacent to IGI Airport & Diplomatic Enclave',
    location: 'Sector 24, Dwarka, New Delhi',
    cityId: 'dwarka',
    cityName: 'Dwarka',
    type: 'Residential Real Estate',
    status: 'Ongoing',
    startingPrice: '₹2.85 Cr',
    priceNumeric: 28500000,
    yieldText: 'Prime West Delhi Location',
    description:
      'Exclusive residences next to Dwarka Expressway and Diplomatic Enclave II, offering international standard amenities and high security.',
    fullOverview: [
      'Diplomatic Enclave Heights is situated in Delhi\'s fastest-growing premium district. Features automated smart homes, solar power heating, and private club amenities.',
    ],
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80',
    imageAlt: 'Modern residential tower with balconies',
    badges: [
      { label: 'Near Airport', style: 'bg-indigo-600 text-white' },
      { label: 'Ongoing', style: 'bg-primary text-white' },
    ],
    bedrooms: 4,
    bathrooms: 4,
    sqft: '2,900 SQFT',
    amenities: defaultAmenities,
    agent: defaultAgent,
    featured: false,
  },
  {
    id: 'the-zenith-pavilion',
    slug: 'the-zenith-pavilion',
    title: 'The Zenith Pavilion',
    subtitle: 'Futuristic Architectural Masterpiece • Launching Q4 2025',
    location: 'Golf Course Road, Gurugram',
    cityId: 'gurugram',
    cityName: 'Gurugram',
    type: 'Pre-Launch Opportunities',
    status: 'Upcoming',
    startingPrice: '₹4.50 Cr',
    priceNumeric: 45000000,
    yieldText: 'Pre-Launch Pricing Advantage',
    description:
      'Ultra-futuristic bio-centric residential sky towers with private vertical gardens, glass skywalks, and smart concierge AI.',
    fullOverview: [
      'The Zenith Pavilion represents the next generation of eco-luxury architecture in Gurugram. Designed by global visionaries, it features kinetic glass facades and green terraces.',
    ],
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=80',
    imageAlt: 'Futuristic glass skyscraper architecture',
    badges: [
      { label: 'New Launch', style: 'bg-tertiary text-on-tertiary font-bold' },
      { label: 'Upcoming', style: 'bg-amber-600 text-white' },
    ],
    bedrooms: 4,
    bathrooms: 5,
    sqft: '4,100 SQFT',
    amenities: defaultAmenities,
    agent: defaultAgent,
    completionDate: 'Q4 2025',
    featured: true,
  },
  {
    id: 'harbor-crown-penthouse',
    slug: 'harbor-crown-penthouse',
    title: 'The Harbor Crown Masterpiece',
    subtitle: 'Completed 2023 • Ready to Occupy Penthouse Suites',
    location: 'Knowledge Park III, Greater Noida',
    cityId: 'knowledge-park',
    cityName: 'Knowledge Park',
    type: 'Premium Apartments',
    status: 'Completed',
    startingPrice: '₹2.10 Cr',
    priceNumeric: 21000000,
    yieldText: '100% Sold Out Sector',
    description:
      'Completed luxury penthouse development with panoramic skyline terraces, private elevator access, and rooftop infinity pool.',
    fullOverview: [
      'The Harbor Crown is a completed flagship development delivering unmatched interior crafting, Italian marble finishings, and ready possession.',
    ],
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&q=80',
    imageAlt: 'Finished luxury glass penthouse building exterior',
    badges: [
      { label: 'Completed 2023', style: 'bg-gray-800 text-white' },
      { label: 'Ready', style: 'bg-emerald-600 text-white' },
    ],
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: '3,100 SQFT',
    amenities: defaultAmenities,
    agent: defaultAgent,
    completionDate: 'Completed 2023',
    featured: false,
  },
];

// ─── Backward Compatibility Mock Exports ─────────────────────────────────────

export const ongoingProjects: ProjectItem[] = unifiedProjects
  .filter((p) => p.status === 'Ongoing')
  .map((p) => ({
    id: p.id,
    title: p.title,
    location: p.location,
    startingPrice: p.startingPrice,
    yieldText: p.yieldText || 'High Investment Return',
    description: p.description,
    image: p.image,
    imageAlt: p.imageAlt,
    badges: p.badges,
  }));

export const upcomingProjects: UpcomingProjectItem[] = unifiedProjects
  .filter((p) => p.status === 'Upcoming')
  .map((p) => ({
    id: p.id,
    title: p.title,
    subtitle: p.subtitle || 'Waitlist Now Open',
    image: p.image,
    imageAlt: p.imageAlt,
    badge: p.badges[0] || { label: 'New Launch', style: 'bg-tertiary text-on-tertiary' },
  }));

export const completedProjects: CompletedProjectItem[] = unifiedProjects
  .filter((p) => p.status === 'Completed' || p.status === 'Ready-to-Move')
  .map((p) => ({
    id: p.id,
    title: p.title,
    completedYear: p.completionDate || 'Completed 2023',
    image: p.image,
    imageAlt: p.imageAlt,
  }));

// ─── Query & Filtering Helper Functions ─────────────────────────────────────

export const getAllProjects = (): UnifiedProject[] => {
  return unifiedProjects;
};

export const getProjectBySlug = (slug: string): UnifiedProject | undefined => {
  return unifiedProjects.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase() || p.id.toLowerCase() === slug.toLowerCase()
  );
};

export const getFilteredProjects = (filters: ProjectFilterOptions): UnifiedProject[] => {
  return unifiedProjects.filter((project) => {
    // City / Location filter
    if (filters.city && filters.city !== 'all') {
      const cityMatch =
        project.cityId.toLowerCase() === filters.city.toLowerCase() ||
        project.location.toLowerCase().includes(filters.city.toLowerCase()) ||
        project.cityName.toLowerCase().includes(filters.city.toLowerCase());
      if (!cityMatch) return false;
    }

    // Property Type filter
    if (filters.type && filters.type !== 'All Types' && filters.type !== 'all') {
      const typeMatch =
        project.type.toLowerCase().includes(filters.type.toLowerCase()) ||
        filters.type.toLowerCase().includes(project.type.toLowerCase());
      if (!typeMatch) return false;
    }

    // Status filter
    if (filters.status && filters.status !== 'All Status' && filters.status !== 'all') {
      if (project.status.toLowerCase() !== filters.status.toLowerCase()) {
        return false;
      }
    }

    // Price Range filter
    if (filters.priceRange && filters.priceRange !== 'all') {
      const range = projectPriceRanges.find((r) => r.id === filters.priceRange);
      if (range) {
        if (project.priceNumeric < range.min || project.priceNumeric > range.max) {
          return false;
        }
      }
    }

    // Custom Price Range (numeric INR)
    if (filters.customMinPrice !== undefined && filters.customMinPrice > 0) {
      if (project.priceNumeric < filters.customMinPrice) {
        return false;
      }
    }
    if (filters.customMaxPrice !== undefined && filters.customMaxPrice > 0) {
      if (project.priceNumeric > filters.customMaxPrice) {
        return false;
      }
    }

    // Search text query
    if (filters.search && filters.search.trim() !== '') {
      const q = filters.search.toLowerCase().trim();
      const matchesSearch =
        project.title.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.cityName.toLowerCase().includes(q) ||
        project.type.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q);
      if (!matchesSearch) return false;
    }

    return true;
  }).sort((a, b) => {
    if (filters.sort === 'price-low') {
      return a.priceNumeric - b.priceNumeric;
    }
    if (filters.sort === 'price-high') {
      return b.priceNumeric - a.priceNumeric;
    }
    if (filters.sort === 'newest') {
      return b.id.localeCompare(a.id);
    }
    // Default 'featured' sort: featured projects first
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
};
