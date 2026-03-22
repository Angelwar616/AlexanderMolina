import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeProvider.jsx';
import { t } from '../translations.js';
import { getProjectById } from '../data/projectsData.js';

export default function RestPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { isDark, language } = useTheme();
  const project = getProjectById(projectId);

  // Estado para carrusel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Si el proyecto no existe, redirige
  if (!project) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-slate-950' : 'bg-gradient-to-b from-white to-blue-50'}`}>
        <div className="text-center">
          <h1 className={`text-4xl font-black mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
            Proyecto no encontrado
          </h1>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  // Funciones del carrusel
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % project.images.length
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-gradient-to-b from-white to-blue-50'}`}>
      {/* Header con botón de volver */}
      <div className={`sticky top-0 z-40 ${isDark ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDark ? 'border-slate-700/30' : 'border-blue-200/30'}`}>
        <div className="px-16 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className={`flex items-center gap-2 font-semibold transition-colors ${
              isDark 
                ? 'text-slate-400 hover:text-cyan-400' 
                : 'text-blue-700 hover:text-blue-900'
            }`}
          >
            <span>←</span>
            Volver
          </button>
          <div className="flex items-center gap-2">
            <span className="text-3xl">{project.emoji}</span>
            <h1 className={`text-2xl font-black ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
              {t(project.titleKey, language)}
            </h1>
          </div>
          <div className="w-20"></div> {/* Espaciador para centrar */}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="px-16 py-12 max-w-6xl mx-auto">
        
        {/* Sección de Carrusel */}
        <div className={`rounded-2xl overflow-hidden mb-12 ${isDark ? 'bg-slate-900/50 border border-slate-700/50' : 'bg-blue-100/50 border border-blue-300/50'}`}>
          <div className="aspect-video bg-gray-300 relative flex items-center justify-center">
            {project.images && project.images.length > 0 ? (
              <>
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={`${t(project.titleKey, language)} - imagen ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Controles del carrusel */}
                {project.images.length > 1 && (
                  <>
                    {/* Botones anterior/siguiente */}
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
                    >
                      ←
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
                    >
                      →
                    </button>

                    {/* Indicadores de imagen */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => goToImage(idx)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            idx === currentImageIndex 
                              ? 'bg-cyan-400 w-8' 
                              : 'bg-white/50 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className={`text-center ${isDark ? 'text-slate-400' : 'text-blue-600'}`}>
                <p className="text-lg">Sin imágenes disponibles</p>
              </div>
            )}
          </div>
        </div>

        {/* Información del proyecto */}
        <div className="grid grid-cols-3 gap-8">
          
          {/* Columna izquierda - Descripción y detalles */}
          <div className="col-span-2 space-y-8">
            
            {/* Descripción principal */}
            <div>
              <h2 className={`text-2xl font-black mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                Descripción
              </h2>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                {project.fullDescription}
              </p>
            </div>

            {/* Desafíos */}
            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h3 className={`text-xl font-black mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  Desafíos
                </h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, idx) => (
                    <li 
                      key={idx}
                      className={`flex gap-3 ${isDark ? 'text-slate-400' : 'text-slate-700'}`}
                    >
                      <span className="text-cyan-400 font-bold">▸</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Soluciones */}
            {project.solutions && project.solutions.length > 0 && (
              <div>
                <h3 className={`text-xl font-black mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  Soluciones Implementadas
                </h3>
                <ul className="space-y-2">
                  {project.solutions.map((solution, idx) => (
                    <li 
                      key={idx}
                      className={`flex gap-3 ${isDark ? 'text-slate-400' : 'text-slate-700'}`}
                    >
                      <span className="text-cyan-400 font-bold">✓</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Resultados */}
            {project.results && project.results.length > 0 && (
              <div>
                <h3 className={`text-xl font-black mb-3 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  Resultados
                </h3>
                <ul className="space-y-2">
                  {project.results.map((result, idx) => (
                    <li 
                      key={idx}
                      className={`flex gap-3 ${isDark ? 'text-slate-400' : 'text-slate-700'}`}
                    >
                      <span className="text-cyan-400 font-bold">⚡</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Columna derecha - Info técnica */}
          <div className="space-y-6">
            
            {/* Tecnologías */}
            <div className={`rounded-xl p-6 ${isDark ? 'bg-slate-900/50 border border-slate-700/50' : 'bg-blue-100/50 border border-blue-300/50'}`}>
              <h3 className={`text-lg font-black mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                Tecnologías
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${
                      isDark
                        ? 'bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-cyan-400'
                        : 'bg-blue-200/60 border border-blue-400 text-blue-800 hover:text-blue-900'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Período */}
            <div className={`rounded-xl p-6 ${isDark ? 'bg-slate-900/50 border border-slate-700/50' : 'bg-blue-100/50 border border-blue-300/50'}`}>
              <h3 className={`text-lg font-black mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                Período
              </h3>
              <p className={`font-mono ${isDark ? 'text-slate-400' : 'text-blue-700'}`}>
                {project.period}
              </p>
            </div>

            {/* Tipo de proyecto */}
            <div className={`rounded-xl p-6 ${isDark ? 'bg-slate-900/50 border border-slate-700/50' : 'bg-blue-100/50 border border-blue-300/50'}`}>
              <h3 className={`text-lg font-black mb-2 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                Tipo
              </h3>
              <p className={`font-semibold ${
                project.type === 'personal' 
                  ? isDark ? 'text-green-400' : 'text-green-700'
                  : isDark ? 'text-yellow-400' : 'text-yellow-700'
              }`}>
                {project.type === 'personal' ? 'Proyecto Personal' : 'Proyecto Empresarial'}
              </p>
            </div>

            {/* Enlaces */}
            <div className="space-y-2">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg transition-all text-center"
                >
                  Ver en GitHub
                </a>
              )}
              {project.youtubeLink && (
                <a
                  href={project.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 bg-red-600 text-white font-bold rounded-lg hover:shadow-lg transition-all text-center"
                >
                  Ver en YouTube
                </a>
              )}
            </div>

          </div>

        </div>

        {/* Características */}
        {project.features && project.features.length > 0 && (
          <div className="mt-12 pt-12 border-t border-slate-700/30">
            <h2 className={`text-2xl font-black mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
              Características Principales
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className={`p-4 rounded-lg ${isDark ? 'bg-slate-900/50 border border-slate-700/50' : 'bg-blue-100/50 border border-blue-300/50'}`}
                >
                  <p className={`flex items-start gap-3 ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                    <span className="text-cyan-400 font-bold mt-1">◆</span>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}