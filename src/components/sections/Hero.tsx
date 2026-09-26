"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, MessageCircle, Star } from "lucide-react";
import { business } from "@/config/business";
import Button from "@/components/ui/Button";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const floatAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between overflow-hidden"
      aria-label="Hero — Espaço Animal Pet Shop"
    >
      {/* ── Vídeo animado de fundo (sem foto estática e sem filtro fumê laranja) ── */}
      <div className="absolute inset-0 -z-10">
        <video
          src="/hero-dog.mp4"
          poster="/hero-dog-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ── Topo do Hero: Informações ao redor do Dog ── */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-3 sm:gap-4">
        
        {/* Badge de localização flutuante */}
        <motion.div
          className="inline-flex items-center gap-2 bg-black/45 hover:bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-lg transition-colors"
          variants={floatAnimation}
          custom={0.1}
          initial="hidden"
          animate="visible"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c] animate-pulse" />
          <MapPin size={15} className="text-[#fb923c]" />
          <span className="text-white text-xs sm:text-sm font-medium tracking-wide">
            {business.neighborhood}, {business.city} — {business.state}
          </span>
        </motion.div>

        {/* Badge de reputação Google no topo direito */}
        <motion.div
          className="inline-flex items-center gap-2.5 bg-black/45 hover:bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 shadow-lg transition-colors"
          variants={floatAnimation}
          custom={0.2}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={14}
                className="text-[#fbbf24] fill-[#fbbf24]"
              />
            ))}
          </div>
          <div className="w-px h-4 bg-white/20" />
          <span className="text-white font-bold text-xs sm:text-sm">
            {business.rating}
          </span>
          <span className="text-white/80 text-xs">
            ({business.reviewCountDisplay} no Google)
          </span>
        </motion.div>
      </div>

      {/* ── Centro: Espaço desobstruído para o Dog 3D animado ── */}
      <div className="flex-1 min-h-[180px] sm:min-h-[260px]" />

      {/* ── Base do Hero: Botões de Conversão no espaço inferior ── */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto"
          variants={floatAnimation}
          custom={0.35}
          initial="hidden"
          animate="visible"
        >
          <Button
            href={business.whatsappUrl}
            target="_blank"
            size="lg"
            variant="primary"
            icon={<MessageCircle size={20} />}
            className="w-full sm:w-auto shadow-2xl hover:scale-105 transition-transform text-sm sm:text-base py-3 sm:py-3.5 px-6"
          >
            Falar pelo WhatsApp
          </Button>

          <Button
            href={business.googleMapsUrl}
            target="_blank"
            size="lg"
            variant="secondary"
            icon={<MapPin size={20} />}
            className="w-full sm:w-auto bg-black/55 hover:bg-black/75 text-white border border-white/25 backdrop-blur-md shadow-2xl hover:scale-105 transition-transform text-sm sm:text-base py-3 sm:py-3.5 px-6"
          >
            Como chegar
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
