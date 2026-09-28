"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { business } from "@/config/business";

/**
 * Botão flutuante de WhatsApp — visível em todas as telas em tempo integral.
 * Posicionado no canto inferior direito, com destaque visual e animação de presença.
 */
export default function WhatsAppFAB() {
  return (
    <motion.a
      href={business.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp — Canal Oficial"
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center gap-2.5
        bg-[#25d366] hover:bg-[#20ba59] text-white
        px-5 py-3.5 rounded-full
        shadow-[0_6px_25px_rgba(37,211,102,0.6)]
        hover:shadow-[0_8px_30px_rgba(37,211,102,0.85)]
        border border-white/30 backdrop-blur-sm
        font-bold text-sm sm:text-base
        transition-all duration-200
        group cursor-pointer select-none
      `}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Ponto pulsante de disponibilidade online */}
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
      </span>

      <MessageCircle size={22} className="shrink-0 group-hover:rotate-12 transition-transform duration-300" strokeWidth={2.3} />
      <span className="tracking-tight drop-shadow-sm">WhatsApp</span>
    </motion.a>
  );
}

