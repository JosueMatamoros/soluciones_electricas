import React from 'react';
import { useTranslation } from 'react-i18next';
import { Zap, Phone, MessageCircle } from 'lucide-react';

const ProjectCTA = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex items-center justify-center  max-w-6xl mx-auto py-6 md:py-12">
      <div
        className="relative w-full max-w-6xl rounded-3xl p-8 md:p-16 shadow-2xl border overflow-hidden dark:border dark:border-brand-cyan/40 border-white"
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
          <span className="text-brand-cyan text-sm font-medium">{t('home.cta.badge')}</span>
        </div>

        {/* Contenido principal */}
        <div className="grid md:grid-cols-2 gap-8 items-center ">
          {/* Texto */}
          <div className="flex flex-col md:h-full md:justify-start md:items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-text mb-4 md:mb-2 text-left md:text-left">
              {t('home.cta.title')}{' '}
              <span className="text-brand-cyan">{t('home.cta.titleHighlight')}</span>{' '}
              <span className="text-dark-text">{t('home.cta.titleEnd')}</span>
            </h1>

            <p className="text-dark-text-secondary text-lg mb-6 md:mb-4 text-left">
              {t('home.cta.description')}
              <br />
              {t('home.cta.descriptionLine2')}
            </p>

            {/* Info adicional */}
            <div className="flex flex-wrap gap-6 text-dark-text-muted text-sm md:items-end md:justify-between mt-2 ">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-cyan" />
                <span>{t('home.cta.schedule')}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-brand-cyan" />
                <span>{t('home.cta.guarantee')}</span>
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-col justify-between items-center h-full w-full gap-6 md:items-stretch">
            {/* Logo centrado arriba */}
            <div className="flex justify-center items-center w-full">
              <img src="/brandLogoWhite.png" alt="Logo" className="h-40 md:h-60 object-contain mx-auto" />
            </div>
            {/* Botones abajo alineados al end */}
            <div className="flex flex-col gap-4 w-full md:flex-row md:gap-4 md:items-center">
              <button className="group relative w-full md:w-auto px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-dark-bg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-brand-cyan/50 hover:scale-105 text-left flex items-center gap-1 whitespace-nowrap">
                <span className="relative z-10 flex items-center gap-1 whitespace-nowrap">
                  {t('home.cta.quoteButton')}
                </span>
                <span className="ml-auto inline-block transition-transform duration-300 group-hover:translate-x-2">
                  <svg
                    className="w-5 h-5 text-inherit"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan-light to-brand-cyan-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group w-full md:w-auto px-8 py-4 bg-transparent text-dark-text font-semibold rounded-full border-2 border-dark-border transition-all duration-300 hover:border-brand-cyan hover:bg-dark-bg-tertiary/50 hover:scale-105 text-left flex items-center gap-2">
                <span className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-brand-cyan" />
                  {t('home.cta.callButton')}
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
