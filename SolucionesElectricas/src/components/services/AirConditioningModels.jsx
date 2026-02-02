import React from "react";
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
    return <X className="h-5 w-5 text-slate-400" />;
  }

  return null;
}

function SpecRow({ label, value, status }) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
      <span className="text-slate-600">{label}</span>
      <div className="flex items-center gap-3">
        <span className="font-semibold text-slate-900">{value}</span>
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
          className="rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-semibold text-cyan-700"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ModelCard({
  btu,
  area,
  title,
  imageSrc,
  popular,
  specs,
  idealFor,
}) {
  return (
    <div className={`group relative overflow-hidden rounded-[28px] border bg-white shadow-sm transition-colors ${
      popular ? 'border-brand-cyan' : 'border-slate-200 hover:border-cyan-400'
    }`}>
      <div className="relative h-56 w-full bg-slate-50">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover"
        />

        <div className="absolute left-5 bottom-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-800 backdrop-blur">
          {btu}
        </div>

        {popular && (
          <div
            className="absolute top-4 right-4 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-sm bg-brand-cyan"
          >
            Más Popular
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 text-cyan-500">
          <Home className="h-5 w-5" />
          <span className="text-sm font-semibold">{area}</span>
        </div>

        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
          {title}
        </h2>

        <div className="mt-7">
          <div className="text-sm font-semibold text-slate-900">
            Especificaciones:
          </div>

          <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200">
            <div className="divide-y divide-slate-200">
              {specs.map((s) => (
                <SpecRow
                  key={s.label}
                  label={s.label}
                  value={s.value}
                  status={s.status}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7">
          <div className="text-sm font-semibold text-slate-900">
            Ideal para:
          </div>
          <Chips items={idealFor} />
        </div>
      </div>
    </div>
  );
}

export default function AirConditioningModels() {
  return (
    <section className="mt-10">


      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ModelCard
          btu="12,000 BTU"
          area="15-25 m²"
          title="Mini Split 12,000 BTU"
          imageSrc="/services/aire-acondicionado.jpg"
          popular={false}
          specs={[
            { label: "Consumo energético", value: "Bajo", status: "ok" },
            { label: "Nivel de ruido", value: "Bajo", status: "ok" },
            { label: "Potencia", value: "Baja", status: "bad" },
            { label: "Eficiencia", value: "Buena", status: "ok" },
            { label: "Instalación", value: "Sencilla", status: "ok" },
          ]}
          idealFor={[
            "Habitaciones",
            "Oficinas pequeñas",
            "Estudios",
          ]}
        />

        <ModelCard
          btu="18,000 BTU"
          area="25-40 m²"
          title="Mini Split 18,000 BTU"
          imageSrc="/services/aire-acondicionado.jpg"
          popular={true}
          specs={[
            { label: "Consumo energético", value: "Medio", status: "ok" },
            { label: "Nivel de ruido", value: "Bajo", status: "ok" },
            { label: "Potencia", value: "Media", status: "ok" },
            { label: "Eficiencia", value: "Muy buena", status: "ok" },
            { label: "Instalación", value: "Sencilla", status: "ok" },
          ]}
          idealFor={[
            "Salas medianas",
            "Oficinas",
            "Comercios pequeños",
          ]}
        />

        <ModelCard
          btu="24,000 BTU"
          area="40-60 m²"
          title="Mini Split 24,000 BTU"
          imageSrc="/services/aire-acondicionado.jpg"
          popular={false}
          specs={[
            { label: "Consumo energético", value: "Medio", status: "ok" },
            { label: "Nivel de ruido", value: "Medio", status: "ok" },
            { label: "Potencia", value: "Alta", status: "ok" },
            { label: "Eficiencia", value: "Muy buena", status: "ok" },
            { label: "Instalación", value: "Media", status: "ok" },
          ]}
          idealFor={[
            "Salas grandes",
            "Locales comerciales",
            "Areas comunes",
          ]}
        />

        <ModelCard
          btu="24,000 - 60,000 BTU"
          area="50-100+ m²"
          title="Piso Cielo"
          imageSrc="/services/aire-acondicionado.jpg"
          popular={false}
          specs={[
            { label: "Consumo energético", value: "Alto", status: "bad" },
            { label: "Nivel de ruido", value: "Medio", status: "ok" },
            { label: "Potencia", value: "Alta", status: "ok" },
            { label: "Eficiencia", value: "Excelente", status: "ok" },
            { label: "Instalación", value: "Compleja", status: "bad" },
          ]}
          idealFor={[
            "Salones grandes",
            "Restaurantes",
            "Espacios industriales",
          ]}
        />
      </div>
    </section>
  );
}
