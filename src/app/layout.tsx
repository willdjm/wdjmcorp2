import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WDJMCorp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="google-site-verification" content="XTy_wMkxR7w9O0GqESqZyZAgX4dtHWf3vhHfIf7-76Y" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
