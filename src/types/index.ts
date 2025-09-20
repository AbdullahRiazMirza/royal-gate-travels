export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  ctaLink: string;
}

export interface Package {
  id: string;
  title: string;
  summary: string;
  priceFrom: number;
  priceFromPKR: string;
  durationDays: number;
  images: string[];
  highlights: string[];
  itinerary: string[];
  category: 'honeymoon' | 'hajj-umra' | 'air-tickets' | 'travel-insurance' | 'visa-services' | 'hotel-booking';
}

export interface Inquiry {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TrustIndicator {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  icon: string;
}
