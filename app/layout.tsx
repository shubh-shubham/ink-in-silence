import type { Metadata } from "next";

import {
  Playfair_Display,
  Poppins,
  Bebas_Neue,
  Dancing_Script,
  Great_Vibes,
} from "next/font/google";

import "./globals.css";

const playfair =
  Playfair_Display({
    subsets: ["latin"],
    variable:
      "--font-playfair",
  });

const poppins =
  Poppins({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable:
      "--font-poppins",
  });

const bebas =
  Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
    variable:
      "--font-bebas",
  });

const dancing =
  Dancing_Script({
    subsets: ["latin"],
    variable:
      "--font-dancing",
  });

const vibes =
  Great_Vibes({
    subsets: ["latin"],
    weight: "400",
    variable:
      "--font-vibes",
  });

export const metadata: Metadata = {

  title: "Ink in Silence",

  description:
    "Premium cinematic poetry platform",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body
        className={`
          ${playfair.variable}
          ${poppins.variable}
          ${bebas.variable}
          ${dancing.variable}
          ${vibes.variable}
          bg-black text-white
        `}
      >

        {children}

      </body>

    </html>
  );
}