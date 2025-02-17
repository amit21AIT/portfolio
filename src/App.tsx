import React from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen px-2 md:px-6 mx-auto bg-gray-900">
      <CustomCursor />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
    </div>
  );
}

export default App;