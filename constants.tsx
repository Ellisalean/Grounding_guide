
import { SlideContent } from './types';

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    type: 'hero',
    title: 'Guía Profesional: Ejercicios de Grounding para la Sanación de Trauma',
    subtitle: 'Herramientas de estabilización inmediata y autorregulación',
    points: [
      'Para profesionales que trabajan con trauma complejo, TEPT severo y disociación',
      'Basado en neurociencia del trauma, TIA, EMDR y protocolos SAMHSA',
      'Técnicas de estabilización previa al procesamiento profundo'
    ],
    author: 'Ankyra - Terapia Informada en Trauma',
    footer: '2026 | https://ankyra.netlify.app/',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1920',
    overlayColor: 'bg-black/40'
  },
  {
    id: 2,
    type: 'grid',
    title: 'Fundamentos Teóricos',
    description: 'El grounding es una herramienta clave para la estabilización. Funciona a través de los siguientes mecanismos:',
    image: 'https://images.unsplash.com/photo-1493676303817-1139804366ed?auto=format&fit=crop&q=80&w=1920',
    steps: [
      { num: 'Regulación del SNA', text: 'Activa el sistema parasimpático y reduce la hiperactivación de la amígdala.' },
      { num: 'Foco Perceptivo', text: 'Desvía la atención de estímulos internos hacia la percepción sensorial externa.' },
      { num: 'Seguridad Somática', text: 'Reinforce la sensación de seguridad en el cuerpo, anclando en el aquí y ahora.' },
      { num: 'Reducción Fragmentación', text: 'Ayuda a integrar la experiencia y reducir la disociación en trauma complejo.' }
    ]
  },
  {
    id: 3,
    type: 'table',
    title: 'Clasificación de Técnicas',
    description: 'Guía rápida para seleccionar la técnica adecuada según la situación y el estado del paciente.',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1920',
    tableData: {
      headers: ['Categoría', 'Enfoque', 'Uso Ideal', 'Activación'],
      rows: [
        ['Sensorial 5-4-3-2-1', 'Externo', 'Crisis aguda', 'Bajo – medio'],
        ['Físico / Propioceptivo', 'Cuerpo/Presión', 'Hiperactivación alta', 'Medio – alto'],
        ['Respiratorio', 'Sensación interna', 'Ansiedad sostenida', 'Bajo – medio'],
        ['Cognitivo Estructural', 'Verbal/Narrativo', 'Prevención de escalada', 'Bajo'],
        ['Anclajes portátiles', 'Táctil transicional', 'Diario/Transiciones', 'Muy bajo'],
        ['Movimiento / Postural', 'Dinámico', 'Congelamiento', 'Medio – alto']
      ]
    }
  },
  {
    id: 4,
    type: 'list',
    title: 'Protocolo: Fase 1 – Preparación',
    subtitle: 'Sesiones Iniciales',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920',
    steps: [
      { num: '01', text: 'Explicar y validar: "El grounding nos ayuda a recordar que estamos aquí y ahora".' },
      { num: '02', text: 'Crear lista personalizada (8-10 opciones) para evitar quedar en blanco en crisis.' },
      { num: '03', text: 'Practicar en sesión sin activación alta (3-5 repeticiones hasta notar diferencia en SUD).' },
      { num: '04', text: 'Enseñar a medir activación antes y después (Escala SUD 0-10).' }
    ]
  },
  {
    id: 5,
    type: 'exercise',
    title: 'Ejercicio 1: Técnica 5-4-3-2-1',
    subtitle: 'La más utilizada en trauma',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1920',
    steps: [
      { num: '5', text: 'Cosas que ves (detalla color, forma, textura).' },
      { num: '4', text: 'Cosas que puedes tocar (describe cómo se siente).' },
      { num: '3', text: 'Cosas que escuchas (sonidos lejanos o internos).' },
      { num: '2', text: 'Cosas que hueles (o imagina olores).' },
      { num: '1', text: 'Cosa que sabes (sabor en boca o imagina uno).' }
    ]
  },
  {
    id: 6,
    type: 'exercise',
    title: 'Ejercicio 2: Pies en el Suelo – "Raíces"',
    subtitle: 'Físico + Interoceptivo',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1920',
    description: 'Imagina raíces fuertes y profundas que salen de los pies y se hunden en la tierra, anclándote firmemente.',
    points: [
      'Posición: Sentarse o estar de pie cómodamente.',
      'Presión: Presionar los pies contra el suelo con fuerza.',
      'Afirmación: "Estoy aquí. Mis pies tocan el suelo. Estoy a salvo ahora."'
    ]
  },
  {
    id: 7,
    type: 'exercise',
    title: 'Ejercicio 3: Objeto Frío o Pesado',
    subtitle: 'Táctil Potente',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1920',
    description: 'Utiliza estímulos táctiles intensos para anclar a la persona en el presente y "romper el hechizo" de una crisis.',
    points: [
      'Cubito de hielo: Distracción poderosa y rápida.',
      'Botella de agua fría: Ancla sensorial y peso físico.',
      'Piedra lisa y pesada: Sensación de solidez y permanencia.',
      'Llave metálica: Estímulo táctil específico y focalizado.'
    ]
  },
  {
    id: 8,
    type: 'exercise',
    title: 'Ejercicio 5: Respiración Abdominal',
    subtitle: 'Respiratorio + Interoceptivo',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=1920',
    description: 'Fundamental en la regulación del sistema nervioso porque activa el sistema parasimpático.',
    steps: [
      { num: 'Inhalar', text: 'Contar hasta 4 (notar que el abdomen sube).' },
      { num: 'Retener', text: 'Contar 4-6 segundos.' },
      { num: 'Exhalar', text: 'Contar hasta 6-8 (el abdomen baja).' }
    ],
    footer: 'Afirmación: "Estoy aquí... estoy respirando... estoy a salvo."'
  },
  {
    id: 9,
    type: 'grid',
    title: 'Protocolo: Fase 3 – Integración Cotidiana',
    description: 'Convertir el grounding en un hábito preventivo para mantener la estabilidad a largo plazo.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=1920',
    steps: [
      { num: 'Práctica Diaria', text: '2-3 minutos x 3 veces al día, incluso sin síntomas.' },
      { num: 'Transiciones', text: 'Incorporar al levantarse, salir de casa o antes de dormir.' },
      { num: 'Hoja Seguridad', text: 'Combinar con lista escrita y contactos de apoyo.' }
    ]
  },
  {
    id: 10,
    type: 'resources',
    title: 'Recursos Recomendados',
    subtitle: 'Materiales 2025-2026',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1920',
    points: [
      'Therapist Aid – Grounding Techniques worksheet',
      'Psychology Tools – Grounding Techniques (PDF)',
      'Libro: "Sensorimotor Psychotherapy" – Pat Ogden',
      'Apps: Calm, Headspace, PTSD Coach (VA)'
    ]
  },
  {
    id: 11,
    type: 'conclusion',
    title: 'Conclusión',
    description: 'El grounding es una de las herramientas más potentes y accesibles para devolver seguridad somática en las primeras fases de la recuperación del trauma.',
    footer: 'Acompaña siempre con empatía, paciencia y respeto absoluto por el ritmo de la persona.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1920',
    overlayColor: 'bg-indigo-900/30'
  }
];
