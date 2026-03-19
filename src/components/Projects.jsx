import React from 'react';

export default function Projects() {
  const projects = [
    {
      emoji: '🛒',
      title: 'E-Commerce Platform',
      desc: 'Plataforma de ventas en línea con carrito, pagos integrados y panel de administración en tiempo real.',
      tags: ['React', 'Node.js', 'MongoDB'],
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      emoji: '📊',
      title: 'Dashboard Analytics',
      desc: 'Sistema de análisis de datos con visualizaciones en tiempo real y reportes automatizados en la nube.',
      tags: ['Python', 'FastAPI', 'AWS'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      emoji: '🔐',
      title: 'Auth Microservice',
      desc: 'Servicio de autenticación escalable con OAuth2, roles y permisos para aplicaciones enterprise.',
      tags: ['Docker', 'JWT', 'PostgreSQL'],
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      emoji: '🤖',
      title: 'Asistente IA',
      desc: 'Chatbot inteligente con procesamiento de lenguaje natural entrenado para soporte al cliente.',
      tags: ['Python', 'ML', 'TensorFlow'],
      color: 'from-orange-500/20 to-red-500/20'
    },
    {
      emoji: '📱',
      title: 'App Móvil',
      desc: 'Aplicación multiplataforma de gestión de tareas con sincronización en tiempo real y notificaciones push.',
      tags: ['React Native', 'Firebase'],
      color: 'from-indigo-500/20 to-blue-500/20'
    },
    {
      emoji: '⚙️',
      title: 'Pipeline DevOps',
      desc: 'Flujo de integración y despliegue continuo automatizado para equipos de desarrollo ágil.',
      tags: ['GitHub Actions', 'CI/CD', 'K8s'],
      color: 'from-cyan-500/20 to-blue-500/20'
    }
  ];

  return (
    <section id="proyectos" className="px-16 py-20 relative z-10 bg-slate-950">
      <p className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-4">Trabajo</p>
      <h2 className="text-4xl font-black mb-3">Proyectos Destacados</h2>
      <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-16"></div>

      <div className="grid grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${project.color} border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/10`}
            style={{
              animation: `slideIn 0.6s ease ${idx * 0.08}s forwards`,
              opacity: 0
            }}
          >
            <div className={`bg-gradient-to-br ${project.color} h-24 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300`}>
              {project.emoji}
            </div>

            <div className="p-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-slate-800/50 border border-slate-700 rounded text-xs font-mono text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-bold text-slate-100">
                {project.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                {project.desc}
              </p>

              <a
                href="#"
                className="inline-flex items-center text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors group/link"
              >
                Ver proyecto
                <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>
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