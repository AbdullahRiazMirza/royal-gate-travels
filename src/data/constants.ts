import type { Service, Package, Testimonial, FAQItem, TrustIndicator, Step } from '../types';
import { getAssetPath } from '../utils/assetPath';

export const services: Service[] = [
  {
    id: '1',
    title: 'Honeymoon Packages',
    slug: 'honeymoon',
    shortDescription: 'Romantic getaways for your special moments',
    longDescription: 'Create unforgettable memories with our carefully curated honeymoon packages to the world\'s most romantic destinations.',
    iconName: 'Heart',
    ctaLink: '#contact'
  },
  {
    id: '2',
    title: 'Hajj & Umra',
    slug: 'hajj',
    shortDescription: 'Sacred journeys with spiritual guidance',
    longDescription: 'Experience the pilgrimage of a lifetime with our comprehensive Hajj and Umra packages, including accommodation and guidance.',
    iconName: 'Mosque',
    ctaLink: '#contact'
  },
  {
    id: '3',
    title: 'Worldwide Air Tickets',
    slug: 'worldwideairtickets',
    shortDescription: 'Best deals on flights worldwide',
    longDescription: 'Find the best airfare deals to any destination worldwide with our extensive network of airline partners.',
    iconName: 'Plane',
    ctaLink: '#contact'
  },
  {
    id: '4',
    title: 'Travel Insurance',
    slug: 'travelinsurance',
    shortDescription: 'Comprehensive coverage for peace of mind',
    longDescription: 'Protect your journey with our comprehensive travel insurance plans covering medical, trip cancellation, and more.',
    iconName: 'Shield',
    ctaLink: '#contact'
  },
  {
    id: '5',
    title: 'Visa Services',
    slug: 'visa-service',
    shortDescription: 'Expert assistance with visa applications',
    longDescription: 'Get expert help with visa applications for countries worldwide, ensuring a smooth and successful process.',
    iconName: 'FileText',
    ctaLink: '#contact'
  },
  {
    id: '6',
    title: 'Hotel Booking',
    slug: 'hotelbooking',
    shortDescription: 'Luxury accommodations worldwide',
    longDescription: 'Book the perfect accommodation for your stay, from luxury resorts to budget-friendly options.',
    iconName: 'Building',
    ctaLink: '#contact'
  }
];

export const featuredPackages: Package[] = [
  {
    id: '1',
    title: 'Maldives Honeymoon Paradise',
    summary: '7 days of luxury in overwater bungalows',
    priceFrom: 500000, // 5 lacs PKR
    priceFromPKR: '5 lacs',
    durationDays: 7,
    images: [getAssetPath('/packages/maldives-honeymoon.jpg')],
    highlights: ['Overwater bungalow', 'Private beach access', 'Couples spa treatment', 'Sunset dinner cruise'],
    itinerary: ['Day 1: Arrival & welcome', 'Day 2-3: Beach activities', 'Day 4: Spa day', 'Day 5-6: Water sports', 'Day 7: Departure'],
    category: 'honeymoon'
  },
  {
    id: '2',
    title: 'Complete Hajj Package 2024',
    summary: 'Full Hajj experience with expert guidance',
    priceFrom: 900000, // 9 lacs PKR
    priceFromPKR: '9 lacs',
    durationDays: 14,
    images: [getAssetPath('/packages/hajj-package.jpg')],
    highlights: ['5-star accommodation in Makkah', 'Expert Hajj guide', 'All meals included', 'Transportation provided'],
    itinerary: ['Day 1-3: Arrival & preparation', 'Day 4-7: Umra performance', 'Day 8-12: Hajj rituals', 'Day 13-14: Departure'],
    category: 'hajj-umra'
  },
  {
    id: '3',
    title: 'European Grand Tour',
    summary: '14 days exploring Europe\'s finest cities',
    priceFrom: 640000, // 6.4 lacs PKR
    priceFromPKR: '8 lacs',
    durationDays: 14,
    images: [getAssetPath('/packages/europe-tour.jpg')],
    highlights: ['Paris, Rome, Barcelona', 'Guided city tours', 'High-speed train passes', '4-star hotels'],
    itinerary: ['Days 1-3: Paris', 'Days 4-7: Rome', 'Days 8-11: Barcelona', 'Days 12-14: Return'],
    category: 'air-tickets'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed & Fatima Hassan',
    location: 'London, UK',
    rating: 5,
    quote: 'Our honeymoon in the Maldives was absolutely perfect. Royal Gate Travels made everything seamless and memorable.',
    image: '/images/testimonial-1.jpg'
  },
  {
    id: '2',
    name: 'Mohammed Ali',
    location: 'Manchester, UK',
    rating: 5,
    quote: 'The Hajj package was exceptional. The guidance and support throughout the journey was outstanding.',
    image: '/images/testimonial-2.jpg'
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    location: 'Birmingham, UK',
    rating: 5,
    quote: 'Professional service and great deals on flights. Will definitely use them again for future travels.',
    image: '/images/testimonial-3.jpg'
  },
  {
    id: '4',
    name: 'Ibrahim Khan',
    location: 'Leeds, UK',
    rating: 5,
    quote: 'The visa assistance was incredibly helpful. They guided us through every step of the process.',
    image: '/images/testimonial-4.jpg'
  }
];

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'How far in advance should I book my Hajj package?',
    answer: 'We recommend booking your Hajj package at least 6-8 months in advance to secure the best accommodations and ensure all necessary documentation is processed on time.'
  },
  {
    id: '2',
    question: 'What is included in the travel insurance?',
    answer: 'Our travel insurance covers medical expenses, trip cancellation, lost luggage, emergency evacuation, and 24/7 emergency assistance worldwide.'
  },
  {
    id: '3',
    question: 'Do you offer group discounts?',
    answer: 'Yes, we offer special group discounts for parties of 10 or more. Contact us for a personalized quote based on your group size and requirements.'
  },
  {
    id: '4',
    question: 'What is your cancellation policy?',
    answer: 'Cancellation policies vary by package type. Generally, cancellations made 30+ days before departure receive a full refund, while closer cancellations may incur fees.'
  },
  {
    id: '5',
    question: 'Do you provide halal food options?',
    answer: 'Absolutely! We ensure all our packages include halal-certified meals and accommodations that respect Islamic dietary requirements.'
  },
  {
    id: '6',
    question: 'How do I track my visa application?',
    answer: 'We provide regular updates on your visa application status and will notify you immediately once your visa is approved and ready for collection.'
  }
];

export const trustIndicators: TrustIndicator[] = [
  {
    id: '1',
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your travel needs',
    icon: 'Phone'
  },
  {
    id: '2',
    title: 'Certified Agents',
    description: 'Licensed and experienced travel professionals',
    icon: 'Award'
  },
  {
    id: '3',
    title: 'Best Price Guarantee',
    description: 'We match or beat any competitor\'s price',
    icon: 'DollarSign'
  },
  {
    id: '4',
    title: 'Halal-Friendly',
    description: 'All accommodations and services are halal-certified',
    icon: 'CheckCircle'
  },
  {
    id: '5',
    title: 'Secure Payments',
    description: 'Your payments are protected with bank-level security',
    icon: 'Shield'
  }
];

export const howItWorksSteps: Step[] = [
  {
    id: '1',
    title: 'Search & Choose',
    description: 'Browse our packages and select your preferred destination and dates',
    icon: 'Search'
  },
  {
    id: '2',
    title: 'Speak to Agent',
    description: 'Get personalized advice from our travel experts',
    icon: 'MessageCircle'
  },
  {
    id: '3',
    title: 'Confirm & Pay',
    description: 'Review your booking details and make secure payment',
    icon: 'CreditCard'
  },
  {
    id: '4',
    title: 'Get Documents',
    description: 'Receive all travel documents and prepare for your journey',
    icon: 'FileText'
  }
];
