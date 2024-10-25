import React from 'react';
import { motion } from 'framer-motion';
import BackgroundCard from '../components/BackgroundCard';
import acInstallation from "../assets/services/acInstallation.jpg"
import electricalInstallation from "../assets/services/electricalInstallation.jpg"
import poolsAndJacuzzis from "../assets/services/poolsAndJacuzzis.jpg"
import acMaintenance from "../assets/services/acMaintenance.jpg"
import homeAutomation from "../assets/services/homeAutomation.jpg"
import electricGatesInstallation from "../assets/services/electricGatesInstallation.jpg"


export default function Services() {
  const servicios = [
    {
      title: "Instalación de Aires Acondicionados",
      description:
        "Instalamos y mantenemos sistemas de aire acondicionado para hogares y oficinas.",
      image: acInstallation,
      path: "/servicios/AC",
    },
    {
      title: "Instalaciones Eléctricas Generales",
      description:
        "Soluciones eléctricas profesionales para todas tus necesidades.",
      image: electricalInstallation,
      path: "/servicios/electricidad",
    },
    {
      title: "Instalación de Sistemas de Piscinas y Jacuzzis",
      description:
        "Nos encargamos de la instalación completa de sistemas de piscinas y jacuzzis.",
      image: poolsAndJacuzzis,
      path : "/servicios/piscinas"
    },
    {
      title: "Mantenimiento de Aires Acondicionados",
      description:
        "Servicio de mantenimiento y reparación para sistemas de aire acondicionado.",
      image: acMaintenance,
      path: "/servicios/mantenimiento",
    },
    {
      title: "Automatización de Portones",
      description:
        "Automatiza tus portones con nuestras soluciones de alta tecnología.",
      image: electricGatesInstallation,
      path : "/servicios/portones"
    },
    {
      title: "Automatización y Domótica",
      description:
        "Soluciones inteligentes para automatizar tu hogar o negocio, mejorando la seguridad, comodidad y eficiencia.",
      image: homeAutomation,
      path: "/servicios/domotica",
    }
  ];

  return (
    <div className="min-h-screen bg-darkGray">
      {/* Encabezado */}
      <header className="py-12 px-4 text-center bg-darkBlue">
        <motion.h1 
          className="text-4xl md:text-5xl font-roboto-slab text-black mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestros Servicios
        </motion.h1>
        <motion.p 
          className="text-xl max-w-2xl mx-auto text-gray-700 italic font-roboto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades eléctricas y de climatización.
        </motion.p>
      </header>

      {/* Cuerpo Principal */}
      <main className="container mx-auto px-4 py-8 font-roboto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <BackgroundCard
              key={index}
              title={servicio.title}
              description={servicio.description}
              image={servicio.image}
              path={servicio.path}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
