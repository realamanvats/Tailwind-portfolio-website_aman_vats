import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Developed a responsive single-page portfolio using React.js and Tailwind CSS. Implemented UI/UX principles for an engaging user experience with optimized performance through code splitting and lazy loading.",
      technologies: ["React.js", "Tailwind CSS", "Vercel", "CI/CD"],
      link: "https://github.com/realamanvats/Tailwind-portfolio-website_aman_vats",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      imageCredit: "Photo by Glenn Carstens-Peters on Unsplash"
    },
    {
      title: "Facial Recognition Attendance System",
      description: "Developed frontend UI for facial recognition attendance system. Trained facial recognition module using computer vision techniques for efficient attendance management.",
      technologies: ["Computer Vision", "Python", "React.js", "Machine Learning"],
      link: "https://github.com/realamanvats/Face-Attendance",
      image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
      imageCredit: "Photo by Andy Kelly on Unsplash"
    },
    {
      title: "E-Commerce Analytics Dashboard",
      description: "Built a comprehensive analytics dashboard that tracks e-commerce metrics with 85% faster data visualization compared to traditional methods. Integrated with multiple APIs for real-time data.",
      technologies: ["React.js", "D3.js", "REST API", "Firebase"],
      link: "https://github.com/realamanvats/ealamanvats-E-commerce-Website-with-Categories-and-Payment",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imageCredit: "Photo by Farzad Nazifi on Unsplash"
    },
    {
      title: "AI-Powered Resume Builder",
      description: "Developed an intelligent resume builder that suggests content improvements and formatting based on job descriptions using NLP. Achieved 30% better ATS compatibility in user tests.",
      technologies: ["Python", "NLP", "React.js", "Machine Learning"],
      link: "https://github.com/realamanvats/private",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imageCredit: "Photo by Clément Hélardot on Unsplash"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 10000); // Auto-slide every 10 seconds
      return () => clearInterval(timer);
    }
  }, [currentIndex, isPaused, projects.length]);

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
                    <p className="text-gray-300 text-sm mb-2">
                      {projects[currentIndex].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {projects[currentIndex].technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-indigo-600/80 text-white px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <a
                        href={projects[currentIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white hover:text-indigo-400 transition"
                      >
                        View Project <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                      <span className="text-xs text-gray-300/80">
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
