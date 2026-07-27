import { BlogPost, BlogCategory } from '@/types/blog';

export const blogCategories: BlogCategory[] = [
  { id: 'all', label: 'All Articles' },
  { id: 'market-trends', label: 'Market Trends' },
  { id: 'investment-tips', label: 'Investment Tips' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'projects', label: 'Project Spotlights' },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'featured-2024-luxury-guide',
    title: 'Navigating the 2024 Luxury Real Estate Market: An Investor\'s Guide',
    excerpt:
      'Explore the evolving landscape of high-net-worth investments and the architectural trends defining this year\'s most prestigious developments.',
    category: 'Investment Tips',
    readTime: '10 Min Read',
    date: 'May 24, 2024',
    featured: true,
    featuredBadge: 'Featured Insight',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwxoyB-ZLSHA3wW3Zbt3blt5jjv-BHaPd7mG9-o_3eSvzx5Qgu3Q4Hm2YPffD3lMFTtFK3eYRaQnns8fhvHTPXWVCoKOTQwT9cwvn9RIpWOKbGy-Rq49na5SWkjqgKna3hGmR215x89zhEidJuuWsfullPe5gM7ZhwMlswRsJk6zZgI4U6jWLsuNcwZXmJ48KxoTUTEsxKjL6IDaR6UO9uhbHJe6FtY1rFBCjxNu6oWQ0ViaLE2Yvmk-HZTLS7-_bwI1mzLlafL8ol',
    imageAlt: 'Luxury penthouse interior overlooking cityscape at dusk',
  },
  {
    id: 'sustainable-luxury',
    title: 'The Rise of Sustainable Luxury: Architecture Meets Ecology',
    excerpt:
      'How modern developers are integrating high-end finishes with net-zero carbon technologies to redefine the future of living.',
    category: 'lifestyle',
    readTime: '8 Min Read',
    date: 'May 12, 2024',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD2aHRI76d0-wcddLGffaG6LJtU9tFfin5xa-BQbd4oDGdSh93O45C9Y1ueXnIxy6oJkoh0vPlVfwBIzzG59PeTA2YLgEg7owh-Z_iusVok07n9xCd-ZCY_SQOyCezM3EkdpTwr87NBvkc_vBQnITTG6RmqQfXKcyU3xY0Ha7lSuPQnCHXwmOWlVkfsEegATDVXNSG_brFhyVwVIwlczphzjJisvH2OEx6yCYyZJe_IO6yvwLPpryI0msqdewHjWDcgIQh7L97u43Lt',
    imageAlt: 'Modern glass villa set against lush green forest at dawn',
  },
  {
    id: 'mid-city-investment-hubs',
    title: 'Why Mid-Sized Cities are Becoming the New Investment Hubs',
    excerpt:
      'A deep dive into the migration of capital towards emerging tech-driven urban centers across the country.',
    category: 'market-trends',
    readTime: '5 Min Read',
    date: 'May 08, 2024',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAlCXB9uj83ajG4GfyEx2JqEn0vbAjokg4BiqN9DntC2sfZzlFb6JslIKks8aZ07qvo4rl8aIhi4MKCbUxjK8-13m1df9FwcjQe1JlSke_yT9bhTpfNFcDCzWx8aDq7HwLwquuZ6amXVqLCiTLo749Lr_pEnrFeV16TMTMxAMLW-AyeAvoeDVBysSVTU_c-IWH1t3sigDL0P2FIAdMGQX-7YV4J5KL3gtjM6BOpA43GxgwE3Lq6VZ2sYIsJZ9_b4rXLgq6RfDXuDWMc',
    imageAlt: 'Investment portfolio documents with gold pen on marble desk',
  },
  {
    id: 'riviera-heights-masterplan',
    title: 'Exclusive First Look: The Riviera Heights Masterplan',
    excerpt:
      'Unveiling the architectural vision for the most ambitious luxury residential project of the decade.',
    category: 'projects',
    readTime: '12 Min Read',
    date: 'May 02, 2024',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ11r3wRlKJIgJ0lyHsc0tEwHLnzqaod6NecO8xWdtRkBpGW3PaUPvkY0yTt1KelYVljuJv1t0NTDjjP0Id7JpRiQUifgDOp0vzKNx6sNFgF_kT2elQfrbTm8zZKbK8f_63JQv03D6CivqdwXfmO42IzN519HKVUF-OYpA3Ouqaz5QG_zYlWtYJqWrTmHUERqWfcvg2nJr09XIYkkqx9JC9RFGDHLWH-QE4ZqvKtOUgU2V2a0I6MOyUKrHHfThnwSprQwr7pitz0V5',
    imageAlt: 'Aerial view of luxury waterfront development with private docks',
  },
  {
    id: 'interest-rates-portfolio',
    title: 'The Impact of Global Interest Rates on Real Estate Portfolio Diversification',
    excerpt:
      'Practical strategies for high-net-worth individuals to protect their assets in a shifting global economy.',
    category: 'investment-tips',
    readTime: '6 Min Read',
    date: 'April 28, 2024',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAo3rwh2DjU6Ne6AN5IG6E2U81XowlA6hKXYgEKIrcZgV8TmrBNyTPqXxWEe8sfFp959cAMf99J13DSfpBVh7z5_2GW3H5VBePh7w9frohu7yzjVyeM3y3EyYwP6UjW2lqz18N7tUUHLZ6bSimfjkz4bD6HKodBnLSfa4EUN8LI996fpQXAv3coOVA7qD3oqnLZ3BUczmuHydOT7ywOn0hXJwHMd1mqW8rS1vZ_S5W1HFzBKeCccb4tsAw4-yWTO87Q2Hul-ULVsb0x',
    imageAlt: 'Minimalist home office with real estate market graphs on screen',
  },
];

export const newsletterImageUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD7fQ2K8cpHn2ET8WxVJQeeeZNePtgYlk0UTcOkr7Ak2LSYFkhEe_UxVe9PzudJrZETzXCDd06OOkpuzo-43UY_MubJJhuGnYVx5EBPo4gitjORaS-GQCuqC0TXL5lMFtRYb09KiOuYn5gZgbIgRr1qOwkYlHGPNHHt4l6G-caeYl0H1mMySHT4bKRVJhcQBzLi7u4oiNGhgWgg7dwQgP5-Ol5WLD3XaAAbDtjv6MqjiteWvxCCgyIiWTmtGwpoHACRFxFDs-uGVUf8';
