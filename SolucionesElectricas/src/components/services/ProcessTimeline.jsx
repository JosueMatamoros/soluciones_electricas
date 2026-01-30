import React from "react";
import {
  ClipboardCheck,
  PhoneCall,
  Wrench,
  CheckCircle2,
  Zap,
} from "lucide-react";
import SectionHeader from "../common/SectionHeader";

export default function ProcessTimeline() {
  const steps = [
    {
      step: 1,
      title: "Contacto",
      description:
        "Contáctanos por WhatsApp, teléfono o formulario. Cuéntanos qué necesitas.",
      Icon: PhoneCall,
    },
    {
      step: 2,
      title: "Evaluación",
      description:
        "Realizamos una visita técnica para evaluar tu equipo y darte un presupuesto exacto.",
      Icon: ClipboardCheck,
    },
    {
      step: 3,
      title: "Ejecución",
      description:
        "Nuestros técnicos certificados realizan el servicio con los más altos estándares.",
      Icon: Wrench,
    },
    {
      step: 4,
      title: "Entrega",
        description:
          "Te entregamos el trabajo terminado y explicamos su funcionamiento y lo realizado.",
        Icon: CheckCircle2,
    },
  ];

  return (
    <section className="w-full bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-6 md:py-10">
        <SectionHeader
          badge="Cómo Trabajamos"
          badgeIcon={Zap}
          title={
            <>
              Proceso Simple y{" "}
              <span className="text-black dark:text-white">Transparente</span>
            </>
          }
          description="Desde el primer contacto hasta la entrega final, te acompañamos en cada paso del proceso."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-[#22D3EE]/30 lg:block" />

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-4 lg:gap-10">
            {steps.map((s) => {
              const StepIcon = s.Icon;
              const stepText = String(s.step).padStart(2, "0");

              return (
                <div
                  key={s.step}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative">
                    <div className="grid h-24 w-24 place-items-center rounded-2xl bg-white shadow-sm">
                      <StepIcon className="h-10 w-10 text-[#22D3EE]" />
                    </div>

                    <div className="absolute -right-2 -top-2 grid h-10 w-10 place-items-center rounded-full bg-[#22D3EE] text-sm font-extrabold text-white">
                      {stepText}
                    </div>
                  </div>

                  <h3 className="mt-4 text-2xl font-extrabold ">{s.title}</h3>
                  <p className="mt-2 max-w-xs text-base leading-7 text-slate-300">
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
