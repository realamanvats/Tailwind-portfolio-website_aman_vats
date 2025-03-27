// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code, Brain, Database, Globe } from 'lucide-react';

// const About: React.FC = () => {
//   const features = [
//     {
//       icon: <Code className="w-6 h-6" />,
//       title: "Full Stack Development",
//       description: "Experienced in building end-to-end web applications using modern technologies."
//     },
//     {
//       icon: <Brain className="w-6 h-6" />,
//       title: "AI/ML Enthusiast",
//       description: "Passionate about artificial intelligence and machine learning applications."
//     },
//     {
//       icon: <Database className="w-6 h-6" />,
//       title: "Data Structures",
//       description: "Strong foundation in algorithms and data structures."
//     },
//     {
//       icon: <Globe className="w-6 h-6" />,
//       title: "Problem Solver",
//       description: "Dedicated to creating efficient solutions for complex problems."
//     }
//   ];

//   return (
//     <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
//       <div className="section-container">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="section-title">About Me</h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
//            I am a dedicated engineering student specializing in Computer Science with a passion for technology.
// I have hands-on experience in programming and web development, building responsive applications,
// and managing databases. My recent project, a portfolio website, demonstrates my skills in React.js and
// Tailwind CSS. I thrive in collaborative environments and am always eager to learn.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <div className="text-indigo-600 dark:text-indigo-400 mb-4">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>

import React from "react";
import { motion } from "framer-motion";
import { Code, Brain, Database, Globe } from "lucide-react";

const features = [
  {
    icon: <Code className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />,
    title: "Full Stack Development",
    description:
      "Experienced in building end-to-end web applications using modern technologies.",
  },
  {
    icon: <Brain className="w-8 h-8 text-teal-500 dark:text-teal-400" />,
    title: "AI/ML Enthusiast",
    description:
      "Passionate about artificial intelligence and machine learning applications.",
  },
  {
    icon: <Database className="w-8 h-8 text-amber-500 dark:text-amber-400" />,
    title: "Data Structures",
    description: "Strong foundation in algorithms and data structures.",
  },
  {
    icon: <Globe className="w-8 h-8 text-pink-500 dark:text-pink-400" />,
    title: "Problem Solver",
    description: "Dedicated to creating efficient solutions for complex problems.",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          About Me
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          I am a dedicated engineering student specializing in Computer Science with a passion for technology.
          I have hands-on experience in programming and web development, building responsive applications,
          and managing databases. My recent project, a portfolio website, demonstrates my skills in React.js and
          Tailwind CSS. I thrive in collaborative environments and am always eager to learn.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all transform"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-opacity-10 dark:bg-opacity-20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;
