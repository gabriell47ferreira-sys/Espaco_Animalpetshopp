"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, MessageCircle, Star } from "lucide-react";
import { business } from "@/config/business";
import Button from "@/components/ui/Button";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero — Espaço Animal Pet Shop"
    >
      {/* ── Imagem de fundo ───────────────────────────────────────
          📸 SUBSTITUIR: Troque a URL abaixo pela foto real da loja
          ou por uma imagem fornecida pelo cliente.
          Dimensão ideal: 1920×1080px, formato WebP.
      ────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&q=95&auto=format&fit=crop"
          alt="Cão e gato felizes juntos — Espaço Animal Pet Shop"
          className="w-full h-full object-cover object-[center_right] sm:object-center brightness-105 contrast-105"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradiente em degradê suave: escuro na esquerda (para o texto) e transparente no centro/direita (imagem nítida) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#431407]/90 via-[#431407]/60 sm:via-[#431407]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#431407]/70 via-transparent to-black/20" />
      </div>

      {/* ── Conteúdo ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-2xl">

          {/* Badge de localização */}
          <motion.div
            className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            animate="visible"
          >
            <MapPin size={13} className="text-[#fb923c]" />
            <span className="text-white/90 text-sm font-medium">
              Kennedy, Caruaru — PE
            </span>
          </motion.div>

          {/* Headline principal */}
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            animate="visible"
          >
            Tudo para cuidar do{" "}
            <span className="text-[#fdba74]">seu pet,</span>{" "}
            perto de você.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
            variants={fadeUp}
            custom={0.35}
            initial="hidden"
            animate="visible"
          >
            Produtos, cuidados e atendimento para quem trata{" "}
            <strong className="text-white font-semibold">
              seu pet como parte da família.
            </strong>
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-10"
            variants={fadeUp}
            custom={0.48}
            initial="hidden"
            animate="visible"
          >
            <Button
              href={business.whatsappUrl}
              target="_blank"
              size="lg"
              variant="primary"
              icon={<MessageCircle size={20} />}
            >
              Falar pelo WhatsApp
            </Button>
            <Button
              href={business.googleMapsUrl}
              target="_blank"
              size="lg"
              variant="outline"
              icon={<MapPin size={20} />}
            >
              Como chegar
            </Button>
          </motion.div>

          {/* Badge de reputação */}
          <motion.div
            className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3"
            variants={fadeUp}
            custom={0.6}
            initial="hidden"
            animate="visible"
          >
            {/* Estrelas */}
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-[#fbbf24] fill-[#fbbf24]"
                />
              ))}
            </div>

            <div className="w-px h-8 bg-white/20" />

            {/* Nota */}
            <div className="text-center">
              <p className="text-white font-bold text-xl leading-none">
                {business.rating}
              </p>
              <p className="text-white/70 text-xs mt-0.5">no Google</p>
            </div>

            <div className="w-px h-8 bg-white/20" />

            {/* Avaliações */}
            <div className="text-center">
              <p className="text-white font-bold text-xl leading-none">
                {business.reviewCountDisplay}
              </p>
              <p className="text-white/70 text-xs mt-0.5">avaliações</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-center justify-center"
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <div className="w-1 h-2.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
