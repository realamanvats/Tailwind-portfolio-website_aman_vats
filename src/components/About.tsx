// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Code, 
//   Brain, 
//   Database, 
//   Globe, 
//   Cpu,
//   Cloud,
//   Workflow,
//   Users,
//   Target,
//   Zap,
//   Sparkles,
//   Rocket,
//   Lightbulb,
//   TrendingUp,
//   ArrowRight,
//   Heart,
//   Coffee,
//   BookOpen,
//   Shield,
//   BarChart3
// } from "lucide-react";

// const About: React.FC = () => {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % features.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   // Based on your CV
//   const features = [
//     {
//       icon: <Cloud className="w-10 h-10" />,
//       title: "Salesforce Development",
//       description: "Expert in declarative development with Salesforce Flow, Object Management, and business process automation",
//       technologies: ["Salesforce Flow", "Lightning", "Reports & Dashboards"],
//       color: "from-blue-500 to-cyan-500",
//       bgColor: "bg-blue-500/10",
//       stats: "8+ Modules Completed",
//       delay: 0
//     },
//     {
//       icon: <Code className="w-10 h-10" />,
//       title: "Full Stack Development",
//       description: "Building responsive web applications with modern React ecosystem and cutting-edge technologies",
//       technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
//       color: "from-purple-500 to-pink-500",
//       bgColor: "bg-purple-500/10",
//       stats: "10+ Projects",
//       delay: 0.1
//     },
//     {
//       icon: <Cpu className="w-10 h-10" />,
//       title: "Problem Solving",
//       description: "Strong foundation in Data Structures & Algorithms with proficient C++ programming skills",
//       technologies: ["C++", "DSA", "OOP", "System Design"],
//       color: "from-green-500 to-emerald-500",
//       bgColor: "bg-green-500/10",
//       stats: "Proficient in C++",
//       delay: 0.2
//     },
//     {
//       icon: <Workflow className="w-10 h-10" />,
//       title: "Business Process Automation",
//       description: "Specialized in no-code solutions and declarative development for efficient business workflows",
//       technologies: ["Declarative Tools", "Process Automation", "Solution Design"],
//       color: "from-orange-500 to-red-500",
//       bgColor: "bg-orange-500/10",
//       stats: "No-Code Expert",
//       delay: 0.3
//     }
//   ];

//   const stats = [
//     { icon: <Target className="w-6 h-6" />, value: "8.11", label: "CGPA at KIIT" },
//     { icon: <Zap className="w-6 h-6" />, value: "97", label: "Top Rank PwC CTDP" },
//     { icon: <Users className="w-6 h-6" />, value: "800+", label: "Candidates Outperformed" },
//     { icon: <TrendingUp className="w-6 h-6" />, value: "1000+", label: "HackWithInfy Participants" }
//   ];

//   const passions = [
//     { icon: <Brain className="w-6 h-6" />, text: "AI & Machine Learning" },
//     { icon: <Globe className="w-6 h-6" />, text: "Web Technologies" },
//     { icon: <Database className="w-6 h-6" />, text: "Cloud Computing" },
//     { icon: <Shield className="w-6 h-6" />, text: "Cyber Security" }
//   ];

//   return (
//     <section id="about" className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10"
//             style={{
//               width: Math.random() * 100 + 50,
//               height: Math.random() * 100 + 50,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, (Math.random() - 0.5) * 100],
//               x: [0, (Math.random() - 0.5) * 100],
//               opacity: [0.1, 0.3, 0.1],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
//             whileHover={{ scale: 1.05 }}
//           >
//             <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
//             <span className="text-purple-400 font-mono text-sm">Behind The Code</span>
//           </motion.div>
          
//           <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
//             Crafting <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Digital Excellence</span>
//           </h2>
          
//           <motion.p
//             className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             A passionate <span className="text-purple-400 font-semibold">Computer Science Engineering student</span> at KIIT University 
//             with a strong foundation in full-stack development, Salesforce technologies, and competitive programming. 
//             Currently shaping the future of business technology through innovative solutions.
//           </motion.p>
//         </motion.div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Left Column - Animated Features */}
//           <div className="space-y-8">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeFeature}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.5 }}
//                   className={`p-8 rounded-3xl backdrop-blur-sm border border-white/10 bg-gradient-to-br ${features[activeFeature].color}/10 relative overflow-hidden group`}
//                 >
//                   {/* Animated Background */}
//                   <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                  
//                   {/* Header */}
//                   <div className="flex items-center space-x-4 mb-6">
//                     <div className={`p-4 rounded-2xl bg-gradient-to-r ${features[activeFeature].color} text-white shadow-lg`}>
//                       {features[activeFeature].icon}
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-bold text-white">{features[activeFeature].title}</h3>
//                       <p className="text-purple-400 font-semibold">{features[activeFeature].stats}</p>
//                     </div>
//                   </div>

//                   {/* Description */}
//                   <p className="text-gray-300 text-lg leading-relaxed mb-6">
//                     {features[activeFeature].description}
//                   </p>

//                   {/* Technologies */}
//                   <div className="flex flex-wrap gap-2">
//                     {features[activeFeature].technologies.map((tech, index) => (
//                       <motion.span
//                         key={tech}
//                         initial={{ opacity: 0, scale: 0 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="px-4 py-2 bg-white/5 rounded-full text-white text-sm border border-white/10 backdrop-blur-sm"
//                       >
//                         {tech}
//                       </motion.span>
//                     ))}
//                   </div>

//                   {/* Progress Dots */}
//                   <div className="flex justify-center space-x-2 mt-6">
//                     {features.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={() => setActiveFeature(index)}
//                         className={`w-3 h-3 rounded-full transition-all ${
//                           index === activeFeature
//                             ? `bg-gradient-to-r ${features[activeFeature].color} w-8`
//                             : "bg-gray-600 hover:bg-gray-500"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </motion.div>

//             {/* Stats Grid */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-2 gap-4"
//             >
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center group hover:bg-white/10 transition-all duration-300"
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="text-purple-400 mb-2 flex justify-center">
//                     {stat.icon}
//                   </div>
//                   <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
//                   <div className="text-gray-400 text-sm">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Right Column - Detailed Info */}
//           <div className="space-y-8">
//             {/* Current Focus */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="p-8 rounded-3xl backdrop-blur-sm border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
//             >
//               <div className="flex items-center space-x-3 mb-6">
//                 <Rocket className="w-8 h-8 text-purple-400" />
//                 <h3 className="text-2xl font-bold text-white">Current Focus</h3>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
//                   <BookOpen className="w-6 h-6 text-green-400" />
//                   <div>
//                     <h4 className="text-white font-semibold">PwC CTDP 3.0 Training</h4>
//                     <p className="text-gray-400 text-sm">Advanced Salesforce & Consulting Skills</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center space-x-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
//                   <Code className="w-6 h-6 text-blue-400" />
//                   <div>
//                     <h4 className="text-white font-semibold">Full Stack Development</h4>
//                     <p className="text-gray-400 text-sm">React, Node.js & Modern Web Technologies</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center space-x-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
//                   <Target className="w-6 h-6 text-orange-400" />
//                   <div>
//                     <h4 className="text-white font-semibold">Competitive Programming</h4>
//                     <p className="text-gray-400 text-sm">DSA & Problem Solving Excellence</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Technical Passions */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="p-8 rounded-3xl backdrop-blur-sm border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
//             >
//               <div className="flex items-center space-x-3 mb-6">
//                 <Lightbulb className="w-8 h-8 text-cyan-400" />
//                 <h3 className="text-2xl font-bold text-white">Technical Passions</h3>
//               </div>
              
//               <div className="grid grid-cols-2 gap-4">
//                 {passions.map((passion, index) => (
//                   <motion.div
//                     key={index}
//                     className="flex items-center space-x-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
//                     whileHover={{ scale: 1.05 }}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     <div className="text-cyan-400">
//                       {passion.icon}
//                     </div>
//                     <span className="text-white text-sm font-medium">{passion.text}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Call to Action */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="text-center p-6 rounded-3xl backdrop-blur-sm border border-white/10 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
//             >
//               <h4 className="text-xl font-bold text-white mb-3">Ready to Innovate Together?</h4>
//               <p className="text-gray-300 mb-4">Let's build something extraordinary</p>
//               <motion.button
//                 className="group px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-semibold overflow-hidden relative"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span className="relative z-10 flex items-center">
//                   Start Conversation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </span>
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700"
//                   initial={{ x: "-100%" }}
//                   whileHover={{ x: 0 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.button>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;












import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Brain, 
  Database, 
  Globe, 
  Cpu,
  Cloud,
  Workflow,
  Users,
  Target,
  Zap,
  Sparkles,
  Rocket,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  Heart,
  Coffee,
  BookOpen,
  Shield,
  BarChart3,
  Award,
  Calendar,
  MapPin,
  UserCheck,
  Languages,
  Mic,
  Camera,
  GraduationCap,
  Briefcase
} from "lucide-react";

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Theme classes based on dark mode
  const themeClasses = darkMode 
    ? {
        bg: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
        text: 'text-white',
        card: 'bg-white/5 backdrop-blur-sm border-white/10',
        accent: 'from-purple-600 to-pink-600',
        gradient: 'from-purple-500/10 to-pink-500/10',
        textMuted: 'text-gray-300'
      }
    : {
        bg: 'bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100',
        text: 'text-gray-900',
        card: 'bg-white/80 backdrop-blur-sm border-gray-200',
        accent: 'from-blue-600 to-purple-600',
        gradient: 'from-blue-500/10 to-purple-500/10',
        textMuted: 'text-gray-600'
      };

  // Based on your CV
  const features = [
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Salesforce Development",
      description: "Expert in declarative development with Salesforce Flow, Object Management, and business process automation. Built functional recruiting apps with interactive dashboards.",
      technologies: ["Salesforce Flow", "Lightning", "Reports & Dashboards", "Object Management"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      stats: "PwC CTDP Certified",
      delay: 0
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Full Stack Development",
      description: "Building responsive web applications with modern React ecosystem. Created AI Resume Analyzer and Sorting Visualizer with cutting-edge technologies.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vite", "Zustand"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      stats: "10+ Projects Built",
      delay: 0.1
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Problem Solving",
      description: "Strong foundation in Data Structures & Algorithms with proficient C++ programming skills. Advanced to final rounds in national coding competitions.",
      technologies: ["C++", "DSA", "OOP", "System Design", "Algorithms"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      stats: "DSA Expert",
      delay: 0.2
    },
    {
      icon: <Workflow className="w-10 h-10" />,
      title: "Business Process Automation",
      description: "Specialized in no-code solutions and declarative development for efficient business workflows. Automated processes using Salesforce declarative tools.",
      technologies: ["Declarative Tools", "Process Automation", "Solution Design", "Business Analysis"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      stats: "No-Code Specialist",
      delay: 0.3
    }
  ];

  const stats = [
    { icon: <Target className="w-6 h-6" />, value: "8.11", label: "CGPA at KIIT" },
    { icon: <Zap className="w-6 h-6" />, value: "97", label: "Top Rank PwC CTDP" },
    { icon: <Users className="w-6 h-6" />, value: "800+", label: "Candidates Outperformed" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "1000+", label: "HackWithInfy Participants" }
  ];

  // Roles & Positions from your CV
  const roles = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Incoming Technology Consultant Intern",
      company: "PwC India",
      period: "July 2025 - Oct 2025",
      type: "CTDP 3.0 Program",
      achievements: [
        "Secured internship through competitive selection among 800+ candidates",
        "Completed intensive 8-module Salesforce training",
        "Specialized in declarative development and business process automation"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Core Team Member",
      company: "Kalakaar Society - Dramatics Club",
      period: "2023 - Present",
      type: "Studio-Production Team",
      achievements: [
        "Active member of KIIT's premier dramatics society",
        "Contributed to production and creative processes",
        "Developed teamwork and creative problem-solving skills"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Researcher",
      company: "Animal & Environment Welfare Society",
      period: "2023 - 2024",
      type: "AEWS KIIT",
      achievements: [
        "Contributed to environmental welfare research initiatives",
        "Participated in sustainability-focused projects",
        "Developed research and analytical skills"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Languages & Skills
  const languages = [
    { language: "Hindi", level: "Native", proficiency: "100%" },
    { language: "English", level: "Professional", proficiency: "90%" }
  ];

  const technicalSkills = [
    { category: "Programming", skills: ["C++ (Proficient)", "JavaScript", "C", "SQL"] },
    { category: "Web Technologies", skills: ["React", "HTML", "CSS", "Tailwind CSS"] },
    { category: "Tools & Platforms", skills: ["Salesforce", "Git", "Vite", "Puter.js"] },
    { category: "Concepts", skills: ["DSA", "OOP", "DBMS", "Operating Systems"] }
  ];

  return (
    <section id="about" className={`relative py-20 overflow-hidden ${themeClasses.bg} ${themeClasses.text} transition-colors duration-500`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r ${darkMode ? 'from-purple-500/10 to-pink-500/10' : 'from-blue-500/10 to-purple-500/10'}`}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className={`inline-flex items-center px-6 py-3 rounded-full ${themeClasses.card} border mb-6`}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-400 font-mono text-sm">Behind The Code</span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            Crafting <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Digital Excellence</span>
          </h2>
          
          <motion.p
            className={`text-xl ${themeClasses.textMuted} max-w-4xl mx-auto leading-relaxed`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            A passionate <span className="text-purple-400 font-semibold">Computer Science Engineering student</span> at KIIT University 
            with a strong foundation in full-stack development, Salesforce technologies, and competitive programming. 
            Currently shaping the future of business technology through innovative solutions and leadership roles.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
          {/* Left Column - Animated Features & Stats */}
          <div className="xl:col-span-2 space-y-8">
            {/* Animated Feature Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`p-8 rounded-3xl backdrop-blur-sm border ${themeClasses.card} bg-gradient-to-br ${features[activeFeature].color}/10 relative overflow-hidden group`}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${features[activeFeature].color} text-white shadow-lg`}>
                      {features[activeFeature].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{features[activeFeature].title}</h3>
                      <p className="text-purple-400 font-semibold">{features[activeFeature].stats}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`${themeClasses.textMuted} text-lg leading-relaxed mb-6`}>
                    {features[activeFeature].description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {features[activeFeature].technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`px-4 py-2 ${themeClasses.card} rounded-full text-sm border backdrop-blur-sm`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Progress Dots */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveFeature(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === activeFeature
                            ? `bg-gradient-to-r ${features[activeFeature].color} w-8`
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-2xl ${themeClasses.card} border text-center group hover:bg-white/10 transition-all duration-300`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-purple-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className={`text-sm ${themeClasses.textMuted}`}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Roles & Positions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl backdrop-blur-sm border ${themeClasses.card}`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold">Roles & Positions</h3>
              </div>
              
              <div className="space-y-6">
                {roles.map((role, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-2xl ${themeClasses.card} border hover:border-purple-400/50 transition-all duration-300 group`}
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${role.color} text-white`}>
                        {role.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold group-hover:text-purple-300 transition-colors">
                          {role.title}
                        </h4>
                        <p className="text-purple-400 font-semibold">{role.company}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {role.period}
                          </div>
                          <div className="flex items-center">
                            <UserCheck className="w-4 h-4 mr-1" />
                            {role.type}
                          </div>
                        </div>
                        <ul className="mt-3 space-y-1">
                          {role.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-400">
                              <span className="text-purple-400 mr-2 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-8">
            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl backdrop-blur-sm border ${themeClasses.card} bg-gradient-to-br from-purple-500/10 to-pink-500/10`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Rocket className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold">Current Focus</h3>
              </div>
              
              <div className="space-y-4">
                <div className={`flex items-center space-x-3 p-4 rounded-2xl ${themeClasses.card} hover:bg-white/10 transition-all duration-300 group`}>
                  <BookOpen className="w-6 h-6 text-green-400" />
                  <div>
                    <h4 className="font-semibold">PwC CTDP 3.0 Training</h4>
                    <p className={`text-sm ${themeClasses.textMuted}`}>Advanced Salesforce & Consulting Skills</p>
                  </div>
                </div>
                
                <div className={`flex items-center space-x-3 p-4 rounded-2xl ${themeClasses.card} hover:bg-white/10 transition-all duration-300 group`}>
                  <Code className="w-6 h-6 text-blue-400" />
                  <div>
                    <h4 className="font-semibold">Full Stack Development</h4>
                    <p className={`text-sm ${themeClasses.textMuted}`}>React, Node.js & Modern Web Technologies</p>
                  </div>
                </div>
                
                <div className={`flex items-center space-x-3 p-4 rounded-2xl ${themeClasses.card} hover:bg-white/10 transition-all duration-300 group`}>
                  <Target className="w-6 h-6 text-orange-400" />
                  <div>
                    <h4 className="font-semibold">Competitive Programming</h4>
                    <p className={`text-sm ${themeClasses.textMuted}`}>DSA & Problem Solving Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl backdrop-blur-sm border ${themeClasses.card}`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Languages className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold">Languages</h3>
              </div>
              
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{lang.language}</span>
                      <span className={`text-sm ${themeClasses.textMuted}`}>{lang.level}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: lang.proficiency }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl backdrop-blur-sm border ${themeClasses.card}`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Cpu className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>
              
              <div className="space-y-4">
                {technicalSkills.map((skillGroup, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-purple-400 mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className={`px-3 py-1 ${themeClasses.card} rounded-full text-sm border backdrop-blur-sm`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
