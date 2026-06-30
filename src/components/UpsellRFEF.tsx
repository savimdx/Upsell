import React, { useState, useEffect, useRef } from 'react';
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

const previewImages = [
  "https://i.ibb.co/s98XHnxN/Screenshot-20260626-130203-Adobe-Acrobat.jpg",
  "https://i.ibb.co/FbbFn9Ft/Screenshot-20260626-130208-Adobe-Acrobat.jpg",
  "https://i.ibb.co/FbNbq0cV/Screenshot-20260626-130250-Adobe-Acrobat.jpg",
  "https://i.ibb.co/7drfv4kn/Screenshot-20260626-130419-Adobe-Acrobat.jpg"
];

export default function UpsellRFEF({ onAccept, onDecline }: UpsellRFEFProps) {
  const [selectedTopic, setSelectedModule] = useState(0);
  const [tacticalStep, setTacticalStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  // Auto-scrolling marquee with wrap-around support
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const scrollSpeed = 120; // speed of auto scrolling in pixels per second

    const step = (time: number) => {
      if (!isUserInteracting && !isDownRef.current) {
        const delta = (time - lastTime) / 1000;
        container.scrollLeft += scrollSpeed * delta;

        // Seamless wrap-around
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isUserInteracting]);

  const handleMouseEnter = () => {
    setIsUserInteracting(true);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDownRef.current = true;
    setIsUserInteracting(true);
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDownRef.current = false;
    setIsUserInteracting(false);
  };

  const handleMouseUp = () => {
    isDownRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDownRef.current) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Drag speed modifier
    container.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleTouchStart = () => {
    setIsUserInteracting(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsUserInteracting(false);
    }, 1200);
  };

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

  // Load Hotmart Sales Funnel script and initialize widget
  useEffect(() => {
    const scriptId = 'hotmart-checkout-elements-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    const initWidget = () => {
      if ((window as any).checkoutElements) {
        try {
          // Clear any existing contents just in case
          const container = document.getElementById('hotmart-sales-funnel');
          if (container) {
            container.innerHTML = '';
          }
          (window as any).checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
        } catch (err) {
          console.error("Error initializing Hotmart widget:", err);
        }
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
      script.async = true;
      script.onload = () => {
        initWidget();
      };
      document.body.appendChild(script);
    } else {
      // Script is already in DOM, check if checkoutElements exists and init
      if ((window as any).checkoutElements) {
        // Give a tiny timeout for DOM to render the container
        const timer = setTimeout(initWidget, 50);
        return () => clearTimeout(timer);
      } else {
        script.addEventListener('load', initWidget);
      }
    }

    return () => {
      if (script) {
        script.removeEventListener('load', initWidget);
      }
    };
  }, []);

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
                src="https://i.ibb.co/nHLxYF9/Chat-GPT-Image-25-de-jun-de-2026-12-56-09.png" 
                alt="Biblioteca Profesional de Entrenamientos de Fútbol Sala Mockup" 
                className="max-w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
            </div>

            <div className="text-center space-y-2 w-full flex flex-col items-center">
              <span className="text-[11px] text-orange-400 font-mono font-bold uppercase tracking-widest block">📘 SISTEMA DIGITAL INSTANTÁNEO</span>
            </div>
          </div>

          {/* Quick value features list */}
          <div className="col-span-1 md:col-span-7 space-y-5 text-center flex flex-col items-center justify-center">
            <h3 className="text-2xl font-black text-white tracking-tight uppercase">
              La Biblioteca Táctica Más Completa
            </h3>

            {/* Quick specifications list - stacked vertically, orange checks, larger text */}
            <div className="flex flex-col space-y-3.5 pt-3 w-full max-w-md">
              <div className="flex items-center justify-center space-x-3 text-base sm:text-lg text-slate-200 font-medium">
                <Check className="h-5.5 w-5.5 text-orange-500 flex-shrink-0" />
                <span>98 Ejercicios Prácticos</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-base sm:text-lg text-slate-200 font-medium">
                <Check className="h-5.5 w-5.5 text-orange-500 flex-shrink-0" />
                <span>Fórmula Ofensiva y Defensiva</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-base sm:text-lg text-slate-200 font-medium">
                <Check className="h-5.5 w-5.5 text-orange-500 flex-shrink-0" />
                <span>Transiciones y Contragolpe</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-base sm:text-lg text-slate-200 font-medium">
                <Check className="h-5.5 w-5.5 text-orange-500 flex-shrink-0" />
                <span>Entrenamiento Integrado</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-base sm:text-lg text-slate-200 font-medium">
                <Check className="h-5.5 w-5.5 text-orange-500 flex-shrink-0" />
                <span>Juegos Reducidos (Small-Sided)</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-base sm:text-lg text-slate-200 font-medium">
                <Check className="h-5.5 w-5.5 text-orange-500 flex-shrink-0" />
                <span>Sistemas 4-0 y 3-1 Pivot</span>
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

          {/* HOTMART - Sales Funnel Widget */}
          <div className="w-full flex justify-center py-4">
            <div id="hotmart-sales-funnel" className="w-full flex justify-center min-h-[80px]"></div>
          </div>

          {/* Checkout & reject buttons */}
          <div className="max-w-xl mx-auto space-y-6 flex flex-col items-center">
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
