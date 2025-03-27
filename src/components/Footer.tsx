import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com/realamanvats"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-vats-aa5a5a1b2/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/realamanvats"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:realamanvats@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} Aman Vats. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Built with React, Tailwind CSS & ❤
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;