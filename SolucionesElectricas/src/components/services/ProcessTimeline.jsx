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
      <div className="w-full py-6 md:py-10">
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

        <div className="relative mt-10 flex flex-col items-center lg:items-stretch">
          {/* Vertical line for mobile (left), horizontal for desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-12 h-px bg-[#22D3EE]/30" />
          <div className="flex flex-col gap-8 w-full lg:grid lg:grid-cols-4 lg:gap-10">
            {/* Vertical line on the left for mobile */}
            <div className="absolute left-6 top-8 h-[calc(100%-2rem)] w-1 bg-[#22D3EE]/30 lg:hidden z-0" />
            {steps.map((s, idx) => {
              const StepIcon = s.Icon;
              const stepText = String(s.step).padStart(2, "0");
              return (
                <div
                  key={s.step}
                  className="relative flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center z-10"
                >
                  {/* Removed per-step vertical connector for mobile */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-sm">
                      <StepIcon className="h-6 w-6 text-[#22D3EE]" />
                    </div>
                    <div className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-[#22D3EE] text-xs font-extrabold text-white">
                      {stepText}
                    </div>
                  </div>
                  <div className="ml-4 lg:ml-0 mt-0 lg:mt-4">
                    <h3 className="text-base font-bold lg:text-xl lg:font-extrabold">{s.title}</h3>
                    <p className="mt-1 text-sm lg:text-base text-slate-300 max-w-full lg:max-w-xs">{s.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
