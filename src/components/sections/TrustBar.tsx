"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Phone, ThumbsUp } from "lucide-react";
import { business } from "@/config/business";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const trustItems = [
  {
    icon: <Star size={22} className="text-[#fbbf24] fill-[#fbbf24]" />,
    value: `${business.rating} ★`,
    label: "Nota no Google",
    color: "bg-[#fef9c3]",
  },
  {
    icon: <ThumbsUp size={22} className="text-[#ea580c]" />,
    value: `${business.reviewCountDisplay}`,
    label: "Avaliações de clientes",
    color: "bg-[#ffedd5]",
  },
  {
    icon: <MapPin size={22} className="text-[#ea580c]" />,
    value: "Kennedy",
    label: `${business.city} — ${business.state}`,
    color: "bg-[#ffedd5]",
  },
  {
    icon: <Phone size={22} className="text-[#ea580c]" />,
    value: business.phone,
    label: "Atendimento direto",
    color: "bg-[#ffedd5]",
  },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-[#e5e7eb] py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-3 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            >
              <div
                className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center shrink-0`}
              >
                {item.icon}
              </div>
              <div>
                <p className="font-bold text-[#7c2d12] text-base leading-tight">
                  {item.value}
                </p>
                <p className="text-[#6b7280] text-xs leading-snug mt-0.5">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
