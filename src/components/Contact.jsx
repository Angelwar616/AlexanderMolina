import React from 'react';
import { useTheme } from '../ThemeProvider.jsx';
import { t } from '../translations.js';

export default function Contact() {
  const { isDark, language } = useTheme();

  const contacts = [
    { icon: '✉️', key: 'contact.email', href: 'mailto:bel.m616@gmail.com' },
    { icon: '💼', key: 'contact.linkedin', href: 'https://www.linkedin.com/in/alexander-aaron-molina-serrano-b70a07207/' },
    { icon: '🐙', key: 'contact.github', href: 'https://github.com' },
    { icon: '📄', key: 'contact.cv', href: 'https://github.com/Angelwar616' }
  ];

  return (
    <section id="contacto" className={`px-4 md:px-16 py-12 md:py-20 relative z-10 ${isDark ? 'bg-slate-950' : 'bg-gradient-to-b from-white to-blue-50'}`}>
      <p className={`font-mono text-xs tracking-widest uppercase mb-4 ${isDark ? 'text-cyan-500' : 'text-blue-700'}`}>
        {t('contact.subtitulo', language)}
      </p>
      <h2 className={`text-3xl md:text-4xl font-black mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
        {t('contact.titulo', language)}
      </h2>
      <p className={`text-base md:text-lg max-w-2xl mb-8 md:mb-12 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        {t('contact.desc', language)}
      </p>

      <div className="flex flex-wrap gap-3 md:gap-4">
        {contacts.map((contact) => (
          <a
            key={contact.key}
            href={contact.href}
            className={`group flex items-center gap-3 px-4 md:px-6 py-3 rounded-full transition-all duration-300 ${
              isDark
                ? 'bg-slate-900/40 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/50 hover:shadow-cyan-500/10'
                : 'bg-slate-100/40 border border-slate-300/50 hover:border-cyan-600/50 hover:bg-slate-200/50 hover:shadow-cyan-600/10'
            } hover:shadow-lg`}
          >
            <span className="text-lg md:text-xl group-hover:scale-110 transition-transform duration-300">
              {contact.icon}
            </span>
            <span className={`text-xs md:text-sm font-medium transition-colors group-hover:text-cyan-400 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {t(contact.key, language)}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}