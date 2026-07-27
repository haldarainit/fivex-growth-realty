import { DetailedProperty, PropertyDetail } from '@/types';

export const propertyTypesOptions = [
  'All Types',
  'Villa',
  'Penthouse',
  'Commercial',
  'Land',
];

export const budgetOptions = [
  'Any Budget',
  '$1M - $5M',
  '$5M - $15M',
  '$15M+',
];

export const statusOptions = [
  'All Status',
  'For Sale',
  'For Rent',
  'Upcoming',
];

export const amenityOptions = [
  'Infinity Pool',
  'Private Gym',
  'Smart Home',
  'Wine Cellar',
];

export const detailedProperties: DetailedProperty[] = [
  {
    id: 'zenith-penthouse',
    title: 'The Zenith Penthouse',
    location: '5th Avenue, Sky-District, Manhattan, NY',
    price: '$12,500,000',
    badges: [
      { label: 'For Sale', style: 'bg-secondary-fixed text-on-secondary-fixed' },
      { label: 'New Listing', style: 'bg-white/80 backdrop-blur-md text-primary' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGmDhpvpQPBmjBdjUExep6e8-eG7iYFUKgJyvyALe3493d-d8cdUGf0Rvgd5_YXXRfo_8kJ4T_1_HydEi_ue3nZsJfuuJuwjFo9DQucT2pqq8E8SpQJuPK-3mA0X5F3-j599Hx79xMHbDts8Q6Gxydycne5orAvcSeFV2-VYiCcVGH0loE2Fcgs0wN0rBthBC3ORhr66syMJI26AXUxMOLfSB8YliKS_iptUa4piEQHlRhm1OAcp94WISLo4MggPLT9YNlUmJCPhve',
    imageAlt: 'Luxury penthouse living room with double height glass walls overlooking skyline',
    bedrooms: 4,
    bathrooms: 5.5,
    sqft: '6,400 SQFT',
  },
  {
    id: 'prop-azure',
    title: 'The Azure Penthouse',
    location: 'Palm Jumeirah, Dubai, UAE',
    price: '$12,450,000',
    badges: [
      { label: 'New Listing', style: 'bg-secondary-fixed text-on-secondary-fixed' },
      { label: 'For Sale', style: 'bg-white/80 backdrop-blur-md text-primary' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsm5ZspXRZgMpXAk9hVr5X26mqgP0FwlwMsZrQenhq4Jd35I-U2hR8oML-tJO7zAdoU1Ynq7zl300tsR1caMWdIZnClM0dxsAesQQf15oAepFvVqeZQ_SM8NmyR0LPJwHGmQMFuWK8n4OKWuUQPRlk2D4jLIb4oznMAT-3JcX-eftDV4VsiGQoDspZ0aDJO3ctWhjzvdUtzOzv4gaYEHEoGS4Qm4OVpNq_fdRafIrN9UPFPYEA-XMoNMdooojbcL5WSWCkMTA5-C40',
    imageAlt: 'Sleek modern glass villa at sunset with infinity pool',
    bedrooms: 5,
    bathrooms: 6,
    sqft: '8,500 SQFT',
  },
  {
    id: 'prop-belair',
    title: 'Bel Air Manor',
    location: 'Los Angeles, California, USA',
    price: '$24,900,000',
    badges: [
      { label: 'Exclusive', style: 'bg-secondary-fixed text-on-secondary-fixed' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAArj_kaZt7KZY3mhXPKB070wBg6kTWNx2MbxP_26HwL_LA5tzcNpxqY1qTr3ujlAbgLdCIbm2TCFoYnqxC2XGc9AAlpU8HiudmlOI2VPr4Ob83nWJ7Xf7hwraYjxkFyh9QwmwEqKI-tCnx-l14Y1yg9AOwx06pjeJ4NGPnpub4SvsaCTzHi5lZS3w5p296TUDzrJLe3KoPJMm9WnOPViPJdCmTJFdD_GTW5aeWVMF8m8ds8OKl-CrqwthdiTtD3VIvrzqUoclABZF',
    imageAlt: 'Neo-classical mansion estate in Beverly Hills',
    bedrooms: 8,
    bathrooms: 12,
    sqft: '15,200 SQFT',
  },
  {
    id: 'prop-alpine',
    title: 'Alpine Retreat',
    location: 'St. Moritz, Switzerland',
    price: '$8,200,000',
    badges: [
      { label: 'Modernist', style: 'bg-secondary-fixed text-on-secondary-fixed' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcsXp9phufml3fYKQds3KN-ei7ddPvLTSt39yPORIcHDIaBrFz0NRq2cKVjUPG9FnClsLh44OooaBGxrW5v4Dn4lKcNGeKd9hDIIO92OqiNYuYdWTMW8plDWxCBxNf4-FR5GnKBdcFIg3o4aG_PvstfoKXX50CLe0N-tTI_jnUK-h254fXD2-qB621NHLaTcL8rNWrbIMFYQ300Q9giftZAUEa4cauBk7pTlhVRW3yU03uL6ZdpUyhnz6vGXr0ok0JXmVDnh9H6bo2',
    imageAlt: 'Minimalist architectural villa in Swiss Alps',
    bedrooms: 4,
    bathrooms: 4,
    sqft: '4,100 SQFT',
  },
  {
    id: 'prop-santorini',
    title: 'Santorini Estate',
    location: 'Oia, Santorini, Greece',
    price: '$6,750,000',
    badges: [
      { label: 'Waterfront', style: 'bg-secondary-fixed text-on-secondary-fixed' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHpJevdmvXQCtc4fXxF64HgJelit3ZIuBDWj_HIUs5iv6zIXwGt7CsJBnd3XYmJ8FPmn01AZqJkghu01MxyIpdBeqO69immwUNGNAXcmPr0ZcdMz8rWyUZIXvulmuWIF-ji2ZkuXo8hGUl0kDzfnoaSSQWAdordQaMMI4LALScfHtQUFv9tbYKPTy8VNInUoTiPEe7xit3CBQtxG4_ErsiQak-F1hcy2rZGBBrALLgTIY9ndkkoJ8UPXqQ3VvRUPc5XAlWZ-Rfr2xW',
    imageAlt: 'Ultra-modern coastal home on cliff in Santorini',
    bedrooms: 3,
    bathrooms: 3,
    sqft: '3,800 SQFT',
  },
];

export const samplePropertyDetail: PropertyDetail = {
  id: 'zenith-penthouse',
  title: 'The Zenith Penthouse',
  location: '5th Avenue, Sky-District, Manhattan, NY',
  price: '$12,500,000',
  priceLabel: 'Starting From',
  badges: [
    { label: 'FOR SALE', style: 'bg-secondary-fixed text-on-secondary-fixed' },
    { label: 'NEW LISTING', style: 'bg-surface/80 backdrop-blur-md text-primary border border-white/20' },
  ],
  bedrooms: 4,
  bathrooms: 5.5,
  sqft: '6,400 sqft',
  galleryImages: [
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGmDhpvpQPBmjBdjUExep6e8-eG7iYFUKgJyvyALe3493d-d8cdUGf0Rvgd5_YXXRfo_8kJ4T_1_HydEi_ue3nZsJfuuJuwjFo9DQucT2pqq8E8SpQJuPK-3mA0X5F3-j599Hx79xMHbDts8Q6Gxydycne5orAvcSeFV2-VYiCcVGH0loE2Fcgs0wN0rBthBC3ORhr66syMJI26AXUxMOLfSB8YliKS_iptUa4piEQHlRhm1OAcp94WISLo4MggPLT9YNlUmJCPhve',
      alt: 'Luxury penthouse living room with double height glass walls overlooking skyline',
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYAd_2ALd_vjywzXFESpXUCWAwR60SCISyvFmA5oHXYBXhjSZtq5E8dFVIpPoBV5_6jK71o9wMcFex3cZM8gSxT5kzDbyzc6AY89Ot_wqYVfyJ-U8Rop8IkpoXIfrlxKMstYKC_9xPW8g0sYwJP5s0cPfRNMvqvL0HXV7HbMhON6wzE9Hz8T6ocWoAK5oOCCDn1rUm9-EO_3ZSWJ1-73LAXVn8JFmXGbluP-5OfHUYzLwie22nHudvCzWamLBHgQlKmdX-5bx_2BaQ',
      alt: 'Modern primary bedroom suite with panoramic city view',
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi95wK4gN2v1zHRlM4AkU5Vu2oGlRXaTT2tLAg72dq1pv_XyHBc0RtP4X8hTCmfixgqOzRZiqHw_bNyIqi80I6zJmcaHwQOuecFQJ96TQz2Tyc_IKFAQhNZZqpSOXAJhSRDtF25PaAx0tG6O-9uBSVP405qUE4mrVX4-mspkaHdkJ6O68Tk8Zn_gVDY3yAX5RCwbi9LOJmRuq1A1e1Mm7o_WJhd38XcoBreeVkaiT15QaQyIJPp4vurWQWsMnFp1Pswle6FFL-8-tp',
      alt: 'Calacatta marble kitchen with matte black appliances',
    },
  ],
  overview: [
    'Experience the pinnacle of urban luxury in this bespoke penthouse, where architectural mastery meets unparalleled skyline views. Spanning two full levels, The Zenith Penthouse features a private 2,000 sqft rooftop terrace with an infinity-edge pool and outdoor kitchen.',
    'Designed by award-winning architects, the interior showcases rare marbles, custom millwork, and state-of-the-art smart home integration. Every room is a masterpiece of light and space, offering a lifestyle reserved only for the world\'s most discerning individuals.',
  ],
  amenities: [
    { icon: 'pool', title: 'Infinity Pool' },
    { icon: 'fitness_center', title: 'Private Gym' },
    { icon: 'local_parking', title: 'Valet Parking' },
    { icon: 'wine_bar', title: 'Wine Cellar' },
    { icon: 'theaters', title: 'Home Cinema' },
    { icon: 'concierge', title: '24/7 Concierge' },
    { icon: 'stream_apps', title: 'Smart Automation' },
    { icon: 'fireplace', title: 'Custom Fireplace' },
  ],
  floorPlanImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuARiJictviYwZALFHTAzmgmQKeflCdxrp1Aqpq4bj_ig7Jq5TTHcX6pvXs1faS27pWGWXDB2EjSPqvdlTotVLZj_VAgI-zrFEvQku4urBojSMUmZBuXnesX7eHrPWi5DyDQCaZiYWSs-uBe5SCmehftiy6E8KCfmdYjO8HxE1e8Y0Q0zZWcb4lHU4ZZqW-rmiN2Ffe4XV8vr16_KDgMh7TOTE5aTpiGjCKNvLEw6iVPzq5bOK3EeR0aO8W5wOLsXMeBDk7BRJUjTmSv',
  landmarks: [
    { icon: 'park', name: 'Central Park South', distance: '0.4 Miles' },
    { icon: 'shopping_bag', name: 'The Shops at Hudson Yards', distance: '1.2 Miles' },
    { icon: 'restaurant', name: 'Michelin Star District', distance: '0.8 Miles' },
  ],
  agent: {
    name: 'Alexander Sterling',
    role: 'Senior Portfolio Manager',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAcLI_xP1nGapek3H-T9FOFUAtX4IeU0aBy6zvQQlVx9snEm69szsZTsi3-TDqy7EG7zVBfoe1Lu41iC2bciP5jQksKL3sJhC2JoaIVphJf-b-20fT0nke_tbLKNmNFLGhp471f52g54iZpqZzRfJZkunVGEUjNFAKhO_4rnn5qZRXKRuXbtx9SqtBxu4mAYtRf2n7OLuylcl7ZFj-rFwJPnsUtmeBmi8ErHpPdc5v-c6ULNQ1S3jHs8j9SptOO6y18meJz8GZdc6YP',
  },
  investmentInsight: {
    title: 'Investment Insight',
    description:
      'Properties in the Sky-District have appreciated by an average of 12.4% annually over the last five years.',
    trendLabel: 'High Growth Potential',
  },
};

export const getPropertyDetailById = (id: string): PropertyDetail => {
  const found = detailedProperties.find((p) => p.id === id);
  if (found) {
    return {
      ...samplePropertyDetail,
      id: found.id,
      title: found.title,
      location: found.location,
      price: found.price,
      bedrooms: found.bedrooms,
      bathrooms: found.bathrooms,
      sqft: found.sqft,
      badges: found.badges,
    };
  }
  return samplePropertyDetail;
};
