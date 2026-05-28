/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, PhoneCall, Mail, ChevronLeft } from 'lucide-react';

interface ThankYouSectionProps {
  leadName?: string;
  onBack: () => void;
}

export default function ThankYouSection({ leadName, onBack }: ThankYouSectionProps) {
  const whatsappUrl = "https://wa.me/5511959568043?text=Olá!%20Preenchi%20o%20cadastro%20VIP%20no%20site%20da%20Studios%20Lucrativos%20e%20gostaria%20de%20receber%20as%20tabelas%20de%20lançamento%25.";

  return (
    <div id="thank-you-view" className="min-h-screen bg-forest-dark text-slate-100 flex flex-col justify-between selection:bg-accent/30 selection:text-white">
      
      {/* Soft elegant luxury ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-accent/10 via-transparent to-transparent blur-3xl pointer-events-none rounded-full" />
      
      {/* Header (Minimalist) */}
      <header className="p-6 relative z-10 w-full max-w-7xl mx-auto flex justify-between items-center border-b border-forest-light/20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-accent uppercase tracking-widest transition-colors duration-200 cursor-pointer"
        >
          <ChevronLeft size={16} /> Voltar ao site
        </button>
        <span className="text-sm font-semibold tracking-wider uppercase text-accent font-montserrat">
          STUDIOS LUCRATIVOS
        </span>
      </header>


      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-2xl bg-forest-light/10 border border-forest-light/35 p-8 md:p-12 rounded-sm text-center shadow-2xl backdrop-blur-xl"
        >
          {/* Animated checkmark */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
            className="w-20 h-20 bg-accent/10 border border-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 size={44} className="stroke-[1.5]" />
          </motion.div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-light font-serif text-white mb-4">
            {leadName ? `Excelente, ${leadName.split(' ')[0]}!` : 'Excelente!'}
          </h1>
          <p className="text-lg font-montserrat font-bold text-accent uppercase tracking-wide mb-3">
            Recebemos seu cadastro VIP
          </p>

          {/* Sub-headline */}
          <p className="text-slate-300 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed font-sans font-light">
            Sua solicitação foi encaminhada diretamente ao nosso secretariado especializado de vendas. Preparamos uma pasta com as plantas técnicas, acabamentos do memorial descritivo e tabelas preliminares de parcelas que será enviada para o seu WhatsApp/e-mail cadastrado.
          </p>

          {/* Golden Priority Box */}
          <div className="bg-accent/5 border border-accent/25 rounded-sm p-6 mb-8 max-w-lg mx-auto">
            <h3 className="text-accent font-bold text-xs tracking-widest uppercase font-montserrat mb-2 flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-accent animate-ping" />
              Prioridade Imediata de Atendimento
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans font-light">
              Prefere agilizar? Conecte-se conosco via WhatsApp agora mesmo. Nosso corretor credenciado está disponível para sanar suas dúvidas online e providenciar o book completo.
            </p>
          </div>

          {/* Main green CTA Button */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full max-w-md bg-accent hover:bg-accent-hover text-forest-dark font-extrabold px-8 py-4.5 rounded-sm text-center tracking-wider uppercase text-xs transition-colors cursor-pointer font-montserrat shadow-xl"
          >
            <PhoneCall size={14} className="fill-forest-dark stroke-0" />
            Iniciar Conversa Prioritária no WhatsApp
          </motion.a>

          {/* Alt email */}
          <div className="mt-8 text-[11px] text-slate-500 flex items-center justify-center gap-2 font-mono">
            <Mail size={14} />
            atendimento@studioslucrativos.online
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="p-6 relative z-10 w-full max-w-7xl mx-auto border-t border-forest-light/20 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <span className="text-[10px] text-slate-500 font-sans">
          © {new Date().getFullYear()} Studios Lucrativos. Parceiro Oficial Grupo Kallas. Todos os direitos reservados.
        </span>
        <div className="flex gap-4 text-[10px] text-slate-500 uppercase tracking-wider font-montserrat">
          <span>Vila Olímpia & Higienópolis, São Paulo</span>
        </div>
      </footer>
    </div>
  );
}
