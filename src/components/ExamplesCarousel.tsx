import React, { useState } from 'react';
import { EXAMPLE_EXERCISES_DATA } from '../copywritingData';
import CourtDiagram from './CourtDiagram';
import { ChevronLeft, ChevronRight, CheckCircle, Info, Compass, HelpCircle } from 'lucide-react';

export default function ExamplesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? EXAMPLE_EXERCISES_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === EXAMPLE_EXERCISES_DATA.length - 1 ? 0 : prev + 1));
  };

  const setSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const activeExercise = EXAMPLE_EXERCISES_DATA[currentIndex];

  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-200">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black tracking-widest text-slate-700 uppercase bg-slate-200 px-3.5 py-1.5 rounded-full border border-slate-300">
            PREVISTA DEL CONTENIDO
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Así es el Material por Dentro
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Explora las diferentes fases de entrenamiento que encontrarás en nuestra biblioteca digital. Diseñado de forma práctica y visual para entendimiento inmediato en la cancha.
          </p>
        </div>

        {/* Carousel Deck Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl relative max-w-5xl mx-auto">
          
          {/* Quick Choice Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 pb-4 border-b border-slate-100">
            {EXAMPLE_EXERCISES_DATA.map((ex, idx) => (
              <button
                key={ex.id}
                onClick={() => setSlide(idx)}
                className={`text-xs px-4 py-2.5 rounded-xl font-bold transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-650 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {ex.id}. {ex.phase.split('.')[1] || ex.phase}
              </button>
            ))}
          </div>

          {/* Slide Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Board Diagram */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block font-mono">
                REPRESENTACIÓN GRÁFICA INCLUIDA
              </span>
              
              <CourtDiagram type={activeExercise.visualType} />
              
              <p className="text-center text-xs text-slate-500 italic">
                Pizarra táctica digital del ejercicio. Diseños limpios, legibles e imprimibles en alta resolución.
              </p>
            </div>

            {/* Explanatory Texts */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div>
                <span className="text-xs font-black text-orange-605 text-orange-600 uppercase tracking-widest block font-mono">
                  {activeExercise.phase}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1 leading-tight">
                  {activeExercise.title}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {activeExercise.description}
              </p>

              {/* Setup box */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest font-mono flex items-center gap-1">
                  <Compass className="h-3 w-3 text-orange-600" />
                  <span>ORGANIZACIÓN DE LA CANCHA:</span>
                </span>
                <p className="text-xs text-slate-700 leading-normal font-normal">
                  {activeExercise.setup}
                </p>
              </div>

              {/* Step instructions */}
              <div className="space-y-1.5">
                <span className="text-[10px] text-[#475569] font-black uppercase tracking-widest font-mono">
                  INTRUCCIONES OBLIGATORIAS:
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {activeExercise.instructions}
                </p>
              </div>

              {/* Coaching specific points */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest font-mono block">
                  💡 PUNTOS CLAVE PARA EJECUTAR (COACHING POINTS):
                </span>
                <ul className="space-y-1.5 text-xs text-slate-650">
                  {activeExercise.coachingPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Left / Right Arrows navigation overlays */}
          <div className="flex justify-between items-center mt-10 pt-4 border-t border-slate-100">
            <button
              onClick={prevSlide}
              className="p-3 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-800 rounded-xl transition cursor-pointer"
              aria-label="Anterior ejercicio"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <span className="text-xs text-slate-500 font-mono font-bold">
              {currentIndex + 1} / {EXAMPLE_EXERCISES_DATA.length}
            </span>

            <button
              onClick={nextSlide}
              className="p-3 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-800 rounded-xl transition cursor-pointer"
              aria-label="Siguiente ejercicio"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
