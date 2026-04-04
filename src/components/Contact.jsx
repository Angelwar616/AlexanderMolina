import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeProvider.jsx';
import { t } from '../translations.js';
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf, FaComments } from 'react-icons/fa';

export default function Contact() {
  const { isDark, language } = useTheme();
  const navigate = useNavigate();
  const [showBubble, setShowBubble] = useState(true);

  const contacts = [
    { icon: FaEnvelope, key: 'contact.email', href: 'mailto:bel.m616@gmail.com' },
    { icon: FaLinkedin, key: 'contact.linkedin', href: 'https://www.linkedin.com/in/alexander-aaron-molina-serrano-b70a07207/' },
    { icon: FaGithub, key: 'contact.github', href: 'https://github.com/Angelwar616' },
   // { icon: FaFilePdf, key: 'contact.cv', href: '/assets/CurriculumVitae-AlexanderMolinaSerrano.pdf', download: 'CurriculumVitae-AlexanderMolinaSerrano.pdf' }
  ];

  const handleContactFormClick = () => {
    navigate('/contact');
  };

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setShowBubble(!(rect.top < 200 && rect.bottom > 0));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 flex-wrap">
          {contacts.map((contact) => {
            const IconComponent = contact.icon;
            return (
              <a
                key={contact.key}
                href={contact.href}
                download={contact.download}
                target={contact.href.startsWith('mailto:') || contact.download ? undefined : '_blank'}
                rel={contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className={`group flex items-center gap-3 px-4 md:px-6 py-3 rounded-full transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-900/40 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/50 hover:shadow-cyan-500/10'
                    : 'bg-slate-100/40 border border-slate-300/50 hover:border-cyan-600/50 hover:bg-slate-200/50 hover:shadow-cyan-600/10'
                } hover:shadow-lg`}
              >
                <IconComponent className={`text-lg md:text-xl group-hover:scale-110 transition-transform duration-300 ${
                  isDark ? 'text-cyan-500' : 'text-blue-700'
                }`} />
                <span className={`text-xs md:text-sm font-medium transition-colors group-hover:text-cyan-400 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {t(contact.key, language)}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Burbuja flotante - Visible en todo el sitio excepto en contacto */}
      <div
        className={`fixed bottom-8 right-8 z-40 transition-all duration-500 ${
          showBubble ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
        }`}
      >
        <button
          onClick={handleContactFormClick}
          className={`group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110 ${
            isDark
              ? 'bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-cyan-500/50'
              : 'bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 shadow-blue-400/50'
          }`}
        >
          <FaComments className="text-white text-xl md:text-2xl" />
        </button>
      </div>
    </>
  );
}