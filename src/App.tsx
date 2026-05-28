/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LeadProvider, useLeads } from './context/LeadContext';
import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import WhyInvestSection from './components/WhyInvestSection';
import PropertyDetailSection from './components/PropertyDetailSection';
import LocationSection from './components/LocationSection';
import FaqSection from './components/FaqSection';
import FooterSection from './components/FooterSection';
import WhatsappButton from './components/WhatsappButton';
import AdminLeads from './components/AdminLeads';
import InfoModal from './components/InfoModal';
import ThankYouSection from './components/ThankYouSection';
import { Sparkles, Phone } from 'lucide-react';

function MainAppContent() {
  const { currentLead, clearCurrentLead } = useLeads();
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [preselectedProperty, setPreselectedProperty] = useState('163m');
  
  // Info Modal states (Privacy / Terms)
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [infoTitle, setInfoTitle] = useState('');
  const [infoContent, setInfoContent] = useState('');

  const openInfoModal = (title: string, content: string) => {
    setInfoTitle(title);
    setInfoContent(content);
    setIsInfoOpen(true);
  };

  const handlePropertySelect = (propertyId: string) => {
    setPreselectedProperty(propertyId);
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
      const input = heroElement.querySelector('input');
      if (input) {
        setTimeout(() => input.focus(), 600);
      }
    }
  };

  // If a lead was successfully captured, transition directly to the Thank You Page!
  if (currentLead) {
    return (
      <ThankYouSection 
        leadName={currentLead.name} 
        onBack={() => {
          clearCurrentLead();
          window.scrollTo({ top: 0, behavior: 'instant' });
        }} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-bg text-text-main selection:bg-accent/30 selection:text-accent font-sans antialiased scroll-smooth">
      
      {/* Dynamic top notifications ribbon */}
      <div id="promo-bar" className="bg-accent text-forest-dark py-2.5 px-4 text-center text-xs font-extrabold tracking-wide flex items-center justify-center gap-2 font-montserrat shadow-sm">
        <Sparkles size={14} className="animate-pulse text-forest-dark animate-spin" />
        <span>ÚLTIMAS UNIDADES: INVISTA EM STUDIOS DE ALTA RENTABILIDADE NA VILA OLÍMPIA E MACKENZIE COM GESTÃO 100% NO AUTOMÁTICO.</span>
        <a href="#hero" className="underline hover:text-white transition-colors uppercase font-mono ml-1 hidden md:inline">SOLICITAR ATENDIMENTO</a>
      </div>

      {/* Floating Header */}
      <header className="sticky top-0 z-40 w-full bg-forest-dark/95 backdrop-blur-md border-b border-accent/20 py-4 px-4 md:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo - Studios Lucrativos */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <span className="w-9 h-9 rounded bg-accent flex items-center justify-center text-forest-dark font-black font-montserrat text-base shadow-lg transition-transform group-hover:scale-105">
              S
            </span>
            <div>
              <span className="block text-sm md:text-base font-extrabold text-white tracking-[0.15em] font-montserrat">
                STUDIOS <span className="text-accent ml-0.5">LUCRATIVOS</span>
              </span>
              <span className="block text-[8px] text-slate-400 font-mono tracking-widest uppercase -mt-0.5">
                Vila Olímpia & Higienópolis
              </span>
            </div>
          </a>

          {/* Flow anchors */}
          <nav className="hidden md:flex items-center gap-6 text-[10px] uppercase font-montserrat font-extrabold tracking-widest text-slate-300">
            <a href="#parceria" className="hover:text-accent transition-colors">Segurança</a>
            <a href="#por-que-investir" className="hover:text-accent transition-colors">Estratégia</a>
            <a href="#plantas" className="hover:text-accent transition-colors">Os Ativos</a>
            <a href="#localizacao" className="hover:text-accent transition-colors">Regiões</a>
            <a href="#faq" className="hover:text-accent transition-colors">FAQ</a>
          </nav>

          {/* Call shortcut */}
          <a
            href="https://wa.me/5511959568043"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-accent hover:bg-accent-hover text-forest-dark px-5 py-2.5 rounded-sm transition-all shadow-md cursor-pointer text-center font-montserrat"
          >
            <Phone size={12} className="fill-forest-dark stroke-0" />
            <span className="hidden sm:inline">Plantão de Vendas</span>
          </a>

        </div>
      </header>

      {/* Main Single Page Layout */}
      <main>
        {/* HERO DOBRA Holding the main form */}
        <HeroSection 
          onSuccess={(name) => {
            console.log("Captured lead qualified: ", name);
          }} 
          preselectedProperty={preselectedProperty}
        />

        {/* TRUST BOARD (Creators & Signatures) */}
        <TrustSection />

        {/* LAZER COMPLETO SECTIONS */}
        <WhyInvestSection />

        {/* PLANTAS INTERATIVAS & DECORADOS */}
        <PropertyDetailSection onPropertySelect={handlePropertySelect} />

        {/* CITY AND IBIRAPUERA LIFESTYLE / MAP LOCATION */}
        <LocationSection />

        {/* FAQ ACCORDION PANEL */}
        <FaqSection />
      </main>

      {/* STATIC FOOTER */}
      <FooterSection 
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenPrivacy={openInfoModal}
      />

      {/* FLOATING INTERACTIVE TELEPHONE COMPONENT */}
      <WhatsappButton />

      {/* HIDDEN DEVELOPMENT DEMO CONSOLE MODAL FOR LEADS TRACKS */}
      <AdminLeads isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      {/* INFO DISPLAY FOR TERMS & POLICIES */}
      <InfoModal 
        isOpen={isInfoOpen} 
        onClose={() => setIsInfoOpen(false)} 
        title={infoTitle} 
        content={infoContent} 
      />

    </div>
  );
}

export default function App() {
  return (
    <LeadProvider>
      <MainAppContent />
    </LeadProvider>
  );
}
