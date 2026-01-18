import { ReactNode } from 'react';

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  summary: string;
  avatarUrl: string;
  socials: {
    linkedin: string;
    github: string;
    email: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
  image?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SkillMetric {
    subject: string;
    A: number;
    fullMark: number;
}