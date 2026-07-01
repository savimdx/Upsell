/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import WhatYouGet from './components/WhatYouGet';
import WhyChoose from './components/WhyChoose';
import Bonuses from './components/Bonuses';
import ProductSamples from './components/ProductSamples';
import Offer from './components/Offer';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SalesNotification from './components/SalesNotification';
import UpsellRFEF from './components/UpsellRFEF';
import { Clock, CheckCircle2, Download, ShoppingCart, Sparkles, BookOpen, ChevronRight, HelpCircle } from 'lucide-react';

export default function App() {
  const [timeLeftSticky, setTimeLeftSticky] = useState(1800); // 30 mins matching the Offer timer
  const [viewMode, setViewMode] = useState<'upsell' | 'thankyou_accepted' | 'thankyou_declined'>('upsell');


  // Shared countdown ticking sync
  useEffect(() => {
    document.title = "Entrenamientos de Fútbol";
    const timer = setInterval(() => {
      setTimeLeftSticky((prev) => {
        if (prev <= 1) {
          return 1800;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatStickyTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Scroll to top helper when state changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [viewMode]);

  return (
    <div className="relative min-h-screen bg-slate-900 text-slate-100 antialiased overflow-x-hidden selection:bg-orange-500 selection:text-slate-950">
      
      {/* Dynamic top-left small sales notifications */}
      <SalesNotification />

      {/* ================= CONDITIONAL FUNNEL PAGE RENDERING ================= */}

      {viewMode === 'upsell' && (
        <UpsellRFEF 
          onAccept={() => setViewMode('thankyou_accepted')}
          onDecline={() => setViewMode('thankyou_declined')}
        />
      )}

      {(viewMode === 'thankyou_accepted' || viewMode === 'thankyou_declined') && (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 relative">
          
          {/* Soccer field decoration overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>

          <div className="max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative z-10 text-center space-y-8">
            
            {/* Header Success Checkmark */}
            <div className="flex flex-col items-center space-y-3">
              <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block">
                {viewMode === 'thankyou_accepted' ? '¡COMPRA COMPLETA CON UPSELL!' : '¡COMPRA COMPLETADA CON ÉXITO!'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                ¡Gracias por tu confianza!
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Hemos enviado las credenciales de acceso y tu manual digital directamente a tu bandeja de correo electrónico.
              </p>
            </div>

            {/* Order Summary receipt card */}
            <div className="bg-slate-950/60 border border-slate-850 rounded-2xl p-5 text-left space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-850 pb-2.5 flex items-center justify-between">
                <span>Resumen de tu Pedido</span>
                <span className="text-amber-400 font-mono text-[10px]">CÓD: RFEF-77291B</span>
              </p>
                            <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex justify-between items-center text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>Megapack +1000 Sesiones de Fútbol Sala</span>
                  </div>
                  <span className="font-bold font-mono text-slate-400">$6.90 USD</span>
                </li>

                {viewMode === 'thankyou_accepted' ? (
                  <li className="flex justify-between items-center text-amber-300 bg-amber-500/5 border border-amber-500/20 p-2.5 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-amber-400 flex-shrink-0 animate-pulse" />
                      <span className="font-bold">98 Sesiones de Entrenamiento de la Selección Española Campeona del Mundo 2010</span>
                    </div>
                    <span className="font-black font-mono text-amber-300">$5.90 USD</span>
                  </li>
                ) : (
                  <li className="flex justify-between items-center text-slate-500 italic p-1 border-t border-slate-850/60 pt-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600">✕</span>
                      <span>98 Sesiones de Entrenamiento de la Selección Española Campeona del Mundo 2010</span>
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-slate-600">Rechazado</span>
                  </li>
                )}
              </ul>

              <div className="border-t border-slate-850 pt-3 flex justify-between items-center font-bold text-white text-sm sm:text-base">
                <span>Total Cargado:</span>
                <span className="font-mono text-amber-400 text-lg sm:text-xl">
                  {viewMode === 'thankyou_accepted' ? '$12.80 USD' : '$6.90 USD'}
                </span>
              </div>
            </div>

            {/* Simulated Downloads Block */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base text-amber-400 font-black uppercase tracking-wider bg-amber-500/10 py-2.5 px-4 rounded-xl border border-amber-500/20 inline-block">
                📥 ACCESO DE DESCARGA INSTANTÁNEO
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {viewMode === 'thankyou_accepted' && (
                  <button 
                    onClick={() => alert("Simulación de Descarga: El Manual Oficial RFEF se ha descargado correctamente.")}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 hover:brightness-110 text-white font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg animate-pulse"
                  >
                    <Download className="h-4 w-4" />
                    <span>Descargar Manual RFEF</span>
                  </button>
                )}
              </div>
            </div>

            {/* Back to main sales page indicator */}
            <div className="pt-4 border-t border-slate-850">
              <button
                onClick={() => setViewMode('upsell')}
                className="text-xs text-slate-500 hover:text-slate-400 underline font-medium cursor-pointer transition-colors"
              >
                Volver a la página anterior
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}


