import React from 'react';
import { useTheme } from '../ThemeProvider.jsx';
import { t } from '../translations.js';

export default function Headers({ scrollY }) {
  const { isDark, toggleTheme, language, toggleLanguage } = useTheme();

  const navLinks = [
    { key: 'navbar.sobreMi', href: '#sobre-mi' },
    { key: 'navbar.skills', href: '#skills' },
    { key: 'navbar.proyectos', href: '#proyectos' },
    { key: 'navbar.contacto', href: '#contacto' }
  ];

  const navbarBackground = `linear-gradient(
    to bottom, 
    rgba(5, 13, 26, ${0.95 + scrollY * 0.0001}), 
    transparent
  )`;

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0
        z-50
        px-16 py-5
        flex justify-between items-center
        transition-all duration-300
      `}
      style={{
        background: navbarBackground,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}
    >
      
      {/* LOGO */}
      <div className="logo font-mono text-sm font-bold tracking-wider">
        <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>./</span>
        <span className={isDark ? 'text-slate-100' : 'text-slate-900'}>portfolio</span>
        <span className="text-cyan-500">_</span>
      </div>

      {/* NAVIGATION LINKS */}
      <ul className="nav-links flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.key}>
            <a
              href={link.href}
              className={`
                text-xs font-mono
                tracking-widest uppercase
                transition-colors duration-300
                ${isDark 
                  ? 'text-slate-400 hover:text-cyan-500' 
                  : 'text-slate-600 hover:text-cyan-600'
                }
              `}
            >
              {t(link.key, language)}
            </a>
          </li>
        ))}
      </ul>

      {/* BOTONES DE TEMA E IDIOMA */}
      <div className="flex gap-3 items-center">
        {/* Botón de Tema */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all duration-300 ${
            isDark 
              ? 'bg-slate-800/50 hover:bg-slate-700/50 text-yellow-400' 
              : 'bg-slate-200/50 hover:bg-slate-300/50 text-slate-800'
          } border ${isDark ? 'border-slate-700/50' : 'border-slate-300/50'} hover:scale-110`}
        >
          {isDark ? '🌙' : '☀️'}
        </button>

        {/* Botón de Idioma */}
        <button
          onClick={toggleLanguage}
          className={`px-3 py-2 rounded-full transition-all duration-300 font-bold text-xs ${
            isDark 
              ? 'bg-cyan-900/30 hover:bg-cyan-800/50 text-cyan-400 border border-cyan-700/50' 
              : 'bg-cyan-200/50 hover:bg-cyan-300/50 text-cyan-900 border border-cyan-400/50'
          } hover:scale-110`}
        >
          {language === 'es' ? 'EN' : 'ES'}
        </button>
      </div>

    </nav>
  );
}