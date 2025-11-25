// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Download, 
//   ArrowRight, 
//   Linkedin, 
//   Github, 
//   Mail,
//   Calendar,
//   MapPin,
//   Users,
//   Zap,
//   Code,
//   Database,
//   Cloud,
//   Cpu,
//   Globe,
//   Workflow,
//   Trophy,
//   Award,
//   Target,
//   Star,
//   Eye,
//   Brain,
//   FileText
// } from 'lucide-react';

// const Home = () => {
//   // Hero Section Data
//   const cvLink = "https://drive.google.com/file/d/10hxT6JdkHH42vKNJzgG2dekGMwmMvoFo/view";
//   const kiitLogo = "https://i.postimg.cc/T1VmB5K5/OIP.jpg";
//   const profileImage = "https://i.postimg.cc/44H8KkC3/Whats-App-Image-2025-01-30-at-00-26-44-0789774d.jpg";

//   // Projects Data
//   const projects = [
//     {
//       title: "Web-Based Sorting Visualizer",
//       description: "Built an interactive educational tool that brings sorting algorithms to life through smooth animations. Perfect for students and developers to understand how different algorithms work in real-time.",
//       technologies: ["React", "JavaScript", "Vite", "Tailwind CSS", "Framer Motion", "React Router DOM"],
//       liveLink: "#",
//       githubLink: "#",
//       image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
//       features: [
//         { icon: <Zap className="w-4 h-4" />, text: "Real-time algorithm visualization" },
//         { icon: <Eye className="w-4 h-4" />, text: "Smooth, educational animations" },
//         { icon: <Code className="w-4 h-4" />, text: "Multiple sorting algorithms" },
//         { icon: <Brain className="w-4 h-4" />, text: "Interactive learning experience" }
//       ],
//       highlight: "Makes complex algorithms intuitive and visually engaging"
//     },
//     {
//       title: "AI Resume Analyzer",
//       description: "Created an intelligent resume screening tool that provides ATS scores and personalized feedback. Leverages AI to help job seekers optimize their resumes for better visibility.",
//       technologies: ["React", "JavaScript", "Vite", "Tailwind CSS", "Puter.js", "Zustand"],
//       liveLink: "#",
//       githubLink: "#",
//       image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       features: [
//         { icon: <Brain className="w-4 h-4" />, text: "AI-powered analysis" },
//         { icon:
import React, { useState, useEffect } from 'react';
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
  Trophy,
  Award,
  Star,
  Target,
  Briefcase,
  School,
  ChevronRight,
  Sparkles,
  Rocket,
  Cpu,
  Database,
  Cloud,
  Globe,
  Workflow,
  Brain,
  Eye,
  FileText,
  Shield,
  BarChart3,
  Heart,
  Coffee
} from 'lucide-react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);

  const roles = ["Technology Consultant", "Full Stack Developer", "Salesforce Enthusiast", "Problem Solver"];

  // Typing effect
  useEffect(() => {
    if (typingIndex < roles.length) {
      const currentRole = roles[typingIndex];
      let charIndex = 0;
      let currentText = '';

      const typingInterval = setInterval(() => {
        if (charIndex < currentRole.length) {
          currentText += currentRole.charAt(charIndex);
          setTypingText(currentText);
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setTypingIndex((prev) => (prev + 1) % roles.length);
          }, 2000);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [typingIndex]);

  // Hero Section Data
  const cvLink = "https://drive.google.com/file/d/10hxT6JdkHH42vKNJzgG2dekGMwmMvoFo/view";
  const kiitLogo = "https://i.postimg.cc/T1VmB5K5/OIP.jpg";
  const profileImage = "https://i.postimg.cc/44H8KkC3/Whats-App-Image-2025-01-30-at-00-26-44-0789774d.jpg";

  // Experience Data
  const experiences = [
    {
      title: "Incoming Technology Consultant Intern",
      company: "PwC India - Career & Technology Development Program (CTDP 3.0)",
      period: "July 2025 - Oct 2025",
      location: "Virtual",
      type: "Internship",
      achievements: [
        "Completed intensive 8-module Salesforce training, securing an Internship Offer based on performance",
        "Automated business processes using declarative tools, focusing on Salesforce Flow (Record-Triggered, Screen)",
        "Gained hands-on experience in Declarative Development by configuring objects, data models, security access",
        "Built a functional 'Recruiting App' via customization and designed interactive reports/dashboards"
      ],
      technologies: ["Salesforce Flow", "Object Management", "Security Configuration", "Lightning", "Reports & Dashboards"],
      icon: <Briefcase className="w-5 h-5" />,
      color: "blue"
    }
  ];

  // Achievements Data
  const achievements = [
    {
      title: "PwC CTDP 3.0 - Technology Consultant Internship",
      organization: "PwC India",
      date: "October 2025",
      description: "Secured Technology Consultant Internship Offer through competitive selection process",
      highlights: [
        "Top 97 students out of 800+ nationwide candidates",
        "Cleared initial assessment and Module One project",
        "Demonstrated exceptional skills in Salesforce and business process automation"
      ],
      icon: <Trophy className="w-6 h-6" />,
      color: "purple",
      stats: "Top 97/800+"
    },
    {
      title: "Infosys HackWithInfy - Digital Specialist Engineer PPI",
      organization: "Infosys",
      date: "July 2025",
      description: "Secured Pre-Placement Interview (PPI) for Digital Specialist Engineer Role",
      highlights: [
        "Cleared Round 1 of national coding competition",
        "Selected from 1,000+ university candidates",
        "Demonstrated strong problem-solving and coding abilities"
      ],
      icon: <Award className="w-6 h-6" />,
      color: "blue",
      stats: "1,000+ Candidates"
    }
  ];

  // Skills Data
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "C++", level: 90, icon: <Code className="w-4 h-4" /> },
        { name: "JavaScript", level: 85, icon: <Code className="w-4 h-4" /> },
        { name: "C", level: 80, icon: <Code className="w-4 h-4" /> }
      ]
    },
    {
      category: "Web Technologies",
      items: [
        { name: "React", level: 85, icon: <Globe className="w-4 h-4" /> },
        { name: "HTML/CSS", level: 90, icon: <Globe className="w-4 h-4" /> },
        { name: "Tailwind CSS", level: 85, icon: <Globe className="w-4 h-4" /> }
      ]
    },
    {
      category: "Salesforce & Cloud",
      items: [
        { name: "Salesforce Flow", level: 80, icon: <Cloud className="w-4 h-4" /> },
        { name: "Object Management", level: 75, icon: <Database className="w-4 h-4" /> },
        { name: "Reports & Dashboards", level: 75, icon: <BarChart3 className="w-4 h-4" /> }
      ]
    }
  ];

  // Projects Data
  const projects = [
    {
      title: "Web-Based Sorting Visualizer",
      description: "Interactive educational tool that brings sorting algorithms to life through smooth animations",
      technologies: ["React", "JavaScript", "Vite", "Tailwind CSS", "Framer Motion"],
      status: "Completed",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "AI Resume Analyzer",
      description: "AI-powered tool that analyzes resumes and provides ATS scores with personalized feedback",
      technologies: ["React", "JavaScript", "Puter.js", "Zustand", "Tailwind CSS"],
      status: "Completed",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "Salesforce Recruiting App",
      description: "Functional recruiting application built with Salesforce declarative tools",
      technologies: ["Salesforce Flow", "Lightning", "Object Management", "Reports"],
      status: "Completed",
      icon: <Users className="w-8 h-8" />
    }
  ];

  // Fun Facts
  const funFacts = [
    { icon: <Coffee className="w-6 h-6" />, text: "Coffee consumed while coding", value: "∞ cups" },
    { icon: <Code className="w-6 h-6" />, text: "Lines of code written", value: "50K+" },
    { icon: <Rocket className="w-6 h-6" />, text: "Projects completed", value: "10+" },
    { icon: <Heart className="w-6 h-6" />, text: "Passion for learning", value: "100%" }
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10"
            style={{
              width: Math.random() * 80 + 20,
              height: Math.random() * 80 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen w-full flex items-center justify-center">
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Animated Welcome Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-400 font-mono text-sm">Welcome to my digital universe</span>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-300% animate-gradient">
              Aman Kumar
            </span>
          </motion.h1>

          {/* Typing Text */}
          <motion.div
            className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-8 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-purple-400 font-mono">{typingText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="ml-1"
            >
              |
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Crafting digital experiences with code, creativity, and cutting-edge technology. 
            Passionate about building solutions that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              onClick={() => scrollToSection('journey')}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-semibold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                Explore My Journey <Rocket className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-2xl font-semibold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                Download CV <Download className="ml-2 group-hover:animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {[
              { icon: <Linkedin size={24} />, link: "https://linkedin.com/in/aman-vats-aa5a5a1b2", color: "text-blue-400" },
              { icon: <Github size={24} />, link: "https://github.com/realamanvats", color: "text-gray-300" },
              { icon: <Mail size={24} />, link: "mailto:22052702@kiit.ac.in", color: "text-red-400" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400 transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rest of your sections (Fun Facts, Skills, Journey, etc.) */}
      {/* ... include the other sections from the previous code ... */}
    </div>
  );
};

export default Hero;
