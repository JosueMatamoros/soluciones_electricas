import React from "react";
import { useTheme } from "../context/ThemeContext";
import videoFile from "../assets/videos/lightbulb.mp4";
import { Button } from "@material-tailwind/react";

export default function HomePage() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen w-full transition-colors duration-300 ${
        isDarkMode ? "bg-dark-bg" : "bg-light-bg"
      }`}
    >
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
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-roboto-slab font-bold max-w-xl text-center lg:text-left transition-colors duration-300 ${
                isDarkMode ? "text-dark-text" : "text-light-text"
              }`}
            >
              Soluciones Eléctricas del Norte
            </h1>
            <p
              className={`text-lg md:text-xl max-w-lg text-center lg:text-left transition-colors duration-300 ${
                isDarkMode ? "text-dark-text-secondary" : "text-light-text-secondary"
              }`}
            >
              Somos expertos en instalaciones y mantenimiento eléctrico. Si tienes una
              idea, la transformamos en realidad con soluciones a medida.
              <br />
              <span className="font-bold">Grupo SEN</span>,{" "}
              <span className={`italic transition-colors duration-300 ${
                isDarkMode ? "text-brand-cyan-light" : "text-brand-cyan-dark"
              }`}>
                sí hay de otra
              </span>
              .
            </p>
            <Button
              className={`transition-colors duration-300 ${
                isDarkMode 
                  ? "bg-brand-cyan hover:bg-brand-cyan-light text-dark-bg" 
                  : "bg-brand-cyan-dark hover:bg-brand-cyan text-white"
              }`}
            >
              Solicita una Cotización
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
