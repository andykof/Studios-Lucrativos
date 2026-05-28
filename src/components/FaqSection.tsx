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
    <section id="faq" className="py-24 bg-bg border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Block in serif */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="text-[10px] font-bold font-montserrat uppercase tracking-[0.25em] text-accent flex items-center justify-center gap-2">
            <HelpCircle size={13} /> Dúvidas Frequentes & Esclarecimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-primary tracking-tight font-serif leading-none">
            FIQUE POR DENTRO DE <br />
            <span className="font-extrabold font-montserrat text-accent uppercase">TUDO</span>
          </h2>
          <p className="text-text-muted text-sm leading-relaxed font-sans font-light">
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
                className={`border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-white border-accent shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Accordion head */}
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-primary text-sm md:text-base pr-4 font-montserrat uppercase tracking-wide">
                    {item.question}
                  </span>
                  <span
                    className={`text-accent transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    <ChevronDown size={18} />
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
                      <div className="px-6 pb-6 pt-1 text-text-muted text-xs md:text-sm leading-relaxed border-t border-slate-100 font-sans font-light">
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
        <div className="mt-12 text-center p-6 bg-white border border-slate-200 rounded-sm max-w-lg mx-auto">
          <p className="text-xs text-text-muted mb-4 font-bold font-montserrat uppercase tracking-wider">
            Tem outra dúvida específica sobre planos de obras ou memorial descritivo?
          </p>
          <a
            href="https://wa.me/5511959568043?text=Olá!%20Estava%20visualizando%20as%20especificações%20dos%20Studios%20Lucrativos%20e%20gostaria%20de%20esclarecer%20uma%20dúvida%20específica."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-accent hover:bg-accent-hover text-forest-dark py-3.5 px-6 rounded-sm transition-colors cursor-pointer font-montserrat shadow-md"
          >
            <MessageSquare size={14} />
            Falar pelo WhatsApp Especialista
          </a>
        </div>

      </div>
    </section>
  );
}
