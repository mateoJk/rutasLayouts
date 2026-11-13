import Link from "next/link";

export default function AcercaPage() {
  return (
    <main className="mx-auto w-full max-w-xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Acerca del proyecto</h1>
      <p className="mb-2">
        App de Notas permite escribir notas, verlas en una lista y eliminarlas.
      </p>
      <p className="mb-2">
        Está hecha con Next.js, React y Tailwind CSS.
      </p>
      <p className="mb-4">
        Es un trabajo práctico de clase.
      </p>
      <Link href="/acerca/autor" className="text-blue-600 hover:underline">
        Ver información del autor
      </Link>
    </main>
  );
}
