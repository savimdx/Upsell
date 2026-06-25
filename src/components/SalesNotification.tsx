import React, { useState, useEffect } from "react";
import { ShoppingBag, Users, CheckCircle2 } from "lucide-react";

interface SaleItem {
  name: string;
  location: string;
  product: string;
  time: string;
}

const SALE_NOTIFICATIONS: SaleItem[] = [
  {
    name: "Carlos M.",
    location: "Madrid, España",
    product: "Programa Completo (Fútbol Sala)",
    time: "hace 2 minutos"
  },
  {
    name: "Diego R.",
    location: "Santiago, Chile",
    product: "Programa Completo (Fútbol Sala)",
    time: "hace 5 minutos"
  },
  {
    name: "Luis E.",
    location: "Buenos Aires, Argentina",
    product: "Programa Completo (Fútbol Sala)",
    time: "hace 10 minutos"
  },
  {
    name: "Esteban G.",
    location: "Bogotá, Colombia",
    product: "Programa Completo (Fútbol Sala)",
    time: "hace 1 minuto"
  },
  {
    name: "Mariano S.",
    location: "Montevideo, Uruguay",
    product: "Programa Completo (Fútbol Sala)",
    time: "hace 4 minutos"
  },
  {
    name: "Javier F.",
    location: "Ciudad de México, México",
    product: "Programa Completo (Fútbol Sala)",
    time: "hace 12 minutos"
  },
  {
    name: "Alejandro T.",
    location: "Medellín, Colombia",
    product: "Programa Completo (Fútbol Sala)",
    time: "hace 8 minutos"
  },
  {
    name: "Mateo P.",
    location: "Valencia, España",
    product: "Programa Completo (Fútbol Sala)",
    time: "hace 3 minutos"
  }
];

export default function SalesNotification() {
  const [currentSale, setCurrentSale] = useState<SaleItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Show first notification after 4 seconds
    const initialTimeout = setTimeout(() => {
      setCurrentSale(SALE_NOTIFICATIONS[0]);
      setIsVisible(true);
    }, 4000);

    // Set up interval to cycle notifications
    const interval = setInterval(() => {
      // Fade out current
      setIsVisible(false);

      // Fade in next after a brief delay
      setTimeout(() => {
        setIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % SALE_NOTIFICATIONS.length;
          setCurrentSale(SALE_NOTIFICATIONS[nextIndex]);
          setIsVisible(true);
          return nextIndex;
        }, 500); // Wait for fade-out to complete
      }, 500);

    }, 12000); // Change notification every 12 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!currentSale) return null;

  return (
    <div
      className={`fixed top-[32px] sm:top-10 left-1 z-[100] max-w-[190px] sm:max-w-[210px] rounded-lg bg-white/60 backdrop-blur-md border border-slate-200/30 shadow-md p-1.5 transition-all duration-500 transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 -translate-y-4 scale-90 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-1.5">
        <div className="flex-shrink-0 relative flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600">
          <ShoppingBag className="w-2.5 h-2.5" />
          <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
        </div>
        <div className="flex-1 min-w-0 text-[10px] leading-none space-y-0.5">
          <div className="flex items-center justify-between gap-1">
            <span className="font-extrabold text-slate-800 truncate">
              {currentSale.name}
            </span>
            <span className="text-[8px] text-slate-400 truncate">
              {currentSale.time}
            </span>
          </div>
          <p className="text-slate-500 font-medium truncate text-[8px] sm:text-[9px]">
            {currentSale.location}
          </p>
          <p className="text-orange-600 font-extrabold text-[8px] sm:text-[9px]">
            Acaba de comprar
          </p>
        </div>
      </div>
    </div>
  );
}
