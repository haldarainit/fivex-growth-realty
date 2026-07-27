export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  imageAlt?: string;
  featured?: boolean;
  featuredBadge?: string;
}

export interface BlogCategory {
  id: string;
  label: string;
}

export interface BlogContentItem {
  author: string;
  authorRole: string;
  tags: string[];
  body: string;
}
