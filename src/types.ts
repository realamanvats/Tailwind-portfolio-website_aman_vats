export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  detailedDescription: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}