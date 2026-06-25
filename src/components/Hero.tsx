import React from 'react';
import { HERO_COPY } from '../copywritingData';
import { ShieldCheck, CloudDownload, Award, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 pt-8 pb-10 md:pt-14 md:pb-12 border-b border-slate-100">
      {/* Background gradients for sporty high-tech feel with light color scheme */}
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[120px]"></div>
      <div className="absolute left-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[100px]"></div>

      {/* Sport Field Grid overlay */}
      <div className="absolute inset-0 -z-25 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Text content (AIDA - Attention & Benefit) */}
          <div className="space-y-6 flex flex-col items-center w-full">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
              +1000 Sesiones de Entrenamiento de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Fútbol Sala</span> Listas para Aplicar
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
              {HERO_COPY.subTitle}
            </p>

            {/* Image requested beneath the block */}
            <div className="w-full max-w-2xl my-4 overflow-hidden rounded-xl border border-slate-100 shadow-md">
              <img 
                src="https://i.ibb.co/fsyRm4K/Chat-GPT-Image-17-de-jun-de-2026-10-01-30.png" 
                alt="Chat-GPT-Image-17-de-jun-de-2026-10-01-30" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
 
            {/* Direct Benefit Badges - Adapted for White Theme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 w-full max-w-lg">
              <div className="flex items-center space-x-2 text-sm text-slate-700 justify-center">
                <CloudDownload className="h-4.5 w-4.5 text-emerald-600 flex-shrink-0" />
                <span>Acceso Inmediato</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-700 justify-center">
                <Award className="h-4.5 w-4.5 text-emerald-600 flex-shrink-0" />
                <span>Planificaciones listas de 5 min</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-700 justify-center">
                <ShieldCheck className="h-4.5 w-4.5 text-emerald-600 flex-shrink-0" />
                <span>Garantía de Satisfacción 100%</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-700 justify-center">
                <Lock className="h-4.5 w-4.5 text-emerald-600 flex-shrink-0" />
                <span>Pago seguro cifrado SSL</span>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
}
