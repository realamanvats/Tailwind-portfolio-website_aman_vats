import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react';

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
      const sections = ['home', 'journey', 'experience', 'projects', 'skills', 'achievements', 'education', 'contact'];
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
    { name: 'Home', id: 'home', icon: <Sparkles size={16} /> },
    { name: 'Journey', id: 'journey', icon: <Sparkles size={16} /> },
    { name: 'Experience', id: 'experience', icon: <Sparkles size={16} /> },
    { name: 'Projects', id: 'projects', icon: <Sparkles size={16} /> },
    { name: 'Skills', id: 'skills', icon: <Sparkles size={16} /> },
    { name: 'Achievements', id: 'achievements', icon: <Sparkles size={16} /> },
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-xl shadow-2xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Aman Kumar
            </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-white bg-gradient-to-r from-purple-600/50 to-pink-600/50'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
                    <span className="mr-2">{link.icon}</span>
                    {link.name}
                  </span>
                  {activeSection === link.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
              
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white mr-2 transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-white bg-gradient-to-r from-purple-600/50 to-pink-600/50'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 5 }}
            >
              <span className="flex items-center">
                <span className="mr-2">{link.icon}</span>
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
