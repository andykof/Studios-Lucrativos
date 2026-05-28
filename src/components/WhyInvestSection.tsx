/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Trophy, Eye, CheckCircle2 } from 'lucide-react';
import { LAZER_UNITS } from '../data';

export default function WhyInvestSection() {
  const scrollToContact = () => {
    const el = document.getElementById('hero');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      const input = el.querySelector('input');
      if (input) setTimeout(() => input.focus(), 600);
    }
  };

  return (
    <section id="por-que-investir" className="bg-white py-16 md:py-24 border-b border-slate-200 relative">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary tracking-tight font-serif leading-none">
            A LÓGICA DO <span className="font-extrabold font-montserrat text-accent uppercase block sm:inline mt-1 sm:mt-0">SHORT STAY</span>
          </h2>
          <p className="text-text-muted text-[15px] sm:text-sm md:text-base leading-relaxed font-sans font-light px-2 sm:px-0">
            Entenda como dois ativos no <strong>mercado imobiliário</strong> em microrregiões ultra-específicas de São Paulo trabalham em conjunto para entregar <strong>rentabilidade máxima</strong> em um inteligente <strong>investimento imobiliário</strong> focado em short stay.
          </p>
        </div>

        {/* Leisure items grid with alternate layouts matching high fidelity image overlays */}
        <div className="space-y-16 md:space-y-24">
          {LAZER_UNITS.map((unit, idx) => {
            const isEven = idx % 2 === 0;
            
            // Custom strategic bullets for each project
            const getStrategicBullets = (id: string) => {
              if (id === 'gestao-automatico') {
                return [
                  'Sua administradora eleita assumindo toda a jornada de anúncio, reservas e check-in.',
                  'Limpeza profissional, governança e manutenção inclusas sem que você mova um dedo.',
                  'Rentabilidade média esperada líquida até 40% superior ao aluguel clássico de contrato longo.'
                ];
              } else if (id === 'uniko-infra') {
                return [
                  'R$ 275k de aporte simplificado na Vila Olímpia hoje: o quadrilátero de ouro corporativo.',
                  'Fluxo de parcelas de obras adaptado para o investidor pessoa física.',
                  'Áreas comuns inteligentes para nômades tech: bento-coworking e lavanderia integradas.'
                ];
              } else {
                return [
                  'Distorção matemática: valor de apenas R$ 13.900/m² em plena Higienópolis.',
                  'Passos do Mackenzie e metrô, capturando demanda inesgotável de calouros e residentes de saúde.',
                  'Rentabilidade forte com vacância histórica nula decorrente da escassez de lançamentos na região.'
                ];
              }
            };

            const bullets = getStrategicBullets(unit.id);

            return (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                {/* Visual Media with high fidelity overlay labels (similar to photo layout) */}
                <div className={`lg:col-span-8 relative rounded-md overflow-hidden shadow-xl aspect-square sm:aspect-[4/3] md:aspect-[16/9] bg-forest-dark border border-slate-200 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  {unit.id === 'uniko-infra' ? (
                    <iframe
                      src="https://www.youtube.com/embed/IF-CjuQnlMs?si=3stF_j6WJ4sJa4Ij"
                      title="YouTube video player"
                      className="absolute top-0 left-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={unit.image}
                        alt={unit.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover filter brightness-[0.8] sm:brightness-[0.9] hover:brightness-100 transition-all duration-700 hover:scale-105"
                      />
                      {/* Glass Card Overlay reflecting the information blocks in the screenshot */}
                      <div className="absolute right-3 left-3 bottom-3 md:left-auto md:right-6 md:bottom-6 md:max-w-sm bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-sm shadow-2xl border-l-4 border-accent text-text-main space-y-2 sm:space-y-3">
                        <span className="inline-block text-[9px] font-bold font-montserrat tracking-widest text-accent uppercase">
                          {unit.badge}
                        </span>
                        <h4 className="text-[15px] sm:text-base font-extrabold font-montserrat text-primary leading-tight uppercase">
                          {unit.title}
                        </h4>
                        <p className="hidden xs:block text-[11px] text-text-muted font-light font-sans leading-relaxed">
                          {unit.description}
                        </p>
                        <a
                          href="https://wa.me/5511959568043?text=Olá!%20Gostaria%20de%20receber%20a%20análise%20de%20payback%20e%20estudo%20de%20rentabilidade."
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] xl:text-[11px] font-bold font-montserrat text-accent hover:text-accent-hover uppercase tracking-wider cursor-pointer pt-1"
                        >
                          Solicitar Payback ↗
                        </a>
                      </div>

                      {/* Top image location helper tag */}
                      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-forest-dark/80 text-white px-3 py-1.5 sm:py-1 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase rounded-sm shadow-sm backdrop-blur-sm">
                        {unit.id === 'gestao-automatico' ? 'Vila Olímpia' : unit.id === 'verus-infra' ? 'Higienópolis' : 'Perspectiva Preliminar Decorado'}
                      </div>
                    </>
                  )}
                </div>

                {/* Left/Right Text description Column */}
                <div className={`lg:col-span-4 space-y-4 md:space-y-5 px-1 sm:px-0 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <h3 className="text-2xl sm:text-3xl font-light font-serif text-primary leading-[1.15] md:leading-tight">
                    {unit.tagline}
                  </h3>
                  
                  <div className="h-0.5 w-12 sm:w-16 bg-accent opacity-80" />
                  
                  <ul className="space-y-3 sm:space-y-2.5 pt-2 sm:pt-4">
                    {bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex items-start gap-3 sm:gap-2.5 text-[13px] sm:text-xs text-text-muted leading-relaxed">
                        <CheckCircle2 size={16} sm:size={14} className="text-accent shrink-0 mt-0.5 opacity-90" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Center alignment Button matching "Entre em contato" inside screenshot */}
        <div className="mt-16 md:mt-24 text-center px-4 w-full">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5511959568043?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20sobre%20os%20studios%20disponíveis."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center sm:inline-block px-8 sm:px-12 py-4 sm:py-5 bg-forest text-white hover:bg-forest-light text-xs sm:text-sm font-bold font-montserrat uppercase tracking-[0.15em] sm:tracking-[0.2em] rounded-sm shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            Entre em Contato com Consultor
          </motion.a>
        </div>

      </div>
    </section>
  );
}
