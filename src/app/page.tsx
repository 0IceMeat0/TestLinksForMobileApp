"use client";

import Link from "next/link";

const PDF_URL = "https://zvuk.com/docs/sa/pravila_promo_sa.pdf";

// Локальный PDF в проекте: public/30day_dec_prime.pdf — ссылка «Скачать документ» скачивает без JS (same-origin + download)
const LOCAL_PDF_PATH = "/30day_dec_prime.pdf";

// URL для диплинков браузеров (можно подставить любой)
const BROWSER_DEEP_LINK_URL = "https://zvuk.com/docs/sa/pravila_promo_sa.pdf";

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
            7. JavaScript onclick + window.open (вариант для WebView)
          </h2>
          <button
            type="button"
            onClick={() => window.open(PDF_URL, "_blank")}
            className="block text-emerald-400 hover:text-emerald-300 underline text-left"
          >
            Открыть PDF (onclick window.open)
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            8. a href + onclick window.open (fallback)
          </h2>
          <a
            href={PDF_URL}
            onClick={(e) => {
              e.preventDefault();
              window.open(PDF_URL, "_blank", "noopener,noreferrer");
            }}
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть PDF (a + onclick preventDefault)
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            9. a href=# + onclick (без перехода по href)
          </h2>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.open(PDF_URL, "_blank");
            }}
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть PDF (href=# + onclick)
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            10. a с download (принудительная загрузка)
          </h2>
          <a
            href={PDF_URL}
            download="pravila_promo_sa.pdf"
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Скачать PDF (download attr)
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            11. location.href (то же окно)
          </h2>
          <button
            type="button"
            onClick={() => { window.location.href = PDF_URL; }}
            className="block text-emerald-400 hover:text-emerald-300 underline text-left"
          >
            Открыть PDF (location.href)
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            12. location.assign
          </h2>
          <button
            type="button"
            onClick={() => { window.location.assign(PDF_URL); }}
            className="block text-emerald-400 hover:text-emerald-300 underline text-left"
          >
            Открыть PDF (location.assign)
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            13. Динамический &lt;a&gt; + programmatic click
          </h2>
          <button
            type="button"
            onClick={() => {
              const a = document.createElement("a");
              a.href = PDF_URL;
              a.target = "_blank";
              a.rel = "noopener noreferrer";
              a.click();
            }}
            className="block text-emerald-400 hover:text-emerald-300 underline text-left"
          >
            Открыть PDF (createElement + click)
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            14. a href=javascript:window.open()
          </h2>
          <a
            href={`javascript:window.open('${PDF_URL}','_blank')`}
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть PDF (href javascript:)
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            15. Form GET + target=_blank
          </h2>
          <form action={PDF_URL} method="get" target="_blank" className="inline-block">
            <button type="submit" className="text-emerald-400 hover:text-emerald-300 underline text-left">
              Открыть PDF (form target blank)
            </button>
          </form>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            16. window.open с полным 3-м аргументом
          </h2>
          <button
            type="button"
            onClick={() => window.open(PDF_URL, "_blank", "noopener,noreferrer,noopener")}
            className="block text-emerald-400 hover:text-emerald-300 underline text-left"
          >
            Открыть PDF (window.open full params)
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            17. a target=_top (выход из iframe)
          </h2>
          <a
            href={PDF_URL}
            target="_top"
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть PDF (target=_top)
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            18. a target=_self (явно)
          </h2>
          <a
            href={PDF_URL}
            target="_self"
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть PDF (target=_self)
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            19. span role=link + onClick
          </h2>
          <span
            role="link"
            tabIndex={0}
            onClick={() => window.open(PDF_URL, "_blank")}
            onKeyDown={(e) => e.key === "Enter" && window.open(PDF_URL, "_blank")}
            className="block text-emerald-400 hover:text-emerald-300 underline cursor-pointer"
          >
            Открыть PDF (span + onClick)
          </span>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            20. a + mousedown (раньше click)
          </h2>
          <a
            href={PDF_URL}
            onMouseDown={(e) => {
              e.preventDefault();
              window.open(PDF_URL, "_blank");
            }}
            onClick={(e) => e.preventDefault()}
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть PDF (mousedown + onclick)
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            21. React Native: postMessage (onMessage в RN)
          </h2>
          <button
            type="button"
            onClick={() => {
              if (typeof window !== "undefined" && (window as unknown as { ReactNativeWebView?: { postMessage: (s: string) => void } }).ReactNativeWebView) {
                (window as unknown as { ReactNativeWebView: { postMessage: (s: string) => void } }).ReactNativeWebView.postMessage(JSON.stringify({ type: "openUrl", url: PDF_URL }));
              } else {
                window.open(PDF_URL, "_blank");
              }
            }}
            className="block text-emerald-400 hover:text-emerald-300 underline text-left"
          >
            Открыть (postMessage RN или window.open)
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            22. Android Intent URL
          </h2>
          <a
            href={`intent://zvuk.com/docs/sa/pravila_promo_sa.pdf#Intent;scheme=https;action=android.intent.action.VIEW;end`}
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть (Intent URL для Android)
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            23. a + rel=&quot;external&quot; (нативный перехват)
          </h2>
          <a
            href={PDF_URL}
            target="_blank"
            rel="external noopener noreferrer"
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть PDF (rel=external)
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            24. data-open-external (для shouldOverrideUrlLoading)
          </h2>
          <a
            href={PDF_URL}
            target="_blank"
            data-open-external="true"
            data-url={PDF_URL}
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть PDF (data-open-external)
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            25. setTimeout window.open (обход тайминга)
          </h2>
          <button
            type="button"
            onClick={() => setTimeout(() => window.open(PDF_URL, "_blank"), 0)}
            className="block text-emerald-400 hover:text-emerald-300 underline text-left"
          >
            Открыть PDF (setTimeout + window.open)
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            26. window.open с popup features
          </h2>
          <button
            type="button"
            onClick={() => window.open(PDF_URL, "_blank", "width=800,height=600,menubar=no,toolbar=no")}
            className="block text-emerald-400 hover:text-emerald-300 underline text-left"
          >
            Открыть PDF (popup features)
          </button>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            27. &lt;object&gt; встроенный просмотр
          </h2>
          {/* <a
            href={PDF_URL}
            className="block text-emerald-400 hover:text-emerald-300 underline mb-2"
          >
            Открыть в object ниже
          </a>
<object data={LOCAL_PDF_PATH} type="application/pdf" width="100%" height="300" className="border border-slate-600 rounded" aria-label="PDF viewer">
            <a href={LOCAL_PDF_PATH} target="_blank" rel="noopener" download="30day_dec_prime.pdf" className="text-emerald-400 underline">Скачать документ</a>
          </object>
        <iframe src={LOCAL_PDF_PATH}  width="100%" height="300" className="border border-slate-600 rounded" aria-label="PDF viewer">
            
          </iframe>
          <embed src={LOCAL_PDF_PATH}  width="100%" height="300" className="border border-slate-600 rounded" aria-label="PDF viewer">
            
            </embed> */}
            <a href={LOCAL_PDF_PATH} target="_blank" rel="noopener" download="30day_dec_prime.pdf" className="text-emerald-400 underline">Скачать документ</a>
            <br />
            <a href={'https://zvuk.com/about/documents/terms'} target="_blank" rel="noopener" className="text-emerald-400 underline">Скачать PDFtest</a>
            <br />
            <a href={'https://zvuk.com/docs/sa/pravila_promo_sa.pdf'} target="_blank" rel="noopener" className="text-emerald-400 underline">Скачать PDFtest2</a>
            <br />
            <a href={'https://zvuk.com/docs/sa/pravila_promo_sa.pdf'} target="_blank" rel="noopener" download="30day_dec_prime.pdf" className="text-emerald-400 underline">Скачать документ</a>
            {/* <a href={'/30day_dec_prime.pdf'} target="_blank" rel="noopener" className="text-emerald-400 underline">Скачать PDFtest</a>
            <object data={'https://zvuk.com/about/documents/terms'} type="application/pdf" width="100%" height="300" className="border border-slate-600 rounded" aria-label="PDF viewer">
            <a href={'https://zvuk.com/about/documents/terms'} target="_blank" rel="noopener" className="text-emerald-400 underline">Скачать PDF</a>
          </object>
          <iframe src={'https://zvuk.com/about/documents/terms'}  width="100%" height="300" className="border border-slate-600 rounded" aria-label="PDF viewer">
            
          </iframe>
          <embed src={'https://zvuk.com/about/documents/terms'} width="100%" height="300" className="border border-slate-600 rounded" aria-label="PDF viewer">
            
            </embed> */}
        </section>
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            30. target=&quot;pdf&quot; (named window, повторное окно)
          </h2>
          <a
            href={PDF_URL}
            target="pdf"
            rel="noopener noreferrer"
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть PDF (target=pdf)
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            31. Android (открытие в браузере)
          </h2>
          <p className="text-slate-400 text-sm">
            Ссылка для перехвата в приложении: <code className="text-slate-300">shouldOverrideUrlLoading</code> → <code className="text-slate-300">Intent.ACTION_VIEW</code>.
          </p>
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-open-in-browser="true"
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть в браузере (Android)
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            32. Диплинк browsers:// (открыть в браузере)
          </h2>
          <p className="text-slate-400 text-sm">
            Кастомная схема: приложение перехватывает <code className="text-slate-300">browsers://</code> и открывает URL в браузере.
          </p>
          <a
            href={`browsers://open?url=${encodeURIComponent(PDF_URL)}`}
            className="block text-emerald-400 hover:text-emerald-300 underline"
          >
            Открыть (browsers://open?url=…)
          </a>
          <a
            href={`browsers://${PDF_URL}`}
            className="block text-emerald-400 hover:text-emerald-300 underline text-sm"
          >
            Вариант: browsers:// + ссылка
          </a>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            33. Диплинки браузеров (открыть URL в конкретном браузере)
          </h2>
          <p className="text-slate-400 text-sm">
            Схемы для открытия ссылки в установленном браузере. URL: <code className="text-slate-300">{BROWSER_DEEP_LINK_URL}</code>
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`googlechrome://open?url=${encodeURIComponent(BROWSER_DEEP_LINK_URL)}`} className="text-emerald-400 hover:text-emerald-300 underline">
                Google Chrome — googlechrome://open?url=…
              </a>
            </li>
            <li>
              <a href={`yandexbrowser://open?url=${encodeURIComponent(BROWSER_DEEP_LINK_URL)}`} className="text-emerald-400 hover:text-emerald-300 underline">
                Яндекс Браузер — yandexbrowser://open?url=…
              </a>
            </li>
            <li>
              <a href={`firefox://open-url?url=${encodeURIComponent(BROWSER_DEEP_LINK_URL)}`} className="text-emerald-400 hover:text-emerald-300 underline">
                Firefox — firefox://open-url?url=…
              </a>
            </li>
            <li>
              <a href={`opera://open?url=${encodeURIComponent(BROWSER_DEEP_LINK_URL)}`} className="text-emerald-400 hover:text-emerald-300 underline">
                Opera — opera://open?url=…
              </a>
            </li>
            <li>
              <a href={`msedge://open?url=${encodeURIComponent(BROWSER_DEEP_LINK_URL)}`} className="text-emerald-400 hover:text-emerald-300 underline">
                Microsoft Edge — msedge://open?url=…
              </a>
            </li>
            <li>
              <a href={`samsunginternet://open?url=${encodeURIComponent(BROWSER_DEEP_LINK_URL)}`} className="text-emerald-400 hover:text-emerald-300 underline">
                Samsung Internet — samsunginternet://open?url=…
              </a>
            </li>
            <li>
              <a href={`brave://open?url=${encodeURIComponent(BROWSER_DEEP_LINK_URL)}`} className="text-emerald-400 hover:text-emerald-300 underline">
                Brave — brave://open?url=…
              </a>
            </li>
          </ul>
        </section>

        <section className="space-y-6 pt-8 border-t border-slate-700">
          <h2 className="text-lg font-semibold text-slate-200 border-b border-slate-700 pb-2">
            HTML-разметка этого документа
          </h2>
          <Link
            href="/html-source"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-amber-400 hover:text-amber-300 underline"
          >
            Открыть страницу с HTML-разметкой →
          </Link>
        </section>
      </div>
    </main>
  );
}
