// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Code, Brain, Database, Globe } from 'lucide-react';

// // const About: React.FC = () => {
// //   const features = [
// //     {
// //       icon: <Code className="w-6 h-6" />,
// //       title: "Full Stack Development",
// //       description: "Experienced in building end-to-end web applications using modern technologies."
// //     },
// //     {
// //       icon: <Brain className="w-6 h-6" />,
// //       title: "AI/ML Enthusiast",
// //       description: "Passionate about artificial intelligence and machine learning applications."
// //     },
// //     {
// //       icon: <Database className="w-6 h-6" />,
// //       title: "Data Structures",
// //       description: "Strong foundation in algorithms and data structures."
// //     },
// //     {
// //       icon: <Globe className="w-6 h-6" />,
// //       title: "Problem Solver",
// //       description: "Dedicated to creating efficient solutions for complex problems."
// //     }
// //   ];

// //   return (
// //     <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
// //       <div className="section-container">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //         >
// //           <h2 className="section-title">About Me</h2>
// //           <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
// //            I am a dedicated engineering student specializing in Computer Science with a passion for technology.
// // I have hands-on experience in programming and web development, building responsive applications,
// // and managing databases. My recent project, a portfolio website, demonstrates my skills in React.js and
// // Tailwind CSS. I thrive in collaborative environments and am always eager to learn.
// //           </p>
          
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {features.map((feature, index) => (
// //               <div
// //                 key={index}
// //                 className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
// //               >
// //                 <div className="text-indigo-600 dark:text-indigo-400 mb-4">
// //                   {feature.icon}
// //                 </div>
// //                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
// //                   {feature.title}
// //                 </h3>
// //                 <p className="text-gray-600 dark:text-gray-300">
// //                   {feature.description}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>

// import React from "react";
// import { motion } from "framer-motion";
// import { Code, Brain, Database, Globe } from "lucide-react";

// const features = [
//   {
//     icon: <Code className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />,
//     title: "Full Stack Development",
//     description:
//       "Experienced in building end-to-end web applications using modern technologies.",
//   },
//   {
//     icon: <Brain className="w-8 h-8 text-teal-500 dark:text-teal-400" />,
//     title: "AI/ML Enthusiast",
//     description:
//       "Passionate about artificial intelligence and machine learning applications.",
//   },
//   {
//     icon: <Database className="w-8 h-8 text-amber-500 dark:text-amber-400" />,
//     title: "Data Structures",
//     description: "Strong foundation in algorithms and data structures.",
//   },
//   {
//     icon: <Globe className="w-8 h-8 text-pink-500 dark:text-pink-400" />,
//     title: "Problem Solver",
//     description: "Dedicated to creating efficient solutions for complex problems.",
//   },
// ];

// const About: React.FC = () => {
//   return (
//     <section id="about" className="py-20 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800">
//       <div className="max-w-5xl mx-auto px-6 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
//         >
//           About Me
//         </motion.h2>
        
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
//         >
//           I am a dedicated engineering student specializing in Computer Science with a passion for technology.
//           I have hands-on experience in programming and web development, building responsive applications,
//           and managing databases. My recent project, a portfolio website, demonstrates my skills in React.js and
//           Tailwind CSS. I thrive in collaborative environments and am always eager to learn.
//         </motion.p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05, rotate: 1 }}
//               transition={{ type: "spring", stiffness: 200, damping: 10 }}
//               className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all transform"
//             >
//               <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-opacity-10 dark:bg-opacity-20">
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
//                 {feature.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About;





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
  BarChart3
} from "lucide-react";

const About: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Based on your CV
  const features = [
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Salesforce Development",
      description: "Expert in declarative development with Salesforce Flow, Object Management, and business process automation",
      technologies: ["Salesforce Flow", "Lightning", "Reports & Dashboards"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      stats: "8+ Modules Completed",
      delay: 0
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Full Stack Development",
      description: "Building responsive web applications with modern React ecosystem and cutting-edge technologies",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      stats: "10+ Projects",
      delay: 0.1
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Problem Solving",
      description: "Strong foundation in Data Structures & Algorithms with proficient C++ programming skills",
      technologies: ["C++", "DSA", "OOP", "System Design"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      stats: "Proficient in C++",
      delay: 0.2
    },
    {
      icon: <Workflow className="w-10 h-10" />,
      title: "Business Process Automation",
      description: "Specialized in no-code solutions and declarative development for efficient business workflows",
      technologies: ["Declarative Tools", "Process Automation", "Solution Design"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      stats: "No-Code Expert",
      delay: 0.3
    }
  ];

  const stats = [
    { icon: <Target className="w-6 h-6" />, value: "8.11", label: "CGPA at KIIT" },
    { icon: <Zap className="w-6 h-6" />, value: "97", label: "Top Rank PwC CTDP" },
    { icon: <Users className="w-6 h-6" />, value: "800+", label: "Candidates Outperformed" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "1000+", label: "HackWithInfy Participants" }
  ];

  const passions = [
    { icon: <Brain className="w-6 h-6" />, text: "AI & Machine Learning" },
    { icon: <Globe className="w-6 h-6" />, text: "Web Technologies" },
    { icon: <Database className="w-6 h-6" />, text: "Cloud Computing" },
    { icon: <Shield className="w-6 h-6" />, text: "Cyber Security" }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10"
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
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-400 font-mono text-sm">Behind The Code</span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Crafting <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Digital Excellence</span>
          </h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            A passionate <span className="text-purple-400 font-semibold">Computer Science Engineering student</span> at KIIT University 
            with a strong foundation in full-stack development, Salesforce technologies, and competitive programming. 
            Currently shaping the future of business technology through innovative solutions.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Animated Features */}
          <div className="space-y-8">
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
                  className={`p-8 rounded-3xl backdrop-blur-sm border border-white/10 bg-gradient-to-br ${features[activeFeature].color}/10 relative overflow-hidden group`}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${features[activeFeature].color} text-white shadow-lg`}>
                      {features[activeFeature].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{features[activeFeature].title}</h3>
                      <p className="text-purple-400 font-semibold">{features[activeFeature].stats}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
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
                        className="px-4 py-2 bg-white/5 rounded-full text-white text-sm border border-white/10 backdrop-blur-sm"
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
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center group hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-purple-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Detailed Info */}
          <div className="space-y-8">
            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl backdrop-blur-sm border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Rocket className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Current Focus</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                  <BookOpen className="w-6 h-6 text-green-400" />
                  <div>
                    <h4 className="text-white font-semibold">PwC CTDP 3.0 Training</h4>
                    <p className="text-gray-400 text-sm">Advanced Salesforce & Consulting Skills</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                  <Code className="w-6 h-6 text-blue-400" />
                  <div>
                    <h4 className="text-white font-semibold">Full Stack Development</h4>
                    <p className="text-gray-400 text-sm">React, Node.js & Modern Web Technologies</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                  <Target className="w-6 h-6 text-orange-400" />
                  <div>
                    <h4 className="text-white font-semibold">Competitive Programming</h4>
                    <p className="text-gray-400 text-sm">DSA & Problem Solving Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Technical Passions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl backdrop-blur-sm border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Lightbulb className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Technical Passions</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {passions.map((passion, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-cyan-400">
                      {passion.icon}
                    </div>
                    <span className="text-white text-sm font-medium">{passion.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-3xl backdrop-blur-sm border border-white/10 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
            >
              <h4 className="text-xl font-bold text-white mb-3">Ready to Innovate Together?</h4>
              <p className="text-gray-300 mb-4">Let's build something extraordinary</p>
              <motion.button
                className="group px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-semibold overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  Start Conversation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
