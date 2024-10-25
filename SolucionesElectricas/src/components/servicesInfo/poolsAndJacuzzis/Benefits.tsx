// components/poolsAndJacuzzis/Benefits.tsx

import React from "react";
import { FaHandsHelping, FaMedal, FaPalette } from "react-icons/fa";

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Soporte Integral",
      description: "Acompañamos a nuestros clientes en cada etapa del proyecto, desde el diseño hasta la instalación final.",
      icon: <FaHandsHelping size={40} className="text-gray-600" />,
    },
    {
      title: "Calidad y Durabilidad",
      description: "Utilizamos materiales y equipos de primera calidad que garantizan eficiencia y ahorro energético a largo plazo.",
      icon: <FaMedal size={40} className="text-gray-600" />,
    },
    {
      title: "Soluciones Personalizadas",
      description: "Adaptamos nuestros servicios a tus necesidades y preferencias para crear un ambiente único en tu hogar.",
      icon: <FaPalette size={40} className="text-gray-600" />,
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Beneficios de Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
