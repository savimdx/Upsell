import React from 'react';
import { Eye, Sparkles } from 'lucide-react';

const SAMPLES = [
  {
    url: 'https://i.ibb.co/0jfbGY12/Screenshot-20260617-112651-Drive.jpg',
    alt: 'Muestra de Sesión de Entrenamiento - Parte 1',
  },
  {
    url: 'https://i.ibb.co/qL73Jr82/Screenshot-20260617-112740-Drive.jpg',
    alt: 'Muestra de Sesión de Entrenamiento - Parte 2',
  },
  {
    url: 'https://i.ibb.co/5hmtkKQc/Screenshot-20260617-112813-Drive.jpg',
    alt: 'Muestra de Sesión de Entrenamiento - Parte 3',
  },
  {
    url: 'https://i.ibb.co/dwp170Fg/Screenshot-20260617-112916-Drive.jpg',
    alt: 'Muestra de Sesión de Entrenamiento - Parte 4',
  },
];

// Combine more copies of samples for a seamless looping on extra wide desktop displays
const MULTIPLIED_SAMPLES = [...SAMPLES, ...SAMPLES, ...SAMPLES, ...SAMPLES];

export default function ProductSamples() {
  return (
    <section className="bg-white py-10 md:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center space-x-1.5 text-xs font-black tracking-widest text-orange-700 uppercase bg-orange-100 px-3.5 py-1.5 rounded-full border border-orange-200">
            <Eye className="h-3.5 w-3.5 text-orange-600" />
            <span>MUESTRA DEL PRODUCTO</span>
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">
            Echa un Vistazo por <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">Dentro del Material</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Visualiza en primicia la calidad excepcional, la maquetación profesional y el contenido detallado de las sesiones que transformarán tus entrenamientos.
          </p>
        </div>

        {/* Endless Marquee Sliding Showcase Parent */}
        <div className="relative w-full overflow-hidden py-4 select-none">
          {/* Edge Fades for beautiful visual transition */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent"></div>

          {/* Scrolling track */}
          <div className="flex w-max relative">
            <div className="animate-marquee gap-6 flex items-center hover:[animation-play-state:paused]">
              {MULTIPLIED_SAMPLES.map((sample, idx) => (
                <div 
                  key={idx} 
                  className="w-[220px] sm:w-[280px] md:w-[310px] bg-slate-50 rounded-2xl p-2 sm:p-2.5 border border-slate-200 shadow-md hover:shadow-xl hover:border-orange-300 transition-all duration-300 transform hover:scale-[1.02] flex-shrink-0"
                >
                  <div className="relative rounded-xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center">
                    <img 
                      src={sample.url} 
                      alt={sample.alt} 
                      className="w-full h-auto object-contain block"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 right-2 text-[10px] sm:text-xs font-black bg-slate-950/80 text-white px-2 py-0.5 rounded-full flex items-center space-x-1 backdrop-blur-xs">
                      <Sparkles className="h-3 w-3 text-amber-400" />
                      <span>Premio</span>
                    </div>
                  </div>
                  <p className="mt-2 text-center text-xs text-slate-500 font-semibold tracking-wide truncate px-1">
                    {sample.alt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Elegant disclaimer label below scrolling images */}
        <p className="text-center text-[11px] sm:text-xs text-slate-400 font-medium mt-6">
          👉 Pasa el cursor por encima para pausar la vista previa interactiva.
        </p>

      </div>
    </section>
  );
}
