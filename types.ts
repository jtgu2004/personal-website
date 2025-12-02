export interface WorkSample {
  id: string;
  title: string;
  description: string;
  type: 'EXCEL' | 'PDF' | 'SLIDES' | 'RESUME';
  downloadUrl: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}