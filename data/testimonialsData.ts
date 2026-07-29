import { TrustMetric, SuccessStory } from '@/types';

export const trustMetrics: TrustMetric[] = [
  { value: '4.9/5', label: 'Google Reviews', icon: 'star' },
  { value: '2.5k+', label: 'Clients Served', icon: 'group' },
  { value: '₹10,000+ Cr', label: 'Assets Managed', icon: 'account_balance' },
];

export const successStories: SuccessStory[] = [
  {
    id: 'story-featured',
    variant: 'featured',
    stars: 5,
    badge: 'Exceptional Asset Strategy',
    quoteHeadline:
      '"FIVEX didn\'t just find us a property; they curated an investment portfolio that exceeded our wildest expectations. Their approach is more like a family office than a brokerage."',
    body: 'We were looking for a seamless transition into the luxury residential market in Mumbai. The team at FIVEX provided deep-market insights and handled every detail with surgical precision. Their discretion and professionalism are unmatched in the industry.',
    author: 'Rohan & Anjali Malhotra',
    role: 'Founder, Malhotra Group | London - Mumbai',
    initials: 'RA',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDg19f2OYNHkNS8Kp1ONunJ3fFPEwUISq1IILEw9MIS6pVt_Q9WwH6L8JGyXrAsQ6Dzljl7SIDYQkp46YTwGwuT-d5N0ieCyvKh2dYaAyjTMEja2y9LWSZngSY009TfjcgtjFpD3QoJc4BkrcahpdWOjMzPkcB0rIvc5DyHlH8yIay_djN38_jv2x5HTp2NEw1VMAjBivF6uujwHbrZCKdivD3UHKdcS3kxquZazLXSfGlc4CyerTY5LgbNhovC-Jngpav0dGcSJ5Un',
    imageAlt: 'Sophisticated couple on a luxury penthouse balcony at golden hour',
  },
  {
    id: 'story-dark',
    variant: 'dark',
    stars: 5,
    quoteHeadline:
      '"Transparent, professional, and results-oriented. The concierge service made our international relocation absolutely effortless."',
    author: 'David Richardson',
    role: 'Director at TechCorp | Singapore',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3FzlcO2PTsyGoQnCNRvQu7ea6zkPLAgUEFTbTJwcCV5G_E-0cWkVY4UxUImYlccUd-Uga0lS5rNqVSDcJMOozJbep4mz-asdOrIz1hIzDGpBuCcRwmz-V91XgQR-xdiSGM5kjclbgVF7QwSUGaSCiXanU-Bk1oim3RuPkUfD2yXqjdauU3geoUZrpx_2Qs2r9DfW29jaGsFiMP92jQIzxSCXvvibo2-B6ow8Za_NR7_GDtWbCcGZZvGm9rLeXpEa48B763oQqWHgj',
    imageAlt: 'Professional man in tailored suit corporate headshot',
  },
  {
    id: 'story-light',
    variant: 'light',
    stars: 5,
    quoteHeadline:
      '"The analytical depth FIVEX provides is lightyears ahead of typical real estate agents. They understand yield, growth metrics, and tax implications better than my bank."',
    author: 'Dr. Sarah Thompson',
    role: 'Investment Consultant | New York',
    initials: 'ST',
  },
  {
    id: 'story-overlay',
    variant: 'image-overlay',
    stars: 5,
    badge: 'Luxury Villa Acquisition',
    quoteHeadline:
      '"Finding a hidden gem in Bali was a dream. FIVEX made it a reality with zero stress and complete legal security."',
    author: 'The Henderson Family',
    role: 'San Francisco',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC2grYZXHjGbKIMOLNhr_ACRS7DyEOcDjVD5Cc6q9uyzXsdf075vmf59xkor8NVq10fA9cpKniBoJvClvXtGpNZkPl9P1-v1OsyZt93Ik7Vs8blogkffe8Dr2jlaRdZ28GW3OKsb6kZSodqIyobdmlkl8PMpMjuBn-ee_hORKqnsPPgqMvWCqs8keMjcj9o-ue3vshER1Z3paXoKGpwh1SGfhiVxpvkER6lLHnW-0gzjxpWC54U2_bHR5ckuSu5VuxxkiAAP_mLfZko',
    imageAlt: 'Infinity pool at sunset overlooking lush Bali valley',
  },
  {
    id: 'story-vikram',
    variant: 'detail',
    stars: 4,
    category: 'Dubai Portfolio',
    quoteHeadline: 'Dubai Portfolio Review',
    body: '"Our journey with FIVEX Growth Realty began three years ago when we were looking for high-yield rental properties in Dubai. What impressed us most was their \'Post-Purchase\' service. Most agents disappear after the commission, but FIVEX assisted with tenant management, renovation oversight, and tax optimization in India."',
    author: 'Vikram Kapur',
    role: 'CEO, Kapur Logistics',
    initials: 'VK',
  },
  {
    id: 'story-meera',
    variant: 'detail',
    stars: 5,
    category: 'Commercial Asset',
    quoteHeadline: 'Commercial Asset Review',
    body: '"Investing in commercial Grade-A office space was daunting until we met the advisory board at FIVEX. Their data-driven approach to vacancy rates and rental escalations gave us the confidence to commit. Truly a first-class operation."',
    author: 'Meera Mehta',
    role: 'Angel Investor | Bangalore',
    initials: 'MM',
  },
];
