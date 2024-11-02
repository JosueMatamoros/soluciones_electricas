import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const logo = "/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Logo y Navegación */}
          <div className="flex flex-col items-center lg:items-start lg:flex-row ">
            {/* Logo */}
            <img src={logo} alt="Logo" className="h-12 w-auto mb-4 lg:mb-0 lg:mr-6" />

            {/* Navegación */}
            <nav className="flex flex-wrap self-center justify-center lg:justify-start gap-4 text-gray-600">
              <Link to="/" className="hover:text-gray-900 transition-colors duration-200">
                Inicio
              </Link>
              <Link to="/servicios" className="hover:text-gray-900 transition-colors duration-200">
                Servicios
              </Link>
              <Link to="/contacto" className="hover:text-gray-900 transition-colors duration-200">
                Contáctanos
              </Link>
              <Link to="/nosotros" className="hover:text-gray-900 transition-colors duration-200">
                Sobre Nosotros
              </Link>
              <Link to="/faqs" className="hover:text-gray-900 transition-colors duration-200">
                FAQs
              </Link>
            </nav>
          </div>

          {/* Cita pequeña */}
          <div className="mt-6 lg:mt-0 relative text-center lg:text-left max-w-xs lg:max-w-md">
            {/* Ícono de cita izquierda */}
            <FaQuoteLeft className="absolute -top-3 left-0 text-lg text-gray-400" />

            {/* Texto de la cita */}
            <Typography variant="small" className="italic text-gray-700 px-6">
              Soluciones Eléctricas del norte, sí hay de otra.
            </Typography>

            {/* Ícono de cita derecha */}
            <FaQuoteRight className="absolute -bottom-3 right-0 text-lg text-gray-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
