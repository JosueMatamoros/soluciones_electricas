import React from "react";
import { Award, Wrench, ShieldCheck, Users, Wallet } from "lucide-react";
import { FeatureCard } from "../../components/services/FeatureCard";

export default function AirConditioningPage() {
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
    <main className="w-full bg-light-bg dark:bg-dark-bg ">
      <section className="mx-auto max-w-6xl py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-light-border dark:border-dark-border bg-light-bg-tertiary dark:bg-dark-bg-tertiary px-4 py-2 text-sm font-semibold text-brand-cyan">
              <Award className="h-4 w-4" />
              Por Qué Elegirnos
            </div>

            <h1 className="mt-3 text-5xl font-extrabold leading-[1.05] text-light-text dark:text-dark-text">
              Referentes en <span className="text-brand-cyan">Soluciones</span>
              <br />
              de Climatización
            </h1>

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
    </main>
  );
}
