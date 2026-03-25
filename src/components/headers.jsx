import React, { useState } from 'react';
import { useTheme } from '../ThemeProvider.jsx';
import { t } from '../translations.js';

export default function Headers({ scrollY }) {
  const { isDark, toggleTheme, language, toggleLanguage } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0
        z-50
        px-4 md:px-16 py-5
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

      {/* NAVIGATION LINKS - Desktop */}
      <ul className="nav-links hidden md:flex gap-10 list-none">
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

      {/* BOTONES DE TEMA E IDIOMA - Desktop */}
      <div className="hidden md:flex gap-3 items-center">
        {/* Botón de Tema */}
        <button
          onClick={toggleTheme}
          className={`
            p-2 rounded-full transition-all duration-300 
            ${
              isDark 
                ? 'bg-slate-800/50 hover:bg-slate-700/50 text-yellow-400' 
                : 'bg-slate-200/50 hover:bg-slate-300/50 text-slate-800'
            }
            border ${isDark ? 'border-slate-700/50' : 'border-slate-300/50'} hover:scale-110
          `}
          title={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
        >
          {isDark ? '🌙' : '☀️'}
        </button>

        {/* Botón de Idioma */}
        <button
          onClick={toggleLanguage}
          className={`
            px-3 py-2 rounded-full transition-all duration-300 font-bold text-xs
            ${
              isDark 
                ? 'bg-cyan-900/30 hover:bg-cyan-800/50 text-cyan-400 border border-cyan-700/50' 
                : 'bg-cyan-200/50 hover:bg-cyan-300/50 text-cyan-900 border border-cyan-400/50'
            }
            hover:scale-110
          `}
          title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
          {language === 'es' ? 'EN' : 'ES'}
        </button>
      </div>

      {/* MENÚ HAMBURGUESA - Mobile */}
      <div className="md:hidden flex gap-2 items-center">
        {/* Botón de Tema */}
        <button
          onClick={toggleTheme}
          className={`
            p-2 rounded-full transition-all duration-300 
            ${
              isDark 
                ? 'bg-slate-800/50 hover:bg-slate-700/50 text-yellow-400' 
                : 'bg-slate-200/50 hover:bg-slate-300/50 text-slate-800'
            }
            border ${isDark ? 'border-slate-700/50' : 'border-slate-300/50'} hover:scale-110
          `}
        >
          {isDark ? '🌙' : '☀️'}
        </button>

        {/* Botón de Idioma */}
        <button
          onClick={toggleLanguage}
          className={`
            px-2 py-2 rounded-full transition-all duration-300 font-bold text-xs
            ${
              isDark 
                ? 'bg-cyan-900/30 hover:bg-cyan-800/50 text-cyan-400 border border-cyan-700/50' 
                : 'bg-cyan-200/50 hover:bg-cyan-300/50 text-cyan-900 border border-cyan-400/50'
            }
            hover:scale-110
          `}
        >
          {language === 'es' ? 'EN' : 'ES'}
        </button>

        {/* Botón Hamburguesa */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`
            p-2 rounded-lg transition-all duration-300
            ${
              isDark
                ? 'bg-slate-800/50 hover:bg-slate-700/50 text-slate-100'
                : 'bg-slate-200/50 hover:bg-slate-300/50 text-slate-900'
            }
          `}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* MENÚ MOBILE - Desplegable */}
      {isMenuOpen && (
        <div
          className={`
            absolute top-full left-0 right-0 mt-0
            md:hidden
            ${isDark ? 'bg-slate-900/95' : 'bg-white/95'}
            border-b ${isDark ? 'border-slate-700/30' : 'border-blue-200/30'}
            backdrop-blur-md
            animate-fadeIn
          `}
        >
          <ul className="flex flex-col gap-0 list-none px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className={`
                    block py-3 px-4 rounded-lg
                    text-sm font-mono
                    tracking-widest uppercase
                    transition-colors duration-300
                    ${isDark 
                      ? 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50' 
                      : 'text-slate-600 hover:text-cyan-600 hover:bg-blue-100/50'
                    }
                  `}
                >
                  {t(link.key, language)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
      `}</style>
    </nav>
  );
}