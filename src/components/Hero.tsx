import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.outerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto min-h-screen grid grid-cols-1 md:grid-cols-[1fr_1.5fr] flex align-center items-center justify-center overflow-auto gap-8 px-10 m-6 py-20 mx-auto"
    >
      <div className="aspect-square md:justify-self-center min-w-40 max-w-[50%] place-self-center rounded-full overflow-hidden ring-4 ring-indigo-500 ring-offset-4">
        <img src="assets/profile.jpeg" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-4xl px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text gap-4  text-center md:text-start "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Amit Kumar Singh
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl text-center md:text-start text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          SDE 2 @ Deutsche Bank | Full Stack Developer
        </motion.h2>
        <motion.p
          className="text-lg text-center md:text-start text-gray-300 mb-6 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          A full-stack software engineer with 3.5+ years of experience, crafting
          high-performance applications at Deutsche Bank.
        </motion.p>
        <motion.p
          className="text-lg text-center md:text-start text-gray-300 mb-6 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          💡 I specialize in building pixel-perfect, responsive UIs with React,
          JavaScript, TypeScript, HTML and CSS — turning ideas into smooth,
          interactive experiences.
        </motion.p>
        <motion.p
          className="text-lg text-center md:text-start text-gray-300 mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          🛠️ On the backend, I work with Java, Spring Boot, C++, and SQL,
          ensuring seamless communication between the frontend and backend for
          scalable and efficient applications. Let's build something awesome
          together! ✨
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6  md:max-w-[45vw]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            className="px-4 py-1 text-center md:w-fit  text-sm bg-blue-500/20 text-blue-300 rounded-full"
            href="mailto:singhamit17363@gmail.com"
          >
            Mail
          </a>

          <a
            href="https://www.linkedin.com/in/amit-singh-5aa5a114b"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 text-center md:w-fit  text-sm bg-blue-500/20 text-blue-300 rounded-full"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/amit21AIT"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 text-center md:w-fit  text-sm bg-blue-500/20 text-blue-300 rounded-full"
          >
            Github
          </a>

          <a
            href="https://leetcode.com/u/_amit_singh21/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 text-center md:w-fit  text-sm bg-blue-500/20 text-blue-300 rounded-full"
          >
            Leetcode
          </a>
        </motion.div>
      </div>

      <motion.button
        onClick={handleScrollDown}
        className="scroll-indicator text-gray-400 hover:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <ChevronDown size={36} />
      </motion.button>
    </motion.section>
  );
};

export default Hero;
