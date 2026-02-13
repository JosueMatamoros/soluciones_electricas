import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const whatsappNumber = "50661350349";
const whatsappMessage = "Hola, me gustaría obtener más información.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function Footer() {
  return (
    <footer className="w-full bg-light-bg-secondary dark:bg-dark-bg-secondary text-light-text dark:text-dark-text border-t border-light-border dark:border-dark-border  transition-colors duration-300">
      <div className="max-w-6xl mx-auto py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-auto block dark:hidden"
          />
          <img
            src="/logoWhite.png"
            alt="Logo White"
            className="h-10 w-auto hidden dark:block"
          />
          <span className="text-xl font-roboto-slab italic font-light text-brand-cyan-dark dark:text-brand-cyan" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Si hay de otra...
          </span>
        </div>
        <nav className="flex flex-col md:flex-row gap-2 md:gap-6 text-base items-center">
          <Link to="/" className="hover:text-brand-cyan-dark dark:hover:text-brand-cyan transition-colors">Inicio</Link>
          <Link to="/servicios" className="hover:text-brand-cyan-dark dark:hover:text-brand-cyan transition-colors">Servicios</Link>
          <Link to="/galeria" className="hover:text-brand-cyan-dark dark:hover:text-brand-cyan transition-colors">Galería</Link>
          <Link to="/contacto" className="hover:text-brand-cyan-dark dark:hover:text-brand-cyan transition-colors">Contáctanos</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-brand-cyan-dark dark:hover:text-brand-cyan transition-colors">
            <FaWhatsapp size={22} />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
            <FaFacebook size={22} />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto text-center text-xs text-light-text-muted dark:text-dark-text-muted pb-4 flex flex-col md:flex-row justify-between items-center gap-1 md:gap-2">
        <span>© 2026 Soluciones Eléctricas del Norte.</span>
        <div className="text-light-text dark:text-dark-text font-semibold text-center md:text-right">
          <div className="mb-1">
            Designed &amp; developed by
          </div>
          <div>
            <a
              href="https://josue-matamoros.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-cyan-dark dark:text-brand-cyan hover:underline"
            >
              Josué Matamoros
            </a>
            {" "}&amp;{" "}
            <a
              href="https://luis-cubillo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-cyan-dark dark:text-brand-cyan hover:underline"
            >
              Luis Cubillo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
