// import React from 'react';
// import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();
  
//   return (
//     <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex flex-col items-center">
//           <div className="flex space-x-6 mb-6">
//             <a
//               href="https://github.com/realamanvats"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
//             >
//               <Github className="w-6 h-6" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/aman-vats-aa5a5a1b2/?originalSubdomain=in"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
//             >
//               <Linkedin className="w-6 h-6" />
//             </a>
//             <a
//               href="https://x.com/realamanvats"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
//             >
//               <Twitter className="w-6 h-6" />
//             </a>
//             <a
//               href="mailto:realamanvats@gmail.com"
//               className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
//             >
//               <Mail className="w-6 h-6" />
//             </a>
//           </div>
          
//           <div className="text-center">
//             <p className="text-gray-600 dark:text-gray-400">
//               © {currentYear} Aman Vats. All rights reserved.
//             </p>
//             <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
//               Built with React, Tailwind CSS & ❤
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart, 
  Sparkles, 
  ArrowUp,
  Coffee,
  Code,
  Rocket
} from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/realamanvats",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/aman-vats-aa5a5a1b2",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/realamanvats",
      label: "Twitter",
      color: "hover:text-cyan-400"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:22052702@kiit.ac.in",
      label: "Email",
      color: "hover:text-red-400"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Journey", href: "#journey" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const themeClasses = darkMode 
    ? {
        bg: 'bg-gradient-to-t from-slate-900 via-purple-900/50 to-slate-900',
        card: 'bg-white/5 backdrop-blur-sm border-white/10',
        text: 'text-white',
        textMuted: 'text-gray-300',
        hover: 'hover:text-purple-400'
      }
    : {
        bg: 'bg-gradient-to-t from-gray-50 via-blue-50/50 to-gray-100',
        card: 'bg-white/80 backdrop-blur-sm border-gray-200',
        text: 'text-gray-900',
        textMuted: 'text-gray-600',
        hover: 'hover:text-purple-600'
      };

  return (
    <footer className={`relative overflow-hidden ${themeClasses.bg} transition-colors duration-500`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              darkMode 
                ? 'bg-gradient-to-r from-purple-500/5 to-pink-500/5' 
                : 'bg-gradient-to-r from-blue-500/5 to-purple-500/5'
            }`}
            style={{
              width: Math.random() * 80 + 20,
              height: Math.random() * 80 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 50],
              x: [0, (Math.random() - 0.5) * 50],
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <h3 className={`text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ${themeClasses.text}`}>
                Aman Kumar
              </h3>
            </div>
            <p className={`${themeClasses.textMuted} max-w-md leading-relaxed mb-6`}>
              Crafting digital experiences with code, creativity, and cutting-edge technology. 
              Let's build the future together.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-2xl ${themeClasses.card} border ${themeClasses.textMuted} ${social.color} transition-all duration-300 group`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className={`text-lg font-semibold mb-4 ${themeClasses.text}`}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className={`${themeClasses.textMuted} ${themeClasses.hover} transition-all duration-300 flex items-center space-x-2 group`}
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className={`text-lg font-semibold mb-4 ${themeClasses.text}`}>Get In Touch</h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:22052702@kiit.ac.in"
                className={`flex items-center space-x-3 ${themeClasses.textMuted} ${themeClasses.hover} transition-all duration-300 group`}
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4" />
                <span>22052702@kiit.ac.in</span>
              </motion.a>
              <motion.a
                href="mailto:realamanvats@gmail.com"
                className={`flex items-center space-x-3 ${themeClasses.textMuted} ${themeClasses.hover} transition-all duration-300 group`}
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4" />
                <span>realamanvats@gmail.com</span>
              </motion.a>
              <div className={`flex items-center space-x-3 ${themeClasses.textMuted}`}>
                <Code className="w-4 h-4" />
                <span>Based in Bhubaneswar, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t ${darkMode ? 'border-white/10' : 'border-gray-200'} pt-8`}>
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-center lg:text-left ${themeClasses.textMuted}`}
            >
              <p className="flex items-center space-x-2">
                <span>© {currentYear} Aman Kumar. All rights reserved.</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </p>
            </motion.div>

            {/* Built With Love */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center space-x-4 ${themeClasses.textMuted} text-sm`}
            >
              <div className="flex items-center space-x-2">
                <Coffee className="w-4 h-4" />
                <span>Fueled by coffee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Built with React & Tailwind</span>
              </div>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className={`p-3 rounded-2xl ${themeClasses.card} border ${themeClasses.textMuted} ${themeClasses.hover} transition-all duration-300 group`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className={`text-center mt-12 p-6 rounded-3xl ${themeClasses.card} border backdrop-blur-sm`}
        >
          <div className="flex items-center justify-center space-x-3 mb-3">
            <Rocket className="w-6 h-6 text-purple-400" />
            <h4 className={`text-lg font-semibold ${themeClasses.text}`}>Ready to Start a Project?</h4>
          </div>
          <p className={`${themeClasses.textMuted} mb-4`}>Let's create something amazing together</p>
          <motion.a
            href="mailto:22052702@kiit.ac.in"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4 mr-2" />
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
