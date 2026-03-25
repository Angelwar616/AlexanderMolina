import React from 'react';
import { useTheme } from '../ThemeProvider.jsx';
import { t } from '../translations.js';

export default function Skills() {
  const { isDark, language } = useTheme();

  const skills = [
    {
      icon: '⚛️',
      name: 'React / Next.js',
      desc: '// Frontend'
    },
    {
      icon: '🟢',
      name: 'Node.js / Express',
      desc: '// Backend & APIs REST'
    },
    {
      icon: '🐍',
      name: 'Python / Javascript',
      desc: '// Scripting & backend'
    },
    {
      icon: '🐳',
      name: 'Docker ',
      desc: '// containers'
    },
    {
      icon: '🗄️',
      name: 'Sql / Firebase',
      desc: '// Bases de datos'
    },
    {
      icon: '🔐',
      name: 'Ciberseguridad',
      desc: '// Auth & seguridad'
    },
  ];

  return (
    <section id="skills" className={`px-4 md:px-16 py-12 md:py-20 relative z-10 ${isDark ? 'bg-slate-950' : 'bg-gradient-to-b from-white to-blue-50'}`}>
      <p className={`font-mono text-xs tracking-widest uppercase mb-4 ${isDark ? 'text-cyan-500' : 'text-blue-700'}`}>
        {t('skills.subtitulo', language)}
      </p>
      <h2 className={`text-3xl md:text-4xl font-black mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
        {t('skills.titulo', language)}
      </h2>
      <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-12"></div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 transition-all duration-300 group cursor-pointer ${
              isDark
                ? 'bg-slate-900/40 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/50 hover:shadow-cyan-500/5'
                : 'bg-blue-200/70 border border-blue-400/70 hover:border-blue-500 hover:bg-blue-200 hover:shadow-blue-400/20'
            } hover:shadow-lg`}
            style={{
              animation: `slideIn 0.6s ease ${idx * 0.08}s forwards`,
              opacity: 0
            }}
          >
            <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <h3 className={`font-bold mb-2 text-sm md:text-base ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
              {skill.name}
            </h3>
            <p className={`text-xs font-mono tracking-wide ${isDark ? 'text-slate-500' : 'text-blue-700'}`}>
              {skill.desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}