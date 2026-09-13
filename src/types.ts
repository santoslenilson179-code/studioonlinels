export type PortfolioCategory = 
  | 'Todos'
  | 'Retratos'
  | 'Corporativo'
  | 'Moda'
  | 'Lifestyle'
  | 'Social Media'
  | 'Beleza'
  | 'Produtos'
  | 'Editorial';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  imageUrl: string;
  aspectRatio: 'portrait' | 'square' | 'tall';
  promptDescription: string;
  styleTags: string[];
  lighting: string;
  cameraLens: string;
  clientType: string;
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  details: string[];
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  features: string[];
  deliverables: string;
  idealFor: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceDisplay: string;
  billingPeriod: string;
  popular?: boolean;
  icon?: string;
  badge?: string;
  imagesCount: string;
  stylesCount: string;
  resolution: string;
  turnaround: string;
  features: string[];
  ctaText: string;
  whatsappMessage?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  resultImageUrl: string;
  quote: string;
  rating: number;
  highlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface StudioSessionConfig {
  category: string;
  styleVibe: string;
  lighting: string;
  backdrop: string;
  wardrobe: string;
  aspectRatio: string;
  customNotes: string;
  referenceImagesCount: number;
}
