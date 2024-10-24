import React from "react";
import {
  FaThermometerHalf,
  FaTint,
  FaWind,
  FaExclamationTriangle,
  FaBolt,
  FaCalendarAlt,
  FaList,
} from "react-icons/fa";

export default function ACMaintenancePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
        Servicios de Mantenimiento de Aires Acondicionados
      </h1>
      <div className="flex flex-col lg:flex-row w-full items-stretch">
        <div className="flex-1 p-4">
          {/* Recomendaciones de Mantenimiento */}
          <div className="bg-white shadow-md rounded-lg mb-8 p-6 h-full">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Recomendaciones de Mantenimiento
              </h2>
              <p className="text-gray-600">
                Cuándo y por qué es importante hacer mantenimiento
              </p>
            </div>
            <div>
              <p className="mb-4 text-gray-700">
                El mantenimiento regular de su aire acondicionado es crucial
                para garantizar su eficiencia y longevidad. Se recomienda
                realizar un mantenimiento completo cada 6 meses.
              </p>
              <p className="text-gray-700">
                Un mantenimiento adecuado puede ayudar a:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Mejorar la eficiencia energética</li>
                <li>Prevenir averías costosas</li>
                <li>Extender la vida útil del equipo</li>
                <li>Mantener una calidad de aire interior óptima</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4">
          {/* Señales de Que Necesitas Mantenimiento */}
          <div className="bg-white shadow-md rounded-lg mb-8 p-6 h-full">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Señales de Que Necesitas Mantenimiento
              </h2>
              <p className="text-gray-600">
                Signos comunes de que tu aire acondicionado necesita atención
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <FaThermometerHalf className="h-8 w-8 mb-2 text-gray-700" />
                  ),
                  text: "Enfriamiento insuficiente",
                },
                {
                  icon: <FaTint className="h-8 w-8 mb-2 text-gray-700" />,
                  text: "Fugas de agua",
                },
                {
                  icon: <FaWind className="h-8 w-8 mb-2 text-gray-700" />,
                  text: "Flujo de aire débil",
                },
                {
                  icon: (
                    <FaExclamationTriangle className="h-8 w-8 mb-2 text-gray-700" />
                  ),
                  text: "Ruidos extraños",
                },
                {
                  icon: <FaBolt className="h-8 w-8 mb-2 text-gray-700" />,
                  text: "Aumento en factura eléctrica",
                },
                {
                  icon: (
                    <FaCalendarAlt className="h-8 w-8 mb-2 text-gray-700" />
                  ),
                  text: "Más de 6 meses sin mantenimiento",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  {item.icon}
                  <p className="mt-2 text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ¿Qué incluye un servicio de mantenimiento? */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="border-b border-gray-200 pb-4 mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            ¿Qué incluye un servicio de mantenimiento?
          </h2>
          <p className="text-gray-600">Detalles de nuestro servicio completo</p>
        </div>
        <ul className="space-y-3">
          {[
            "Limpieza de filtros y bobinas",
            "Verificación de niveles de refrigerante",
            "Inspección de componentes eléctricos",
            "Lubricación de partes móviles",
            "Revisión del sistema de drenaje",
            "Comprobación de termostato",
            "Evaluación general del rendimiento",
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <FaList className="h-5 w-5 mr-3 text-gray-700" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
