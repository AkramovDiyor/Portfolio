import React, { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Particles from './components/effects/Particles';
import CursorGlow from './components/effects/CursorGlow';

function App() {
  useEffect(() => {
    // Плавный скролл для всех якорных ссылок
    const handleAnchorClick = (e) => {
      const targetId = e.target.closest('a')?.getAttribute('href');
      if (targetId?.startsWith('#') && targetId !== '#') {
        e.preventDefault();
        const element = document.querySelector(targetId);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <Particles />
      <CursorGlow />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Contact />
      </Layout>
    </>
  );
}

export default App;