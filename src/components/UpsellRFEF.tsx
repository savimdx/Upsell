import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  BookOpen, 
  Award, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Zap, 
  Lock, 
  Check, 
  Sparkles, 
  Flame, 
  Target,
  ArrowRightLeft,
  ChevronRight,
  AlertTriangle,
  Play,
  RotateCcw,
  Clock,
  Download,
  Calendar,
  Layers,
  Activity,
  FileText
} from 'lucide-react';

interface UpsellRFEFProps {
  onAccept: () => void;
  onDecline: () => void;
}

export default function UpsellRFEF({ onAccept, onDecline }: UpsellRFEFProps) {
  const [selectedTopic, setSelectedModule] = useState(0);
  const [tacticalStep, setTacticalStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play the tactical animation demo
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setTacticalStep((prev) => (prev + 1) % 4);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const tacticalPlays = [
    {
      title: "1. Rotación de Desmarque (Salida de Balón)",
      desc: "El cierre (C) inicia la salida de balón y descarga hacia el ala izquierdo (AI) mientras el pívot (P) realiza un movimiento de fijación de la defensa rival.",
      c: { x: "50%", y: "80%" },
      ai: { x: "20%", y: "60%" },
      ad: { x: "80%", y: "60%" },
      p: { x: "50%", y: "30%" },
      ball: { x: "22%", y: "57%" }
    },
    {
      title: "2. Creación de Espacio (Pase y Va / Doy-Voy)",
      desc: "El ala izquierdo atrae la presión y mete un pase en diagonal profunda para el desmarque en velocidad del ala derecho que corta por adentro.",
      c: { x: "40%", y: "75%" },
      ai: { x: "25%", y: "55%" },
      ad: { x: "60%", y: "45%" },
      p: { x: "35%", y: "25%" },
      ball: { x: "57%", y: "46%" }
    },
    {
      title: "3. Bloqueo y Transición Rápida (Finalización)",
      desc: "El ala derecho asiste de primera intención al pívot que pivotea de espaldas y deja el balón de frente para la llegada del Cierre.",
      c: { x: "50%", y: "45%" },
      ai: { x: "30%", y: "40%" },
      ad: { x: "70%", y: "40%" },
      p: { x: "50%", y: "20%" },
      ball: { x: "50%", y: "18%" }
    },
    {
      title: "4. Disparo y Gol (Ángulo Superior)",
      desc: "El Cierre remata fuerte de bote pronto directo al ángulo, superando la estirada del guardameta rival. ¡Gol táctico perfecto!",
      c: { x: "50%", y: "35%" },
      ai: { x: "30%", y: "30%" },
      ad: { x: "70%", y: "30%" },
      p: { x: "45%", y: "15%" },
      ball: { x: "50%", y: "5%" }
    }
  ];

  const libraryContents = [
    {
      title: "98 Sesiones Listas para Aplicar",
      badge: "Estructura Práctica",
      desc: "Sesiones completas cronometradas paso a paso, con instrucciones claras sobre cantidad de jugadores, dimensiones del espacio y tiempos de descanso.",
      details: ["Planificación de sesiones de 60, 75 y 90 minutos.", "Ejercicios modulables según tu categoría de trabajo.", "Esquemas de progresión de menor a mayor complejidad física."]
    },
    {
      title: "Ejercicios Defensivos y de Presión Alta",
      badge: "Fase Defensiva",
      desc: "Diseños estratégicos para ahogar la salida del rival, forzar pérdidas en cancha contraria y estructurar el repliegue defensivo de inmediato.",
      details: ["Transición defensiva acelerada de 'La Furia'.", "Organización en rombo defensivo ultra agresivo.", "Ejercicios específicos de marcaje 1 vs 1 y coberturas."]
    },
    {
      title: "Circuitos de Finalización y Bote Pronto",
      badge: "Fase de Ataque",
      desc: "Dinámicas dinámicas para mejorar la efectividad frente al marco rival, incluyendo remates de volea, jugadas al segundo palo y desmarques de ruptura.",
      details: ["Ejercicios de tiro bajo condiciones de fatiga extrema.", "Movimientos específicos del pívot para fijar y descargar.", "Transiciones rápidas de 2 vs 1 y superioridades 3 vs 2."]
    },
    {
      title: "Juegos Reducidos y Entrenamiento Integrado",
      badge: "Metodología",
      desc: "Aumenta la toma de decisiones y el nivel de concentración de tus jugadores mediante situaciones reales de juego en espacios condicionados.",
      details: ["Reglas de provocación para forzar comportamientos.", "Ejercicios de posesión con comodines externos.", "Acondicionamiento físico de alta intensidad con balón."]
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 antialiased overflow-x-hidden selection:bg-orange-500 selection:text-white font-sans pb-24">
      
      {/* Sport Field Grid overlay for the futuristic soccer/futsal feel */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.015)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>

      {/* Futuristic glowing backdrop lights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* ================= HEADER SCARCITY TICKER ================= */}
      <div className="bg-gradient-to-r from-amber-800 via-orange-600 to-amber-500 text-white text-center py-2.5 px-4 font-bold text-xs sm:text-sm tracking-wider shadow-lg flex items-center justify-center gap-2 relative z-20 border-b border-orange-500/30">
        <Sparkles className="h-4 w-4 text-amber-200 animate-spin" />
        <span className="uppercase tracking-widest text-[10px] sm:text-xs">¡Oferta única de una sola vez! No cierres ni recargues esta página</span>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 relative z-10 space-y-12">
        


        {/* ================= HERO TEXT & HOOK ================= */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <span className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-black tracking-widest text-orange-400 uppercase">
            ⚡ COMPLEMENTO DE ENTRENAMIENTO EXCLUSIVO
          </span>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-white font-sans uppercase">
            Descubre las <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">98 metodologías de entrenamiento</span> que utiliza la selección española de fútbol, <br className="hidden sm:inline"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
              "La Furia"
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
            Accede a 98 ejercicios prácticos y sesiones de fútbol listas para usar en tus entrenamientos, los mismos esquemas de transición y ataque integrado que utiliza <strong className="text-orange-400 font-extrabold">"La Furia"</strong>.
          </p>
        </div>

        {/* ================= MOCKUP AND HERO COUPLING GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-950/80 border border-slate-800/80 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden">
          
          {/* Cover image mockup container */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-center justify-center space-y-4">
            
            {/* The PDF Mockup image requested by user */}
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl bg-slate-950/50 p-2 border border-slate-800/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <img 
                src="https://i.ibb.co/KchjnPqV/Chat-GPT-Image-25-de-jun-de-2026-12-56-09.png" 
                alt="Biblioteca Profesional de Entrenamientos de Fútbol Sala Mockup" 
                className="w-full max-w-[280px] sm:max-w-[340px] h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
            </div>

            <div className="text-center space-y-2 w-full flex flex-col items-center">
              <span className="text-[11px] text-orange-400 font-mono font-bold uppercase tracking-widest block">📘 SISTEMA DIGITAL INSTANTÁNEO</span>
              
              <div className="pt-3 w-full">
                <a 
                  href="#oferta-exclusiva"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 text-white font-black px-6 py-3.5 rounded-xl text-xs uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-orange-500/20 cursor-pointer border border-orange-400/20 text-center"
                >
                  <Check className="h-4 w-4 text-white stroke-[3px]" />
                  <span>Sí, Quiero Acceder Ahora</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick value features list */}
          <div className="col-span-1 md:col-span-7 space-y-5">
            <h3 className="text-2xl font-black text-white tracking-tight uppercase">
              La Biblioteca Táctica Más Completa
            </h3>
            
            <p className="text-sm text-slate-300 leading-relaxed">
              Muchos directores técnicos dominan la pizarra teórica y analizan videos por horas, pero fallan en lo más importante: <strong className="text-orange-300">cómo estructurar esa teoría en ejercicios prácticos reales de alta intensidad</strong>. 
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Esta biblioteca profesional resuelve ese problema de raíz. Consigues 98 fichas de entrenamiento desglosadas que cubren todas las fases tácticas esenciales.
            </p>

            {/* Quick specifications grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                <span>98 Ejercicios Prácticos</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                <span>Fórmula Ofensiva y Defensiva</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                <span>Transiciones y Contragolpe</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                <span>Entrenamiento Integrado</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                <span>Juegos Reducidos (Small-Sided)</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
                <span>Sistemas 4-0 y 3-1 Pivot</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= THE PROBLEM SECTION ================= */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              ¿Por Qué la Mayoría de los Entrenadores Fallan en la Cancha?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Es muy fácil estudiar tácticas de élite sobre la pizarra, ver conferencias de fútbol o descargar teorías abstractas de internet. Sin embargo, al pisar la cancha se presenta el gran abismo: <strong className="text-orange-400 font-bold">no saber cómo transformar esa pizarra teórica en ejercicios dinámicos de alta transferencia.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs sm:text-sm">
            <div className="bg-slate-950/90 border border-slate-900 p-5 rounded-2xl space-y-2">
              <span className="text-red-400 font-bold tracking-widest font-mono text-[10px] block">CRISIS DE PLANIFICACIÓN</span>
              <h4 className="font-extrabold text-white">Ejercicios Monótonos</h4>
              <p className="text-slate-400 text-xs">Tus jugadores pierden interés rápidamente cuando los circuitos son repetitivos, disminuyendo su nivel de atención y asimilación táctica.</p>
            </div>

            <div className="bg-slate-950/90 border border-slate-900 p-5 rounded-2xl space-y-2">
              <span className="text-red-400 font-bold tracking-widest font-mono text-[10px] block">FALTA DE DINAMISMO</span>
              <h4 className="font-extrabold text-white">Desconexión Teórica</h4>
              <p className="text-slate-400 text-xs">Miras jugadas maravillosas del 4-0 de selecciones profesionales pero tu equipo no logra plasmarlo bajo presión ni en inferioridad numérica.</p>
            </div>

            <div className="bg-slate-950/90 border border-slate-900 p-5 rounded-2xl space-y-2">
              <span className="text-red-400 font-bold tracking-widest font-mono text-[10px] block">PÉRDIDA DE EFECTIVIDAD</span>
              <h4 className="font-extrabold text-white">Bajo Ritmo de Juego</h4>
              <p className="text-slate-400 text-xs">El equipo entrena lento, por lo que juega lento en los minutos finales del partido cuando la fatiga física y mental se hace notar.</p>
            </div>
          </div>
        </div>

        {/* ================= THE SOLUTION SECTION ================= */}
        <div className="bg-gradient-to-br from-orange-950/20 via-slate-950/80 to-orange-950/20 border border-orange-900/30 rounded-3xl p-6 sm:p-8 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold font-mono text-orange-400 uppercase tracking-widest block">LA SOLUCIÓN PROFESIONAL</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">Biblioteca Profesional de Entrenamientos</h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Ejercicios prácticos de fútbol listos para aplicar que conectan perfectamente la teoría de la pizarra con la acción real de la cancha.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-2">
              <div className="h-8 w-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 font-black text-xs font-mono">98</div>
              <h4 className="font-black text-white text-xs sm:text-sm uppercase tracking-tight">Sesiones Profesionales</h4>
              <p className="text-slate-400 text-xs leading-relaxed">Fichas descriptivas diseñadas para asimilación táctica fluida y rápida.</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-2">
              <div className="h-8 w-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400"><Check className="h-4 w-4" /></div>
              <h4 className="font-black text-white text-xs sm:text-sm uppercase tracking-tight">Listos para Aplicar</h4>
              <p className="text-slate-400 text-xs leading-relaxed">Solo abre en tu móvil, marca las dimensiones en la cancha y dirige.</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-2">
              <div className="h-8 w-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400"><Layers className="h-4 w-4" /></div>
              <h4 className="font-black text-white text-xs sm:text-sm uppercase tracking-tight">Organización Élite</h4>
              <p className="text-slate-400 text-xs leading-relaxed">Desglosado por objetivos de juego para no perder tiempo de preparación.</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-850 space-y-2">
              <div className="h-8 w-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400"><Activity className="h-4 w-4" /></div>
              <h4 className="font-black text-white text-xs sm:text-sm uppercase tracking-tight">Resultados de Impacto</h4>
              <p className="text-slate-400 text-xs leading-relaxed">Tus jugadores entenderán los principios de rotación, presión y marca de inmediato.</p>
            </div>

          </div>
        </div>

        {/* ================= INTERACTIVE STRATEGY COURT PREVIEW ================= */}
        <div className="bg-slate-950 border border-slate-850 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Whiteboard controller */}
            <div className="col-span-1 md:col-span-5 space-y-4">
              <span className="inline-flex items-center space-x-1.5 bg-orange-400/10 text-orange-400 border border-orange-400/20 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
                🥅 SIMULADOR TÁCTICO INTEGRADO
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                Visualiza el Movimiento Antes de la Cancha
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                El manual desglosa las rotaciones mediante diagramas de campo exactos. Conoce cómo se estructuran las 4 fases de la jugada del sistema 3-1 presionando los botones de abajo.
              </p>

              {/* Steps control selectors */}
              <div className="space-y-1.5 pt-2">
                {tacticalPlays.map((play, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setTacticalStep(idx);
                      setIsPlaying(false);
                    }}
                    className={`w-full text-left p-3 rounded-xl border transition-all text-xs cursor-pointer flex items-center justify-between ${
                      tacticalStep === idx 
                        ? 'bg-orange-950/80 border-orange-500/50 text-white font-extrabold'
                        : 'bg-slate-900/40 border-slate-900 text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                    }`}
                  >
                    <span>{play.title}</span>
                    <ChevronRight className={`h-3 w-3 ${tacticalStep === idx ? 'text-orange-400' : 'text-slate-600'}`} />
                  </button>
                ))}
              </div>

              {/* Auto play switch */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest cursor-pointer transition-all flex items-center gap-1.5 ${
                    isPlaying 
                      ? 'bg-orange-500 text-slate-950 font-black' 
                      : 'bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <Play className={`h-3 w-3 ${isPlaying ? 'fill-slate-950' : ''}`} />
                  <span>{isPlaying ? 'Pausar Simulación' : 'Animar Jugada'}</span>
                </button>

                <button
                  onClick={() => setTacticalStep(0)}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-850 hover:bg-slate-800 text-slate-400 transition-colors"
                  title="Reiniciar"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>

            {/* Tactical Court Graphic Area */}
            <div className="col-span-1 md:col-span-7 bg-slate-950 p-4 rounded-2xl border border-slate-800 relative w-full max-w-xl mx-auto">
              
              {/* Internal court representation box */}
              <div className="relative w-full h-[280px] sm:h-[340px] rounded-xl bg-gradient-to-br from-slate-950 to-slate-900 border-2 border-dashed border-orange-900/50 overflow-hidden flex flex-col justify-between p-4">
                
                {/* Court markings */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                  {/* Center line */}
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-orange-500"></div>
                  {/* Center circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full border-2 border-orange-500"></div>
                  {/* Outer circle spot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-orange-500"></div>
                  
                  {/* Penalty area Top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-24 w-40 rounded-b-full border-b-2 border-x-2 border-orange-500"></div>
                  {/* Penalty area Bottom */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-24 w-40 rounded-t-full border-t-2 border-x-2 border-orange-500"></div>
                  {/* Penalty spots */}
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-orange-400"></div>
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-orange-400"></div>
                </div>

                {/* Tactical Active Players Nodes */}
                <div className="absolute inset-0 z-10">
                  
                  {/* Player Cierre */}
                  <div 
                    style={{ left: tacticalPlays[tacticalStep].c.x, top: tacticalPlays[tacticalStep].c.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-orange-600 border border-orange-400 flex items-center justify-center text-[10px] font-black text-white shadow-lg transition-all duration-700 ease-out"
                  >
                    C
                  </div>

                  {/* Player Ala Izquierda */}
                  <div 
                    style={{ left: tacticalPlays[tacticalStep].ai.x, top: tacticalPlays[tacticalStep].ai.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-orange-600 border border-orange-400 flex items-center justify-center text-[10px] font-black text-white shadow-lg transition-all duration-700 ease-out"
                  >
                    AI
                  </div>

                  {/* Player Ala Derecha */}
                  <div 
                    style={{ left: tacticalPlays[tacticalStep].ad.x, top: tacticalPlays[tacticalStep].ad.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-orange-600 border border-orange-400 flex items-center justify-center text-[10px] font-black text-white shadow-lg transition-all duration-700 ease-out"
                  >
                    AD
                  </div>

                  {/* Player Pívot */}
                  <div 
                    style={{ left: tacticalPlays[tacticalStep].p.x, top: tacticalPlays[tacticalStep].p.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-orange-600 border border-orange-400 flex items-center justify-center text-[10px] font-black text-white shadow-lg transition-all duration-700 ease-out"
                  >
                    P
                  </div>

                  {/* Defensive Opponents represented as Triangles */}
                  <div className="absolute top-[35%] left-[40%] -translate-x-1/2 -translate-y-1/2 h-0 w-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-red-500 opacity-60"></div>
                  <div className="absolute top-[45%] left-[65%] -translate-x-1/2 -translate-y-1/2 h-0 w-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-red-500 opacity-60"></div>
                  <div className="absolute top-[68%] left-[45%] -translate-x-1/2 -translate-y-1/2 h-0 w-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-red-500 opacity-60"></div>

                  {/* Tactical Soccer Ball */}
                  <div 
                    style={{ left: tacticalPlays[tacticalStep].ball.x, top: tacticalPlays[tacticalStep].ball.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-amber-400 border border-slate-900 shadow-md flex items-center justify-center text-[5px] transition-all duration-700 ease-out animate-spin"
                  >
                    ⚽
                  </div>
                </div>

                {/* Play info box inside the court */}
                <div className="mt-auto bg-slate-950/95 border border-slate-850 p-3 rounded-lg relative z-20 space-y-1">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">{tacticalPlays[tacticalStep].title}</h4>
                  <p className="text-[10px] sm:text-xs text-slate-300 leading-normal">{tacticalPlays[tacticalStep].desc}</p>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ================= BENEFITS SECTION ================= */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold font-mono text-orange-400 uppercase tracking-widest block">BENEFICIOS EXTRAORDINARIOS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">Mejora el Rendimiento del Equipo</h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
              Implementar estas sesiones estructuradas te otorgará beneficios directos tanto en tu reputación como entrenador como en el marcador de tus partidos dominicales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs sm:text-sm">
            
            <div className="bg-slate-950 border border-slate-850 p-5 rounded-2xl space-y-2 text-center">
              <div className="h-8 w-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mx-auto font-bold font-mono">1</div>
              <h4 className="font-extrabold text-white">Ahorra Horas de Planificación</h4>
              <p className="text-slate-400 text-xs leading-relaxed">No pierdas tiempo pensando qué hacer. Solo escoge la sesión preestablecida y aplícala.</p>
            </div>

            <div className="bg-slate-950 border border-slate-850 p-5 rounded-2xl space-y-2 text-center">
              <div className="h-8 w-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mx-auto font-bold font-mono">2</div>
              <h4 className="font-extrabold text-white">Comprensión Táctica Superior</h4>
              <p className="text-slate-400 text-xs leading-relaxed">Tus jugadores desarrollarán una asimilación intuitiva de los desmarques y rotaciones.</p>
            </div>

            <div className="bg-slate-950 border border-slate-850 p-5 rounded-2xl space-y-2 text-center">
              <div className="h-8 w-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mx-auto font-bold font-mono">3</div>
              <h4 className="font-extrabold text-white">Variabilidad de Ejercicios</h4>
              <p className="text-slate-400 text-xs leading-relaxed">Mantén alta la motivación del grupo con dinámicas totalmente variadas e integradas.</p>
            </div>

            <div className="bg-slate-950 border border-slate-850 p-5 rounded-2xl space-y-2 text-center">
              <div className="h-8 w-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mx-auto font-bold font-mono">4</div>
              <h4 className="font-extrabold text-white">Aumento del Rendimiento</h4>
              <p className="text-slate-400 text-xs leading-relaxed">Toma el control del partido mediante salidas limpias de presión y presión agresiva alta.</p>
            </div>

          </div>
        </div>

        {/* ================= LO QUE RECIBES (WHAT YOU GET) ================= */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold font-mono text-orange-400 uppercase tracking-widest block">CONTENIDO DETALLADO</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">¿Qué Recibes Exactamente con Tu Biblioteca?</h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
              Un desglose táctico diseñado quirúrgicamente para darte todos los recursos prácticos necesarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {libraryContents.map((content, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-850 p-6 rounded-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                  <h3 className="text-base sm:text-lg font-black text-white uppercase">{content.title}</h3>
                  <span className="text-[10px] bg-orange-500/10 border border-orange-500/30 text-orange-400 px-2.5 py-0.5 rounded font-mono font-bold uppercase tracking-wider">{content.badge}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{content.desc}</p>
                <ul className="space-y-2 text-xs">
                  {content.details.map((det, dIdx) => (
                    <li key={dIdx} className="flex items-center space-x-2 text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0"></span>
                      <span>{det}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SPECIAL SINGLE OPPORTUNITY PRICE BLOCK ================= */}
        <div id="oferta-exclusiva" className="bg-gradient-to-br from-orange-950 via-slate-950 to-orange-950 border-2 border-orange-500 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl space-y-6">
          
          {/* Subtle decoration elements */}
          <div className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-full bg-orange-400/5 blur-3xl pointer-events-none"></div>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 bg-orange-500 text-slate-950 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest animate-pulse mx-auto">
              🔥 DESCUENTO ÚNICO ADICIONAL DEL 90%
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none uppercase">
              Consigue la Biblioteca Completa Ahora
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Esta oferta especial con descuento de lanzamiento solo está disponible en esta página y desaparecerá de forma permanente cuando la cierres.
            </p>
          </div>

          {/* Pricing container */}
          <div className="max-w-md mx-auto py-6 border-y-2 border-white/5 space-y-4">
            
            {/* Price anchors */}
            <div className="flex items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-slate-400">
              <span className="text-slate-400 flex items-center gap-1">Valor Oficial: <span className="line-through text-red-400 font-extrabold">$97.00 USD</span></span>
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono font-bold uppercase text-[10px] tracking-wider animate-pulse">
                Ahorras $91.10
              </span>
            </div>

            {/* Price Callout */}
            <div className="flex items-baseline justify-center">
              <span className="text-6xl sm:text-7xl font-black text-orange-400 tracking-tight drop-shadow-sm animate-pulse">
                $5.90
              </span>
              <span className="text-xl font-bold text-orange-500 ml-1.5 font-mono">
                USD
              </span>
            </div>

            <p className="text-[10px] text-slate-500 leading-tight font-mono">
              PAGO ÚNICO • ACCESO DIGITAL COMPLETO • DESCARGA DE INMEDIATO
            </p>
          </div>

          {/* Checkout & reject buttons */}
          <div className="max-w-xl mx-auto space-y-4">
            <a
              href="https://pay.hotmart.com/D106487063G?off=4ovfomq3"
              className="w-full flex items-center justify-center py-4.5 rounded-xl bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 text-white font-black text-sm sm:text-base tracking-widest uppercase hover:brightness-110 active:scale-[0.99] transition-all shadow-xl shadow-orange-600/10 cursor-pointer transform duration-150 animate-pulse border border-orange-500/30 text-center"
            >
              <span>Sí, Quiero Mi Biblioteca Profesional Ahora</span>
            </a>

            <button
              onClick={onDecline}
              className="text-xs text-slate-500 hover:text-slate-300 underline font-medium cursor-pointer transition-colors block mx-auto py-1"
            >
              No, gracias. Prefiero ignorar esta biblioteca táctica de ejercicios de fútbol y continuar con mi compra básica.
            </button>
          </div>

          {/* SSL and security indicators */}
          <div className="flex justify-center items-center gap-6 text-[10px] font-mono text-slate-500 uppercase tracking-widest pt-4">
            <span className="flex items-center gap-1">🔒 Conexión SSL</span>
            <span className="flex items-center gap-1">🛡️ Garantía de 7 días</span>
            <span className="flex items-center gap-1">⚡ Acceso Inmediato</span>
          </div>

        </div>

      </div>
    </div>
  );
}
