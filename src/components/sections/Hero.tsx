"use client";

import { motion } from "framer-motion";
import { Navigation } from "lucide-react";
import { business } from "@/config/business";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full bg-[#FFBE0E] bg-gradient-to-b from-[#FCAE0C] via-[#FFBE0E] to-[#FFB50B] overflow-hidden pt-16 sm:pt-20 md:pt-20 pb-4 sm:pb-6 md:pb-8"
      aria-label="Hero — Espaço Animal Pet Shop"
    >
      {/* ── Banner Cinematográfico: Vídeo do cão 3D e letreiro Espaço Animal ── */}
      <motion.div
        className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {/*
          Proporção nativa 16:9 contínua e sem cortes:
          O cão e o letreiro 3D 'Espaço Animal' ficam perfeitamente enquadrados e visíveis.
        */}
        <div className="relative w-full aspect-[16/9] max-h-[74vh] flex items-center justify-center rounded-2xl md:rounded-3xl overflow-hidden shadow-sm">
          
          {/* Botão 'Como chegar' em destaque na área amarela do Hero */}
          <motion.a
            href={business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 left-3 sm:top-5 sm:left-5 md:top-7 md:left-7 z-30 inline-flex items-center gap-2 bg-[#1c1917] hover:bg-black text-white hover:text-[#fde047] border-2 border-[#f59e0b] hover:border-white px-3.5 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full font-bold text-xs sm:text-sm md:text-base shadow-[0_8px_25px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-200 group cursor-pointer"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Como chegar ao Espaço Animal no Google Maps"
          >
            <span className="w-2 h-2 rounded-full bg-[#ea580c] group-hover:bg-[#fde047] animate-pulse shrink-0" />
            <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#fb923c] group-hover:text-[#fde047] shrink-0" />
            <span className="tracking-wide">Como chegar</span>
          </motion.a>

          <video
            src="/hero-dog.mp4"
            poster="/hero-dog-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-contain md:object-cover object-center select-none"
            aria-label="Espaço Animal Pet Shop — Animação do cão e letreiro 3D"
          />
        </div>
      </motion.div>
    </section>
  );
}

