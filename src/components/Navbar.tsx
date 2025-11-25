
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react';

// interface NavbarProps {
//   darkMode: boolean;
//   toggleDarkMode: () => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', id: 'home', icon: <Sparkles size={16} /> },
//     { name: 'Journey', id: 'journey', icon: <Sparkles size={16} /> },
//     { name: 'Experience', id: 'experience', icon: <Sparkles size={16} /> },
//     { name: 'Projects', id: 'projects', icon: <Sparkles size={16} /> },
//     { name: 'Skills', id: 'skills', icon: <Sparkles size={16} /> },
//     { name: 'Achievements', id: 'achievements', icon: <Sparkles size={16} /> },
//   ];

//   // Smooth scroll function
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsOpen(false); // Close mobile menu after click
//     }
//   };

//   return (
//     <motion.nav 
//       className={`fixed w-full z-50 transition-all duration-500 ${
//         isScrolled 
//           ? 'bg-slate-900/80 backdrop-blur-xl shadow-2xl border-b border-white/10' 
//           : 'bg-transparent'
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <motion.div 
//             className="flex-shrink-0"
//             whileHover={{ scale: 1.05 }}
//           >
//             <button 
//               onClick={() => scrollToSection('home')}
//               className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
//             >
//               Aman Kumar
//             </button>
//           </motion.div>
          
//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-1">
//               {navLinks.map((link) => (
//                 <motion.button
//                   key={link.id}
//                   onClick={() => scrollToSection(link.id)}
//                   className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
//                     activeSection === link.id
//                       ? 'text-white bg-gradient-to-r from-purple-600/50 to-pink-600/50'
//                       : 'text-gray-300 hover:text-white hover:bg-white/5'
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <span className="flex items-center">
//                     <span className="mr-2">{link.icon}</span>
//                     {link.name}
//                   </span>
//                   {activeSection === link.id && (
//                     <motion.div
//                       className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
//                       layoutId="activeSection"
//                       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                     />
//                   )}
//                 </motion.button>
//               ))}
              
//               {/* Theme Toggle */}
//               <motion.button
//                 onClick={toggleDarkMode}
//                 className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white transition-all duration-200"
//                 whileHover={{ scale: 1.1, rotate: 15 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//               </motion.button>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <motion.button
//               onClick={toggleDarkMode}
//               className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white mr-2 transition-all duration-200"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </motion.button>
//             <motion.button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-300 hover:text-white transition-colors"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <motion.div
//         className={`md:hidden transition-all duration-300 ${
//           isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//         } overflow-hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10`}
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           {navLinks.map((link) => (
//             <motion.button
//               key={link.id}
//               onClick={() => scrollToSection(link.id)}
//               className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
//                 activeSection === link.id
//                   ? 'text-white bg-gradient-to-r from-purple-600/50 to-pink-600/50'
//                   : 'text-gray-300 hover:text-white hover:bg-white/5'
//               }`}
//               whileHover={{ x: 5 }}
//             >
//               <span className="flex items-center">
//                 <span className="mr-2">{link.icon}</span>
//                 {link.name}
//               </span>
//             </motion.button>
//           ))}
//         </div>
//       </motion.div>
//     </motion.nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Sparkles, 
  Briefcase, 
  Trophy, 
  Code, 
  School,
  User,
  Rocket,
  Brain
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'journey', 'skills'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', icon: <User size={16} /> },
    { name: 'Journey', id: 'journey', icon: <Rocket size={16} /> },
    { name: 'Skills', id: 'skills', icon: <Brain size={16} /> },
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsOpen(false);
    }
  };

  // Set active tab in Journey section
  const setJourneyTab = (tabId) => {
    // This would need to be handled through a context or prop drilling
    // For now, we'll just scroll to journey section
    scrollToSection('journey');
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-xl shadow-2xl border-b border-purple-500/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with enhanced styling */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => scrollToSection('home')}
              className="group relative"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-300% animate-gradient">
                Aman Kumar
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </button>
          </motion.div>
          
          {/* Desktop Navigation with enhanced styling */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`group relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-white bg-gradient-to-r from-purple-600/80 to-pink-600/80 shadow-lg shadow-purple-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-2">
                    <motion.span
                      animate={activeSection === link.id ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {link.icon}
                    </motion.span>
                    <span>{link.name}</span>
                  </span>
                  
                  {/* Animated underline */}
                  {activeSection === link.id && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      layoutId="activeSectionUnderline"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    whileHover={{ opacity: 1 }}
                  />
                </motion.button>
              ))}
              
              {/* Enhanced Theme Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className="group relative p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-300 hover:text-white transition-all duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 180,
                  background: "linear-gradient(45deg, rgba(192, 132, 252, 0.2), rgba(236, 72, 153, 0.2))"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  animate={darkMode ? { rotate: 0 } : { rotate: 180 }}
                  transition={{ duration: 0.5 }}
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
                
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </div>
              </motion.button>
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleDarkMode}
              className="group relative p-2 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile menu */}
      <motion.div
        className={`md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/20 transition-all duration-500`}
      >
        <div className="px-4 py-3 space-y-2">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`group w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center space-x-3 ${
                activeSection === link.id
                  ? 'bg-gradient-to-r from-purple-600/80 to-pink-600/80 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <motion.span
                className={`p-2 rounded-lg ${
                  activeSection === link.id 
                    ? 'bg-white/20' 
                    : 'bg-purple-500/10'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {link.icon}
              </motion.span>
              <span className="font-medium">{link.name}</span>
              
              {activeSection === link.id && (
                <motion.div
                  className="ml-auto w-2 h-2 bg-pink-400 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                />
              )}
            </motion.button>
          ))}
          
          {/* Journey Sub-menu for Mobile */}
          <motion.div 
            className="pl-4 border-l-2 border-purple-500/30 ml-4 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs text-purple-400 font-semibold uppercase tracking-wider px-4 py-2">
              Journey Sections
            </p>
            {[
              { name: 'Experience', icon: <Briefcase size={14} /> },
              { name: 'Achievements', icon: <Trophy size={14} /> },
              { name: 'Projects', icon: <Code size={14} /> },
              { name: 'Education', icon: <School size={14} /> }
            ].map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => {
                  scrollToSection('journey');
                  // Here you would also set the active tab in the Journey section
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-300 flex items-center space-x-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 3 }}
              >
                {item.icon}
                <span>{item.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Floating particles for navbar */}
      {isScrolled && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: '50%',
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;






