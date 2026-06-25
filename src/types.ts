export interface Bonus {
  id: string;
  title: string;
  description: string;
  value: number; // For showing the "original value" crossed out
  emoji: string;
  image?: string;
}

export interface Plan {
  id: 'basic' | 'premium';
  name: string;
  price: number;
  badge?: string;
  benefits: string[];
  ctaText: string;
  popular: boolean;
}

export interface ExampleExercise {
  id: number;
  title: string;
  phase: string; // e.g., "Calentamiento", "Táctica"
  description: string;
  setup: string; // How to set it up
  instructions: string; // Step-by-step
  coachingPoints: string[]; // Important details for the coach
  visualType: 'warmup' | 'ssc' | 'tactics' | 'fitness' | 'planning';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  result: string;
  avatar: string; // Initial letters or sport avatars
  photoUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}


