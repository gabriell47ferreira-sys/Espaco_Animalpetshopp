"use client";

import { motion } from "framer-motion";
import { ExternalLink, Grid, Film, Bookmark, CheckCircle2 } from "lucide-react";
import SectionWrapper, { itemVariants } from "@/components/ui/SectionWrapper";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { business } from "@/config/business";



/**
 * 3 Posts/Reels reais da Espaço Animal (conforme solicitado: reduzido para 3)
 */
const POSTS = [
  {
    id: 1,
    title: "16 Anos Espaço Animal",
    image: "/instagram-post-1.png",
    type: "reels",
    href: "https://www.instagram.com/espacoanimalpetshopecia/reels/",
  },
  {
    id: 2,
    title: "Conheça a Nossa Loja",
    image: "/instagram-post-2.png",
    type: "post",
    href: "https://www.instagram.com/espacoanimalpetshopecia/",
  },
  {
    id: 3,
    title: "Chegou o Melhor Mês do Ano",
    image: "/instagram-post-3.png",
    type: "reels",
    href: "https://www.instagram.com/espacoanimalpetshopecia/reels/",
  },
];

export default function InstagramSection() {
  return (
    <SectionWrapper id="instagram" bg="warm">
      {/* Cabeçalho da Seção no Site */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
        variants={itemVariants}
      >
        <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 shadow-sm">
          <InstagramIcon size={14} />
          Instagram Oficial
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#7c2d12] leading-tight mb-3">
          Acompanhe a Espaço Animal
        </h2>
        <p className="text-[#6b7280] text-base sm:text-lg">
          Veja nossas novidades, rotina da loja e conteúdos exclusivos diretamente no nosso feed.
        </p>
      </motion.div>

      {/* ── Mockup de Página Integrada do Instagram ── */}
      <motion.div
        className="max-w-5xl mx-auto bg-[#0c1017] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        variants={itemVariants}
      >
        {/* Top Header do Perfil */}
        <div className="p-6 sm:p-8 border-b border-white/10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            
            {/* Foto de Perfil com Anel de Story */}
            <div className="relative group shrink-0">
              <div className="p-[3px] rounded-full bg-gradient-to-tr from-[#f97316] via-[#ec4899] to-[#8b5cf6]">
                <div className="p-[2px] bg-[#0c1017] rounded-full">
                  <img
                    src="/logo.png"
                    alt="Espaço Animal Pet Shop"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                    width={96}
                    height={96}
                  />
                </div>
              </div>
            </div>

            {/* Dados do Perfil */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h3 className="font-semibold text-lg sm:text-xl tracking-tight text-white">
                    espacoanimalpetshopecia
                  </h3>
                  <CheckCircle2 size={18} className="text-[#38bdf8] fill-[#38bdf8]/20" />
                </div>
                
                <div className="flex justify-center gap-2">
                  <a
                    href={business.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#0095f6] hover:bg-[#1877f2] text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors"
                  >
                    <InstagramIcon size={14} />
                    <span>Seguir</span>
                  </a>
                  <a
                    href={business.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-lg transition-colors"
                  >
                    <span>Abrir Perfil</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* Contadores */}
              <div className="flex justify-center sm:justify-start gap-6 text-sm mb-3 text-white/90">
                <span><strong className="text-white">858</strong> publicações</span>
                <span><strong className="text-white">+6.8k</strong> seguidores</span>
                <span><strong className="text-white">2.7k</strong> seguindo</span>
              </div>

              {/* Bio */}
              <div className="text-xs sm:text-sm text-white/80 space-y-1">
                <p className="font-semibold text-white">Espaço Animal Pet Shop em Caruaru</p>
                <p>💛 O ESPAÇO DO SEU PET É AQUI</p>
                <p>🛒 Rações, acessórios, medicamentos e muito mais</p>
                <p className="text-white/60">📍 Caruaru — PE | Bairro Kennedy</p>
              </div>
            </div>
          </div>
        </div>



        {/* ── Abas do Instagram (Grid / Reels / Marcados) ── */}
        <div className="flex justify-around border-b border-white/10 text-xs font-semibold uppercase tracking-wider bg-[#0c1017]">
          <button className="flex items-center gap-2 py-3.5 border-b-2 border-[#ea580c] text-white">
            <Grid size={15} className="text-[#ea580c]" />
            <span>Publicações</span>
          </button>
          <a
            href="https://www.instagram.com/espacoanimalpetshopecia/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-3.5 text-white/40 hover:text-white transition-colors"
          >
            <Film size={15} />
            <span>Reels</span>
          </a>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-3.5 text-white/40 hover:text-white transition-colors"
          >
            <Bookmark size={15} />
            <span className="hidden sm:inline">Marcados</span>
          </a>
        </div>

        {/* ── Grade com 3 Posts Reais ── */}
        <div className="p-3 sm:p-6 bg-black/40">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {POSTS.map((post) => (
              <a
                key={post.id}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden bg-[#161b22] border border-white/10 shadow-md block aspect-[4/5] focus:outline-none"
                aria-label={`Ver ${post.title} no Instagram`}
              >
                {/* Imagem do Post */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Badge de Reels */}
                <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[11px] font-semibold text-white border border-white/20">
                  <Film size={12} className="text-[#fbbf24]" />
                  <span>Reels</span>
                </div>

                {/* Overlay no Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <InstagramIcon size={20} className="text-[#f97316]" />
                    <span className="font-semibold text-sm">Ver no Instagram</span>
                  </div>
                  <p className="text-white/80 text-xs line-clamp-2">
                    {post.title} — Espaço Animal Pet Shop &amp; Cia
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Rodapé da integração */}
        <div className="p-4 sm:p-5 bg-[#0a0d13] border-t border-white/10 text-center">
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#fb923c] hover:text-[#fdba74] transition-colors py-2 px-4 rounded-xl hover:bg-white/5"
          >
            <InstagramIcon size={18} />
            <span>Acessar @espacoanimalpetshopecia no Instagram</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
