import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Associate (SDE 2)",
    company: "Deutsche Bank",
    period: "March 2024 - Present",
    description: "Core member of Autobahn Platform Team, working on modern web applications."
  },
  {
    title: "Software Engineer Intern",
    company: "Cisco",
    period: "January 2021 - June 2021",
    description: "Developed customized show Command Line Interfaces (CLIs) within the Cisco IOS XR operating system specifically focused on the Quality of Service (QoS)resource pool management. Implemented automated scaling and optimization triggers based on resource thresholds to enhance the efficiency of ncs4k routers"
  },
  {
    title: "Software Engineer Intern",
    company: "Credit Suisse",
    period: "May 2020 - June 2020",
    description: "Implemented a housekeeping scheduler within an Orchestration tool using the Java, Springboot, and Apache Camel framework for automated and efficient maintenance tasks"
  },  {
    title: "Research Intern",
    company: "Indian Institute Of Science Bangalore",
    period: "May 2019 - June 2019",
    description: "RNa-Seq data Analysis of Oral Cancer Patients using STAR Aligner, Genome Analysis toolkit, samtools, IGV and C++, Python, and Perl achieved more than 85% accuracy"
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="timeline-dot" />
            <div className="card mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
              <h4 className="text-blue-400 mb-2">{exp.company}</h4>
              <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;