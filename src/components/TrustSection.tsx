/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, MapPin } from 'lucide-react';
import { AUTHORS } from '../data';

export default function TrustSection() {
  return (
    <section id="parceria" className="bg-bg py-16 md:py-24 border-b border-slate-200 relative overflow-hidden">
      {/* Light decorative leaf trace or botanical effect */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Header Block with luxurious serif typography */}
        <div className="max-w-3xl mx-auto mb-12 md:mb-16 space-y-4 text-left md:text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary tracking-tight font-serif leading-tight">
            MÁXIMA OCUPAÇÃO E <br className="hidden md:block" />
            <span className="font-extrabold font-montserrat text-accent">VACÂNCIA MÍNIMA HISTÓRICA.</span>
          </h2>
          <p className="text-text-muted text-[15px] sm:text-sm md:text-base leading-relaxed font-sans font-light text-left md:text-center">
            A Vila Olímpia e Higienópolis foram milimetricamente selecionadas por se consolidarem como microzonas de altíssima escassez de terrenos e demanda orgânica perene no <strong>mercado imobiliário</strong>. Na Vila Olímpia, milhares de multinacionais e sedes corporativas geram tráfego incessante de executivos; em Higienópolis, a colagem face a face com o Mackenzie e grandes polos hospitalares atrai um fluxo contínuo de estudantes e residentes de saúde, garantindo <strong>rentabilidade máxima para seu investimento imobiliário</strong> no formato short stay.
          </p>
        </div>

        {/* Co-creators Portraits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {AUTHORS.map((author, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border border-slate-200/60 rounded-sm overflow-hidden shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 flex flex-col sm:flex-col justify-start sm:justify-between items-center sm:items-stretch"
            >
              {/* Photo representation in Black & White */}
              <div className="relative overflow-hidden w-full aspect-[4/3] sm:aspect-[3/4] bg-slate-100">
                <img
                  src={author.image}
                  alt={author.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>

              {/* Bio description text info cards */}
              <div className="p-5 sm:p-4 space-y-2.5 w-full bg-white relative z-10 sm:mt-0 -mt-6 rounded-t-xl sm:rounded-none">
                <div className="space-y-1">
                  <span className="block text-[10px] sm:text-[9px] font-bold font-montserrat tracking-widest text-accent uppercase">
                    {author.role}
                  </span>
                  <h3 className="text-lg sm:text-base font-bold font-montserrat text-primary leading-snug">
                    {author.name}
                  </h3>
                </div>
                
                <p className="text-[13px] sm:text-[11px] text-text-muted leading-relaxed font-light font-sans">
                  {author.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
