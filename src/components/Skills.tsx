import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const Icon = LucideIcons[skill.icon as keyof typeof LucideIcons];
              
              return (
                <div
                  key={skill.name}
                  className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md"
                >
                  <div className="flex items-center mb-4">
                    {Icon && <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-indigo-600 dark:text-indigo-400">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-600">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600 dark:bg-indigo-400"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;