import Link from "next/link";

// en Next 15+ params es una promesa, por eso usamos async/await
export default async function CategoriaPage({ params }) {
  const { nombre } = await params;
  // decodeURIComponent convierte "mi%20lista" en "mi lista"
  const categoria = decodeURIComponent(nombre);

  return (
    <main className="mx-auto w-full max-w-xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Categoría: {categoria}</h1>
      <p className="mb-4">Acá se mostrarían las notas de la categoría {categoria}.</p>
      <Link href="/" className="text-blue-600 hover:underline">
        Volver al inicio
      </Link>
    </main>
  );
}
