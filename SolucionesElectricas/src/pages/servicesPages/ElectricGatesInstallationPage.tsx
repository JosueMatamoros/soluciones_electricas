// src/pages/servicesPages/ElectricGatesInstallationPage.tsx

import React from "react";
import { Button } from "@material-tailwind/react";
import { FaCog, FaDoorOpen, FaBolt, FaCogs } from "react-icons/fa";
import MotorCard from "../../components/servicesInfo/electricGates/MotorCard";
import AdditionalBenefitCard from "../../components/servicesInfo/electricGates/AdditionalBenefitCard";
import electricGateImage from "../../assets/services/electricGatesInstallation.jpg";
import { useNavigate } from "react-router-dom";

const ElectricGatesInstallationPage: React.FC = () => {
  const navigate = useNavigate(); // 2. Crea la función de navegación
  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      {/* Sección de Introducción */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-8">
          {/* Texto de Introducción */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Instalación de Portones Eléctricos
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Ofrecemos soluciones profesionales para la instalación de portones
              eléctricos, enfocándonos en dos tipos principales de motores:
              cremallera y tipo brazo. Nuestros sistemas proporcionan seguridad,
              automatización y durabilidad, ideales tanto para uso residencial
              como comercial.
            </p>
            <Button color="gray">Solicita una Cotización</Button>
          </div>

          {/* Imagen Representativa */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-auto rounded-lg overflow-hidden shadow-lg">
              <img
                src={electricGateImage}
                alt="Instalación de Portones Eléctricos"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Tipos de Motores */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Tipos de Motores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Motor de Cremallera */}
            <MotorCard
              title="Motores de Cremallera"
              description="Ideales para portones correderos, estos motores ofrecen un movimiento suave y preciso, perfectos para portones de gran tamaño y peso con espacio lateral limitado."
              icon={<FaCog size={40} className="text-gray-600" />}
            />

            {/* Motor Tipo Brazo */}
            <MotorCard
              title="Motores Tipo Brazo"
              description="Diseñados para portones batientes con dos brazos, estos motores proporcionan una operación eficiente y suave, ideales para portones grandes y pesados."
              icon={<FaDoorOpen size={40} className="text-gray-600" />}
            />
          </div>
        </div>
      </section>

      {/* Sección de Automatización y Control */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Automatización y Control
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Controla tu portón de manera remota con nuestros sistemas avanzados
            de automatización, que mejoran la seguridad y comodidad. Personaliza
            horarios de apertura y cierre, y gestiona el acceso con facilidad
            desde cualquier dispositivo.
          </p>
          <Button color="gray" onClick={() => navigate("/servicios/domotica")}>
            Descubre Más
          </Button>{" "}
          {/* 3. Usa la función en el onClick */}
        </div>
      </section>

      {/* Sección de Beneficios Adicionales */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Beneficios Adicionales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Beneficio 1 */}
            <AdditionalBenefitCard
              title="Seguridad Mejorada"
              description="Protege tu propiedad con sistemas de portones robustos diseñados para prevenir accesos no autorizados."
              icon={<FaBolt size={40} className="text-gray-600" />}
            />

            {/* Beneficio 2 */}
            <AdditionalBenefitCard
              title="Mantenimiento Fácil"
              description="Nuestros sistemas están diseñados para un mantenimiento sencillo, garantizando durabilidad y eficiencia a largo plazo."
              icon={<FaCogs size={40} className="text-gray-600" />}
            />

            {/* Beneficio 3 */}
            <AdditionalBenefitCard
              title="Alta Personalización"
              description="Adapta tu sistema de portón a tus necesidades específicas con diversas opciones de automatización y control."
              icon={<FaCog size={40} className="text-gray-600" />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectricGatesInstallationPage;
