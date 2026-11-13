import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-xl p-6">
      <h1 className="mb-2 text-3xl font-bold">App de Notas</h1>
      <p className="mb-6">
        Una aplicación simple para escribir y borrar notas. Está hecha con
        Next.js como proyecto de clase.
      </p>

      <section className="rounded border border-gray-300 p-4">
        <h2 className="mb-2 text-xl font-semibold">Secciones</h2>
        <ul className="flex flex-col gap-1 text-blue-600">
          <li>
            <Link href="/notas" className="hover:underline">Notas</Link>
          </li>
          <li>
            <Link href="/acerca" className="hover:underline">Acerca del proyecto</Link>
          </li>
          <li>
            <Link href="/acerca/autor" className="hover:underline">Autor</Link>
          </li>
          <li>
            <Link href="/categorias/trabajo" className="hover:underline">Categoría: trabajo</Link>
          </li>
          <li>
            <Link href="/categorias/personal" className="hover:underline">Categoría: personal</Link>
          </li>
          <li>
            <Link href="/categorias/facultad" className="hover:underline">Categoría: facultad</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
