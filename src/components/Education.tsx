// import React from 'react';
// import { motion } from 'framer-motion';
// import { GraduationCap, Award } from 'lucide-react';

// const Education: React.FC = () => {
//   const education = [
//     {
//       degree: "Bachelor of Technology in Computer Science",
//       institution: "Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar",
//       period: "2022 - 2026",
//       details: "CGPA: 8.3"
//     },
//     {
//       degree: "Higher Secondary Examination",
//       institution: "St. Paul Sr Secondary School, Dhabouli, Bihar",
//       period: "2022",
//       details: "CBSE Board - Physics, Chemistry, Mathematics, Computer Science"
//     }
//   ];

//   const certifications = [
//     {
//       name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
//       issuer: "Amazon Web Services (AWS)",
//       date: "December 2024"
//     },
//     {
//       name: "Data Structures and Algorithms Course Completion",
//       issuer: "PW Skills",
//       date: "November 2023"
//     }
//   ];

//   return (
//     <section id="education" className="py-20 bg-white dark:bg-gray-900">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
//             Education & Certifications
//           </h2>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <div className="space-y-8">
//               <div className="flex items-center mb-6">
//                 <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
//                 <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h3>
//               </div>
              
//               {education.map((edu, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
//                 >
//                   <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//                     {edu.degree}
//                   </h4>
//                   <p className="text-indigo-600 dark:text-indigo-400 mb-2">{edu.institution}</p>
//                   <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.period}</p>
//                   <p className="text-gray-600 dark:text-gray-300 font-medium">{edu.details}</p>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="space-y-8">
//               <div className="flex items-center mb-6">
//                 <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-2" />
//                 <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Certifications</h3>
//               </div>
              
//               {certifications.map((cert, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
//                 >
//                   <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
//                     {cert.name}
//                   </h4>
//                   <p className="text-indigo-600 dark:text-indigo-400 mb-2">{cert.issuer}</p>
//                   <p className="text-gray-600 dark:text-gray-300">{cert.date}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Education;







import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Sparkles, 
  Calendar,
  MapPin,
  Target,
  BookOpen,
  Rocket,
  Star,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Kalinga Institute of Industrial Technology (KIIT University)",
      period: "2022 - Present",
      location: "Bhubaneswar, India",
      details: "CGPA: 8.11",
      courses: ["Data Structures & Algorithms", "Database Management", "Operating Systems", "Object-Oriented Programming", "Computer Networks"],
      achievements: [
        "Active participant in technical clubs and societies",
        "Engaged in competitive programming and hackathons",
        "Developing strong foundation in software engineering"
      ],
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Higher Secondary Examination (12th Grade)",
      institution: "St. Paul Sr Secondary School",
      period: "2022",
      location: "Dhabouli, Bihar",
      details: "CBSE Board - Physics, Chemistry, Mathematics, Computer Science",
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"],
      achievements: [
        "Strong foundation in science and mathematics",
        "Developed problem-solving and analytical skills",
        "Built interest in computer science and programming"
      ],
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  const certifications = [
    {
      name: "HackerRank SQL (Intermediate) Certification",
      issuer: "HackerRank",
      date: "2025",
      skills: ["SQL", "Database Querying", "Intermediate Level"],
      status: "Verified",
      icon: <Award className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Web Development Course Completion",
      issuer: "PW Skills",
      date: "2024",
      skills: ["HTML", "CSS", "JavaScript", "React", "Full Stack"],
      status: "Completed",
      icon: <Target className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "PwC CTDP 3.0 Salesforce Training",
      issuer: "PwC India",
      date: "2025",
      skills: ["Salesforce Flow", "Business Process Automation", "Declarative Development"],
      status: "Advanced",
      icon: <Rocket className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const themeClasses = darkMode 
    ? {
        bg: 'bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900',
        text: 'text-white',
        card: 'bg-white/5 backdrop-blur-sm border-white/10',
        textMuted: 'text-gray-300',
        gradient: 'from-purple-500/10 to-pink-500/10'
      }
    : {
        bg: 'bg-gradient-to-br from-gray-50 via-blue-50/50 to-gray-100',
        text: 'text-gray-900',
        card: 'bg-white/80 backdrop-blur-sm border-gray-200',
        textMuted: 'text-gray-600',
        gradient: 'from-blue-500/10 to-purple-500/10'
      };

  return (
    <section id="education" className={`relative py-20 overflow-hidden ${themeClasses.bg} transition-colors duration-500`}>
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
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className={`inline-flex items-center px-6 py-3 rounded-full ${themeClasses.card} mb-6`}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-400 font-mono text-sm">Academic Journey</span>
          </motion.div>
          
          <h2 className={`text-5xl sm:text-6xl font-bold mb-6 ${themeClasses.text}`}>
            Education & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          
          <motion.p
            className={`text-xl ${themeClasses.textMuted} max-w-2xl mx-auto leading-relaxed`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Building a strong foundation through quality education and continuous learning. 
            Combining academic excellence with practical certifications.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Education Section */}
          <div className="xl:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl backdrop-blur-sm ${themeClasses.card} border`}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${themeClasses.text}`}>Education</h3>
                  <p className="text-purple-400">Academic background and achievements</p>
                </div>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-2xl ${themeClasses.card} border hover:border-purple-400/50 transition-all duration-300 group`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-xl font-bold group-hover:text-purple-300 transition-colors ${themeClasses.text}`}>
                          {edu.degree}
                        </h4>
                        <p className="text-purple-400 font-semibold mt-1">{edu.institution}</p>
                        
                        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                            {edu.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-green-400" />
                            {edu.location}
                          </div>
                          <div className="flex items-center">
                            <Target className="w-4 h-4 mr-2 text-orange-400" />
                            {edu.details}
                          </div>
                        </div>

                        {/* Key Courses */}
                        <div className="mt-4">
                          <h5 className={`text-sm font-semibold ${themeClasses.text} mb-2`}>Key Courses:</h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="mt-4">
                          <h5 className={`text-sm font-semibold ${themeClasses.text} mb-2`}>Achievements:</h5>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-400">
                                <Star className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl backdrop-blur-sm ${themeClasses.card} border`}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${themeClasses.text}`}>Certifications</h3>
                  <p className="text-green-400">Professional credentials and skills</p>
                </div>
              </div>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-2xl bg-gradient-to-br ${cert.color}/10 border border-white/10 hover:border-white/20 transition-all duration-300 group`}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-xl bg-gradient-to-r ${cert.color} text-white`}>
                          {cert.icon}
                        </div>
                        <div>
                          <h4 className={`font-bold ${themeClasses.text} group-hover:text-white transition-colors`}>
                            {cert.name}
                          </h4>
                          <p className="text-purple-400 text-sm">{cert.issuer}</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs border border-emerald-500/30">
                        {cert.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className={`p-6 rounded-3xl backdrop-blur-sm ${themeClasses.card} border text-center`}
            >
              <h4 className={`text-lg font-bold mb-4 ${themeClasses.text}`}>Academic Excellence</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">8.11</div>
                  <div className={`text-xs ${themeClasses.textMuted}`}>Current CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">2026</div>
                  <div className={`text-xs ${themeClasses.textMuted}`}>Expected Graduation</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
