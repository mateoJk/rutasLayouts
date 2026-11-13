"use client";

import { useState } from "react";

export default function NotasPage() {
  const [notas, setNotas] = useState([]);
  const [texto, setTexto] = useState("");

  function agregarNota() {
    // si el input esta vacio no agregamos nada
    if (texto.trim() === "") return;

    const nuevaNota = { id: Date.now(), texto: texto.trim() };
    setNotas([...notas, nuevaNota]);
    setTexto("");
  }

  function eliminarNota(id) {
    setNotas(notas.filter((nota) => nota.id !== id));
  }

  return (
    <main className="mx-auto w-full max-w-xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Mis notas</h1>

      <div className="mb-6 flex gap-2">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribí una nota..."
          className="flex-1 rounded border border-gray-400 px-3 py-2"
        />
        <button
          onClick={agregarNota}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Agregar
        </button>
      </div>

      {notas.length === 0 ? (
        <p className="text-gray-500">Todavía no hay notas.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {notas.map((nota) => (
            <li
              key={nota.id}
              className="flex items-center justify-between rounded border border-gray-300 px-3 py-2"
            >
              <span>{nota.texto}</span>
              <button
                onClick={() => eliminarNota(nota.id)}
                className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
