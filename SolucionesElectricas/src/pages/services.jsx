// src/components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundCard from '../components/BackgroundCard';
import placeholderImage from "../assets/placeholder.jpeg";

export default function Services() {
  const servicios = [
    {
      title: "Instalación de Aires Acondicionados",
      description:
        "Instalamos y mantenemos sistemas de aire acondicionado para hogares y oficinas.",
      image: placeholderImage, // Puedes usar diferentes imágenes para cada servicio
    },
    {
      title: "Instalaciones Eléctricas Generales",
      description:
        "Soluciones eléctricas profesionales para todas tus necesidades.",
      image: placeholderImage,
    },
    {
      title: "Instalación de Sistemas de Piscinas y Jacuzzis",
      description:
        "Nos encargamos de la instalación completa de sistemas de piscinas y jacuzzis.",
      image: placeholderImage,
    },
    {
      title: "Mantenimiento de Aires Acondicionados",
      description:
        "Servicio de mantenimiento y reparación para sistemas de aire acondicionado.",
      image: placeholderImage,
    },
    {
      title: "Automatización de Portones",
      description:
        "Automatiza tus portones con nuestras soluciones de alta tecnología.",
      image: placeholderImage,
    },
    {
      title: "Instalación de Cámaras WiFi",
      description:
        "Instalación profesional de cámaras de seguridad WiFi para mayor seguridad.",
      image: placeholderImage,
    },
  ];

  return (
    <div className="min-h-screen bg-darkGray">
      {/* Encabezado */}
      <header className="py-8 px-4 text-center bg-darkBlue">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestros Servicios
        </motion.h1>
        <motion.p 
          className="text-xl max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades eléctricas y de climatización.
        </motion.p>
      </header>

      {/* Cuerpo Principal */}
      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <BackgroundCard
              key={index}
              title={servicio.title}
              description={servicio.description}
              image={servicio.image}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
