import React from 'react';
import { TESTIMONIALS_DATA } from '../copywritingData';
import { Star, MessageSquare } from 'lucide-react';

// Multiplied list to ensure seamless looping without visual gaps on wider displays
const MULTIPLIED_TESTIMONIALS = [
  ...TESTIMONIALS_DATA,
  ...TESTIMONIALS_DATA,
  ...TESTIMONIALS_DATA,
  ...TESTIMONIALS_DATA,
];

export default function Testimonials() {
  return (
    <section className="bg-white py-10 md:py-14 overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-black tracking-widest text-slate-700 uppercase bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
            VOCES DEL CAMPO
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Opinión de Otros Entrenadores
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Ellos ya dejaron de improvisar entrenamientos semanales. Descubre el cambio de rendimiento real en sus equipos.
          </p>
        </div>

        {/* Endless Marquee Sliding Showcase Parent */}
        <div className="relative w-full overflow-hidden py-4 select-none">
          {/* Edge Fades for beautiful visual transition */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-white via-white/40 to-transparent"></div>

          {/* Scrolling track */}
          <div className="flex w-max relative">
            <div className="animate-marquee gap-6 flex items-stretch hover:[animation-play-state:paused]">
              {MULTIPLIED_TESTIMONIALS.map((t, idx) => (
                <div
                  key={`${t.id}-${idx}`}
                  className="w-[280px] sm:w-[350px] md:w-[380px] bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-300 transition-all duration-300 transform hover:scale-[1.01] flex-shrink-0 flex flex-col justify-between relative"
                >
                  <div className="space-y-4">
                    {/* Gold Stars */}
                    <div className="flex items-center space-x-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-500" />
                      ))}
                    </div>

                    <blockquote className="text-slate-700 text-xs sm:text-sm leading-relaxed italic font-normal">
                      “{t.quote}”
                    </blockquote>
                  </div>

                  {/* Author Info */}
                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center space-x-3.5">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden bg-orange-100 border border-orange-200 flex items-center justify-center font-bold text-xs text-orange-700 tracking-wider">
                      {t.photoUrl ? (
                        <img 
                          src={t.photoUrl} 
                          alt={t.name} 
                          className="h-full w-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        t.avatar
                      )}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug truncate">{t.name}</h4>
                      <p className="text-[10px] sm:text-xs text-slate-500 truncate">{t.role} <span className="text-slate-350">•</span> {t.location}</p>
                      
                      {/* Highlight Result */}
                      <span className="inline-block mt-1.5 text-[9px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 leading-none">
                        {t.result}
                      </span>
                    </div>
                  </div>

                  {/* Message Icon Decorative overlay */}
                  <span className="absolute top-5 right-5 text-slate-200 pointer-events-none">
                    <MessageSquare className="h-6 w-6 stroke-[1.5]" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Elegant indicator caption */}
        <p className="text-center text-[10px] sm:text-xs text-slate-400 font-medium mt-4">
          👉 Pasa el cursor por encima para pausar y leer los testimonios.
        </p>

      </div>
    </section>
  );
}

