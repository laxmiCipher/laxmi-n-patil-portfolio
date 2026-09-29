export interface Project {
  id: string;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  features: string[];
  badge: string;
  architectureOverview: string;
  databaseSchema?: string[];
  highlights?: string[];
  javaHighlights?: string[];
  uiMockupType: 'marks' | 'career' | 'ride';
  githubUrl?: string; // Optional: Easily update repository link here when available
  liveUrl?: string;   // Optional: Easily update live deployment link here when available
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    description: string;
    icon: string;
    highlight?: boolean;
  }[];
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  linkedIn: string;
  linkedInUrl: string;
  location: string;
  expectedGraduation: string;
  cgpa: string;
  college: string;
  degree: string;
  careerInterest: string;
}
