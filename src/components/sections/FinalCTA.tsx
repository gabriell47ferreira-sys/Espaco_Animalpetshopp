"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import { business } from "@/config/business";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function FinalCTA() {
  return (
    <section id="contato" className="bg-[#fff7ed] section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative bg-[#0c1017] border border-white/15 rounded-3xl overflow-hidden px-6 py-16 md:py-20 text-center shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {/* Elementos decorativos de fundo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea580c] rounded-full -translate-y-32 translate-x-32 opacity-25 pointer-events-none blur-2xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#f59e0b] rounded-full translate-y-24 -translate-x-24 opacity-20 pointer-events-none blur-2xl" />
          <div className="absolute top-1/2 right-8 w-24 h-24 bg-[#fbbf24] rounded-full -translate-y-1/2 opacity-15 pointer-events-none blur-xl" />

          {/* Conteúdo */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.span
              className="inline-block bg-white/10 text-[#fde047] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-[#fde047]/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              Espaço Animal Pet Shop &amp; Cia
            </motion.span>

            <motion.h2
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              Seu pet merece cuidado.
              <br />
              <span className="text-[#fbbf24]">Você merece praticidade.</span>
            </motion.h2>

            <motion.p
              className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            >
              Fale com a Espaço Animal e descubra como podemos ajudar.
              Atendimento próximo, produtos de qualidade e{" "}
              <strong className="text-white font-semibold">
                {business.rating} estrelas no Google
              </strong>{" "}
              comprovam.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            >
              <Button
                href={business.whatsappUrl}
                target="_blank"
                size="lg"
                variant="primary"
                icon={<MessageCircle size={22} />}
                className="bg-[#ea580c] hover:bg-[#f97316] text-white shadow-xl hover:scale-105 transition-transform"
              >
                Falar pelo WhatsApp
              </Button>
              <Button
                href={business.googleMapsUrl}
                target="_blank"
                size="lg"
                variant="outline"
                icon={<MapPin size={22} />}
                className="border-white/30 text-white hover:bg-white/10 hover:border-white shadow-lg"
              >
                Ver no Google Maps
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
