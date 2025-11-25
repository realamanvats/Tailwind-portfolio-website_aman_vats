import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  Users, 
  Zap,
  Globe,
  Shield,
  BarChart3,
  Workflow
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming & Core Concepts",
      icon: <Code className="w-6 h-6" />,
      color: "blue",
      skills: [
        { name: "C++", level: "Proficient", description: "Strong in DSA and problem-solving" },
        { name: "JavaScript", level: "Intermediate", description: "Modern ES6+ features and async programming" },
        { name: "C", level: "Intermediate", description: "System programming fundamentals" },
        { name: "Data Structures & Algorithms", level: "Advanced", description: "Complex problem-solving expertise" },
        { name: "OOP & DBMS", level: "Intermediate", description: "Software design principles" }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      color: "green",
      skills: [
        { name: "React", level: "Intermediate", description: "Component-based development" },
        { name: "HTML/CSS", level: "Intermediate", description: "Semantic markup & modern styling" },
        { name: "Tailwind CSS", level: "Intermediate", description: "Utility-first CSS framework" },
        { name: "Vite", level: "Intermediate", description: "Modern build tooling" }
      ]
    },
    {
      title: "Salesforce & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      color: "purple",
      skills: [
        { name: "Salesforce Flow", level: "Intermediate", description: "No-code automation" },
        { name: "Object Management", level: "Intermediate", description: "Data model configuration" },
        { name: "Reports & Dashboards", level: "Intermediate", description: "Business intelligence" },
        { name: "Security Configuration", level: "Basic", description: "Access control setup" },
        { name: "Sales/Service Cloud", level: "Basic", description: "CRM platform fundamentals" }
      ]
    },
    {
      title: "Tools & Professional",
      icon: <Workflow className="w-6 h-6" />,
      color: "orange",
      skills: [
        { name: "SQL", level: "Intermediate", description: "Database querying & management" },
        { name: "Git/GitHub", level: "Intermediate", description: "Version control & collaboration" },
        { name: "Declarative Development", level: "Intermediate", description: "No-code solution design" },
        { name: "Problem Solving", level: "Advanced", description: "Analytical thinking approach" },
        { name: "Business Process Analysis", level: "Intermediate", description: "Workflow optimization" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-800',
        gradient: 'from-blue-500 to-blue-600',
        light: 'bg-blue-50 dark:bg-blue-900/20'
      },
      green: {
        bg: 'bg-green-500',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-200 dark:border-green-800',
        gradient: 'from-green-500 to-green-600',
        light: 'bg-green-50 dark:bg-green-900/20'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-800',
        gradient: 'from-purple-500 to-purple-600',
        light: 'bg-purple-50 dark:bg-purple-900/20'
      },
      orange: {
        bg: 'bg-orange-500',
        text: 'text-orange-600 dark:text-orange-400',
        border: 'border-orange-200 dark:border-orange-800',
        gradient: 'from-orange-500 to-orange-600',
        light: 'bg-orange-50 dark:bg-orange-900/20'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getLevelWidth = (level: string) => {
    const levels = {
      'Basic': 'w-1/4',
      'Intermediate': 'w-2/3',
      'Proficient': 'w-4/5',
      'Advanced': 'w-full'
    };
    return levels[level as keyof typeof levels] || 'w-1/2';
  };

  const getLevelColor = (level: string) => {
    const colors = {
      'Basic': 'bg-gray-300 dark:bg-gray-600',
      'Intermediate': 'bg-blue-400 dark:bg-blue-500',
      'Proficient': 'bg-green-400 dark:bg-green-500',
      'Advanced': 'bg-purple-400 dark:bg-purple-500'
    };
    return colors[level as keyof typeof colors] || 'bg-gray-300';
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-900/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="text-blue-600 dark:text-blue-400">Technologies</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            A blend of technical expertise and problem-solving abilities that I leverage to build innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const color = getColorClasses(category.color);
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 border-2 ${color.border} ${color.light} backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl ${color.bg} text-white mr-4`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <div className="w-12 h-1 mt-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {skill.description}
                          </p>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${color.text} bg-white dark:bg-gray-800 border ${color.border}`}>
                          {skill.level}
                        </span>
                      </div>
                      
                      {/* Skill Level Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)} transition-all duration-500 group-hover:shadow-lg group-hover:scale-105`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Always Learning, Always Growing
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm constantly exploring new technologies and methodologies to stay at the forefront of software development. 
            Currently diving deeper into Salesforce ecosystem and advanced React patterns.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
