import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: "../assets/fonts/ClashDisplay/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  display: "swap",
});

const inter = localFont({
  src: "../assets/fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PyroShield — Cinematic 3D Industrial Safety Platform",

  description:
    "Immersive cinematic 3D industrial fire safety experience built with React and Three.js, featuring optimized GLB product visualization and premium enterprise storytelling.",

  openGraph: {
    title: "PyroShield — Cinematic 3D Industrial Safety Platform",

    description:
      "Immersive cinematic 3D industrial fire safety experience built with React and Three.js.",

    url: "https://pyroshield.vercel.app",

    siteName: "PyroShield",

    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 752,
        alt: "PyroShield Industrial Safety Platform",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PyroShield — Cinematic 3D Industrial Safety Platform",

    description:
      "Immersive cinematic industrial safety storytelling experience.",

    images: ["/preview.jpg"],
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
        className={`${clashDisplay.variable} ${inter.variable} bg-[#050505] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}