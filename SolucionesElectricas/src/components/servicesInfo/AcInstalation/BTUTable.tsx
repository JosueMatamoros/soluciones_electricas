import React from "react";

const BTUTable = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border w-1/3">BTU</th>
              <th className="px-4 py-2 text-left border w-1/3">
                Dimensiones de la Habitación
              </th>
              <th className="px-4 py-2 text-left border w-1/3">
                Condiciones Recomendadas
              </th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td className="border px-4 py-2">12,000 BTU</td>
            <td className="border px-4 py-2">18 - 25 m²</td>
            <td className="border px-4 py-2">
              Habitaciones pequeñas 
            </td>
          </tr>
            <tr>
              <td className="border px-4 py-2">18,000 BTU</td>
              <td className="border px-4 py-2">25 - 35 m²</td>
              <td className="border px-4 py-2">
                Habitaciones medianas o grandes
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">24,000 BTU</td>
              <td className="border px-4 py-2">36 - 50 m²</td>
              <td className="border px-4 py-2">Salones o espacios grandes</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">36,000 BTU</td>
              <td className="border px-4 py-2">50 - 80 m²</td>
              <td className="border px-4 py-2">
                Espacios comerciales o grandes oficinas
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BTUTable;
