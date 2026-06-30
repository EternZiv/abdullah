export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  gallery?: string[];
  galleryLabels?: string[];
  techStack: string[];
  features: string[];
  challenges: string[];
  solution: string;
  results: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}


