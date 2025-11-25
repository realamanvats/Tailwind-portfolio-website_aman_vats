import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Coffee,
  MousePointerClick
} from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);

  const roles = ["Technology Consultant", "Full Stack Developer", "Salesforce Enthusiast", "Problem Solver"];

  // Mouse follower effect
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

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

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    text: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 2,
      backgroundColor: "rgba(192, 132, 252, 0.8)",
      mixBlendMode: "difference"
    },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      backgroundColor: "rgba(236, 72, 153, 0.8)",
    }
  };

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

  // Projects Data for Carousel
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Cursor */}
      <motion.div
        className="cursor fixed w-8 h-8 rounded-full bg-purple-500/30 pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut" }}
      />

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
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
      <section className="relative min-h-screen w-full flex items-center justify-center">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full w-full">
            {[...Array(144)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-purple-400 rounded"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>

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
            <motion.a
              href="#journey"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-semibold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
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
            </motion.a>

            <motion.a
              href={cvLink}
              className="group relative px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-2xl font-semibold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
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
              { icon: <Linkedin size={24} />, link: "https://linkedin.com/in/aman", color: "text-blue-400" },
              { icon: <Github size={24} />, link: "https://github.com/realamanvats", color: "text-gray-300" },
              { icon: <Mail size={24} />, link: "mailto:22052702@kiit.ac.in", color: "text-red-400" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                className={`p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400 transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setCursorVariant("text")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-purple-400 rounded-full mt-2"
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 text-center backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-purple-400 mb-3 flex justify-center">
                  {fact.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{fact.value}</div>
                <div className="text-gray-400 text-sm">{fact.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Radar Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Technical <span className="text-purple-400">Expertise</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  {skillCategory.category}
                </h3>
                <div className="space-y-4">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-purple-400">
                          {skill.icon}
                        </div>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="journey" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
              {[
                { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
                { id: 'achievements', label: 'Achievements', icon: <Trophy size={18} /> },
                { id: 'projects', label: 'Projects', icon: <Code size={18} /> }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Animated Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Left Column */}
              <div className="space-y-6">
                {activeTab === 'experience' && experiences.map((exp, index) => (
                  <ExperienceCard key={index} experience={exp} index={index} />
                ))}
                
                {activeTab === 'achievements' && achievements.map((achievement, index) => (
                  <AchievementCard key={index} achievement={achievement} index={index} />
                ))}
                
                {activeTab === 'projects' && projects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>

              {/* Right Column - Visual Display */}
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="text-6xl"
                  >
                    {activeTab === 'experience' && <Briefcase className="text-purple-400" />}
                    {activeTab === 'achievements' && <Trophy className="text-yellow-400" />}
                    {activeTab === 'projects' && <Code className="text-green-400" />}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 backdrop-blur-sm border border-white/10"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Create Something <span className="text-purple-400">Amazing</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's connect and build the future together
            </p>
            <motion.a
              href="mailto:22052702@kiit.ac.in"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <Mail className="mr-2" />
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Card Components
const ExperienceCard = ({ experience, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          {experience.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
            {experience.title}
          </h3>
          <p className="text-purple-400 font-semibold">
            {experience.company}
          </p>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
      <div className="flex items-center">
        <Calendar className="w-4 h-4 mr-2 text-purple-400" />
        {experience.period}
      </div>
      <div className="flex items-center">
        <MapPin className="w-4 h-4 mr-2 text-purple-400" />
        {experience.location}
      </div>
    </div>

    <ul className="space-y-2">
      {experience.achievements.map((achievement, i) => (
        <motion.li
          key={i}
          className="flex items-start text-gray-300"
          whileHover={{ x: 5 }}
        >
          <ChevronRight className="w-4 h-4 text-purple-400 mr-2 mt-1 flex-shrink-0" />
          {achievement}
        </motion.li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2 mt-4">
      {experience.technologies.map((tech, i) => (
        <motion.span
          key={i}
          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
          whileHover={{ scale: 1.05 }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const AchievementCard = ({ achievement, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-500/30 transition-all duration-300 group"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className="p-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white">
          {achievement.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
            {achievement.title}
          </h3>
          <p className="text-pink-400 font-semibold">
            {achievement.organization}
          </p>
        </div>
      </div>
      <div className="text-right">
        <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-bold border border-pink-500/30">
          {achievement.stats}
        </span>
        <div className="flex items-center text-gray-400 text-sm mt-1">
          <Calendar className="w-4 h-4 mr-1" />
          {achievement.date}
        </div>
      </div>
    </div>

    <p className="text-gray-300 mb-4 leading-relaxed">
      {achievement.description}
    </p>

    <ul className="space-y-2">
      {achievement.highlights.map((highlight, i) => (
        <motion.li
          key={i}
          className="flex items-start text-gray-300"
          whileHover={{ x: 5 }}
        >
          <Star className="w-4 h-4 text-pink-400 mr-2 mt-1 flex-shrink-0" />
          {highlight}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300 group"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className="p-3 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 text-white">
          {project.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors">
            {project.title}
          </h3>
          <span className="inline-block px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-500/30">
            {project.status}
          </span>
        </div>
      </div>
    </div>

    <p className="text-gray-300 mb-4 leading-relaxed">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech, i) => (
        <motion.span
          key={i}
          className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30"
          whileHover={{ scale: 1.05 }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

export default Hero;
