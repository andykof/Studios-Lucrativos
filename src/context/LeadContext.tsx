/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Lead } from '../types';

interface LeadContextType {
  leads: Lead[];
  addLead: (lead: Omit<Lead, 'id' | 'createdAt' | 'status'>) => Promise<Lead>;
  currentLead: Lead | null;
  clearCurrentLead: () => void;
  deleteLead: (id: string) => void;
  markAsContacted: (id: string) => void;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export function LeadProvider({ children }: { children: React.ReactNode }) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [currentLead, setCurrentLead] = useState<Lead | null>(null);

  // Load leads from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('studios_lucrativos_leads');
    if (stored) {
      try {
        setLeads(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse leads', e);
      }
    }
  }, []);

  // Save leads to localStorage on update
  const saveLeadsToStorage = (updatedLeads: Lead[]) => {
    setLeads(updatedLeads);
    localStorage.setItem('studios_lucrativos_leads', JSON.stringify(updatedLeads));
  };

  const addLead = async (leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>) => {
    // Simulate API delay for premium feel & Hostinger Reach integration simulator
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newLead: Lead = {
      ...leadData,
      id: `lead_${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    const updated = [newLead, ...leads];
    saveLeadsToStorage(updated);
    setCurrentLead(newLead);
    return newLead;
  };

  const deleteLead = (id: string) => {
    const updated = leads.filter((l) => l.id !== id);
    saveLeadsToStorage(updated);
  };

  const markAsContacted = (id: string) => {
    const updated = leads.map((l) =>
      l.id === id ? { ...l, status: 'contacted' as const } : l
    );
    saveLeadsToStorage(updated);
  };

  const clearCurrentLead = () => {
    setCurrentLead(null);
  };

  return (
    <LeadContext.Provider
      value={{
        leads,
        addLead,
        currentLead,
        clearCurrentLead,
        deleteLead,
        markAsContacted,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
}

export function useLeads() {
  const context = useContext(LeadContext);
  if (!context) {
    throw new Error('useLeads must be used within a LeadProvider');
  }
  return context;
}
