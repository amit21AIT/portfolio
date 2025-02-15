import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-20 px-4 bg-gray-800/30">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Education & Achievements
      </motion.h2>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 gradient-text flex items-center gap-2">
            <Award className="text-blue-400" /> Education
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-white">Army Institute of Technology, Pune</h4>
              <p className="text-gray-400">Bachelor of Engineering - Computer Engineering</p>
              <p className="text-gray-400">2017 - 2021 (9.39/10 GCPA)</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white">Army Public School RK Puram, Secunderabad</h4>
              <p className="text-gray-400">Intermediate, Science</p>
              <p className="text-gray-400">2015 - 2016 (93.8%)</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 gradient-text flex items-center gap-2">
            <Trophy className="text-blue-400" /> Achievements
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li>• Won 3rd Prize in DTCC Global AI Powered Hackathon 2023</li>
            <li>• Among 362 students selected for Summer Research Fellowship Program by IAS</li>
            <li>• Awarded ZS Associates, Tata Merit, and PMSS Scholarships</li>
            <li>• Finalist in Deutsche Bank Investmant Banking Hackathon</li>
            <li>• Won several coding competitions across various colleges in Pune including COEP, DY Patil and PICT.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;