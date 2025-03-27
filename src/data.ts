import { Project, Skill } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform - ShopEase",
    description: "A full-featured e-commerce platform with category-wise product listing, cart management, and secure payment integration.",
    techStack: ["React", "TypeScript", "Stripe", "Zustand", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80",
    detailedDescription: "Developed a comprehensive e-commerce solution featuring category-based product organization, shopping cart functionality, and secure payment processing through Stripe. Implemented state management using Zustand and responsive design with Tailwind CSS."
  },
  {
    id: 2,
    title: "AI-Based Language Learning Website",
    description: "An innovative platform designed to help special children learn language through AI-powered interactive exercises.",
    techStack: ["React", "Python", "TensorFlow", "NLP"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
    detailedDescription: "This project leverages artificial intelligence to create personalized learning paths for children with special needs. It includes speech recognition, visual aids, and adaptive learning algorithms."
  },
  {
    id: 3,
    title: "Route Finder Using Bi-Directional BFS/DFS",
    description: "A pathfinding visualization tool implementing bi-directional search algorithms.",
    techStack: ["JavaScript", "React", "Data Structures", "Algorithms"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    detailedDescription: "Interactive visualization of pathfinding algorithms with real-time performance comparisons between different search strategies."
  },
  {
    id: 4,
    title: "Health Impact Assessment (HIA)",
    description: "Environmental impact analysis tool for airport expansion projects.",
    techStack: ["Python", "Data Analysis", "GIS", "Visualization"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80",
    detailedDescription: "Comprehensive analysis tool that evaluates environmental and health impacts of airport expansion projects using data-driven approaches."
  }
];

export const skills: Skill[] = [
  { name: "JavaScript", level: 90, icon: "code" },
  { name: "React", level: 85, icon: "component" },
  { name: "Python", level: 88, icon: "binary" },
  { name: "AI/ML", level: 75, icon: "brain" },
  { name: "HTML/CSS", level: 95, icon: "layout" },
  { name: "Node.js", level: 80, icon: "server" },
  { name: "Data Structures", level: 85, icon: "database" },
  { name: "Git", level: 88, icon: "git-branch" }
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Institute of Technology",
    period: "2021 - Present",
    details: "Currently in 6th Semester with focus on AI/ML and Web Technologies"
  }
];

export const certifications = [
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "2023"
  },
  {
    name: "Full Stack Development",
    issuer: "Udacity",
    date: "2022"
  }
];