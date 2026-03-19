import React from 'react';

export default function Skills() {
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
    <section id="skills" className="px-16 py-20 relative z-10">
      <p className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4">Tecnologías</p>
      <h2 className="text-4xl font-black mb-3">Mi Stack Técnico</h2>
      <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-16"></div>

      <div className="grid grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-slate-900/40 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-cyan-500/5"
            style={{
              animation: `slideIn 0.6s ease ${idx * 0.08}s forwards`,
              opacity: 0
            }}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <h3 className="font-bold text-slate-100 mb-2">
              {skill.name}
            </h3>
            <p className="text-xs text-slate-500 font-mono tracking-wide">
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