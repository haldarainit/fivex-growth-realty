import { DetailedProperty } from '@/types';

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
