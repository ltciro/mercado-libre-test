import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "./global-icons.css";

import { Header } from "@meli/components/header/header";
import { Search } from "@meli/components/search/search";
import { LogoSmall } from "@meli/components/logo-small/logo-small";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mercado Libre",
  description:
    "Compre productos con Envío Gratis en el día en Mercado Libre. Encuentre miles de marcas y productos a precios increíbles.",
};

export default function RootLayout({
  children,
  header,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header>
          <LogoSmall priority={true} />
          <Search path="items" param="search" />
        </Header>
        {children}
      </body>
    </html>
  );
}
