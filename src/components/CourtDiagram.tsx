import React from 'react';

interface CourtDiagramProps {
  type: 'warmup' | 'ssc' | 'tactics' | 'fitness' | 'planning';
}

export default function CourtDiagram({ type }: CourtDiagramProps) {
  // We will return a beautiful custom SVG tactical board depending on the exercise type!
  return (
    <div className="relative w-full aspect-[4/3] bg-emerald-950 border-4 border-emerald-800 rounded-xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-2 select-none">
      {/* Wooden or Sport Court Floor Effect */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      {/* Court Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer boundaries */}
        <rect x="15" y="15" width="370" height="270" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
        
        {/* Center line */}
        <line x1="200" y1="15" x2="200" y2="285" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
        
        {/* Center circle */}
        <circle cx="200" cy="150" r="45" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
        <circle cx="200" cy="150" r="3" fill="rgba(255, 255, 255, 0.6)" />

        {/* Penalty Area Left (6m D-Zone typical in Futsal) */}
        {/* Quarter circles connected by a straight line or simplified semicircles */}
        <path d="M 15 70 C 50 70, 75 100, 75 150 C 75 200, 50 230, 15 230" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" fill="none" />
        {/* Penalty penalty spot */}
        <circle cx="75" cy="150" r="2.5" fill="rgba(255, 255, 255, 0.6)" />
        {/* 10m double penalty line */}
        <line x1="115" y1="147" x2="115" y2="153" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" />

        {/* Penalty Area Right */}
        <path d="M 385 70 C 350 70, 325 100, 325 150 C 325 200, 350 230, 385 230" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" fill="none" />
        {/* Penalty penalty spot */}
        <circle cx="325" cy="150" r="2.5" fill="rgba(255, 255, 255, 0.6)" />
        {/* 10m double penalty line */}
        <line x1="285" y1="147" x2="285" y2="153" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" />

        {/* Goals */}
        {/* Goal Left */}
        <rect x="3" y="125" width="12" height="50" stroke="rgba(255, 115, 0, 0.8)" strokeWidth="3" fill="rgba(255, 255, 255, 0.1)" />
        {/* Goal Right */}
        <rect x="385" y="125" width="12" height="50" stroke="rgba(255, 115, 0, 0.8)" strokeWidth="3" fill="rgba(255, 255, 255, 0.1)" />

        {/* --- DYNAMIC GRAPHICS ACCORDING TO LESSON TYPE --- */}
        {type === 'warmup' && (
          <>
            {/* Grid square */}
            <rect x="130" y="80" width="140" height="140" stroke="rgba(249, 115, 22, 0.6)" strokeWidth="2" strokeDasharray="4 4" fill="rgba(249, 115, 22, 0.05)" />
            {/* Corner Cones of the 10x10 rondo */}
            <path d="M 130 80 L 126 86 L 134 86 Z" fill="#F97316" />
            <path d="M 270 80 L 266 86 L 274 86 Z" fill="#F97316" />
            <path d="M 130 220 L 126 226 L 134 226 Z" fill="#F97316" />
            <path d="M 270 220 L 266 226 L 274 226 Z" fill="#F97316" />

            {/* Players (Attacker Yellow, Defender Red, External target) */}
            {/* Attacker 1 */}
            <circle cx="150" cy="150" r="8" fill="#FACC15" stroke="#1E293B" strokeWidth="1.5" />
            <text x="150" y="153" fontSize="8" fill="#0F172A" textAnchor="middle" fontWeight="bold">A1</text>
            
            {/* Attacker 2 */}
            <circle cx="210" cy="95" r="8" fill="#FACC15" stroke="#1E293B" strokeWidth="1.5" />
            <text x="210" y="98" fontSize="8" fill="#0F172A" textAnchor="middle" fontWeight="bold">A2</text>
            
            {/* Attacker 3 */}
            <circle cx="210" cy="205" r="8" fill="#FACC15" stroke="#1E293B" strokeWidth="1.5" />
            <text x="210" y="208" fontSize="8" fill="#0F172A" textAnchor="middle" fontWeight="bold">A3</text>

            {/* Defender Red (Inside the rondo) */}
            <circle cx="185" cy="140" r="8" fill="#EF4444" stroke="#1E293B" strokeWidth="1.5" />
            <text x="185" y="143" fontSize="8" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">D1</text>

            {/* External Target (waiting for transition) */}
            <circle cx="310" cy="150" r="8" fill="#3B82F6" stroke="#1E293B" strokeWidth="1.5" />
            <text x="310" y="153" fontSize="8" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">ET</text>

            {/* Play Arrows & Ball paths */}
            {/* Pass path A1 -> A2 */}
            <path d="M 158 142 A 40 40 0 0 1 202 103" stroke="#FACC15" strokeWidth="2" strokeDasharray="3 3" fill="none" />
            
            {/* Pass path A2 -> A3 */}
            <path d="M 210 103 L 210 197" stroke="#FACC15" strokeWidth="2" strokeDasharray="3 3" fill="none" />
            
            {/* Transition long pass A3 -> ET */}
            <path d="M 218 200 C 250 180, 275 165, 302 153" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow)" fill="none" />

            {/* Futsal Orange Ball */}
            <circle cx="210" cy="140" r="5" fill="#FF7F11" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="210" cy="140" r="2.5" fill="#1E293B" />
          </>
        )}

        {type === 'ssc' && (
          <>
            {/* Center Area zoom / focus on Left Side */}
            {/* Goals left GK */}
            <circle cx="25" cy="150" r="8" fill="#10B981" stroke="#1E293B" strokeWidth="1.5" />
            <text x="25" y="153" fontSize="8" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">GK</text>

            {/* 3 Attackers advancing (Yellow) */}
            <circle cx="160" cy="90" r="8" fill="#FACC15" stroke="#1E293B" strokeWidth="1.5" />
            <text x="160" y="93" fontSize="8" fill="#0F172A" textAnchor="middle" fontWeight="bold">A1</text>

            <circle cx="180" cy="150" r="8" fill="#FACC15" stroke="#1E293B" strokeWidth="1.5" />
            <text x="180" y="153" fontSize="8" fill="#0F172A" textAnchor="middle" fontWeight="bold">A2</text>

            <circle cx="160" cy="210" r="8" fill="#FACC15" stroke="#1E293B" strokeWidth="1.5" />
            <text x="160" y="213" fontSize="8" fill="#0F172A" textAnchor="middle" fontWeight="bold">A3</text>

            {/* 2 Defenders forming a block (Red) */}
            <circle cx="85" cy="120" r="8" fill="#EF4444" stroke="#1E293B" strokeWidth="1.5" />
            <text x="85" y="123" fontSize="8" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">D1</text>

            <circle cx="85" cy="180" r="8" fill="#EF4444" stroke="#1E293B" strokeWidth="1.5" />
            <text x="85" y="183" fontSize="8" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">D2</text>

            {/* Movement of Attackers and Ball */}
            {/* A2 dribbles forward */}
            <path d="M 172 150 L 125 150" stroke="#FACC15" strokeWidth="1.5" strokeDasharray="2 2" />
            {/* A2 shoots/passes to A1 */}
            <path d="M 125 150 L 152 98" stroke="#FF7F11" strokeWidth="2" />
            {/* A1 takes close shot to Keeper */}
            <path d="M 152 90 L 35 135" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 1" />

            {/* Ball */}
            <circle cx="130" cy="142" r="5" fill="#FF7F11" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="130" cy="142" r="2.5" fill="#1E293B" />
          </>
        )}

        {type === 'tactics' && (
          <>
            {/* Futsal Rombo Rotation System (3-1) */}
            {/* Left goalkeeper */}
            <circle cx="25" cy="150" r="8" fill="#10B981" stroke="#1E293B" strokeWidth="1.5" />
            <text x="25" y="153" fontSize="8" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">ARQ</text>

            {/* Cierre (Yellow C) */}
            <circle cx="100" cy="150" r="8" fill="#FACC15" stroke="#1E293B" strokeWidth="1.5" />
            <text x="100" y="153" fontSize="7" fill="#0F172A" textAnchor="middle" fontWeight="bold">CIE</text>

            {/* Alas (Yellow LD and LI) */}
            <circle cx="170" cy="65" r="8" fill="#FACC15" stroke="#1E293B" strokeWidth="1.5" />
            <text x="170" y="68" fontSize="7" fill="#0F172A" textAnchor="middle" fontWeight="bold">LI</text>

            <circle cx="170" cy="235" r="8" fill="#FACC15" stroke="#1E293B" strokeWidth="1.5" />
            <text x="170" y="238" fontSize="7" fill="#0F172A" textAnchor="middle" fontWeight="bold">LD</text>

            {/* Pívot (Yellow PIV) */}
            <circle cx="280" cy="150" r="8" fill="#FACC15" stroke="#1E293B" strokeWidth="1.5" />
            <text x="280" y="153" fontSize="7" fill="#0F172A" textAnchor="middle" fontWeight="bold">PIV</text>

            {/* Professional Opponent Defenders (Red 1, 2, 3, 4) */}
            <circle cx="130" cy="120" r="8" fill="#EF4444" stroke="#1E293B" strokeWidth="1.5" />
            <text x="130" y="123" fontSize="7" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">D1</text>
            
            <circle cx="200" cy="90" r="8" fill="#EF4444" stroke="#1E293B" strokeWidth="1.5" />
            <text x="200" y="93" fontSize="7" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">D2</text>

            <circle cx="190" cy="210" r="8" fill="#EF4444" stroke="#1E293B" strokeWidth="1.5" />
            <text x="190" y="213" fontSize="7" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">D3</text>

            <circle cx="295" cy="170" r="8" fill="#EF4444" stroke="#1E293B" strokeWidth="1.5" />
            <text x="295" y="173" fontSize="7" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">D4</text>

            {/* Rotational Pass Flow and Blocking Actions */}
            {/* Defensive Block indicator */}
            <line x1="108" y1="150" x2="122" y2="128" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Rotation Arrow */}
            <path d="M 100 142 C 100 90, 140 68, 162 65" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Direct pass line to pivot */}
            <path d="M 178 235 L 272 156" stroke="#FACC15" strokeWidth="2" strokeDasharray="5 2" />

            {/* Orange Ball at LD corner */}
            <circle cx="178" cy="227" r="5" fill="#FF7F11" stroke="#FFFFFF" strokeWidth="1" />
            <circle cx="178" cy="227" r="2.5" fill="#1E293B" />
          </>
        )}

        {type === 'fitness' && (
          <>
            {/* Speed, coordination and agility cones circuit and hurdles */}
            {/* Draw Coordination Ladder in center */}
            <g transform="translate(130, 135)">
              <rect x="0" y="0" width="80" height="20" stroke="#FACC15" strokeWidth="1.5" fill="rgba(250, 204, 21, 0.1)" />
              <line x1="16" y1="0" x2="16" y2="20" stroke="#FACC15" strokeWidth="1.5" />
              <line x1="32" y1="0" x2="32" y2="20" stroke="#FACC15" strokeWidth="1.5" />
              <line x1="48" y1="0" x2="48" y2="20" stroke="#FACC15" strokeWidth="1.5" />
              <line x1="64" y1="0" x2="64" y2="20" stroke="#FACC15" strokeWidth="1.5" />
              <text x="40" y="-5" fontSize="7" fill="#FACC15" textAnchor="middle" fontWeight="medium">Escalera</text>
            </g>

            {/* Salto Hurdles (yellow lines) */}
            <g transform="translate(240, 100)">
              <line x1="0" y1="0" x2="20" y2="0" stroke="#EF4444" strokeWidth="3" />
              <line x1="0" y1="20" x2="20" y2="20" stroke="#EF4444" strokeWidth="3" />
              <line x1="0" y1="40" x2="20" y2="40" stroke="#EF4444" strokeWidth="3" />
              <text x="10" y="-5" fontSize="7" fill="#EF4444" textAnchor="middle" fontWeight="medium">Vallas</text>
            </g>

            {/* Slalom Cones (Orange triangles) */}
            <g transform="translate(50, 60)">
              <polygon points="10,0 5,12 15,12" fill="#F97316" />
              <polygon points="30,0 25,12 35,12" fill="#F97316" />
              <polygon points="50,0 45,12 55,12" fill="#F97316" />
              <polygon points="70,0 65,12 75,12" fill="#F97316" />
              <text x="40" y="24" fontSize="7" fill="#F97316" textAnchor="middle" fontWeight="medium">Slalom</text>
            </g>

            {/* Player running route (blue dotted path) */}
            {/* Start on bottom right */}
            <circle cx="340" cy="240" r="8" fill="#FACC15" stroke="#1E293B" strokeWidth="1.5" />
            <text x="340" y="243" fontSize="8" fill="#0F172A" textAnchor="middle" fontWeight="bold">P1</text>

            {/* Path arrow from P1 through hurdles, to ladder, then slalom, then shoot */}
            <path d="M 330 235 L 260 135 L 215 145 L 120 145 L 85 80 L 40 135" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3 3" fill="none" />
            <circle cx="40" cy="135" r="5" fill="#FF7F11" stroke="#FFFFFF" strokeWidth="1" />

            {/* Goal on West */}
            <path d="M 15 125 L 30 135 L 15 145" stroke="#EF4444" strokeWidth="2" strokeDasharray="2 2" fill="none" />
          </>
        )}

        {type === 'planning' && (
          <>
            {/* Dynamic macrocycle chart with nice elements */}
            <rect x="30" y="40" width="340" height="220" fill="rgba(15, 23, 42, 0.4)" rx="8" stroke="rgba(255,115,0,0.3)" strokeWidth="1.5" />
            
            {/* Grid Days */}
            {/* Lunes */}
            <rect x="45" y="60" width="95" height="85" fill="rgba(255,255,255,0.05)" rx="4" />
            <text x="92.5" y="78" fontSize="10" fill="#FACC15" textAnchor="middle" fontWeight="bold">LUNES</text>
            <text x="92.5" y="98" fontSize="8" fill="#94A3B8" textAnchor="middle">Activación Inicial</text>
            <text x="92.5" y="112" fontSize="8" fill="#94A3B8" textAnchor="middle">Capacidad Aeróbica</text>
            <text x="92.5" y="126" fontSize="7" fill="#10B981" textAnchor="middle">Intensidad: Baja 🟢</text>

            {/* Miércoles */}
            <rect x="152.5" y="60" width="95" height="85" fill="rgba(255,255,255,0.05)" rx="4" />
            <text x="200" y="78" fontSize="10" fill="#FACC15" textAnchor="middle" fontWeight="bold">MIÉRCOLES</text>
            <text x="200" y="98" fontSize="8" fill="#94A3B8" textAnchor="middle">Táctica Defensiva</text>
            <text x="200" y="112" fontSize="8" fill="#94A3B8" textAnchor="middle">Juegos Reducidos</text>
            <text x="200" y="126" fontSize="7" fill="#EF4444" textAnchor="middle">Intensidad: Alta 🔴</text>

            {/* Jueves */}
            <rect x="260" y="60" width="95" height="85" fill="rgba(255,255,255,0.05)" rx="4" />
            <text x="307.5" y="78" fontSize="10" fill="#FACC15" textAnchor="middle" fontWeight="bold">JUEVES</text>
            <text x="307.5" y="98" fontSize="8" fill="#94A3B8" textAnchor="middle">Balón Parado</text>
            <text x="307.5" y="112" fontSize="8" fill="#94A3B8" textAnchor="middle font-mono">Velocidad Reacción</text>
            <text x="307.5" y="126" fontSize="7" fill="#FACC15" textAnchor="middle">Intensidad: Media 🟡</text>

            {/* Sábado Match */}
            <rect x="45" y="160" width="310" height="80" fill="rgba(249, 115, 22, 0.1)" rx="4" stroke="rgba(249, 115, 22, 0.3)" />
            <text x="200" y="185" fontSize="12" fill="#F97316" textAnchor="middle" fontWeight="black">SÁBADO - DÍA DE PARTIDO 🏆</text>
            <text x="200" y="205" fontSize="10" fill="#E2E8F0" textAnchor="middle">Aplicar Sistema de Salidas de Presión Rotativo 3-1</text>
            <text x="200" y="222" fontSize="8" fill="#10B981" textAnchor="middle">Rendimiento Físico & Táctico Al Máximo Nivel</text>
          </>
        )}

        {/* Global Marker Definitions */}
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#10B981" />
          </marker>
        </defs>
      </svg>
      
      {/* Visual Overlays / Tech Board frame */}
      <div className="absolute top-3 left-3 flex items-center space-x-1.5">
        <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
        <span className="text-[10px] text-white/70 font-mono tracking-widest uppercase">PIZARRA DIGITAL F.S. Live</span>
      </div>
      <div className="absolute top-3 right-3 text-[10px] text-orange-400 font-mono font-bold tracking-tight">
        {type === 'warmup' && "SESIÓN 012: ACTIVACIÓN"}
        {type === 'ssc' && "SESIÓN 185: REDUCIDO 3v2"}
        {type === 'tactics' && "SESIÓN 412: SALIDAS 3-1"}
        {type === 'fitness' && "SESIÓN 789: VELOCIDAD"}
        {type === 'planning' && "SESIÓN 998: MICROCICLO"}
      </div>
    </div>
  );
}
