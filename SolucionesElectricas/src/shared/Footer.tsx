import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const logo = "/logo.png";

const Footer = () => {
  return (
    <footer className="py-4 bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center border-t border-blue-gray-50 pt-2">
        {/* Logo y navegación */}
        <div className="flex flex-col items-start lg:items-center lg:flex-row">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-12 w-auto mr-4 mb-2 lg:mb-0" />
          
          {/* Navegación */}
          <nav className="flex flex-col lg:flex-row gap-4 text-gray-600">
            <Link to="/" className="hover:text-gray-900">
              Inicio
            </Link>
            <Link to="/servicios" className="hover:text-gray-900">
              Servicios
            </Link>
            <Link to="/contacto" className="hover:text-gray-900">
              Contáctanos
            </Link>
            <Link to="/nosotros" className="hover:text-gray-900">
              Sobre Nosotros
            </Link>
            <Link to="/faqs" className="hover:text-gray-900">
                FAQs
            </Link>
          </nav>
        </div>

        {/* Cita pequeña */}
        <div className="mt-6 lg:mt-0 relative text-center">
          {/* Ícono de cita izquierda */}
          <FaQuoteLeft className="absolute -top-1 left-0 text-lg text-gray-400" />
          
          {/* Texto de la cita */}
          <Typography variant="small" className="italic text-gray-700 px-6">
            Soluciones Eléctricas del norte, sí hay de otra.
          </Typography>
          
          {/* Ícono de cita derecha */}
          <FaQuoteRight className="absolute -bottom-1 right-0 text-lg text-gray-400" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
