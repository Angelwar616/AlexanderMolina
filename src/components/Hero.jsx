import React from 'react';
import { useTheme } from '../ThemeProvider.jsx';
import { t } from '../translations.js';

export default function Hero() {
  const { isDark, language } = useTheme();

  return (
    <section className={`min-h-screen grid grid-cols-2 items-center px-16 pt-24 gap-16 relative z-10 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="pt-20 space-y-8">
        <div 
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 animate-fadeUp ${
            isDark
              ? 'bg-cyan-500/10 border border-cyan-500/30'
              : 'bg-cyan-200/30 border border-cyan-400/40'
          }`}
          style={{ animationDelay: '0s', animationFillMode: 'both' }}
        >
          <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? 'bg-cyan-500' : 'bg-cyan-600'}`}></div>
          <span className={`text-xs font-mono tracking-widest ${isDark ? 'text-cyan-500' : 'text-cyan-700'}`}>
            {t('hero.disponible', language)}
          </span>
        </div>

        <h1 
          className={`text-5xl font-black leading-tight animate-fadeUp ${isDark ? 'text-slate-100' : 'text-slate-900'}`}
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          {t('hero.saludo', language)}<br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {t('hero.nombre', language)}
          </span>
        </h1>

        <p 
          className={`text-lg max-w-lg leading-relaxed font-light animate-fadeUp ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          {t('hero.desc', language)}
        </p>

        <div 
          className="flex gap-4 flex-wrap animate-fadeUp"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          <a
            href="#proyectos"
            className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold rounded-lg text-sm overflow-hidden transition-all hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">{t('hero.verProyectos', language)}</span>
          </a>
          <a
            href="#contacto"
            className={`px-8 py-3 font-semibold rounded-lg text-sm transition-all ${
              isDark
                ? 'border border-cyan-500/40 text-cyan-500 hover:bg-cyan-500/10 hover:border-cyan-500'
                : 'border border-cyan-600/40 text-cyan-700 hover:bg-cyan-600/10 hover:border-cyan-600'
            }`}
          >
            {t('hero.contactame', language)}
          </a>
        </div>
      </div>

      <div 
        className="flex justify-center items-center animate-fadeIn"
        style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
      >
        <div className={`w-full max-w-md rounded-2xl shadow-2xl overflow-hidden ${
          isDark
            ? 'bg-slate-900 border border-cyan-500/25 shadow-cyan-500/10'
            : 'bg-slate-100 border border-cyan-400/25 shadow-slate-400/10'
        }`}>
          <div className={`px-4 py-3 flex items-center gap-2 ${isDark ? 'bg-slate-800 border-b border-slate-700' : 'bg-slate-200 border-b border-slate-300'}`}>
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className={`text-xs font-mono ml-2 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>dev@portfolio ~ profile.json</span>
          </div>

          <div className={`p-6 font-mono text-sm space-y-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            <div className={isDark ? 'text-slate-500' : 'text-slate-600'}>{t('hero.miPerfil', language)}</div>
            <div>
              <span className={isDark ? 'text-cyan-300' : 'text-cyan-700'}>{t('hero.nombre_label', language)}</span>
              <span>: </span>
              <span className={isDark ? 'text-green-400' : 'text-green-700'}>"Alexander Aaron Molina Serrano"</span>,
            </div>
            <div>
              <span className={isDark ? 'text-cyan-300' : 'text-cyan-700'}>{t('hero.rol_label', language)}</span>
              <span>: </span>
              <span className={isDark ? 'text-green-400' : 'text-green-700'}>"Ing. de Sistemas"</span>,
            </div>
            <div>
              <span className={isDark ? 'text-cyan-300' : 'text-cyan-700'}>{t('hero.experiencia_label', language)}</span>
              <span>: </span>
              <span className={isDark ? 'text-yellow-400' : 'text-yellow-600'}>3</span>,
            </div>
            <div>
              <span className={isDark ? 'text-cyan-300' : 'text-cyan-700'}>{t('hero.stack_label', language)}</span>: [
            </div>
            <div className="pl-6">
              <span className={isDark ? 'text-green-400' : 'text-green-700'}>"React"</span>,
              <span className={isDark ? 'text-green-400' : 'text-green-700'}> "Node.js"</span>,
            </div>
            <div className="pl-6">
              <span className={isDark ? 'text-green-400' : 'text-green-700'}>"Python"</span>,
              <span className={isDark ? 'text-green-400' : 'text-green-700'}> "C#"</span>
            </div>
            <div>],</div>
            <div>
              <span className={isDark ? 'text-cyan-300' : 'text-cyan-700'}>{t('hero.disponible_label', language)}</span>
              <span>: </span>
              <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>true</span>
            </div>
            <div className="mt-4">
              <span className={isDark ? 'text-blue-500' : 'text-blue-700'}>$</span>
              <span className={isDark ? 'text-white' : 'text-slate-900'}> {t('hero.contratame', language)}</span>
              <span className={`inline-block w-2 h-5 ml-1 animate-pulse ${isDark ? 'bg-cyan-400' : 'bg-cyan-500'}`}></span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}