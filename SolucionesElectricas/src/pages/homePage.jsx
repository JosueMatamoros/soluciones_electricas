import React from "react";
import videoFile from "../assets/backgroundVideo.mp4";
import { ServiceCard } from "../components/CardService";
import Quote from "../components/Quote";
import ContactForm from "../components/contact/contactForm";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Banner Principal con Video */}
      <section className="mt-0 relative h-[600px] flex items-center justify-center text-white lg:mt-8">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoFile} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-4xl font-bold">Soluciones Eléctricas del Norte</h1>
          <p className="text-xl">
            Expertos en instalaciones y mantenimiento eléctrico
          </p>
          <button className="px-4 py-2 border border-white text-white">
            Solicita una Cotización
          </button>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Instalación de Aires Acondicionados",
                description:
                  "Instalamos y mantenemos sistemas de aire acondicionado para hogares y oficinas.",
              },
              {
                title: "Instalaciones Eléctricas Generales",
                description:
                  "Soluciones eléctricas profesionales para todas tus necesidades.",
              },
              {
                title: "Instalación de Sistemas de Piscinas y Jacuzzis",
                description:
                  "Nos encargamos de la instalación completa de sistemas de piscinas y jacuzzis.",
              },
              {
                title: "Mantenimiento de Aires Acondicionados",
                description:
                  "Servicio de mantenimiento y reparación para sistemas de aire acondicionado.",
              },
              {
                title: "Automatización de Portones",
                description:
                  "Automatiza tus portones con nuestras soluciones de alta tecnología.",
              },
              {
                title: "Instalación de Cámaras WiFi",
                description:
                  "Instalación profesional de cámaras de seguridad WiFi para mayor seguridad.",
              },
            ].map((service, index) => (
              <div key={index} className="flex items-center justify-center h-full">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}
