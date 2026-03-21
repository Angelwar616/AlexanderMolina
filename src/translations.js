export const translations = {
  es: {
    
    stats: {
      experiencia: 'Años de experiencia',
      proyectos: 'Proyectos completados',
      tecnologias: 'Tecnologías',
      comprometido: 'Comprometido'
    },
    navbar: {
      sobreMi: 'Sobre mí',
      skills: 'Skills',
      proyectos: 'Proyectos',
      contacto: 'Contacto'
    },
      hero: {
      disponible: 'Disponible para nuevas oportunidades',
      saludo: 'Hola, soy',
      nombre: 'Alexander Molina',
      desc: 'Ingeniero en Sistemas apasionado por construir soluciones digitales robustas, escalables y eficientes. Especializado en desarrollo full-stack, arquitectura cloud y experiencias de usuario impecables.',
      verProyectos: 'Ver proyectos →',
      contactame: 'Contáctame',
      miPerfil: '// Mi perfil',
      nombre_label: '"nombre"',
      rol_label: '"rol"',
      experiencia_label: '"experiencia"',
      stack_label: '"stack"',
      disponible_label: '"disponible"',
      contratame: 'contratame'
    },
    skills: {
      titulo: 'Mi Stack Técnico',
      subtitulo: 'Tecnologías'
    },
    projects: {
      titulo: 'Proyectos Destacados',
      subtitulo: 'Trabajo',
      verProyecto: 'Ver proyecto',
      monitoreoVehicular: 'Sistema de Monitoreo Vehicular OBD-II',
      descMonitoreo: 'Plataforma de telemetría en tiempo real para monitoreo de vehículos. Motor de adquisición de datos en Python con sincronización Cloud mediante Firebase, reduciendo latencia de visualización y garantizando estabilidad en entornos de alta movilidad.',
      sistemaPOS: 'Sistema de Venta para Restaurante',
      descSistemaPOS: 'Solución integral de facturación y gestión de inventario. Implementé validaciones automáticas de stock, motor de reportes estratégicos y arquitectura robusta con MySQL normalizado, reduciendo tiempos de facturación en un 40%.',
      resPlast: 'ResPlast - Sistema Automatizado de Pirólisis',
      descResPlast: 'Proyecto de grado: Plataforma Fullstack (React/Node.js) para reciclaje de plásticos. Automatización de control de pirólisis, telemetría con sensores industriales en tiempo real y análisis de rendimiento energético.',
      inventario: 'Sistema de Control de Inventarios y Ventas',
      descInventario: 'Aplicación de escritorio desarrollada en C# .NET. Automatización de actualizaciones de stock en tiempo real, interfaz optimizada para administración y reportes con análisis histórico.',
      seguridad: 'Infraestructura de Ciberseguridad',
      descSeguridad: 'Diseño e implementación de protocolos de seguridad informática. Análisis de tráfico con Wireshark, auditorías de red, detección temprana de anomalías y configuración de políticas de seguridad para cooperativa.',
      arquitectura: 'Optimización Arquitectura Frontend - Atomic Design',
      descArquitectura: 'Refactorización de componentes bajo Atomic Design en Smaigo App. Incrementé velocidad de desarrollo en 30%, garantizando escalabilidad con componentes 100% reutilizables y gestión optimizada de memoria.'
    },
    contact: {
      titulo: 'Hablemos',
      subtitulo: '¿Trabajamos juntos?',
      desc: 'Estoy abierto a oportunidades freelance, colaboraciones y proyectos desafiantes. ¡No dudes en contactarme!',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cv: 'Descargar CV'
    },
    footer: {
      derechos: '© 2026',
      nombre: 'Alexander Molina',
      cargo: 'Ingeniero de Sistemas',
      hecho: 'Hecho con'
    }
  },
  en: {
    stats: {
      experiencia: 'Years of experience',
      proyectos: 'Projects completed',
      tecnologias: 'Technologies',
      comprometido: 'Committed'
    },
    navbar: {
      sobreMi: 'About Me',
      skills: 'Skills',
      proyectos: 'Projects',
      contacto: 'Contact'
    },
    hero: {
      disponible: 'Available for new opportunities',
      saludo: 'Hi, I\'m',
      nombre: 'Alexander Molina',
      desc: 'Systems Engineer passionate about building robust, scalable and efficient digital solutions. Specialized in full-stack development, cloud architecture and impeccable user experiences.',
      verProyectos: 'View projects →',
      contactame: 'Contact me',
      miPerfil: '// My profile',
      nombre_label: '"name"',
      rol_label: '"role"',
      experiencia_label: '"experience"',
      stack_label: '"stack"',
      disponible_label: '"available"',
      contratame: 'hire me'
    },
    skills: {
      titulo: 'My Technical Stack',
      subtitulo: 'Technologies'
    },
    projects: {
      titulo: 'Featured Projects',
      subtitulo: 'Work',
      verProyecto: 'View project',
      monitoreoVehicular: 'OBD-II Vehicle Monitoring System',
      descMonitoreo: 'Real-time telemetry platform for vehicle monitoring. Python data acquisition engine with Cloud synchronization via Firebase, reducing visualization latency and ensuring stability in high-mobility environments.',
      sistemaPOS: 'Restaurant Sales System',
      descSistemaPOS: 'Comprehensive billing and inventory management solution. I implemented automatic stock validations, strategic reporting engine and robust architecture with normalized MySQL, reducing billing times by 40%.',
      resPlast: 'ResPlast - Automated Pyrolysis System',
      descResPlast: 'Degree project: Fullstack platform (React/Node.js) for plastic recycling. Pyrolysis control automation, telemetry with real-time industrial sensors and energy performance analysis.',
      inventario: 'Inventory and Sales Control System',
      descInventario: 'Desktop application developed in C# .NET. Real-time stock update automation, optimized interface for administration and reports with historical analysis.',
      seguridad: 'Cybersecurity Infrastructure',
      descSeguridad: 'Design and implementation of computer security protocols. Traffic analysis with Wireshark, network audits, early anomaly detection and security policy configuration for cooperative.',
      arquitectura: 'Frontend Architecture Optimization - Atomic Design',
      descArquitectura: 'Component refactoring under Atomic Design in Smaigo App. I increased development speed by 30%, ensuring scalability with 100% reusable components and optimized memory management.'
    },
    contact: {
      titulo: 'Let\'s Talk',
      subtitulo: 'Let\'s work together?',
      desc: 'I\'m open to freelance opportunities, collaborations and challenging projects. Don\'t hesitate to contact me!',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cv: 'Download CV'
    },
    footer: {
      derechos: '© 2026',
      nombre: 'Alexander Molina',
      cargo: 'Systems Engineer',
      hecho: 'Made with'
    }
  }
};

export const t = (key, language) => {
  const keys = key.split('.');
  let value = translations[language];
  
  for (let k of keys) {
    value = value[k];
    if (!value) return key;
  }
  
  return value;
};