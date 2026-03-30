import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "EduPortal — Corpo Docente",
  description: "Portal de professores da universidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-zinc-50 antialiased dark:bg-zinc-950">
        <Navbar />
        {children}
      </body>
    </html>
  );
}