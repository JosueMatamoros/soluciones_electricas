import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import { Zap, DollarSign } from "lucide-react";

function DecisionCard({ title, icon: Icon, items, accent, isDarkMode }) {
  const isInverter = accent === "cyan";

  return (
    <div
      className={[
        "rounded-3xl border p-6",
        isDarkMode
          ? "bg-dark-bg-secondary border-dark-border"
          : isInverter
            ? "bg-blue-50 border-blue-200"
            : "bg-slate-50 border-slate-200",
      ].join(" ")}
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className={[
            "h-11 w-11 rounded-full flex items-center justify-center",
            isInverter
              ? isDarkMode
                ? "bg-cyan-500/15 text-cyan-300"
                : "bg-cyan-100 text-cyan-600"
              : isDarkMode
                ? "bg-white/10 text-white/60"
                : "bg-slate-100 text-slate-600",
          ].join(" ")}
        >
          <Icon className="w-5 h-5" />
        </div>
        <h3 className={`text-xl font-extrabold ${isDarkMode ? "text-dark-text" : "text-slate-900"}`}>
          {title}
        </h3>
      </div>

      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span
              className={[
                "h-2.5 w-2.5 rounded-full shrink-0",
                isInverter
                  ? isDarkMode
                    ? "bg-cyan-400"
                    : "bg-cyan-500"
                  : isDarkMode
                    ? "bg-white"
                    : "bg-slate-500",
              ].join(" ")}
            />
            <span className={`text-sm leading-5 ${isDarkMode ? "text-dark-text-secondary" : "text-slate-700"}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default function AirConditioningDecisionHelper() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  const inverter = t("services.detail.climatizacion.decision.inverter", { returnObjects: true });
  const conventional = t("services.detail.climatizacion.decision.conventional", { returnObjects: true });

  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DecisionCard
          title={inverter.title}
          icon={Zap}
          accent="cyan"
          isDarkMode={isDarkMode}
          items={inverter.items}
        />

        <DecisionCard
          title={conventional.title}
          icon={DollarSign}
          accent="slate"
          isDarkMode={isDarkMode}
          items={conventional.items}
        />
      </div>
    </section>
  );
}
