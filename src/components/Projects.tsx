import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Trade Settlement Optimization Dashboard",
    description: "Created a Trade Settlement dashboard using React, TypeScript, and Shadcn UI, integrating AI agents to streamline and optimize settlement workflows.",
    tech: ["React", "TypeScript", "Shadcn UI", "Amazon Bedrock", "Python", "Django"],

  },
  {
    title: "Food Tracker Application",
    description: "Developed a food tracker application using React for the frontend and Java SpringBoot for the backend, allowing users to track dietary goals and analyze eating habits.",
    tech: ["React", "Java", "Spring Boot", "MySQL"],

  },
  {
    title: "File Organizer",
    description: "Created a file organiser using Apache Camel which polls a particular directory provided by the user and all the files of same filetype(Images , videos, pdf etc.) are kept in the same folder which makes it easy for the user to find the required files of a particular type.",
    tech: [ "Java", "Spring Boot","Apache Camel"],
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Personal Projects
      </motion.h2>
      
      <div className="max-w-6xl mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 gradient-text flex items-center gap-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* <div className="flex space-x-4">
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;