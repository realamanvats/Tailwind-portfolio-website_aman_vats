import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  ArrowRight, 
  Linkedin, 
  Github, 
  Mail,
  Calendar,
  MapPin,
  Users,
  Zap,
  Code,
  Database,
  Cloud,
  Cpu,
  Globe,
  Workflow,
  Trophy,
  Award,
  Target,
  Star,
  Eye,
  Brain,
  FileText
} from 'lucide-react';

const Home = () => {
  // Hero Section Data
  const cvLink = "https://drive.google.com/file/d/10hxT6JdkHH42vKNJzgG2dekGMwmMvoFo/view";
  const kiitLogo = "https://i.postimg.cc/T1VmB5K5/OIP.jpg";
  const profileImage = "https://i.postimg.cc/44H8KkC3/Whats-App-Image-2025-01-30-at-00-26-44-0789774d.jpg";

  // Projects Data
  const projects = [
    {
      title: "Web-Based Sorting Visualizer",
      description: "Built an interactive educational tool that brings sorting algorithms to life through smooth animations. Perfect for students and developers to understand how different algorithms work in real-time.",
      technologies: ["React", "JavaScript", "Vite", "Tailwind CSS", "Framer Motion", "React Router DOM"],
      liveLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      features: [
        { icon: <Zap className="w-4 h-4" />, text: "Real-time algorithm visualization" },
        { icon: <Eye className="w-4 h-4" />, text: "Smooth, educational animations" },
        { icon: <Code className="w-4 h-4" />, text: "Multiple sorting algorithms" },
        { icon: <Brain className="w-4 h-4" />, text: "Interactive learning experience" }
      ],
      highlight: "Makes complex algorithms intuitive and visually engaging"
    },
    {
      title: "AI Resume Analyzer",
      description: "Created an intelligent resume screening tool that provides ATS scores and personalized feedback. Leverages AI to help job seekers optimize their resumes for better visibility.",
      technologies: ["React", "JavaScript", "Vite", "Tailwind CSS", "Puter.js", "Zustand"],
      liveLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      features: [
        { icon: <Brain className="w-4 h-4" />, text: "AI-powered analysis" },
        { icon:
