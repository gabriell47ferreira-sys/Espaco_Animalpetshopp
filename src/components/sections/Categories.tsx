"use client";

import { motion } from "framer-motion";
import { MessageCircle, UtensilsCrossed, Sparkles, ShieldPlus, Package } from "lucide-react";
import SectionWrapper, { itemVariants } from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { business } from "@/config/business";

/**
 * Categorias de produtos — baseadas no segmento pet shop identificado.
 *
 * ⚠️  REGRA DE DADOS:
 * Estas são CATEGORIAS GERAIS do segmento, não afirmações de produtos específicos.
 * Não foram inventados produtos, marcas ou preços.
 * Consulte disponibilidade pelo WhatsApp.
 */
const categories = [
  {
    icon: <UtensilsCrossed size={32} className="text-[#ea580c]" />,
    title: "Alimentação",
    description:
      "Rações e alimentos para cães, gatos e outros pets. Consulte as opções disponíveis e encontre a ideal para o seu animal.",
    badge: null,
    // 📸 Foto de ração / alimentação pet
    image:
      "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Ração e alimentos para cães e gatos",
  },
  {
    icon: <Sparkles size={32} className="text-[#ea580c]" />,
    title: "Higiene & Cuidados",
    description:
      "Produtos para manter seu pet limpo, cheiroso e sempre bem cuidado. Shampoos, condicionadores e itens de higiene.",
    badge: null,
    // 📸 Foto de produtos de higiene pet
    image:
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Higiene e cuidados para pets",
  },
  {
    icon: <ShieldPlus size={32} className="text-[#ea580c]" />,
    title: "Saúde & Bem-estar",
    description:
      "Suplementos, vitaminas e produtos voltados ao cuidado da saúde e bem-estar do seu animal de estimação.",
    badge: null,
    // 📸 Foto de produtos de saúde pet
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Saúde e bem-estar para pets",
  },
  {
    icon: <Package size={32} className="text-[#ea580c]" />,
    title: "Acessórios",
    description:
      "Coleiras, camas, brinquedos, comedouros e tudo o que seu pet precisa para um dia a dia mais confortável.",
    badge: null,
    // 📸 Foto de acessórios pet (brinquedos, coleiras, guias)
    image:
      "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Acessórios, brinquedos e coleiras para pets",
  },
];

export default function Categories() {
  return (
    <SectionWrapper id="produtos" bg="white">
      {/* Cabeçalho */}
      <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
        <span className="inline-block bg-[#ffedd5] text-[#ea580c] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          O que você encontra aqui
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#7c2d12] mb-4 leading-tight">
          Tudo para o seu pet
          <br className="hidden sm:block" />
          em um só lugar.
        </h2>
        <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
          Consulte a disponibilidade de produtos e condições pelo WhatsApp.
          Estamos sempre prontos para te atender.
        </p>
      </motion.div>

      {/* Grid de categorias */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            className="group bg-[#fff7ed] rounded-2xl overflow-hidden border border-[#e5e7eb] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
            variants={itemVariants}
          >
            {/* Imagem */}
            <div className="relative h-44 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.imageAlt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7c2d12]/40 to-transparent" />
            </div>

            {/* Conteúdo */}
            <div className="p-5">
              <div className="w-12 h-12 bg-[#ffedd5] rounded-xl flex items-center justify-center mb-3 -mt-8 relative z-10 shadow-sm">
                {cat.icon}
              </div>
              <h3 className="font-bold text-[#7c2d12] text-lg mb-1.5">
                {cat.title}
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">
                {cat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA central */}
      <motion.div className="text-center" variants={itemVariants}>
        <Button
          href={business.whatsappUrl}
          target="_blank"
          size="lg"
          variant="primary"
          icon={<MessageCircle size={20} />}
        >
          Consultar disponibilidade pelo WhatsApp
        </Button>
        <p className="text-[#9ca3af] text-sm mt-3">
          Atendimento de segunda a sexta, 07:30–18:30 · Sábado, 07:30–13:00
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
