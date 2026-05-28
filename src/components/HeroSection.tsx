/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useLeads } from '../context/LeadContext';
import { motion } from 'motion/react';
import { Shield, Sparkles, AlertCircle, ArrowRight, Loader2, Sparkle, Calendar, Phone } from 'lucide-react';

interface HeroSectionProps {
  onSuccess: (name: string) => void;
  preselectedProperty?: string;
}

export default function HeroSection({ onSuccess, preselectedProperty = 'uniko' }: HeroSectionProps) {
  const { addLead } = useLeads();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('uniko');
  const [contactPreference, setContactPreference] = useState('whatsapp');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  useEffect(() => {
    if (preselectedProperty) {
      setInterest(preselectedProperty);
    }
  }, [preselectedProperty]);

  const validatePhone = (num: string) => {
    const raw = num.replace(/\D/g, '');
    return raw.length >= 10 && raw.length <= 11;
  };

  const validateEmail = (mail: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 10) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setPhone(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string; phone?: string } = {};

    if (!name.trim() || name.trim().split(' ').length < 2) {
      newErrors.name = 'Insira seu nome completo (Nome e Sobrenome).';
    }
    if (!validateEmail(email)) {
      newErrors.email = 'Insira um e-mail válido.';
    }
    if (!validatePhone(phone)) {
      newErrors.phone = 'Insira um número de telefone/WhatsApp válido com DDD.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await addLead({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        propertyInterest: `${interest === 'uniko' ? 'UNIKO Vila Olímpia' : interest === 'verus' ? 'VERUS Mackenzie' : 'Ambos os Projetos'} (Preferência: ${contactPreference})`,
      });
      onSuccess(name.trim());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100vh] md:min-h-screen flex items-center bg-forest-dark overflow-hidden py-16 px-4 md:px-8">
      {/* Background Graphic representing premium urban and architecture focus */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://segredosdeviagem.com.br/wp-content/uploads/2019/10/brazil-1842205_1920.jpg"
          alt="Studios Lucrativos Sao Paulo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-45 object-center scale-100"
        />
        {/* Custom balanced dark masking: solid transparent layer + subtle direction gradients */}
        <div className="absolute inset-0 bg-forest-dark/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest-dark/40 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-forest-dark/70" />
      </div>

      {/* Dynamic Gold Light Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 blur-3xl rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8">
        
        {/* Left Specification Column + Monumental Headings */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-12">
          
          {/* Header specification grid focusing on critical ICP metrics */}
          <div className="space-y-6 border-b border-accent/20 pb-8 max-w-lg">
            
            <div className="space-y-4 font-sans text-left">
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2 text-white">
                  <span className="text-xl md:text-2xl font-black font-montserrat tracking-tight text-accent animate-pulse">UNIKO VILA OLÍMPIA</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400">/ A partir de R$ 275k</span>
                </div>
                <span className="text-[11px] text-slate-300 font-light block">Estratégia Faria Lima: Demanda corporativa pagando o seu financiamento.</span>
              </div>
              
              <div className="flex flex-col gap-1 border-t border-forest-light/30 pt-3">
                <div className="flex items-baseline gap-2 text-white">
                  <span className="text-xl md:text-2xl font-black font-montserrat tracking-tight text-accent">VERUS MACKENZIE</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400">/ R$ 13.900 o m²</span>
                </div>
                <span className="text-[11px] text-slate-300 font-light block">Distorção em Higienópolis: Polo universitário com vacância histórica zero.</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-left">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('plantas')}
                className="px-6 py-2.5 bg-transparent border border-accent text-accent text-xs font-bold font-montserrat uppercase tracking-wider hover:bg-accent hover:text-white transition-all cursor-pointer rounded-sm"
              >
                Analisar as Plantas
              </motion.button>
            </div>
          </div>

          {/* Central Title and brand matching the template */}
          <div className="space-y-4 text-left">
            <span className="text-xs tracking-[0.25em] font-extrabold text-accent uppercase font-montserrat flex items-center gap-2">
              <Sparkle size={12} className="text-accent animate-pulse" />
              RENTABILIADE IMOBILIÁRIA ATIVA
            </span>
            <h1 className="text-4.5xl md:text-6xl lg:text-7xl font-light text-white tracking-wide font-serif leading-none">
              STUDIOS <br />
              <span className="font-extrabold font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-accent">
                LUCRATIVOS
              </span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed font-sans font-light">
              Rentabilize acima da renda fixa e proteja-se da inflação em tijolo. Invista nos 2 maiores eixos de alta liquidez de São Paulo (<strong>Vila Olímpia e Higienópolis/Mackenzie</strong>) com gestão integrada.
            </p>
          </div>

        </div>

        {/* Right Conversion Lead Form - Gold Glassmorphism design suitable for high net worth buyers */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full bg-forest-dark/95 backdrop-blur-md border border-accent/30 p-8 rounded-lg shadow-2xl relative overflow-hidden text-white"
          >
            {/* Top gold line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-hover to-accent" />

            {/* Form Header */}
            <div className="mb-6 space-y-2 text-left">
              <span className="text-[10px] tracking-widest font-bold font-montserrat text-accent uppercase">
                Acesso Privilegiado VIP - Tabela Primeiro Lote
              </span>
              <h2 className="text-xl font-bold font-serif text-white tracking-wide leading-tight">
                Receba Planilhas de Payback e Fluxo de Obras
              </h2>
              <p className="text-xs text-slate-300 font-light font-sans leading-relaxed">
                Preencha abaixo para receber metragens exatas, book comercial com as plantas de alta rentabilidade e fluxo completo de pagamento.
              </p>
            </div>

            {/* Entry Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Contact preference */}
              <div className="space-y-1.5 text-left">
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-accent font-montserrat">
                  Preferencia de Envio das Tabelas:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'whatsapp', label: 'WhatsApp' },
                    { id: 'phone', label: 'Ligação' },
                    { id: 'email', label: 'E-mail' }
                  ].map((pref) => (
                    <button
                      key={pref.id}
                      type="button"
                      onClick={() => setContactPreference(pref.id)}
                      className={`py-2 px-1 text-center text-xs font-bold rounded-sm border transition-all cursor-pointer ${
                        contactPreference === pref.id
                          ? 'bg-accent/20 border-accent text-accent font-extrabold shadow-sm'
                          : 'bg-transparent border-forest-light/40 text-slate-300 hover:border-slate-400'
                      }`}
                    >
                      {pref.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Name */}
              <div className="space-y-1 text-left">
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 font-montserrat">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  placeholder="Ex: Anderson Abreu"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  disabled={loading}
                  className={`w-full px-4 py-2.5 text-sm bg-forest-light/20 border rounded-sm text-white focus:outline-none focus:bg-forest-light/35 focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-500 ${
                    errors.name ? 'border-accent' : 'border-forest-light/40 focus:border-accent'
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] text-accent flex items-center gap-1.5 mt-1 font-medium">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Input Email */}
              <div className="space-y-1 text-left">
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 font-montserrat">
                  E-mail do Investidor
                </label>
                <input
                  type="email"
                  placeholder="seuemail@empresa.com.br"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  disabled={loading}
                  className={`w-full px-4 py-2.5 text-sm bg-forest-light/20 border rounded-sm text-white focus:outline-none focus:bg-forest-light/35 focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-500 ${
                    errors.email ? 'border-accent' : 'border-forest-light/40 focus:border-accent'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-accent flex items-center gap-1.5 mt-1 font-medium">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Input Phone */}
              <div className="space-y-1 text-left">
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 font-montserrat">
                  WhatsApp com DDD
                </label>
                <input
                  type="text"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => {
                    handlePhoneChange(e);
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  disabled={loading}
                  className={`w-full px-4 py-2.5 text-sm bg-forest-light/20 border rounded-sm text-white focus:outline-none focus:bg-forest-light/35 focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-500 ${
                    errors.phone ? 'border-accent' : 'border-forest-light/40 focus:border-accent'
                  }`}
                />
                {errors.phone && (
                  <p className="text-[11px] text-accent flex items-center gap-1.5 mt-1 font-medium">
                    <AlertCircle size={12} /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Planta filter selection */}
              <div className="space-y-1 text-left">
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 font-montserrat">
                  Ativo de Maior Interesse:
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  disabled={loading}
                  className="w-full px-4 py-2.5 text-sm bg-forest-dark border border-forest-light/40 rounded-sm text-white focus:outline-none focus:border-accent cursor-pointer transition-colors"
                >
                  <option value="uniko">UNIKO Vila Olímpia (A partir de R$ 275k)</option>
                  <option value="verus">VERUS Mackenzie (Distorção: R$ 13.900/m²)</option>
                  <option value="ambos">Ambos os Projetos (Combo de Rendabilidade)</option>
                </select>
              </div>

              {/* Submit button with golden glowing effect */}
              <motion.button
                whileHover={{ scale: 1.01, boxShadow: '0 0 15px rgba(196, 164, 125, 0.4)' }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 mt-2 bg-accent hover:bg-accent-hover text-forest-dark font-extrabold uppercase tracking-wider text-xs rounded-sm flex items-center justify-center gap-2 cursor-pointer transition-all transition-colors shadow-lg"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin text-forest-dark" />
                    Enviando ao Consultor de Portfólio...
                  </>
                ) : (
                  <>
                    Quero Receber Book de Dividendos
                    <ArrowRight size={15} />
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-slate-400 font-light">
              <Shield size={11} className="text-accent" />
              Seus dados confidenciais sob proteção total (LGPD).
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
