export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface PropertySpec {
  icon: string;
  label: string;
}

export interface PropertyItem {
  id: string;
  title: string;
  location: string;
  price: string;
  reraId: string;
  badgeStyle: string;
  image: string;
  tags: string[];
  specs: PropertySpec[];
  actionText: string;
}

export interface DetailedProperty {
  id: string;
  title: string;
  location: string;
  price: string;
  badges: { label: string; style: string }[];
  image: string;
  imageAlt?: string;
  bedrooms: number;
  bathrooms: number;
  sqft: string;
  isFavorite?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
  variant: 'light' | 'dark';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface PillarItem {
  icon: string;
  title: string;
  description: string;
}

export interface HeroStatItem {
  icon: string;
  label: string;
}

export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt?: string;
}

export interface StatMetric {
  value: number;
  suffix?: string;
  label: string;
}
