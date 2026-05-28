/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('localizacao'); // Starts with Paraiso location question

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-bg border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Header Block in serif */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="text-[10px] font-bold font-montserrat uppercase tracking-[0.2em] md:tracking-[0.25em] text-accent flex items-center justify-center gap-2">
            <HelpCircle size={13} className="shrink-0" /> <span className="leading-tight">Dúvidas Frequentes & Esclarecimentos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary tracking-tight font-serif leading-none">
            FIQUE POR DENTRO DE <br />
            <span className="font-extrabold font-montserrat text-accent uppercase">TUDO</span>
          </h2>
          <p className="text-text-muted text-[15px] md:text-sm leading-relaxed font-sans font-light px-2 sm:px-0">
            Respostas essenciais sobre os empreendimentos Studios Lucrativos, fluxos de investimento e gestão de temporada.
          </p>
        </div>

        {/* Accordions with gold accent and minimalist borders */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`border rounded-sm transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-white border-accent shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Accordion head */}
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-primary text-[13px] sm:text-sm md:text-base pr-2 sm:pr-4 font-montserrat uppercase tracking-wide leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`text-accent shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    <ChevronDown size={20} sm:size={18} />
                  </span>
                </button>

                {/* Accordion content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-text-muted text-[13px] sm:text-xs md:text-sm leading-relaxed border-t border-slate-100 font-sans font-light">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Additional WhatsApp link specific to Studios Lucrativos */}
        <div className="mt-12 text-center p-5 sm:p-6 bg-white border border-slate-200 rounded text-left sm:text-center w-full max-w-lg mx-auto shadow-sm">
          <p className="text-[11px] sm:text-xs text-text-muted mb-4 font-bold font-montserrat uppercase tracking-widest sm:tracking-wider leading-relaxed">
            Tem outra dúvida específica sobre planos de obras ou memorial descritivo?
          </p>
          <a
            href="https://wa.me/5511959568043?text=Olá!%20Estava%20visualizando%20as%20especificações%20dos%20Studios%20Lucrativos%20e%20gostaria%20de%20esclarecer%20uma%20dúvida%20específica."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider bg-accent hover:bg-accent-hover text-forest-dark py-4 sm:py-3.5 px-6 rounded-sm transition-colors cursor-pointer font-montserrat shadow-md"
          >
            <MessageSquare size={16} sm:size={14} className="shrink-0" />
            <span className="text-center whitespace-nowrap">Falar Especialista</span>
          </a>
        </div>

      </div>
    </section>
  );
}
