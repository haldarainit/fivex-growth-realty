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
