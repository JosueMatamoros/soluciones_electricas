import React from "react";
import { useTheme } from "../context/ThemeContext";
import videoFile from "../assets/videos/lightbulb.mp4";
import { Button } from "@material-tailwind/react";

export default function HomePage() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen w-full transition-all duration-500 ${
        isDarkMode ? "bg-main-dark-bg" : "bg-main-light-bg"
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
              className={`text-3xl md:text-4xl lg:text-5xl font-roboto-slab font-bold max-w-xl text-center lg:text-left transition-all duration-500 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Soluciones Eléctricas del Norte
            </h1>
            <p
              className={`text-lg md:text-xl max-w-lg text-center lg:text-left transition-all duration-500 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Somos expertos en instalaciones y mantenimiento eléctrico. Si tienes una
              idea, la transformamos en realidad con soluciones a medida.
              <br />
              <span className="font-bold">Grupo SEN</span>,{" "}
              <span className={`italic transition-all duration-500 ${isDarkMode ? "text-white" : "text-black"}`} >
                sí hay de otra
              </span>
              .
            </p>
            <Button
            className={`${isDarkMode ? "bg-dark-button" : ""}`}
            >
              Solicita una Cotización
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
