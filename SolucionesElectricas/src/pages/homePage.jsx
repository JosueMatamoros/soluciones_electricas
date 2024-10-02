import React from "react";
import { Button } from "@material-tailwind/react";
import videoFile from "../assets/backgroundVideo.mp4";
import { ServiceCard } from "../components/CardService";
import placeholderImage from "../assets/placeholder.webp";

export default function homePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Banner Principal con Video */}
      <section className="mt-0 relative h-[600px] flex items-center justify-center text-white lg:mt-8 ">
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
          <h1 className="text-4xl font-bold">
            Soluciones Eléctricas del Norte
          </h1>
          <p className="text-xl">
            Expertos en instalaciones y mantenimiento eléctrico
          </p>
          <Button variant="outlined" className="text-white border-white">
            Solicita una Cotización
          </Button>
        </div>
      </section>
      {/* Sección de Servicios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Instalación de Aires Acondicionados",
                description:
                  "Instalamos y mantenemos sistemas de aire acondicionado para hogares y oficinas.",
              },
              {
                title: "Instalaciones Eléctricas Generales", // Cambiado para hacer referencia a todo tipo de instalación eléctrica
                description:
                  "Soluciones eléctricas profesionales para todas tus necesidades.",
              },
              {
                title: "Instalación de Sistemas de Piscinas y Jacuzzis", // Cambiado como solicitaste
                description:
                  "Nos encargamos de la instalación completa de sistemas de piscinas y jacuzzis.",
              },
              {
                title: "Mantenimiento de Aires Acondicionados",
                description:
                  "Servicio de mantenimiento y reparación para sistemas de aire acondicionado.",
              },
              {
                title: "Automatización de Portones", // Cambiado a un nombre más apropiado para la idea de automatización de portones
                description:
                  "Automatiza tus portones con nuestras soluciones de alta tecnología.",
              },
              {
                title: "Instalación de Cámaras WiFi", // Cambiado a instalación de cámaras WiFi como solicitaste
                description:
                  "Instalación profesional de cámaras de seguridad WiFi para mayor seguridad.",
              },
            ].map((service, index) => (
              <ServiceCard
                key={index}
                imageSrc={placeholderImage} // Usa la misma imagen para todos por ahora
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-sky-800">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Experiencia de más de 10 años en el sector",
              "Certificación de nuestros electricistas",
              "Asistencia técnica 24/7",
              "Precios competitivos",
              "Uso de tecnologías avanzadas",
              "Compromiso con la satisfacción del cliente",
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-8 h-8 text-sky-500 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2l4-4"
                    />
                  </svg>
                  <p className="text-lg text-gray-800">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Contacto Rápido */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-sky-800">
                Contáctanos
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
                <input
                  type="tel"
                  placeholder="Número de teléfono"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                />
                <textarea
                  placeholder="Describe brevemente tu proyecto o consulta"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                  rows="5"
                />
                <Button
                  type="submit"
                  className="w-full px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-sky-800">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-6 h-6 text-sky-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10v2a9 9 0 009 9h2a9 9 0 009-9v-2a9 9 0 00-9-9H12a9 9 0 00-9 9z"
                    />
                  </svg>
                  <span className="text-gray-700">+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-6 h-6 text-sky-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12H4"
                    />
                  </svg>
                  <span className="text-gray-700">
                    info@solucioneselectricasdelnorte.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-6 h-6 text-sky-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 20l-2-2m0-4h5m1-4h6m2 2l2 2m0 0l-2 2"
                    />
                  </svg>
                  <span className="text-gray-700">
                    123 Calle Principal, Ciudad del Norte, País
                  </span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-sky-500 hover:text-sky-600 border border-sky-500 hover:border-sky-600 rounded-full p-2"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10v2a9 9 0 009 9h2a9 9 0 009-9v-2a9 9 0 00-9-9H12a9 9 0 00-9 9z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
