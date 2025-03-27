import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Aman Kumar</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A passionate Computer Science student specializing in AI/ML and Web Development. 
              Building innovative solutions that make a difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Hire Me
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="https://drive.google.com/file/d/10hxT6JdkHH42vKNJzgG2dekGMwmMvoFo/view?usp=drivesdk"
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors"
              >
                Download CV
                <Download className="ml-2" size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-indigo-600 dark:border-indigo-400">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                alt="Aman "
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">B.Tech Student</p>
              <p className="text-indigo-600 dark:text-indigo-400">Computer Science</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;