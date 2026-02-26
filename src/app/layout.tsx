import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Тест ссылок — СберПрайм PDF",
  description: "Все варианты ссылок на PDF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
