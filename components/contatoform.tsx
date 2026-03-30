"use client";

import { useState } from "react";
import ContatoModal from "./contatoModal";
import { Send } from "lucide-react";

export default function ContatoForm({ professorNome }: { professorNome: string }) {
  const [form, setForm] = useState({ nome: "", assunto: "", mensagem: "" });
  const [modal, setModal] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nome.trim()) e.nome = "Nome é obrigatório";
    if (!form.assunto.trim()) e.assunto = "Assunto é obrigatório";
    if (!form.mensagem.trim()) e.mensagem = "Mensagem é obrigatória";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
    setForm({ nome: "", assunto: "", mensagem: "" });
  };

  return (
    <>
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="mb-5 text-lg font-semibold text-zinc-900 dark:text-white">Entrar em Contato</h2>

        <div className="space-y-4">
          {/* Nome */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Nome do Aluno
            </label>
            <input
              type="text"
              placeholder="Seu nome completo"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-white ${
                errors.nome ? "border-red-400" : "border-zinc-200 dark:border-zinc-700"
              }`}
            />
            {errors.nome && <p className="mt-1 text-xs text-red-500">{errors.nome}</p>}
          </div>

          {/* Assunto */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Assunto
            </label>
            <input
              type="text"
              placeholder="Ex: Dúvida sobre a prova"
              value={form.assunto}
              onChange={(e) => setForm({ ...form, assunto: e.target.value })}
              className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-white ${
                errors.assunto ? "border-red-400" : "border-zinc-200 dark:border-zinc-700"
              }`}
            />
            {errors.assunto && <p className="mt-1 text-xs text-red-500">{errors.assunto}</p>}
          </div>

          {/* Mensagem */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Mensagem
            </label>
            <textarea
              rows={4}
              placeholder="Escreva sua mensagem..."
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className={`w-full resize-none rounded-xl border px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-white ${
                errors.mensagem ? "border-red-400" : "border-zinc-200 dark:border-zinc-700"
              }`}
            />
            {errors.mensagem && <p className="mt-1 text-xs text-red-500">{errors.mensagem}</p>}
          </div>

          <button
            onClick={handleSubmit}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 active:scale-95"
          >
            <Send className="h-4 w-4" />
            Enviar Mensagem
          </button>
        </div>
      </div>

      {modal && (
        <ContatoModal
          nome={form.nome}
          assunto={form.assunto}
          mensagem={form.mensagem}
          professor={professorNome}
          onClose={handleClose}
        />
      )}
    </>
  );
}