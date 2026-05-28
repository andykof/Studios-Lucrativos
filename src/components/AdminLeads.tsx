/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLeads } from '../context/LeadContext';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, CheckCircle, ExternalLink, ShieldCheck, Mail, Phone, Calendar } from 'lucide-react';

interface AdminLeadsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminLeads({ isOpen, onClose }: AdminLeadsProps) {
  const { leads, deleteLead, markAsContacted } = useLeads();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm)
  );

  const formatWhatsAppLink = (phone: string, name: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    const message = `Olá ${name}! Vi seu interesse nos Studios Lucrativos do Grupo Kallas e gostaria de te enviar nossa tabela VIP e simulação de parcelas. Podemos falar agora?`;
    return `https://wa.me/55${cleanPhone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="admin-modal" className="fixed inset-0 z-55 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">Painel de Leads Recebidos</h3>
                  <p className="text-xs text-slate-400">Gerencie contatos qualificados em tempo real</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                title="Fechar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Search */}
            <div className="p-4 bg-slate-900/50 border-b border-slate-800/80 flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Buscar por nome, e-mail ou WhatsApp..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-amber-500 text-slate-100 transition-colors placeholder:text-slate-600"
              />
              <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-center justify-center">
                Total de Leads: <strong className="ml-1 text-amber-500">{leads.length}</strong>
              </div>
            </div>

            {/* Leads List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {filteredLeads.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-slate-500 text-sm">Nenhum lead qualificado foi cadastrado ainda.</p>
                  <p className="text-xs text-slate-600 mt-2">Os leads cadastrados no formulário oficial da Hero section aparecerão listados aqui.</p>
                </div>
              ) : (
                filteredLeads.map((lead) => (
                  <div
                    key={lead.id}
                    className={`p-4 rounded-xl border transition-all ${
                      lead.status === 'contacted'
                        ? 'bg-slate-950/40 border-slate-900 opacity-60'
                        : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-base text-slate-200">{lead.name}</span>
                          {lead.status === 'contacted' ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              Atendido
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse">
                              Novos Leads
                            </span>
                          )}
                        </div>

                        {/* Contacts Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-400">
                          <span className="flex items-center gap-2">
                            <Mail size={13} className="text-slate-500" />
                            {lead.email}
                          </span>
                          <span className="flex items-center gap-2">
                            <Phone size={13} className="text-slate-500" />
                            {lead.phone}
                          </span>
                          {lead.propertyInterest && (
                            <span className="col-span-1 md:col-span-2 flex items-center gap-2 mt-1">
                              <span className="text-slate-500 font-medium">Interesse:</span>
                              <span className="text-amber-500 bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/10 font-mono text-[10px]">
                                {lead.propertyInterest === 'verus-mackenzie' ? 'Verus Mackenzie' : lead.propertyInterest === 'uniko-vila-olimpia' ? 'Uniko Vila Olímpia' : 'Ambos Empreendimentos'}
                              </span>
                            </span>
                          )}
                          <span className="flex items-center gap-2 text-[10px] text-slate-500 mt-1">
                            <Calendar size={13} />
                            Cadastrado em: {new Date(lead.createdAt).toLocaleString('pt-BR')}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 self-end md:self-center">
                        {lead.status === 'new' && (
                          <button
                            onClick={() => markAsContacted(lead.id)}
                            className="p-2 hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-400 rounded-lg transition-colors border border-transparent hover:border-emerald-500/20"
                            title="Marcar como Atendido"
                          >
                            <CheckCircle size={17} />
                          </button>
                        )}
                        <a
                          href={formatWhatsAppLink(lead.phone, lead.name)}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 hover:bg-blue-500/10 text-slate-400 hover:text-blue-400 rounded-lg transition-colors border border-transparent hover:border-blue-500/20"
                          title="Falar no WhatsApp"
                        >
                          <ExternalLink size={17} />
                        </a>
                        <button
                          onClick={() => deleteLead(lead.id)}
                          className="p-2 hover:bg-rose-500/10 text-slate-400 hover:text-rose-400 rounded-lg transition-colors border border-transparent hover:border-rose-500/20"
                          title="Excluir Lead"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 text-center text-[10px] text-slate-500">
              *Este painel é integrado ao seu cache local. Os leads capturados aqui simulam o envio para o e-mail cadastrado e para a plataforma <strong>Hostinger Reach</strong>.
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
