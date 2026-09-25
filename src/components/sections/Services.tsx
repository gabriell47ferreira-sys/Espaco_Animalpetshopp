"use client";

import { motion } from "framer-motion";
import { Scissors, MessageCircle, Info } from "lucide-react";
import SectionWrapper, { itemVariants } from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { business } from "@/config/business";

/**
 * SEÇÃO DE SERVIÇOS — ESTRUTURA EDITÁVEL
 *
 * ⚠️  ATENÇÃO: Esta seção está preparada para receber informações de serviços,
 * mas NÃO publica afirmações específicas sobre serviços não confirmados.
 *
 * As fontes públicas apresentam referências a banho/tosa, porém essa informação
 * precisa ser confirmada pelo proprietário antes de ser publicada.
 *
 * INSTRUÇÕES PARA ATIVAR SERVIÇOS:
 * 1. Confirme os serviços reais com o proprietário.
 * 2. Descomente o array `services` abaixo e preencha com dados reais.
 * 3. Mude `showServices` para `true`.
 * 4. Remova este aviso.
 */

const SHOW_SERVICES = false; // ← Mude para `true` após confirmar os serviços

/*
const services = [
  {
    icon: <Scissors size={28} className="text-[#ea580c]" />,
    title: "Banho & Tosa",
    description: "Descrição do serviço aqui — preencher com informação real.",
    badge: null,
  },
  // Adicione outros serviços confirmados aqui
];
*/

export default function Services() {
  if (!SHOW_SERVICES) {
    return (
      <SectionWrapper id="servicos" bg="cream">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={itemVariants}
        >
          {/* Ícone */}
          <div className="w-16 h-16 bg-[#ffedd5] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Scissors size={32} className="text-[#ea580c]" />
          </div>

          {/* Título */}
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#7c2d12] mb-4">
            Serviços em breve
          </h2>

          <p className="text-[#6b7280] text-lg leading-relaxed mb-6">
            Quer saber quais serviços a Espaço Animal oferece?
            Fale diretamente com a gente pelo WhatsApp e tire todas as suas
            dúvidas.
          </p>

          {/* Aviso editorial (visível apenas em dev — ocultar em produção se quiser) */}
          <div className="flex items-start gap-3 bg-[#fef9c3] border border-[#fde68a] rounded-xl p-4 mb-6 text-left">
            <Info size={18} className="text-[#92400e] shrink-0 mt-0.5" />
            <p className="text-[#92400e] text-sm leading-relaxed">
              <strong>Nota editorial:</strong> Esta seção está preparada para
              listar serviços confirmados. Nenhuma afirmação foi publicada sem
              confirmação do proprietário. Edite o arquivo{" "}
              <code className="bg-[#fde68a]/60 px-1 rounded text-xs">
                Services.tsx
              </code>{" "}
              e defina{" "}
              <code className="bg-[#fde68a]/60 px-1 rounded text-xs">
                SHOW_SERVICES = true
              </code>{" "}
              após confirmar os serviços.
            </p>
          </div>

          <Button
            href={business.whatsappUrl}
            target="_blank"
            size="lg"
            variant="primary"
            icon={<MessageCircle size={20} />}
          >
            Perguntar pelo WhatsApp
          </Button>
        </motion.div>
      </SectionWrapper>
    );
  }

  // ── Modo serviços ativado ─────────────────────────────────────
  // Este bloco só renderiza quando SHOW_SERVICES = true
  return (
    <SectionWrapper id="servicos" bg="cream">
      <motion.div className="text-center mb-12" variants={itemVariants}>
        <span className="inline-block bg-[#ffedd5] text-[#ea580c] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          Serviços
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#7c2d12] mb-4">
          Cuidado completo para o seu pet
        </h2>
        <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
          Agende ou consulte disponibilidade pelo WhatsApp.
        </p>
      </motion.div>

      {/* Adicione cards de serviços aqui após confirmar com o proprietário */}
      <motion.div className="text-center mt-8" variants={itemVariants}>
        <Button
          href={business.whatsappUrl}
          target="_blank"
          size="lg"
          variant="primary"
          icon={<MessageCircle size={20} />}
        >
          Consultar pelo WhatsApp
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
