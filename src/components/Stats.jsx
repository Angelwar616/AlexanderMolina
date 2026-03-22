import React from 'react';
import { useTheme } from '../ThemeProvider.jsx';
import { t } from '../translations.js';

export default function Stats() {
  const { isDark, language } = useTheme();

  const stats = [
    { num: '3+', labelKey: 'stats.experiencia' },
    { num: '12+', labelKey: 'stats.proyectos' },
    { num: '8+', labelKey: 'stats.tecnologias' },
    { num: '100%', labelKey: 'stats.comprometido' }
  ];

  return (
    <div className={`grid grid-cols-4 gap-6 px-16 py-20 relative z-10 ${isDark ? 'bg-slate-950' : 'bg-gradient-to-b from-white to-blue-50'}`}>
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`rounded-xl p-8 transition-all duration-300 group ${
            isDark
              ? 'bg-linear-to-br from-slate-800/50 to-slate-900/30 border border-slate-700/50 hover:border-cyan-500/30 hover:shadow-cyan-500/10'
              : 'bg-linear-to-br from-blue-200/70 to-blue-100/60 border border-blue-400/70 hover:border-blue-500 hover:shadow-blue-400/20'
          } hover:shadow-lg`}
          style={{
            animation: `slideIn 0.6s ease ${idx * 0.1}s forwards`,
            opacity: 0
          }}
        >
          <div className="text-4xl font-black text-transparent bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text mb-3">
            {stat.num}
          </div>
          <div className={`text-sm font-medium tracking-wide ${isDark ? 'text-slate-400' : 'text-blue-800'}`}>
            {t(stat.labelKey, language)}
          </div>
        </div>
      ))}

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
    </div>
  );
}