/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PLANTAS_DATA } from '../data';
import { Check, Compass, Layout } from 'lucide-react';

interface PropertyDetailSectionProps {
  onPropertySelect: (id: string) => void;
}

export default function PropertyDetailSection({ onPropertySelect }: PropertyDetailSectionProps) {
  const [activePlanIdx, setActivePlanIdx] = useState(0);

  const selectedPlan = PLANTAS_DATA[activePlanIdx];

  // Helper smooth scroll
  const handleCtaClick = (plantaSize: string) => {
    onPropertySelect(plantaSize);
  };

  return (
    <section id="plantas" className="py-16 md:py-24 bg-forest-dark text-white space-y-16 md:space-y-28 relative overflow-hidden border-b border-forest-light/30">
      
      {/* Background visual detail */}
      <div className="absolute top-1/4 right-0 w-[250px] h-[250px] md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[250px] h-[250px] md:w-96 md:h-96 bg-forest-light/10 rounded-full blur-3xl pointer-events-none" />

      {/* ----------------- SUBSECTION 1: PLANTAS INTERATIVAS ----------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-4">
          <div className="text-[10px] md:text-[11px] font-bold font-montserrat uppercase tracking-[0.2em] md:tracking-[0.25em] text-accent flex items-center justify-center gap-1.5">
            <Layout size={12} className="shrink-0" /> <span className="leading-tight">Engenharia de Espaço Inteligente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight font-serif leading-none">
            OS ATIVOS
          </h2>
          <p className="text-[11px] md:text-xs font-bold font-montserrat tracking-widest uppercase text-accent/80 px-2 sm:px-0">
            Portfolio Selecionado para Máximo Payback e Liquidez de Caixa
          </p>
        </div>

        {/* Tab switcher buttons - scrollable on mobile */}
        <div className="flex sm:justify-center border-b border-forest-light/45 pb-4 mb-8 md:mb-12 w-full overflow-x-auto hide-scrollbar snap-x">
          <div className="flex sm:grid sm:grid-cols-3 min-w-max sm:min-w-0 sm:w-full max-w-xl mx-auto gap-2 md:gap-3 px-4 sm:px-0">
            {PLANTAS_DATA.map((plan, idx) => (
              <button
                key={plan.size}
                onClick={() => setActivePlanIdx(idx)}
                className={`py-3 px-4 sm:px-0 text-[13px] md:text-sm font-bold font-montserrat transition-all border-b-2 text-center cursor-pointer snap-start shrink-0 ${
                  activePlanIdx === idx
                    ? 'border-accent text-accent font-extrabold pb-[10px] scale-105 sm:scale-100'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                {plan.size}
              </button>
            ))}
          </div>
        </div>

        {/* Layout details display with SVG structural blueprint */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Column 1: Custom Vector technical blueprint representation */}
          <div className="lg:col-span-6 bg-forest-light/10 border border-forest-light/40 p-5 md:p-8 rounded-sm relative shadow-inner flex flex-col justify-between">
            
            {/* Blueprint Grid Layout overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b3024_1px,transparent_1px),linear-gradient(to_bottom,#1b3024_1px,transparent_1px)] bg-[size:4%_4%] sm:bg-[size:5%_5%] opacity-20 pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 relative z-10 border-b border-forest-light/30 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping shrink-0" />
                <h4 className="text-[11px] md:text-xs font-mono font-bold uppercase tracking-widest text-accent leading-tight">
                  Planta Interativa: {selectedPlan.size}
                </h4>
              </div>
              <span className="text-[10px] font-mono font-bold uppercase text-slate-400">
                Torre Única - {selectedPlan.kitchenType}
              </span>
            </div>

            {/* High visual fidelity Blueprint/Schematic presentation */}
            <div className="flex-1 flex items-center justify-center my-6 relative z-10 w-full overflow-hidden">
              {selectedPlan.image ? (
                <div className="relative rounded-sm overflow-hidden border border-forest-light/60 w-full aspect-[4/3] bg-forest-dark/50 flex items-center justify-center">
                  <img
                    src={selectedPlan.image}
                    alt={selectedPlan.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain p-1"
                  />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-accent text-forest-dark px-2 py-0.5 text-[8.5px] font-bold tracking-[0.1em] uppercase rounded-xs font-mono shadow-md">
                    Perspectiva Decorado
                  </div>
                </div>
              ) : (
                <svg className="w-full max-h-[250px] md:max-h-[300px]" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer walls */}
                  <rect x="50" y="40" width="500" height="320" rx="3" stroke="#c4a47d" strokeWidth="3" strokeDasharray="1 1" />
                  <rect x="56" y="46" width="488" height="308" rx="2" stroke="#1b3024" strokeWidth="1.5" />

                  {/* Living Area Division (Left) */}
                  <line x1="280" y1="40" x2="280" y2="250" stroke="#c4a47d" strokeWidth="2.5" />
                  {/* Suite 1 (Right top) */}
                  <line x1="280" y1="180" x2="550" y2="180" stroke="#c4a47d" strokeWidth="2.5" />
                  {/* Suite 2 (Right bottom) */}
                  <line x1="280" y1="280" x2="550" y2="280" stroke="#c4a47d" strokeWidth="2.5" />
                  {/* Kitchen Area Divider (Bottom-left corner) */}
                  <line x1="50" y1="250" x2="200" y2="250" stroke="#c4a47d" strokeWidth="2" />
                  <line x1="200" y1="250" x2="200" y2="360" stroke="#c4a47d" strokeWidth="2" />

                  {/* Elevator/Hall area */}
                  <rect x="50" y="80" width="80" height="80" fill="none" stroke="#c4a47d" strokeWidth="2" />
                  <line x1="50" y1="80" x2="130" y2="160" stroke="#1b3024" strokeWidth="1" />
                  <line x1="130" y1="80" x2="50" y2="160" stroke="#1b3024" strokeWidth="1" />

                  {/* Balcony Gourmet (Left top) */}
                  <rect x="150" y="55" width="110" height="110" rx="4" fill="#1b3024" fillOpacity="0.3" stroke="#1b3024" strokeWidth="1" />

                  {/* Suite bed outlines */}
                  {/* Bed Suite 1 */}
                  <rect x="440" y="80" width="70" height="70" rx="2" stroke="#c4a47d" strokeWidth="1" />
                  <path d="M440 100 H510" stroke="#c4a47d" strokeWidth="1" />
                  {/* Bed Suite 2 */}
                  <rect x="440" y="200" width="70" height="60" rx="2" stroke="#c4a47d" strokeWidth="1" />
                  <path d="M440 215 H510" stroke="#c4a47d" strokeWidth="1" />

                  {/* Gourmet Dining Table */}
                  <circle cx="205" y="110" r="24" stroke="#c4a47d" strokeWidth="1" />
                  <circle cx="205" y="70" r="4" fill="#c4a47d" />
                  <circle cx="205" y="150" r="4" fill="#c4a47d" />
                  <circle cx="165" y="110" r="4" fill="#c4a47d" />
                  <circle cx="245" y="110" r="4" fill="#c4a47d" />

                  {/* Labels */}
                  <text x="175" y="210" fill="#ffffff" fontSize="13" fontFamily="sans-serif" letterSpacing="1" fontWeight="bold">LIVING INTEGRADO</text>
                  <text x="330" y="115" fill="#c4a47d" fontSize="11" fontFamily="sans-serif" letterSpacing="0.5">SUÍTE MASTER</text>
                  <text x="330" y="235" fill="#c4a47d" fontSize="11" fontFamily="sans-serif" letterSpacing="0.5">SUÍTE CASAL 2</text>
                  <text x="75" y="295" fill="#ffffff" fontSize="11" fontFamily="sans-serif">COPA / COZINHA</text>
                  <text x="58" y="58" fill="#c4a47d" fontSize="10" fontFamily="monospace">HALL</text>
                </svg>
              )}
            </div>

            {/* Inner blueprint footer specs */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 sm:gap-0 text-[11px] text-slate-400 font-sans border-t border-forest-light/30 pt-4 relative z-10 w-full">
              <span className="flex items-center gap-1.5 font-semibold text-accent font-montserrat uppercase">
                <Compass size={13} className="shrink-0" /> Planta de {selectedPlan.size}
              </span>
              <span>Vila Olímpia & Higienópolis / SP</span>
            </div>
          </div>

          {/* Column 2: Specification textual details */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-center px-1 sm:px-0">
            <h3 className="text-2xl sm:text-3xl font-light font-serif text-white tracking-snug leading-tight">
              {selectedPlan.title}
            </h3>
            
            <p className="text-slate-300 text-[15px] sm:text-sm md:text-base leading-relaxed font-sans font-light">
              {selectedPlan.description}
            </p>

            {/* Quick specifications grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pb-2">
              <div className="p-3 sm:p-4 bg-forest-light/10 border border-forest-light/40 rounded-sm text-left shadow-sm">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-accent tracking-wider md:tracking-widest block font-montserrat text-left leading-tight sm:leading-normal">DORMS / CONCEPÇÃO</span>
                <span className="text-sm sm:text-sm font-bold block text-white mt-1.5 sm:mt-1 text-left leading-none">{selectedPlan.suites}</span>
              </div>
              <div className="p-3 sm:p-4 bg-forest-light/10 border border-forest-light/40 rounded-sm text-left shadow-sm">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold text-accent tracking-wider md:tracking-widest block font-montserrat text-left leading-tight sm:leading-normal">PROVEDOR DA RENTABILIDADE</span>
                <span className="text-sm sm:text-sm font-bold block text-white mt-1.5 sm:mt-1 text-left leading-none">{selectedPlan.vagas}</span>
              </div>
            </div>

            {/* highlights check */}
            <div className="space-y-3 sm:space-y-3 text-left">
              <h4 className="text-[10px] sm:text-[10px] uppercase font-bold font-montserrat tracking-widest text-accent text-left">Diferenciais de Curta Estadão desta Planta:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {selectedPlan.features.map((feat, fidx) => (
                  <div key={fidx} className="flex items-start gap-2.5 sm:gap-2.5 text-left">
                    <div className="mt-0.5 sm:mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-accent/20 text-accent font-bold shrink-0">
                      <Check size={11} className="stroke-[3]" />
                    </div>
                    <span className="text-[13px] sm:text-xs text-slate-300 font-light font-sans text-left leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Plan switcher manual buttons navigation */}
            <div className="flex items-center gap-4 pt-6 sm:pt-4 w-full">
              <a
                href={`https://wa.me/5511959568043?text=Olá!%20Gostaria%20de%20receber%20o%20Book%20Técnico%20e%20Memorial%20com%20Oportunidades%20VIP%20da%20planta%20${encodeURIComponent(selectedPlan.title)}.`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 md:py-4 px-6 bg-accent hover:bg-accent-hover text-forest-dark text-xs sm:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-wider rounded-sm text-center shadow-lg transition-transform active:scale-95 cursor-pointer font-montserrat"
              >
                Receber Book Técnico e Memorial VIP
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
