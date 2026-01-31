import React from 'react';
import { Zap, Phone, MessageCircle } from 'lucide-react';

const ProjectCTA = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-light-bg">
      <div
        className="relative w-full max-w-6xl rounded-3xl p-8 md:p-16 shadow-2xl border border-dark-border overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)'
        }}
      >
        {/* Grid background effect SOLO dentro de la card */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#233041" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-10">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-8">
          <Zap className="w-4 h-4 text-brand-cyan" />
          <span className="text-brand-cyan text-sm font-medium">Estamos para ayudarte</span>
        </div>

        {/* Contenido principal */}
        <div className="grid md:grid-cols-2 gap-8 items-center md:items-end">
          {/* Texto */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text mb-6">
              ¿Tienes un{' '}
              <span className="text-brand-cyan">proyecto</span>{' '}
              <span className="text-dark-text">en mente?</span>
            </h1>

            <p className="text-dark-text-secondary text-lg mb-8">
              Cuéntanos tu idea y te ayudamos a hacerla realidad.
              <br />
              Cotización sin compromiso y respuesta en menos de 24 horas.
            </p>

            {/* Info adicional */}
            <div className="flex flex-wrap gap-6 text-dark-text-muted text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-cyan" />
                <span>Lun - Sáb: 8am - 6pm</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-brand-cyan" />
                <span>Respuesta rápida garantizada</span>
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-col justify-between items-center h-full w-full gap-6 md:items-stretch">
            {/* Logo centrado arriba */}
            <div className="flex justify-center items-center w-full mb-4 ">
              <img src="/brandLogo.png" alt="Logo" className="h-16 md:h-60 object-contain mx-auto" />
            </div>
            {/* Botones abajo alineados al end */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-end md:justify-end items-end">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-dark-bg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-brand-cyan/50 hover:scale-105">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Solicitar Cotización
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan-light to-brand-cyan-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group px-8 py-4 bg-transparent text-dark-text font-semibold rounded-full border-2 border-dark-border transition-all duration-300 hover:border-brand-cyan hover:bg-dark-bg-tertiary/50 hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 text-brand-cyan" />
                  Llamar Ahora
                </span>
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCTA;
