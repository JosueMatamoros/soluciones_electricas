// src/pages/HomePage.tsx

import React from "react";
import videoFile from "../assets/videos/lightbulb.mp4";
import ContactForm from "../components/contact/contactForm";
import { Button } from "@material-tailwind/react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProcessTimeline from "../components/ProcessTimeline";
import MainServices from "../components/MainServices"; // Importa MainServices
import { useRef } from "react";
import ChatBubble from "../components/ChatBubble";

export default function HomePage() {
  const navigate = useNavigate();
  
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { triggerOnce: true });

  const handleNavigate = () => {
    navigate("/servicios#servicios-header");
  }

  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      {/* Banner Principal con Video */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
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
          <div className="w-full flex flex-col items-center lg:items-start justify-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-roboto-slab font-bold text-gray-900 text-center lg:text-left max-w-xl">
              Soluciones Eléctricas del Norte
            </h1>
            <p className="text-lg md:text-xl text-gray-700 text-center lg:text-left max-w-lg">
              Somos expertos en instalaciones y mantenimiento eléctrico. Si tienes una idea, la transformamos en realidad con soluciones a medida.
              <br />
              <span className="font-bold">Grupo SEN</span>, <span className="text-black italic">sí hay de otra</span>.
            </p>
            <Button onClick={handleNavigate}>Solicita una Cotización</Button>
          </div>
        </div>
      </section>

      {/* Sección de Servicios Destacados */}
      <MainServices />

      {/* Sección de Nuestro Proceso de Trabajo */}
      <section ref={timelineRef} className="py-12 px-4">
        {isTimelineInView && <ProcessTimeline />}
      </section>

      {/* Formulario de Contacto */}
      <ContactForm />

      <ChatBubble />
    </div>
  );
}
