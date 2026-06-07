export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  stars?: number;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  link: string;
  platform: 'Medium' | 'Dev.to' | 'Other';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isThinking?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  grade?: string;
  tags?: string[];
}