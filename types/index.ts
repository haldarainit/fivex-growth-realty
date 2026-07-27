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

export interface LandmarkItem {
  icon: string;
  name: string;
  distance: string;
}

export interface DetailAmenity {
  icon: string;
  title: string;
}

export interface AgentInfo {
  name: string;
  role: string;
  image: string;
}

export interface PropertyDetail {
  id: string;
  title: string;
  location: string;
  price: string;
  priceLabel?: string;
  badges: { label: string; style: string }[];
  bedrooms: number;
  bathrooms: number;
  sqft: string;
  galleryImages: { url: string; alt: string }[];
  overview: string[];
  amenities: DetailAmenity[];
  floorPlanImage: string;
  landmarks: LandmarkItem[];
  agent: AgentInfo;
  investmentInsight: {
    title: string;
    description: string;
    trendLabel: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  startingPrice: string;
  yieldText: string;
  description: string;
  image: string;
  imageAlt?: string;
  badges: { label: string; style: string }[];
}

export interface UpcomingProjectItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt?: string;
  badge: { label: string; style: string };
}

export interface CompletedProjectItem {
  id: string;
  title: string;
  completedYear: string;
  image: string;
  imageAlt?: string;
}

export interface LocationHighlight {
  icon: string;
  title: string;
  subtitle: string;
}

export interface LocationDestination {
  id: string;
  title: string;
  sectorsText: string;
  inventoryCount: string;
  growthPotential: string;
  image: string;
  imageAlt?: string;
  badges: { label: string; style: string }[];
  highlights: LocationHighlight[];
}

export interface ServiceCardItem {
  id: string;
  title: string;
  category?: string;
  description: string;
  features?: string[];
  icon?: string;
  image?: string;
  imageAlt?: string;
  badgeText?: string;
  variant: 'large' | 'dark' | 'glass' | 'image' | 'light';
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
  category?: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  icon: string;
}

export interface TrustMetric {
  value: string;
  label: string;
  icon?: string;
}

export interface SuccessStory {
  id: string;
  variant: 'featured' | 'dark' | 'light' | 'image-overlay' | 'detail';
  badge?: string;
  category?: string;
  stars: number;
  quoteHeadline: string;
  body?: string;
  author: string;
  role: string;
  initials?: string;
  image?: string;
  imageAlt?: string;
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
