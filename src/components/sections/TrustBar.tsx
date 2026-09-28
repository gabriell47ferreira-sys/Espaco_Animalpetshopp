"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, Phone, ThumbsUp, MessageCircle, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { business } from "@/config/business";

const cards = [
  {
    id: "google-rating",
    icon: <Star className="w-5 h-5 text-[#fbbf24] fill-[#fbbf24]" />,
    iconBg: "bg-[#fbbf24]/20 border border-[#fbbf24]/35",
    badge: "Google 4.9 ★",
    badgeColor: "text-[#fde047] bg-[#fbbf24]/15 border border-[#fbbf24]/25",
    title: `${business.rating} ★ no Google`,
    subtitle: "Classificação máxima",
    detail: "Avaliações públicas reais",
    href: business.googleMapsUrl,
    actionText: "Ver no Google Maps",
    external: true,
  },
  {
    id: "reviews",
    icon: <ThumbsUp className="w-5 h-5 text-[#fb923c]" />,
    iconBg: "bg-[#ea580c]/20 border border-[#ea580c]/35",
    badge: "Confiança",
    badgeColor: "text-[#fed7aa] bg-[#ea580c]/15 border border-[#ea580c]/25",
    title: `${business.reviewCountDisplay} Avaliações`,
    subtitle: "Clientes satisfeitos",
    detail: "Nota comprovada por quem compra",
    href: business.googleMapsUrl,
    actionText: "Conferir opiniões",
    external: true,
  },
  {
    id: "location",
    icon: <MapPin className="w-5 h-5 text-[#f97316]" />,
    iconBg: "bg-[#f97316]/20 border border-[#f97316]/35",
    badge: "Localização",
    badgeColor: "text-[#fed7aa] bg-[#f97316]/15 border border-[#f97316]/25",
    title: "Kennedy — Caruaru",
    subtitle: business.address,
    detail: "Fácil acesso e estacionamento",
    href: business.googleMapsUrl,
    actionText: "Como chegar",
    external: true,
  },
  {
    id: "phone",
    icon: <Phone className="w-5 h-5 text-[#38bdf8]" />,
    iconBg: "bg-[#38bdf8]/20 border border-[#38bdf8]/35",
    badge: "Atendimento",
    badgeColor: "text-[#bae6fd] bg-[#38bdf8]/15 border border-[#38bdf8]/25",
    title: business.phone,
    subtitle: "Atendimento direto",
    detail: "Seg a Sex 07:30–18:30 · Sáb 13h",
    href: `tel:+${business.phoneRaw}`,
    actionText: "Ligar agora",
    external: false,
  },
  {
    id: "whatsapp",
    icon: <MessageCircle className="w-5 h-5 text-[#25d366]" />,
    iconBg: "bg-[#25d366]/20 border border-[#25d366]/40",
    badge: "Canal Oficial",
    badgeColor: "text-[#86efac] bg-[#25d366]/20 border border-[#25d366]/30 font-bold",
    title: "Falar pelo WhatsApp",
    subtitle: "Tire dúvidas e compre",
    detail: "Resposta ágil e atenciosa",
    href: business.whatsappUrl,
    actionText: "Iniciar conversa",
    external: true,
    isCta: true,
  },
];

export default function TrustBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Rotação automática suave no mobile (a cada 3.8s)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <section
      aria-label="Informações de confiança — Espaço Animal"
      className="relative z-20 w-full bg-[#FFB50B] bg-gradient-to-b from-[#FFB50B] via-[#f59e0b]/35 to-[#fff7ed] pt-2 pb-8 sm:pb-10 md:pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Versão Desktop: Grid Horizontal Balanceado com Efeito Fumê ── */}
        <div className="hidden md:grid md:grid-cols-5 gap-3.5 items-stretch">
          {cards.map((card, i) => {
            const isWhatsapp = card.isCta;
            return (
              <motion.a
                key={card.id}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className={`group relative flex flex-col justify-between p-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 shadow-xl ${
                  isWhatsapp
                    ? "bg-black/75 hover:bg-black/85 border-[#25d366]/40 hover:border-[#25d366] ring-1 ring-[#25d366]/20"
                    : "bg-black/60 hover:bg-black/75 border-white/20 hover:border-white/40"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Linha superior com Ícone e Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${card.iconBg}`}>
                      {card.icon}
                    </div>
                    <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* Informações Centrais */}
                  <h3 className={`font-bold text-base leading-tight mb-0.5 ${isWhatsapp ? "text-[#25d366]" : "text-white"}`}>
                    {card.title}
                  </h3>
                  <p className="text-white/80 text-xs font-medium leading-snug">
                    {card.subtitle}
                  </p>
                  <p className="text-white/55 text-[11px] leading-tight mt-1">
                    {card.detail}
                  </p>
                </div>

                {/* Ação no rodapé do cartão */}
                <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold">
                  <span className={`${isWhatsapp ? "text-[#25d366]" : "text-[#fdba74]"} group-hover:underline flex items-center gap-1`}>
                    {card.actionText}
                    <ExternalLink size={11} className="shrink-0" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* ── Versão Mobile: Carrossel de Balão Fumê Interativo ── */}
        <div
          className="md:hidden relative max-w-sm mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Cartão Ativo com Animação Suave */}
          <div className="relative min-h-[170px] flex items-center">
            <AnimatePresence mode="wait">
              {cards.map((card, idx) => {
                if (idx !== activeIndex) return null;
                const isWhatsapp = card.isCta;
                return (
                  <motion.a
                    key={card.id}
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className={`w-full flex flex-col justify-between p-5 rounded-2xl backdrop-blur-xl border shadow-2xl transition-colors ${
                      isWhatsapp
                        ? "bg-black/80 border-[#25d366]/50 ring-1 ring-[#25d366]/30"
                        : "bg-black/65 border-white/25"
                    }`}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${card.iconBg}`}>
                          {card.icon}
                        </div>
                        <span className={`text-[11px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full ${card.badgeColor}`}>
                          {card.badge}
                        </span>
                      </div>

                      <h3 className={`font-bold text-lg leading-tight mb-1 ${isWhatsapp ? "text-[#25d366]" : "text-white"}`}>
                        {card.title}
                      </h3>
                      <p className="text-white/85 text-sm font-medium leading-snug">
                        {card.subtitle}
                      </p>
                      <p className="text-white/60 text-xs leading-snug mt-1">
                        {card.detail}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                      <span className={`${isWhatsapp ? "text-[#25d366]" : "text-[#fdba74]"} flex items-center gap-1.5`}>
                        {card.actionText}
                        <ExternalLink size={12} className="shrink-0" />
                      </span>
                      <span className="text-white/40 text-[11px]">
                        {activeIndex + 1} de {cards.length}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Controles de Navegação e Indicadores de Bolinha (Dots) */}
          <div className="flex items-center justify-between mt-3 px-1">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-colors"
              aria-label="Cartão anterior"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5" aria-label="Indicadores do carrossel">
              {cards.map((card, i) => (
                <button
                  key={card.id}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 bg-black"
                      : "w-2 bg-black/35 hover:bg-black/60"
                  }`}
                  aria-label={`Ir para ${card.title}`}
                  aria-current={i === activeIndex}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-colors"
              aria-label="Próximo cartão"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

