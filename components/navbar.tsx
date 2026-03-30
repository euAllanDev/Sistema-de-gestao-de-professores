"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { professores } from "@/data/professores";
import { GraduationCap } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Início" },
    ...professores.map((p) => ({ href: `/professor/${p.id}`, label: p.nome.split(" ")[1] + " " + p.nome.split(" ")[2] || p.nome })),
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white">
          <GraduationCap className="h-6 w-6 text-indigo-600" />
          <span className="text-lg tracking-tight">EduPortal</span>
        </Link>

        <nav className="flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}