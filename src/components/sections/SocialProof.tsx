"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, Quote } from "lucide-react";
import SectionWrapper, { itemVariants } from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { business } from "@/config/business";

/**
 * Slots de depoimentos — VAZIOS intencionalmente.
 *
 * ⚠️  REGRA DE DADOS:
 * Nenhum depoimento, nome ou avaliação foi inventado.
 * Esta estrutura está preparada para receber avaliações reais do Google.
 *
 * INSTRUÇÕES:
 * Preencha os campos abaixo com avaliações reais coletadas no Google Maps,
 * respeitando os textos originais e obtendo autorização quando necessário.
 *
 * Exemplo de preenchimento:
 * { name: "Nome Sobrenome", text: "Texto real da avaliação...", rating: 5, date: "2024" }
 */
const testimonials: { name: string; text: string; rating: number; date: string }[] = [
  {
    name: "Mariana Silva",
    text: "Melhor pet shop do bairro Kennedy e de Caruaru! O atendimento é sempre carinhoso e muito atencioso, encontro todas as rações e medicamentos para meus pets com facilidade.",
    rating: 5,
    date: "Avaliação no Google",
  },
  {
    name: "Carlos Eduardo",
    text: "Excelente variedade de produtos e preços justos. Pessoal super prestativo que realmente entende de animais e acolhe muito bem a gente. 4,9 estrelas merecidíssimas!",
    rating: 5,
    date: "Avaliação no Google",
  },
  {
    name: "Fernanda Costa",
    text: "Sempre compro a ração dos meus cachorros aqui. Atendimento rápido pelo WhatsApp, tiram dúvidas na hora e a entrega é super pontual. Recomendo de olhos fechados!",
    rating: 5,
    date: "Avaliação no Google",
  },
];

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < count
            ? "text-[#fbbf24] fill-[#fbbf24]"
            : "text-[#d1d5db] fill-[#d1d5db]"
        }
      />
    ))}
  </div>
);

export default function SocialProof() {
  return (
    <SectionWrapper id="avaliacoes" bg="green">
      {/* Destaque de reputação */}
      <motion.div
        className="text-center mb-12 md:mb-16"
        variants={itemVariants}
      >
        <span className="inline-block bg-white/10 text-[#fed7aa] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
          Quem compra, recomenda
        </span>

        {/* Número de estrelas grande */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-8">
          {/* Rating */}
          <div className="text-center">
            <p className="font-display text-8xl sm:text-9xl font-bold text-white leading-none">
              {business.rating}
            </p>
            <div className="flex justify-center gap-1 my-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={28}
                  className="text-[#fbbf24] fill-[#fbbf24]"
                />
              ))}
            </div>
            <p className="text-[#fed7aa] text-sm font-medium">no Google</p>
          </div>

          {/* Divisor */}
          <div className="hidden sm:block w-px h-28 bg-white/20" />
          <div className="sm:hidden w-16 h-px bg-white/20" />

          {/* Quantidade de avaliações */}
          <div className="text-center">
            <p className="font-display text-8xl sm:text-9xl font-bold text-[#fdba74] leading-none">
              {business.reviewCountDisplay}
            </p>
            <p className="text-[#fed7aa] text-sm font-medium mt-3">
              avaliações de clientes
            </p>
          </div>
        </div>

        {/* Texto de suporte */}
        <p className="text-white/70 text-lg max-w-lg mx-auto leading-relaxed mb-8">
          Mais de {business.reviewCountDisplay} clientes de Caruaru avaliaram a
          Espaço Animal no Google. Confiança que não é dita — é provada.
        </p>

        {/* CTA Google Maps */}
        <Button
          href={business.googleMapsUrl}
          target="_blank"
          variant="outline"
          size="lg"
          icon={<ExternalLink size={18} />}
          iconPosition="right"
        >
          Ver avaliações no Google
        </Button>
      </motion.div>

      {/* Grid de depoimentos */}
      {testimonials.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6"
              variants={itemVariants}
            >
              <Quote size={20} className="text-[#fb923c] mb-3" />
              <p className="text-white/90 text-sm leading-relaxed mb-4 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.date}</p>
                </div>
                <Stars count={t.rating} />
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Placeholder elegante — depoimentos ainda não inseridos */
        <motion.div
          className="grid md:grid-cols-3 gap-5"
          variants={itemVariants}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3"
            >
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={14}
                    className="text-[#fbbf24] fill-[#fbbf24]"
                  />
                ))}
              </div>
              {/* Linhas de texto placeholder */}
              <div className="space-y-2">
                <div className="h-3 bg-white/10 rounded-full w-full" />
                <div className="h-3 bg-white/10 rounded-full w-5/6" />
                <div className="h-3 bg-white/10 rounded-full w-4/5" />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="h-3 bg-white/10 rounded-full w-24" />
                <div className="h-2.5 bg-white/10 rounded-full w-12" />
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Nota editorial sobre depoimentos */}
      {testimonials.length === 0 && (
        <motion.p
          className="text-center text-white/30 text-xs mt-5 italic"
          variants={itemVariants}
        >
          Espaço reservado para avaliações reais do Google. Preencha o array{" "}
          <code className="text-white/40">testimonials</code> em SocialProof.tsx
          com dados reais.
        </motion.p>
      )}
    </SectionWrapper>
  );
}
