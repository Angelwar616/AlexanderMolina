import React from 'react';

export default function Headers({ scrollY }) {
  

  const navLinks = [
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Skills', href: '#skills' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' }
  ];


  
  const navbarBackground = `linear-gradient(
    to bottom, 
    rgba(5, 13, 26, ${0.95 + scrollY * 0.0001}), 
    transparent
  )`;


  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0
        z-50
        px-16 py-5
        flex justify-between items-center
        transition-all duration-300
      `}
      style={{
        background: navbarBackground,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}
    >
      
      {/* LOGO */}
      <div className="logo font-mono text-sm font-bold tracking-wider">
        <span className="text-slate-400">./</span>
        <span className="text-slate-100">portfolio</span>
        <span className="text-cyan-500">_</span>
      </div>

      {/* NAVIGATION LINKS */}
      <ul className="nav-links flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={`
                text-xs font-mono
                tracking-widest uppercase
                text-slate-400
                hover:text-cyan-500
                transition-colors duration-300
              `}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  );
}