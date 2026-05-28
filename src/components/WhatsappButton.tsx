/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsappButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = "https://wa.me/5511959568043?text=Olá!%20Estava%20navegando%20no%20site%20da%20Studios%20Lucrativos%20e%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20as%20plantas.";

  useEffect(() => {
    // Show tooltips briefly after load to grab attention
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-3.5 bg-white text-forest-dark text-xs py-2.5 px-4 rounded-xl border border-slate-200 shadow-2xl flex items-center gap-3 max-w-xs text-right whitespace-nowrap"
          >
            <div className="text-left font-sans">
              <span className="block font-bold text-emerald-600 font-montserrat">Studios Lucrativos</span>
              <span className="text-[11px] text-text-muted font-medium">Fale com nosso corretor VIP</span>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse ml-2" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-colors focus:outline-none relative"
        title="Falar no WhatsApp"
      >
        {/* Radar Effect Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping -z-10" />
        <PhoneCall size={24} className="fill-white/10" />
      </motion.a>
    </div>
  );
}
