// import React from 'react';
// import { motion } from 'framer-motion';
// import { Download, ArrowRight } from 'lucide-react';

// const Hero: React.FC = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//               Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Aman Kumar</span>
//             </h1>
//             <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
//               A passionate Computer Science student specializing in AI/ML and Web Development. 
//               Building innovative solutions that make a difference.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <a
//                 href="#contact"
//                 className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
//               >
//                 Hire Me
//                 <ArrowRight className="ml-2" size={20} />
//               </a>
//               <a
//                 href="https://drive.google.com/file/d/10hxT6JdkHH42vKNJzgG2dekGMwmMvoFo/view?usp=drivesdk"
//                 className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors"
//               >
//                 Download CV
//                 <Download className="ml-2" size={20} />
//               </a>
//             </div>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-indigo-600 dark:border-indigo-400">
//               <img
//                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
//                 alt="Aman "
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
//               <p className="text-lg font-semibold text-gray-900 dark:text-white">B.Tech Student</p>
//               <p className="text-indigo-600 dark:text-indigo-400">Computer Science</p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Linkedin, Github, Mail } from 'lucide-react';

const Hero = () => {
  const cvLink = "https://drive.google.com/file/d/10hxT6JdkHH42vKNJzgG2dekGMwmMvoFo/view";
  const kiitLogo = "https://i.postimg.cc/T1VmB5K5/OIP.jpg";
  const profileImage = "https://i.postimg.cc/44H8KkC3/Whats-App-Image-2025-01-30-at-00-26-44-0789774d.jpg";

  // Animated text component
  const AnimatedText = ({ text, className = "", delay = 0 }) => {
    return (
      <motion.span
        className={`inline-block ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: delay,
          duration: 0.5,
          type: "spring",
          stiffness: 100
        }}
      >
        {text}
      </motion.span>
    );
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-indigo-400 opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.p 
              className="text-indigo-400 font-mono mb-2 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <AnimatedText text="Hello there! 👋" delay={0.2} />
            </motion.p>
            
            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              <AnimatedText text="I'm " delay={0.3} className="mr-2" />
              <motion.span 
                className="text-indigo-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 10px rgba(99, 102, 241, 0.7)",
                }}
              >
                <AnimatedText text="Aman Kumar" delay={0.6} />
              </motion.span>
            </h1>
            
            {/* Subtitle */}
            <motion.h2
              className="text-2xl sm:text-3xl text-gray-300 mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <AnimatedText text="Web Developer & AI Enthusiast" delay={0.4} />
            </motion.h2>
            
            {/* Description */}
            <motion.p
              className="text-lg mb-8 max-w-lg mx-auto lg:mx-0 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <AnimatedText 
                text="Passionate about building responsive web applications with React and exploring AI technologies. Currently pursuing B.Tech in Computer Science at KIIT University." 
                delay={0.5}
              />
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white shadow-lg relative overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <span className="relative z-10">
                  Contact Me <ArrowRight className="ml-2 inline" size={20} />
                </span>
                <motion.span 
                  className="absolute inset-0 bg-indigo-700 rounded-lg z-0"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(99, 102, 241, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                href={cvLink}
                className="flex items-center px-6 py-3 rounded-lg border-2 border-indigo-400 text-indigo-400 hover:text-white relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="relative z-10">
                  Download CV <Download className="ml-2 inline" size={20} />
                </span>
                <motion.span 
                  className="absolute inset-0 bg-indigo-600 rounded-lg z-0"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              className="flex justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { icon: <Linkedin size={24} />, link: "https://www.linkedin.com/in/aman-vats-aa5a5a1b2/?originalSubdomain=in" },
                { icon: <Github size={24} />, link: "https://github.com/realamanvats" },
                { icon: <Mail size={24} />, link: "mailto:22052702@kiit.ac.in" }
              ].map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-400 relative"
                  whileHover={{ 
                    y: [0, -5, 0],
                    transition: { 
                      duration: 0.6,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  {item.icon}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D-like Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center relative"
          >
            <div className="relative">
              {/* 3D-like image container */}
              <motion.div
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white/20 relative z-10 bg-gray-700"
                whileHover={{ scale: 1.05 }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                  boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)'
                }}
                animate={{
                  rotateY: [0, 15, 0, -15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src={profileImage}
                  alt="Aman Kumar"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-indigo-900/30 opacity-50 z-0"
                animate={{
                  y: [0, -10, 0],
                  x: [0, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-indigo-800/30 opacity-50 z-0"
                animate={{
                  y: [0, 10, 0],
                  x: [0, 5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              {/* KIIT Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-700 flex items-center gap-2 z-20"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)"
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img src={kiitLogo} alt="KIIT" className="h-6" />
                <div>
                  <p className="text-sm font-semibold text-white">B.Tech CSE</p>
                  <p className="text-xs text-indigo-400">2026</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
