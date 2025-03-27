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

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}