import { LocationDestination } from '@/types';

export const locationOverviewStats = [
  { value: '12.5%', label: 'Avg. Annual Appreciation' },
  { value: '450+', label: 'Active Projects' },
  { value: '₹12K Cr', label: 'Infrastructure Pipeline' },
  { value: 'Low', label: 'Inventory Risk Index' },
];

export const locationDestinations: LocationDestination[] = [
  {
    id: 'loc-noida',
    title: 'Noida',
    sectorsText: 'Sectors 150, 143, & Noida Extension',
    inventoryCount: '120+ Units',
    growthPotential: 'Growth Potential: 15-18% p.a.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCYRjwXCkYSM_mbZzXnGuqUueknQF6_lGOvLpvvjWKZkn3pyJWB2sHpGxbJMDKy5LpnmZosLrGW_9p3_mBUNS1t0m4ZkPoBHCHg5a7RhM27DZLT84PMMSXm0m1I0MyfE3a93F-UHLod514mUBm2p2AE-AkiFwntgwQV15E2_493RO1Xi7wLbuu_omEYyEHRv8rvWvl-Og6MlB8yF1KuCLDhq_l2Qi4S2kR04PH5Tv8bsOwznE6I55VINZnKwqJ4tfTlX2pqAka1dXX',
    imageAlt: 'Noida Expressway high rise corporate towers',
    badges: [
      { label: 'Hot Investment', style: 'bg-primary text-white' },
      { label: 'IT Hub', style: 'bg-secondary-fixed-dim text-on-secondary-fixed' },
    ],
    highlights: [
      { icon: 'flight', title: 'Jewar Airport', subtitle: '30 Min Drive' },
      { icon: 'commute', title: 'FNG Expressway', subtitle: 'Major Connector' },
    ],
  },
  {
    id: 'loc-gurgaon',
    title: 'Gurgaon',
    sectorsText: 'Golf Course Extn & Dwarka Expressway',
    inventoryCount: '85+ Units',
    growthPotential: 'Rental Yield: 4.5% - 6%',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRweO-NyK9gj0A5t4Tw_eUakdds0HAXumK15BsQGrxe04AMVd9fynFK3dDVzj3Uu0MEu9IAhOWEokOTCz2EVAJ5E-zuiEskASgBUB49SC47U385K6PSLDfY2-RHMHOohqF-ghxZibklKKQnLepZPGJuCVgaCRsEZb5M-qs8mEf_whcvxQroJo1bTpi980Z7MRvyHUSxbu7bUxyK8oaw6zSn1ppkz24oO9Ut4XKdwX7h-_FPvl0ceVHv1-95ADhrHAOm53KFpUXnPoi',
    imageAlt: 'Gurgaon Golf Course Extension Road skyscrapers at sunset',
    badges: [
      { label: 'Luxury Corridor', style: 'bg-primary text-white' },
      { label: 'Premium Yield', style: 'bg-secondary-fixed-dim text-on-secondary-fixed' },
    ],
    highlights: [
      { icon: 'directions_car', title: 'Dwarka Expressway', subtitle: 'Full Connectivity' },
      { icon: 'apartment', title: 'Cyber Hub 2.0', subtitle: 'Economic Center' },
    ],
  },
];
