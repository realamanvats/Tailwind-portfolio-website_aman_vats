// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
// import { projects } from '../data';

// const Projects: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (!isPaused) {
//       const timer = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % projects.length);
//       }, 6000);
//       return () => clearInterval(timer);
//     }
//   }, [isPaused]);

//   const nextProject = () => {
//     setCurrentIndex((prev) => (prev + 1) % projects.length);
//   };

//   const prevProject = () => {
//     setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   return (
//     <section id="projects" className="py-20 bg-white dark:bg-gray-900">
//       <div className="section-container">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="section-title">Featured Projects</h2>
          
//           <div className="relative"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//           >
//             <div className="overflow-hidden rounded-xl shadow-2xl">
//               <div className="relative aspect-video">
//                 <img
//                   src={projects[currentIndex].image}
//                   alt={projects[currentIndex].title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
//                   <div className="p-8 text-white">
//                     <h3 className="text-2xl font-bold mb-2">{projects[currentIndex].title}</h3>
//                     <p className="text-gray-200 mb-4">{projects[currentIndex].description}</p>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {projects[currentIndex].techStack.map((tech) => (
//                         <span
//                           key={tech}
//                           className="px-3 py-1 bg-indigo-600/80 rounded-full text-sm"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                     <button className="inline-flex items-center text-white hover:text-indigo-400 transition-colors">
//                       View Project <ExternalLink className="ml-2 w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <button
//               onClick={prevProject}
//               className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//               onClick={nextProject}
//               className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>

//           <div className="flex justify-center mt-4 gap-2">
//             {projects.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-2 h-2 rounded-full transition-colors ${
//                   index === currentIndex
//                     ? 'bg-indigo-600 dark:bg-indigo-400'
//                     : 'bg-gray-300 dark:bg-gray-600'
//                 }`}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data";

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Featured Projects
          </h2>

          <div
            className="relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-[16/9] overflow-hidden"
                >
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end backdrop-blur-md">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-1">
                        {projects[currentIndex].title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        {projects[currentIndex].description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {projects[currentIndex].techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-indigo-600/80 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <button className="inline-flex items-center text-white hover:text-indigo-400 transition">
                        View Project <ExternalLink className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition hidden group-hover:flex"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition hidden group-hover:flex"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Auto-Play Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300/50 dark:bg-gray-700">
              <motion.div
                key={currentIndex}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                className="h-full bg-indigo-500 dark:bg-indigo-400"
              />
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex
                    ? "bg-indigo-600 dark:bg-indigo-400"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
