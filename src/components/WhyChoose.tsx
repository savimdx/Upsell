import React from 'react';
import { WHY_CHOOSE_COPY } from '../copywritingData';
import { Clock, Sparkles, Activity, ClipboardCheck, Flame, Compass, TrendingUp, Trophy, ChevronRight } from 'lucide-react';

export default function WhyChoose() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock': return <Clock className="h-6 w-6 text-orange-600" />;
      case 'Sparkles': return <Sparkles className="h-6 w-6 text-amber-500" />;
      case 'Activity': return <Activity className="h-6 w-6 text-emerald-600" />;
      case 'ClipboardCheck': return <ClipboardCheck className="h-6 w-6 text-sky-600" />;
      case 'Flame': return <Flame className="h-6 w-6 text-red-500" />;
      case 'Compass': return <Compass className="h-6 w-6 text-indigo-600" />;
      case 'TrendingUp': return <TrendingUp className="h-6 w-6 text-amber-600" />;
      default: return <Trophy className="h-6 w-6 text-orange-600" />;
    }
  };

  return (
    <section className="bg-white py-10 md:py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Main Benefits Content */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-black tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              MÉTODO COMPROBADO
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight leading-tight">
              {WHY_CHOOSE_COPY.title}
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base">
              {WHY_CHOOSE_COPY.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {WHY_CHOOSE_COPY.benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group flex gap-4 p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300"
              >
                <div className="flex-shrink-0 flex items-center justify-center p-3 h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 group-hover:border-orange-200 group-hover:bg-slate-100/80 transition-all duration-300">
                  {getIcon(benefit.iconName)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-650 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
