import React from "react";
import { useTranslation } from "react-i18next";
import {
  Home,
  Check,
  X,
} from "lucide-react";

function StatusIcon({ status }) {
  if (status === "ok") {
    return <Check className="h-5 w-5 text-cyan-500" />;
  }

  if (status === "bad") {
    return <X className="h-5 w-5 text-slate-400 dark:text-slate-500" />;
  }

  return null;
}

function SpecRow({ label, value, status }) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
      <span className="text-slate-600 dark:text-dark-text-muted">{label}</span>
      <div className="flex items-center gap-3">
        <span className="font-semibold text-slate-900 dark:text-dark-text">
          {value}
        </span>
        <StatusIcon status={status} />
      </div>
    </div>
  );
}

function Chips({ items }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-semibold text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ModelCard({ btu, area, title, imageSrc, popular, idealFor, popularBadgeText, idealForLabel }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border shadow-sm transition-colors ${
        popular
          ? "border-brand-cyan"
          : "border-light-border dark:border-dark-border hover:border-cyan-400"
      } bg-white dark:bg-dark-bg-tertiary`}
    >
      <div className="relative h-56 w-full bg-slate-50 dark:bg-dark-bg">
        <img src={imageSrc} alt={title} className="h-full w-full object-cover" />

        <div className="absolute left-5 bottom-5 rounded-full px-4 py-2 text-xs font-semibold backdrop-blur bg-white/90 text-slate-800 dark:bg-dark-bg/80 dark:text-dark-text">
          {btu}
        </div>

        {popular && (
          <div className="absolute top-4 right-4 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-sm bg-brand-cyan">
            {popularBadgeText}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 text-cyan-500">
          <Home className="h-5 w-5" />
          <span className="text-sm font-semibold text-slate-700 dark:text-dark-text-muted">
            {area}
          </span>
        </div>

        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-dark-text">
          {title}
        </h2>

        <div className="mt-3">
          <div className="text-sm font-semibold text-slate-900 dark:text-dark-text">
            {idealForLabel}
          </div>
          <Chips items={idealFor} />
        </div>
      </div>
    </div>
  );
}

function SharedSpecs({ title, specs }) {
  return (
    <div className="mt-12 rounded-[28px] border border-light-border dark:border-dark-border bg-white dark:bg-dark-bg-tertiary p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-dark-text text-center">
        {title}
      </h3>
      <div className="mt-6 max-w-xl mx-auto overflow-hidden rounded-2xl border border-slate-200 dark:border-dark-border">
        <div className="divide-y divide-slate-200 dark:divide-dark-border">
          {specs.map((s) => (
            <SpecRow key={s.label} label={s.label} value={s.value} status={s.status} />
          ))}
        </div>
      </div>
    </div>
  );
}


export default function AirConditioningModels() {
  const { t } = useTranslation();
  
  const models = [
    {
      ...t("services.detail.climatizacion.models.cards.model12k", { returnObjects: true }),
      popular: false,
      imageSrc: "/services/aire-acondicionado.jpg"
    },
    {
      ...t("services.detail.climatizacion.models.cards.model18k", { returnObjects: true }),
      popular: true,
      imageSrc: "/services/aire-acondicionado.jpg"
    },
    {
      ...t("services.detail.climatizacion.models.cards.model24k", { returnObjects: true }),
      popular: false,
      imageSrc: "/services/aire-acondicionado.jpg"
    },
    {
      ...t("services.detail.climatizacion.models.cards.floorCeiling", { returnObjects: true }),
      popular: false,
      imageSrc: "/services/aire-acondicionado.jpg"
    }
  ];

  const specsData = t("services.detail.climatizacion.models.sharedSpecs.specs", { returnObjects: true });
  const specs = [
    { label: specsData.energyConsumption.label, value: specsData.energyConsumption.value, status: "ok" },
    { label: specsData.noiseLevel.label, value: specsData.noiseLevel.value, status: "ok" },
    { label: specsData.efficiency.label, value: specsData.efficiency.value, status: "ok" },
    { label: specsData.installation.label, value: specsData.installation.value, status: "ok" },
  ];

  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {models.map((model, index) => (
          <ModelCard
            key={index}
            btu={model.btu}
            area={model.area}
            title={model.title}
            imageSrc={model.imageSrc}
            popular={model.popular}
            idealFor={model.idealFor}
            popularBadgeText={t("services.detail.climatizacion.models.popularBadge")}
            idealForLabel={t("services.detail.climatizacion.models.idealFor")}
          />
        ))}
      </div>

      <SharedSpecs 
        title={t("services.detail.climatizacion.models.sharedSpecs.title")}
        specs={specs}
      />
    </section>
  );
}
