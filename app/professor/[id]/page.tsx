import { professores } from "@/data/professores";
import ContatoForm from "@/components/contatoform";
import { notFound } from "next/navigation";
import { BookOpen, GraduationCap, Mail } from "lucide-react";

export default async function ProfessorPage({ params }: any) {
  const { id } = await params;
  const professor = professores.find((p) => p.id === id);

  if (!professor) return notFound();

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header do professor */}
      <section className="border-b border-zinc-200 bg-white px-6 py-12 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex max-w-4xl items-center gap-6">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-2xl font-bold text-white shadow-lg">
            {professor.foto}
          </div>
          <div>
            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{professor.area}</p>
            <h1 className="mt-1 text-2xl font-bold text-zinc-900 dark:text-white">{professor.nome}</h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{professor.titulo}</p>
            <div className="mt-2 flex items-center gap-1.5 text-sm text-zinc-500">
              <Mail className="h-3.5 w-3.5" />
              {professor.email}
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <div className="mx-auto grid max-w-4xl gap-8 px-6 py-12 lg:grid-cols-2">
        {/* Disciplinas */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Disciplinas</h2>
          </div>
          <div className="space-y-3">
            {professor.disciplinas.map((disc) => (
              <div
                key={disc.nome}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">{disc.nome}</h3>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{disc.curso}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                    {disc.semestre}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulário */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Mail className="h-5 w-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Contato</h2>
          </div>
          <ContatoForm professorNome={professor.nome} />
        </div>
      </div>
    </main>
  );
}