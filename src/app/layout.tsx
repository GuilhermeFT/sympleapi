import type { Metadata } from "next";
import { Poppins, League_Spartan } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--poppins",
});

const leagueSpartan = League_Spartan({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--league-spartan",
});

export const metadata: Metadata = {
  title: "Eternize seu Casamento - Crie um Site Exclusivo para seu Grande Dia",
  description:
    "Crie um site personalizado para compartilhar cada detalhe do seu casamento. Galeria de fotos, lista de presentes e muito mais em um só lugar.",
  openGraph: {
    title:
      "Eternize seu Casamento - Crie um Site Exclusivo para seu Grande Dia",
    description:
      "Crie um site personalizado para compartilhar cada detalhe do seu casamento. Galeria de fotos, lista de presentes e muito mais em um só lugar.",
    url: "https://eternize.vercel.app",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://eternize.vercel.app/favicon.svg",
        width: 100,
        height: 100,
        alt: "Eternize seu Casamento",
      },
    ],
  },

  twitter: {
    title:
      "Eternize seu Casamento - Crie um Site Exclusivo para seu Grande Dia",
    description:
      "Crie um site personalizado para compartilhar cada detalhe do seu casamento. Galeria de fotos, lista de presentes e muito mais em um só lugar.",
    images: [
      {
        url: "https://eternize.vercel.app/favicon.svg",
        width: 100,
        height: 100,
        alt: "Eternize seu Casamento",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${leagueSpartan.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
