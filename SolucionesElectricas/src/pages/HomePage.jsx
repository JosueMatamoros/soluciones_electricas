import React from "react";
import { useTheme } from "../context/ThemeContext";
import videoFile from "../assets/videos/lightbulb.mp4";
import { Button } from "@material-tailwind/react";
import { Award, Wrench, ShieldCheck, Users, Wallet } from "lucide-react";
import { FeatureCard } from "../components/home/FeatureCard";
import { useNavigate } from "react-router-dom";

import ProcessTimeline from "../components/home/ProcessTimelineSection";

import ServicesCarousel from "../components/home/ServicesCarouselSection";
import FeaturedProjectsSection from "../components/home/FeaturedProjectsSection";
import ProjectCTA from "../components/home/ProjectCTA";

export default function HomePage() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const features = [
    {
      title: "Técnicos Profesionales",
      description:
        "Personal capacitado y con experiencia en todas las marcas del mercado.",
      Icon: Wrench,
    },
    {
      title: "Trabajo de Calidad",
      description:
        "Utilizamos las mejores técnicas y herramientas para garantizar resultados óptimos.",
      Icon: ShieldCheck,
    },
    {
      title: "Atención Personalizada",
      description:
        "Te asesoramos para encontrar la mejor solución según tus necesidades específicas.",
      Icon: Users,
    },
    {
      title: "Precios Adecuados",
      description:
        "Cotizaciones claras y justas. Presupuesto previo sin compromiso ni sorpresas.",
      Icon: Wallet,
    },
  ];

  return (
    <div
      className={`flex flex-col min-h-screen w-full transition-colors duration-300 px-4 ${
        isDarkMode ? "bg-dark-bg" : "bg-light-bg"
      }`}
    >
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-10">
          <div className="w-full flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-5 min-h-[320px]">
            <h1 className="text-4xl md:text-6xl   font-roboto-slab font-bold max-w-xl text-center lg:text-left transition-colors duration-300 text-light-text dark:text-dark-text">
              <span className="block sm:inline">Soluciones Eléctricas</span>
              <span className="block sm:inline"> del Norte</span>
            </h1>
            <p className="text-lg md:text-xl max-w-lg text-slate-600 dark:text-slate-300 font-medium">
              Somos expertos en instalaciones y mantenimiento eléctrico. Si
              tienes una idea, la transformamos en realidad con soluciones a
              medida.
              <br />
              <span className="font-roboto-slab font-bold  transition-colors duration-300 text-light-text dark:text-dark-text ">
                Grupo SEN
              </span>
              ,
              <span
                className="ml-2 text-2xl italic font-light text-[#22d3ee]"
                style={{ fontFamily: "Dancing Script, cursive" }}
              >
                sí hay de otra.
              </span>
            </p>
            <Button
              className="mt-2 px-8 py-2 rounded-full bg-[#22d3ee] hover:bg-[#0891b2] text-white font-bold text-lg shadow-lg transition-colors duration-200"
              size="lg"
              onClick={() => navigate("/contacto")}
            >
              Solicita una Cotización
            </Button>
          </div>
          <div className="w-full flex items-center justify-center min-h-[380px]">
            <div
              className="w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border-4 border-[#22d3ee]/30 flex-1 p-0 bg-white dark:bg-dark-bg"
              style={{
                aspectRatio: "16/9",
                minHeight: "300px",
                height: "320px",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
                aria-label="Video de Soluciones Eléctricas"
                style={{
                  minHeight: "300px",
                  height: "320px",
                  background: "transparent",
                }}
              >
                <source src={videoFile} type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
          </div>
        </div>
      </section>

      <ServicesCarousel />

      {/* Features Section */}
      <section className="mx-auto max-w-6xl py-6  md:py-10">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-light-border dark:border-dark-border bg-light-bg-tertiary dark:bg-dark-bg-tertiary px-4 py-2 text-sm font-semibold text-brand-cyan">
              <Award className="h-4 w-4" />
              Por Qué Elegirnos
            </div>

            <h2 className="mt-3 text-4xl font-extrabold leading-[1.05] text-light-text dark:text-dark-text">
              Referentes en <span className="text-brand-cyan">Soluciones</span>
              <br />
              de Climatización
            </h2>

            <p className="mt-2 max-w-xl text-base leading-7 text-light-text-muted dark:text-dark-text-muted">
              Con más de 10 años de experiencia, nos hemos consolidado como
              referentes en soluciones de climatización en la región, ofreciendo
              servicios confiables y eficientes para garantizar el confort en
              cada proyecto.
            </p>

            <div className="mt-2 md:mt-4 flex lg:justify-start justify-center text-3xl md:text-4xl ">
              <div className="flex flex-row flex-wrap items-end gap-2">
                    <span className=" font-extrabold text-brand-cyan tracking-tight">+15</span>
                    <span className=" font-extrabold text-brand-cyan ml-1 tracking-tight">
                      años
                    </span>
                    <span className=" font-black text-light-text dark:text-dark-text ml-2 tracking-tight">
                      de experiencia
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <FeatureCard
                key={f.title}
                title={f.title}
                description={f.description}
                Icon={f.Icon}
              />
            ))}
          </div>
        </div>
      </section>
      <FeaturedProjectsSection />

      {/* Process Timeline Section */}
      <ProcessTimeline />
      <ProjectCTA />
    </div>
  );
}
