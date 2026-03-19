import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-2 items-center px-16 pt-24 gap-16 relative z-10">
      <div className="pt-20 space-y-8">
        <div 
          className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 animate-fadeUp"
          style={{ animationDelay: '0s', animationFillMode: 'both' }}
        >
          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-mono text-cyan-500 tracking-widest">Disponible para nuevas oportunidades</span>
        </div>

        <h1 
          className="text-5xl font-black leading-tight animate-fadeUp"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          Hola, soy<br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Alexander Molina
          </span>
        </h1>

        <p 
          className="text-lg text-slate-400 max-w-lg leading-relaxed font-light animate-fadeUp"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          Ingeniero en Sistemas apasionado por construir soluciones digitales robustas, escalables y eficientes. Especializado en desarrollo full-stack, arquitectura cloud y experiencias de usuario impecables.
        </p>

        <div 
          className="flex gap-4 flex-wrap animate-fadeUp"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          <a
            href="#proyectos"
            className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold rounded-lg text-sm overflow-hidden transition-all hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">Ver proyectos →</span>
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 border border-cyan-500/40 text-cyan-500 font-semibold rounded-lg text-sm hover:bg-cyan-500/10 hover:border-cyan-500 transition-all"
          >
            Contáctame
          </a>
        </div>
      </div>

      <div 
        className="flex justify-center items-center animate-fadeIn"
        style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
      >
        <div className="w-full max-w-md bg-slate-900 border border-cyan-500/25 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
          <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs font-mono text-slate-500 ml-2">dev@portfolio ~ profile.json</span>
          </div>

          <div className="p-6 font-mono text-sm text-slate-300 space-y-2">
            <div className="text-slate-500">// Mi perfil</div>
            <div>
              <span className="text-cyan-300">"nombre"</span>
              <span>: </span>
              <span className="text-green-400">"Alexander Aaron Molina Serrano"</span>,
            </div>
            <div>
              <span className="text-cyan-300">"rol"</span>
              <span>: </span>
              <span className="text-green-400">"Ing. de Sistemas"</span>,
            </div>
            <div>
              <span className="text-cyan-300">"experiencia"</span>
              <span>: </span>
              <span className="text-yellow-400">3</span>,
            </div>
            <div>
              <span className="text-cyan-300">"stack"</span>: [
            </div>
            <div className="pl-6">
              <span className="text-green-400">"React"</span>,
              <span className="text-green-400"> "Node.js"</span>,
            </div>
            <div className="pl-6">
              <span className="text-green-400">"Python"</span>,
              <span className="text-green-400"> "C#"</span>
            </div>
            <div>],</div>
            <div>
              <span className="text-cyan-300">"disponible"</span>
              <span>: </span>
              <span className="text-blue-400">true</span>
            </div>
            <div className="mt-4">
              <span className="text-blue-500">$</span>
              <span className="text-white"> contratame</span>
              <span className="inline-block w-2 h-5 bg-cyan-400 ml-1 animate-pulse"></span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </section>
  );
}