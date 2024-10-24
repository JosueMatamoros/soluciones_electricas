import React from 'react';
import { FaBolt, FaBriefcase, FaHome, FaLightbulb, FaLock, FaTools, FaWrench, FaShieldAlt } from 'react-icons/fa';
import ServiceCard from '../../components/servicesInfo/ElectricalServices/ServiceCard';

export default function ElectricalServices() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Soluciones Eléctricas a Medida</h1>
        <p className="text-xl mb-6">
          Nos encargamos de todos tus proyectos eléctricos con la mayor eficiencia y calidad.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition-all">
          Comienza tu proyecto con nosotros
        </button>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          icon={<FaHome className="h-6 w-6" />}
          title="Instalaciones Residenciales"
          description="Especialistas en proyectos eléctricos desde cero para casas nuevas y existentes."
        />
        <ServiceCard
          icon={<FaBriefcase className="h-6 w-6" />}
          title="Instalaciones Comerciales"
          description="Soluciones eléctricas para proyectos comerciales y grandes infraestructuras."
        />
        <ServiceCard
          icon={<FaWrench className="h-6 w-6" />}
          title="Modificaciones Eléctricas"
          description="Actualización y modificación de instalaciones eléctricas existentes."
        />
        <ServiceCard
          icon={<FaLightbulb className="h-6 w-6" />}
          title="Iluminación"
          description="Servicios de iluminación interna y externa con tecnología LED y soluciones personalizadas."
        />
        <ServiceCard
          icon={<FaLock className="h-6 w-6" />}
          title="Sistemas de Seguridad"
          description="Instalación de sistemas eléctricos de seguridad, incluyendo alarmas y cámaras."
        />
        <ServiceCard
          icon={<FaTools className="h-6 w-6" />}
          title="Automatización y Domótica"
          description="Sistemas eléctricos inteligentes controlados por voz o mediante apps."
        />
        <ServiceCard
          icon={<FaShieldAlt className="h-6 w-6" />}
          title="Mantenimiento Eléctrico"
          description="Servicios de mantenimiento preventivo y correctivo para garantizar la eficiencia y seguridad."
        />
        <ServiceCard
          icon={<FaBolt className="h-6 w-6" />}
          title="Proyectos Personalizados"
          description="Soluciones eléctricas a medida para necesidades específicas residenciales o comerciales."
        />
      </section>
    </div>
  );
}
