import React from 'react';
import { WHAT_YOU_GET_COPY } from '../copywritingData';
import { Check, Dumbbell, Award, Target, HelpCircle, BookOpen, Clock, CalendarDays, RefreshCw } from 'lucide-react';

export default function WhatYouGet() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Dumbbell className="h-6 w-6 text-orange-600" />;
      case 1: return <Target className="h-6 w-6 text-amber-600" />;
      case 2: return <Award className="h-6 w-6 text-orange-600" />;
      case 3: return <BookOpen className="h-6 w-6 text-emerald-600" />;
      case 4: return <Clock className="h-6 w-6 text-orange-600" />;
      case 5: return <CalendarDays className="h-6 w-6 text-emerald-600" />;
      case 6: return <RefreshCw className="h-6 w-6 text-amber-700" />;
      default: return <Check className="h-6 w-6 text-orange-600" />;
    }
  };

  return (
    <section className="bg-slate-50 py-10 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-100">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black tracking-widest text-orange-700 uppercase bg-orange-100 px-3.5 py-1.5 rounded-full border border-orange-200">
            CONTENIDO COMPLETO
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl tracking-tight">
            {WHAT_YOU_GET_COPY.title}
          </h2>
          <p className="mt-4 text-base text-slate-600">
            {WHAT_YOU_GET_COPY.subtitle}
          </p>
        </div>

        {/* Bento/Grid Layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_YOU_GET_COPY.items.map((item, index) => {
            const isMain = index === 0; // Highlight the main +1000 sesiones pack
            return (
              <div
                key={index}
                className={`group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                  isMain
                    ? 'col-span-1 sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-orange-50 to-amber-50/60 border-orange-200'
                    : 'bg-white hover:bg-slate-50/50 border-slate-200/90'
                } border shadow-md`}
              >
                {/* Accent line on top of card */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl ${
                  isMain ? 'bg-gradient-to-r from-orange-500 to-amber-500' : 'bg-slate-200 group-hover:bg-orange-500/50'
                } transition-colors duration-300`} />

                <div className="flex items-center justify-between mb-4 mt-2">
                  <div className={`p-3 rounded-xl ${
                    isMain ? 'bg-orange-100' : 'bg-slate-100'
                  }`}>
                    {getIcon(index)}
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    isMain 
                      ? 'bg-orange-600 text-white font-bold' 
                      : 'bg-slate-200 text-slate-700'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-2 group-hover:text-orange-650 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Decorative checkmark in corner */}
                <span className="absolute bottom-4 right-4 text-emerald-600 opacity-25 group-hover:opacity-100 transition-opacity">
                  <Check className="h-5 w-5 stroke-[3]" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
