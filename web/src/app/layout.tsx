import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
  title: "Caio Detz",
  description: "Programador at Sorriso, Brasil 🇧🇷",
  creator: "Caio Detz",
  publisher: "Caio Detz",
  authors: {
    name: "Caio Detz",
    url: "https://caiodetz.com.br"
  },
  keywords: ['Caio Detz', 'Programador', 'Next.Js', 'Desenvolvedor Web', 'Desenvolvedor Mobile', 'Sorriso', 'Mato-grosso'],
  openGraph: {
    url: "https://caiodetz.com.br",
    type: "website",
    title: "Caio Detz",
    description: "Programador at Sorriso, Brasil 🇧🇷",
    images: "https://caiodetz.com.br/perfil.webp"
  },
  twitter: {
    card: "summary_large_image",
    site: "https://caiodetz.com.br",
    title: "Caio Detz",
    description: "Programador at Sorriso, Brasil 🇧🇷",
    images: "https://caiodetz.com.br/perfil.webp"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
