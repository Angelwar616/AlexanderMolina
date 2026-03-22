import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeProvider.jsx';
import { t } from '../translations.js';

export default function Projects() {
  const { isDark, language } = useTheme();
  const navigate = useNavigate();

  const projects = [
    {
      id: 'monitoreo-vehicular',
      emoji: '🚗',
      titleKey: 'projects.monitoreoVehicular',
      descKey: 'projects.descMonitoreo',
      tags: ['Python', 'Firebase', 'Flutter'],
      color: 'from-blue-500/20 to-cyan-500/20',
      period: 'feb 2025 - jul 2025'
    },
    {
      id: 'sistema-venta-restaurante',
      emoji: '🍽️',
      titleKey: 'projects.sistemaPOS',
      descKey: 'projects.descSistemaPOS',
      tags: ['Laravel', 'MySQL', 'Node.js'],
      color: 'from-orange-500/20 to-red-500/20',
      period: 'jul 2025 - sep 2025'
    },
    {
      id: 'resplast',
      emoji: '♻️',
      titleKey: 'projects.resPlast',
      descKey: 'projects.descResPlast',
      tags: ['React', 'Node.js', 'IoT', 'Firebase'],
      color: 'from-green-500/20 to-emerald-500/20',
      period: 'Proyecto académico'
    },
    {
      id: 'sistema-inventarios',
      emoji: '📦',
      titleKey: 'projects.inventario',
      descKey: 'projects.descInventario',
      tags: ['C#', '.NET', 'SQL Server'],
      color: 'from-purple-500/20 to-pink-500/20',
      period: 'Proyecto académico'
    },
    {
      id: 'ciberseguridad',
      emoji: '🔒',
      titleKey: 'projects.seguridad',
      descKey: 'projects.descSeguridad',
      tags: ['Wireshark', 'Seguridad', 'Redes'],
      color: 'from-red-500/20 to-pink-500/20',
      period: 'feb 2023 - jun 2023'
    },
    {
      id: 'arquitectura-frontend',
      emoji: '⚡',
      titleKey: 'projects.arquitectura',
      descKey: 'projects.descArquitectura',
      tags: ['React', 'Atomic Design', 'Performance'],
      color: 'from-cyan-500/20 to-blue-500/20',
      period: 'oct 2026 - ene 2026'
    }
  ];

  // Función para manejar la navegación a detalle del proyecto
  const handleViewProject = (projectId) => {
    // Aquí puedes agregar lógica adicional si lo necesitas
    // Por ejemplo: analytics, validaciones, etc.
    console.log(`Navegando a proyecto: ${projectId}`);
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="proyectos" className={`px-16 py-20 relative z-10 ${isDark ? 'bg-slate-950' : 'bg-gradient-to-b from-white to-blue-50'}`}>
      <p className={`font-mono text-xs tracking-widest uppercase mb-4 ${isDark ? 'text-cyan-500' : 'text-blue-700'}`}>
        {t('projects.subtitulo', language)}
      </p>
      <h2 className={`text-4xl font-black mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
        {t('projects.titulo', language)}
      </h2>
      <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-16"></div>

      <div className="grid grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${project.color} rounded-xl overflow-hidden transition-all duration-300 group ${
              isDark
                ? 'border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-cyan-500/10'
                : 'border border-blue-300/50 hover:border-blue-400 hover:shadow-blue-400/15'
            } hover:shadow-lg`}
            style={{
              animation: `slideIn 0.6s ease ${idx * 0.08}s forwards`,
              opacity: 0
            }}
          >
            <div className={`bg-gradient-to-br ${project.color} h-24 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300`}>
              {project.emoji}
            </div>

            <div className={`p-6 space-y-4 ${isDark ? 'bg-slate-950/50' : 'bg-blue-100/80'}`}>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
                      isDark
                        ? 'bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30'
                        : 'bg-blue-300/70 border border-blue-500/50 text-blue-900 hover:text-blue-950 hover:border-blue-600'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className={`text-lg font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                {t(project.titleKey, language)}
              </h3>

              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                {t(project.descKey, language)}
              </p>

              <p className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-blue-700'}`}>
                {project.period}
              </p>

              <button
                onClick={() => handleViewProject(project.id)}
                className={`inline-flex items-center font-semibold text-sm transition-colors group/link cursor-pointer ${
                  isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-700 hover:text-blue-900'
                }`}
              >
                {t('projects.verProyecto', language)}
                <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
              </button>
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