import React from "react";
import { useTheme } from "../context/ThemeContext";
import videoFile from "../assets/videos/lightbulb.mp4";
import { Button } from "@material-tailwind/react";
import { Award, Wrench, ShieldCheck, Users, Wallet } from "lucide-react";
import { FeatureCard } from "../components/services/FeatureCard";
import ProcessTimeline from "../components/services/ProcessTimeline";

export default function HomePage() {
  const { isDarkMode } = useTheme();

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

      {/* Features Section */}
      <section className="mx-auto max-w-6xl py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-light-border dark:border-dark-border bg-light-bg-tertiary dark:bg-dark-bg-tertiary px-4 py-2 text-sm font-semibold text-brand-cyan">
              <Award className="h-4 w-4" />
              Por Qué Elegirnos
            </div>

            <h2 className="mt-3 text-5xl font-extrabold leading-[1.05] text-light-text dark:text-dark-text">
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

            <div className="mt-6 grid grid-cols-2 gap-10 ">
              <div>
                <div className="text-4xl font-extrabold text-brand-cyan">
                  Miles de
                </div>
                <div className="mt-2 text-base text-light-text-muted dark:text-dark-text-muted">
                  Clientes Felices
                </div>
              </div>

              <div>
                <div className="text-4xl font-extrabold text-brand-cyan">
                  +10 Años
                </div>
                <div className="mt-2 text-base text-light-text-muted dark:text-dark-text-muted">
                  de Experiencia
                </div>
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

      {/* Process Timeline Section */}
      <ProcessTimeline />
    </div>
  );
}
