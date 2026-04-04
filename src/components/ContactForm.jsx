import React, { useState } from 'react';
import { useTheme } from '../ThemeProvider.jsx';
import { t } from '../translations.js';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaGithub } from 'react-icons/fa';

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
    
    try {
      const response = await fetch('https://formspree.io/f/mlgopzea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ nombre: '', email: '', telefono: '', comentario: '', asunto: '' });
        
        setTimeout(() => setSubmitStatus(null), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <section id="contacto-form" className={`px-4 md:px-16 py-12 md:py-20 relative z-10 ${isDark ? 'bg-slate-950' : 'bg-gradient-to-b from-white to-blue-50'}`}>
      
      {/* Header */}
      <div className="mb-12">
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1">
            <p className={`font-mono text-xs tracking-widest uppercase mb-4 ${isDark ? 'text-cyan-500' : 'text-blue-700'}`}>
              Contacto directo
            </p>
            <h2 className={`text-3xl md:text-4xl font-black ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
              Hablemos de tu <span className={isDark ? 'text-cyan-400' : 'text-blue-600'}>siguiente proyecto</span>
            </h2>
          </div>
          
          {/* Botón cerrar */}
          <button
            onClick={handleClose}
            className={`p-3 rounded-full transition-all duration-300 ml-4 ${
              isDark
                ? 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-cyan-400'
                : 'bg-blue-200 hover:bg-blue-300 text-slate-700 hover:text-blue-800'
            }`}
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
        
        <p className={`text-base md:text-lg max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
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
              className={`flex items-center justify-center gap-2 w-full mb-6 px-4 py-3 font-bold rounded-lg transition-all ${
                isDark
                  ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:shadow-lg hover:shadow-gray-700/50'
                  : 'bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:shadow-lg hover:shadow-gray-700/50'
              }`}
            >
              <FaGithub className="text-lg" />
              github.com/Angelwar616
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

          {submitStatus === 'error' && (
            <div className={`mb-6 p-4 rounded-lg ${isDark ? 'bg-red-900/30 border border-red-700/50' : 'bg-red-100/50 border border-red-300'}`}>
              <p className={`text-sm font-semibold ${isDark ? 'text-red-400' : 'text-red-700'}`}>
                ✗ Error al enviar. Intenta de nuevo.
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
              className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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