export const projectsDetailData = {
  'monitoreo-vehicular': {
    id: 'monitoreo-vehicular',
    titleKey: 'projects.monitoreoVehicular',
    descriptionKey: 'projects.descMonitoreo',
    emoji: '🚗',
    technologies: ['Python', 'Firebase', 'Flutter', 'Arduino', 'OBD-II'],
    period: 'feb 2025 - jul 2025',
    type: 'personal', // 'personal' | 'empresarial'
    images: [
      '/projects/monitoreo/screenshot-1.jpg',
      '/projects/monitoreo/screenshot-2.jpg',
      '/projects/monitoreo/screenshot-3.jpg',
    ],
    fullDescription: 'Plataforma completa de telemetría en tiempo real para monitoreo de vehículos. Motor de adquisición de datos en Python que se conecta al protocolo OBD-II, con sincronización Cloud mediante Firebase, reduciendo latencia de visualización y garantizando estabilidad en entornos de alta movilidad.',
    challenges: [
      'Procesamiento en tiempo real de datos vehiculares',
      'Sincronización confiable en conexiones variables',
      'Optimización de batería en dispositivo móvil',
      'Escalabilidad para múltiples vehículos simultáneos'
    ],
    solutions: [
      'Algoritmos de buffer y caché local',
      'Arquitectura event-driven con Firebase Realtime',
      'Optimización de conexión en segundo plano',
      'Indexación eficiente en base de datos'
    ],
    results: [
      'Latencia reducida a menos de 500ms',
      'Disponibilidad del 99.8%',
      'Soporta hasta 500+ vehículos simultáneamente',
      'Consumo de batería optimizado en 40%'
    ],
    features: [
      'Dashboard en tiempo real',
      'Historial de viajes',
      'Alertas de mantenimiento',
      'Reportes automáticos',
      'API REST documentada'
    ],
    relatedProjects: ['sistema-venta-restaurante', 'resplast'],
    youtubeLink: null, // O URL de video si existe
    githubLink: 'https://github.com/Angelwar616' // Si es público
  },

  'sistema-venta-restaurante': {
    id: 'sistema-venta-restaurante',
    titleKey: 'projects.sistemaPOS',
    descriptionKey: 'projects.descSistemaPOS',
    emoji: '🍽️',
    technologies: ['Laravel', 'MySQL', 'Node.js', 'Vue.js', 'Docker'],
    period: 'jul 2025 - sep 2025',
    type: 'empresarial', // Datos limitados por privacidad
    images: [
      '/projects/restaurante/screenshot-1.jpg',
      '/projects/restaurante/screenshot-2.jpg',
    ],
    fullDescription: 'Sistema integral de facturación y gestión de inventario para restaurantes. Implementé validaciones automáticas de stock en tiempo real, motor de reportes estratégicos y arquitectura robusta con MySQL normalizado.',
    challenges: [
      'Manejo de múltiples cajas simultáneamente',
      'Consistencia de datos en operaciones críticas',
      'Reportes complejos sin impactar performance',
      'Integración con impresoras POS'
    ],
    solutions: [
      'Transacciones ACID y locks optimistas',
      'Queries optimizadas con índices estratégicos',
      'Procesamiento asíncrono de reportes',
      'Driver genérico para dispositivos POS'
    ],
    results: [
      'Reducción de tiempos de facturación en 40%',
      'Errores de inventario reducidos a < 1%',
      'Aumento en transacciones procesadas por hora',
      'Disponibilidad 24/7 sin downtime'
    ],
    features: [
      'Sistema de facturación inteligente',
      'Control de inventario en tiempo real',
      'Integración con múltiples formas de pago',
      'Reportes financieros detallados',
      'Gestión de permisos y usuarios'
    ],
    relatedProjects: ['monitoreo-vehicular'],
    youtubeLink: null,
    githubLink: null // Empresarial - no disponible
  },

  'resplast': {
    id: 'resplast',
    titleKey: 'projects.resPlast',
    descriptionKey: 'projects.descResPlast',
    emoji: '♻️',
    technologies: ['React', 'Node.js', 'IoT', 'Firebase', 'Arduino', 'Python'],
    period: 'Proyecto académico',
    type: 'personal',
    images: [
      '/projects/resplast/screenshot-1.jpg',
      '/projects/resplast/screenshot-2.jpg',
      '/projects/resplast/screenshot-3.jpg',
      '/projects/resplast/screenshot-4.jpg',
    ],
    fullDescription: 'Proyecto de grado: Plataforma Fullstack para automatización de pirólisis de plásticos. Automatización completa de control de pirólisis, telemetría con sensores industriales en tiempo real y análisis de rendimiento energético.',
    challenges: [
      'Lectura confiable de múltiples sensores simultáneamente',
      'Control automático de variables críticas',
      'Análisis de datos en tiempo real para optimización',
      'Escalabilidad a múltiples unidades de pirólisis'
    ],
    solutions: [
      'Arquitectura IoT con MQTT para comunicación',
      'Control PID automático con ajustes adaptativos',
      'Machine Learning para predicción de rendimiento',
      'Base de datos time-series optimizada'
    ],
    results: [
      'Eficiencia energética mejorada en 35%',
      'Consistencia en calidad de combustible del 98%',
      'Automatización completa del proceso',
      'Datos históricos para análisis y mejora continua'
    ],
    features: [
      'Dashboard de monitoreo en tiempo real',
      'Control automático de temperatura',
      'Análisis de eficiencia y reportes',
      'Alertas de anomalías',
      'API para integración externa'
    ],
    relatedProjects: ['monitoreo-vehicular'],
    youtubeLink: 'https://youtube.com/...', // Enlace a video si existe
    githubLink: 'https://github.com/Angelwar616'
  },

  'sistema-inventarios': {
    id: 'sistema-inventarios',
    titleKey: 'projects.inventario',
    descriptionKey: 'projects.descInventario',
    emoji: '📦',
    technologies: ['C#', '.NET', 'SQL Server', 'WPF'],
    period: 'Proyecto académico',
    type: 'personal',
    images: [
      '/projects/inventario/screenshot-1.jpg',
      '/projects/inventario/screenshot-2.jpg',
      '/projects/inventario/screenshot-3.jpg',
    ],
    fullDescription: 'Aplicación de escritorio para control de inventarios y ventas. Automatización de actualizaciones de stock en tiempo real, interfaz optimizada para administración ágil y reportes con análisis histórico detallado.',
    challenges: [
      'Sincronización de datos en red local',
      'Performance con grandes volúmenes de datos',
      'Mantenimiento de integridad referencial',
      'Generación rápida de reportes'
    ],
    solutions: [
      'Entity Framework con lazy loading optimizado',
      'Índices estratégicos en base de datos',
      'Caché en memoria para datos frecuentes',
      'Reportes asíncronos con progreso'
    ],
    results: [
      'Reducción de errores manuales en 95%',
      'Generación de reportes en < 2 segundos',
      'Búsquedas instantáneas incluso con 100k+ registros',
      'Interfaz intuitiva - curva de aprendizaje mínima'
    ],
    features: [
      'CRUD completo de productos',
      'Gestión de categorías y proveedores',
      'Reportes de ventas y existencias',
      'Búsqueda y filtrado avanzado',
      'Exportación a Excel'
    ],
    relatedProjects: ['sistema-venta-restaurante'],
    youtubeLink: null,
    githubLink: 'https://github.com/Angelwar616'
  },

  'ciberseguridad': {
    id: 'ciberseguridad',
    titleKey: 'projects.seguridad',
    descriptionKey: 'projects.descSeguridad',
    emoji: '🔒',
    technologies: ['Wireshark', 'Nessus', 'Linux', 'iptables', 'VPN'],
    period: 'feb 2023 - jun 2023',
    type: 'empresarial',
    images: [
      '/projects/seguridad/screenshot-1.jpg',
    ],
    fullDescription: 'Diseño e implementación de infraestructura de seguridad informática. Protocolos de seguridad interna, análisis de tráfico con Wireshark, auditorías de red y configuración de políticas de seguridad.',
    challenges: [
      'Detección de amenazas internas',
      'Análisis de tráfico sin impactar performance',
      'Implementación de políticas sin afectar usuarios',
      'Documentación de hallazgos y recomendaciones'
    ],
    solutions: [
      'SIEM para monitoreo centralizado',
      'Inspección profunda de paquetes (DPI)',
      'Políticas de seguridad escalonadas',
      'Reportes de auditoría automatizados'
    ],
    results: [
      'Mitigación del 100% de vectores de ataque identificados',
      'Reducción de incidentes de seguridad',
      'Documentación de políticas completa',
      'Personal capacitado en seguridad'
    ],
    features: [
      'Monitoreo continuo de red',
      'Detección de intrusiones',
      'Auditorías periódicas',
      'Reportes de cumplimiento',
      'Capacitación de personal'
    ],
    relatedProjects: [],
    youtubeLink: null,
    githubLink: null
  },

  'arquitectura-frontend': {
    id: 'arquitectura-frontend',
    titleKey: 'projects.arquitectura',
    descriptionKey: 'projects.descArquitectura',
    emoji: '⚡',
    technologies: ['React', 'Atomic Design', 'Storybook', 'Jest', 'Performance'],
    period: 'oct 2026 - ene 2026',
    type: 'empresarial',
    images: [
      '/projects/arquitectura/screenshot-1.jpg',
      '/projects/arquitectura/screenshot-2.jpg',
    ],
    fullDescription: 'Refactorización completa de arquitectura frontend en Smaigo App bajo principios de Atomic Design. Incrementé velocidad de desarrollo en 30%, garantizando escalabilidad con componentes 100% reutilizables.',
    challenges: [
      'Migración de código legacy manteniendo features',
      'Establecer estándares de componentes',
      'Testing de gran suite de componentes',
      'Documentación de componentes'
    ],
    solutions: [
      'Atomic Design como estructura',
      'Storybook para documentación interactiva',
      'Jest + React Testing Library para tests',
      'Refactor incremental por módulos'
    ],
    results: [
      'Reducción de código duplicado en 65%',
      'Velocidad de desarrollo aumentada 30%',
      'Time-to-market reducido significativamente',
      'Mantenibilidad mejorada exponencialmente'
    ],
    features: [
      'Librería de 100+ componentes reutilizables',
      'Documentación en Storybook',
      'Tests de cobertura > 90%',
      'Guía de estilos completa',
      'Performance optimizado'
    ],
    relatedProjects: [],
    youtubeLink: null,
    githubLink: null
  }
};

export const getProjectById = (id) => projectsDetailData[id];

export const getAllProjects = () => Object.values(projectsDetailData);

export const getProjectsByType = (type) => 
  getAllProjects().filter(p => p.type === type);