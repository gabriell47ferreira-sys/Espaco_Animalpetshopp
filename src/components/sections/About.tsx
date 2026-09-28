"use client";

import { motion } from "framer-motion";
import { Star, Heart, Users, MapPin } from "lucide-react";
import SectionWrapper, { itemVariants } from "@/components/ui/SectionWrapper";
import { business } from "@/config/business";

const pillars = [
  {
    icon: <Star size={28} className="text-[#ea580c]" />,
    title: "Confiança comprovada",
    description: `${business.rating} estrelas no Google — uma avaliação construída avaliação por avaliação, com clientes reais de Caruaru.`,
    bg: "bg-[#ffedd5]",
  },
  {
    icon: <Heart size={28} className="text-[#ea580c]" />,
    title: "Cuidado de verdade",
    description:
      "Tratamos cada animal com a mesma atenção que você dedica ao seu pet. Porque pra quem ama, não é só uma compra.",
    bg: "bg-[#ffedd5]",
  },
  {
    icon: <Users size={28} className="text-[#ea580c]" />,
    title: "Mais de 300 clientes satisfeitos",
    description: `${business.reviewCountDisplay} avaliações públicas no Google. Não precisamos dizer que somos bons — nossos clientes já disseram.`,
    bg: "bg-[#ffedd5]",
  },
  {
    icon: <MapPin size={28} className="text-[#ea580c]" />,
    title: "No coração de Caruaru",
    description: `No bairro Kennedy, a Espaço Animal é referência local. Perto de você, com o atendimento que você merece.`,
    bg: "bg-[#ffedd5]",
  },
];

export default function About() {
  return (
    <SectionWrapper id="sobre" bg="cream">
      {/* Cabeçalho da seção */}
      <motion.div
        className="text-center mb-12 md:mb-16"
        variants={itemVariants}
      >
        <span className="inline-block bg-[#ffedd5] text-[#ea580c] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          Por que Espaço Animal?
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
          Um pet shop que você pode confiar.
        </h2>
        <p className="text-[#4b5563] text-lg max-w-2xl mx-auto leading-relaxed">
          Em Caruaru, a Espaço Animal é reconhecida pelo atendimento próximo,
          pelos produtos de qualidade e por tratar cada cliente — de dois ou
          quatro patas — com cuidado real.
        </p>
      </motion.div>

      {/* Cards de pilares */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar) => (
          <motion.div
            key={pillar.title}
            className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            variants={itemVariants}
          >
            <div
              className={`w-14 h-14 ${pillar.bg} rounded-xl flex items-center justify-center mb-5`}
            >
              {pillar.icon}
            </div>
            <h3 className="font-bold text-black text-lg mb-2 leading-snug">
              {pillar.title}
            </h3>
            <p className="text-[#6b7280] text-sm leading-relaxed">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
