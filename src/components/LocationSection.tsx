/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Compass, Share2 } from 'lucide-react';

export default function LocationSection() {
  const handleDirectionsClick = () => {
    const el = document.getElementById('hero');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      const input = el.querySelector('input');
      if (input) setTimeout(() => input.focus(), 600);
    }
  };

  return (
    <section id="localizacao" className="bg-white py-24 relative overflow-hidden border-b border-slate-200">
      
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* SECTION HEADER: GRUPO KALLAS & STUDIOS LUCRATIVOS */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-5xl font-light text-primary tracking-tight font-serif leading-none">
            GRUPO KALLAS & <span className="font-extrabold font-montserrat text-accent">STUDIOS LUCRATIVOS</span>
          </h2>
          <p className="text-sm font-bold font-montserrat text-slate-500 uppercase tracking-widest">
            MAIS DE 40 ANOS DE TRADIÇÃO, CONFIANÇA E ALTO RENDIMENTO EM SÃO PAULO
          </p>
        </div>

        {/* YouTube Video Embed Block */}
        <div className="relative rounded-sm overflow-hidden shadow-2xl bg-forest-dark aspect-video w-full max-w-4xl mx-auto border border-slate-200">
          <iframe
            src="https://www.youtube.com/embed/Ja5TUR9C9Fc?si=gqihUP72AhgI06Yt"
            title="YouTube video player"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* Local surroundings highlights list */}
        <div className="text-center max-w-3xl mx-auto pt-4 text-left md:text-center space-y-4">
          <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans font-light">
            Com mais de 40 anos de atuação sólida e respeitada no mercado brasileiro, o <strong>Grupo Kallas</strong> assina empreendimentos de altíssimo padrão com engajamento total em inovação construtiva e prazos rigorosos. Em parceria com a <strong>Studios Lucrativos</strong>, esta união estratégica surge para alavancar e simplificar a comercialização de estúdios imobiliários inteligentes nas microrregiões mais rentáveis de São Paulo. Conectamos seu investimento diretamente ao que há de mais eficiente em rentabilidade por curta temporada e segurança patrimonial.
          </p>
        </div>

        {/* Map grid design replaced by Elegant Showcase Cards as requested */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Showcase of the two official showrooms (estandes) and stories */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {/* UNIKO Card */}
              <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-bold font-montserrat uppercase tracking-wider text-accent">Lançamento Premium</span>
                  </div>
                  <h3 className="text-2xl font-light font-serif text-primary">
                    UNIKO <span className="font-extrabold font-montserrat text-accent">VILA OLÍMPIA</span>
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed font-sans font-light">
                    Localizado na região mais valorizada da Zona Sul de São Paulo, o UNIKO representa o topo do design moderno. Idealizado para atender à altíssima demanda corporativa da Faria Lima, este residencial oferece áreas comuns de lazer sofisticadas, automação inteligente e layouts otimizados para maximizar a rentabilidade por diárias em plataformas de short-stay.
                  </p>
                </div>
                
                <div className="border-t border-slate-200/80 pt-6">
                  <div className="flex items-start gap-2.5 text-xs text-text-main">
                    <MapPin className="text-accent shrink-0 mt-0.5" size={15} />
                    <div>
                      <span className="font-bold block uppercase tracking-wider text-[10px] font-montserrat text-primary/80">Estande de Vendas Oficial:</span>
                      <p className="text-text-muted font-sans font-medium mt-1">Rua Casa do Ator, 545 - Vila Olímpia, São Paulo - SP, Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* VERUS Card */}
              <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold font-montserrat uppercase tracking-wider text-emerald-700">Oportunidade de Escassez</span>
                  </div>
                  <h3 className="text-2xl font-light font-serif text-primary">
                    VERUS <span className="font-extrabold font-montserrat text-accent">HIGIENÓPOLIS</span>
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed font-sans font-light">
                    Posicionado de forma estratégica ao lado do campus Mackenzie e cercado pelos principais polos hospitalares de São Paulo (como a Santa Casa e Sabará), o VERUS atrai um ecossistema seguro de médicos, pesquisadores e estudantes de alto poder aquisitivo. Um verdadeiro oásis de alta demanda e vacância virtualmente inexistente.
                  </p>
                </div>
                
                <div className="border-t border-slate-200/80 pt-6">
                  <div className="flex items-start gap-2.5 text-xs text-text-main">
                    <MapPin className="text-accent shrink-0 mt-0.5" size={15} />
                    <div>
                      <span className="font-bold block uppercase tracking-wider text-[10px] font-montserrat text-primary/80">Estande de Vendas Oficial:</span>
                      <p className="text-text-muted font-sans font-medium mt-1">Rua Amaral Gurgel, 522 — Vila Buarque, São Paulo - SP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Column right of the map, custom matches screenshot details */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200/80 p-8 rounded-sm flex flex-col justify-between text-left">
            <div className="space-y-6 text-left">
              
              <div className="space-y-1.5 border-l-3 border-accent pl-3 text-left">
                <span className="block text-[9px] font-bold font-montserrat uppercase tracking-wider text-accent text-left">ESTRUTURA DOS PROJETOS</span>
                <h4 className="text-base font-extrabold font-montserrat text-primary uppercase text-left tracking-tight">VILA OLÍMPIA & HIGIENÓPOLIS</h4>
                <p className="text-xs text-text-muted font-light font-sans leading-relaxed text-left">Zonas Premium de Curta Temporada em São Paulo / SP</p>
              </div>

              {/* Vicinity times and meters info */}
              <div className="space-y-4 pt-2 text-left">
                <h5 className="text-[10px] font-bold tracking-wider font-montserrat text-primary/80 uppercase border-b border-slate-200 pb-2 text-left">Proximidades Estratégicas:</h5>
                
                <div className="space-y-5 text-left">
                  {/* Property 1 Card */}
                  <div className="space-y-2.5 bg-white p-3.5 rounded border border-slate-100 shadow-xs">
                    <div className="flex justify-between items-center text-xs text-left">
                      <span className="text-text-main font-extrabold font-montserrat tracking-wide">1. UNIKO (Vila Olímpia)</span>
                      <span className="text-[8px] bg-accent/10 text-accent font-bold px-1.5 py-0.5 rounded font-mono uppercase">Alta Demanda</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs border-l border-slate-200 pl-2">
                        <span className="text-text-muted font-sans font-light">Sedes corporativas Globais (Faria Lima)</span>
                        <span className="text-accent font-extrabold font-mono text-[11px] whitespace-nowrap">4 min.</span>
                      </div>
                      <div className="flex justify-between items-center text-xs border-l border-slate-200 pl-2">
                        <span className="text-text-muted font-sans font-light">Insper & Campus Anhembi Morumbi</span>
                        <span className="text-emerald-700 font-extrabold font-mono text-[11px] whitespace-nowrap">3 min.</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Property 2 Card */}
                  <div className="space-y-2.5 bg-white p-3.5 rounded border border-slate-100 shadow-xs">
                    <div className="flex justify-between items-center text-xs text-left">
                      <span className="text-text-main font-extrabold font-montserrat tracking-wide">2. VERUS (Higienópolis)</span>
                      <span className="text-[8px] bg-slate-100 text-slate-600 font-bold px-1.5 py-0.5 rounded font-mono uppercase">Escassez Zero</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs border-l border-slate-200 pl-2">
                        <span className="text-text-muted font-sans font-light">Universidade Presbiteriana Mackenzie</span>
                        <span className="text-accent font-extrabold font-mono text-[11px] whitespace-nowrap">3 min. a pé</span>
                      </div>
                      <div className="flex justify-between items-center text-xs border-l border-slate-200 pl-2">
                        <span className="text-text-muted font-sans font-light">Santa Casa & Complexos Médicos</span>
                        <span className="text-emerald-700 font-extrabold font-mono text-[11px] whitespace-nowrap">4 min. a pé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Directions button directly matching the button inside screenshot bottom */}
            <a
              href="https://wa.me/5511959568043?text=Olá!%20Gostaria%20de%20receber%20o%20Book%20dos%20Bairros%20(Vila%20Olímpia%20e%20Higienópolis)%20e%20o%20estudo%20de%20Payback."
              target="_blank"
              rel="noreferrer"
              className="w-full mt-8 py-3.5 bg-forest hover:bg-forest-light text-white text-xs font-bold font-montserrat uppercase tracking-[0.15em] rounded-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Navigation size={13} className="fill-white" />
              Solicitar Book dos Bairros e Payback
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
