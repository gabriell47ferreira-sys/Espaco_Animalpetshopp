"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { business } from "@/config/business";

/**
 * Botão flutuante de WhatsApp — visível apenas no mobile.
 * Posicionado no canto inferior direito, acima do conteúdo.
 */
export default function WhatsAppFAB() {
  return (
    <motion.a
      href={business.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className={`
        fixed bottom-5 right-5 z-50
        flex items-center gap-2
        bg-[#25d366] text-white
        px-4 py-3 rounded-2xl
        shadow-[0_4px_20px_rgba(37,211,102,0.5)]
        font-semibold text-sm
        md:hidden
      `}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={20} strokeWidth={2.5} />
      <span>WhatsApp</span>
    </motion.a>
  );
}
