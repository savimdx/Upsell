import React from 'react';
import { BONUSES_COPY } from '../copywritingData';
import { Sparkles, Gift, Check, ArrowDownCircle } from 'lucide-react';

export default function Bonuses() {
  const scrollOffers = () => {
    const element = document.getElementById('special-offers-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate total values of bonuses as a value building hook
  const totalValue = BONUSES_COPY.reduce((acc, bonus) => acc + bonus.value, 0);

  return (
    <section className="bg-slate-50 py-10 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-200 relative overflow-hidden">
      {/* Decorative Radial glow with soft tone */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-[120px] -z-10"></div>

      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center space-x-1.5 text-xs font-black tracking-widest text-amber-800 uppercase bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200 shadow-inner">
            <Gift className="h-3.5 w-3.5 text-amber-600" />
            <span>REGALOS POR LANZAMIENTO</span>
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl tracking-tight">
            Bonos Exclusivos de la Promoción
          </h2>
        </div>

        {/* Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BONUSES_COPY.map((bonus, index) => (
            <div
              key={bonus.id}
              className="group relative bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-amber-500/35 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-md"
            >
              <div>
                {/* Image container */}
                <div className="w-full overflow-hidden rounded-xl mb-4 bg-slate-50 flex items-center justify-center p-3 min-h-[220px]">
                  <img 
                    src={bonus.image || "https://i.ibb.co/spmfyDSH/Chat-GPT-Image-17-de-jun-de-2026-12-04-32.png"} 
                    alt={bonus.title} 
                    className="max-w-full h-auto max-h-[300px] sm:max-h-[350px] mx-auto block object-contain hover:scale-[1.03] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Title and Description */}
                <div className="space-y-2 mt-4 mb-3">
                  <div className="flex items-start space-x-2">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold shrink-0">
                      {index + 1}
                    </span>
                    <h3 className="text-base font-black text-slate-800 leading-snug">
                      {bonus.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed pl-7">
                    {bonus.description}
                  </p>
                </div>
              </div>

              {/* Pricing breakdown for the specific bonus */}
              <div className="mt-2 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Valor original</span>
                  <span className="text-xs font-extrabold text-red-600 line-through">${bonus.value}</span>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] text-emerald-600 font-bold uppercase tracking-wider font-extrabold">Hoy para ti</span>
                  <span className="text-base font-black text-emerald-600 uppercase font-extrabold">¡GRATIS!</span>
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}
