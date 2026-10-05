export interface Tour {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  duration: string;
  departureTime: string;
  departureLocation: string;
  highlights: string[];
  included: string[];
  recommendations: string[];
  priceAdult: string;
  priceChild: string;
  image: string;
  badge?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'geral' | 'embarque' | 'reserva' | 'cancelamento';
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  readTime: string;
  category: string;
  date: string;
  image: string;
}

export interface ReservationFormData {
  name: string;
  whatsapp: string;
  desiredDate: string;
  adultsCount: number;
  childrenCount: number;
  tourName: string;
  message: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: {
    label: string;
    action: string;
    value?: string;
  }[];
  ctaButton?: {
    label: string;
    url: string;
  };
}
