import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "App de Notas",
  description: "App de Notas — Proyecto de clase con Next.js",
};

export default function RootLayout({ children }) {
  // año actual para el footer
  const anio = new Date().getFullYear();

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="flex flex-wrap gap-4 border-b border-gray-300 px-6 py-4">
          <Link href="/" className="font-bold hover:underline">
            Inicio
          </Link>
          <Link href="/notas" className="hover:underline">
            Notas
          </Link>
          <Link href="/acerca" className="hover:underline">
            Acerca
          </Link>
          <Link href="/acerca/autor" className="hover:underline">
            Autor
          </Link>
          <Link href="/categorias/personal" className="hover:underline">
            Categorías
          </Link>
        </nav>

        <div className="flex-1">{children}</div>

        <footer className="border-t border-gray-300 px-6 py-4 text-sm">
          <p>Mateo Johnston — ITEC Río Cuarto — Técnico en Desarrollo de Software</p>
          <p>App de Notas — Proyecto de clase con Next.js</p>
          <div className="my-2 flex flex-wrap gap-4">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>
            <Link href="/notas" className="hover:underline">
              Notas
            </Link>
            <Link href="/acerca" className="hover:underline">
              Acerca
            </Link>
            <Link href="/acerca/autor" className="hover:underline">
              Autor
            </Link>
          </div>
          <p>© {anio}</p>
        </footer>
      </body>
    </html>
  );
}
