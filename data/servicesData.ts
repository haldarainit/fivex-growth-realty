import { ServiceCardItem } from '@/types';

export const servicesDataList: ServiceCardItem[] = [
  {
    id: 'serv-res',
    category: 'Premier Living',
    title: 'Residential Sales',
    description:
      'Access an exclusive portfolio of luxury villas, penthouses, and premium apartments. Our white-glove service handles everything from valuation to final documentation.',
    features: [
      'Curated Luxury Listings',
      'Strategic Market Pricing',
      'End-to-End Buyer Representation',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxp1PKXrCAXAqFubF2k1bzMa3rSbx0o3DojWu1Wnr_aqgG1ekXTslMXYM1FXlSKTjE98c9K12ZQpuSkXa684lJ2do5JlWbswRIKOew1NcMaJMECm3sFNrLxlNkOCDemXAIgekmNVztbScs5fDufgStRDhBdm2J9JEmFrWGIaFHE9qpMtmNu7l8ttjvRN7l_vfobxQ9EEerf5HqpfGWg-tecKvsL5Ko1zzVUK4rJI536PRJXKiUPPsACtkAM7qkyJJmKcdGf7Zjrt8a',
    imageAlt: 'Minimalist luxury living room interior with floor to ceiling windows',
    variant: 'large',
  },
  {
    id: 'serv-comm',
    title: 'Commercial Property',
    description:
      'Scalable office spaces, retail hubs, and industrial warehouses designed for maximum ROI and operational efficiency.',
    icon: 'business',
    badgeText: 'Institutional Grade',
    variant: 'dark',
  },
  {
    id: 'serv-land',
    title: 'Land & Plot Investment',
    description:
      'Strategic land acquisition in high-growth corridors. We verify titles and assess future appreciation potential for your portfolio.',
    icon: 'landscape',
    features: ['High Growth', 'Title Verified'],
    variant: 'glass',
  },
  {
    id: 'serv-booking',
    title: 'Project Booking',
    description:
      'Direct access to pre-launch and under-construction projects by Grade A developers with exclusive price benefits.',
    icon: 'foundation',
    variant: 'light',
  },
  {
    id: 'serv-consult',
    title: 'Expert Consultation',
    description:
      'Professional portfolio management and legal advisory for high-value transactions.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDc_6G9islyNePovXut1VSqR2WUu1Y6J5_wRh5I572WVwfhVBwYTA54P62zy5ts3NeKWDbLhtEKWsRRQdujzhDHEN-7Wj8I_sYgS9iV4Zr3X2mMLm-VrIx01H2hyOcdB-jlrj1Op6989q5wUJp2Ot-UZ10Wa-bbuIGnvDv2ROOmXS43vwutguPGQeU-OByb-ZGWspJE_tuEVTZbs-Y2-VW3-ZUGazR45iHn2CqdV5-tPo2iGtmRvn3Dc3OAtuaiix7GtMT7jlVmTAdS',
    imageAlt: 'Professional colleagues discussing blueprints over a wooden table',
    variant: 'image',
  },
];
