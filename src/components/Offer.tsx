import React, { useState, useEffect } from 'react';
import { PLANS_DATA } from '../copywritingData';
import { Check, Flame, Clock, Sparkles } from 'lucide-react';

export default function Offer({ onPurchase }: { onPurchase?: () => void }) {
  // 30 minutes in seconds = 1800
  const [timeLeft, setTimeLeft] = useState(1800);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  // Timer Countdown Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Reset to 30 mins for continuous demo urgency (standard marketing pattern)
          return 1800;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePurchase = (url: string) => {
    if (onPurchase) {
      onPurchase();
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <section id="special-offers-section" className="bg-white py-10 md:py-14 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
      {/* Background spot */}
      <div className="absolute right-10 bottom-10 -z-10 h-[300px] w-[300px] rounded-full bg-orange-500/5 blur-[80px]"></div>

      <div className="mx-auto max-w-6xl">
        
        {/* Urgent Timer Banner */}
        <div className="mx-auto max-w-3xl mb-10 text-center px-4">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-red-600 border-2 border-red-700 px-4 py-2.5 sm:px-6 sm:py-3 rounded-2xl mb-4 shadow-lg shadow-red-600/20 animate-pulse">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white flex-shrink-0" />
            <span className="text-xs sm:text-sm font-black text-white uppercase tracking-wider font-mono text-center">
              ¡ATENCIÓN! ESTA OFERTA EXPIRA EN: {formatTime(timeLeft)}
            </span>
          </div>
          
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl tracking-tight">
            ¡Elige hoy mismo el plan de entrenamiento más completo del mercado!
          </h2>

        </div>

        {/* Plan Comparison Grid */}
        <div className="max-w-xl mx-auto">
          
          {/* PLAN PREMIUM - Refactored to premium border with elegant light background */}
          <div className="bg-white border-2 border-orange-500 rounded-3xl p-8 flex flex-col justify-between shadow-lg relative transition-all duration-300 hover:scale-[1.01]">
            {/* Best Value Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-black uppercase tracking-widest px-6 py-1.5 rounded-full shadow-lg border border-orange-400 flex items-center justify-center text-center whitespace-nowrap">
              <span className="w-full text-center">{PLANS_DATA.premium.badge}</span>
            </div>

            <div className="space-y-6 mt-2">
              <div className="text-center">
                <h3 className="text-2xl font-black text-orange-600 mt-1">{PLANS_DATA.premium.name}</h3>
                <p className="text-xs text-orange-700 mt-1">Producto principal + 5 bonificaciones tácticas exclusivas</p>
                <div className="mt-4 flex justify-center">
                  <img 
                    src="https://i.ibb.co/6c21ZfyC/Chat-GPT-Image-17-de-jun-de-2026-10-01-30.png" 
                    alt="Producto principal + 5 bonificaciones tácticas"
                    className="rounded-2xl max-w-full h-auto border border-slate-100 shadow-md max-h-[300px] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Benefits Checklist */}
              <ul className="space-y-3.5 text-sm text-slate-800">
                {PLANS_DATA.premium.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="font-extrabold text-slate-900">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA & Price */}
            <div className="pt-8 space-y-5">
              {/* Price */}
              <div className="flex flex-col items-center justify-center py-5 border-y-2 border-orange-500/10 space-y-2">
                {/* Original Price & Discount Info */}
                <div className="flex items-center justify-center gap-2.5">
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-400">
                    <span>Antes</span>
                    <span className="font-extrabold text-red-500 line-through">$155.00 USD</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-black text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-md uppercase tracking-wider leading-none">
                    90% Dto.
                  </span>
                </div>

                {/* Main Price */}
                <div className="flex items-baseline justify-center">
                  <span className="text-6xl sm:text-7xl font-black text-orange-600 tracking-tight drop-shadow-sm">
                    $6.90
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold text-orange-500 ml-1.5 font-sans">
                    USD
                  </span>
                </div>

                {/* Currency disclaimer */}
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  (Puede pagar en su moneda local)
                </span>
              </div>

              <button
                id="premium-plan-cta"
                onClick={() => handlePurchase("https://pay.hotmart.com/P106371037H?off=xm591rtn&checkoutMode=10")}
                className="w-full flex items-center justify-center space-x-3 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-sm tracking-widest uppercase hover:brightness-110 active:scale-[0.99] transition-all shadow-lg shadow-orange-500/10 cursor-pointer"
              >
                <span>{PLANS_DATA.premium.ctaText}</span>
              </button>
              <p className="text-center text-[11px] text-orange-600 mt-3 font-semibold">🔥 Oferta por tiempo limitado</p>
            </div>
          </div>

        </div>

        {/* Security Seals */}
        <div className="mt-16 flex flex-col items-center space-y-4">
          <p className="text-xs text-slate-400 tracking-wider font-mono uppercase">PASARELA DE PAGO COMPLETAMENTE SEGURA</p>
          <div className="flex flex-wrap gap-8 justify-center items-center text-slate-400">
            <span className="text-xs font-bold leading-none border border-slate-200 bg-slate-50 rounded px-2.5 py-1.5 flex items-center gap-1">💻 SSL SECURE</span>
            <span className="text-xs font-bold leading-none border border-slate-200 bg-slate-50 rounded px-2.5 py-1.5 flex items-center gap-1">🔒 COMPRA PROTEGIDA</span>
            <span className="text-xs font-bold leading-none border border-slate-200 bg-slate-50 rounded px-2.5 py-1.5 flex items-center gap-1">🤝 GARANTÍA DE SATISFACCIÓN</span>
          </div>
        </div>



        {/* ================= UPGRADE / DISCOUNT POPUP MODAL ================= */}
        {showUpgradeModal && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
            <div className="relative w-full max-w-[95%] sm:max-w-[480px] md:max-w-[550px] bg-white rounded-3xl border border-orange-500 shadow-2xl overflow-hidden my-auto transform transition-all duration-300 scale-100 animate-in fade-in zoom-in-95">
              
              {/* Badge/Header Section */}
              <div className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-500 text-white text-center py-5 px-5 sm:py-6 sm:px-8 relative">
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <button 
                    onClick={() => {
                      setShowUpgradeModal(false);
                    }}
                    className="text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                <span className="inline-flex items-center space-x-1.5 bg-white/20 px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest text-white mb-2">
                  <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-300 animate-pulse" />
                  <span>¡OFERTA DE ÚLTIMA HORA!</span>
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight leading-tight select-none">
                  ¡Sube al Plan Premium por solo $2.50 USD más!
                </h3>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 md:p-8 space-y-5">

                {/* Promo Price Bar */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-4 text-center shadow-sm">
                  <div className="text-[10px] sm:text-xs font-extrabold text-orange-600 uppercase tracking-widest mb-1">OFERTA DE ACTUALIZACIÓN</div>
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <span className="text-xs sm:text-sm font-semibold text-slate-400 line-through">Antes: $15.00 USD</span>
                    <span className="text-lg sm:text-2xl font-black text-orange-600">¡Tu Precio: $7.50 USD!</span>
                  </div>
                </div>

                {/* Bonus highlight list inside popup */}
                <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 sm:p-5">
                  <p className="text-xs sm:text-sm font-black text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 fill-orange-500" />
                    ¿Qué incluye tu Plan Premium?
                  </p>
                  <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold text-sm sm:text-base leading-none">✓</span>
                      <span className="font-semibold">Bono 1: 250 Actividades Sociomotrices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold text-sm sm:text-base leading-none">✓</span>
                      <span className="font-semibold">Bono 2: 100 Ejercicios de Velocidad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold text-sm sm:text-base leading-none">✓</span>
                      <span className="font-semibold">Bono 3: 51 Ejercicios de Fintas Élite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold text-sm sm:text-base leading-none">✓</span>
                      <span className="font-semibold">Bono 4: Manual de Dirección Técnica</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold text-sm sm:text-base leading-none">✓</span>
                      <span className="font-semibold">Bono 5: Nociones Prácticas sobre Prep. Física</span>
                    </li>
                  </ul>
                </div>

                {/* Buttons Container */}
                <div className="flex flex-col gap-3 pt-2">
                  <button
                    onClick={() => {
                      setShowUpgradeModal(false);
                      handlePurchase("https://pay.hotmart.com/P106371037H?off=cib9nlk1");
                    }}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-4 sm:py-4.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:brightness-110 active:scale-[0.98] transition-all text-white font-black text-xs sm:text-sm md:text-base tracking-wide uppercase shadow-lg cursor-pointer transform duration-150 animate-pulse"
                  >
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    <span>SÍ, ¡QUIERO EL PREMIUM POR $7.50 USD!</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowUpgradeModal(false);
                      handlePurchase("https://pay.hotmart.com/P106371037H?off=xm591rtn");
                    }}
                    className="w-full py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-extrabold text-xs tracking-wide uppercase transition-colors cursor-pointer text-center"
                  >
                    No, gracias. Continuar al Plan Básico ($5.00 USD)
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
