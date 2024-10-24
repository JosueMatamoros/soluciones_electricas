// src/pages/AutomatizacionDomotica.tsx
'use client'; // Si estás usando Next.js, esto asegura que el componente se renderice en el cliente

import React from 'react';
import { FaLightbulb, FaLock, FaCamera, FaThermometerHalf, FaMusic, FaShieldAlt } from 'react-icons/fa';
import ServiceCard from '../../components/servicesInfo/AutomatizacionDomotica/ServiceCard';

interface Area {
  name: string;
  icon: JSX.Element;
  description: string;
}

const areas: Area[] = [
  {
    name: 'Iluminación',
    icon: <FaLightbulb className="w-6 h-6" />,
    description: 'Sistemas para automatizar la iluminación. Enciende, apaga y ajusta la intensidad de las luces de manera remota o programada. Ahorra energía y personaliza ambientes con control por voz.',
  },
  {
    name: 'Accesos',
    icon: <FaLock className="w-6 h-6" />,
    description: 'Automatización de portones y sistemas de cerraduras electrónicas. Controla entradas a distancia, usa biometría o smartphones para gestionar accesos. Mayor seguridad con notificaciones en tiempo real.',
  },
  {
    name: 'Cámaras',
    icon: <FaCamera className="w-6 h-6" />,
    description: 'Instalación de cámaras de seguridad WiFi. Accede en tiempo real desde cualquier lugar mediante una app. Opciones de grabación, monitoreo de zonas específicas y detección de movimiento.',
  },
  {
    name: 'Climatización',
    icon: <FaThermometerHalf className="w-6 h-6" />,
    description: 'Sistemas para automatizar calefacción y aire acondicionado. Control de temperatura por zonas, ajuste automático basado en hora del día o condiciones climáticas. Ahorro energético y confort.',
  },
  {
    name: 'Entretenimiento',
    icon: <FaMusic className="w-6 h-6" />,
    description: 'Automatización de sistemas de sonido y entretenimiento. Controla altavoces, pantallas y sistemas de cine en casa con un solo dispositivo.',
  },
  {
    name: 'Seguridad',
    icon: <FaShieldAlt className="w-6 h-6" />,
    description: 'Gestión de cámaras, sensores de movimiento y alarmas. Control desde el móvil, alertas en caso de actividad sospechosa, y grabaciones para mayor seguridad.',
  },
];

const AutomatizacionDomotica: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Encabezado/Introducción */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Automatización y Domótica</h1>
        <p className="text-xl mb-6">
          Convierte tu hogar o negocio en un espacio inteligente. Ofrecemos soluciones de automatización y domótica para mayor comodidad, seguridad y eficiencia energética.
        </p>
      </header>

      {/* Sección de Servicios */}
      <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => (
          <ServiceCard
            key={area.name}
            icon={area.icon}
            title={area.name}
            description={area.description}
          />
        ))}
      </section>
    </div>
  );
};

export default AutomatizacionDomotica;
