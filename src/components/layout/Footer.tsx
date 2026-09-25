import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { business } from "@/config/business";

const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Corpo do footer */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Coluna 1 — Marca */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/logo.png"
                alt="Espaço Animal Pet Shop — Logo"
                className="w-10 h-10 rounded-xl object-cover shrink-0"
                width={40}
                height={40}
              />
              <div>
                <p className="font-bold text-white leading-tight text-base">
                  Espaço Animal
                </p>
                <p className="text-[#fb923c] text-xs leading-tight">
                  Pet Shop &amp; Cia
                </p>
              </div>
            </div>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Produtos, cuidados e atendimento para quem trata seu pet como
              parte da família. Em Caruaru — PE.
            </p>
          </div>

          {/* Coluna 2 — Navegação */}
          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navegação
            </p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#9ca3af] text-sm hover:text-[#fb923c] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Horários */}
          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider flex items-center gap-1.5">
              <Clock size={14} className="text-[#fb923c]" />
              Horários
            </p>
            <ul className="space-y-1.5">
              <li className="flex justify-between gap-4">
                <span className="text-[#9ca3af] text-xs">Seg – Sex</span>
                <span className="text-white text-xs font-medium">07:30 – 18:30</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-[#9ca3af] text-xs">Sábado</span>
                <span className="text-white text-xs font-medium">07:30 – 13:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-[#9ca3af] text-xs">Domingo</span>
                <span className="text-[#6b7280] text-xs italic">Não informado</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4 — Contato */}
          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contato
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:+${business.phoneRaw}`}
                  className="flex items-center gap-2 text-[#9ca3af] text-sm hover:text-[#fb923c] transition-colors"
                  aria-label={`Ligar para ${business.phone}`}
                >
                  <Phone size={14} className="shrink-0 text-[#fb923c]" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#9ca3af] text-sm hover:text-[#fb923c] transition-colors"
                >
                  <InstagramIcon size={14} className="shrink-0 text-[#fb923c]" />
                  {business.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#9ca3af] text-sm hover:text-[#fb923c] transition-colors"
                >
                  <MapPin size={14} className="shrink-0 text-[#fb923c]" />
                  <span className="leading-snug">
                    {business.address}
                    <br />
                    {business.neighborhood} — {business.city}/{business.state}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#fb923c] text-xs font-medium hover:text-[#fdba74] transition-colors mt-1"
                >
                  <ExternalLink size={12} />
                  Ver no Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-[#1f2937] py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#6b7280] text-xs text-center sm:text-left">
            © {currentYear} {business.name}. Todos os direitos reservados.
          </p>
          <p className="text-[#4b5563] text-xs">
            {business.address}, {business.neighborhood} — {business.city}/{business.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
