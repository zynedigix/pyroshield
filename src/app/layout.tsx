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
  title: "PyroShield | Premium Fire Protection",
  description:
    "Advanced fire safety systems engineered for industrial and commercial environments.",
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