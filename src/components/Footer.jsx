import React from 'react';

export default function Footer() {
  return (
    <footer className="px-16 py-8 border-t border-slate-700/30 relative z-10">
      <div className="flex justify-between items-center text-sm text-slate-500 font-mono">
        <span>
          © 2026 <span className="text-cyan-500">Alexander Molina</span> — Ingeniero de Sistemas
        </span>
        <span>
          Hecho con <span className="text-cyan-500">🖤🤘</span> y mucho café
        </span>
      </div>
    </footer>
  );
}