import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackgroundCard from "./BackgroundCard";
import { Button } from "@material-tailwind/react";
// Importa las imágenes necesarias
import acInstallation from "../assets/services/acInstallation.jpg";
import electricalInstallation from "../assets/services/electricalInstallation.jpg";
import poolInstallation from "../assets/services/poolsAndJacuzzis.jpg";

const serviciosDestacados = [
  {
    title: "Instalación de Aires Acondicionados",
    description: "Instalamos y mantenemos sistemas de aire acondicionado para hogares y oficinas.",
    image: acInstallation,
    path: "/servicios/AC",
  },
  {
    title: "Instalaciones Eléctricas Generales",
    description: "Soluciones eléctricas profesionales para todas tus necesidades.",
    image: electricalInstallation,
    path: "/servicios/electricidad",
  },
  {
    title: "Instalación de Sistemas de Piscinas y Jacuzzis",
    description: "Instalación profesional de sistemas de piscina y jacuzzi para residencias, con asesoría en diseño y distribución.",
    image: poolInstallation,
    path: "/servicios/piscinas",
  },
];

export default function MainServices() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/servicios");
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl font-semibold text-gray-900 mb-8 text-center font-roboto-slab font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestros Servicios
        </motion.h2>
        <motion.p
          className="text-xl max-w-2xl mx-auto text-gray-700 italic font-roboto mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades eléctricas y de climatización.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviciosDestacados.map((servicio, index) => (
            <BackgroundCard
              key={index}
              title={servicio.title}
              description={servicio.description}
              image={servicio.image}
              path={servicio.path}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button onClick={handleNavigate}>Ver Todos los Servicios</Button>
        </div>
      </div>
    </section>
  );
}
