export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  slug: string;
  content?: string; // HTML content for the full post
}

export enum SectionId {
  HERO = 'hero',
  SERVICES = 'services',
  ABOUT = 'about',
  PRICING = 'pricing',
  TESTIMONIALS = 'testimonials',
  CONTACT = 'contact'
}

export type PageView = 'home' | 'about' | 'quote' | 'blog' | 'blog-post' | 'contact' | 'services';