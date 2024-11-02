import React from "react";
import { FaClipboardCheck, FaTools, FaCogs, FaThumbsUp } from "react-icons/fa";
import ProcessStage from "./ProcessStage";

const ProcessTimeline = () => {
  const stages = [
    {
      title: "Consulta Inicial",
      description: "Analizamos tus necesidades y proporcionamos una solución personalizada.",
      Icon: FaClipboardCheck,
      isReversed: false,
      delay: 0,
    },
    {
      title: "Planificación y Diseño",
      description: "Diseñamos y planificamos cada detalle para asegurar un proyecto exitoso.",
      Icon: FaTools,
      isReversed: true,
      delay: 0.2,
    },
    {
      title: "Implementación",
      description: "Instalamos y configuramos los sistemas eléctricos con precisión.",
      Icon: FaCogs,
      isReversed: false,
      delay: 0.4,
    },
    {
      title: "Seguimiento y Soporte",
      description: "Ofrecemos soporte continuo para asegurar el funcionamiento óptimo de tus sistemas.",
      Icon: FaThumbsUp,
      isReversed: true,
      delay: 0.6,
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl ">
      <h2 className="text-3xl font-semibold text-gray-900 font-roboto-slab font-bold mb-8 text-center">
        Nuestro Proceso de Trabajo
      </h2>
      <div className="relative wrap overflow-hidden p-10 h-full">
        {/* Línea Vertical */}
        <div className="border-2 absolute border-opacity-20 border-gray-700 h-full left-1/2 transform -translate-x-1/2"></div>

        {/* Renderizar cada etapa */}
        {stages.map((stage, index) => (
          <ProcessStage
            key={index}
            title={stage.title}
            description={stage.description}
            Icon={stage.Icon}
            isReversed={stage.isReversed}
            delay={stage.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
