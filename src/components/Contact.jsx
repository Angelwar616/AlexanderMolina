import React from 'react';

export default function Contact() {
  const contacts = [
    { icon: '✉️', label: 'Email', href: 'mailto:bel.m616@gmail.com' },
    { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexander-aaron-molina-serrano-b70a07207/' },
    { icon: '🐙', label: 'GitHub', href: 'https://github.com' },
    { icon: '📄', label: 'Descargar CV', href: 'https://github.com/Angelwar616' }
  ];

  return (
    <section id="contacto" className="px-16 py-20 relative z-10">
      <p className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4">
        ¿Trabajamos juntos?
      </p>
      <h2 className="text-4xl font-black mb-6">
        Hablemos
      </h2>
      <p className="text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed">
        Estoy abierto a oportunidades freelance, colaboraciones y proyectos desafiantes. ¡No dudes en contactarme!
      </p>

      <div className="flex flex-wrap gap-4">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            className="group flex items-center gap-3 px-6 py-3 bg-slate-900/40 border border-slate-700/50 rounded-full hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <span className="text-xl group-hover:scale-110 transition-transform duration-300">
              {contact.icon}
            </span>
            <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors">
              {contact.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}