// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// const Projects: React.FC = () => {
//   const projects = [
//     {
//       title: "Personal Portfolio Website",
//       description: "Developed a responsive single-page portfolio using React.js and Tailwind CSS. Implemented UI/UX principles for an engaging user experience with optimized performance through code splitting and lazy loading.",
//       technologies: ["React.js", "Tailwind CSS", "Vercel", "CI/CD"],
//       link: "https://github.com/realamanvats/Tailwind-portfolio-website_aman_vats",
//       image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
//       imageCredit: "Photo by Glenn Carstens-Peters on Unsplash"
//     },
//     {
//       title: "Facial Recognition Attendance System",
//       description: "Developed frontend UI for facial recognition attendance system. Trained facial recognition module using computer vision techniques for efficient attendance management.",
//       technologies: ["Computer Vision", "Python", "React.js", "Machine Learning"],
//       link: "https://github.com/realamanvats/Face-Attendance",
//       image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
//       imageCredit: "Photo by Andy Kelly on Unsplash"
//     },
//     {
//       title: "E-Commerce Analytics Dashboard",
//       description: "Built a comprehensive analytics dashboard that tracks e-commerce metrics with 85% faster data visualization compared to traditional methods. Integrated with multiple APIs for real-time data.",
//       technologies: ["React.js", "D3.js", "REST API", "Firebase"],
//       link: "https://github.com/realamanvats/ealamanvats-E-commerce-Website-with-Categories-and-Payment",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       imageCredit: "Photo by Farzad Nazifi on Unsplash"
//     },
//     {
//       title: "AI-Powered Resume Builder",
//       description: "Developed an intelligent resume builder that suggests content improvements and formatting based on job descriptions using NLP. Achieved 30% better ATS compatibility in user tests.",
//       technologies: ["Python", "NLP", "React.js", "Machine Learning"],
//       link: "https://github.com/realamanvats/private",
//       image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//       imageCredit: "Photo by Clément Hélardot on Unsplash"
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (!isPaused) {
//       const timer = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % projects.length);
//       }, 10000); // Auto-slide every 10 seconds
//       return () => clearInterval(timer);
//     }
//   }, [currentIndex, isPaused, projects.length]);

//   const nextProject = () => {
//     setCurrentIndex((prev) => (prev + 1) % projects.length);
//   };

//   const prevProject = () => {
//     setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   return (
//     <section id="projects" className="py-12 bg-gray-100 dark:bg-gray-900">
//       <div className="max-w-3xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
//             Featured Projects
//           </h2>

//           <div
//             className="relative group"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//           >
//             <div className="overflow-hidden rounded-lg shadow-lg h-[280px]">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentIndex}
//                   initial={{ x: "100%", opacity: 0 }}
//                   animate={{ x: "0%", opacity: 1 }}
//                   exit={{ x: "-100%", opacity: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="relative w-full h-full overflow-hidden"
//                 >
//                   <img
//                     src={projects[currentIndex].image}
//                     alt={projects[currentIndex].title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
//                     <h3 className="text-lg font-semibold text-white">
//                       {projects[currentIndex].title}
//                     </h3>
//                     <p className="text-gray-300 text-sm mb-2">
//                       {projects[currentIndex].description}
//                     </p>
//                     <div className="flex flex-wrap gap-2 mb-3">
//                       {projects[currentIndex].technologies.map((tech, index) => (
//                         <span 
//                           key={index}
//                           className="text-xs bg-indigo-600/80 text-white px-2 py-1 rounded"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <a
//                         href={projects[currentIndex].link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center text-white hover:text-indigo-400 transition"
//                       >
//                         View Project <ExternalLink className="ml-2 w-4 h-4" />
//                       </a>
//                       <span className="text-xs text-gray-300/80">
//                         {projects[currentIndex].imageCredit}
//                       </span>
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* Navigation Buttons */}
//             <button
//               onClick={prevProject}
//               className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition hidden group-hover:flex"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={nextProject}
//               className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition hidden group-hover:flex"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>

//             {/* Dots Navigation */}
//             <div className="flex justify-center mt-3 gap-1">
//               {projects.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-2 h-2 rounded-full transition ${
//                     index === currentIndex
//                       ? "bg-indigo-600 dark:bg-indigo-400"
//                       : "bg-gray-400 dark:bg-gray-700"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, Github, Eye, Code, Zap, Brain, FileText } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Web-Based Sorting Visualizer",
      description: "Built an interactive educational tool that brings sorting algorithms to life through smooth animations. Perfect for students and developers to understand how different algorithms work in real-time.",
      technologies: ["React", "JavaScript", "Vite", "Tailwind CSS", "Framer Motion", "React Router DOM"],
      liveLink: "#", // Add your actual live link
      githubLink: "#", // Add your actual GitHub link
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      imageCredit: "Photo by Shahadat Rahman on Unsplash",
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
      liveLink: "#", // Add your actual live link
      githubLink: "#", // Add your actual GitHub link
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imageCredit: "Photo by Windows on Unsplash",
      features: [
        { icon: <Brain className="w-4 h-4" />, text: "AI-powered analysis" },
        { icon: <FileText className="w-4 h-4" />, text: "ATS score calculation" },
        { icon: <Code className="w-4 h-4" />, text: "Backend-less architecture" },
        { icon: <Zap className="w-4 h-4" />, text: "Personalized feedback" }
      ],
      highlight: "Helps job seekers beat the ATS and land more interviews"
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
        { icon: <Code className="w-4 h-4" />, text: "Declarative development" },
        { icon: <Eye className="w-4 h-4" />, text: "Interactive dashboards" },
        { icon: <Brain className="w-4 h-4" />, text: "Business process automation" }
      ],
      highlight: "No-code solution that demonstrates real business value"
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
      }, 8000);
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

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects That <span className="text-blue-600 dark:text-blue-400">Solve Real Problems</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            From educational tools to AI-powered solutions, I build projects that combine technical excellence with practical utility
          </p>
        </motion.div>

        <div
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl h-[480px] border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative w-full h-full overflow-hidden"
              >
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-8">
                  {/* Highlight Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-500/90 text-white text-sm rounded-full font-medium">
                      {projects[currentIndex].highlight}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {projects[currentIndex].title}
                    </h3>
                    <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                      {projects[currentIndex].description}
                    </p>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {projects[currentIndex].features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-200">
                          <span className="mr-3 text-blue-400">
                            {feature.icon}
                          </span>
                          <span className="text-base font-medium">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[currentIndex].technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-sm bg-blue-600/80 text-white px-4 py-2 rounded-full font-medium border border-blue-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <a
                        href={projects[currentIndex].githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-5 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all duration-300 hover:scale-105 border border-gray-600/50"
                      >
                        <Github className="mr-2 w-5 h-5" />
                        Source Code
                      </a>
                      <a
                        href={projects[currentIndex].liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all duration-300 hover:scale-105 border border-blue-400/50"
                      >
                        <Eye className="mr-2 w-5 h-5" />
                        Live Demo
                      </a>
                    </div>
                    <span className="text-sm text-gray-300/80">
                      {projects[currentIndex].imageCredit}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-black/40 text-white hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100 shadow-2xl backdrop-blur-sm border border-white/20 hover:scale-110"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-2xl bg-black/40 text-white hover:bg-blue-600 transition-all opacity-0 group-hover:opacity-100 shadow-2xl backdrop-blur-sm border border-white/20 hover:scale-110"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 dark:bg-blue-400 w-8"
                    : "bg-gray-400 dark:bg-gray-700 hover:bg-gray-500"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Project Counter */}
        <div className="text-center mt-6">
          <span className="text-gray-500 dark:text-gray-400 font-medium">
            {currentIndex + 1} / {projects.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
