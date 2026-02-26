import Link from "next/link";

const PDF_URL = "https://www.sberbank.com/sberprime/static/pdf/30day_dec_prime.pdf";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-2xl font-bold text-emerald-400">
          Варианты ссылок на PDF
        </h1>
        <p className="text-slate-400 text-sm">
          URL: {PDF_URL}
        </p>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            1. Тег &lt;a&gt; без target blank
          </h2>
          <a
            href={PDF_URL}
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть PDF (a, без target blank)
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            2. Тег &lt;a&gt; с target=&quot;_blank&quot;
          </h2>
          <a
            href={PDF_URL}
            target="_blank"
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть PDF (a, target=&quot;_blank&quot;)
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            3. Тег &lt;a&gt; с target=&quot;_blank&quot; и rel
          </h2>
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть PDF (a, target blank + rel noopener noreferrer)
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            4. Next.js Link без target blank
          </h2>
          <Link
            href={PDF_URL}
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть PDF (Link, без target blank)
          </Link>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            5. Next.js Link с target=&quot;_blank&quot;
          </h2>
          <Link
            href={PDF_URL}
            target="_blank"
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть PDF (Link, target=&quot;_blank&quot;)
          </Link>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            6. Next.js Link с target blank и rel
          </h2>
          <Link
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть PDF (Link, target blank + rel noopener noreferrer)
          </Link>
        </section>
      </div>
    </main>
  );
}
