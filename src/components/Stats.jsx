import React from 'react';

export default function Stats() {
  const stats = [
    { num: '3+', label: 'Años de experiencia' },
    { num: '12+', label: 'Proyectos completados' },
    { num: '8c+', label: 'Tecnologías' },
    { num: '100%', label: 'Comprometido' }
  ];

  return (
    <div className="grid grid-cols-4 gap-6 px-16 py-20 relative z-10">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-linear-to-br from-slate-800/50 to-slate-900/30 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
          style={{
            animation: `slideIn 0.6s ease ${idx * 0.1}s forwards`,
            opacity: 0
          }}
        >
          <div className="text-4xl font-black text-transparent bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text mb-3">
            {stat.num}
          </div>
          <div className="text-slate-400 text-sm font-medium tracking-wide">
            {stat.label}
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