import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Associate (SDE 2)",
    company: "Deutsche Bank",
    period: "March 2024 - Present",
    description:
      "Core member of Autobahn Platform Team, working on modern web applications.",
    icon: "assets/db-logo.png",
  },
  {
    title: "Software Engineer Intern",
    company: "Cisco",
    period: "January 2021 - June 2021",
    description:
      "Developed customized show Command Line Interfaces (CLIs) within the Cisco IOS XR operating system specifically focused on the Quality of Service (QoS)resource pool management. Implemented automated scaling and optimization triggers based on resource thresholds to enhance the efficiency of ncs4k routers",
    icon: "assets/cisco.png",
  },
  {
    title: "Software Engineer Intern",
    company: "Credit Suisse",
    period: "May 2020 - June 2020",
    description:
      "Implemented a housekeeping scheduler within an Orchestration tool using the Java, Springboot, and Apache Camel framework for automated and efficient maintenance tasks",

    icon: "assets/cs.webp",
  },
  {
    title: "Research Intern",
    company: "Indian Institute Of Science Bangalore",
    period: "May 2019 - June 2019",
    description:
      "RNa-Seq data Analysis of Oral Cancer Patients using STAR Aligner, Genome Analysis toolkit, samtools, IGV and C++, Python, and Perl achieved more than 85% accuracy",
    icon: "assets/iisc.jpg",
  },
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

      <div className=" w-full sm:w-[90%] md:w-[65%] lg:w-[60%] overflowx-scroll mx-auto flex flex-col justify-center align-center mx-auto">
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
            <div className="flex card flex-col md:flex-row mx-2 md:mx-4 justify-between gap-6">
              <div className="grow-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {exp.title}
                </h3>
                <h4 className="text-blue-400 mb-2">{exp.company}</h4>
                <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
              <div className="min-w-20 bg-white aspect-square h-20 grow-1 self-center  ">
                <img
                  src={exp.icon}
                  className="w-full aspect-square h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
