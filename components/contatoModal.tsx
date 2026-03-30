"use client";

import { X, User, BookOpen, MessageSquare, CheckCircle2 } from "lucide-react";

interface ModalProps {
  nome: string;
  assunto: string;
  mensagem: string;
  professor: string;
  onClose: () => void;
}

export default function ContatoModal({ nome, assunto, mensagem, professor, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md animate-in fade-in zoom-in-95 duration-200 rounded-2xl bg-white shadow-2xl dark:bg-zinc-900">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-100 p-6 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h2 className="font-semibold text-zinc-900 dark:text-white">Mensagem Enviada!</h2>
              <p className="text-xs text-zinc-500">Para: {professor}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-4 p-6">
          <div className="flex items-start gap-3 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800">
            <User className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">Aluno</p>
              <p className="mt-0.5 text-sm font-semibold text-zinc-800 dark:text-white">{nome}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800">
            <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">Assunto</p>
              <p className="mt-0.5 text-sm font-semibold text-zinc-800 dark:text-white">{assunto}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800">
            <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">Mensagem</p>
              <p className="mt-0.5 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{mensagem}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-100 p-6 dark:border-zinc-800">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-indigo-600 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 active:scale-95"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}