import React, { useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from './ThemeProvider.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Headers from './components/headers.jsx';

function AppContent() {
  const [scrollY, setScrollY] = useState(0);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'} overflow-x-hidden transition-colors duration-500`}>
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />   
 
      <div className="relative z-10">
        <Headers scrollY={scrollY} />
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}