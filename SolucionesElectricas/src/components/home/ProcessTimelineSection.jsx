import React from "react";
import {
  ClipboardCheck,
  PhoneCall,
  Wrench,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../common/SectionHeader";

export default function ProcessTimeline() {
  const { t } = useTranslation();
  
  const steps = [
    {
      step: 1,
      title: t('home.process.steps.contact.title'),
      description: t('home.process.steps.contact.description'),
      Icon: PhoneCall,
    },
    {
      step: 2,
      title: t('home.process.steps.evaluation.title'),
      description: t('home.process.steps.evaluation.description'),
      Icon: ClipboardCheck,
    },
    {
      step: 3,
      title: t('home.process.steps.execution.title'),
      description: t('home.process.steps.execution.description'),
      Icon: Wrench,
    },
    {
      step: 4,
      title: t('home.process.steps.delivery.title'),
      description: t('home.process.steps.delivery.description'),
      Icon: CheckCircle2,
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className="w-full py-6 md:py-10">
        <SectionHeader
          badge={t('home.process.badge')}
          badgeIcon={Zap}
          title={
            <>
              {t('home.process.title')}{" "}
              <span className="text-black dark:text-white">{t('home.process.titleHighlight')}</span>
            </>
          }
          description={t('home.process.description')}
        />

        <div className="relative mt-10 lg:mt-16">
          <div className="absolute left-6 top-8 h-[calc(100%-2rem)] w-1 bg-[#22D3EE]/30 lg:hidden" />
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-[#22D3EE]/30 lg:block" />

          <div className="flex flex-col gap-8 w-full lg:grid lg:grid-cols-4 lg:gap-10">
            {steps.map((s) => {
              const StepIcon = s.Icon;
              const stepText = String(s.step).padStart(2, "0");

              return (
                <div
                  key={s.step}
                  className="relative z-10 flex flex-row items-center text-left lg:flex-col lg:items-center lg:text-center"
                >
                  <div className="relative flex-shrink-0">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-sm lg:h-24 lg:w-24 lg:rounded-2xl">
                      <StepIcon className="h-6 w-6 text-[#22D3EE] lg:h-10 lg:w-10" />
                    </div>

                    <div className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-[#22D3EE] text-xs font-extrabold text-white lg:h-10 lg:w-10 lg:text-sm">
                      {stepText}
                    </div>
                  </div>

                  <div className="ml-4 lg:ml-0 lg:mt-4">
                    <h3 className="text-base font-bold lg:text-2xl lg:font-extrabold">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-300 lg:mt-2 lg:max-w-xs lg:text-base lg:leading-7">
                      {s.description}
                    </p>
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
