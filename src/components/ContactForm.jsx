import React, { useState } from 'react';
import { useTheme } from '../ThemeProvider.jsx';
import { t } from '../translations.js';
import { useNavigate } from 'react-router-dom';

export default function ContactForm() {
  const { isDark, language } = useTheme();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    comentario: '',
    asunto: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      console.log('Formulario enviado:', formData);
      setSubmitStatus('success');
      setFormData({ nombre: '', email: '', telefono: '', comentario: '', asunto: '' });
      setIsSubmitting(false);
      
      // Limpiar mensaje después de 3 segundos
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contacto-form" className={`px-4 md:px-16 py-12 md:py-20 relative z-10 ${isDark ? 'bg-slate-950' : 'bg-linear-to-b from-white to-blue-50'}`}>
      {/* Header */}
      <div className="mb-12 text-center">
        <p className={`font-mono text-xs tracking-widest uppercase mb-4 ${isDark ? 'text-cyan-500' : 'text-blue-700'}`}>
          Contacto directo
        </p>
        <h2 className={`text-3xl md:text-4xl font-black mb-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
          Hablemos de tu <span className={isDark ? 'text-cyan-400' : 'text-blue-600'}>siguiente proyecto</span>
        </h2>
        <p className={`text-base md:text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Puedes contactarme por GitHub o dejar un mensaje aquí y con gusto yo me pondré en contacto contigo.
        </p>
      </div>

      {/* Grid: Perfil + Formulario */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* SECCIÓN IZQUIERDA - Perfil */}
        <div className={`rounded-2xl p-6 md:p-8 ${isDark ? 'bg-slate-900/50 border border-slate-700/50' : 'bg-blue-100/50 border border-blue-300/50'}`}>
          <h3 className={`font-mono text-xs tracking-widest uppercase mb-6 ${isDark ? 'text-slate-400' : 'text-blue-700'}`}>
            Perfil
          </h3>

          {/* Información del desarrollador */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-3xl ${isDark ? 'bg-slate-800' : 'bg-blue-200'}`}>
                👨‍💻
              </div>
              <div>
                <h4 className={`text-lg font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  Alexander Molina
                </h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Ingeniero en Sistemas
                </p>
              </div>
            </div>

            {/* Botón GitHub */}
            <a
              href="https://github.com/Angelwar616"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mb-6 px-4 py-3 bg-linear-to-r from-gray-800 to-gray-900 text-white font-bold rounded-lg hover:shadow-lg transition-all text-center"
            >
              <span className="inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                github.com/Angelwar616
              </span>
            </a>
          </div>

          {/* Servicios */}
          <div className="mb-8 pb-8 border-b border-slate-700/30">
            <h5 className={`font-mono text-xs tracking-widest uppercase mb-4 ${isDark ? 'text-slate-400' : 'text-blue-700'}`}>
              Servicios
            </h5>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
              Desarrollo Full Stack, Arquitectura Cloud, Optimización de Performance, Consultoría técnica
            </p>
          </div>

          {/* Respuesta */}
          <div className="mb-8">
            <h5 className={`font-mono text-xs tracking-widest uppercase mb-2 ${isDark ? 'text-slate-400' : 'text-blue-700'}`}>
              Respuesta
            </h5>
            <p className={`text-sm font-semibold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
              Menos de 48 horas
            </p>
          </div>

          {/* Tecnologías */}
          <div>
            <h5 className={`font-mono text-xs tracking-widest uppercase mb-4 ${isDark ? 'text-slate-400' : 'text-blue-700'}`}>
              Stack Tecnológico
            </h5>
            <div className="space-y-3">
              <div>
                <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>
                  Frontend
                </p>
                <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                  React, Next.js, Tailwind CSS, TypeScript
                </p>
              </div>
              <div>
                <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>
                  Backend
                </p>
                <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                  Node.js, Python, Laravel, PostgreSQL
                </p>
              </div>
              <div>
                <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>
                  DevOps
                </p>
                <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                  Docker, AWS, Firebase, CI/CD
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN DERECHA - Formulario */}
        <div>
          <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
            Envíame un mensaje
          </h3>

          {submitStatus === 'success' && (
            <div className={`mb-6 p-4 rounded-lg ${isDark ? 'bg-green-900/30 border border-green-700/50' : 'bg-green-100/50 border border-green-300'}`}>
              <p className={`text-sm font-semibold ${isDark ? 'text-green-400' : 'text-green-700'}`}>
                ✓ Mensaje enviado correctamente. Me pondré en contacto pronto.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre */}
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className={`w-full px-4 py-3 rounded-lg transition-all ${
                  isDark
                    ? 'bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none'
                    : 'bg-blue-50/50 border border-blue-300/50 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none'
                }`}
              />
            </div>

            {/* Email */}
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className={`w-full px-4 py-3 rounded-lg transition-all ${
                  isDark
                    ? 'bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none'
                    : 'bg-blue-50/50 border border-blue-300/50 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none'
                }`}
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>
                Teléfono
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+506 0000 0000"
                className={`w-full px-4 py-3 rounded-lg transition-all ${
                  isDark
                    ? 'bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none'
                    : 'bg-blue-50/50 border border-blue-300/50 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none'
                }`}
              />
            </div>

            {/* Asunto */}
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>
                Asunto
              </label>
              <input
                type="text"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                placeholder="Asunto del mensaje"
                className={`w-full px-4 py-3 rounded-lg transition-all ${
                  isDark
                    ? 'bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none'
                    : 'bg-blue-50/50 border border-blue-300/50 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none'
                }`}
              />
            </div>

            {/* Comentario */}
            <div>
              <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>
                Comentario
              </label>
              <textarea
                name="comentario"
                value={formData.comentario}
                onChange={handleChange}
                placeholder="Cuéntame que deseas construir..."
                required
                rows="5"
                className={`w-full px-4 py-3 rounded-lg transition-all resize-none ${
                  isDark
                    ? 'bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none'
                    : 'bg-blue-50/50 border border-blue-300/50 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none'
                }`}
              />
            </div>

            {/* Botón Enviar */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>

          <p className={`text-xs text-center mt-4 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
            No tardaré en responderte. *
          </p>
        </div>

      </div>
    </section>
  );
}