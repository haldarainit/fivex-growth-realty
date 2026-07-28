export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  width?: number;
  height?: number;
}

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'office', label: 'Office' },
  { id: 'birthday', label: 'Birthday' },
  { id: 'awards', label: 'Awards' },
  { id: 'anniversary', label: 'Company Anniversary' },
  { id: 'festivals', label: 'Festivals' },
  { id: 'csr', label: 'CSR Activities' },
  { id: 'team-events', label: 'Team Events' },
  { id: 'property-visits', label: 'Property Visits' },
  { id: 'conferences', label: 'Conferences' },
];

export const galleryImages: GalleryImage[] = [
  // Office
  { id: 'g-1', src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', alt: 'FIVEX Noida HQ Office', category: 'office' },
  { id: 'g-2', src: 'https://images.unsplash.com/photo-1497366754035-f200581dc0fb?w=800&q=80', alt: 'Client Meeting Room', category: 'office' },
  { id: 'g-3', src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80', alt: 'Workspace Interior', category: 'office' },
  { id: 'g-4', src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80', alt: 'Team Collaboration Area', category: 'office' },

  // Birthday
  { id: 'g-5', src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80', alt: 'Team Birthday Celebration', category: 'birthday' },
  { id: 'g-6', src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80', alt: 'Office Birthday Party', category: 'birthday' },

  // Awards
  { id: 'g-7', src: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80', alt: 'CREDAI Awards Ceremony', category: 'awards' },
  { id: 'g-8', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', alt: 'Best Brokerage Award', category: 'awards' },
  { id: 'g-9', src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80', alt: 'Excellence Award Recognition', category: 'awards' },

  // Company Anniversary
  { id: 'g-10', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80', alt: '10th Anniversary Celebration', category: 'anniversary' },
  { id: 'g-11', src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80', alt: 'Company Foundation Day', category: 'anniversary' },

  // Festivals
  { id: 'g-12', src: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800&q=80', alt: 'Diwali Office Celebration', category: 'festivals' },
  { id: 'g-13', src: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80', alt: 'Holi Festival at Office', category: 'festivals' },
  { id: 'g-14', src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80', alt: 'Republic Day Celebration', category: 'festivals' },

  // CSR Activities
  { id: 'g-15', src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80', alt: 'Tree Plantation Drive', category: 'csr' },
  { id: 'g-16', src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', alt: 'Blood Donation Camp', category: 'csr' },
  { id: 'g-17', src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80', alt: 'Education Initiative Visit', category: 'csr' },

  // Team Events
  { id: 'g-18', src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80', alt: 'Annual Team Offsite', category: 'team-events' },
  { id: 'g-19', src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80', alt: 'Team Building Activity', category: 'team-events' },
  { id: 'g-20', src: 'https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?w=800&q=80', alt: 'Sales Team Achievement Dinner', category: 'team-events' },

  // Property Visits
  { id: 'g-21', src: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80', alt: 'Luxury Project Site Visit', category: 'property-visits' },
  { id: 'g-22', src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80', alt: 'Client Property Tour', category: 'property-visits' },
  { id: 'g-23', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'Commercial Project Inspection', category: 'property-visits' },

  // Conferences
  { id: 'g-24', src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80', alt: 'CREDAI Annual Conference', category: 'conferences' },
  { id: 'g-25', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', alt: 'Real Estate Expo Booth', category: 'conferences' },
  { id: 'g-26', src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80', alt: 'Industry Summit Panel', category: 'conferences' },
];
