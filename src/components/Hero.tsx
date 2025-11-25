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

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  ChevronRight
} from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('experience');

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

  // Education Data
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Kalinga Institute of Industrial Technology (KIIT University)",
      period: "2022-Present",
      score: "CGPA: 8.11",
      icon: <School className="w-5 h-5" />
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-500/10"
              style={{
                width: Math.random() * 120 + 30,
                height: Math.random() * 120 + 30,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, (Math.random() - 0.5) * 80],
                x: [0, (Math.random() - 0.5) * 80],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 8 + 8,
                repeat: Infinity,
                repeatType: "reverse",
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
              <motion.p 
                className="text-purple-400 font-mono mb-2 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <AnimatedText text="Hello there! 👋" delay={0.2} />
              </motion.p>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                <AnimatedText text="I'm " delay={0.3} className="mr-2" />
                <motion.span 
                  className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  <AnimatedText text="Aman Kumar" delay={0.6} />
                </motion.span>
              </h1>
              
              <motion.h2
                className="text-2xl sm:text-3xl text-gray-300 mb-6 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <AnimatedText text="Technology Consultant & Full Stack Developer" delay={0.4} />
              </motion.h2>
              
              <motion.p
                className="text-xl mb-8 max-w-lg mx-auto lg:mx-0 text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <AnimatedText 
                  text="Passionate about building innovative solutions with modern technologies. Specializing in Salesforce, React, and cloud technologies." 
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
                    boxShadow: "0 0 20px rgba(192, 132, 252, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="#experience"
                  className="flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl relative overflow-hidden group"
                >
                  <span className="relative z-10 font-semibold">
                    View My Work <ArrowRight className="ml-2 inline group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
                
                <motion.a
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(192, 132, 252, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  href={cvLink}
                  className="flex items-center px-8 py-4 rounded-2xl border-2 border-purple-400 text-purple-400 hover:text-white relative overflow-hidden group"
                >
                  <span className="relative z-10 font-semibold">
                    Download CV <Download className="ml-2 inline" size={20} />
                  </span>
                  <div className="absolute inset-0 bg-purple-600 rounded-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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
                    className="text-gray-300 hover:text-purple-400 relative p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      y: -5
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center relative"
            >
              <div className="relative">
                <motion.div
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10"
                  whileHover={{ scale: 1.02 }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <img
                    src={profileImage}
                    alt="Aman Kumar"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-3xl" />
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-purple-500/20 opacity-50 z-0 backdrop-blur-sm"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-pink-500/20 opacity-50 z-0 backdrop-blur-sm"
                  animate={{
                    y: [0, 20, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />

                {/* KIIT Badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-slate-800/80 p-4 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3 z-20 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(192, 132, 252, 0.5)"
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img src={kiitLogo} alt="KIIT" className="h-8 rounded-lg" />
                  <div>
                    <p className="text-sm font-semibold text-white">B.Tech CSE</p>
                    <p className="text-xs text-purple-400">2022-2026</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-purple-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Experience & Achievements Section */}
      <section id="experience" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Journey & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Milestones</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My professional journey and notable achievements in technology
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
              {[
                { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
                { id: 'achievements', label: 'Achievements', icon: <Trophy size={18} /> },
                { id: 'education', label: 'Education', icon: <School size={18} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Experience/Education */}
            <div className="space-y-6">
              {(activeTab === 'experience' ? experiences : education).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {item.title || item.degree}
                        </h3>
                        <p className="text-purple-400 font-semibold">
                          {item.company || item.institution}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                      {item.period}
                    </div>
                    {item.location && (
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                        {item.location}
                      </div>
                    )}
                    {item.score && (
                      <div className="flex items-center">
                        <Target className="w-4 h-4 mr-2 text-purple-400" />
                        {item.score}
                      </div>
                    )}
                  </div>

                  {item.achievements && (
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <ChevronRight className="w-4 h-4 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.technologies && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Right Column - Achievements */}
            <div className="space-y-6">
              {activeTab === 'achievements' && achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
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
                      <li key={i} className="flex items-start text-gray-300">
                        <Star className="w-4 h-4 text-pink-400 mr-2 mt-1 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Stats Card */}
              {activeTab === 'achievements' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <h3 className="text-xl font-bold text-white mb-4 text-center">Competitive Journey</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-3xl font-bold text-purple-400 mb-1">97</div>
                      <div className="text-sm text-gray-300">Top Rank</div>
                      <div className="text-xs text-gray-400">PwC CTDP 3.0</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <div className="text-3xl font-bold text-pink-400 mb-1">1K+</div>
                      <div className="text-sm text-gray-300">Candidates</div>
                      <div className="text-xs text-gray-400">HackWithInfy</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
