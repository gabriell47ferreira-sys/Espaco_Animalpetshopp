import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import Categories from "@/components/sections/Categories";
import SocialProof from "@/components/sections/SocialProof";
import InstagramSection from "@/components/sections/Instagram";
import Location from "@/components/sections/Location";
import FinalCTA from "@/components/sections/FinalCTA";

/**
 * Página principal — Espaço Animal Pet Shop & Cia
 *
 * Estrutura da experiência:
 * 1. ATRAIR       → Hero
 * 2. CONFIAR      → TrustBar + About
 * 3. EXPLORAR     → Categories + Services
 * 4. PROVAR       → SocialProof
 * 5. CONECTAR     → Instagram
 * 6. LOCALIZAR    → Location
 * 7. CONVERTER    → FinalCTA
 */
export default function HomePage() {
  return (
    <>
      {/* Navegação fixa */}
      <Header />

      <main>
        {/* 1. HERO — Headline + CTAs + badge de reputação */}
        <Hero />

        {/* 2a. TRUST BAR — 4 sinais de confiança em destaque */}
        <TrustBar />

        {/* 2b. SOBRE — Por que Espaço Animal? — 4 pilares */}
        <About />

        {/* 3. PRODUTOS / SERVIÇOS — Categorias */}
        <Categories />

        {/* 4. PROVA SOCIAL — 4,9★ + +300 avaliações */}
        <SocialProof />

        {/* 5. INSTAGRAM — Acompanhe a Espaço Animal */}
        <InstagramSection />

        {/* 6. LOCALIZAÇÃO — Endereço + mapa + horários */}
        <Location />

        {/* 7. CTA FINAL — Conversão */}
        <FinalCTA />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Botão flutuante WhatsApp — apenas mobile */}
      <WhatsAppFAB />
    </>
  );
}
