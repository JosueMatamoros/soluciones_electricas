// pages/servicesPages/PoolsAndJacuzzisPage.tsx

import React from "react";
import { Button } from "@material-tailwind/react";
import Benefits from "../../components/poolsAndJacuzzis/Benefits";
import SystemsOffered from "../../components/poolsAndJacuzzis/SystemsOffered";
import jaccuzi from "../../assets/services/poolAndJacuzzi/jacuzzi.jpg";

const PoolsAndJacuzzisPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      {/* Sección de Introducción */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-8">
          {/* Texto de Introducción */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Soluciones Integrales para Piscinas y Jacuzzis
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Transformamos tus ideas en realidad con un servicio completo que
              abarca desde la confección inicial del proyecto hasta la
              instalación final. Nuestro compromiso es garantizar eficiencia,
              durabilidad y personalización para el disfrute, seguridad y
              comodidad de tu hogar.
            </p>
            <Button color="gray">Solicita una Cotización</Button>
          </div>

          {/* Imagen Representativa */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-auto rounded-lg overflow-hidden shadow-lg">
              <img
                src={jaccuzi}
                alt="Piscinas y Jacuzzis de Alta Calidad"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Sección de Sistemas Ofrecidos */}
      <SystemsOffered />
      {/* Sección de Beneficios */}
      <Benefits />
    </div>
  );
};

export default PoolsAndJacuzzisPage;
