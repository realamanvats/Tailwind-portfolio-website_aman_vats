// import React, { useState, useEffect } from 'react';
// import { Menu, X, Moon, Sun } from 'lucide-react';

// interface NavbarProps {
//   darkMode: boolean;
//   toggleDarkMode: () => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Education', 'Contact'];

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Aman Portfolio</span>
//           </div>
          
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link}
//                   href={`#${link.toLowerCase()}`}
//                   className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
//                 >
//                   {link}
//                 </a>
//               ))}
//               <button
//                 onClick={toggleDarkMode}
//                 className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
//               >
//                 {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//               </button>
//             </div>
//           </div>

//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleDarkMode}
//               className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mr-2"
//             >
//               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 dark:text-gray-300"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
//           {navLinks.map((link) => (
//             <a
//               key={link}
//               href={`#${link.toLowerCase()}`}
//               className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               {link}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Experience', 'Projects', 'Skills', 'Achievements', 'Education', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Aman Kumar
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/5"
                >
                  {link}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white mr-2 transition-all duration-200"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-slate-900/95 backdrop-blur-sm border-b border-white/10`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
