import Link from "next/link";
import { professores } from "@/data/professores";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Hero */}
      <section className="border-b border-zinc-200 bg-white px-6 py-20 text-center dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
            <GraduationCap className="h-4 w-4" />
            Portal Acadêmico
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Corpo Docente
          </h1>
          <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
            Conheça nossos professores, suas disciplinas e entre em contato diretamente com eles.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-xl font-semibold text-zinc-800 dark:text-zinc-200">
          Professores ({professores.length})
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {professores.map((prof) => (
            <Link
              key={prof.id}
              href={`/professor/${prof.id}`}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              {/* Avatar */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-lg font-bold text-white shadow">
                {prof.foto}
              </div>

              <h3 className="font-semibold text-zinc-900 dark:text-white">{prof.nome}</h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{prof.titulo}</p>

              <div className="mt-4 flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                <BookOpen className="h-3.5 w-3.5" />
                <span>{prof.disciplinas.length} disciplinas</span>
              </div>

              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-indigo-600 group-hover:gap-2 transition-all">
                Ver perfil <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}