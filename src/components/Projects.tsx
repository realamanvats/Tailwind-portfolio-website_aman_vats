

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ExternalLink, ChevronLeft, ChevronRight, Github, Eye, Code, Zap, Brain, FileText } from "lucide-react";

// const Projects: React.FC = () => {
//   const projects = [
//     {
//       title: "Web-Based Sorting Visualizer",
//       description: "Built an interactive educational tool that brings sorting algorithms to life through smooth animations. Perfect for students and developers to understand how different algorithms work in real-time.",
//       technologies: ["React", "JavaScript", "Vite", "Tailwind CSS", "Framer Motion", "React Router DOM"],
//       liveLink: "#", // Add your actual live link
//       githubLink: "#", // Add your actual GitHub link
//       image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
//       imageCredit: "Photo by Shahadat Rahman on Unsplash",
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
//       liveLink: "#", // Add your actual live link
//       githubLink: "#", // Add your actual GitHub link
//       image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       imageCredit: "Photo by Windows on Unsplash",
//       features: [
//         { icon: <Brain className="w-4 h-4" />, text: "AI-powered analysis" },
//         { icon: <FileText className="w-4 h-4" />, text: "ATS score calculation" },
//         { icon: <Code className="w-4 h-4" />, text: "Backend-less architecture" },
//         { icon: <Zap className="w-4 h-4" />, text: "Personalized feedback" }
//       ],
//       highlight: "Helps job seekers beat the ATS and land more interviews"
//     },
//     {
//       title: "Salesforce Recruiting App",
//       description: "Developed a functional recruiting application during PwC CTDP training, showcasing declarative development skills and business process automation without writing code.",
//       technologies: ["Salesforce Flow", "Lightning", "Object Management", "Reports & Dashboards"],
//       liveLink: "#",
//       githubLink: "#",
//       image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       imageCredit: "Photo by Campaign Creators on Unsplash",
//       features: [
//         { icon: <Zap className="w-4 h-4" />, text: "Record-Triggered Flows" },
//         { icon: <Code className="w-4 h-4" />, text: "Declarative development" },
//         { icon: <Eye className="w-4 h-4" />, text: "Interactive dashboards" },
//         { icon: <Brain className="w-4 h-4" />, text: "Business process automation" }
//       ],
//       highlight: "No-code solution that demonstrates real business value"
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [direction, setDirection] = useState(1);

//   useEffect(() => {
//     if (!isPaused) {
//       const timer = setInterval(() => {
//         setDirection(1);
//         setCurrentIndex((prev) => (prev + 1) % projects.length);
//       }, 8000);
//       return () => clearInterval(timer);
//     }
//   }, [currentIndex, isPaused, projects.length]);

//   const nextProject = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % projects.length);
//   };

//   const prevProject = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   return (
//     <section id="projects" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
//       <div className="max-w-6xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             Projects That <span className="text-blue-600 dark:text-blue-400">Solve Real Problems</span>
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
//             From educational tools to AI-powered solutions, I build projects that combine technical excellence with practical utility
//           </p>
//         </motion.div>

//         <div
//           className="relative group"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <div className="overflow-hidden rounded-2xl shadow-2xl h-[480px] border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
//             <AnimatePresence mode="wait" custom={direction}>
//               <motion.div
//                 key={currentIndex}
//                 custom={direction}
//                 initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
//                 animate={{ x: "0%", opacity: 1 }}
//                 exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 className="relative w-full h-full overflow-hidden"
//               >
//                 <img
//                   src={projects[currentIndex].image}
//                   alt={projects[currentIndex].title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-8">
//                   {/* Highlight Badge */}
//                   <div className="mb-3">
//                     <span className="inline-block px-3 py-1 bg-blue-500/90 text-white text-sm rounded-full font-medium">
//                       {projects[currentIndex].highlight}
//                     </span>
//                   </div>

//                   <div className="mb-4">
//                     <h3 className="text-3xl font-bold text-white mb-3">
//                       {projects[currentIndex].title}
//                     </h3>
//                     <p className="text-gray-200 text-lg mb-6 leading-relaxed">
//                       {projects[currentIndex].description}
//                     </p>
                    
//                     {/* Features Grid */}
//                     <div className="grid grid-cols-2 gap-3 mb-6">
//                       {projects[currentIndex].features.map((feature, index) => (
//                         <div key={index} className="flex items-center text-gray-200">
//                           <span className="mr-3 text-blue-400">
//                             {feature.icon}
//                           </span>
//                           <span className="text-base font-medium">{feature.text}</span>
//                         </div>
//                       ))}
//                     </div>
                    
//                     {/* Technologies */}
//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {projects[currentIndex].technologies.map((tech, index) => (
//                         <span 
//                           key={index}
//                           className="text-sm bg-blue-600/80 text-white px-4 py-2 rounded-full font-medium border border-blue-400/30"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Action Buttons */}
//                   <div className="flex justify-between items-center">
//                     <div className="flex gap-3">
//                       <a
//                         href={projects[currentIndex].githubLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center px-5 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all duration-300 hover:scale-105 border border-gray-600/50"
//                       >
//                         <Github className="mr-2 w-5 h-5" />
//                         Source Code
//                       </a>
//                       <a
//                         href={projects[currentIndex].liveLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all duration-300 hover:scale-105 border border-blue-400/50"
//                       >
//                         <Eye className="mr-2 w-5 h-5" />
//                         Live Demo
//                       </a>
//                     </div>
//                     <span className="text-sm text-gray-300/80">
//                       {projects[currentIndex].imageCredit}
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={prevProject}
//             className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-black/40 text-white hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100 shadow-2xl backdrop-blur-sm border border-white/20 hover:scale-110"
//             aria-label="Previous project"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button
//             onClick={nextProject}
//             className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-black/40 text-white hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100 shadow-2xl backdrop-blur-sm border border-white/20 hover:scale-110"
//             aria-label="Next project"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>

//           {/* Dots Navigation */}
//           <div className="flex justify-center mt-8 gap-3">
//             {projects.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   setDirection(index > currentIndex ? 1 : -1);
//                   setCurrentIndex(index);
//                 }}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === currentIndex
//                     ? "bg-blue-600 dark:bg-blue-400 w-8"
//                     : "bg-gray-400 dark:bg-gray-700 hover:bg-gray-500"
//                 }`}
//                 aria-label={`Go to project ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Project Counter */}
//         <div className="text-center mt-6">
//           <span className="text-gray-500 dark:text-gray-400 font-medium">
//             {currentIndex + 1} / {projects.length}
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;












import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Github, 
  Eye, 
  Code, 
  Zap, 
  Brain, 
  FileText,
  Sparkles,
  Rocket,
  Users,
  Workflow,
  ArrowRight,
  Play,
  BookOpen
} from "lucide-react";

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: "Web-Based Sorting Visualizer",
      description: "Built an interactive educational tool that brings sorting algorithms to life through smooth animations. Perfect for students and developers to understand how different algorithms work in real-time.",
      technologies: ["React", "JavaScript", "Vite", "Tailwind CSS", "Framer Motion", "React Router DOM"],
      liveLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      imageCredit: "Photo by Shahadat Rahman on Unsplash",
      features: [
        { icon: <Zap className="w-4 h-4" />, text: "Real-time algorithm visualization" },
        { icon: <Eye className="w-4 h-4" />, text: "Smooth, educational animations" },
        { icon: <Code className="w-4 h-4" />, text: "Multiple sorting algorithms" },
        { icon: <Brain className="w-4 h-4" />, text: "Interactive learning experience" }
      ],
      highlight: "Makes complex algorithms intuitive and visually engaging",
      category: "Educational Tool",
      status: "Completed"
    },
    {
      title: "AI Resume Analyzer",
      description: "Created an intelligent resume screening tool that provides ATS scores and personalized feedback. Leverages AI to help job seekers optimize their resumes for better visibility.",
      technologies: ["React", "JavaScript", "Vite", "Tailwind CSS", "Puter.js", "Zustand"],
      liveLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imageCredit: "Photo by Windows on Unsplash",
      features: [
        { icon: <Brain className="w-4 h-4" />, text: "AI-powered analysis" },
        { icon: <FileText className="w-4 h-4" />, text: "ATS score calculation" },
        { icon: <Code className="w-4 h-4" />, text: "Backend-less architecture" },
        { icon: <Zap className="w-4 h-4" />, text: "Personalized feedback" }
      ],
      highlight: "Helps job seekers beat the ATS and land more interviews",
      category: "AI Application",
      status: "Completed"
    },
    {
      title: "Salesforce Recruiting App",
      description: "Developed a functional recruiting application during PwC CTDP training, showcasing declarative development skills and business process automation without writing code.",
      technologies: ["Salesforce Flow", "Lightning", "Object Management", "Reports & Dashboards"],
      liveLink: "#",
      githubLink: "#",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imageCredit: "Photo by Campaign Creators on Unsplash",
      features: [
        { icon: <Zap className="w-4 h-4" />, text: "Record-Triggered Flows" },
        { icon: <Workflow className="w-4 h-4" />, text: "Declarative development" },
        { icon: <Eye className="w-4 h-4" />, text: "Interactive dashboards" },
        { icon: <Users className="w-4 h-4" />, text: "Business process automation" }
      ],
      highlight: "No-code solution that demonstrates real business value",
      category: "Business Application",
      status: "Completed"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [currentIndex, isPaused, projects.length]);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const themeClasses = darkMode 
    ? {
        bg: 'bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900',
        text: 'text-white',
        card: 'bg-white/5 backdrop-blur-sm border-white/10',
        textMuted: 'text-gray-300',
        gradient: 'from-purple-500/10 to-pink-500/10'
      }
    : {
        bg: 'bg-gradient-to-br from-gray-50 via-blue-50/50 to-gray-100',
        text: 'text-gray-900',
        card: 'bg-white/80 backdrop-blur-sm border-gray-200',
        textMuted: 'text-gray-600',
        gradient: 'from-blue-500/10 to-purple-500/10'
      };

  return (
    <section id="projects" className={`relative py-20 overflow-hidden ${themeClasses.bg} transition-colors duration-500`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              darkMode 
                ? 'bg-gradient-to-r from-purple-500/5 to-pink-500/5' 
                : 'bg-gradient-to-r from-blue-500/5 to-purple-500/5'
            }`}
            style={{
              width: Math.random() * 80 + 20,
              height: Math.random() * 80 + 20,
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
            className={`inline-flex items-center px-6 py-3 rounded-full ${themeClasses.card} mb-6`}
            whileHover={{ scale: 1.05 }}
          >
            <Rocket className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-400 font-mono text-sm">Featured Projects</span>
          </motion.div>
          
          <h2 className={`text-5xl sm:text-6xl font-bold mb-6 ${themeClasses.text}`}>
            Innovative <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Solutions</span>
          </h2>
          
          <motion.p
            className={`text-xl ${themeClasses.textMuted} max-w-2xl mx-auto leading-relaxed`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            From educational tools to AI-powered applications, I build projects that combine 
            technical excellence with real-world utility and beautiful design.
          </motion.p>
        </motion.div>

        {/* Main Project Carousel */}
        <div
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`overflow-hidden rounded-3xl shadow-2xl h-[520px] ${themeClasses.card} backdrop-blur-sm`}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative w-full h-full overflow-hidden"
              >
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col justify-end p-8">
                  
                  {/* Project Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        projects[currentIndex].category === "Educational Tool" 
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : projects[currentIndex].category === "AI Application"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      }`}>
                        {projects[currentIndex].category}
                      </span>
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30">
                        {projects[currentIndex].status}
                      </span>
                    </div>
                  </div>

                  {/* Highlight Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-4"
                  >
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/90 to-pink-600/90 text-white text-sm rounded-2xl font-medium backdrop-blur-sm">
                      <Sparkles className="w-4 h-4 mr-2" />
                      {projects[currentIndex].highlight}
                    </span>
                  </motion.div>

                  {/* Project Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-4xl font-bold text-white mb-4">
                      {projects[currentIndex].title}
                    </h3>
                    <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                      {projects[currentIndex].description}
                    </p>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {projects[currentIndex].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center text-gray-200 group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <span className="mr-3 text-purple-400 group-hover:scale-110 transition-transform">
                            {feature.icon}
                          </span>
                          <span className="text-base font-medium">{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[currentIndex].technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-4 py-2 bg-white/10 text-white rounded-2xl text-sm font-medium border border-white/20 backdrop-blur-sm"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-between items-center"
                  >
                    <div className="flex gap-3">
                      <motion.a
                        href={projects[currentIndex].githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all duration-300 border border-white/20 backdrop-blur-sm group"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="mr-2 w-5 h-5" />
                        Source Code
                        <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </motion.a>
                      <motion.a
                        href={projects[currentIndex].liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-2xl transition-all duration-300 shadow-lg shadow-purple-500/25 group"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="mr-2 w-5 h-5" />
                        Live Demo
                        <ExternalLink className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                      </motion.a>
                    </div>
                    <span className="text-sm text-gray-300/80">
                      {projects[currentIndex].imageCredit}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevProject}
            className={`absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-2xl ${themeClasses.card} text-white hover:bg-purple-600 transition-all opacity-0 group-hover:opacity-100 shadow-2xl backdrop-blur-sm border hover:scale-110`}
            aria-label="Previous project"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={nextProject}
            className={`absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-2xl ${themeClasses.card} text-white hover:bg-purple-600 transition-all opacity-0 group-hover:opacity-100 shadow-2xl backdrop-blur-sm border hover:scale-110`}
            aria-label="Next project"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-3">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-400 to-pink-400 w-8 shadow-lg shadow-purple-500/50"
                    : `${darkMode ? 'bg-gray-600' : 'bg-gray-400'} hover:bg-gray-500`
                }`}
                aria-label={`Go to project ${index + 1}`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        {/* Project Counter & Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className={`inline-flex items-center space-x-6 ${themeClasses.textMuted} text-sm`}>
            <span className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>{currentIndex + 1} / {projects.length} Projects</span>
            </span>
            <span className="flex items-center space-x-2">
              <Code className="w-4 h-4" />
              <span>Interactive Showcase</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
