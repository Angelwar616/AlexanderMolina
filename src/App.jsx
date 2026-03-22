import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, useTheme } from './ThemeProvider.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Headers from './components/headers.jsx';
import RestPage from './pages/RestPage.jsx';

function AppContent() {
  const [scrollY, setScrollY] = useState(0);
  const { isDark } = useTheme();
  const location = useLocation(); // ← AGREGADO

  // ← AGREGADO: Determina si mostrar navbar
  const isProjectPage = location.pathname.startsWith('/project/');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${isDark ? 'bg-slate-950 text-slate-100' : 'bg-gradient-to-b from-white to-blue-50 text-slate-900'} overflow-x-hidden transition-colors duration-500`}>
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
        {/* ← AGREGADO: Mostrar navbar solo si NO es página de proyecto */}
        {!isProjectPage && <Headers scrollY={scrollY} />}
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Stats />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/project/:projectId" element={<RestPage />} />
        </Routes>
        
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
}