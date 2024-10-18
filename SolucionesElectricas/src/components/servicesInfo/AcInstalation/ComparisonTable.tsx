import React from 'react';

const ComparisonTable = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left border w-1/3">Característica</th>
                            <th className="px-4 py-2 text-left border w-1/3">Aire Convencional</th>
                            <th className="px-4 py-2 text-left border w-1/3">Aire Inverter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Eficiencia Energética</td>
                            <td className="border px-4 py-2">Baja</td>
                            <td className="border px-4 py-2">Alta (Ahorra hasta 40%)</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Ruido</td>
                            <td className="border px-4 py-2">Moderado</td>
                            <td className="border px-4 py-2">Bajo</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Costo Inicial</td>
                            <td className="border px-4 py-2">Bajo</td>
                            <td className="border px-4 py-2">Alto</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Costo Operativo</td>
                            <td className="border px-4 py-2">Alto</td>
                            <td className="border px-4 py-2">Bajo</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Durabilidad</td>
                            <td className="border px-4 py-2">Promedio</td>
                            <td className="border px-4 py-2">Alta</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ComparisonTable;
