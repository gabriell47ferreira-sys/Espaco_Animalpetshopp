"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle, Navigation } from "lucide-react";
import SectionWrapper, { itemVariants } from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { business } from "@/config/business";

const hours = [
  business.openingHours.monday,
  business.openingHours.tuesday,
  business.openingHours.wednesday,
  business.openingHours.thursday,
  business.openingHours.friday,
  business.openingHours.saturday,
  business.openingHours.sunday,
];

function formatHour(open: string | null, close: string | null): string {
  if (!open || !close) return "Não informado";
  return `${open} – ${close}`;
}

export default function Location() {
  return (
    <SectionWrapper id="localizacao" bg="cream">
      {/* Cabeçalho */}
      <motion.div className="text-center mb-12" variants={itemVariants}>
        <span className="inline-block bg-[#ffedd5] text-[#ea580c] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          Onde estamos
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
          Estamos em Caruaru
        </h2>
        <p className="text-[#4b5563] text-lg max-w-xl mx-auto">
          No bairro Kennedy, fácil de chegar. Perto para quem é de Caruaru.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Coluna esquerda — informações + horários */}
        <motion.div className="flex flex-col gap-6" variants={itemVariants}>
          {/* Endereço */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb]">
            <div className="flex gap-3 items-start mb-4">
              <div className="w-10 h-10 bg-[#ffedd5] rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-[#ea580c]" />
              </div>
              <div>
                <p className="font-bold text-black mb-0.5">Endereço</p>
                <p className="text-[#4b5563] text-sm leading-relaxed">
                  {business.address}
                  <br />
                  {business.neighborhood} — {business.city}/{business.state}
                  <br />
                  CEP {business.postalCode}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                href={business.googleMapsUrl}
                target="_blank"
                size="sm"
                variant="primary"
                icon={<Navigation size={15} />}
                fullWidth
              >
                Como chegar
              </Button>
              <Button
                href={`tel:+${business.phoneRaw}`}
                size="sm"
                variant="secondary"
                icon={<Phone size={15} />}
                fullWidth
              >
                {business.phone}
              </Button>
            </div>
          </div>

          {/* Horários */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb]">
            <div className="flex gap-3 items-center mb-5">
              <div className="w-10 h-10 bg-[#ffedd5] rounded-xl flex items-center justify-center shrink-0">
                <Clock size={20} className="text-[#ea580c]" />
              </div>
              <p className="font-bold text-black">Horário de funcionamento</p>
            </div>

            <div className="space-y-2">
              {hours.map((day) => {
                const isSunday = day.label === "Domingo";
                const isOpen = !!day.open;
                return (
                  <div
                    key={day.label}
                    className={`flex justify-between items-center py-2 border-b border-[#f3f4f6] last:border-0 ${
                      isSunday ? "opacity-50" : ""
                    }`}
                  >
                    <span className="text-[#374151] text-sm font-medium">
                      {day.label}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        isOpen ? "text-[#ea580c]" : "text-[#9ca3af] italic"
                      }`}
                    >
                      {formatHour(day.open, day.close)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <Button
            href={business.whatsappUrl}
            target="_blank"
            size="lg"
            variant="primary"
            icon={<MessageCircle size={20} />}
            fullWidth
          >
            Falar pelo WhatsApp
          </Button>
        </motion.div>

        {/* Coluna direita — Mapa */}
        <motion.div
          className="w-full h-80 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-[#e5e7eb]"
          variants={itemVariants}
        >
          {/*
            📍 MAPA INCORPORADO
            O embed do Google Maps requer uma API Key para funcionar sem restrições.
            Se o iframe não carregar, o botão "Como chegar" acima funciona como fallback.
            Para ativar o embed corretamente:
            1. Crie uma chave de API no Google Cloud Console
            2. Ative Maps Embed API
            3. Substitua KEY_AQUI pela chave real
          */}
          <iframe
            title={`Localização — ${business.name}`}
            src={`https://maps.google.com/maps?q=${business.latitude},${business.longitude}&z=16&output=embed&hl=pt-BR`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
