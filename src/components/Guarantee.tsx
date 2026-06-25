import React from 'react';
import { ShieldCheck, Award, MessageCircle } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="bg-white py-10 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-200 relative">
      <div className="mx-auto max-w-4xl bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
        
        {/* Glow behind guarantee seal */}
        <div className="absolute right-0 bottom-0 h-64 w-64 bg-emerald-550/5 rounded-full blur-[80px]"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Circular Seal badge */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative flex items-center justify-center">
              {/* Outer rotating/pulsing ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-emerald-500/30 animate-spin [animation-duration:40s]"></div>
              
              <div className="relative h-32 w-32 rounded-full bg-white border-4 border-emerald-500 flex flex-col justify-center items-center p-3 text-center shadow-lg shadow-emerald-500/10">
                <ShieldCheck className="h-10 w-10 text-emerald-600 mb-1" />
                <span className="text-[10px] font-black leading-none text-slate-800 tracking-widest uppercase font-mono">
                  7 DÍAS
                </span>
                <span className="text-[8px] font-bold leading-none text-emerald-600 uppercase tracking-tight mt-0.5">
                  SIN RIESGOS
                </span>
              </div>
            </div>
          </div>

          {/* Texts (No friction block) */}
          <div className="md:col-span-8 text-center md:text-left space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Pruébalo Sin Riesgo
            </h2>
            
            <p className="text-sm text-slate-650 leading-relaxed font-normal">
              Queremos que experimentes la biblioteca de fútbol sala con total tranquilidad. Adquiere el pack hoy mismo y utilízalo directamente en la cancha por un plazo de <span className="text-orange-600 font-extrabold">7 días enteros</span>.
            </p>
            
            <p className="text-sm text-slate-500 leading-relaxed font-normal">
              Si luego de revisarlo sientes que las sesiones no te ayudan a ahorrar tiempo de planificación o que no aportan el nivel dinámico que necesitas, escríbenos un único correo electrónico de inmediato. Te reembolsaremos el <span className="text-slate-900 font-extrabold">100% de tu dinero</span> sin preguntas complejas, sin trabas y sin condiciones. El control total es tuyo.
            </p>


          </div>

        </div>

      </div>
    </section>
  );
}
