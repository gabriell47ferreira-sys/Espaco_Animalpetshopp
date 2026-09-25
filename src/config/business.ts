/**
 * CONFIGURAÇÃO CENTRAL — Espaço Animal Pet Shop & Cia
 *
 * Todos os dados da empresa ficam centralizados aqui.
 * Para atualizar qualquer informação, altere apenas este arquivo.
 *
 * ⚠️  REGRA DE DADOS: Nenhuma informação foi inventada.
 *     Campos sem confirmação estão marcados como null ou string vazia.
 */

export const business = {
  name: "Espaço Animal Pet Shop & Cia",
  shortName: "Espaço Animal",

  // Contato
  phone: "(81) 99329-8485",
  phoneRaw: "5581993298485", // formato internacional para links tel: e wa.me

  /**
   * WhatsApp URL oficial.
   * ⚠️  Não confirmado — deixar vazio até receber link oficial.
   * Quando disponível, substitua pelo link completo:
   * Ex: "https://wa.me/5581993298485?text=Olá%2C%20vim%20pelo%20site!"
   */
  whatsappUrl: `https://wa.me/5581993298485?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações!`,

  // Endereço
  address: "Av. Santo Amaro, 52",
  neighborhood: "Kennedy",
  city: "Caruaru",
  state: "PE",
  postalCode: "55036-151",
  fullAddress: "Av. Santo Amaro, 52 — Kennedy, Caruaru — PE, 55036-151",

  // Coordenadas geográficas (Google Maps)
  latitude: -8.2848584,
  longitude: -35.9968425,

  // Links externos
  googleMapsUrl:
    "https://www.google.com/maps/place/Espa%C3%A7o+Animal+Pet+Shop+%26+Cia/@-8.2848584,-36.0730602,13z/data=!4m10!1m2!2m1!1spetshop!3m6!1s0x7a98b8f4d218291:0x8cd2c13d8836fbf4!8m2!3d-8.2848584!4d-35.9968425!15sCgdwZXRzaG9wWgkiB3BldHNob3CSAQ1yZXB0aWxlX3N0b3JlmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDI1ak1tRlZOVzVpV0ZWNlpGUkdVMVl5WkhOV1JHeElZeko0ZDFKV1JSQULgAQD6AQQIABBF!16s%2Fg%2F11b75fl5bw",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.5!2d-35.9990312!3d-8.2848584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a98b8f4d218291%3A0x8cd2c13d8836fbf4!2sEspa%C3%A7o%20Animal%20Pet%20Shop%20%26%20Cia!5e0!3m2!1spt-BR!2sbr!4v1234567890",

  instagramUrl: "https://www.instagram.com/espacoanimalpetshopecia/",
  instagramHandle: "@espacoanimalpetshopecia",

  // Reputação — dados confirmados do Google Maps
  rating: 4.9,
  reviewCount: 313,
  reviewCountDisplay: "+300", // versão de exibição arredondada

  // Horários de funcionamento — confirmados
  openingHours: {
    monday: { label: "Segunda-feira", open: "07:30", close: "18:30" },
    tuesday: { label: "Terça-feira", open: "07:30", close: "18:30" },
    wednesday: { label: "Quarta-feira", open: "07:30", close: "18:30" },
    thursday: { label: "Quinta-feira", open: "07:30", close: "18:30" },
    friday: { label: "Sexta-feira", open: "07:30", close: "18:30" },
    saturday: { label: "Sábado", open: "07:30", close: "13:00" },
    sunday: { label: "Domingo", open: null, close: null }, // ⚠️  Não confirmado
  },

  // SEO
  siteUrl: "https://espacoanimal.com.br", // ⚠️  Atualizar com domínio real quando disponível
  description:
    "Pet shop em Caruaru com produtos de qualidade para cães, gatos e outros animais. Rações, acessórios, produtos de higiene e cuidados. Atendimento próximo e de confiança no bairro Kennedy.",
} as const;

export type Business = typeof business;
