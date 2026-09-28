"use client";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { business } from "@/config/business";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-[#e5e7eb]"
            : "bg-gradient-to-b from-black/60 via-black/25 to-transparent pb-2"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <a
              href="#inicio"
              className="flex items-center gap-2.5 group"
              aria-label="Espaço Animal — Ir para o início"
            >
              <img
                src="/logo.png"
                alt="Espaço Animal Pet Shop — Logo"
                className="w-10 h-10 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-sm"
                width={40}
                height={40}
              />
              <div className="hidden sm:block">
                <p className={`font-bold text-base leading-tight transition-colors ${scrolled ? "text-black" : "text-white drop-shadow-sm"}`}>
                  Espaço Animal
                </p>
                <p className={`text-xs leading-tight transition-colors ${scrolled ? "text-[#fb923c]" : "text-[#fde047] font-medium drop-shadow-sm"}`}>
                  Pet Shop &amp; Cia
                </p>
              </div>
            </a>

            {/* Nav — Desktop */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#fb923c] ${
                    scrolled ? "text-[#374151]" : "text-white/95 drop-shadow-sm hover:text-[#fde047]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:+${business.phoneRaw}`}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#fb923c] ${
                  scrolled ? "text-[#374151]" : "text-white/90 drop-shadow-sm hover:text-[#fde047]"
                }`}
                aria-label={`Ligar para ${business.phone}`}
              >
                <Phone size={15} />
                <span>{business.phone}</span>
              </a>
              <Button
                href={business.whatsappUrl}
                target="_blank"
                size="sm"
                variant={scrolled ? "primary" : "outline"}
                className={
                  !scrolled
                    ? "bg-black/45 hover:bg-black/65 text-white border-white/30 backdrop-blur-md shadow-md hover:border-white/50"
                    : undefined
                }
              >
                WhatsApp
              </Button>
            </div>

            {/* Hamburger — Mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled
                  ? "text-black hover:bg-[#ffedd5]"
                  : "text-white bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 shadow-sm"
              }`}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
            >
              {/* Cabeçalho drawer */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-[#e5e7eb]">
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-lg object-cover" width={32} height={32} />
                  <span className="font-bold text-black text-sm">Espaço Animal</span>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-[#ffedd5] text-black transition-colors"
                  aria-label="Fechar menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 px-4 py-6 flex flex-col gap-1" aria-label="Navegação mobile">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="px-4 py-3 rounded-xl text-[#374151] font-medium hover:bg-[#ffedd5] hover:text-[#ea580c] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* CTAs mobile */}
              <div className="px-4 pb-8 flex flex-col gap-3 border-t border-[#e5e7eb] pt-5">
                <Button
                  href={business.whatsappUrl}
                  target="_blank"
                  variant="primary"
                  fullWidth
                  size="md"
                >
                  Falar pelo WhatsApp
                </Button>
                <Button
                  href={`tel:+${business.phoneRaw}`}
                  variant="secondary"
                  fullWidth
                  size="md"
                  icon={<Phone size={16} />}
                >
                  {business.phone}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
