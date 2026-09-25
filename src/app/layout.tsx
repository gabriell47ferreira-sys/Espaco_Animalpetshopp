import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { business } from "@/config/business";

/* ============================================================
   FONTES
   ============================================================ */

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

/* ============================================================
   METADATA — SEO Local
   ============================================================ */

export const metadata: Metadata = {
  title: "Espaço Animal Pet Shop & Cia | Pet Shop em Caruaru",
  description:
    "Pet shop em Caruaru com produtos de qualidade para cães, gatos e outros animais. Rações, acessórios e produtos de higiene no bairro Kennedy. Nota 4,9 no Google com mais de 300 avaliações.",
  icons: {
    icon: "/favicon.png",
    apple: "/logo.png",
    shortcut: "/favicon.png",
  },
  keywords: [
    "pet shop em Caruaru",
    "pet shop Kennedy Caruaru",
    "ração para cães Caruaru",
    "ração para gatos Caruaru",
    "produtos para pets Caruaru",
    "cuidados para animais Caruaru",
    "Espaço Animal",
    "pet shop Pernambuco",
    "acessórios para pets",
    "higiene animal Caruaru",
  ],
  authors: [{ name: "Espaço Animal Pet Shop & Cia" }],
  creator: "Espaço Animal Pet Shop & Cia",
  publisher: "Espaço Animal Pet Shop & Cia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: business.siteUrl,
    siteName: business.name,
    title: "Espaço Animal Pet Shop & Cia | Pet Shop em Caruaru",
    description:
      "Produtos, cuidados e atendimento para quem trata seu pet como parte da família. Nota 4,9 ★ no Google com +300 avaliações em Caruaru — PE.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Espaço Animal Pet Shop & Cia | Pet Shop em Caruaru",
    description:
      "Produtos, cuidados e atendimento para quem trata seu pet como parte da família. Caruaru — PE.",
  },
  alternates: {
    canonical: business.siteUrl,
  },
};

/* ============================================================
   SCHEMA — LocalBusiness (JSON-LD)
   ============================================================ */

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "PetStore",
  name: business.name,
  description: business.description,
  url: business.siteUrl,
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.postalCode,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.latitude,
    longitude: business.longitude,
  },
  hasMap: business.googleMapsUrl,
  sameAs: [business.instagramUrl, business.googleMapsUrl],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
  openingHoursSpecification: [
    // Segunda a Sexta
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:30",
    },
    // Sábado
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "07:30",
      closes: "13:00",
    },
    // Domingo — não confirmado, não incluído no schema
  ],
};

/* ============================================================
   LAYOUT RAIZ
   ============================================================ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        {/* JSON-LD Schema — LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-screen antialiased bg-[var(--color-background)] text-[var(--color-foreground)]">
        {children}
      </body>
    </html>
  );
}
