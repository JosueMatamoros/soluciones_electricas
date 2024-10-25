import React from "react";
import { FaWater, FaThermometerHalf, FaLightbulb, FaMobileAlt } from "react-icons/fa";

const SystemsOffered: React.FC = () => {
  const systems = [
    {
      title: "Sistemas de Filtración y Circulación",
      description: "Garantizamos agua limpia y segura con sistemas de filtración avanzada para mantener tu piscina o jacuzzi en perfecto estado.",
      icon: <FaWater size={40} className="text-gray-600" />,
    },
    {
      title: "Sistemas de Climatización",
      description: "Asegura la temperatura ideal en tu piscina o jacuzzi durante todo el año, brindando confort sin importar el clima.",
      icon: <FaThermometerHalf size={40} className="text-gray-600" />,
    },
    {
      title: "Sistemas de Iluminación",
      description: "Mejora la estética y funcionalidad de tu área con iluminación controlable a distancia, aportando seguridad y belleza.",
      icon: <FaLightbulb size={40} className="text-gray-600" />,
    },
    {
      title: "Automatización y Control Remoto",
      description: "Controla fácilmente cada sistema desde tu dispositivo, ajustando temperatura, iluminación y ciclos de filtrado según tus preferencias.",
      icon: <FaMobileAlt size={40} className="text-gray-600" />,
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Tipos de Sistemas Ofrecidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {systems.map((system, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="mr-4">{system.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{system.title}</h3>
                <p className="text-gray-700">{system.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemsOffered;
