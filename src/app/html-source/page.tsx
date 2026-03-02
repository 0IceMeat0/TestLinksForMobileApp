"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HtmlSourcePage() {
  const [html, setHtml] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHtml = () => {
      try {
        // Если открыто из главной через target="_blank", берём DOM родителя
        if (typeof window !== "undefined" && window.opener && !window.opener.closed) {
          const markup = window.opener.document.documentElement.outerHTML;
          setHtml(markup);
        } else {
          // Иначе фетчим главную страницу
          fetch("/")
            .then((r) => r.text())
            .then(setHtml)
            .catch(() => setError("Не удалось загрузить HTML"));
        }
      } catch (e) {
        setError("Доступ к document запрещён (cross-origin)");
      } finally {
        setLoading(false);
      }
    };
    loadHtml();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between border-b border-slate-700 pb-4">
          <h1 className="text-2xl font-bold text-amber-400">
            HTML-разметка документа
          </h1>
          <Link
            href="/"
            className="text-emerald-400 hover:text-emerald-300 underline text-sm"
          >
            ← На главную
          </Link>
        </div>

        {loading && (
          <p className="text-slate-400">Загрузка...</p>
        )}

        {error && (
          <p className="text-red-400">{error}</p>
        )}

        {!loading && !error && html && (
          <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 overflow-auto text-xs text-slate-300 whitespace-pre-wrap break-words max-h-[80vh]">
            <code>{html}</code>
          </pre>
        )}
      </div>
    </main>
  );
}
