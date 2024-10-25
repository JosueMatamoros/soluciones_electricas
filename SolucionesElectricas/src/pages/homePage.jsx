import React from "react";
// Importa el video desde tu carpeta de assets
import videoFile from "../assets/videos/lightbulb.mp4";
// Importa los componentes necesarios
import ContactForm from "../components/contact/contactForm";
import { Button } from "@material-tailwind/react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen text-gray-900 bg-gray-50">
      {/* Banner Principal con Video */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contenedor del video */}
          <div className="w-full flex items-center justify-center">
            <div className="w-full h-auto rounded-lg overflow-hidden shadow-lg">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-lg"
                aria-label="Video de Soluciones Eléctricas"
              >
                <source src={videoFile} type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
          </div>

          {/* Contenedor del texto y el botón */}
          <div className="w-full flex flex-col items-center lg:items-start justify-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-roboto-slab font-bold text-gray-900 text-center lg:text-left max-w-xl">
              Soluciones Eléctricas del Norte
            </h1>
            <p className="text-lg md:text-xl text-gray-700 text-center lg:text-left max-w-lg">
              Somos expertos en instalaciones y mantenimiento eléctrico. Si
              tienes una idea, la transformamos en realidad con soluciones a
              medida.
              <br />
              <span className="font-bold">Grupo SEN</span>,{" "}
              <span className="text-black italic">sí hay de otra</span>.
            </p>
            <Button>Solicita una Cotización</Button>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <ContactForm />
    </div>
  );
}
