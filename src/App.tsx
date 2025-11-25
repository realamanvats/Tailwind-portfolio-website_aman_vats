// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Education from './components/Education';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   const [darkMode, setDarkMode] = useState(() => {
//     const savedMode = localStorage.getItem('darkMode');
//     return savedMode ? JSON.parse(savedMode) : false;
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//     localStorage.setItem('darkMode', JSON.stringify(darkMode));
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
//       <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
//       <Hero />
//       <About />
//       <Projects />
//       <Skills />
//       <Education />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About darkMode={darkMode} /> {/* Add darkMode prop here */}
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
