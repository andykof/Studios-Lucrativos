/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, Award } from 'lucide-react';

interface FooterSectionProps {
  onOpenAdmin: () => void;
  onOpenPrivacy: (title: string, text: string) => void;
}

export default function FooterSection({ onOpenAdmin, onOpenPrivacy }: FooterSectionProps) {
  const privacyText = `A sua privacidade é de extrema relevância no portal Studios Lucrativos.

1. Coleta de Informações: Ao preencher nosso formulário de contato ou solicitar atendimento via WhatsApp, coletamos seu Nome Completo, endereço de E-mail, número de Telefone/WhatsApp e preferências de atendimento de acordo com a Lei Geral de Proteção de Dados (LGPD).
2. Finalidade dos Dados: Os dados coletados destinam-se unicamente ao envio confidencial das tabelas oficiais de preços, fluxos de pagamento de obras, plantas de estúdios e agendamento de atendimentos executivos.
3. Compartilhamento: Garantimos que seus dados não serão compartilhados com terceiros alheios ao processo oficial de comercialização e atendimento do Grupo Kallas e correspondentes autorizados.
4. Cancelamento: A qualquer instante, você poderá requerer a exclusão completa de seu cadastro ou revogar privilégios de mensagens.`;

  const termsText = `Estes Termos regem o acesso à vitrine digital do portfólio de Studios Lucrativos.

1. Conteúdo Ilustrativo: As imagens decoradas, implantações de lazer e perspectivas botânicas pertencem ao material preliminar artístico das construtoras parceiras (como Grupo Kallas), podendo sofrer variações sutis no projeto final. O detalhamento exato constará no Memorial Descritivo do Imóvel.
2. Precisão de Valores: Toda e qualquer simulação financeira, projeção de retorno com aluguel (payback) ou valores de investimento possui caráter ilustrativo e de referência de mercado de curta temporada.
3. Responsabilidade de Dados: O cadastrado garante que as informações fornecidas são reais, válidas e pertencem ao próprio.`;

  return (
    <footer className="bg-forest-dark text-slate-400 py-16 border-t border-forest-light/30 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Core footer layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1: Logo, Brand & Partner Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded bg-accent flex items-center justify-center text-forest-dark font-extrabold font-montserrat text-sm shadow">
                S
              </span>
              <span className="text-base font-bold text-white tracking-[0.2em] font-montserrat uppercase">
                STUDIOS <span className="text-accent">LUCRATIVOS</span>
              </span>
            </div>
            
            <p className="text-slate-400 leading-relaxed max-w-sm font-light">
              Estúdios inteligentes em microrregiões estratégicas de São Paulo (Vila Olímpia e Higienópolis/Mackenzie). Somos parceiros credenciados do Grupo Kallas, garantindo máxima segurança imobiliária e solidez institucional.
            </p>

            <div className="flex items-center gap-2 text-slate-500 font-bold font-montserrat uppercase tracking-wider text-[10px]">
              <Award size={14} className="text-accent/50" />
              <span>Parceiro Oficial Credenciado Grupo Kallas</span>
            </div>
          </div>

          {/* Col 2: Main contact particulars */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-montserrat uppercase tracking-widest text-[10px] font-bold text-accent">Atendimento & Reservas</h4>
            
            <ul className="space-y-3 font-sans font-light">
              <li>
                <a
                  href="https://wa.me/5511959568043"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 hover:text-accent transition-colors font-bold text-slate-300 font-montserrat text-sm"
                >
                  <Phone size={14} className="text-accent" />
                  +55 (11) 95956-8043
                </a>
              </li>
              <li>
                <a
                  href="mailto:atendimento@studioslucrativos.online"
                  className="flex items-center gap-2.5 hover:text-accent transition-colors text-slate-300"
                >
                  <Mail size={14} className="text-slate-400" />
                  atendimento@studioslucrativos.online
                </a>
              </li>
              <li className="text-slate-500 text-[10px] font-sans">
                Atendimento online via WhatsApp disponível. Para agendamento presencial no estande de vendas, fale diretamente com nossa assessoria VIP.
              </li>
            </ul>
          </div>

          {/* Col 3: Legals & Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-montserrat uppercase tracking-widest text-[10px] font-bold text-accent">Informações Regulatórias</h4>
            
            <ul className="space-y-2.5 font-light">
              <li>
                <button
                  onClick={() => onOpenPrivacy('Termos de Uso', termsText)}
                  className="hover:text-accent transition-colors cursor-pointer text-left focus:outline-none text-slate-300 font-medium whitespace-nowrap"
                >
                  Termos de Uso
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPrivacy('Política de Privacidade', privacyText)}
                  className="hover:text-accent transition-colors cursor-pointer text-left focus:outline-none text-slate-300 font-medium whitespace-nowrap"
                >
                  Política de Privacidade
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Brand Developer Logotypes Showcase with only Studios Lucrativos and Grupo Kallas */}
        <div className="border-t border-forest-light/30 pt-8 flex flex-wrap justify-center items-center gap-12 text-center opacity-85">
          
          {/* Logo 1: Studios Lucrativos */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1.5 bg-black/15 py-2 px-4 rounded-sm border border-forest-light/20">
              <span className="w-5 h-5 rounded bg-accent flex items-center justify-center text-forest-dark font-black font-montserrat text-xs">S</span>
              <span className="font-extrabold text-white text-xs tracking-[0.15em] font-montserrat uppercase">STUDIOS <span className="text-accent">LUCRATIVOS</span></span>
            </div>
            <span className="text-[8px] text-slate-500 font-mono tracking-widest uppercase">Consultoria de Ativos</span>
          </div>

          {/* Logo 2: Grupo Kallas */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1 bg-black/15 py-2 px-4 rounded-sm border border-forest-light/20">
              <span className="font-black text-white text-sm tracking-widest font-montserrat">KALLAS</span>
              <span className="text-[8px] font-mono text-accent uppercase font-bold border-l border-accent/40 pl-1.5 ml-1.5 leading-none">GRUPO</span>
            </div>
            <span className="text-[8px] text-slate-500 font-mono tracking-widest uppercase">Parceiro Oficial de Incorporação</span>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-forest-light/25 pt-6 space-y-4 max-w-4xl mx-auto text-center text-[10px] text-slate-500 leading-relaxed font-light">
          <p>
            O detalhamento dos serviços, mobiliário de lazer de áreas comuns, equipamentos e acabamentos do Uniko Vila Olímpia e Verus Mackenzie constará integralmente em seus respectivos Memoriais Descritivos registrados nos termos da Lei Federal 4.591/64. As imagens artísticas e de mobília são ilustrativas para fins de divulgação prévia de investimento.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-600 font-sans border-t border-forest-light/15 pt-4 text-[9px] uppercase tracking-wider">
            <span>© {new Date().getFullYear()} Studios Lucrativos. Parceiro de vendas Grupo Kallas. Todos os direitos reservados.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
