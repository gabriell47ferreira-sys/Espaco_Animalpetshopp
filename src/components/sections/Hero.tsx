"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, MessageCircle, Star } from "lucide-react";
import { business } from "@/config/business";
import Button from "@/components/ui/Button";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const floatAnimation: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full bg-gradient-to-b from-[#FDD615] via-[#FCDF15] to-[#FDB900] overflow-hidden pt-16 sm:pt-20 md:pt-0"
      aria-label="Hero — Espaço Animal Pet Shop"
    >
      {/* ── Banner Responsivo: Mantém proporção perfeita no mobile e expande no desktop ── */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] md:aspect-auto md:min-h-[580px] lg:min-h-[660px] xl:min-h-[740px] flex items-center">
        
        {/* Vídeo do banner sem cortes */}
        <div className="absolute inset-0 w-full h-full -z-0">
          <video
            src="/hero-dog.mp4"
            poster="/hero-dog-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-[72%_center] sm:object-[70%_center] lg:object-center"
          />
        </div>

        {/* ── Conteúdo posicionado com precisão na ÁREA AMARELA (lado esquerdo) ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-12 h-full flex items-center pointer-events-none">
          <div className="w-[54%] sm:w-[50%] md:w-[48%] lg:w-[42%] max-w-md flex flex-col justify-center gap-2 sm:gap-3 md:gap-4 pointer-events-auto">
            
            {/* Badges de Localização e Avaliação Google */}
            <motion.div
              className="flex flex-wrap items-center gap-1.5 sm:gap-2"
              variants={floatAnimation}
              custom={0.1}
              initial="hidden"
              animate="visible"
            >
              {/* Badge Bairro / Cidade */}
              <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-black/60 hover:bg-black/75 backdrop-blur-md border border-white/25 rounded-full px-2 py-0.5 sm:px-3 sm:py-1 shadow-md transition-colors">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ea580c] animate-pulse shrink-0" />
                <MapPin size={11} className="text-[#fb923c] sm:w-3.5 sm:h-3.5 shrink-0" />
                <span className="text-white text-[10px] sm:text-xs font-semibold tracking-tight sm:tracking-normal whitespace-nowrap">
                  {business.neighborhood}, {business.city}
                </span>
              </div>

              {/* Badge Google 4.9★ */}
              <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-black/60 hover:bg-black/75 backdrop-blur-md border border-white/25 rounded-full px-2 py-0.5 sm:px-3 sm:py-1 shadow-md transition-colors">
                <Star size={11} className="text-[#fbbf24] fill-[#fbbf24] sm:w-3 sm:h-3 shrink-0" />
                <span className="text-white font-bold text-[10px] sm:text-xs">
                  {business.rating}
                </span>
                <span className="text-white/85 text-[9px] sm:text-[11px] hidden xs:inline whitespace-nowrap">
                  (150+ Google)
                </span>
              </div>
            </motion.div>

            {/* Botões de Ação na Área Amarela */}
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-2.5 md:gap-3 w-full"
              variants={floatAnimation}
              custom={0.25}
              initial="hidden"
              animate="visible"
            >
              {/* Botão WhatsApp */}
              <Button
                href={business.whatsappUrl}
                target="_blank"
                size="sm"
                variant="primary"
                icon={<MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 shrink-0" />}
                className="w-full sm:w-auto text-[11px] xs:text-xs sm:text-sm md:text-base py-1.5 xs:py-2 sm:py-3 px-2.5 sm:px-5 font-bold shadow-xl hover:scale-105 transition-transform"
              >
                Falar pelo WhatsApp
              </Button>

              {/* Botão Como chegar */}
              <Button
                href={business.googleMapsUrl}
                target="_blank"
                size="sm"
                variant="secondary"
                icon={<MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 shrink-0" />}
                className="w-full sm:w-auto bg-[#431407] hover:bg-[#270902] text-white border-0 shadow-lg hover:scale-105 transition-transform text-[11px] xs:text-xs sm:text-sm md:text-base py-1.5 xs:py-2 sm:py-3 px-2.5 sm:px-5 font-bold"
              >
                Como chegar
              </Button>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
