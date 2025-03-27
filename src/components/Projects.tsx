// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
// import { projects } from "../data";

// const Projects: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (!isPaused) {
//       const timer = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % projects.length);
//       }, 1000); // Auto-slide every 1 second
//       return () => clearInterval(timer);
//     }
//   }, [currentIndex, isPaused]);

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
//             <div className="overflow-hidden rounded-lg shadow-lg h-[220px]">
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
//                   <div className="absolute inset-0 bg-black/20 flex items-end p-3">
//                     <div className="text-white">
//                       <h3 className="text-lg font-semibold">
//                         {projects[currentIndex].title}
//                       </h3>
//                       <p className="text-gray-300 text-sm">
//                         {projects[currentIndex].description}
//                       </p>
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
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data";

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 10000); // Auto-slide every 10 seconds
      return () => clearInterval(timer);
    }
  }, [currentIndex, isPaused]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>

          <div
            className="relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden rounded-lg shadow-lg h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full overflow-hidden"
                >
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {projects[currentIndex].title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {projects[currentIndex].description}
                    </p>
                    <a
                      href={projects[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center text-white hover:text-indigo-400 transition"
                    >
                      View Project <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition hidden group-hover:flex"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition hidden group-hover:flex"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-3 gap-1">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    index === currentIndex
                      ? "bg-indigo-600 dark:bg-indigo-400"
                      : "bg-gray-400 dark:bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

