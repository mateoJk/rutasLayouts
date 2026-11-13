import Link from "next/link";

export default function AutorPage() {
  return (
    <main className="mx-auto w-full max-w-xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Autor</h1>
      <p className="mb-2">Mateo Johnston</p>
      <p className="mb-2">
        Estudiante de 3er año de Técnico en Desarrollo de Software en ITEC Río
        Cuarto.
      </p>
      <Link href="/acerca" className="text-blue-600 hover:underline">
        Volver a Acerca
      </Link>
    </main>
  );
}
