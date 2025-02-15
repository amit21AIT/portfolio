import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 85 },
      { name: "Responsive Design", level: 80 },
      { name: "Tailwind", level: 70 },
      { name: "Next JS", level: 50 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Data Structures & Algorithms", level: 90 },

      { name: "Java", level: 80 },
      { name: "C++", level: 80 },
      { name: "Spring Boot", level: 70 },
      { name: "Node.js", level: 50 },

    ]
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MySQL", level: 60 },
      { name: "MongoDB", level: 60 },
      { name: "Google Cloud Platform", level: 50 },
      { name: "AWS", level: 50 },

    ]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gray-800/30">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 gradient-text">{category.title}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                  <motion.div 
                    className="w-full h-2 bg-gray-700 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  >
                    <motion.div 
                      className="skill-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;