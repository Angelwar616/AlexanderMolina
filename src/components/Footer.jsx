import React from 'react';
import { useTheme } from '../ThemeProvider.jsx';
import { t } from '../translations.js';

export default function Footer() {
  const { isDark, language } = useTheme();

  return (
    <footer className={`px-4 md:px-16 py-8 relative z-10 ${
      isDark 
        ? 'border-t border-slate-700/30' 
        : 'border-t border-slate-300/30 bg-slate-50'
    }`}>
      <div className={`flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm font-mono ${
        isDark ? 'text-slate-500' : 'text-slate-600'
      }`}>
        <span className="text-center md:text-left">
          {t('footer.derechos', language)} <span className="text-cyan-500">{t('footer.nombre', language)}</span> — {t('footer.cargo', language)}
        </span>
        <span className="text-center md:text-right">
          {t('footer.hecho', language)} <span className="text-cyan-500">🖤🤘</span> y mucho café
        </span>
      </div>
    </footer>
  );
}