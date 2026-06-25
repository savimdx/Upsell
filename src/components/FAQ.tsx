import React, { useState } from 'react';
import { FAQ_DATA, HERO_COPY } from '../copywritingData';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const scrollToPremium = () => {
    const element = document.getElementById('premium-plan-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="bg-white py-10 md:py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black tracking-widest text-slate-700 uppercase bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
            DUDAS RESUELTAS
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Todo lo que necesitas saber sobre el material digital del pack para entrenadores de fútbol sala.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen 
                    ? 'bg-slate-50 border-orange-500/40 shadow-md' 
                    : 'bg-white border-slate-200 hover:bg-slate-50/50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start space-x-3 pr-4">
                    <span className="mt-1 flex-shrink-0 text-orange-605 text-orange-600">
                      <HelpCircle className="h-4 w-4" />
                    </span>
                    <span className="font-extrabold text-slate-950 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </span>
                  
                  {/* Rotating Chevron */}
                  <span className={`flex-shrink-0 p-1.5 rounded-lg bg-slate-100 text-slate-500 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-orange-600 bg-orange-100' : 'rotate-0'
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {/* Answer Area (Slide down text effect) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-64 border-t border-slate-200 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <p className="px-6 py-5 text-xs sm:text-sm text-slate-650 leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button below FAQ */}
        <div className="mt-10 md:mt-12 flex flex-col items-center w-full text-center space-y-4">
          <button
            onClick={scrollToPremium}
            className="group relative flex w-full sm:w-auto items-center justify-center space-x-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 px-8 py-4.5 text-base font-black uppercase text-white shadow-lg shadow-orange-600/20 transition-all hover:-translate-y-0.5 hover:shadow-orange-600/30 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 cursor-pointer"
          >
            <span>{HERO_COPY.ctaText}</span>
          </button>
          
          <div className="pt-2">
            <p className="text-xs sm:text-sm text-slate-550 text-slate-500 font-medium">
              ¿Tienes más dudas? Ponte en contacto con nuestro soporte en:
            </p>
            <span className="text-sm sm:text-base font-bold text-slate-700 mt-1 block">
              contacto@entrenamientodefutbolsala.com
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
