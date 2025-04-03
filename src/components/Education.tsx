import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar",
      period: "2022 - 2026",
      details: "CGPA: 8.3"
    },
    {
      degree: "Higher Secondary Examination",
      institution: "St. Paul Sr Secondary School, Dhabouli, Bihar",
      period: "2022",
      details: "CBSE Board - Physics, Chemistry, Mathematics, Computer Science"
    }
  ];

  const certifications = [
    {
      name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      date: "December 2024"
    },
    {
      name: "Data Structures and Algorithms Course Completion",
      issuer: "PW Skills",
      date: "November 2023"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Education & Certifications
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.period}</p>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{edu.details}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Certifications</h3>
              </div>
              
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-2">{cert.issuer}</p>
                  <p className="text-gray-600 dark:text-gray-300">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
